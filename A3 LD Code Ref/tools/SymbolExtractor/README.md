# A3 source metadata extractor

Roslyn parses Git-tracked C# files and emits source-derived types, members, calls and significant operations. All generated files must be outside the source repository. The program does not build the equipment project or load vendor SDK assemblies.

```powershell
dotnet run --project SymbolExtractor.csproj -c Release -- --self-test
dotnet run --project SymbolExtractor.csproj -c Release -- --source D:\QA\Separate-A3-ReadOnly-Clone --out D:\QA\Metadata\source-model.json
```

The tool references the Roslyn assemblies installed with the selected .NET SDK. `NuGet.config` clears remote package sources. No original repository project restore, build, executable, controller, compiler or binary SDK is invoked.

The output records:

- Full original file SHA-256, Git commit, source path, line count and parser diagnostics.
- Types, inheritance syntax and partial-compilation symbol information.
- Explicit methods, constructors, operators, local functions, properties, accessors, fields, events, enum members and delegates.
- Calls and object construction, including exact source lines, caller symbol, target symbol and candidate bindings.
- If/else, loops, switch/case, try/catch/finally, return/throw, await, assignment, resource and task-related source operations.
- Existing XML documentation and disabled conditional-compilation regions.

`resolution=resolved` means Roslyn bound a symbol in this documentation-only partial compilation. It is **not** proof of a runtime call target. The compilation combines all source files with .NET runtime references; WPF, original project compiler settings and vendor libraries are not reconstructed. Unresolved and candidate calls remain explicitly classified. Virtual/interface/delegate dispatch is marked, implicit constructors are distinguished, and reflection, XAML binding and runtime configuration need separate analysis.

Line ranges are original source ranges. Documentation annotations must not renumber original source references. Every extraction checks source HEAD, tracked Git status and all parsed file byte hashes again after writing metadata.

Local function IDs include the declaring source path and syntax span. Equal local signatures in separate containing methods therefore remain separate in declarations, call targets, caller IDs and operation ownership. The self-test includes this collision regression as well as binding, members, control operations and source range checks.
