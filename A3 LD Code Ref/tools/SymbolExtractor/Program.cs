using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;

internal static class Program
{
    private const string Version = "1.0.1";
    private static readonly JsonSerializerOptions Json = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        // The complete syntax model is intentionally compact; a pretty 100MB+ copy is needlessly expensive to publish or index.
        WriteIndented = false,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
    };
    private static readonly SymbolDisplayFormat SymbolFormat = new(
        globalNamespaceStyle: SymbolDisplayGlobalNamespaceStyle.Omitted,
        typeQualificationStyle: SymbolDisplayTypeQualificationStyle.NameAndContainingTypesAndNamespaces,
        genericsOptions: SymbolDisplayGenericsOptions.IncludeTypeParameters,
        memberOptions: SymbolDisplayMemberOptions.IncludeContainingType | SymbolDisplayMemberOptions.IncludeParameters |
                       SymbolDisplayMemberOptions.IncludeType | SymbolDisplayMemberOptions.IncludeExplicitInterface,
        parameterOptions: SymbolDisplayParameterOptions.IncludeType | SymbolDisplayParameterOptions.IncludeParamsRefOut,
        miscellaneousOptions: SymbolDisplayMiscellaneousOptions.UseSpecialTypes | SymbolDisplayMiscellaneousOptions.IncludeNullableReferenceTypeModifier);

    private static async Task<int> Main(string[] args)
    {
        try
        {
            string? Arg(string name) => Array.IndexOf(args, name) is var at && at >= 0 && at + 1 < args.Length ? args[at + 1] : null;
            if (args.Contains("--self-test")) { SelfTest(); return 0; }
            string source = Path.GetFullPath(Arg("--source") ?? throw new ArgumentException("--source repository path is required"));
            string output = Path.GetFullPath(Arg("--out") ?? throw new ArgumentException("--out JSON path is required"));
            if (output.StartsWith(Path.TrimEndingDirectorySeparator(source) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
                throw new ArgumentException("Metadata output must be outside the read-only source repository.");
            var tracked = Git(source, "ls-files", "-z").Split('\0', StringSplitOptions.RemoveEmptyEntries);
            string commit = Git(source, "rev-parse", "HEAD").Trim();
            string before = Git(source, "status", "--porcelain=v1", "--untracked-files=no");
            var input = tracked.Where(path => path.EndsWith(".cs", StringComparison.OrdinalIgnoreCase)).Order(StringComparer.Ordinal).ToArray();
            var parse = new CSharpParseOptions(LanguageVersion.Preview, DocumentationMode.Parse, SourceCodeKind.Regular);
            var files = new List<InputFile>();
            foreach (string relative in input)
            {
                string full = SafeChild(source, relative);
                byte[] bytes = await File.ReadAllBytesAsync(full);
                var text = SourceText.From(new MemoryStream(bytes), encoding: null, canBeEmbedded: false);
                var tree = CSharpSyntaxTree.ParseText(text, parse, relative);
                files.Add(new(relative, Convert.ToHexString(SHA256.HashData(bytes)).ToLowerInvariant(), bytes.LongLength, text, tree));
            }
            Console.WriteLine($"Parsed {files.Count} Git-tracked C# source files; creating metadata-only compilation.");
            var projects = tracked.Where(path => path.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase)).Select(relative => new
            {
                path = relative,
                implicitUsings = System.Xml.Linq.XDocument.Load(SafeChild(source, relative)).Descendants().Any(element => element.Name.LocalName == "ImplicitUsings" && element.Value.Trim().Equals("enable", StringComparison.OrdinalIgnoreCase))
            }).ToArray();
            bool synthesizeStandardImplicitUsings = projects.Length > 0 && projects.All(project => project.implicitUsings);
            IEnumerable<SyntaxTree> compilationTrees = files.Select(file => file.Tree);
            if (synthesizeStandardImplicitUsings) compilationTrees = compilationTrees.Append(CSharpSyntaxTree.ParseText(
                "global using System; global using System.Collections.Generic; global using System.IO; global using System.Linq; global using System.Net.Http; global using System.Threading; global using System.Threading.Tasks;",
                parse, "__documentation_only__/StandardImplicitUsings.g.cs"));
            var compilation = CSharpCompilation.Create("A3DocumentationSyntaxSnapshot", compilationTrees, RuntimeReferences(),
                new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary, allowUnsafe: true, concurrentBuild: true, nullableContextOptions: NullableContextOptions.Enable));
            var models = new List<FileModel>();
            foreach (var file in files)
            {
                var semantic = compilation.GetSemanticModel(file.Tree, ignoreAccessibility: true);
                models.Add(Extract(file, semantic));
                if (models.Count % 20 == 0) Console.WriteLine($"Extracted {models.Count}/{files.Count} files");
            }
            var validation = Validate(models, files);
            var diagnostics = compilation.GetDiagnostics();
            var resolution = models.SelectMany(file => file.Calls).GroupBy(call => call.Resolution).ToDictionary(group => group.Key, group => group.Count());
            var result = new
            {
                schemaVersion = "a3-code-model/1.0",
                generatorVersion = Version,
                sourceRepository = "https://github.com/kjuws10-rgb/A3Drilling.git",
                sourceCommit = commit,
                branch = Git(source, "branch", "--show-current").Trim(),
                analysisScope = new
                {
                    syntax = "All Git-tracked C# files parsed with Roslyn; inactive conditional-compilation branches are reported separately as disabled text.",
                    semantic = "One metadata-only compilation with .NET runtime reference assemblies. WPF, project-specific build settings and vendor SDK references are not loaded. This is not an equipment build or execution.",
                    calls = "resolved means a symbol binding in this partial compilation, not proof of a runtime implementation. Virtual/interface/delegate/reflection/XAML event routing may require runtime/configuration analysis.",
                    sourceWrites = false,
                    vendorAssembliesLoaded = false,
                    compilationErrorsAreDocumentationLimitations = true,
                    standardImplicitUsingsSynthesized = synthesizeStandardImplicitUsings,
                    implicitUsingEvidence = projects,
                    projectBoundaries = "Source declarations are combined into one compilation. Project-reference accessibility and exact target-framework overload selection are not build-verified."
                },
                summary = new
                {
                    trackedFiles = tracked.Length,
                    csharpFiles = models.Count,
                    sourceLines = models.Sum(file => file.LineCount),
                    types = models.Sum(file => file.Types.Count),
                    members = models.Sum(file => file.Members.Count),
                    calls = models.Sum(file => file.Calls.Count),
                    operations = models.Sum(file => file.Operations.Count),
                    callResolution = resolution,
                    compilationDiagnostics = diagnostics.GroupBy(d => d.Severity.ToString()).ToDictionary(group => group.Key, group => group.Count()),
                    diagnosticCodes = diagnostics.GroupBy(d => d.Id).OrderByDescending(group => group.Count()).Take(30).Select(group => new { code = group.Key, count = group.Count() }).ToArray()
                },
                files = models,
                validation
            };
            Directory.CreateDirectory(Path.GetDirectoryName(output)!);
            string next = output + ".next";
            await File.WriteAllTextAsync(next, JsonSerializer.Serialize(result, Json), new UTF8Encoding(false));
            File.Move(next, output, true);
            string after = Git(source, "status", "--porcelain=v1", "--untracked-files=no");
            string afterCommit = Git(source, "rev-parse", "HEAD").Trim();
            if (before != after || commit != afterCommit) throw new InvalidOperationException("Read-only source verification failed: Git status or HEAD changed.");
            foreach (var file in files)
                if (Convert.ToHexString(SHA256.HashData(await File.ReadAllBytesAsync(SafeChild(source, file.Path)))).ToLowerInvariant() != file.Sha256)
                    throw new InvalidOperationException("Read-only source hash changed: " + file.Path);
            await File.WriteAllTextAsync(Path.ChangeExtension(output, ".verification.json"), JsonSerializer.Serialize(new
            {
                sourceCommit = commit,
                originalTrackedStatusPreserved = before == after,
                originalHeadPreserved = commit == afterCommit,
                allCSharpByteHashesPreserved = true,
                sourcePushUrl = Git(source, "remote", "get-url", "--push", "origin").Trim(),
                validation,
                outputBytes = new FileInfo(output).Length,
                outputSha256 = Convert.ToHexString(SHA256.HashData(await File.ReadAllBytesAsync(output))).ToLowerInvariant()
            }, Json), new UTF8Encoding(false));
            Console.WriteLine(JsonSerializer.Serialize(result.summary, Json));
            Console.WriteLine($"Wrote {output}; source HEAD, tracked status and {files.Count} file hashes unchanged.");
            return 0;
        }
        catch (Exception e) { Console.Error.WriteLine(e); return 1; }
    }

    private static FileModel Extract(InputFile input, SemanticModel semantic)
    {
        var root = input.Tree.GetCompilationUnitRoot();
        var types = root.DescendantNodes().Where(node => node is BaseTypeDeclarationSyntax or DelegateDeclarationSyntax).Select(node => Type(node, semantic)).ToList();
        var members = new List<MemberModel>();
        foreach (var node in root.DescendantNodes())
        {
            switch (node)
            {
                case BaseMethodDeclarationSyntax or PropertyDeclarationSyntax or IndexerDeclarationSyntax or EventDeclarationSyntax or DelegateDeclarationSyntax or LocalFunctionStatementSyntax or AccessorDeclarationSyntax:
                    members.Add(Member(node, semantic)); break;
                case FieldDeclarationSyntax field:
                    foreach (var variable in field.Declaration.Variables) members.Add(Member(variable, semantic, field)); break;
                case EventFieldDeclarationSyntax field:
                    foreach (var variable in field.Declaration.Variables) members.Add(Member(variable, semantic, field)); break;
                case EnumMemberDeclarationSyntax value:
                    members.Add(Member(value, semantic)); break;
            }
        }
        var calls = new List<CallModel>();
        var operations = new List<OperationModel>();
        foreach (var node in root.DescendantNodes())
        {
            if (node is InvocationExpressionSyntax or ObjectCreationExpressionSyntax or ImplicitObjectCreationExpressionSyntax)
            {
                var call = Call(node, semantic); calls.Add(call);
                operations.Add(new("call", Line(node), End(node), call.CallerMemberId, Short(node.ToString()), call.Expression,
                    call.Resolution, call.TargetSymbolId, ClassificationHint(call.Expression), "syntax-name hint; exact symbol binding is reported separately"));
            }
            string? kind = node switch
            {
                IfStatementSyntax => "if",
                ElseClauseSyntax => "else",
                ForStatementSyntax => "for",
                ForEachStatementSyntax or ForEachVariableStatementSyntax => "foreach",
                WhileStatementSyntax => "while",
                DoStatementSyntax => "do",
                SwitchStatementSyntax => "switch",
                SwitchExpressionSyntax => "switch-expression",
                SwitchLabelSyntax => "case",
                TryStatementSyntax => "try",
                CatchClauseSyntax => "catch",
                FinallyClauseSyntax => "finally",
                ReturnStatementSyntax => "return",
                ThrowStatementSyntax or ThrowExpressionSyntax => "throw",
                AwaitExpressionSyntax => "await",
                AssignmentExpressionSyntax assignment when assignment.IsKind(SyntaxKind.AddAssignmentExpression) || assignment.IsKind(SyntaxKind.SubtractAssignmentExpression) => "compound-assignment-or-event-subscription",
                AssignmentExpressionSyntax => "assignment",
                LocalDeclarationStatementSyntax declaration when declaration.UsingKeyword.RawKind != 0 => "using-declaration",
                LocalDeclarationStatementSyntax => "local-declaration",
                VariableDeclaratorSyntax variable when variable.Initializer is not null => "variable-initializer",
                LockStatementSyntax => "lock",
                UsingStatementSyntax => "using",
                YieldStatementSyntax => "yield",
                BreakStatementSyntax => "break",
                ContinueStatementSyntax => "continue",
                GotoStatementSyntax => "goto",
                ConditionalExpressionSyntax => "conditional-expression",
                CheckedStatementSyntax => "checked",
                UnsafeStatementSyntax => "unsafe",
                _ => null
            };
            if (kind is not null)
                operations.Add(new(kind, Line(node), End(node), Caller(node, semantic), OperationText(node), Detail(node)));
        }
        return new(input.Path, input.Sha256, input.Bytes, input.Text.Lines.Count,
            root.Usings.Select(use => new UsingModel(use.Name?.ToString() ?? "", use.Alias?.Name.ToString(), use.StaticKeyword.RawKind != 0, Line(use))).ToList(),
            types, members, calls, operations.OrderBy(op => op.StartLine).ThenBy(op => op.Kind, StringComparer.Ordinal).ToList(),
            input.Tree.GetDiagnostics().Select(d => new DiagnosticModel(d.Id, d.Severity.ToString(), d.Location.IsInSource ? d.Location.GetLineSpan().StartLinePosition.Line + 1 : null, Short(d.GetMessage(), 500))).ToList(),
            root.DescendantTrivia(descendIntoTrivia: true).Where(t => t.IsKind(SyntaxKind.DisabledTextTrivia)).Select(t => new DisabledRegion(t.GetLocation().GetLineSpan().StartLinePosition.Line + 1, t.GetLocation().GetLineSpan().EndLinePosition.Line + 1, t.Span.Length)).ToList());
    }

    private static TypeModel Type(SyntaxNode node, SemanticModel semantic)
    {
        var symbol = Declared(node, semantic) as INamedTypeSymbol;
        string name = node switch { BaseTypeDeclarationSyntax type => type.Identifier.ValueText, DelegateDeclarationSyntax d => d.Identifier.ValueText, _ => "?" };
        var parent = node.Ancestors().FirstOrDefault(n => n is BaseTypeDeclarationSyntax);
        var baseSyntax = node is BaseTypeDeclarationSyntax typeNode ? typeNode.BaseList?.Types.Select(t => t.Type.ToString()).ToArray() ?? [] : [];
        return new(Id(symbol, node), name, node.Kind().ToString(), Namespace(node, symbol), parent is null ? null : Id(Declared(parent, semantic), parent),
            symbol?.DeclaredAccessibility.ToString(), Modifiers(node), Line(node), End(node), Declaration(node),
            baseSyntax, symbol?.BaseType is { } b ? Display(b) : null,
            symbol?.Interfaces.Select(Display).ToArray() ?? [], XmlDoc(node), symbol?.TypeParameters.Select(t => t.Name).ToArray() ?? [],
            symbol is not null && !symbol.TypeKind.Equals(TypeKind.Error));
    }

    private static MemberModel Member(SyntaxNode node, SemanticModel semantic, SyntaxNode? declaration = null)
    {
        var symbol = Declared(node, semantic);
        var original = declaration ?? node;
        var parentType = node.Ancestors().FirstOrDefault(n => n is BaseTypeDeclarationSyntax or DelegateDeclarationSyntax);
        string name = symbol?.Name ?? node switch
        {
            VariableDeclaratorSyntax v => v.Identifier.ValueText,
            BaseMethodDeclarationSyntax m => m switch { MethodDeclarationSyntax method => method.Identifier.ValueText, ConstructorDeclarationSyntax c => c.Identifier.ValueText, DestructorDeclarationSyntax d => "~" + d.Identifier.ValueText, OperatorDeclarationSyntax op => "operator " + op.OperatorToken.Text, ConversionOperatorDeclarationSyntax co => co.ImplicitOrExplicitKeyword.Text + " operator " + co.Type, _ => m.Kind().ToString() },
            PropertyDeclarationSyntax p => p.Identifier.ValueText,
            EventDeclarationSyntax ev => ev.Identifier.ValueText,
            EnumMemberDeclarationSyntax ev => ev.Identifier.ValueText,
            LocalFunctionStatementSyntax lf => lf.Identifier.ValueText,
            AccessorDeclarationSyntax a => a.Keyword.ValueText,
            _ => node.Kind().ToString()
        };
        IEnumerable<IParameterSymbol> parameters = symbol switch { IMethodSymbol method => method.Parameters, IPropertySymbol property => property.Parameters, INamedTypeSymbol d when d.TypeKind == TypeKind.Delegate => d.DelegateInvokeMethod?.Parameters ?? [], _ => [] };
        string? returnType = symbol switch { IMethodSymbol method => Display(method.ReturnType), IPropertySymbol property => Display(property.Type), IFieldSymbol field => Display(field.Type), IEventSymbol ev => Display(ev.Type), _ => null };
        string[] flags = symbol is IMethodSymbol methodSymbol ? new[]
        {
            methodSymbol.IsAsync ? "async" : null, methodSymbol.IsStatic ? "static" : null, methodSymbol.IsVirtual ? "virtual" : null,
            methodSymbol.IsOverride ? "override" : null, methodSymbol.IsAbstract ? "abstract" : null, methodSymbol.IsExtensionMethod ? "extension" : null,
            methodSymbol.MethodKind.ToString()
        }.Where(s => s is not null).Select(s => s!).ToArray() : [];
        return new(Id(symbol, node), name, node is VariableDeclaratorSyntax ? original.Kind().ToString() : node.Kind().ToString(),
            symbol is null ? Declaration(original) : Display(symbol), Namespace(node, symbol), parentType is null ? null : Id(Declared(parentType, semantic), parentType),
            symbol?.DeclaredAccessibility.ToString(), Modifiers(original), flags, Line(original), End(original), Line(node), End(node), returnType,
            parameters.Select(parameter => new ParameterModel(parameter.Name, Display(parameter.Type), parameter.RefKind.ToString(), parameter.IsOptional,
                parameter.IsParams, parameter.HasExplicitDefaultValue ? Literal(parameter.ExplicitDefaultValue) : null)).ToArray(),
            XmlDoc(original), Declaration(original), symbol is not null,
            node.DescendantNodes().OfType<StatementSyntax>().GroupBy(statement => statement.Kind().ToString()).ToDictionary(group => group.Key, group => group.Count()));
    }

    private static CallModel Call(SyntaxNode node, SemanticModel semantic)
    {
        var info = semantic.GetSymbolInfo(node);
        var symbol = info.Symbol;
        string state = symbol is not null ? "resolved" : info.CandidateSymbols.Length > 0 ? "candidate" : "unresolved";
        var original = symbol?.OriginalDefinition;
        var sourceLocation = original?.Locations.FirstOrDefault(location => location.IsInSource);
        var args = node switch { InvocationExpressionSyntax invocation => invocation.ArgumentList.Arguments, ObjectCreationExpressionSyntax creation => creation.ArgumentList?.Arguments ?? default, ImplicitObjectCreationExpressionSyntax creation => creation.ArgumentList.Arguments, _ => default };
        string expression = node switch { InvocationExpressionSyntax invocation => invocation.Expression.ToString(), ObjectCreationExpressionSyntax creation => "new " + creation.Type, ImplicitObjectCreationExpressionSyntax => "new", _ => node.Kind().ToString() };
        var method = symbol as IMethodSymbol;
        return new(Caller(node, semantic), Line(node), End(node), node.Kind().ToString(), Short(expression, 350), Short(node.ToString(), 500),
            args.Select(arg => Short(arg.ToString(), 180)).ToArray(), state, info.CandidateReason.ToString(),
            symbol is null ? null : Id(symbol), symbol is null ? null : Display(symbol),
            sourceLocation?.SourceTree?.FilePath, sourceLocation is null ? null : sourceLocation.GetLineSpan().StartLinePosition.Line + 1,
            symbol is null ? "unknown" : sourceLocation is null ? "runtime-reference-or-external" : "source",
            symbol?.Kind.ToString(), symbol?.IsImplicitlyDeclared == true,
            method?.IsVirtual == true || method?.IsOverride == true || method?.ContainingType.TypeKind == TypeKind.Interface || method?.MethodKind == MethodKind.DelegateInvoke,
            node.ExpressionIsDynamic(semantic),
            info.CandidateSymbols.Select(candidate => new CandidateModel(Id(candidate), Display(candidate), candidate.Locations.FirstOrDefault(l => l.IsInSource)?.SourceTree?.FilePath)).ToArray());
    }

    private static string? Caller(SyntaxNode node, SemanticModel semantic)
    {
        var owner = node.Ancestors().FirstOrDefault(parent => parent is BaseMethodDeclarationSyntax or LocalFunctionStatementSyntax or AccessorDeclarationSyntax or PropertyDeclarationSyntax or EventDeclarationSyntax or FieldDeclarationSyntax or EventFieldDeclarationSyntax or EnumMemberDeclarationSyntax);
        if (owner is null) return null;
        if (owner is BaseFieldDeclarationSyntax field) owner = field.Declaration.Variables.First();
        return Id(Declared(owner, semantic), owner);
    }

    private static ISymbol? Declared(SyntaxNode node, SemanticModel semantic)
    {
        try { return semantic.GetDeclaredSymbol(node); }
        catch (ArgumentException) { return null; }
    }
    private static string Id(ISymbol? symbol, SyntaxNode? fallback = null)
    {
        if (symbol is not null)
        {
            var original = symbol.OriginalDefinition;
            string id = symbol.Kind + ":" + Display(original);
            // Roslyn's display string omits the enclosing method for local functions.
            // Equal names/signatures in unrelated scopes must never merge their callers.
            if (original is IMethodSymbol { MethodKind: MethodKind.LocalFunction })
            {
                var declaration = original.DeclaringSyntaxReferences.FirstOrDefault();
                var location = original.Locations.FirstOrDefault(candidate => candidate.IsInSource);
                string? path = declaration?.SyntaxTree.FilePath ?? location?.SourceTree?.FilePath;
                int? position = declaration?.Span.Start ?? location?.SourceSpan.Start;
                if (path is not null && position is not null) id += "@" + path.Replace('\\', '/') + ":" + position.Value;
                else if (fallback is not null) id += "@" + fallback.SyntaxTree.FilePath.Replace('\\', '/') + ":" + fallback.SpanStart;
                else throw new InvalidDataException("A local function symbol has no source identity.");
            }
            return id;
        }
        return fallback is null ? "unknown" : $"syntax:{fallback.SyntaxTree.FilePath}:{Line(fallback)}:{fallback.Kind()}";
    }
    private static string Display(ISymbol symbol) => symbol.ToDisplayString(SymbolFormat);
    private static string Namespace(SyntaxNode node, ISymbol? symbol) => symbol?.ContainingNamespace is { IsGlobalNamespace: false } ns ? ns.ToDisplayString() :
        string.Join(".", node.Ancestors().OfType<BaseNamespaceDeclarationSyntax>().Reverse().Select(ns => ns.Name.ToString()));
    private static int Line(SyntaxNode node) => node.GetLocation().GetLineSpan().StartLinePosition.Line + 1;
    private static int End(SyntaxNode node) => node.GetLocation().GetLineSpan().EndLinePosition.Line + 1;
    private static string Short(string text, int length = 220)
    {
        var value = Regex.Replace(text, @"\s+", " ").Trim();
        return value.Length > length ? value[..length] + "…" : value;
    }
    private static string Literal(object? value) => value switch { null => "null", string text => JsonSerializer.Serialize(text), bool boolean => boolean ? "true" : "false", _ => Convert.ToString(value, System.Globalization.CultureInfo.InvariantCulture) ?? "" };
    private static string XmlDoc(SyntaxNode node) => string.Concat(node.GetLeadingTrivia().Where(trivia => trivia.IsKind(SyntaxKind.SingleLineDocumentationCommentTrivia) || trivia.IsKind(SyntaxKind.MultiLineDocumentationCommentTrivia)).Select(trivia => trivia.ToFullString())).Trim();
    private static string[] Modifiers(SyntaxNode node) => node.ChildTokens().Where(token => SyntaxFacts.IsKeywordKind(token.Kind()) && token.Kind() is not SyntaxKind.VoidKeyword and not SyntaxKind.ClassKeyword and not SyntaxKind.StructKeyword and not SyntaxKind.InterfaceKeyword and not SyntaxKind.EnumKeyword and not SyntaxKind.DelegateKeyword).Select(token => token.Text).ToArray();
    private static string Declaration(SyntaxNode node)
    {
        var firstBody = node.ChildNodes().FirstOrDefault(child => child is BlockSyntax or ArrowExpressionClauseSyntax or AccessorListSyntax);
        string text = firstBody is null ? node.ToString() : node.ToString()[..Math.Clamp(firstBody.SpanStart - node.SpanStart, 0, node.ToString().Length)];
        if (node is BaseTypeDeclarationSyntax type) text = type.Identifier.Text + (type.BaseList?.ToString() ?? "");
        return Short(text, 1500);
    }
    private static string OperationText(SyntaxNode node) => node switch
    {
        IfStatementSyntax statement => "if (" + Short(statement.Condition.ToString()) + ")",
        ElseClauseSyntax => "else",
        ForStatementSyntax statement => $"for ({Short(statement.Declaration?.ToString() ?? string.Join(',', statement.Initializers))}; {Short(statement.Condition?.ToString() ?? "")}; {Short(string.Join(',', statement.Incrementors))})",
        ForEachStatementSyntax statement => $"foreach ({statement.Type} {statement.Identifier} in {Short(statement.Expression.ToString())})",
        WhileStatementSyntax statement => "while (" + Short(statement.Condition.ToString()) + ")",
        DoStatementSyntax statement => "do ... while (" + Short(statement.Condition.ToString()) + ")",
        SwitchStatementSyntax statement => "switch (" + Short(statement.Expression.ToString()) + ")",
        TryStatementSyntax => "try",
        CatchClauseSyntax statement => "catch " + Short(statement.Declaration?.ToString() ?? "") + (statement.Filter is null ? "" : " " + Short(statement.Filter.ToString())),
        FinallyClauseSyntax => "finally",
        LockStatementSyntax statement => "lock (" + Short(statement.Expression.ToString()) + ")",
        UsingStatementSyntax statement => "using (" + Short(statement.Declaration?.ToString() ?? statement.Expression?.ToString() ?? "") + ")",
        _ => Short(node.ToString(), 300)
    };
    private static string? Detail(SyntaxNode node) => node switch
    {
        AssignmentExpressionSyntax assignment => "target=" + Short(assignment.Left.ToString()) + "; value=" + Short(assignment.Right.ToString()),
        VariableDeclaratorSyntax variable => "name=" + variable.Identifier.ValueText + "; initializer=" + Short(variable.Initializer?.Value.ToString() ?? ""),
        ReturnStatementSyntax statement => statement.Expression is null ? "void return" : "value=" + Short(statement.Expression.ToString()),
        ThrowStatementSyntax statement => statement.Expression is null ? "rethrow current exception" : "exception=" + Short(statement.Expression.ToString()),
        AwaitExpressionSyntax awaitExpression => "awaited=" + Short(awaitExpression.Expression.ToString()),
        SwitchStatementSyntax statement => string.Join(" | ", statement.Sections.SelectMany(section => section.Labels).Select(label => Short(label.ToString(), 100))),
        _ => null
    };
    private static string? ClassificationHint(string expression)
    {
        var name = expression.ToLowerInvariant();
        if (name.Contains("throwifcancellationrequested") || name.Contains("cancellation")) return "cancellation-shaped-name";
        if (name.Contains("dispatcher") || name.Contains("begininvoke")) return "ui-dispatch-shaped-name";
        if (name.Contains("log")) return "logging-shaped-name";
        if (name.Contains("save") || name.Contains("serialize")) return "save-or-serialization-shaped-name";
        if (name.Contains("send") || name.Contains("transmit")) return "send-shaped-name";
        if (name.Contains("write")) return "write-shaped-name";
        if (name.Contains("read") || name.Contains("load")) return "read-shaped-name";
        if (name.Contains("move") || name.Contains("motion")) return "motion-shaped-name";
        if (name.Contains("task.run") || name.Contains("startnew")) return "task-launch-shaped-name";
        if (name.Contains("dispose") || name.Contains("close")) return "resource-cleanup-shaped-name";
        return null;
    }

    private static object Validate(IReadOnlyList<FileModel> models, IReadOnlyList<InputFile> files)
    {
        int ranges = 0;
        foreach (var file in models)
        {
            foreach (var range in file.Types.Select(type => (type.StartLine, type.EndLine)).Concat(file.Members.Select(member => (member.StartLine, member.EndLine)))
                         .Concat(file.Calls.Select(call => (call.StartLine, call.EndLine))).Concat(file.Operations.Select(operation => (operation.StartLine, operation.EndLine))))
            {
                if (range.Item1 < 1 || range.Item2 < range.Item1 || range.Item2 > file.LineCount)
                    throw new InvalidDataException($"Invalid source line range: {file.Path}:{range.Item1}-{range.Item2}/{file.LineCount}");
                ranges++;
            }
            var treeRoot = files.First(input => input.Path == file.Path).Tree.GetRoot();
            int expectedTypes = treeRoot.DescendantNodes().Count(node => node is BaseTypeDeclarationSyntax or DelegateDeclarationSyntax);
            int expectedCalls = treeRoot.DescendantNodes().Count(node => node is InvocationExpressionSyntax or ObjectCreationExpressionSyntax or ImplicitObjectCreationExpressionSyntax);
            if (expectedTypes != file.Types.Count || expectedCalls != file.Calls.Count) throw new InvalidDataException("AST coverage mismatch: " + file.Path);
        }
        var locals = models.SelectMany(model => model.Members).Where(member => member.Kind == nameof(SyntaxKind.LocalFunctionStatement)).ToArray();
        if (locals.Select(local => local.Id).Distinct(StringComparer.Ordinal).Count() != locals.Length)
            throw new InvalidDataException("Local function source IDs are not unique across scopes.");
        return new { allFileHashesRecorded = true, sourceRangesChecked = ranges, everyRangeWithinPhysicalFile = true, allTypeAndCallNodesCovered = true,
            localFunctionCount = locals.Length, localFunctionSourceIdsUnique = true, parsedCSharpFiles = models.Count };
    }
    private static IEnumerable<MetadataReference> RuntimeReferences() => ((string?)AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES") ?? "")
        .Split(Path.PathSeparator, StringSplitOptions.RemoveEmptyEntries).Where(path => !Path.GetFileName(path).StartsWith("Microsoft.CodeAnalysis", StringComparison.OrdinalIgnoreCase))
        .Distinct(StringComparer.OrdinalIgnoreCase).Select(path => MetadataReference.CreateFromFile(path));
    private static string SafeChild(string root, string relative)
    {
        if (Path.IsPathRooted(relative) || relative.Replace('\\', '/').Split('/').Any(part => part is ".." or "." or "")) throw new UnauthorizedAccessException("Unsafe Git-tracked path.");
        var path = Path.GetFullPath(Path.Combine(root, relative.Replace('/', Path.DirectorySeparatorChar)));
        if (!path.StartsWith(Path.TrimEndingDirectorySeparator(root) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase)) throw new UnauthorizedAccessException("Path escapes source root.");
        for (var node = new FileInfo(path) as FileSystemInfo; node is not null; node = node is FileInfo info ? info.Directory : ((DirectoryInfo)node).Parent)
            if ((node.Attributes & FileAttributes.ReparsePoint) != 0) throw new UnauthorizedAccessException("Source reparse points are not followed.");
        return path;
    }
    private static string Git(string root, params string[] arguments)
    {
        var info = new ProcessStartInfo("git") { UseShellExecute = false, CreateNoWindow = true, RedirectStandardOutput = true, RedirectStandardError = true, StandardOutputEncoding = Encoding.UTF8 };
        info.ArgumentList.Add("-C"); info.ArgumentList.Add(root);
        foreach (string value in arguments) info.ArgumentList.Add(value);
        info.Environment["GIT_OPTIONAL_LOCKS"] = "0"; info.Environment["GIT_TERMINAL_PROMPT"] = "0";
        using var process = Process.Start(info) ?? throw new IOException("Git could not start.");
        string output = process.StandardOutput.ReadToEnd(), error = process.StandardError.ReadToEnd(); process.WaitForExit();
        if (process.ExitCode != 0) throw new IOException("Read-only Git command failed: " + error);
        return output;
    }
    private static void SelfTest()
    {
        const string source = "namespace Fixture; interface IProbe { int Read(int n); } class Probe : IProbe { public int Read(int n) { if(n < 0) throw new System.ArgumentOutOfRangeException(nameof(n)); for(int i=0;i<n;i++) n += 1; return Helper(n); } static int Helper(int value) => value + 1; public event System.Action? Changed; public int Value { get; set; } public void Raise() { Changed?.Invoke(); } }";
        var text = SourceText.From(source); var tree = CSharpSyntaxTree.ParseText(text, path: "Fixture.cs");
        var compilation = CSharpCompilation.Create("Fixture", [tree], RuntimeReferences(), new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        var input = new InputFile("Fixture.cs", Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(source))).ToLowerInvariant(), Encoding.UTF8.GetByteCount(source), text, tree);
        var model = Extract(input, compilation.GetSemanticModel(tree));
        Check(model.Types.Count == 2, "two source type declarations");
        Check(model.Members.Any(member => member.Name == "Read" && member.Parameters.Any(parameter => parameter.Name == "n")), "method and parameter coverage");
        Check(model.Members.Any(member => member.Name == "Value") && model.Members.Any(member => member.Name == "get_Value"), "property and accessor coverage");
        Check(model.Members.Any(member => member.Name == "Changed"), "event field coverage");
        Check(model.Calls.Any(call => call.Expression == "Helper" && call.Resolution == "resolved" && call.TargetLocation == "source"), "source method binding");
        Check(model.Operations.Any(operation => operation.Kind == "if") && model.Operations.Any(operation => operation.Kind == "for") && model.Operations.Any(operation => operation.Kind == "throw"), "control flow coverage");
        Check(model.Calls.Any(call => call.RuntimeDispatchPotential), "delegate dispatch is not treated as a fixed runtime implementation");
        _ = Validate([model], [input]);
        Console.WriteLine("PASS all physical ranges, type and call AST coverage");
        const string localSource = "class ScopeFixture { public int First(){ int Read(int n){ return n; } return Read(1); } public int Second(){ int Read(int n){ return n+1; } return Read(2); } }";
        var localText = SourceText.From(localSource); var localTree = CSharpSyntaxTree.ParseText(localText, path: "ScopeFixture.cs");
        var localCompilation = CSharpCompilation.Create("ScopeFixture", [localTree], RuntimeReferences(), new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        var localInput = new InputFile("ScopeFixture.cs", Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(localSource))).ToLowerInvariant(), Encoding.UTF8.GetByteCount(localSource), localText, localTree);
        var localModel = Extract(localInput, localCompilation.GetSemanticModel(localTree));
        var localFunctions = localModel.Members.Where(member => member.Kind == nameof(SyntaxKind.LocalFunctionStatement)).ToArray();
        Check(localFunctions.Length == 2 && localFunctions.Select(member => member.Id).Distinct().Count() == 2, "same local signature in two containing methods receives distinct source IDs");
        var readCalls = localModel.Calls.Where(call => call.Expression == "Read").OrderBy(call => call.StartLine).ToArray();
        Check(readCalls.Length == 2 && readCalls.Select(call => call.TargetSymbolId).Distinct().Count() == 2 && readCalls.All(call => localFunctions.Any(member => member.Id == call.TargetSymbolId)), "local call target IDs match the correct source declarations");
        Check(localFunctions.All(member => localModel.Operations.Any(operation => operation.MemberId == member.Id)), "local operation ownership uses the same disambiguated IDs");
        _ = Validate([localModel], [localInput]);
    }
    private static void Check(bool ok, string message) { if (!ok) throw new InvalidDataException("SELF TEST FAILED: " + message); Console.WriteLine("PASS " + message); }
}

internal static class SyntaxHelpers
{
    public static bool ExpressionIsDynamic(this SyntaxNode node, SemanticModel semantic)
    {
        var expression = node is InvocationExpressionSyntax invocation ? invocation.Expression : node;
        try { return semantic.GetTypeInfo(expression).Type?.TypeKind == TypeKind.Dynamic; }
        catch (ArgumentException) { return false; }
    }
}

internal sealed record InputFile(string Path, string Sha256, long Bytes, SourceText Text, SyntaxTree Tree);
internal sealed record FileModel(string Path, string Sha256, long Bytes, int LineCount, List<UsingModel> UsingDirectives, List<TypeModel> Types,
    List<MemberModel> Members, List<CallModel> Calls, List<OperationModel> Operations, List<DiagnosticModel> ParseDiagnostics, List<DisabledRegion> DisabledRegions);
internal sealed record UsingModel(string Namespace, string? Alias, bool Static, int Line);
internal sealed record TypeModel(string Id, string Name, string Kind, string Namespace, string? ContainingTypeId, string? Accessibility, string[] Modifiers,
    int StartLine, int EndLine, string Declaration, string[] BaseSyntax, string? ResolvedBaseType, string[] ResolvedInterfaces, string XmlDoc, string[] TypeParameters, bool DeclaredSymbolAvailable);
internal sealed record MemberModel(string Id, string Name, string Kind, string Signature, string Namespace, string? ContainingTypeId, string? Accessibility,
    string[] Modifiers, string[] MethodFlags, int StartLine, int EndLine, int IdentifierStartLine, int IdentifierEndLine, string? ReturnType, ParameterModel[] Parameters,
    string XmlDoc, string Declaration, bool DeclaredSymbolAvailable, Dictionary<string, int> BodyStatementCounts);
internal sealed record ParameterModel(string Name, string Type, string RefKind, bool Optional, bool Params, string? DefaultValue);
internal sealed record CandidateModel(string Id, string Signature, string? SourcePath);
internal sealed record CallModel(string? CallerMemberId, int StartLine, int EndLine, string Kind, string Expression, string Text, string[] Arguments, string Resolution,
    string CandidateReason, string? TargetSymbolId, string? TargetSignature, string? TargetSourcePath, int? TargetSourceLine, string TargetLocation,
    string? TargetSymbolKind, bool TargetIsImplicitlyDeclared, bool RuntimeDispatchPotential, bool DynamicExpression, CandidateModel[] Candidates);
internal sealed record OperationModel(string Kind, int StartLine, int EndLine, string? MemberId, string Text, string? Detail = null, string? Resolution = null,
    string? TargetSymbolId = null, string? CategoryHint = null, string? ClassificationBasis = null);
internal sealed record DiagnosticModel(string Code, string Severity, int? Line, string Message);
internal sealed record DisabledRegion(int StartLine, int EndLine, int Characters);
