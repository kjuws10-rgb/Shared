# Drilling.File/JHMI/CJhmiRecipeFile.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 28764c91d521777b8ee068dd7aaf2d3902ce9fe2 |
| 원본 SHA256 | 83965473a623f54f27fccf5d963e476d696721927341629e26b0a525581bada4 |
| 파일 분류 | code |
| 원본 크기/행 | 70,080 bytes / 1,480 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs) |

## 파일의 역할과 읽는 순서

정의·설정·레시피·결과·스크립트의 파일 입출력과 데이터 형식을 담당합니다. 저장 필드를 통신 송신 필드로 단정하지 않습니다.

![파일 관계도](../../../diagrams/files/53c13c76fd2569cba12d.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CJhmiRecipeFile | ClassDeclaration | 16–1479 | CJhmiRecipeFile: CRecipeFileBase, IRecipeCopyStore |
| ST_SHOT_GROUP_PATTERN_BOUNDS | RecordStructDeclaration | 847–847 | ST_SHOT_GROUP_PATTERN_BOUNDS |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| CellScopedTemplateNames | FieldDeclaration | L19–25 | System.Collections.Generic.HashSet<string> Drilling.File.JHMI.CJhmiRecipeFile.CellScopedTemplateNames |
| FormHeaders | FieldDeclaration | L26–26 | System.Collections.Generic.IReadOnlyList<string> Drilling.File.JHMI.CJhmiRecipeFile.FormHeaders |
| _configRoot | FieldDeclaration | L27–27 | string Drilling.File.JHMI.CJhmiRecipeFile._configRoot |
| _recipeDirectory | FieldDeclaration | L28–28 | string Drilling.File.JHMI.CJhmiRecipeFile._recipeDirectory |
| _logManager | FieldDeclaration | L29–29 | CLogManager Drilling.File.JHMI.CJhmiRecipeFile._logManager |
| _fileOperationLock | FieldDeclaration | L30–30 | System.Threading.SemaphoreSlim Drilling.File.JHMI.CJhmiRecipeFile._fileOperationLock |
| LoadHistory | MethodDeclaration | L33–33 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.File.JHMI.CJhmiRecipeFile.LoadHistory(System.Threading.CancellationToken) |
| RecordSelection | MethodDeclaration | L34–50 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.RecordSelection(string, string, System.Threading.CancellationToken) |
| RecipeName | LocalFunctionStatement | L41–46 | string RecipeName(string) |
| LoadAll | MethodDeclaration | L52–60 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.File.JHMI.CJhmiRecipeFile.LoadAll(System.Threading.CancellationToken) |
| SelectValue | LocalFunctionStatement | L54–57 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> SelectValue() |
| LoadAllCore | MethodDeclaration | L62–89 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.File.JHMI.CJhmiRecipeFile.LoadAllCore(System.Threading.CancellationToken) |
| SelectName | LocalFunctionStatement | L83–86 | string SelectName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| Find | MethodDeclaration | L91–99 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.File.JHMI.CJhmiRecipeFile.Find(string, System.Threading.CancellationToken) |
| SelectValue | LocalFunctionStatement | L93–96 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? SelectValue() |
| FindCore | MethodDeclaration | L101–108 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.FindCore(string, System.Threading.CancellationToken) |
| Save | MethodDeclaration | L110–118 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| SaveCoreCallback | LocalFunctionStatement | L112–115 | void SaveCoreCallback() |
| SaveCore | MethodDeclaration | L120–243 | void Drilling.File.JHMI.CJhmiRecipeFile.SaveCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken, string?, bool) |
| SelectGroupKey | LocalFunctionStatement | L127–130 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectKey | LocalFunctionStatement | L132–135 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| SelectValue | LocalFunctionStatement | L137–140 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| ShouldIncludeItem | LocalFunctionStatement | L143–146 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| ShouldIncludeRecipe | LocalFunctionStatement | L151–154 | bool ShouldIncludeRecipe(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| SelectSortKey | LocalFunctionStatement | L156–159 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| SelectRecipeParameterKey | LocalFunctionStatement | L161–164 | string SelectRecipeParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| ShouldIncludeRecipe2 | LocalFunctionStatement | L178–181 | bool ShouldIncludeRecipe2(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| SelectDisplayOrder | LocalFunctionStatement | L183–186 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| Rename | MethodDeclaration | L245–253 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Rename(string, string, System.Threading.CancellationToken) |
| RenameCoreCallback | LocalFunctionStatement | L247–250 | void RenameCoreCallback() |
| RenameCore | MethodDeclaration | L255–369 | string? Drilling.File.JHMI.CJhmiRecipeFile.RenameCore(string, string, System.Threading.CancellationToken, bool) |
| SelectGroupKey | LocalFunctionStatement | L273–276 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectKey | LocalFunctionStatement | L278–281 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| SelectValue | LocalFunctionStatement | L283–286 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| ShouldIncludeItem | LocalFunctionStatement | L301–304 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| SelectDisplayOrder | LocalFunctionStatement | L306–309 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| MatchesTab | LocalFunctionStatement | L319–322 | bool MatchesTab(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectSortKey | LocalFunctionStatement | L324–327 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectName | LocalFunctionStatement | L329–332 | string SelectName(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| Delete | MethodDeclaration | L371–379 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Delete(string, System.Threading.CancellationToken) |
| DeleteCoreCallback | LocalFunctionStatement | L373–376 | void DeleteCoreCallback() |
| DeleteCore | MethodDeclaration | L381–415 | string? Drilling.File.JHMI.CJhmiRecipeFile.DeleteCore(string, System.Threading.CancellationToken, bool) |
| SelectGroupKey | LocalFunctionStatement | L387–390 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectKey | LocalFunctionStatement | L392–395 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| SelectValue | LocalFunctionStatement | L397–400 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| ExecuteFileOperation | MethodDeclaration | L417–428 | System.Threading.Tasks.Task<T> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<T>(System.Func<T>, System.Threading.CancellationToken) |
| ExecuteFileOperation | MethodDeclaration | L430–441 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) |
| LoadRecipe | MethodDeclaration | L443–590 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.LoadRecipe(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, System.Threading.CancellationToken) |
| SelectGroupKey | LocalFunctionStatement | L453–456 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectKey | LocalFunctionStatement | L458–461 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| SelectValue | LocalFunctionStatement | L463–466 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| IsUse | LocalFunctionStatement | L471–474 | bool IsUse(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| SelectDisplayOrder | LocalFunctionStatement | L476–479 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| BuildRecipe | LocalFunctionStatement | L481–502 | Drilling.Common.Managers.ST_RECIPE_PARAMETER BuildRecipe(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| SelectName | LocalFunctionStatement | L505–508 | string SelectName(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| SelectFormItemGroupKey | LocalFunctionStatement | L510–513 | string SelectFormItemGroupKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| SelectRecipe | LocalFunctionStatement | L515–518 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM SelectRecipe(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| SelectParameterKey | LocalFunctionStatement | L521–524 | string SelectParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| ShouldIncludeItem | LocalFunctionStatement | L527–530 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectSortKey | LocalFunctionStatement | L532–535 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectName2 | LocalFunctionStatement | L537–540 | string SelectName2(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| IsCellScopedKey | MethodDeclaration | L592–595 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) |
| IsCellScopedTemplate | MethodDeclaration | L597–600 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedTemplate(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| GetActiveCellCount | MethodDeclaration | L602–614 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| MatchesItem | LocalFunctionStatement | L604–607 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| ReadPositiveInt | MethodDeclaration | L616–625 | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) |
| MatchesItem | LocalFunctionStatement | L618–621 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| CalculateActiveShotGroupBoundsByCell | MethodDeclaration | L627–648 | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS> Drilling.File.JHMI.CJhmiRecipeFile.CalculateActiveShotGroupBoundsByCell(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, int) |
| IsShotGroupOverrideWithinActivePattern | MethodDeclaration | L650–664 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsShotGroupOverrideWithinActivePattern(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>) |
| GetActiveCellCount | MethodDeclaration | L666–673 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| ParseActiveCellCount | MethodDeclaration | L675–683 | int Drilling.File.JHMI.CJhmiRecipeFile.ParseActiveCellCount(string?, int, int?) |
| GetActiveCellCountMinimum | MethodDeclaration | L685–688 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMinimum(double?, double?) |
| GetActiveCellCountMaximum | MethodDeclaration | L690–693 | int? Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMaximum(double?, int) |
| GetCellNo | MethodDeclaration | L695–704 | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) |
| GetCellParameterName | MethodDeclaration | L706–710 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) |
| GetCellKeySeparatorIndex | MethodDeclaration | L712–715 | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellKeySeparatorIndex(string) |
| NormalizeCellScopedParameterName | MethodDeclaration | L717–720 | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) |
| IsCellPlacementParameterName | MethodDeclaration | L722–725 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellPlacementParameterName(string) |
| ToPersistedCellScopedKey | MethodDeclaration | L727–730 | string Drilling.File.JHMI.CJhmiRecipeFile.ToPersistedCellScopedKey(string) |
| GetCellScopedGroup | MethodDeclaration | L732–740 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellScopedGroup(string) |
| GetCellHistoryItemName | MethodDeclaration | L742–752 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellHistoryItemName(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| CreateShotGroupOverrideParameter | MethodDeclaration | L754–784 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.File.JHMI.CJhmiRecipeFile.CreateShotGroupOverrideParameter(int, string, string, string) |
| TryGetShotGroupOverrideMetadata | MethodDeclaration | L786–845 | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) |
| MatchesItem | LocalFunctionStatement | L803–806 | bool MatchesItem((string Suffix, string DisplayName)) |
| LoadFormItems | MethodDeclaration | L848–888 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() |
| SelectItem | LocalFunctionStatement | L850–856 | string[] SelectItem(string) |
| BuildRecipe | LocalFunctionStatement | L859–880 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM BuildRecipe(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| ShouldIncludeItem | LocalFunctionStatement | L882–885 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| ReadRecipeValues | MethodDeclaration | L890–914 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) |
| ParseRecipeLine | MethodDeclaration | L916–925 | Drilling.Common.Managers.ST_RECIPE_VALUE? Drilling.File.JHMI.CJhmiRecipeFile.ParseRecipeLine(string) |
| SplitCsvLine | MethodDeclaration | L927–960 | System.Collections.Generic.IReadOnlyList<string> Drilling.File.JHMI.CJhmiRecipeFile.SplitCsvLine(string) |
| GetFormPath | MethodDeclaration | L962–965 | string Drilling.File.JHMI.CJhmiRecipeFile.GetFormPath() |
| GetRecipePath | MethodDeclaration | L967–970 | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) |
| FindFormItem | MethodDeclaration | L972–1013 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? Drilling.File.JHMI.CJhmiRecipeFile.FindFormItem(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| MatchesItem | LocalFunctionStatement | L974–977 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| MatchesItem2 | LocalFunctionStatement | L988–991 | bool MatchesItem2(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| MatchesItem3 | LocalFunctionStatement | L1002–1005 | bool MatchesItem3(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| MatchesItem4 | LocalFunctionStatement | L1007–1010 | bool MatchesItem4(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| ReadDataType | MethodDeclaration | L1015–1024 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE Drilling.File.JHMI.CJhmiRecipeFile.ReadDataType(string) |
| ReadBool | MethodDeclaration | L1026–1034 | bool Drilling.File.JHMI.CJhmiRecipeFile.ReadBool(string, bool) |
| ReadInt | MethodDeclaration | L1036–1039 | int Drilling.File.JHMI.CJhmiRecipeFile.ReadInt(string, int) |
| ReadDouble | MethodDeclaration | L1041–1044 | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) |
| GetValue | MethodDeclaration | L1046–1049 | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) |
| CreateKey | MethodDeclaration | L1051–1054 | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) |
| GetOrDefault | MethodDeclaration | L1056–1059 | string Drilling.File.JHMI.CJhmiRecipeFile.GetOrDefault(string, string) |
| GetRecipeName | MethodDeclaration | L1061–1064 | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipeName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| FormatRecipeLine | MethodDeclaration | L1066–1069 | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) |
| ValidateSavedRecipeFile | MethodDeclaration | L1071–1102 | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateSavedRecipeFile(string, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) |
| SelectGroupKey | LocalFunctionStatement | L1073–1076 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| SelectKey | LocalFunctionStatement | L1078–1081 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| SelectValue | LocalFunctionStatement | L1083–1086 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| Escape | MethodDeclaration | L1104–1112 | string Drilling.File.JHMI.CJhmiRecipeFile.Escape(string) |
| GetSafeFileName | MethodDeclaration | L1114–1123 | string Drilling.File.JHMI.CJhmiRecipeFile.GetSafeFileName(string) |
| SelectItem | LocalFunctionStatement | L1117–1120 | char SelectItem(char) |
| DeleteIfExists | MethodDeclaration | L1125–1131 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteIfExists(string) |
| RenameWithCompanions | MethodDeclaration | L1135–1135 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.RenameWithCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| RenameCompanionsCore | MethodDeclaration | L1136–1175 | void Drilling.File.JHMI.CJhmiRecipeFile.RenameCompanionsCore(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| DeleteWithCompanions | MethodDeclaration | L1177–1177 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.DeleteWithCompanions(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| DeleteCompanionsCore | MethodDeclaration | L1178–1232 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteCompanionsCore(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| SelectCompanions | MethodDeclaration | L1234–1238 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.SelectCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| CompanionPath | MethodDeclaration | L1240–1246 | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) |
| RestoreMissing | MethodDeclaration | L1248–1262 | void Drilling.File.JHMI.CJhmiRecipeFile.RestoreMissing(string, string) |
| LogCompanionOperation | MethodDeclaration | L1264–1280 | void Drilling.File.JHMI.CJhmiRecipeFile.LogCompanionOperation(System.Action) |
| ListCompanionFolders | MethodDeclaration | L1284–1284 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| ListCompanions | MethodDeclaration | L1285–1294 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) |
| CreateCopy | MethodDeclaration | L1296–1296 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.CreateCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| CreateCopyCore | MethodDeclaration | L1297–1365 | void Drilling.File.JHMI.CJhmiRecipeFile.CreateCopyCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| CopyDirectory | MethodDeclaration | L1367–1397 | void Drilling.File.JHMI.CJhmiRecipeFile.CopyDirectory(string, string, System.Threading.CancellationToken, bool) |
| RejectLink | MethodDeclaration | L1399–1403 | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) |
| DeleteOwnedDirectory | MethodDeclaration | L1405–1413 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) |
| ValidateCopyId | MethodDeclaration | L1415–1419 | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) |
| IncrementProtectWindowCount | MethodDeclaration | L1423–1423 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| ResetProtectWindowCount | MethodDeclaration | L1424–1424 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| SetProtectWindowCount | MethodDeclaration | L1425–1425 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| ChangeProtectWindowCount | MethodDeclaration | L1426–1477 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ChangeProtectWindowCount(string, System.Func<string, int>, System.Threading.CancellationToken) |
| IsCount | LocalFunctionStatement | L1432–1432 | bool IsCount(Drilling.Common.Managers.ST_RECIPE_VALUE?) |
| CountLine | LocalFunctionStatement | L1476–1476 | string CountLine() |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `CellScopedTemplateNames` · L19–25

[Drilling.File/JHMI/CJhmiRecipeFile.cs:19–25](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L19-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<string> Drilling.File.JHMI.CJhmiRecipeFile.CellScopedTemplateNames |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.HashSet<string> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 19 | new | resolved | System.Collections.Generic.HashSet<string>.HashSet(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 19 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) { "CELL_ALIGN_TO_1ST_PIXEL_X", "CELL_ALIGN_TO_1ST_PIXEL_Y", "CELL_ROTATION", "CELL_MODEL_TYPE" } |
| 19 | variable-initializer | 변수의 초기값을 지정합니다: CellScopedTemplateNames = new(StringComparer.OrdinalIgnoreCase) { "CELL_ALIGN_TO_1ST_PIXEL_X", "CELL_ALIGN_TO_1ST_PIXEL_Y", "CELL_ROTATION", "CELL_MODEL_TYPE" } |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FormHeaders` · L26–26

[Drilling.File/JHMI/CJhmiRecipeFile.cs:26–26](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L26-L26)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<string> Drilling.File.JHMI.CJhmiRecipeFile.FormHeaders |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<string> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 26 | variable-initializer | 변수의 초기값을 지정합니다: FormHeaders = ["TAB", "GROUP", "NAME", "DISPLAY NAME", "CIM NAME", "DATA TYPE", "UNIT", "SHOW", "USE", "VALUE", "SCALE", "CHANGE LIMIT", "MIN", "MAX", "DESCRIPTION", "ORDER"] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_configRoot` · L27–27

[Drilling.File/JHMI/CJhmiRecipeFile.cs:27–27](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L27-L27)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile._configRoot |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 27 | variable-initializer | 변수의 초기값을 지정합니다: _configRoot = configRoot |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_recipeDirectory` · L28–28

[Drilling.File/JHMI/CJhmiRecipeFile.cs:28–28](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L28-L28)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile._recipeDirectory |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 28 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(configRoot, "RECIPE") |
| 28 | variable-initializer | 변수의 초기값을 지정합니다: _recipeDirectory = Path.Combine(configRoot, "RECIPE") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_logManager` · L29–29

[Drilling.File/JHMI/CJhmiRecipeFile.cs:29–29](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L29-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | CLogManager Drilling.File.JHMI.CJhmiRecipeFile._logManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | CLogManager |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 29 | new | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(configRoot) |
| 29 | variable-initializer | 변수의 초기값을 지정합니다: _logManager = new(configRoot) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_fileOperationLock` · L30–30

[Drilling.File/JHMI/CJhmiRecipeFile.cs:30–30](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L30-L30)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.File.JHMI.CJhmiRecipeFile._fileOperationLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 30 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 30 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 30 | variable-initializer | 변수의 초기값을 지정합니다: _fileOperationLock = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistory` · L33–33

[Drilling.File/JHMI/CJhmiRecipeFile.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L33-L33)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.File.JHMI.CJhmiRecipeFile.LoadHistory(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 33 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task<> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<>(System.Func<>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:417 |
| 33 | _logManager.ReadRecipeRecent | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => _logManager.ReadRecipeRecent(), cancellationToken) |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.ReadRecipeRecent() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RecordSelection` · L34–50

[Drilling.File/JHMI/CJhmiRecipeFile.cs:34–50](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L34-L50)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.RecordSelection(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| previousRecipeId | string | None | False /  |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 36 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |
| 38 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 39 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 39 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 40 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?) |
| 48 | _logManager.WriteRecipeSelect | unresolved | None |
| 48 | RecipeName | resolved | string RecipeName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:41 |
| 48 | RecipeName | resolved | string RecipeName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:41 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => { cancellationToken.ThrowIfCancellationRequested(); if (!System.IO.File.Exists(GetRecipePath(recipeId))) throw new FileNotFoundException($"Recipe {recipeId} was not found."); string RecipeName(… |
| 36 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(() => { cancellationToken.ThrowIfCancellationRequested(); if (!System.IO.File.Exists(GetRecipePath(recipeId))) throw new FileNotFoundException($"Recipe {recipeId} was not found."); string RecipeName(str |
| 38 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(recipeId)) |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipeId) |
| 39 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(GetRecipePath(recipeId))) |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException($"Recipe {recipeId} was not found.") |
| 40 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException($"Recipe {recipeId} was not found."); |
| 48 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeSelect(RecipeName(previousRecipeId), RecipeName(recipeId)) |
| 48 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecipeName(previousRecipeId) |
| 48 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecipeName(recipeId) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RecordSelection"]
 N0["L39 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `RecipeName` · L41–46

[Drilling.File/JHMI/CJhmiRecipeFile.cs:41–46](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L41-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string RecipeName(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L48-L48) | RecipeName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L48-L48) | RecipeName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 43 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 43 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 43 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 45 | ReadRecipeValues(GetRecipePath(id), cancellationToken).LastOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.LastOrDefault<Drilling.Common.Managers.ST_RECIPE_VALUE>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, bool>) |
| 45 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 45 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 45 | value.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 45 | value.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 43 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(id) |
| 43 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(id)) |
| 43 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(id) |
| 43 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(id) &#124;&#124; !System.IO.File.Exists(GetRecipePath(id))) |
| 44 | return | 호출자에게 값 또는 제어를 반환합니다: return id; |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(GetRecipePath(id), cancellationToken).LastOrDefault(value => value.Tab.Equals("DEFAULT", StringComparison.OrdinalIgnoreCase) && value.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase)) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(GetRecipePath(id), cancellationToken) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(id) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Tab.Equals("DEFAULT", StringComparison.OrdinalIgnoreCase) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase) |
| 45 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadRecipeValues(GetRecipePath(id), cancellationToken).LastOrDefault(value => value.Tab.Equals("DEFAULT", StringComparison.OrdinalIgnoreCase) && value.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase))?.Value ? |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RecipeName"]
 N0["L43 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAll` · L52–60

[Drilling.File/JHMI/CJhmiRecipeFile.cs:52–60](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L52-L60)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.File.JHMI.CJhmiRecipeFile.LoadAll(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 59 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>(System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:417 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 59 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(SelectValue, cancellationToken) |
| 59 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(SelectValue, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L54–57

[Drilling.File/JHMI/CJhmiRecipeFile.cs:54–57](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L54-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> SelectValue() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 56 | LoadAllCore | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.File.JHMI.CJhmiRecipeFile.LoadAllCore(System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:62 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 56 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadAllCore(cancellationToken) |
| 56 | return | 호출자에게 값 또는 제어를 반환합니다: return LoadAllCore(cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAllCore` · L62–89

[Drilling.File/JHMI/CJhmiRecipeFile.cs:62–89](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L62-L89)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.File.JHMI.CJhmiRecipeFile.LoadAllCore(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:56–56](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L56-L56) | LoadAllCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 64 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 65 | Directory.Exists | resolved | bool System.IO.Directory.Exists(string?) |
| 70 | LoadFormItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() · Drilling.File/JHMI/CJhmiRecipeFile.cs:848 |
| 71 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 72 | new List<ST_RECIPE_DEFINITION> | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.List() |
| 73 | Directory.EnumerateFiles | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateFiles(string, string) |
| 75 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 76 | LoadRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.LoadRecipe(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:443 |
| 79 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 88 | recipes.OrderBy(SelectName).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray<Drilling.Common.Managers.ST_RECIPE_DEFINITION>() |
| 88 | recipes.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.OrderBy<Drilling.Common.Managers.ST_RECIPE_DEFINITION, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, string>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 64 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Exists(_recipeDirectory) |
| 65 | if | 조건에 따라 분기합니다: if (!Directory.Exists(_recipeDirectory)) |
| 67 | return | 호출자에게 값 또는 제어를 반환합니다: return[]; |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadFormItems() |
| 70 | local-declaration | 지역 변수를 선언합니다: var formItems = LoadFormItems(); |
| 70 | variable-initializer | 변수의 초기값을 지정합니다: formItems = LoadFormItems() |
| 71 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 72 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_RECIPE_DEFINITION>() |
| 72 | local-declaration | 지역 변수를 선언합니다: var recipes = new List<ST_RECIPE_DEFINITION>(); |
| 72 | variable-initializer | 변수의 초기값을 지정합니다: recipes = new List<ST_RECIPE_DEFINITION>() |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateFiles(_recipeDirectory, "*.csv") |
| 73 | foreach | 컬렉션 요소를 순회합니다: foreach (var path in Directory.EnumerateFiles(_recipeDirectory, "*.csv")) |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadRecipe(path, formItems, cancellationToken) |
| 76 | local-declaration | 지역 변수를 선언합니다: var recipe = LoadRecipe(path, formItems, cancellationToken); |
| 76 | variable-initializer | 변수의 초기값을 지정합니다: recipe = LoadRecipe(path, formItems, cancellationToken) |
| 77 | if | 조건에 따라 분기합니다: if (recipe is not null) |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(recipe) |
| 88 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.OrderBy(SelectName).ToArray() |
| 88 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.OrderBy(SelectName) |
| 88 | return | 호출자에게 값 또는 제어를 반환합니다: return recipes.OrderBy(SelectName).ToArray(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadAllCore"]
 N0["L65 if"]
 M -->|포함| N0
 N1["L73 foreach"]
 M -->|포함| N1
 N2["L77 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectName` · L83–86

[Drilling.File/JHMI/CJhmiRecipeFile.cs:83–86](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L83-L86)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 85 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe.Name; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Find` · L91–99

[Drilling.File/JHMI/CJhmiRecipeFile.cs:91–99](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L91-L99)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.File.JHMI.CJhmiRecipeFile.Find(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 98 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:417 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 98 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(SelectValue, cancellationToken) |
| 98 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(SelectValue, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L93–96

[Drilling.File/JHMI/CJhmiRecipeFile.cs:93–96](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L93-L96)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? SelectValue() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 95 | FindCore | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.FindCore(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:101 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 95 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindCore(recipeId, cancellationToken) |
| 95 | return | 호출자에게 값 또는 제어를 반환합니다: return FindCore(recipeId, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindCore` · L101–108

[Drilling.File/JHMI/CJhmiRecipeFile.cs:101–108](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L101-L108)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.FindCore(string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:95–95](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L95-L95) | FindCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 103 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 104 | LoadFormItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() · Drilling.File/JHMI/CJhmiRecipeFile.cs:848 |
| 105 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 106 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 107 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 107 | LoadRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.LoadRecipe(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:443 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadFormItems() |
| 104 | local-declaration | 지역 변수를 선언합니다: var formItems = LoadFormItems(); |
| 104 | variable-initializer | 변수의 초기값을 지정합니다: formItems = LoadFormItems() |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipeId) |
| 106 | local-declaration | 지역 변수를 선언합니다: var path = GetRecipePath(recipeId); |
| 106 | variable-initializer | 변수의 초기값을 지정합니다: path = GetRecipePath(recipeId) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(path) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadRecipe(path, formItems, cancellationToken) |
| 107 | conditional-expression | 조건에 따라 결과식을 선택합니다: System.IO.File.Exists(path) ? LoadRecipe(path, formItems, cancellationToken) : null |
| 107 | return | 호출자에게 값 또는 제어를 반환합니다: return System.IO.File.Exists(path) ? LoadRecipe(path, formItems, cancellationToken) : null; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L110–118

[Drilling.File/JHMI/CJhmiRecipeFile.cs:110–118](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L110-L118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 117 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(SaveCoreCallback, cancellationToken) |
| 117 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(SaveCoreCallback, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SaveCoreCallback` · L112–115

[Drilling.File/JHMI/CJhmiRecipeFile.cs:112–115](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L112-L115)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SaveCoreCallback() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 114 | SaveCore | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.SaveCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken, string?, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:120 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 114 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveCore(recipe, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveCore` · L120–243

[Drilling.File/JHMI/CJhmiRecipeFile.cs:120–243](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L120-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.SaveCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken, string?, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| destination | string? | None | True / null |
| writeHistory | bool | None | True / true |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:114–114](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L114-L114) | SaveCore | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1326–1326](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1326-L1326) | SaveCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 122 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 123 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 124 | LoadFormItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() · Drilling.File/JHMI/CJhmiRecipeFile.cs:848 |
| 125 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 126 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 142 | ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 142 | ReadRecipeValues(recipePath, cancellationToken).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.GroupBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 142 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 142 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 148 | recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where(item => item.FormItem is not null).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>>.ToDictionary<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>, string, string>(System.Func<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>, string>, System.Func<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 148 | recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where | resolved | System.Collections.Generic.IEnumerable<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>> System.Collections.Generic.IEnumerable<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>>.Where<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>>(System.Func<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>, bool>) |
| 148 | recipe.Parameters.Where(ShouldIncludeItem).Select | resolved | System.Collections.Generic.IEnumerable<<anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Select<Drilling.Common.Managers.ST_RECIPE_PARAMETER, <anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, <anonymous type: Drilling.Common.Managers.ST_RECIPE_PARAMETER Parameter, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? FormItem>>) |
| 148 | recipe.Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 148 | FindFormItem | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? Drilling.File.JHMI.CJhmiRecipeFile.FindFormItem(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, Drilling.Common.Managers.ST_RECIPE_PARAMETER) · Drilling.File/JHMI/CJhmiRecipeFile.cs:972 |
| 148 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 149 | GetActiveCellCount | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) · Drilling.File/JHMI/CJhmiRecipeFile.cs:602 |
| 150 | CalculateActiveShotGroupBoundsByCell | resolved | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS> Drilling.File.JHMI.CJhmiRecipeFile.CalculateActiveShotGroupBoundsByCell(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:627 |
| 166 | recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy(SelectRecipeParameterKey, StringComparer.OrdinalIgnoreCase).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 166 | recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ThenBy<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IComparer<string>?) |
| 166 | recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.OrderBy<Drilling.Common.Managers.ST_RECIPE_PARAMETER, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, int>) |
| 166 | recipe.Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 167 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 169 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 170 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 172 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 174 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 175 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 177 | new List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)> | resolved | System.Collections.Generic.List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>.List() |
| 188 | formItems.Where(ShouldIncludeRecipe2).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.OrderBy<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>) |
| 188 | formItems.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.Where<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 190 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 191 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 192 | valuesByKey.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 194 | item.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 194 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 195 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 198 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 199 | oldValue.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 201 | changedItems.Add | resolved | void System.Collections.Generic.List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>.Add((string Tab, string Group, string ItemName, string OldValue, string NewValue)) |
| 205 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 206 | lines.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 206 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 211 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 212 | ToPersistedCellScopedKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.ToPersistedCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:727 |
| 215 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 216 | oldValue.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 218 | changedItems.Add | resolved | void System.Collections.Generic.List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>.Add((string Tab, string Group, string ItemName, string OldValue, string NewValue)) |
| 218 | GetCellHistoryItemName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellHistoryItemName(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) · Drilling.File/JHMI/CJhmiRecipeFile.cs:742 |
| 222 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 223 | lines.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 223 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 226 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 228 | CCsvParser.WriteLines | resolved | void Drilling.File.Parser.CCsvParser.WriteLines(string, System.Collections.Generic.IEnumerable<string>) · Drilling.File/Parser/CCsvParser.cs:157 |
| 229 | ValidateSavedRecipeFile | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateSavedRecipeFile(string, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1071 |
| 232 | GetRecipeName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipeName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1061 |
| 235 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 236 | _logManager.WriteRecipeModifyBatch | unresolved | None |
| 237 | _logManager.WriteRecipeSave | unresolved | None |
| 241 | _logManager.WriteRecipeCreate | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(_recipeDirectory) |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadFormItems() |
| 124 | local-declaration | 지역 변수를 선언합니다: var formItems = LoadFormItems(); |
| 124 | variable-initializer | 변수의 초기값을 지정합니다: formItems = LoadFormItems() |
| 125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipe.Id) |
| 125 | local-declaration | 지역 변수를 선언합니다: var recipePath = destination ?? GetRecipePath(recipe.Id); |
| 125 | variable-initializer | 변수의 초기값을 지정합니다: recipePath = destination ?? GetRecipePath(recipe.Id) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(recipePath) |
| 126 | local-declaration | 지역 변수를 선언합니다: var recipeExists = System.IO.File.Exists(recipePath); |
| 126 | variable-initializer | 변수의 초기값을 지정합니다: recipeExists = System.IO.File.Exists(recipePath) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(recipePath, cancellationToken) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 142 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipeExists ? ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) : new Dictionary<string, string>(Strin |
| 142 | local-declaration | 지역 변수를 선언합니다: var oldValues = recipeExists ? ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) : new Dictionary<strin |
| 142 | variable-initializer | 변수의 초기값을 지정합니다: oldValues = recipeExists ? ReadRecipeValues(recipePath, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) : new Dictionary<string, s |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where(item => item.FormItem is not null).ToDictionary(item => CreateKey(item.Fo… |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where(item => item.FormItem is not null) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeItem) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindFormItem(formItems, parameter) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.FormItem!.Tab, item.FormItem.Name) |
| 148 | local-declaration | 지역 변수를 선언합니다: var valuesByKey = recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where(item => item.FormItem is not null).ToDictionary(item => CreateKey |
| 148 | variable-initializer | 변수의 초기값을 지정합니다: valuesByKey = recipe.Parameters.Where(ShouldIncludeItem).Select(parameter => new { Parameter = parameter, FormItem = FindFormItem(formItems, parameter) }).Where(item => item.FormItem is not null).ToDictionary(item => CreateKey(ite |
| 149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCount(recipe.Parameters) |
| 149 | local-declaration | 지역 변수를 선언합니다: var activeCellCount = GetActiveCellCount(recipe.Parameters); |
| 149 | variable-initializer | 변수의 초기값을 지정합니다: activeCellCount = GetActiveCellCount(recipe.Parameters) |
| 150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CalculateActiveShotGroupBoundsByCell(recipe.Parameters, activeCellCount) |
| 150 | local-declaration | 지역 변수를 선언합니다: var shotGroupBounds = CalculateActiveShotGroupBoundsByCell(recipe.Parameters, activeCellCount); |
| 150 | variable-initializer | 변수의 초기값을 지정합니다: shotGroupBounds = CalculateActiveShotGroupBoundsByCell(recipe.Parameters, activeCellCount) |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy(SelectRecipeParameterKey, StringComparer.OrdinalIgnoreCase).ToArray() |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy(SelectRecipeParameterKey, StringComparer.OrdinalIgnoreCase) |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey) |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Where(ShouldIncludeRecipe) |
| 166 | local-declaration | 지역 변수를 선언합니다: var cellScopedParameters = recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy(SelectRecipeParameterKey, StringComparer.OrdinalIgnoreCase).ToArray(); |
| 166 | variable-initializer | 변수의 초기값을 지정합니다: cellScopedParameters = recipe.Parameters.Where(ShouldIncludeRecipe).OrderBy(SelectSortKey).ThenBy(SelectRecipeParameterKey, StringComparer.OrdinalIgnoreCase).ToArray() |
| 167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", recipe.Name), FormatRecipeLine("DEFAULT", "RECIPE_ID", recipe.Id) } |
| 167 | local-declaration | 지역 변수를 선언합니다: var lines = new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", recipe.Name), FormatRecipeLine("DEFAULT", "RECIPE_ID", recipe.Id) }; |
| 167 | variable-initializer | 변수의 초기값을 지정합니다: lines = new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", recipe.Name), FormatRecipeLine("DEFAULT", "RECIPE_ID", recipe.Id) } |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("DEFAULT", "RECIPE_NAME", recipe.Name) |
| 170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("DEFAULT", "RECIPE_ID", recipe.Id) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = recipe.Name, [CreateKey("DEFAULT", "RECIPE_ID")] = recipe.Id } |
| 172 | local-declaration | 지역 변수를 선언합니다: var expectedValues = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = recipe.Name, [CreateKey("DEFAULT", "RECIPE_ID")] = recipe.Id }; |
| 172 | variable-initializer | 변수의 초기값을 지정합니다: expectedValues = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = recipe.Name, [CreateKey("DEFAULT", "RECIPE_ID")] = recipe.Id } |
| 174 | assignment | 값을 대상에 대입합니다: [CreateKey("DEFAULT", "RECIPE_NAME")] = recipe.Name |
| 174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("DEFAULT", "RECIPE_NAME") |
| 175 | assignment | 값을 대상에 대입합니다: [CreateKey("DEFAULT", "RECIPE_ID")] = recipe.Id |
| 175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("DEFAULT", "RECIPE_ID") |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>() |
| 177 | local-declaration | 지역 변수를 선언합니다: var changedItems = new List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>(); |
| 177 | variable-initializer | 변수의 초기값을 지정합니다: changedItems = new List<(string Tab, string Group, string ItemName, string OldValue, string NewValue)>() |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(ShouldIncludeRecipe2).OrderBy(SelectDisplayOrder) |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(ShouldIncludeRecipe2) |
| 188 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in formItems.Where(ShouldIncludeRecipe2).OrderBy(SelectDisplayOrder)) |
| 190 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 191 | local-declaration | 지역 변수를 선언합니다: var key = CreateKey(item.Tab, item.Name); |
| 191 | variable-initializer | 변수의 초기값을 지정합니다: key = CreateKey(item.Tab, item.Name) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: valuesByKey.TryGetValue(key, out var editedValue) |
| 192 | conditional-expression | 조건에 따라 결과식을 선택합니다: valuesByKey.TryGetValue(key, out var editedValue) ? editedValue : item.DefaultValue |
| 192 | local-declaration | 지역 변수를 선언합니다: var value = valuesByKey.TryGetValue(key, out var editedValue) ? editedValue : item.DefaultValue; |
| 192 | variable-initializer | 변수의 초기값을 지정합니다: value = valuesByKey.TryGetValue(key, out var editedValue) ? editedValue : item.DefaultValue |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Tab.Equals(CProtectWindowRecipeData.Tab, StringComparison.OrdinalIgnoreCase) |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) |
| 194 | if | 조건에 따라 분기합니다: if (item.Tab.Equals(CProtectWindowRecipeData.Tab, StringComparison.OrdinalIgnoreCase) && item.Name.Equals(CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase)) |
| 195 | assignment | 값을 대상에 대입합니다: value = recipeExists ? GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) : item.DefaultValue |
| 195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 195 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipeExists ? GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) : item.DefaultValue |
| 196 | if | 조건에 따라 분기합니다: if (recipeExists) |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 198 | local-declaration | 지역 변수를 선언합니다: var oldValue = GetValue(oldValues, item.Tab, item.Name, item.DefaultValue); |
| 198 | variable-initializer | 변수의 초기값을 지정합니다: oldValue = GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 199 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: oldValue.Equals(value, StringComparison.Ordinal) |
| 199 | if | 조건에 따라 분기합니다: if (!oldValue.Equals(value, StringComparison.Ordinal)) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changedItems.Add((item.Tab, item.Group, item.DisplayName, oldValue, value)) |
| 205 | assignment | 값을 대상에 대입합니다: expectedValues[CreateKey(item.Tab, item.Name)] = value |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 206 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Add(FormatRecipeLine(item.Tab, item.Name, value)) |
| 206 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine(item.Tab, item.Name, value) |
| 209 | foreach | 컬렉션 요소를 순회합니다: foreach (var parameter in cellScopedParameters) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToPersistedCellScopedKey(parameter.Key) |
| 212 | local-declaration | 지역 변수를 선언합니다: var persistedKey = ToPersistedCellScopedKey(parameter.Key); |
| 212 | variable-initializer | 변수의 초기값을 지정합니다: persistedKey = ToPersistedCellScopedKey(parameter.Key) |
| 213 | if | 조건에 따라 분기합니다: if (recipeExists) |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(oldValues, "CELL", persistedKey, parameter.DefaultValue) |
| 215 | local-declaration | 지역 변수를 선언합니다: var oldValue = GetValue(oldValues, "CELL", persistedKey, parameter.DefaultValue); |
| 215 | variable-initializer | 변수의 초기값을 지정합니다: oldValue = GetValue(oldValues, "CELL", persistedKey, parameter.DefaultValue) |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: oldValue.Equals(parameter.Value, StringComparison.Ordinal) |
| 216 | if | 조건에 따라 분기합니다: if (!oldValue.Equals(parameter.Value, StringComparison.Ordinal)) |
| 218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changedItems.Add(("CELL", parameter.Group, GetCellHistoryItemName(parameter, recipe.Parameters), oldValue, parameter.Value)) |
| 218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellHistoryItemName(parameter, recipe.Parameters) |
| 222 | assignment | 값을 대상에 대입합니다: expectedValues[CreateKey("CELL", persistedKey)] = parameter.Value |
| 222 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("CELL", persistedKey) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Add(FormatRecipeLine("CELL", persistedKey, parameter.Value)) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("CELL", persistedKey, parameter.Value) |
| 226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.WriteLines(recipePath, lines) |
| 229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateSavedRecipeFile(recipePath, expectedValues, cancellationToken) |
| 230 | if | 조건에 따라 분기합니다: if (!writeHistory) |
| 231 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipeName(recipe) |
| 232 | local-declaration | 지역 변수를 선언합니다: var recipeName = GetRecipeName(recipe); |
| 232 | variable-initializer | 변수의 초기값을 지정합니다: recipeName = GetRecipeName(recipe) |
| 233 | if | 조건에 따라 분기합니다: if (recipeExists) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeModifyBatch(recipeName, changedItems) |
| 237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeSave(recipeName) |
| 239 | else | 앞 조건이 거짓인 경로입니다: else |
| 241 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeCreate(recipeName) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveCore"]
 N0["L188 foreach"]
 M -->|포함| N0
 N1["L194 if"]
 N0 -->|포함| N1
 N2["L196 if"]
 N0 -->|포함| N2
 N3["L199 if"]
 N2 -->|포함| N3
 N4["L209 foreach"]
 M -->|포함| N4
 N5["L213 if"]
 N4 -->|포함| N5
 N6["L216 if"]
 N5 -->|포함| N6
 N7["L230 if"]
 M -->|포함| N7
 N8["L233 if"]
 M -->|포함| N8
 N9["L239 else"]
 N8 -->|포함| N9
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectGroupKey` · L127–130

[Drilling.File/JHMI/CJhmiRecipeFile.cs:127–130](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L127-L130)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 129 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 129 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateKey(item.Tab, item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L132–135

[Drilling.File/JHMI/CJhmiRecipeFile.cs:132–135](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L132-L135)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 134 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L137–140

[Drilling.File/JHMI/CJhmiRecipeFile.cs:137–140](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L137-L140)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 139 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Last<Drilling.Common.Managers.ST_RECIPE_VALUE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 139 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeItem` · L143–146

[Drilling.File/JHMI/CJhmiRecipeFile.cs:143–146](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L143-L146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 145 | IsCellScopedKey | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:592 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedKey(parameter.Key) |
| 145 | return | 호출자에게 값 또는 제어를 반환합니다: return !IsCellScopedKey(parameter.Key); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeRecipe` · L151–154

[Drilling.File/JHMI/CJhmiRecipeFile.cs:151–154](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L151-L154)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeRecipe(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 153 | IsCellScopedKey | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:592 |
| 153 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 153 | IsShotGroupOverrideWithinActivePattern | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsShotGroupOverrideWithinActivePattern(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>) · Drilling.File/JHMI/CJhmiRecipeFile.cs:650 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedKey(parameter.Key) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(parameter.Key) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsShotGroupOverrideWithinActivePattern(parameter, shotGroupBounds) |
| 153 | return | 호출자에게 값 또는 제어를 반환합니다: return IsCellScopedKey(parameter.Key) && GetCellNo(parameter.Key) <= activeCellCount && IsShotGroupOverrideWithinActivePattern(parameter, shotGroupBounds); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSortKey` · L156–159

[Drilling.File/JHMI/CJhmiRecipeFile.cs:156–159](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L156-L159)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 158 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(parameter.Key) |
| 158 | return | 호출자에게 값 또는 제어를 반환합니다: return GetCellNo(parameter.Key); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectRecipeParameterKey` · L161–164

[Drilling.File/JHMI/CJhmiRecipeFile.cs:161–164](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L161-L164)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectRecipeParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 163 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeRecipe2` · L178–181

[Drilling.File/JHMI/CJhmiRecipeFile.cs:178–181](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L178-L181)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeRecipe2(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 180 | IsCellScopedTemplate | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedTemplate(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) · Drilling.File/JHMI/CJhmiRecipeFile.cs:597 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedTemplate(item) |
| 180 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Use && !IsCellScopedTemplate(item); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectDisplayOrder` · L183–186

[Drilling.File/JHMI/CJhmiRecipeFile.cs:183–186](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L183-L186)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 185 | return | 호출자에게 값 또는 제어를 반환합니다: return item.DisplayOrder; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Rename` · L245–253

[Drilling.File/JHMI/CJhmiRecipeFile.cs:245–253](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L245-L253)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Rename(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 252 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(RenameCoreCallback, cancellationToken) |
| 252 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(RenameCoreCallback, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `RenameCoreCallback` · L247–250

[Drilling.File/JHMI/CJhmiRecipeFile.cs:247–250](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L247-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void RenameCoreCallback() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 249 | RenameCore | resolved | string? Drilling.File.JHMI.CJhmiRecipeFile.RenameCore(string, string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:255 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameCore(oldRecipeId, newRecipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameCore` · L255–369

[Drilling.File/JHMI/CJhmiRecipeFile.cs:255–369](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L255-L369)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string? Drilling.File.JHMI.CJhmiRecipeFile.RenameCore(string, string, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| writeHistory | bool | None | True / true |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L249-L249) | RenameCore | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1164–1164](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1164-L1164) | RenameCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 257 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 258 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 259 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 260 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 261 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 266 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 268 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 271 | LoadFormItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() · Drilling.File/JHMI/CJhmiRecipeFile.cs:848 |
| 272 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 288 | recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 288 | recipeValues.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.GroupBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 289 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 290 | GetActiveCellCount | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) · Drilling.File/JHMI/CJhmiRecipeFile.cs:666 |
| 291 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 293 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 294 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 296 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 298 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 299 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 311 | formItems.Where(ShouldIncludeItem).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.OrderBy<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>) |
| 311 | formItems.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.Where<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 313 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 314 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 314 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 315 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 316 | lines.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 316 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 334 | recipeValues.Where(MatchesTab).OrderBy(SelectSortKey).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.ThenBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IComparer<string>?) |
| 334 | recipeValues.Where(MatchesTab).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.OrderBy<Drilling.Common.Managers.ST_RECIPE_VALUE, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, int>) |
| 334 | recipeValues.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Where<Drilling.Common.Managers.ST_RECIPE_VALUE>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, bool>) |
| 336 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 337 | NormalizeCellScopedParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:717 |
| 337 | GetCellParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:706 |
| 338 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 339 | ToPersistedCellScopedKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.ToPersistedCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:727 |
| 340 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |
| 341 | lines.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 341 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 344 | Guid.NewGuid().ToString | resolved | string System.Guid.ToString(string?) |
| 344 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 347 | CCsvParser.WriteLines | resolved | void Drilling.File.Parser.CCsvParser.WriteLines(string, System.Collections.Generic.IEnumerable<string>) · Drilling.File/Parser/CCsvParser.cs:157 |
| 348 | ValidateSavedRecipeFile | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateSavedRecipeFile(string, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1071 |
| 349 | System.IO.File.Move | resolved | void System.IO.File.Move(string, string, bool) |
| 352 | System.IO.File.Delete | resolved | void System.IO.File.Delete(string) |
| 356 | System.IO.File.Delete | resolved | void System.IO.File.Delete(string) |
| 362 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 363 | System.IO.File.Delete | resolved | void System.IO.File.Delete(string) |
| 367 | _logManager.WriteRecipeRename | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 258 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(_recipeDirectory) |
| 259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(oldRecipeId) |
| 259 | local-declaration | 지역 변수를 선언합니다: var oldPath = GetRecipePath(oldRecipeId); |
| 259 | variable-initializer | 변수의 초기값을 지정합니다: oldPath = GetRecipePath(oldRecipeId) |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(newRecipeId) |
| 260 | local-declaration | 지역 변수를 선언합니다: var newPath = GetRecipePath(newRecipeId); |
| 260 | variable-initializer | 변수의 초기값을 지정합니다: newPath = GetRecipePath(newRecipeId) |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(oldPath) |
| 261 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(oldPath)) |
| 263 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(newPath) |
| 266 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(newPath)) |
| 268 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException($"Recipe file already exists. {newRecipeId}.csv") |
| 268 | throw | 예외를 발생/전달합니다: throw new IOException($"Recipe file already exists. {newRecipeId}.csv"); |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadFormItems() |
| 271 | local-declaration | 지역 변수를 선언합니다: var formItems = LoadFormItems(); |
| 271 | variable-initializer | 변수의 초기값을 지정합니다: formItems = LoadFormItems() |
| 272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(oldPath, cancellationToken) |
| 272 | local-declaration | 지역 변수를 선언합니다: var recipeValues = ReadRecipeValues(oldPath, cancellationToken); |
| 272 | variable-initializer | 변수의 초기값을 지정합니다: recipeValues = ReadRecipeValues(oldPath, cancellationToken) |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase) |
| 288 | local-declaration | 지역 변수를 선언합니다: var oldValues = recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase); |
| 288 | variable-initializer | 변수의 초기값을 지정합니다: oldValues = recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(oldValues, "DEFAULT", "RECIPE_NAME", oldRecipeId) |
| 289 | local-declaration | 지역 변수를 선언합니다: var oldRecipeName = GetValue(oldValues, "DEFAULT", "RECIPE_NAME", oldRecipeId); |
| 289 | variable-initializer | 변수의 초기값을 지정합니다: oldRecipeName = GetValue(oldValues, "DEFAULT", "RECIPE_NAME", oldRecipeId) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCount(oldValues, formItems) |
| 290 | local-declaration | 지역 변수를 선언합니다: var activeCellCount = GetActiveCellCount(oldValues, formItems); |
| 290 | variable-initializer | 변수의 초기값을 지정합니다: activeCellCount = GetActiveCellCount(oldValues, formItems) |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = newRecipeId, [CreateKey("DEFAULT", "RECIPE_ID")] = newRecipeId } |
| 291 | local-declaration | 지역 변수를 선언합니다: var expectedValues = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = newRecipeId, [CreateKey("DEFAULT", "RECIPE_ID")] = newRecipeId }; |
| 291 | variable-initializer | 변수의 초기값을 지정합니다: expectedValues = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { [CreateKey("DEFAULT", "RECIPE_NAME")] = newRecipeId, [CreateKey("DEFAULT", "RECIPE_ID")] = newRecipeId } |
| 293 | assignment | 값을 대상에 대입합니다: [CreateKey("DEFAULT", "RECIPE_NAME")] = newRecipeId |
| 293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("DEFAULT", "RECIPE_NAME") |
| 294 | assignment | 값을 대상에 대입합니다: [CreateKey("DEFAULT", "RECIPE_ID")] = newRecipeId |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("DEFAULT", "RECIPE_ID") |
| 296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", newRecipeId), FormatRecipeLine("DEFAULT", "RECIPE_ID", newRecipeId) } |
| 296 | local-declaration | 지역 변수를 선언합니다: var lines = new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", newRecipeId), FormatRecipeLine("DEFAULT", "RECIPE_ID", newRecipeId) }; |
| 296 | variable-initializer | 변수의 초기값을 지정합니다: lines = new List<string> { FormatRecipeLine("DEFAULT", "RECIPE_NAME", newRecipeId), FormatRecipeLine("DEFAULT", "RECIPE_ID", newRecipeId) } |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("DEFAULT", "RECIPE_NAME", newRecipeId) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("DEFAULT", "RECIPE_ID", newRecipeId) |
| 311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(ShouldIncludeItem).OrderBy(SelectDisplayOrder) |
| 311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(ShouldIncludeItem) |
| 311 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in formItems.Where(ShouldIncludeItem).OrderBy(SelectDisplayOrder)) |
| 313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase) |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 314 | conditional-expression | 조건에 따라 결과식을 선택합니다: item.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase) ? newRecipeId : GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 314 | local-declaration | 지역 변수를 선언합니다: var value = item.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase) ? newRecipeId : GetValue(oldValues, item.Tab, item.Name, item.DefaultValue); |
| 314 | variable-initializer | 변수의 초기값을 지정합니다: value = item.Name.Equals("RECIPE_NAME", StringComparison.OrdinalIgnoreCase) ? newRecipeId : GetValue(oldValues, item.Tab, item.Name, item.DefaultValue) |
| 315 | assignment | 값을 대상에 대입합니다: expectedValues[CreateKey(item.Tab, item.Name)] = value |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Add(FormatRecipeLine(item.Tab, item.Name, value)) |
| 316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine(item.Tab, item.Name, value) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(MatchesTab).OrderBy(SelectSortKey).ThenBy(SelectName, StringComparer.OrdinalIgnoreCase) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(MatchesTab).OrderBy(SelectSortKey) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(MatchesTab) |
| 334 | foreach | 컬렉션 요소를 순회합니다: foreach (var cellValue in recipeValues.Where(MatchesTab).OrderBy(SelectSortKey).ThenBy(SelectName, StringComparer.OrdinalIgnoreCase)) |
| 336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellParameterName(cellValue.Name) |
| 337 | local-declaration | 지역 변수를 선언합니다: var parameterName = NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)); |
| 337 | variable-initializer | 변수의 초기값을 지정합니다: parameterName = NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)) |
| 338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(cellValue.Name) |
| 338 | local-declaration | 지역 변수를 선언합니다: var scopedKey = $"CELL{GetCellNo(cellValue.Name)}_{parameterName}"; |
| 338 | variable-initializer | 변수의 초기값을 지정합니다: scopedKey = $"CELL{GetCellNo(cellValue.Name)}_{parameterName}" |
| 339 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToPersistedCellScopedKey(scopedKey) |
| 339 | local-declaration | 지역 변수를 선언합니다: var persistedKey = ToPersistedCellScopedKey(scopedKey); |
| 339 | variable-initializer | 변수의 초기값을 지정합니다: persistedKey = ToPersistedCellScopedKey(scopedKey) |
| 340 | assignment | 값을 대상에 대입합니다: expectedValues[CreateKey("CELL", persistedKey)] = cellValue.Value |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey("CELL", persistedKey) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Add(FormatRecipeLine("CELL", persistedKey, cellValue.Value)) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine("CELL", persistedKey, cellValue.Value) |
| 344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid().ToString("N") |
| 344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 344 | local-declaration | 지역 변수를 선언합니다: var temporary = newPath + "." + Guid.NewGuid().ToString("N") + ".tmp"; |
| 344 | variable-initializer | 변수의 초기값을 지정합니다: temporary = newPath + "." + Guid.NewGuid().ToString("N") + ".tmp" |
| 345 | try | 예외 처리 범위입니다: try |
| 347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.WriteLines(temporary, lines) |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateSavedRecipeFile(temporary, expectedValues, cancellationToken) |
| 349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Move(temporary, newPath, overwrite: false) |
| 350 | try | 예외 처리 범위입니다: try |
| 352 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Delete(oldPath) |
| 354 | catch | 지정 예외를 처리합니다: catch  |
| 356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Delete(newPath) |
| 357 | throw | 예외를 발생/전달합니다: throw; |
| 360 | finally | 종료 정리 구간입니다: finally |
| 362 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(temporary) |
| 362 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(temporary)) |
| 363 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Delete(temporary) |
| 366 | if | 조건에 따라 분기합니다: if (writeHistory) |
| 367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeRename(oldRecipeName, newRecipeId) |
| 368 | return | 호출자에게 값 또는 제어를 반환합니다: return oldRecipeName; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RenameCore"]
 N0["L261 if"]
 M -->|포함| N0
 N1["L266 if"]
 M -->|포함| N1
 N2["L311 foreach"]
 M -->|포함| N2
 N3["L334 foreach"]
 M -->|포함| N3
 N4["L345 try"]
 M -->|포함| N4
 N5["L350 try"]
 N4 -->|포함| N5
 N6["L354 catch"]
 N5 -->|포함| N6
 N7["L360 finally"]
 N4 -->|포함| N7
 N8["L362 if"]
 N7 -->|포함| N8
 N9["L366 if"]
 M -->|포함| N9
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectGroupKey` · L273–276

[Drilling.File/JHMI/CJhmiRecipeFile.cs:273–276](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L273-L276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 275 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 275 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateKey(item.Tab, item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L278–281

[Drilling.File/JHMI/CJhmiRecipeFile.cs:278–281](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L278-L281)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 280 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L283–286

[Drilling.File/JHMI/CJhmiRecipeFile.cs:283–286](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L283-L286)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 285 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Last<Drilling.Common.Managers.ST_RECIPE_VALUE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 285 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 285 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeItem` · L301–304

[Drilling.File/JHMI/CJhmiRecipeFile.cs:301–304](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L301-L304)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 303 | IsCellScopedTemplate | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedTemplate(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) · Drilling.File/JHMI/CJhmiRecipeFile.cs:597 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedTemplate(item) |
| 303 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Use && !IsCellScopedTemplate(item); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectDisplayOrder` · L306–309

[Drilling.File/JHMI/CJhmiRecipeFile.cs:306–309](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L306-L309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 308 | return | 호출자에게 값 또는 제어를 반환합니다: return item.DisplayOrder; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesTab` · L319–322

[Drilling.File/JHMI/CJhmiRecipeFile.cs:319–322](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L319-L322)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesTab(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 321 | item.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 321 | IsCellScopedKey | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:592 |
| 321 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Tab.Equals("CELL", StringComparison.OrdinalIgnoreCase) |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedKey(item.Name) |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(item.Name) |
| 321 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Tab.Equals("CELL", StringComparison.OrdinalIgnoreCase) && IsCellScopedKey(item.Name) && GetCellNo(item.Name) <= activeCellCount; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSortKey` · L324–327

[Drilling.File/JHMI/CJhmiRecipeFile.cs:324–327](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L324-L327)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 326 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(item.Name) |
| 326 | return | 호출자에게 값 또는 제어를 반환합니다: return GetCellNo(item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectName` · L329–332

[Drilling.File/JHMI/CJhmiRecipeFile.cs:329–332](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L329-L332)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectName(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 331 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Delete` · L371–379

[Drilling.File/JHMI/CJhmiRecipeFile.cs:371–379](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L371-L379)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.Delete(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 378 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 378 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(DeleteCoreCallback, cancellationToken) |
| 378 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteFileOperation(DeleteCoreCallback, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `DeleteCoreCallback` · L373–376

[Drilling.File/JHMI/CJhmiRecipeFile.cs:373–376](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L373-L376)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void DeleteCoreCallback() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 375 | DeleteCore | resolved | string? Drilling.File.JHMI.CJhmiRecipeFile.DeleteCore(string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:381 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 375 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteCore(recipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteCore` · L381–415

[Drilling.File/JHMI/CJhmiRecipeFile.cs:381–415](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L381-L415)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string? Drilling.File.JHMI.CJhmiRecipeFile.DeleteCore(string, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| writeHistory | bool | None | True / true |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:375–375](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L375-L375) | DeleteCore | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1204–1204](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1204-L1204) | DeleteCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 383 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 384 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 386 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 404 | ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 404 | ReadRecipeValues(path, cancellationToken).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.GroupBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 404 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 405 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 408 | DeleteIfExists | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteIfExists(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1125 |
| 411 | _logManager.WriteRecipeDelete | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipeId) |
| 384 | local-declaration | 지역 변수를 선언합니다: var path = GetRecipePath(recipeId); |
| 384 | variable-initializer | 변수의 초기값을 지정합니다: path = GetRecipePath(recipeId) |
| 385 | local-declaration | 지역 변수를 선언합니다: var recipeName = recipeId; |
| 385 | variable-initializer | 변수의 초기값을 지정합니다: recipeName = recipeId |
| 386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(path) |
| 386 | local-declaration | 지역 변수를 선언합니다: var recipeExists = System.IO.File.Exists(path); |
| 386 | variable-initializer | 변수의 초기값을 지정합니다: recipeExists = System.IO.File.Exists(path) |
| 402 | if | 조건에 따라 분기합니다: if (recipeExists) |
| 404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase) |
| 404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken) |
| 404 | local-declaration | 지역 변수를 선언합니다: var values = ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase); |
| 404 | variable-initializer | 변수의 초기값을 지정합니다: values = ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 405 | assignment | 값을 대상에 대입합니다: recipeName = GetValue(values, "DEFAULT", "RECIPE_NAME", recipeId) |
| 405 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "DEFAULT", "RECIPE_NAME", recipeId) |
| 408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteIfExists(path) |
| 409 | if | 조건에 따라 분기합니다: if (recipeExists && writeHistory) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeDelete(recipeName) |
| 414 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipeExists ? recipeName : null |
| 414 | return | 호출자에게 값 또는 제어를 반환합니다: return recipeExists ? recipeName : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteCore"]
 N0["L402 if"]
 M -->|포함| N0
 N1["L409 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectGroupKey` · L387–390

[Drilling.File/JHMI/CJhmiRecipeFile.cs:387–390](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L387-L390)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 389 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 389 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 389 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateKey(item.Tab, item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L392–395

[Drilling.File/JHMI/CJhmiRecipeFile.cs:392–395](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L392-L395)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 394 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L397–400

[Drilling.File/JHMI/CJhmiRecipeFile.cs:397–400](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L397-L400)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 399 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Last<Drilling.Common.Managers.ST_RECIPE_VALUE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 399 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 399 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteFileOperation` · L417–428

[Drilling.File/JHMI/CJhmiRecipeFile.cs:417–428](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L417-L428)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<T> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<T>(System.Func<T>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<T> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| operation | System.Func<T> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L33-L33) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:59–59](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L59-L59) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:98–98](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L98-L98) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1284–1284](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1284-L1284) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1426–1477](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1426-L1477) | ExecuteFileOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 419 | _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 419 | _fileOperationLock.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 422 | Task.Run(operation, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<T> System.Threading.Tasks.Task<T>.ConfigureAwait(bool) |
| 422 | Task.Run | resolved | System.Threading.Tasks.Task<T> System.Threading.Tasks.Task.Run<T>(System.Func<T>, System.Threading.CancellationToken) |
| 426 | _fileOperationLock.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 419 | await | 비동기 완료를 기다립니다: await _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.WaitAsync(cancellationToken) |
| 420 | try | 예외 처리 범위입니다: try |
| 422 | await | 비동기 완료를 기다립니다: await Task.Run(operation, cancellationToken).ConfigureAwait(false) |
| 422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(operation, cancellationToken).ConfigureAwait(false) |
| 422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(operation, cancellationToken) |
| 422 | return | 호출자에게 값 또는 제어를 반환합니다: return await Task.Run(operation, cancellationToken).ConfigureAwait(false); |
| 424 | finally | 종료 정리 구간입니다: finally |
| 426 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ExecuteFileOperation"]
 N0["L420 try"]
 M -->|포함| N0
 N1["L424 finally"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteFileOperation` · L430–441

[Drilling.File/JHMI/CJhmiRecipeFile.cs:430–441](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L430-L441)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| operation | System.Action | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:36–49](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L36-L49) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:117–117](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L117-L117) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L252-L252) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:378–378](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L378-L378) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1135–1135](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1135-L1135) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1177–1177](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1177-L1177) | ExecuteFileOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1296–1296](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1296-L1296) | ExecuteFileOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 432 | _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 432 | _fileOperationLock.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 435 | Task.Run(operation, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 435 | Task.Run | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Run(System.Action, System.Threading.CancellationToken) |
| 439 | _fileOperationLock.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 432 | await | 비동기 완료를 기다립니다: await _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.WaitAsync(cancellationToken) |
| 433 | try | 예외 처리 범위입니다: try |
| 435 | await | 비동기 완료를 기다립니다: await Task.Run(operation, cancellationToken).ConfigureAwait(false) |
| 435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(operation, cancellationToken).ConfigureAwait(false) |
| 435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(operation, cancellationToken) |
| 437 | finally | 종료 정리 구간입니다: finally |
| 439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _fileOperationLock.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ExecuteFileOperation"]
 N0["L433 try"]
 M -->|포함| N0
 N1["L437 finally"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadRecipe` · L443–590

[Drilling.File/JHMI/CJhmiRecipeFile.cs:443–590](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L443-L590)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.File.JHMI.CJhmiRecipeFile.LoadRecipe(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | string | None | False /  |
| formItems | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:76–76](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L76-L76) | LoadRecipe | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L107-L107) | LoadRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 445 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 446 | Path.GetFileNameWithoutExtension | resolved | string? System.IO.Path.GetFileNameWithoutExtension(string?) |
| 447 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 452 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 468 | recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 468 | recipeValues.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.GroupBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 469 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 470 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 504 | formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select(BuildRecipe).ToList | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 504 | formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.Select<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 504 | formItems.Where(IsUse).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.OrderBy<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, int>) |
| 504 | formItems.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.Where<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 520 | formItems.GroupBy(SelectName, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, System.Collections.Generic.IEqualityComparer<string>?) |
| 520 | formItems.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.GroupBy<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 526 | new HashSet<string> | resolved | System.Collections.Generic.HashSet<string>.HashSet(System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 526 | parameters.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Select<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>) |
| 542 | recipeValues.Where(ShouldIncludeItem).OrderBy(SelectSortKey).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.ThenBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IComparer<string>?) |
| 542 | recipeValues.Where(ShouldIncludeItem).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.OrderBy<Drilling.Common.Managers.ST_RECIPE_VALUE, int>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, int>) |
| 542 | recipeValues.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Where<Drilling.Common.Managers.ST_RECIPE_VALUE>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, bool>) |
| 544 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 545 | NormalizeCellScopedParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:717 |
| 545 | GetCellParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:706 |
| 547 | IsCellPlacementParameterName | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellPlacementParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:722 |
| 547 | formItemsByName.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.TryGetValue(string, out Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 547 | formItemsByName.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.TryGetValue(string, out Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 548 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 549 | parameterKeys.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 556 | CreateShotGroupOverrideParameter | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.File.JHMI.CJhmiRecipeFile.CreateShotGroupOverrideParameter(int, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:754 |
| 556 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 559 | parameters.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Add(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 560 | parameterKeys.Add | resolved | bool System.Collections.Generic.HashSet<string>.Add(string) |
| 566 | parameters.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Add(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 566 | new ST_RECIPE_PARAMETER | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER.ST_RECIPE_PARAMETER(string, string, string, string, string, string, string, string, string, bool, bool, int, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double, double, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:357 |
| 570 | template.Min.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 570 | template.Max.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 573 | GetCellScopedGroup | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellScopedGroup(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:732 |
| 585 | parameterKeys.Add | resolved | bool System.Collections.Generic.HashSet<string>.Add(string) |
| 588 | _logManager.ReadRecipeRecent | unresolved | None |
| 589 | new ST_RECIPE_DEFINITION | candidate | OverloadResolutionFailure |
| 589 | parameters.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 445 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileNameWithoutExtension(path) |
| 446 | local-declaration | 지역 변수를 선언합니다: var recipeId = Path.GetFileNameWithoutExtension(path); |
| 446 | variable-initializer | 변수의 초기값을 지정합니다: recipeId = Path.GetFileNameWithoutExtension(path) |
| 447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(recipeId) |
| 447 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(recipeId)) |
| 449 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken) |
| 452 | local-declaration | 지역 변수를 선언합니다: var recipeValues = ReadRecipeValues(path, cancellationToken); |
| 452 | variable-initializer | 변수의 초기값을 지정합니다: recipeValues = ReadRecipeValues(path, cancellationToken) |
| 468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase) |
| 468 | local-declaration | 지역 변수를 선언합니다: var values = recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase); |
| 468 | variable-initializer | 변수의 초기값을 지정합니다: values = recipeValues.GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 469 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 470 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "DEFAULT", "RECIPE_NAME", recipeId) |
| 470 | local-declaration | 지역 변수를 선언합니다: var recipeName = GetValue(values, "DEFAULT", "RECIPE_NAME", recipeId); |
| 470 | variable-initializer | 변수의 초기값을 지정합니다: recipeName = GetValue(values, "DEFAULT", "RECIPE_NAME", recipeId) |
| 504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select(BuildRecipe).ToList() |
| 504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select(BuildRecipe) |
| 504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(IsUse).OrderBy(SelectDisplayOrder) |
| 504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.Where(IsUse) |
| 504 | local-declaration | 지역 변수를 선언합니다: var parameters = formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select(BuildRecipe).ToList(); |
| 504 | variable-initializer | 변수의 초기값을 지정합니다: parameters = formItems.Where(IsUse).OrderBy(SelectDisplayOrder).Select(BuildRecipe).ToList() |
| 520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.GroupBy(SelectName, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectFormItemGroupKey, SelectRecipe, StringComparer.OrdinalIgnoreCase) |
| 520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.GroupBy(SelectName, StringComparer.OrdinalIgnoreCase) |
| 520 | local-declaration | 지역 변수를 선언합니다: var formItemsByName = formItems.GroupBy(SelectName, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectFormItemGroupKey, SelectRecipe, StringComparer.OrdinalIgnoreCase); |
| 520 | variable-initializer | 변수의 초기값을 지정합니다: formItemsByName = formItems.GroupBy(SelectName, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectFormItemGroupKey, SelectRecipe, StringComparer.OrdinalIgnoreCase) |
| 526 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<string>(parameters.Select(SelectParameterKey), StringComparer.OrdinalIgnoreCase) |
| 526 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Select(SelectParameterKey) |
| 526 | local-declaration | 지역 변수를 선언합니다: var parameterKeys = new HashSet<string>(parameters.Select(SelectParameterKey), StringComparer.OrdinalIgnoreCase); |
| 526 | variable-initializer | 변수의 초기값을 지정합니다: parameterKeys = new HashSet<string>(parameters.Select(SelectParameterKey), StringComparer.OrdinalIgnoreCase) |
| 542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(ShouldIncludeItem).OrderBy(SelectSortKey).ThenBy(SelectName2, StringComparer.OrdinalIgnoreCase) |
| 542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(ShouldIncludeItem).OrderBy(SelectSortKey) |
| 542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeValues.Where(ShouldIncludeItem) |
| 542 | foreach | 컬렉션 요소를 순회합니다: foreach (var cellValue in recipeValues.Where(ShouldIncludeItem).OrderBy(SelectSortKey).ThenBy(SelectName2, StringComparer.OrdinalIgnoreCase)) |
| 544 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 545 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)) |
| 545 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellParameterName(cellValue.Name) |
| 545 | local-declaration | 지역 변수를 선언합니다: var parameterName = NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)); |
| 545 | variable-initializer | 변수의 초기값을 지정합니다: parameterName = NormalizeCellScopedParameterName(GetCellParameterName(cellValue.Name)) |
| 546 | local-declaration | 지역 변수를 선언합니다: ST_RECIPE_FORM_ITEM? template = null; |
| 546 | variable-initializer | 변수의 초기값을 지정합니다: template = null |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellPlacementParameterName(parameterName) |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItemsByName.TryGetValue(parameterName, out template) |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItemsByName.TryGetValue($"CELL_{parameterName}", out template) |
| 547 | local-declaration | 지역 변수를 선언합니다: var hasTemplate = IsCellPlacementParameterName(parameterName) && (formItemsByName.TryGetValue(parameterName, out template) &#124;&#124; formItemsByName.TryGetValue($"CELL_{parameterName}", out template)); |
| 547 | variable-initializer | 변수의 초기값을 지정합니다: hasTemplate = IsCellPlacementParameterName(parameterName) && (formItemsByName.TryGetValue(parameterName, out template) &#124;&#124; formItemsByName.TryGetValue($"CELL_{parameterName}", out template)) |
| 548 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(cellValue.Name) |
| 548 | local-declaration | 지역 변수를 선언합니다: var normalizedScopedKey = $"CELL{GetCellNo(cellValue.Name)}_{parameterName}"; |
| 548 | variable-initializer | 변수의 초기값을 지정합니다: normalizedScopedKey = $"CELL{GetCellNo(cellValue.Name)}_{parameterName}" |
| 549 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterKeys.Contains(normalizedScopedKey) |
| 549 | if | 조건에 따라 분기합니다: if (parameterKeys.Contains(normalizedScopedKey)) |
| 551 | continue | 다음 반복으로 진행합니다: continue; |
| 554 | if | 조건에 따라 분기합니다: if (!hasTemplate) |
| 556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateShotGroupOverrideParameter(GetCellNo(cellValue.Name), parameterName, normalizedScopedKey, cellValue.Value) |
| 556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(cellValue.Name) |
| 556 | local-declaration | 지역 변수를 선언합니다: var shotGroupOverride = CreateShotGroupOverrideParameter(GetCellNo(cellValue.Name), parameterName, normalizedScopedKey, cellValue.Value); |
| 556 | variable-initializer | 변수의 초기값을 지정합니다: shotGroupOverride = CreateShotGroupOverrideParameter(GetCellNo(cellValue.Name), parameterName, normalizedScopedKey, cellValue.Value) |
| 557 | if | 조건에 따라 분기합니다: if (shotGroupOverride is not null) |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Add(shotGroupOverride) |
| 560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterKeys.Add(normalizedScopedKey) |
| 563 | continue | 다음 반복으로 진행합니다: continue; |
| 566 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Add(new ST_RECIPE_PARAMETER( template!.DisplayName, cellValue.Value, template.Unit, $"{template.Min.ToString("0.###", CultureInfo.InvariantCulture)} - {template.Max.ToString("0.###", CultureInfo.InvariantCultu… |
| 566 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_PARAMETER( template!.DisplayName, cellValue.Value, template.Unit, $"{template.Min.ToString("0.###", CultureInfo.InvariantCulture)} - {template.Max.ToString("0.###", CultureInfo.InvariantCulture)}", template… |
| 570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: template.Min.ToString("0.###", CultureInfo.InvariantCulture) |
| 570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: template.Max.ToString("0.###", CultureInfo.InvariantCulture) |
| 573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellScopedGroup(parameterName) |
| 585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterKeys.Add(normalizedScopedKey) |
| 588 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.ReadRecipeRecent(recipeName, recipeId) |
| 588 | local-declaration | 지역 변수를 선언합니다: var history = _logManager.ReadRecipeRecent(recipeName, recipeId); |
| 588 | variable-initializer | 변수의 초기값을 지정합니다: history = _logManager.ReadRecipeRecent(recipeName, recipeId) |
| 589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_DEFINITION(recipeId, recipeName, parameters.ToArray(), history) |
| 589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.ToArray() |
| 589 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_RECIPE_DEFINITION(recipeId, recipeName, parameters.ToArray(), history); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadRecipe"]
 N0["L447 if"]
 M -->|포함| N0
 N1["L542 foreach"]
 M -->|포함| N1
 N2["L549 if"]
 N1 -->|포함| N2
 N3["L554 if"]
 N1 -->|포함| N3
 N4["L557 if"]
 N3 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectGroupKey` · L453–456

[Drilling.File/JHMI/CJhmiRecipeFile.cs:453–456](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L453-L456)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 455 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 455 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 455 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateKey(item.Tab, item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L458–461

[Drilling.File/JHMI/CJhmiRecipeFile.cs:458–461](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L458-L461)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 460 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L463–466

[Drilling.File/JHMI/CJhmiRecipeFile.cs:463–466](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L463-L466)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 465 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Last<Drilling.Common.Managers.ST_RECIPE_VALUE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 465 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 465 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `IsUse` · L471–474

[Drilling.File/JHMI/CJhmiRecipeFile.cs:471–474](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L471-L474)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool IsUse(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 473 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Use; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectDisplayOrder` · L476–479

[Drilling.File/JHMI/CJhmiRecipeFile.cs:476–479](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L476-L479)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectDisplayOrder(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 478 | return | 호출자에게 값 또는 제어를 반환합니다: return item.DisplayOrder; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `BuildRecipe` · L481–502

[Drilling.File/JHMI/CJhmiRecipeFile.cs:481–502](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L481-L502)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_PARAMETER BuildRecipe(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_PARAMETER |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 483 | new ST_RECIPE_PARAMETER | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER.ST_RECIPE_PARAMETER(string, string, string, string, string, string, string, string, string, bool, bool, int, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double, double, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:357 |
| 485 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 487 | item.Min.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 487 | item.Max.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_PARAMETER( item.DisplayName, GetValue(values, item.Tab, item.Name, item.DefaultValue), item.Unit, $"{item.Min.ToString("0.###", CultureInfo.InvariantCulture)} - {item.Max.ToString("0.###", CultureInfo.Invar… |
| 483 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_RECIPE_PARAMETER( item.DisplayName, GetValue(values, item.Tab, item.Name, item.DefaultValue), item.Unit, $"{item.Min.ToString("0.###", CultureInfo.InvariantCulture)} - {item.Max.ToString("0.###", CultureInfo.Invarian |
| 485 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, item.Tab, item.Name, item.DefaultValue) |
| 487 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Min.ToString("0.###", CultureInfo.InvariantCulture) |
| 487 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Max.ToString("0.###", CultureInfo.InvariantCulture) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectName` · L505–508

[Drilling.File/JHMI/CJhmiRecipeFile.cs:505–508](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L505-L508)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectName(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 507 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectFormItemGroupKey` · L510–513

[Drilling.File/JHMI/CJhmiRecipeFile.cs:510–513](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L510-L513)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectFormItemGroupKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 512 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectRecipe` · L515–518

[Drilling.File/JHMI/CJhmiRecipeFile.cs:515–518](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L515-L518)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM SelectRecipe(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 517 | group.First | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.First<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.First() |
| 517 | return | 호출자에게 값 또는 제어를 반환합니다: return group.First(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectParameterKey` · L521–524

[Drilling.File/JHMI/CJhmiRecipeFile.cs:521–524](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L521-L524)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 523 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeItem` · L527–530

[Drilling.File/JHMI/CJhmiRecipeFile.cs:527–530](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L527-L530)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 529 | item.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 529 | IsCellScopedKey | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:592 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 529 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Tab.Equals("CELL", StringComparison.OrdinalIgnoreCase) |
| 529 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCellScopedKey(item.Name) |
| 529 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Tab.Equals("CELL", StringComparison.OrdinalIgnoreCase) && IsCellScopedKey(item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSortKey` · L532–535

[Drilling.File/JHMI/CJhmiRecipeFile.cs:532–535](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L532-L535)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectSortKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 534 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 534 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(item.Name) |
| 534 | return | 호출자에게 값 또는 제어를 반환합니다: return GetCellNo(item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectName2` · L537–540

[Drilling.File/JHMI/CJhmiRecipeFile.cs:537–540](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L537-L540)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectName2(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 539 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsCellScopedKey` · L592–595

[Drilling.File/JHMI/CJhmiRecipeFile.cs:592–595](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L592-L595)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedKey(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:145–145](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L145-L145) | IsCellScopedKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L153-L153) | IsCellScopedKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:321–321](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L321-L321) | IsCellScopedKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:529–529](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L529-L529) | IsCellScopedKey | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 594 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 594 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 594 | GetCellParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:706 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(key) |
| 594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(GetCellParameterName(key)) |
| 594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellParameterName(key) |
| 594 | return | 호출자에게 값 또는 제어를 반환합니다: return GetCellNo(key) > 0 && !string.IsNullOrWhiteSpace(GetCellParameterName(key)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsCellScopedTemplate` · L597–600

[Drilling.File/JHMI/CJhmiRecipeFile.cs:597–600](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L597-L600)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellScopedTemplate(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:180–180](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L180-L180) | IsCellScopedTemplate | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:303–303](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L303-L303) | IsCellScopedTemplate | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 599 | item.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 599 | CellScopedTemplateNames.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Tab.Equals("PROCESS", StringComparison.OrdinalIgnoreCase) |
| 599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CellScopedTemplateNames.Contains(item.Name) |
| 599 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Tab.Equals("PROCESS", StringComparison.OrdinalIgnoreCase) && CellScopedTemplateNames.Contains(item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetActiveCellCount` · L602–614

[Drilling.File/JHMI/CJhmiRecipeFile.cs:602–614](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L602-L614)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:149–149](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L149-L149) | GetActiveCellCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 609 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 610 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 611 | GetActiveCellCountMinimum | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMinimum(double?, double?) · Drilling.File/JHMI/CJhmiRecipeFile.cs:685 |
| 612 | GetActiveCellCountMaximum | resolved | int? Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMaximum(double?, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:690 |
| 613 | ParseActiveCellCount | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ParseActiveCellCount(string?, int, int?) · Drilling.File/JHMI/CJhmiRecipeFile.cs:675 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(MatchesItem) |
| 609 | local-declaration | 지역 변수를 선언합니다: var countValue = parameters.FirstOrDefault(MatchesItem)?.Value; |
| 609 | variable-initializer | 변수의 초기값을 지정합니다: countValue = parameters.FirstOrDefault(MatchesItem)?.Value |
| 610 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(MatchesItem) |
| 610 | local-declaration | 지역 변수를 선언합니다: var countItem = parameters.FirstOrDefault(MatchesItem); |
| 610 | variable-initializer | 변수의 초기값을 지정합니다: countItem = parameters.FirstOrDefault(MatchesItem) |
| 611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCountMinimum(countItem?.Min, countItem?.Max) |
| 611 | local-declaration | 지역 변수를 선언합니다: var minimum = GetActiveCellCountMinimum(countItem?.Min, countItem?.Max); |
| 611 | variable-initializer | 변수의 초기값을 지정합니다: minimum = GetActiveCellCountMinimum(countItem?.Min, countItem?.Max) |
| 612 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCountMaximum(countItem?.Max, minimum) |
| 612 | local-declaration | 지역 변수를 선언합니다: var maximum = GetActiveCellCountMaximum(countItem?.Max, minimum); |
| 612 | variable-initializer | 변수의 초기값을 지정합니다: maximum = GetActiveCellCountMaximum(countItem?.Max, minimum) |
| 613 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseActiveCellCount(countValue, minimum, maximum) |
| 613 | return | 호출자에게 값 또는 제어를 반환합니다: return ParseActiveCellCount(countValue, minimum, maximum); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L604–607

[Drilling.File/JHMI/CJhmiRecipeFile.cs:604–607](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L604-L607)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 606 | parameter.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 606 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameter.Key.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase) |
| 606 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter.Key.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadPositiveInt` · L616–625

[Drilling.File/JHMI/CJhmiRecipeFile.cs:616–625](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L616-L625)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:629–629](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L629-L629) | ReadPositiveInt | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:630–630](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L630-L630) | ReadPositiveInt | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:631–631](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L631-L631) | ReadPositiveInt | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:635–635](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L635-L635) | ReadPositiveInt | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:636–636](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L636-L636) | ReadPositiveInt | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:643–643](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L643-L643) | ReadPositiveInt | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 623 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 624 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 623 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(MatchesItem) |
| 623 | local-declaration | 지역 변수를 선언합니다: var value = parameters.FirstOrDefault(MatchesItem)?.Value; |
| 623 | variable-initializer | 변수의 초기값을 지정합니다: value = parameters.FirstOrDefault(MatchesItem)?.Value |
| 624 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) |
| 624 | conditional-expression | 조건에 따라 결과식을 선택합니다: int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) && parsed > 0 ? parsed : 0 |
| 624 | return | 호출자에게 값 또는 제어를 반환합니다: return int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) && parsed > 0 ? parsed : 0; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L618–621

[Drilling.File/JHMI/CJhmiRecipeFile.cs:618–621](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L618-L621)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 620 | parameter.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 620 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameter.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 620 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter.Key.Equals(key, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CalculateActiveShotGroupBoundsByCell` · L627–648

[Drilling.File/JHMI/CJhmiRecipeFile.cs:627–648](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L627-L648)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS> Drilling.File.JHMI.CJhmiRecipeFile.CalculateActiveShotGroupBoundsByCell(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |
| activeCellCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:150–150](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L150-L150) | CalculateActiveShotGroupBoundsByCell | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 629 | Math.Clamp | resolved | int System.Math.Clamp(int, int, int) |
| 629 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 630 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 631 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 632 | new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS> | resolved | System.Collections.Generic.Dictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>.Dictionary(int) |
| 635 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 636 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 637 | new ST_SHOT_GROUP_PATTERN_BOUNDS | resolved | Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS.ST_SHOT_GROUP_PATTERN_BOUNDS(bool, int, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:847 |
| 637 | new ST_SHOT_GROUP_PATTERN_BOUNDS | resolved | Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS.ST_SHOT_GROUP_PATTERN_BOUNDS(bool, int, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:847 |
| 640 | new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS> | resolved | System.Collections.Generic.Dictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>.Dictionary(int) |
| 643 | Math.Clamp | resolved | int System.Math.Clamp(int, int, int) |
| 643 | ReadPositiveInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadPositiveInt(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:616 |
| 644 | boundsByModel.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>.TryGetValue(int, out Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS) |
| 644 | new ST_SHOT_GROUP_PATTERN_BOUNDS | resolved | Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS.ST_SHOT_GROUP_PATTERN_BOUNDS(bool, int, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:847 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(ReadPositiveInt(parameters, "CELL_MODEL_TYPE_COUNT"), 1, CRecipeModelPixelCountReader.MaximumCellModelTypeCount) |
| 629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, "CELL_MODEL_TYPE_COUNT") |
| 629 | local-declaration | 지역 변수를 선언합니다: var modelTypeCount = Math.Clamp(ReadPositiveInt(parameters, "CELL_MODEL_TYPE_COUNT"), 1, CRecipeModelPixelCountReader.MaximumCellModelTypeCount); |
| 629 | variable-initializer | 변수의 초기값을 지정합니다: modelTypeCount = Math.Clamp(ReadPositiveInt(parameters, "CELL_MODEL_TYPE_COUNT"), 1, CRecipeModelPixelCountReader.MaximumCellModelTypeCount) |
| 630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, "PITCH") |
| 630 | local-declaration | 지역 변수를 선언합니다: var processPitch = ReadPositiveInt(parameters, "PITCH"); |
| 630 | variable-initializer | 변수의 초기값을 지정합니다: processPitch = ReadPositiveInt(parameters, "PITCH") |
| 631 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, "SPLITED_BEAM_COUNT") |
| 631 | local-declaration | 지역 변수를 선언합니다: var splitBeamCount = ReadPositiveInt(parameters, "SPLITED_BEAM_COUNT"); |
| 631 | variable-initializer | 변수의 초기값을 지정합니다: splitBeamCount = ReadPositiveInt(parameters, "SPLITED_BEAM_COUNT") |
| 632 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(modelTypeCount) |
| 632 | local-declaration | 지역 변수를 선언합니다: var boundsByModel = new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(modelTypeCount); |
| 632 | variable-initializer | 변수의 초기값을 지정합니다: boundsByModel = new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(modelTypeCount) |
| 633 | variable-initializer | 변수의 초기값을 지정합니다: modelType = 1 |
| 633 | for | 초기화·조건·증감이 있는 반복입니다: for (var modelType = 1; modelType <= modelTypeCount; modelType++) |
| 635 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_X") |
| 635 | local-declaration | 지역 변수를 선언합니다: var pixelCountX = ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_X"); |
| 635 | variable-initializer | 변수의 초기값을 지정합니다: pixelCountX = ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_X") |
| 636 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_Y") |
| 636 | local-declaration | 지역 변수를 선언합니다: var pixelCountY = ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_Y"); |
| 636 | variable-initializer | 변수의 초기값을 지정합니다: pixelCountY = ReadPositiveInt(parameters, $"MODEL{modelType}_NUM_OF_PIXEL_Y") |
| 637 | assignment | 값을 대상에 대입합니다: boundsByModel[modelType] = pixelCountX <= 0 &#124;&#124; pixelCountY <= 0 &#124;&#124; processPitch <= 0 &#124;&#124; splitBeamCount <= 0 ? new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) : new ST_SHOT_GROUP_PATTERN_BOUNDS(true, pixelCountX / processPitch, pixel |
| 637 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) |
| 637 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SHOT_GROUP_PATTERN_BOUNDS(true, pixelCountX / processPitch, pixelCountY / processPitch) |
| 637 | conditional-expression | 조건에 따라 결과식을 선택합니다: pixelCountX <= 0 &#124;&#124; pixelCountY <= 0 &#124;&#124; processPitch <= 0 &#124;&#124; splitBeamCount <= 0 ? new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) : new ST_SHOT_GROUP_PATTERN_BOUNDS(true, pixelCountX / processPitch, pixelCountY / processPitch) |
| 640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(activeCellCount) |
| 640 | local-declaration | 지역 변수를 선언합니다: var boundsByCell = new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(activeCellCount); |
| 640 | variable-initializer | 변수의 초기값을 지정합니다: boundsByCell = new Dictionary<int, ST_SHOT_GROUP_PATTERN_BOUNDS>(activeCellCount) |
| 641 | variable-initializer | 변수의 초기값을 지정합니다: cellNo = 1 |
| 641 | for | 초기화·조건·증감이 있는 반복입니다: for (var cellNo = 1; cellNo <= activeCellCount; cellNo++) |
| 643 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(ReadPositiveInt(parameters, $"CELL{cellNo}_MODEL_TYPE"), 1, modelTypeCount) |
| 643 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadPositiveInt(parameters, $"CELL{cellNo}_MODEL_TYPE") |
| 643 | local-declaration | 지역 변수를 선언합니다: var modelType = Math.Clamp(ReadPositiveInt(parameters, $"CELL{cellNo}_MODEL_TYPE"), 1, modelTypeCount); |
| 643 | variable-initializer | 변수의 초기값을 지정합니다: modelType = Math.Clamp(ReadPositiveInt(parameters, $"CELL{cellNo}_MODEL_TYPE"), 1, modelTypeCount) |
| 644 | assignment | 값을 대상에 대입합니다: boundsByCell[cellNo] = boundsByModel.TryGetValue(modelType, out var bounds) ? bounds : new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) |
| 644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: boundsByModel.TryGetValue(modelType, out var bounds) |
| 644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) |
| 644 | conditional-expression | 조건에 따라 결과식을 선택합니다: boundsByModel.TryGetValue(modelType, out var bounds) ? bounds : new ST_SHOT_GROUP_PATTERN_BOUNDS(false, 0, 0) |
| 647 | return | 호출자에게 값 또는 제어를 반환합니다: return boundsByCell; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CalculateActiveShotGroupBoundsByCell"]
 N0["L633 for"]
 M -->|포함| N0
 N1["L641 for"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsShotGroupOverrideWithinActivePattern` · L650–664

[Drilling.File/JHMI/CJhmiRecipeFile.cs:650–664](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L650-L664)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsShotGroupOverrideWithinActivePattern(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |
| boundsByCell | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L153-L153) | IsShotGroupOverrideWithinActivePattern | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 652 | boundsByCell.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<int, Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS>.TryGetValue(int, out Drilling.File.JHMI.CJhmiRecipeFile.ST_SHOT_GROUP_PATTERN_BOUNDS) |
| 652 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 662 | NormalizeCellScopedParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:717 |
| 662 | GetCellParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:706 |
| 663 | TryGetShotGroupOverrideMetadata | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:786 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: boundsByCell.TryGetValue(GetCellNo(parameter.Key), out var bounds) |
| 652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(parameter.Key) |
| 652 | if | 조건에 따라 분기합니다: if (!boundsByCell.TryGetValue(GetCellNo(parameter.Key), out var bounds)) |
| 654 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 657 | if | 조건에 따라 분기합니다: if (!bounds.IsDefined) |
| 659 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)) |
| 662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellParameterName(parameter.Key) |
| 662 | local-declaration | 지역 변수를 선언합니다: var parameterName = NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)); |
| 662 | variable-initializer | 변수의 초기값을 지정합니다: parameterName = NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)) |
| 663 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetShotGroupOverrideMetadata(parameterName, out _, out var column, out var row, out _, out _, out _, out _) |
| 663 | return | 호출자에게 값 또는 제어를 반환합니다: return !TryGetShotGroupOverrideMetadata(parameterName, out _, out var column, out var row, out _, out _, out _, out _) &#124;&#124; column <= bounds.GroupCountX && row <= bounds.GroupCountY; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsShotGroupOverrideWithinActivePattern"]
 N0["L652 if"]
 M -->|포함| N0
 N1["L657 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetActiveCellCount` · L666–673

[Drilling.File/JHMI/CJhmiRecipeFile.cs:666–673](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L666-L673)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCount(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| formItems | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:290–290](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L290-L290) | GetActiveCellCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 668 | GetValue | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1046 |
| 669 | formItems.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 669 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 670 | GetActiveCellCountMinimum | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMinimum(double?, double?) · Drilling.File/JHMI/CJhmiRecipeFile.cs:685 |
| 671 | GetActiveCellCountMaximum | resolved | int? Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMaximum(double?, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:690 |
| 672 | ParseActiveCellCount | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ParseActiveCellCount(string?, int, int?) · Drilling.File/JHMI/CJhmiRecipeFile.cs:675 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "COMMON", "MAX_CELL_NUMBER", "") |
| 668 | local-declaration | 지역 변수를 선언합니다: var countValue = GetValue(values, "COMMON", "MAX_CELL_NUMBER", ""); |
| 668 | variable-initializer | 변수의 초기값을 지정합니다: countValue = GetValue(values, "COMMON", "MAX_CELL_NUMBER", "") |
| 669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.FirstOrDefault(item => item.Name.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase)) |
| 669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase) |
| 669 | local-declaration | 지역 변수를 선언합니다: var countItem = formItems.FirstOrDefault(item => item.Name.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase)); |
| 669 | variable-initializer | 변수의 초기값을 지정합니다: countItem = formItems.FirstOrDefault(item => item.Name.Equals("MAX_CELL_NUMBER", StringComparison.OrdinalIgnoreCase)) |
| 670 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCountMinimum(countItem?.Min, countItem?.Max) |
| 670 | local-declaration | 지역 변수를 선언합니다: var minimum = GetActiveCellCountMinimum(countItem?.Min, countItem?.Max); |
| 670 | variable-initializer | 변수의 초기값을 지정합니다: minimum = GetActiveCellCountMinimum(countItem?.Min, countItem?.Max) |
| 671 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveCellCountMaximum(countItem?.Max, minimum) |
| 671 | local-declaration | 지역 변수를 선언합니다: var maximum = GetActiveCellCountMaximum(countItem?.Max, minimum); |
| 671 | variable-initializer | 변수의 초기값을 지정합니다: maximum = GetActiveCellCountMaximum(countItem?.Max, minimum) |
| 672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseActiveCellCount(countValue, minimum, maximum) |
| 672 | return | 호출자에게 값 또는 제어를 반환합니다: return ParseActiveCellCount(countValue, minimum, maximum); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseActiveCellCount` · L675–683

[Drilling.File/JHMI/CJhmiRecipeFile.cs:675–683](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L675-L683)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.ParseActiveCellCount(string?, int, int?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string? | None | False /  |
| minimum | int | None | False /  |
| maximum | int? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:613–613](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L613-L613) | ParseActiveCellCount | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:672–672](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L672-L672) | ParseActiveCellCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 677 | CCellPatternCalculator.TryParseCellCount | resolved | bool Drilling.Common.Recipe.CCellPatternCalculator.TryParseCellCount(string?, int, int?, out int, out string) · Drilling.Common/Recipe/CCellPatternCalculator.cs:35 |
| 679 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 677 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.TryParseCellCount(value, minimum, maximum, out var count, out var validationMessage) |
| 677 | if | 조건에 따라 분기합니다: if (!CCellPatternCalculator.TryParseCellCount(value, minimum, maximum, out var count, out var validationMessage)) |
| 679 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException(validationMessage) |
| 679 | throw | 예외를 발생/전달합니다: throw new InvalidDataException(validationMessage); |
| 682 | return | 호출자에게 값 또는 제어를 반환합니다: return count; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseActiveCellCount"]
 N0["L677 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetActiveCellCountMinimum` · L685–688

[Drilling.File/JHMI/CJhmiRecipeFile.cs:685–688](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L685-L688)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMinimum(double?, double?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| min | double? | None | False /  |
| max | double? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:611–611](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L611-L611) | GetActiveCellCountMinimum | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:670–670](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L670-L670) | GetActiveCellCountMinimum | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 687 | Math.Max | resolved | int System.Math.Max(int, int) |
| 687 | Math.Ceiling | resolved | double System.Math.Ceiling(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(min.Value)) |
| 687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Ceiling(min.Value) |
| 687 | conditional-expression | 조건에 따라 결과식을 선택합니다: min.HasValue && max.HasValue && max.Value > min.Value ? Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(min.Value)) : CCellPatternCalculator.MinCellCount |
| 687 | return | 호출자에게 값 또는 제어를 반환합니다: return min.HasValue && max.HasValue && max.Value > min.Value ? Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(min.Value)) : CCellPatternCalculator.MinCellCount; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetActiveCellCountMaximum` · L690–693

[Drilling.File/JHMI/CJhmiRecipeFile.cs:690–693](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L690-L693)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int? Drilling.File.JHMI.CJhmiRecipeFile.GetActiveCellCountMaximum(double?, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| max | double? | None | False /  |
| minimum | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:612–612](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L612-L612) | GetActiveCellCountMaximum | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:671–671](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L671-L671) | GetActiveCellCountMaximum | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 692 | Math.Floor | resolved | double System.Math.Floor(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 692 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Floor(max.Value) |
| 692 | conditional-expression | 조건에 따라 결과식을 선택합니다: max.HasValue && max.Value >= minimum ? (int)Math.Floor(max.Value) : null |
| 692 | return | 호출자에게 값 또는 제어를 반환합니다: return max.HasValue && max.Value >= minimum ? (int)Math.Floor(max.Value) : null; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCellNo` · L695–704

[Drilling.File/JHMI/CJhmiRecipeFile.cs:695–704](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L695-L704)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L153-L153) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L158-L158) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:321–321](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L321-L321) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:326–326](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L326-L326) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:338–338](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L338-L338) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:534–534](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L534-L534) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:548–548](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L548-L548) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:556–556](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L556-L556) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L594-L594) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:652–652](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L652-L652) | GetCellNo | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:744–744](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L744-L744) | GetCellNo | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 697 | key.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 702 | GetCellKeySeparatorIndex | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellKeySeparatorIndex(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:712 |
| 703 | int.TryParse | resolved | bool int.TryParse(System.ReadOnlySpan<char>, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 703 | key.AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: key.StartsWith("CELL", StringComparison.OrdinalIgnoreCase) |
| 697 | if | 조건에 따라 분기합니다: if (!key.StartsWith("CELL", StringComparison.OrdinalIgnoreCase)) |
| 699 | return | 호출자에게 값 또는 제어를 반환합니다: return 0; |
| 702 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellKeySeparatorIndex(key) |
| 702 | local-declaration | 지역 변수를 선언합니다: var separatorIndex = GetCellKeySeparatorIndex(key); |
| 702 | variable-initializer | 변수의 초기값을 지정합니다: separatorIndex = GetCellKeySeparatorIndex(key) |
| 703 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(key.AsSpan(4, separatorIndex - 4), NumberStyles.None, CultureInfo.InvariantCulture, out var cellNo) |
| 703 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: key.AsSpan(4, separatorIndex - 4) |
| 703 | conditional-expression | 조건에 따라 결과식을 선택합니다: separatorIndex > 4 && int.TryParse(key.AsSpan(4, separatorIndex - 4), NumberStyles.None, CultureInfo.InvariantCulture, out var cellNo) ? cellNo : 0 |
| 703 | return | 호출자에게 값 또는 제어를 반환합니다: return separatorIndex > 4 && int.TryParse(key.AsSpan(4, separatorIndex - 4), NumberStyles.None, CultureInfo.InvariantCulture, out var cellNo) ? cellNo : 0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCellNo"]
 N0["L697 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCellParameterName` · L706–710

[Drilling.File/JHMI/CJhmiRecipeFile.cs:706–710](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L706-L710)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:337–337](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L337-L337) | GetCellParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:545–545](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L545-L545) | GetCellParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L594-L594) | GetCellParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:662–662](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L662-L662) | GetCellParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:745–745](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L745-L745) | GetCellParameterName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 708 | GetCellKeySeparatorIndex | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellKeySeparatorIndex(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:712 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 708 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellKeySeparatorIndex(key) |
| 708 | local-declaration | 지역 변수를 선언합니다: var separatorIndex = GetCellKeySeparatorIndex(key); |
| 708 | variable-initializer | 변수의 초기값을 지정합니다: separatorIndex = GetCellKeySeparatorIndex(key) |
| 709 | conditional-expression | 조건에 따라 결과식을 선택합니다: separatorIndex >= 0 && separatorIndex < key.Length - 1 ? key[(separatorIndex + 1)..] : "" |
| 709 | return | 호출자에게 값 또는 제어를 반환합니다: return separatorIndex >= 0 && separatorIndex < key.Length - 1 ? key[(separatorIndex + 1)..] : ""; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCellKeySeparatorIndex` · L712–715

[Drilling.File/JHMI/CJhmiRecipeFile.cs:712–715](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L712-L715)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellKeySeparatorIndex(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:702–702](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L702-L702) | GetCellKeySeparatorIndex | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:708–708](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L708-L708) | GetCellKeySeparatorIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 714 | key.IndexOf | resolved | int string.IndexOf(char, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 714 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: key.IndexOf('_', 4) |
| 714 | return | 호출자에게 값 또는 제어를 반환합니다: return key.IndexOf('_', 4); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeCellScopedParameterName` · L717–720

[Drilling.File/JHMI/CJhmiRecipeFile.cs:717–720](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L717-L720)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameterName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:337–337](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L337-L337) | NormalizeCellScopedParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:545–545](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L545-L545) | NormalizeCellScopedParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:662–662](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L662-L662) | NormalizeCellScopedParameterName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:745–745](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L745-L745) | NormalizeCellScopedParameterName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 719 | parameterName.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 719 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.StartsWith("CELL_", StringComparison.OrdinalIgnoreCase) |
| 719 | conditional-expression | 조건에 따라 결과식을 선택합니다: parameterName.StartsWith("CELL_", StringComparison.OrdinalIgnoreCase) ? parameterName[5..] : parameterName |
| 719 | return | 호출자에게 값 또는 제어를 반환합니다: return parameterName.StartsWith("CELL_", StringComparison.OrdinalIgnoreCase) ? parameterName[5..] : parameterName; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsCellPlacementParameterName` · L722–725

[Drilling.File/JHMI/CJhmiRecipeFile.cs:722–725](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L722-L725)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.IsCellPlacementParameterName(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameterName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:547–547](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L547-L547) | IsCellPlacementParameterName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 724 | parameterName.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 724 | parameterName.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 724 | parameterName.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 724 | parameterName.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Equals("ALIGN_TO_1ST_PIXEL_X", StringComparison.OrdinalIgnoreCase) |
| 724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Equals("ALIGN_TO_1ST_PIXEL_Y", StringComparison.OrdinalIgnoreCase) |
| 724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Equals("ROTATION", StringComparison.OrdinalIgnoreCase) |
| 724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Equals("MODEL_TYPE", StringComparison.OrdinalIgnoreCase) |
| 724 | return | 호출자에게 값 또는 제어를 반환합니다: return parameterName.Equals("ALIGN_TO_1ST_PIXEL_X", StringComparison.OrdinalIgnoreCase) &#124;&#124; parameterName.Equals("ALIGN_TO_1ST_PIXEL_Y", StringComparison.OrdinalIgnoreCase) &#124;&#124; parameterName.Equals("ROTATION", StringComparison.Ordin |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ToPersistedCellScopedKey` · L727–730

[Drilling.File/JHMI/CJhmiRecipeFile.cs:727–730](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L727-L730)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.ToPersistedCellScopedKey(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L212-L212) | ToPersistedCellScopedKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:339–339](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L339-L339) | ToPersistedCellScopedKey | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 729 | return | 호출자에게 값 또는 제어를 반환합니다: return key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCellScopedGroup` · L732–740

[Drilling.File/JHMI/CJhmiRecipeFile.cs:732–740](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L732-L740)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellScopedGroup(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameterName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:573–573](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L573-L573) | GetCellScopedGroup | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 734 | TryGetShotGroupOverrideMetadata | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:786 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetShotGroupOverrideMetadata(parameterName, out _, out _, out _, out _, out _, out _, out _) |
| 734 | if | 조건에 따라 분기합니다: if (TryGetShotGroupOverrideMetadata(parameterName, out _, out _, out _, out _, out _, out _, out _)) |
| 736 | return | 호출자에게 값 또는 제어를 반환합니다: return "SHOT_GROUP"; |
| 739 | return | 호출자에게 값 또는 제어를 반환합니다: return "CELL"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCellScopedGroup"]
 N0["L734 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCellHistoryItemName` · L742–752

[Drilling.File/JHMI/CJhmiRecipeFile.cs:742–752](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L742-L752)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellHistoryItemName(Drilling.Common.Managers.ST_RECIPE_PARAMETER, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |
| parameters | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:218–218](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L218-L218) | GetCellHistoryItemName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 744 | GetCellNo | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.GetCellNo(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:695 |
| 745 | NormalizeCellScopedParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.NormalizeCellScopedParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:717 |
| 745 | GetCellParameterName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetCellParameterName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:706 |
| 746 | TryGetShotGroupOverrideMetadata | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:786 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellNo(parameter.Key) |
| 744 | local-declaration | 지역 변수를 선언합니다: var cellNo = GetCellNo(parameter.Key); |
| 744 | variable-initializer | 변수의 초기값을 지정합니다: cellNo = GetCellNo(parameter.Key) |
| 745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)) |
| 745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCellParameterName(parameter.Key) |
| 745 | local-declaration | 지역 변수를 선언합니다: var parameterName = NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)); |
| 745 | variable-initializer | 변수의 초기값을 지정합니다: parameterName = NormalizeCellScopedParameterName(GetCellParameterName(parameter.Key)) |
| 746 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetShotGroupOverrideMetadata(parameterName, out var shotGroupName, out _, out _, out var namedDisplayName, out _, out _, out _) |
| 746 | if | 조건에 따라 분기합니다: if (TryGetShotGroupOverrideMetadata(parameterName, out var shotGroupName, out _, out _, out var namedDisplayName, out _, out _, out _)) |
| 748 | return | 호출자에게 값 또는 제어를 반환합니다: return $"Cell{cellNo} Shot Group {shotGroupName} {namedDisplayName}"; |
| 751 | return | 호출자에게 값 또는 제어를 반환합니다: return $"Cell{cellNo} {parameter.Name}"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCellHistoryItemName"]
 N0["L746 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateShotGroupOverrideParameter` · L754–784

[Drilling.File/JHMI/CJhmiRecipeFile.cs:754–784](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L754-L784)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.File.JHMI.CJhmiRecipeFile.CreateShotGroupOverrideParameter(int, string, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cellNo | int | None | False /  |
| parameterName | string | None | False /  |
| scopedKey | string | None | False /  |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:556–556](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L556-L556) | CreateShotGroupOverrideParameter | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 761 | TryGetShotGroupOverrideMetadata | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:786 |
| 763 | new ST_RECIPE_PARAMETER | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER.ST_RECIPE_PARAMETER(string, string, string, string, string, string, string, string, string, bool, bool, int, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double, double, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:357 |
| 767 | namedMin.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 767 | namedMax.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 773 | CAlignShotOffsetData.IsParameterKey | resolved | bool Drilling.Common.Recipe.CAlignShotOffsetData.IsParameterKey(string) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:661 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 756 | if | 조건에 따라 분기합니다: if (cellNo <= 0) |
| 758 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 761 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetShotGroupOverrideMetadata(parameterName, out var shotGroupName, out _, out _, out var namedDisplayName, out var namedUnit, out var namedMin, out var namedMax) |
| 761 | if | 조건에 따라 분기합니다: if (TryGetShotGroupOverrideMetadata(parameterName, out var shotGroupName, out _, out _, out var namedDisplayName, out var namedUnit, out var namedMin, out var namedMax)) |
| 763 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_PARAMETER( $"Shot Group {shotGroupName} {namedDisplayName}", value, namedUnit, $"{namedMin.ToString("0.###", CultureInfo.InvariantCulture)} - {namedMax.ToString("0.###", CultureInfo.InvariantCulture)}", "0"… |
| 763 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_RECIPE_PARAMETER( $"Shot Group {shotGroupName} {namedDisplayName}", value, namedUnit, $"{namedMin.ToString("0.###", CultureInfo.InvariantCulture)} - {namedMax.ToString("0.###", CultureInfo.InvariantCulture)}", "0", " |
| 767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: namedMin.ToString("0.###", CultureInfo.InvariantCulture) |
| 767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: namedMax.ToString("0.###", CultureInfo.InvariantCulture) |
| 773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.IsParameterKey(scopedKey) |
| 783 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateShotGroupOverrideParameter"]
 N0["L756 if"]
 M -->|포함| N0
 N1["L761 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryGetShotGroupOverrideMetadata` · L786–845

[Drilling.File/JHMI/CJhmiRecipeFile.cs:786–845](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L786-L845)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.TryGetShotGroupOverrideMetadata(string, out string, out int, out int, out string, out string, out double, out double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameterName | string | None | False /  |
| shotGroupName | string | Out | False /  |
| column | int | Out | False /  |
| row | int | Out | False /  |
| displayName | string | Out | False /  |
| unit | string | Out | False /  |
| min | double | Out | False /  |
| max | double | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:663–663](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L663-L663) | TryGetShotGroupOverrideMetadata | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:734–734](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L734-L734) | TryGetShotGroupOverrideMetadata | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:746–746](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L746-L746) | TryGetShotGroupOverrideMetadata | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:761–761](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L761-L761) | TryGetShotGroupOverrideMetadata | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 795 | parameterName.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 795 | parameterName.Trim | resolved | string string.Trim() |
| 808 | fields.FirstOrDefault | resolved | (string Suffix, string DisplayName) System.Collections.Generic.IEnumerable<(string Suffix, string DisplayName)>.FirstOrDefault<(string Suffix, string DisplayName)>(System.Func<(string Suffix, string DisplayName), bool>) |
| 809 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 821 | int.TryParse | resolved | bool int.TryParse(System.ReadOnlySpan<char>, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 821 | matrixName.AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int) |
| 828 | matrixName.AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 788 | assignment | 값을 대상에 대입합니다: shotGroupName = "" |
| 789 | assignment | 값을 대상에 대입합니다: column = 0 |
| 790 | assignment | 값을 대상에 대입합니다: row = 0 |
| 791 | assignment | 값을 대상에 대입합니다: displayName = "" |
| 792 | assignment | 값을 대상에 대입합니다: unit = "" |
| 793 | assignment | 값을 대상에 대입합니다: min = 0.0 |
| 794 | assignment | 값을 대상에 대입합니다: max = 0.0 |
| 795 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Trim().ToUpperInvariant() |
| 795 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterName.Trim() |
| 795 | local-declaration | 지역 변수를 선언합니다: var normalized = parameterName.Trim().ToUpperInvariant(); |
| 795 | variable-initializer | 변수의 초기값을 지정합니다: normalized = parameterName.Trim().ToUpperInvariant() |
| 796 | local-declaration | 지역 변수를 선언합니다: var fields = new[] { (Suffix: "_RECIPE_OFFSET_X", DisplayName: "Recipe Offset X"), (Suffix: "_RECIPE_OFFSET_Y", DisplayName: "Recipe Offset Y"), (Suffix: "_ALIGN_OFFSET_X", DisplayName: "Align Offset X"), (Suffix: "_ALIGN_OFFSET_Y |
| 796 | variable-initializer | 변수의 초기값을 지정합니다: fields = new[] { (Suffix: "_RECIPE_OFFSET_X", DisplayName: "Recipe Offset X"), (Suffix: "_RECIPE_OFFSET_Y", DisplayName: "Recipe Offset Y"), (Suffix: "_ALIGN_OFFSET_X", DisplayName: "Align Offset X"), (Suffix: "_ALIGN_OFFSET_Y", D |
| 808 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.FirstOrDefault(MatchesItem) |
| 808 | local-declaration | 지역 변수를 선언합니다: var field = fields.FirstOrDefault(MatchesItem); |
| 808 | variable-initializer | 변수의 초기값을 지정합니다: field = fields.FirstOrDefault(MatchesItem) |
| 809 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(field.Suffix) |
| 809 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(field.Suffix)) |
| 811 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 814 | local-declaration | 지역 변수를 선언합니다: var matrixName = normalized[..^field.Suffix.Length]; |
| 814 | variable-initializer | 변수의 초기값을 지정합니다: matrixName = normalized[..^field.Suffix.Length] |
| 815 | local-declaration | 지역 변수를 선언합니다: var rowStart = 0; |
| 815 | variable-initializer | 변수의 초기값을 지정합니다: rowStart = 0 |
| 816 | while | 조건을 먼저 확인하며 반복합니다: while (rowStart < matrixName.Length && matrixName[rowStart] is >= 'A' and <= 'Z') |
| 821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(matrixName.AsSpan(rowStart), NumberStyles.None, CultureInfo.InvariantCulture, out row) |
| 821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: matrixName.AsSpan(rowStart) |
| 821 | if | 조건에 따라 분기합니다: if (rowStart == 0 &#124;&#124; rowStart == matrixName.Length &#124;&#124; !int.TryParse(matrixName.AsSpan(rowStart), NumberStyles.None, CultureInfo.InvariantCulture, out row) &#124;&#124; row <= 0) |
| 823 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 826 | try | 예외 처리 범위입니다: try |
| 828 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: matrixName.AsSpan(0, rowStart) |
| 828 | foreach | 컬렉션 요소를 순회합니다: foreach (var letter in matrixName.AsSpan(0, rowStart)) |
| 830 | assignment | 값을 대상에 대입합니다: column = checked((column * 26) + (letter - 'A' + 1)) |
| 833 | catch | 지정 예외를 처리합니다: catch (OverflowException) |
| 835 | assignment | 값을 대상에 대입합니다: column = 0 |
| 836 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 839 | assignment | 값을 대상에 대입합니다: shotGroupName = matrixName |
| 840 | assignment | 값을 대상에 대입합니다: displayName = field.DisplayName |
| 841 | assignment | 값을 대상에 대입합니다: unit = "mm" |
| 842 | assignment | 값을 대상에 대입합니다: min = -100000.0 |
| 843 | assignment | 값을 대상에 대입합니다: max = 100000.0 |
| 844 | return | 호출자에게 값 또는 제어를 반환합니다: return column > 0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryGetShotGroupOverrideMetadata"]
 N0["L809 if"]
 M -->|포함| N0
 N1["L816 while"]
 M -->|포함| N1
 N2["L821 if"]
 M -->|포함| N2
 N3["L826 try"]
 M -->|포함| N3
 N4["L828 foreach"]
 N3 -->|포함| N4
 N5["L833 catch"]
 N3 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L803–806

[Drilling.File/JHMI/CJhmiRecipeFile.cs:803–806](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L803-L806)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem((string Suffix, string DisplayName)) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| candidate | (string Suffix, string DisplayName) | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 805 | normalized.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 805 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.EndsWith(candidate.Suffix, StringComparison.Ordinal) |
| 805 | return | 호출자에게 값 또는 제어를 반환합니다: return normalized.EndsWith(candidate.Suffix, StringComparison.Ordinal); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadFormItems` · L848–888

[Drilling.File/JHMI/CJhmiRecipeFile.cs:848–888](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L848-L888)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> Drilling.File.JHMI.CJhmiRecipeFile.LoadFormItems() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L70-L70) | LoadFormItems | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:104–104](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L104-L104) | LoadFormItems | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:124–124](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L124-L124) | LoadFormItems | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:271–271](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L271-L271) | LoadFormItems | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 858 | CCsvParser.ValidateRequiredHeaders | resolved | void Drilling.File.Parser.CCsvParser.ValidateRequiredHeaders(string, string, System.Collections.Generic.IEnumerable<System.Collections.Generic.IEnumerable<string>>) · Drilling.File/Parser/CCsvParser.cs:280 |
| 858 | GetFormPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetFormPath() · Drilling.File/JHMI/CJhmiRecipeFile.cs:962 |
| 858 | FormHeaders.Select | resolved | System.Collections.Generic.IEnumerable<string[]> System.Collections.Generic.IEnumerable<string>.Select<string, string[]>(System.Func<string, string[]>) |
| 887 | CCsvParser.Read(GetFormPath()).Select(BuildRecipe).Where(ShouldIncludeItem).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.ToArray<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>() |
| 887 | CCsvParser.Read(GetFormPath()).Select(BuildRecipe).Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.Where<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 887 | CCsvParser.Read(GetFormPath()).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> System.Collections.Generic.IEnumerable<System.Collections.Generic.IReadOnlyDictionary<string, string>>.Select<System.Collections.Generic.IReadOnlyDictionary<string, string>, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<System.Collections.Generic.IReadOnlyDictionary<string, string>, int, Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>) |
| 887 | CCsvParser.Read | resolved | System.Collections.Generic.IReadOnlyList<System.Collections.Generic.IReadOnlyDictionary<string, string>> Drilling.File.Parser.CCsvParser.Read(string) · Drilling.File/Parser/CCsvParser.cs:12 |
| 887 | GetFormPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetFormPath() · Drilling.File/JHMI/CJhmiRecipeFile.cs:962 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 858 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.ValidateRequiredHeaders(GetFormPath(), "JHMI_RCP", FormHeaders.Select(SelectItem)) |
| 858 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetFormPath() |
| 858 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormHeaders.Select(SelectItem) |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Read(GetFormPath()).Select(BuildRecipe).Where(ShouldIncludeItem).ToArray() |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Read(GetFormPath()).Select(BuildRecipe).Where(ShouldIncludeItem) |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Read(GetFormPath()).Select(BuildRecipe) |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Read(GetFormPath()) |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetFormPath() |
| 887 | return | 호출자에게 값 또는 제어를 반환합니다: return CCsvParser.Read(GetFormPath()).Select(BuildRecipe).Where(ShouldIncludeItem).ToArray(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectItem` · L850–856

[Drilling.File/JHMI/CJhmiRecipeFile.cs:850–856](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L850-L856)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string[] SelectItem(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string[] |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| header | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 852 | return | 호출자에게 값 또는 제어를 반환합니다: return new[] { header }; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `BuildRecipe` · L859–880

[Drilling.File/JHMI/CJhmiRecipeFile.cs:859–880](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L859-L880)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM BuildRecipe(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| index | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 861 | new ST_RECIPE_FORM_ITEM | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM.ST_RECIPE_FORM_ITEM(string, string, string, string, string, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, string, bool, bool, string, double, double, double, double, string, int, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:388 |
| 862 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 863 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 864 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 865 | GetOrDefault | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetOrDefault(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1056 |
| 865 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 865 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 866 | GetOrDefault | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetOrDefault(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1056 |
| 866 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 866 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 867 | ReadDataType | resolved | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE Drilling.File.JHMI.CJhmiRecipeFile.ReadDataType(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1015 |
| 867 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 868 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 869 | ReadBool | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.ReadBool(string, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1026 |
| 869 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 870 | ReadBool | resolved | bool Drilling.File.JHMI.CJhmiRecipeFile.ReadBool(string, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1026 |
| 870 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 871 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 872 | ReadDouble | resolved | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1041 |
| 872 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 873 | ReadDouble | resolved | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1041 |
| 873 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 874 | ReadDouble | resolved | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1041 |
| 874 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 875 | ReadDouble | resolved | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1041 |
| 875 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 876 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 877 | ReadInt | resolved | int Drilling.File.JHMI.CJhmiRecipeFile.ReadInt(string, int) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1036 |
| 877 | CCsvParser.Get | resolved | string Drilling.File.Parser.CCsvParser.Get(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.File/Parser/CCsvParser.cs:168 |
| 878 | CCsvParser.GetExtra | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.File.Parser.CCsvParser.GetExtra(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IEnumerable<string>) · Drilling.File/Parser/CCsvParser.cs:331 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 861 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_FORM_ITEM( CCsvParser.Get(row, "TAB"), CCsvParser.Get(row, "GROUP"), CCsvParser.Get(row, "NAME"), GetOrDefault(CCsvParser.Get(row, "DISPLAY NAME"), CCsvParser.Get(row, "NAME")), GetOrDefault(CCsvParser.Get(… |
| 861 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_RECIPE_FORM_ITEM( CCsvParser.Get(row, "TAB"), CCsvParser.Get(row, "GROUP"), CCsvParser.Get(row, "NAME"), GetOrDefault(CCsvParser.Get(row, "DISPLAY NAME"), CCsvParser.Get(row, "NAME")), GetOrDefault(CCsvParser.Get(row |
| 862 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "TAB") |
| 863 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "GROUP") |
| 864 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "NAME") |
| 865 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetOrDefault(CCsvParser.Get(row, "DISPLAY NAME"), CCsvParser.Get(row, "NAME")) |
| 865 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "DISPLAY NAME") |
| 865 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "NAME") |
| 866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetOrDefault(CCsvParser.Get(row, "CIM NAME"), CCsvParser.Get(row, "NAME")) |
| 866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "CIM NAME") |
| 866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "NAME") |
| 867 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDataType(CCsvParser.Get(row, "DATA TYPE")) |
| 867 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "DATA TYPE") |
| 868 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "UNIT") |
| 869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadBool(CCsvParser.Get(row, "SHOW"), true) |
| 869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "SHOW") |
| 870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadBool(CCsvParser.Get(row, "USE"), true) |
| 870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "USE") |
| 871 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "VALUE") |
| 872 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(CCsvParser.Get(row, "SCALE"), 1.0) |
| 872 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "SCALE") |
| 873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(CCsvParser.Get(row, "CHANGE LIMIT"), 0.0) |
| 873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "CHANGE LIMIT") |
| 874 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(CCsvParser.Get(row, "MIN"), 0.0) |
| 874 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "MIN") |
| 875 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(CCsvParser.Get(row, "MAX"), 0.0) |
| 875 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "MAX") |
| 876 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "DESCRIPTION") |
| 877 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadInt(CCsvParser.Get(row, "ORDER"), index + 1) |
| 877 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.Get(row, "ORDER") |
| 878 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.GetExtra(row, FormHeaders) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeItem` · L882–885

[Drilling.File/JHMI/CJhmiRecipeFile.cs:882–885](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L882-L885)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 884 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 884 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 884 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(item.Tab) |
| 884 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(item.Name) |
| 884 | return | 호출자에게 값 또는 제어를 반환합니다: return !string.IsNullOrWhiteSpace(item.Tab) && !string.IsNullOrWhiteSpace(item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadRecipeValues` · L890–914

[Drilling.File/JHMI/CJhmiRecipeFile.cs:890–914](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L890-L914)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L45-L45) | ReadRecipeValues | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:142–142](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L142-L142) | ReadRecipeValues | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:272–272](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L272-L272) | ReadRecipeValues | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:404–404](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L404-L404) | ReadRecipeValues | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:452–452](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L452-L452) | ReadRecipeValues | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1088–1088](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1088-L1088) | ReadRecipeValues | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 892 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 897 | new List<ST_RECIPE_VALUE> | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_VALUE>.List() |
| 898 | CCsvParser.ReadLines | resolved | System.Collections.Generic.IReadOnlyList<string> Drilling.File.Parser.CCsvParser.ReadLines(string) · Drilling.File/Parser/CCsvParser.cs:147 |
| 900 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 901 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 906 | ParseRecipeLine | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE? Drilling.File.JHMI.CJhmiRecipeFile.ParseRecipeLine(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:916 |
| 909 | values.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_VALUE>.Add(Drilling.Common.Managers.ST_RECIPE_VALUE) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 892 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(path) |
| 892 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(path)) |
| 894 | return | 호출자에게 값 또는 제어를 반환합니다: return[]; |
| 897 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_RECIPE_VALUE>() |
| 897 | local-declaration | 지역 변수를 선언합니다: var values = new List<ST_RECIPE_VALUE>(); |
| 897 | variable-initializer | 변수의 초기값을 지정합니다: values = new List<ST_RECIPE_VALUE>() |
| 898 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.ReadLines(path) |
| 898 | foreach | 컬렉션 요소를 순회합니다: foreach (var line in CCsvParser.ReadLines(path)) |
| 900 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 901 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(line) |
| 901 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(line)) |
| 903 | continue | 다음 반복으로 진행합니다: continue; |
| 906 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseRecipeLine(line) |
| 906 | local-declaration | 지역 변수를 선언합니다: var value = ParseRecipeLine(line); |
| 906 | variable-initializer | 변수의 초기값을 지정합니다: value = ParseRecipeLine(line) |
| 907 | if | 조건에 따라 분기합니다: if (value is not null) |
| 909 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Add(value) |
| 913 | return | 호출자에게 값 또는 제어를 반환합니다: return values; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadRecipeValues"]
 N0["L892 if"]
 M -->|포함| N0
 N1["L898 foreach"]
 M -->|포함| N1
 N2["L901 if"]
 N1 -->|포함| N2
 N3["L907 if"]
 N1 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseRecipeLine` · L916–925

[Drilling.File/JHMI/CJhmiRecipeFile.cs:916–925](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L916-L925)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_VALUE? Drilling.File.JHMI.CJhmiRecipeFile.ParseRecipeLine(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_VALUE? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| line | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:906–906](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L906-L906) | ParseRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1439–1439](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1439-L1439) | ParseRecipeLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 918 | SplitCsvLine | resolved | System.Collections.Generic.IReadOnlyList<string> Drilling.File.JHMI.CJhmiRecipeFile.SplitCsvLine(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:927 |
| 924 | new ST_RECIPE_VALUE | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE.ST_RECIPE_VALUE(string, string, string, System.Collections.Generic.IReadOnlyList<string>?) · Drilling.Common/Managers/CRecipeManager.cs:407 |
| 924 | fields.Skip(3).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 924 | fields.Skip | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Skip<string>(int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 918 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SplitCsvLine(line) |
| 918 | local-declaration | 지역 변수를 선언합니다: var fields = SplitCsvLine(line); |
| 918 | variable-initializer | 변수의 초기값을 지정합니다: fields = SplitCsvLine(line) |
| 919 | if | 조건에 따라 분기합니다: if (fields.Count < 3) |
| 921 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_VALUE(fields[0], fields[1], fields[2], fields.Skip(3).ToArray()) |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Skip(3).ToArray() |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Skip(3) |
| 924 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_RECIPE_VALUE(fields[0], fields[1], fields[2], fields.Skip(3).ToArray()); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseRecipeLine"]
 N0["L919 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SplitCsvLine` · L927–960

[Drilling.File/JHMI/CJhmiRecipeFile.cs:927–960](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L927-L960)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<string> Drilling.File.JHMI.CJhmiRecipeFile.SplitCsvLine(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<string> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| line | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:918–918](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L918-L918) | SplitCsvLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 929 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 930 | new System.Text.StringBuilder | resolved | System.Text.StringBuilder.StringBuilder() |
| 939 | value.Append | resolved | System.Text.StringBuilder System.Text.StringBuilder.Append(char) |
| 949 | fields.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 949 | value.ToString | resolved · 동적 구현 선택 가능 | string System.Text.StringBuilder.ToString() |
| 950 | value.Clear | resolved | System.Text.StringBuilder System.Text.StringBuilder.Clear() |
| 954 | value.Append | resolved | System.Text.StringBuilder System.Text.StringBuilder.Append(char) |
| 958 | fields.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 958 | value.ToString | resolved · 동적 구현 선택 가능 | string System.Text.StringBuilder.ToString() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>() |
| 929 | local-declaration | 지역 변수를 선언합니다: var fields = new List<string>(); |
| 929 | variable-initializer | 변수의 초기값을 지정합니다: fields = new List<string>() |
| 930 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new System.Text.StringBuilder() |
| 930 | local-declaration | 지역 변수를 선언합니다: var value = new System.Text.StringBuilder(); |
| 930 | variable-initializer | 변수의 초기값을 지정합니다: value = new System.Text.StringBuilder() |
| 931 | local-declaration | 지역 변수를 선언합니다: var inQuotes = false; |
| 931 | variable-initializer | 변수의 초기값을 지정합니다: inQuotes = false |
| 932 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 932 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < line.Length; index++) |
| 934 | local-declaration | 지역 변수를 선언합니다: var current = line[index]; |
| 934 | variable-initializer | 변수의 초기값을 지정합니다: current = line[index] |
| 935 | if | 조건에 따라 분기합니다: if (current == '"') |
| 937 | if | 조건에 따라 분기합니다: if (inQuotes && index + 1 < line.Length && line[index + 1] == '"') |
| 939 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Append('"') |
| 942 | else | 앞 조건이 거짓인 경로입니다: else |
| 944 | assignment | 값을 대상에 대입합니다: inQuotes = !inQuotes |
| 947 | else | 앞 조건이 거짓인 경로입니다: else |
| 947 | if | 조건에 따라 분기합니다: if (current == ',' && !inQuotes) |
| 949 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Add(value.ToString()) |
| 949 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString() |
| 950 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Clear() |
| 952 | else | 앞 조건이 거짓인 경로입니다: else |
| 954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Append(current) |
| 958 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Add(value.ToString()) |
| 958 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString() |
| 959 | return | 호출자에게 값 또는 제어를 반환합니다: return fields; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SplitCsvLine"]
 N0["L932 for"]
 M -->|포함| N0
 N1["L935 if"]
 N0 -->|포함| N1
 N2["L937 if"]
 N1 -->|포함| N2
 N3["L942 else"]
 N2 -->|포함| N3
 N4["L947 else"]
 N1 -->|포함| N4
 N5["L947 if"]
 N1 -->|포함| N5
 N6["L952 else"]
 N4 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetFormPath` · L962–965

[Drilling.File/JHMI/CJhmiRecipeFile.cs:962–965](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L962-L965)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetFormPath() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:858–858](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L858-L858) | GetFormPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:887–887](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L887-L887) | GetFormPath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 964 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_configRoot, "JHMI_RCP.csv") |
| 964 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.Combine(_configRoot, "JHMI_RCP.csv"); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetRecipePath` · L967–970

[Drilling.File/JHMI/CJhmiRecipeFile.cs:967–970](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L967-L970)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:39–39](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L39-L39) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:43–43](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L43-L43) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L45-L45) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:106–106](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L106-L106) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:125–125](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L125-L125) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L259-L259) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L260-L260) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:384–384](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L384-L384) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1141–1141](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1141-L1141) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1143–1143](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1143-L1143) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1182–1182](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1182-L1182) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1304–1304](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1304-L1304) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1306–1306](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1306-L1306) | GetRecipePath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1428–1428](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1428-L1428) | GetRecipePath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 969 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 969 | GetSafeFileName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetSafeFileName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1114 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_recipeDirectory, $"{GetSafeFileName(recipeId)}.csv") |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSafeFileName(recipeId) |
| 969 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.Combine(_recipeDirectory, $"{GetSafeFileName(recipeId)}.csv"); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindFormItem` · L972–1013

[Drilling.File/JHMI/CJhmiRecipeFile.cs:972–1013](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L972-L1013)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? Drilling.File.JHMI.CJhmiRecipeFile.FindFormItem(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>, Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| formItems | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM> | None | False /  |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L148-L148) | FindFormItem | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 979 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 979 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 981 | formItems.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 993 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 995 | formItems.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 1012 | formItems.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |
| 1012 | formItems.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM>(System.Func<Drilling.Common.Managers.ST_RECIPE_FORM_ITEM, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 979 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Tab) |
| 979 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Key) |
| 979 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(parameter.Tab) && !string.IsNullOrWhiteSpace(parameter.Key)) |
| 981 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.FirstOrDefault(MatchesItem) |
| 981 | local-declaration | 지역 변수를 선언합니다: var formItem = formItems.FirstOrDefault(MatchesItem); |
| 981 | variable-initializer | 변수의 초기값을 지정합니다: formItem = formItems.FirstOrDefault(MatchesItem) |
| 982 | if | 조건에 따라 분기합니다: if (formItem is not null) |
| 984 | return | 호출자에게 값 또는 제어를 반환합니다: return formItem; |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Key) |
| 993 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(parameter.Key)) |
| 995 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.FirstOrDefault(MatchesItem2) |
| 995 | local-declaration | 지역 변수를 선언합니다: var formItem = formItems.FirstOrDefault(MatchesItem2); |
| 995 | variable-initializer | 변수의 초기값을 지정합니다: formItem = formItems.FirstOrDefault(MatchesItem2) |
| 996 | if | 조건에 따라 분기합니다: if (formItem is not null) |
| 998 | return | 호출자에게 값 또는 제어를 반환합니다: return formItem; |
| 1012 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.FirstOrDefault(MatchesItem3) |
| 1012 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formItems.FirstOrDefault(MatchesItem4) |
| 1012 | return | 호출자에게 값 또는 제어를 반환합니다: return formItems.FirstOrDefault(MatchesItem3) ?? formItems.FirstOrDefault(MatchesItem4); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FindFormItem"]
 N0["L979 if"]
 M -->|포함| N0
 N1["L982 if"]
 N0 -->|포함| N1
 N2["L993 if"]
 M -->|포함| N2
 N3["L996 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L974–977

[Drilling.File/JHMI/CJhmiRecipeFile.cs:974–977](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L974-L977)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 976 | item.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 976 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 976 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Tab.Equals(parameter.Tab, StringComparison.OrdinalIgnoreCase) |
| 976 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(parameter.Key, StringComparison.OrdinalIgnoreCase) |
| 976 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Tab.Equals(parameter.Tab, StringComparison.OrdinalIgnoreCase) && item.Name.Equals(parameter.Key, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem2` · L988–991

[Drilling.File/JHMI/CJhmiRecipeFile.cs:988–991](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L988-L991)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem2(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 990 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(parameter.Key, StringComparison.OrdinalIgnoreCase) |
| 990 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name.Equals(parameter.Key, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem3` · L1002–1005

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1002–1005](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1002-L1005)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem3(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1004 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1004 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(parameter.Name, StringComparison.OrdinalIgnoreCase) |
| 1004 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name.Equals(parameter.Name, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem4` · L1007–1010

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1007–1010](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1007-L1010)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem4(Drilling.Common.Managers.ST_RECIPE_FORM_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_FORM_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1009 | item.DisplayName.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1009 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.DisplayName.Equals(parameter.Name, StringComparison.OrdinalIgnoreCase) |
| 1009 | return | 호출자에게 값 또는 제어를 반환합니다: return item.DisplayName.Equals(parameter.Name, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDataType` · L1015–1024

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1015–1024](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1015-L1024)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE Drilling.File.JHMI.CJhmiRecipeFile.ReadDataType(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:867–867](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L867-L867) | ReadDataType | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1017 | value.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1017 | value.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim().ToUpperInvariant() |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 1017 | return | 호출자에게 값 또는 제어를 반환합니다: return value.Trim().ToUpperInvariant() switch { "INT" => EN_RECIPE_DATA_TYPE.Int, "DOUBLE" => EN_RECIPE_DATA_TYPE.Double, "BOOL" => EN_RECIPE_DATA_TYPE.Bool, _ => EN_RECIPE_DATA_TYPE.String }; |
| 1017 | switch-expression | 값별 결과식을 선택합니다: value.Trim().ToUpperInvariant() switch { "INT" => EN_RECIPE_DATA_TYPE.Int, "DOUBLE" => EN_RECIPE_DATA_TYPE.Double, "BOOL" => EN_RECIPE_DATA_TYPE.Bool, _ => EN_RECIPE_DATA_TYPE.String } |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadDataType"]
 N0["L1017 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadBool` · L1026–1034

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1026–1034](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1026-L1034)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.File.JHMI.CJhmiRecipeFile.ReadBool(string, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |
| defaultValue | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:869–869](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L869-L869) | ReadBool | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:870–870](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L870-L870) | ReadBool | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1028 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1033 | value.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1033 | value.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1033 | value.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1033 | value.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1028 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(value) |
| 1028 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(value)) |
| 1030 | return | 호출자에게 값 또는 제어를 반환합니다: return defaultValue; |
| 1033 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Equals("1", StringComparison.OrdinalIgnoreCase) |
| 1033 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Equals("TRUE", StringComparison.OrdinalIgnoreCase) |
| 1033 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Equals("USE", StringComparison.OrdinalIgnoreCase) |
| 1033 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Equals("ON", StringComparison.OrdinalIgnoreCase) |
| 1033 | return | 호출자에게 값 또는 제어를 반환합니다: return value.Equals("1", StringComparison.OrdinalIgnoreCase) &#124;&#124; value.Equals("TRUE", StringComparison.OrdinalIgnoreCase) &#124;&#124; value.Equals("USE", StringComparison.OrdinalIgnoreCase) &#124;&#124; value.Equals("ON", StringComparison.OrdinalIgno |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadBool"]
 N0["L1028 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadInt` · L1036–1039

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1036–1039](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1036-L1039)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.File.JHMI.CJhmiRecipeFile.ReadInt(string, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |
| defaultValue | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:877–877](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L877-L877) | ReadInt | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1038 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1038 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var result) |
| 1038 | conditional-expression | 조건에 따라 결과식을 선택합니다: int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var result) ? result : defaultValue |
| 1038 | return | 호출자에게 값 또는 제어를 반환합니다: return int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var result) ? result : defaultValue; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDouble` · L1041–1044

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1041–1044](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1041-L1044)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.File.JHMI.CJhmiRecipeFile.ReadDouble(string, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |
| defaultValue | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:872–872](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L872-L872) | ReadDouble | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:873–873](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L873-L873) | ReadDouble | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:874–874](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L874-L874) | ReadDouble | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:875–875](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L875-L875) | ReadDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1043 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1043 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var result) |
| 1043 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var result) ? result : defaultValue |
| 1043 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var result) ? result : defaultValue; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetValue` · L1046–1049

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1046–1049](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1046-L1049)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| tab | string | None | False /  |
| name | string | None | False /  |
| defaultValue | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L195-L195) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L198-L198) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:215–215](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L215-L215) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:289–289](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L289-L289) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:314–314](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L314-L314) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:405–405](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L405-L405) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:470–470](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L470-L470) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:485–485](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L485-L485) | GetValue | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:668–668](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L668-L668) | GetValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1048 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 1048 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1048 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(CreateKey(tab, name), out var value) |
| 1048 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(tab, name) |
| 1048 | conditional-expression | 조건에 따라 결과식을 선택합니다: values.TryGetValue(CreateKey(tab, name), out var value) ? value : defaultValue |
| 1048 | return | 호출자에게 값 또는 제어를 반환합니다: return values.TryGetValue(CreateKey(tab, name), out var value) ? value : defaultValue; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateKey` · L1051–1054

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1051–1054](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1051-L1054)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| tab | string | None | False /  |
| name | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:129–129](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L129-L129) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L148-L148) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:174–174](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L174-L174) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L175-L175) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:191–191](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L191-L191) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L205-L205) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:222–222](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L222-L222) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L275-L275) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:293–293](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L293-L293) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:294–294](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L294-L294) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:315–315](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L315-L315) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:340–340](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L340-L340) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:389–389](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L389-L389) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:455–455](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L455-L455) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1048–1048](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1048-L1048) | CreateKey | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1075–1075](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1075-L1075) | CreateKey | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1053 | tab.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1053 | tab.Trim | resolved | string string.Trim() |
| 1053 | name.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1053 | name.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1053 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tab.Trim().ToUpperInvariant() |
| 1053 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tab.Trim() |
| 1053 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.Trim().ToUpperInvariant() |
| 1053 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.Trim() |
| 1053 | return | 호출자에게 값 또는 제어를 반환합니다: return $"{tab.Trim().ToUpperInvariant()}&#124;{name.Trim().ToUpperInvariant()}"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetOrDefault` · L1056–1059

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1056–1059](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1056-L1059)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetOrDefault(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |
| defaultValue | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:865–865](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L865-L865) | GetOrDefault | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:866–866](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L866-L866) | GetOrDefault | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1058 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1058 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(value) |
| 1058 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(value) ? defaultValue : value |
| 1058 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(value) ? defaultValue : value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetRecipeName` · L1061–1064

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1061–1064](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1061-L1064)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipeName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:232–232](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L232-L232) | GetRecipeName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1364–1364](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1364-L1364) | GetRecipeName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1063 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1063 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(recipe.Name) |
| 1063 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(recipe.Name) ? recipe.Id : recipe.Name |
| 1063 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(recipe.Name) ? recipe.Id : recipe.Name; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatRecipeLine` · L1066–1069

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1066–1069](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1066-L1069)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| tab | string | None | False /  |
| name | string | None | False /  |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:169–169](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L169-L169) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:170–170](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L170-L170) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:206–206](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L206-L206) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:223–223](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L223-L223) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:298–298](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L298-L298) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:299–299](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L299-L299) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:316–316](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L316-L316) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L341-L341) | FormatRecipeLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1476–1476](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1476-L1476) | FormatRecipeLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1068 | string.Join | resolved | string string.Join(string?, params System.ReadOnlySpan<string?>) |
| 1068 | Escape | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.Escape(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1104 |
| 1068 | Escape | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.Escape(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1104 |
| 1068 | Escape | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.Escape(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1104 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1068 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(",", Escape(tab), Escape(name), Escape(value)) |
| 1068 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Escape(tab) |
| 1068 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Escape(name) |
| 1068 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Escape(value) |
| 1068 | return | 호출자에게 값 또는 제어를 반환합니다: return string.Join(",", Escape(tab), Escape(name), Escape(value)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateSavedRecipeFile` · L1071–1102

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1071–1102](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1071-L1102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateSavedRecipeFile(string, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | string | None | False /  |
| expectedValues | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L229-L229) | ValidateSavedRecipeFile | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:348–348](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L348-L348) | ValidateSavedRecipeFile | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1088 | ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1088 | ReadRecipeValues(path, cancellationToken).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.GroupBy<Drilling.Common.Managers.ST_RECIPE_VALUE, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1088 | ReadRecipeValues | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_VALUE> Drilling.File.JHMI.CJhmiRecipeFile.ReadRecipeValues(string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:890 |
| 1091 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1092 | actualValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 1094 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 1097 | actualValue.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1099 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 1088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase) |
| 1088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadRecipeValues(path, cancellationToken) |
| 1088 | local-declaration | 지역 변수를 선언합니다: var actualValues = ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase); |
| 1088 | variable-initializer | 변수의 초기값을 지정합니다: actualValues = ReadRecipeValues(path, cancellationToken).GroupBy(SelectGroupKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 1089 | foreach | 컬렉션 요소를 순회합니다: foreach (var expectedValue in expectedValues) |
| 1091 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1092 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: actualValues.TryGetValue(expectedValue.Key, out var actualValue) |
| 1092 | if | 조건에 따라 분기합니다: if (!actualValues.TryGetValue(expectedValue.Key, out var actualValue)) |
| 1094 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"Recipe CSV validation failed. Missing item: {expectedValue.Key}") |
| 1094 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"Recipe CSV validation failed. Missing item: {expectedValue.Key}"); |
| 1097 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: actualValue.Equals(expectedValue.Value, StringComparison.Ordinal) |
| 1097 | if | 조건에 따라 분기합니다: if (!actualValue.Equals(expectedValue.Value, StringComparison.Ordinal)) |
| 1099 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"Recipe CSV validation failed. {expectedValue.Key}: expected '{expectedValue.Value}', actual '{actualValue}'") |
| 1099 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"Recipe CSV validation failed. {expectedValue.Key}: expected '{expectedValue.Value}', actual '{actualValue}'"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateSavedRecipeFile"]
 N0["L1089 foreach"]
 M -->|포함| N0
 N1["L1092 if"]
 N0 -->|포함| N1
 N2["L1097 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectGroupKey` · L1073–1076

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1073–1076](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1073-L1076)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectGroupKey(Drilling.Common.Managers.ST_RECIPE_VALUE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_RECIPE_VALUE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1075 | CreateKey | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CreateKey(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1051 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1075 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateKey(item.Tab, item.Name) |
| 1075 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateKey(item.Tab, item.Name); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L1078–1081

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1078–1081](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1078-L1081)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1080 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L1083–1086

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1083–1086](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1083-L1086)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_VALUE> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1085 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE>.Last<Drilling.Common.Managers.ST_RECIPE_VALUE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1085 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 1085 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Escape` · L1104–1112

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1104–1112](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1104-L1112)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.Escape(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1068–1068](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1068-L1068) | Escape | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1068–1068](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1068-L1068) | Escape | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1068–1068](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1068-L1068) | Escape | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1106 | value.Contains | resolved | bool string.Contains(char) |
| 1106 | value.Contains | resolved | bool string.Contains(char) |
| 1106 | value.Contains | resolved | bool string.Contains(char) |
| 1106 | value.Contains | resolved | bool string.Contains(char) |
| 1111 | value.Replace | resolved | string string.Replace(string, string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Contains(',') |
| 1106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Contains('"') |
| 1106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Contains('\r') |
| 1106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Contains('\n') |
| 1106 | if | 조건에 따라 분기합니다: if (!value.Contains(',') && !value.Contains('"') && !value.Contains('\r') && !value.Contains('\n')) |
| 1108 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |
| 1111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Replace("\"", "\"\"") |
| 1111 | return | 호출자에게 값 또는 제어를 반환합니다: return $"\"{value.Replace("\"", "\"\"")}\""; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Escape"]
 N0["L1106 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSafeFileName` · L1114–1123

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1114–1123](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1114-L1123)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.GetSafeFileName(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:969–969](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L969-L969) | GetSafeFileName | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1417–1417](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1417-L1417) | GetSafeFileName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1116 | Path.GetInvalidFileNameChars | resolved | char[] System.IO.Path.GetInvalidFileNameChars() |
| 1122 | new string | resolved | string.String(char[]?) |
| 1122 | recipeId.Select(SelectItem).ToArray | resolved | char[] System.Collections.Generic.IEnumerable<char>.ToArray<char>() |
| 1122 | recipeId.Select | resolved | System.Collections.Generic.IEnumerable<char> System.Collections.Generic.IEnumerable<char>.Select<char, char>(System.Func<char, char>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetInvalidFileNameChars() |
| 1116 | local-declaration | 지역 변수를 선언합니다: var invalid = Path.GetInvalidFileNameChars(); |
| 1116 | variable-initializer | 변수의 초기값을 지정합니다: invalid = Path.GetInvalidFileNameChars() |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new string (recipeId.Select(SelectItem).ToArray()) |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeId.Select(SelectItem).ToArray() |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeId.Select(SelectItem) |
| 1122 | return | 호출자에게 값 또는 제어를 반환합니다: return new string (recipeId.Select(SelectItem).ToArray()); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectItem` · L1117–1120

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1117–1120](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1117-L1120)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | char SelectItem(char) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | char |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| character | char | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1119 | invalid.Contains | resolved | bool System.ReadOnlySpan<char>.Contains<char>(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: invalid.Contains(character) |
| 1119 | conditional-expression | 조건에 따라 결과식을 선택합니다: invalid.Contains(character) ? '_' : character |
| 1119 | return | 호출자에게 값 또는 제어를 반환합니다: return invalid.Contains(character) ? '_' : character; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteIfExists` · L1125–1131

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1125–1131](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1125-L1131)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteIfExists(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:408–408](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L408-L408) | DeleteIfExists | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1127 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1129 | System.IO.File.Delete | resolved | void System.IO.File.Delete(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(path) |
| 1127 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(path)) |
| 1129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Delete(path) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteIfExists"]
 N0["L1127 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameWithCompanions` · L1135–1135

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1135–1135](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1135-L1135)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.RenameWithCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1135 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |
| 1135 | RenameCompanionsCore | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RenameCompanionsCore(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1136 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => RenameCompanionsCore(oldRecipeId, newRecipeId, selectedFolders, token), token) |
| 1135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameCompanionsCore(oldRecipeId, newRecipeId, selectedFolders, token) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameCompanionsCore` · L1136–1175

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1136–1175](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1136-L1175)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.RenameCompanionsCore(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldId | string | None | False /  |
| newId | string | None | False /  |
| selected | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1135–1135](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1135-L1135) | RenameCompanionsCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1138 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1139 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1140 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1141 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1141 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1142 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?) |
| 1143 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1143 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1144 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1145 | ListCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1285 |
| 1147 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1148 | SelectCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.SelectCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1234 |
| 1149 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1150 | new List<(string Source, string Target)> | resolved | System.Collections.Generic.List<(string Source, string Target)>.List() |
| 1156 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1157 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1158 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1159 | RejectLink | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1399 |
| 1160 | Directory.Move | resolved | void System.IO.Directory.Move(string, string) |
| 1161 | moved.Add | resolved | void System.Collections.Generic.List<(string Source, string Target)>.Add((string Source, string Target)) |
| 1164 | RenameCore | resolved | string? Drilling.File.JHMI.CJhmiRecipeFile.RenameCore(string, string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:255 |
| 1168 | moved.AsEnumerable().Reverse | resolved | System.Collections.Generic.IEnumerable<(string Source, string Target)> System.Collections.Generic.IEnumerable<(string Source, string Target)>.Reverse<(string Source, string Target)>() |
| 1168 | moved.AsEnumerable | resolved | System.Collections.Generic.IEnumerable<(string Source, string Target)> System.Collections.Generic.IEnumerable<(string Source, string Target)>.AsEnumerable<(string Source, string Target)>() |
| 1169 | Directory.Move | resolved | void System.IO.Directory.Move(string, string) |
| 1174 | LogCompanionOperation | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.LogCompanionOperation(System.Action) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1264 |
| 1174 | _logManager.WriteRecipeRename | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(oldId) |
| 1139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(newId) |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(oldId)) |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(oldId) |
| 1141 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(GetRecipePath(oldId))) |
| 1142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException("원본 레시피가 없습니다: " + oldId) |
| 1142 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException("원본 레시피가 없습니다: " + oldId); |
| 1143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(newId)) |
| 1143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(newId) |
| 1143 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(GetRecipePath(newId))) |
| 1144 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("이미 존재하는 레시피입니다: " + newId) |
| 1144 | throw | 예외를 발생/전달합니다: throw new IOException("이미 존재하는 레시피입니다: " + newId); |
| 1145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(newId, newId, token) |
| 1145 | local-declaration | 지역 변수를 선언합니다: var existing = ListCompanions(newId, newId, token); |
| 1145 | variable-initializer | 변수의 초기값을 지정합니다: existing = ListCompanions(newId, newId, token) |
| 1146 | if | 조건에 따라 분기합니다: if (existing.Count > 0) |
| 1147 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("변경할 레시피 이름의 부가 폴더가 이미 존재합니다: " + existing[0].SourceName) |
| 1147 | throw | 예외를 발생/전달합니다: throw new IOException("변경할 레시피 이름의 부가 폴더가 이미 존재합니다: " + existing[0].SourceName); |
| 1148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectCompanions(oldId, newId, selected, token) |
| 1148 | local-declaration | 지역 변수를 선언합니다: var folders = SelectCompanions(oldId, newId, selected, token); |
| 1148 | variable-initializer | 변수의 초기값을 지정합니다: folders = SelectCompanions(oldId, newId, selected, token) |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(_recipeDirectory) |
| 1149 | local-declaration | 지역 변수를 선언합니다: var root = Path.GetFullPath(_recipeDirectory); |
| 1149 | variable-initializer | 변수의 초기값을 지정합니다: root = Path.GetFullPath(_recipeDirectory) |
| 1150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(string Source, string Target)>() |
| 1150 | local-declaration | 지역 변수를 선언합니다: var moved = new List<(string Source, string Target)>(); |
| 1150 | variable-initializer | 변수의 초기값을 지정합니다: moved = new List<(string Source, string Target)>() |
| 1151 | local-declaration | 지역 변수를 선언합니다: string? oldName; |
| 1152 | try | 예외 처리 범위입니다: try |
| 1154 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, folder.SourceName) |
| 1157 | local-declaration | 지역 변수를 선언합니다: var source = CompanionPath(root, folder.SourceName); |
| 1157 | variable-initializer | 변수의 초기값을 지정합니다: source = CompanionPath(root, folder.SourceName) |
| 1158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, folder.TargetName) |
| 1158 | local-declaration | 지역 변수를 선언합니다: var target = CompanionPath(root, folder.TargetName); |
| 1158 | variable-initializer | 변수의 초기값을 지정합니다: target = CompanionPath(root, folder.TargetName) |
| 1159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RejectLink(source) |
| 1160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Move(source, target) |
| 1161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: moved.Add((source, target)) |
| 1164 | assignment | 값을 대상에 대입합니다: oldName = RenameCore(oldId, newId, token, writeHistory: false) |
| 1164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameCore(oldId, newId, token, writeHistory: false) |
| 1166 | catch | 지정 예외를 처리합니다: catch  |
| 1168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: moved.AsEnumerable().Reverse() |
| 1168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: moved.AsEnumerable() |
| 1168 | foreach | 컬렉션 요소를 순회합니다: foreach (var pair in moved.AsEnumerable().Reverse()) |
| 1169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Move(pair.Target, pair.Source) |
| 1170 | throw | 예외를 발생/전달합니다: throw; |
| 1173 | if | 조건에 따라 분기합니다: if (oldName is not null) |
| 1174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LogCompanionOperation(() => _logManager.WriteRecipeRename(oldName, newId)) |
| 1174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeRename(oldName, newId) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RenameCompanionsCore"]
 N0["L1141 if"]
 M -->|포함| N0
 N1["L1143 if"]
 M -->|포함| N1
 N2["L1146 if"]
 M -->|포함| N2
 N3["L1152 try"]
 M -->|포함| N3
 N4["L1154 foreach"]
 N3 -->|포함| N4
 N5["L1166 catch"]
 N3 -->|포함| N5
 N6["L1168 foreach"]
 N5 -->|포함| N6
 N7["L1173 if"]
 M -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteWithCompanions` · L1177–1177

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1177–1177](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1177-L1177)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.DeleteWithCompanions(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1177 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |
| 1177 | DeleteCompanionsCore | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteCompanionsCore(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1178 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => DeleteCompanionsCore(recipeId, selectedFolders, token), token) |
| 1177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteCompanionsCore(recipeId, selectedFolders, token) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteCompanionsCore` · L1178–1232

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1178–1232](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1178-L1232)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteCompanionsCore(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| selected | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1177–1177](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1177-L1177) | DeleteCompanionsCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1180 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1181 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1182 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1182 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1183 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?) |
| 1184 | SelectCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.SelectCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1234 |
| 1185 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1186 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1186 | Guid.NewGuid().ToString | resolved | string System.Guid.ToString(string?) |
| 1186 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 1187 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 1196 | CopyDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.CopyDirectory(string, string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1367 |
| 1196 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1196 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1200 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1201 | DeleteOwnedDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1405 |
| 1201 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1204 | DeleteCore | resolved | string? Drilling.File.JHMI.CJhmiRecipeFile.DeleteCore(string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:381 |
| 1213 | RestoreMissing | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RestoreMissing(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1248 |
| 1213 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1213 | CompanionPath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1240 |
| 1218 | new IOException | resolved | System.IO.IOException.IOException(string?, System.Exception?) |
| 1218 | new AggregateException | resolved | System.AggregateException.AggregateException(params System.Exception[]) |
| 1227 | DeleteOwnedDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1405 |
| 1231 | LogCompanionOperation | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.LogCompanionOperation(System.Action) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1264 |
| 1231 | _logManager.WriteRecipeDelete | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(id) |
| 1181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(id)) |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(id) |
| 1182 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(GetRecipePath(id))) |
| 1183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException("삭제할 레시피가 없습니다: " + id) |
| 1183 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException("삭제할 레시피가 없습니다: " + id); |
| 1184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectCompanions(id, id, selected, token) |
| 1184 | local-declaration | 지역 변수를 선언합니다: var folders = SelectCompanions(id, id, selected, token); |
| 1184 | variable-initializer | 변수의 초기값을 지정합니다: folders = SelectCompanions(id, id, selected, token) |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(_recipeDirectory) |
| 1185 | local-declaration | 지역 변수를 선언합니다: var root = Path.GetFullPath(_recipeDirectory); |
| 1185 | variable-initializer | 변수의 초기값을 지정합니다: root = Path.GetFullPath(_recipeDirectory) |
| 1186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, ".recipe-delete-" + Guid.NewGuid().ToString("N")) |
| 1186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid().ToString("N") |
| 1186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 1186 | local-declaration | 지역 변수를 선언합니다: var backup = CompanionPath(root, ".recipe-delete-" + Guid.NewGuid().ToString("N")); |
| 1186 | variable-initializer | 변수의 초기값을 지정합니다: backup = CompanionPath(root, ".recipe-delete-" + Guid.NewGuid().ToString("N")) |
| 1187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(backup) |
| 1188 | local-declaration | 지역 변수를 선언합니다: var ready = false; |
| 1188 | variable-initializer | 변수의 초기값을 지정합니다: ready = false |
| 1189 | local-declaration | 지역 변수를 선언합니다: var cleanup = true; |
| 1189 | variable-initializer | 변수의 초기값을 지정합니다: cleanup = true |
| 1190 | local-declaration | 지역 변수를 선언합니다: string? oldName; |
| 1191 | try | 예외 처리 범위입니다: try |
| 1195 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CopyDirectory(CompanionPath(root, folder.SourceName), CompanionPath(backup, folder.SourceName), token) |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, folder.SourceName) |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(backup, folder.SourceName) |
| 1197 | assignment | 값을 대상에 대입합니다: ready = true |
| 1198 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1200 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteOwnedDirectory(root, CompanionPath(root, folder.SourceName)) |
| 1201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, folder.SourceName) |
| 1204 | assignment | 값을 대상에 대입합니다: oldName = DeleteCore(id, token, writeHistory: false) |
| 1204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteCore(id, token, writeHistory: false) |
| 1206 | catch | 지정 예외를 처리합니다: catch (Exception operationError) |
| 1208 | if | 조건에 따라 분기합니다: if (ready) |
| 1210 | try | 예외 처리 범위입니다: try |
| 1212 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1213 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RestoreMissing(CompanionPath(backup, folder.SourceName), CompanionPath(root, folder.SourceName)) |
| 1213 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(backup, folder.SourceName) |
| 1213 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompanionPath(root, folder.SourceName) |
| 1215 | catch | 지정 예외를 처리합니다: catch (Exception recoveryError) |
| 1217 | assignment | 값을 대상에 대입합니다: cleanup = false |
| 1218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException($"레시피 삭제 중 복원하지 못한 부가 데이터가 있습니다. 백업: {backup}", new AggregateException(operationError, recoveryError)) |
| 1218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new AggregateException(operationError, recoveryError) |
| 1218 | throw | 예외를 발생/전달합니다: throw new IOException($"레시피 삭제 중 복원하지 못한 부가 데이터가 있습니다. 백업: {backup}", new AggregateException(operationError, recoveryError)); |
| 1222 | throw | 예외를 발생/전달합니다: throw; |
| 1224 | finally | 종료 정리 구간입니다: finally |
| 1226 | if | 조건에 따라 분기합니다: if (cleanup) |
| 1227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteOwnedDirectory(root, backup) |
| 1230 | if | 조건에 따라 분기합니다: if (oldName is not null) |
| 1231 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LogCompanionOperation(() => _logManager.WriteRecipeDelete(oldName)) |
| 1231 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeDelete(oldName) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteCompanionsCore"]
 N0["L1182 if"]
 M -->|포함| N0
 N1["L1191 try"]
 M -->|포함| N1
 N2["L1195 foreach"]
 N1 -->|포함| N2
 N3["L1198 foreach"]
 N1 -->|포함| N3
 N4["L1206 catch"]
 N1 -->|포함| N4
 N5["L1208 if"]
 N4 -->|포함| N5
 N6["L1210 try"]
 N5 -->|포함| N6
 N7["L1212 foreach"]
 N6 -->|포함| N7
 N8["L1215 catch"]
 N6 -->|포함| N8
 N9["L1224 finally"]
 N1 -->|포함| N9
 N10["L1226 if"]
 N9 -->|포함| N10
 N11["L1230 if"]
 M -->|포함| N11
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SelectCompanions` · L1234–1238

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1234–1238](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1234-L1238)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.SelectCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| source | string | None | False /  |
| target | string | None | False /  |
| selected | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1148–1148](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1148-L1148) | SelectCompanions | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1184–1184](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1184-L1184) | SelectCompanions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1236 | ListCompanions(source, target, token).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1236 | ListCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1285 |
| 1237 | selected.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.ToArray<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>() |
| 1237 | selected.Distinct(StringComparer.OrdinalIgnoreCase).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> System.Collections.Generic.IEnumerable<string>.Select<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>(System.Func<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>) |
| 1237 | selected.Distinct | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Distinct<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 1237 | available.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.TryGetValue(string, out Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER) |
| 1237 | new IOException | resolved | System.IO.IOException.IOException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(source, target, token).ToDictionary(folder => folder.SourceName, StringComparer.OrdinalIgnoreCase) |
| 1236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(source, target, token) |
| 1236 | local-declaration | 지역 변수를 선언합니다: var available = ListCompanions(source, target, token).ToDictionary(folder => folder.SourceName, StringComparer.OrdinalIgnoreCase); |
| 1236 | variable-initializer | 변수의 초기값을 지정합니다: available = ListCompanions(source, target, token).ToDictionary(folder => folder.SourceName, StringComparer.OrdinalIgnoreCase) |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name)).ToArray() |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name)) |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Distinct(StringComparer.OrdinalIgnoreCase) |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: available.TryGetValue(name, out var folder) |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name) |
| 1237 | conditional-expression | 조건에 따라 결과식을 선택합니다: available.TryGetValue(name, out var folder) ? folder : throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name) |
| 1237 | return | 호출자에게 값 또는 제어를 반환합니다: return selected.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name)).ToArray(); |
| 1237 | throw | 예외를 발생/전달합니다: throw new IOException("연결된 레시피 부가 폴더가 아닙니다: " + name) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompanionPath` · L1240–1246

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1240–1246](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1240-L1246)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.File.JHMI.CJhmiRecipeFile.CompanionPath(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parent | string | None | False /  |
| name | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1157–1157](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1157-L1157) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1158–1158](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1158-L1158) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1186–1186](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1186-L1186) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1196–1196](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1196-L1196) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1196–1196](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1196-L1196) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1201–1201](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1201-L1201) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1213–1213](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1213-L1213) | CompanionPath | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1213–1213](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1213-L1213) | CompanionPath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1242 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1242 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1243 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |
| 1243 | Path.GetDirectoryName | resolved | string? System.IO.Path.GetDirectoryName(string?) |
| 1244 | new IOException | resolved | System.IO.IOException.IOException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(parent, name)) |
| 1242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(parent, name) |
| 1242 | local-declaration | 지역 변수를 선언합니다: var full = Path.GetFullPath(Path.Combine(parent, name)); |
| 1242 | variable-initializer | 변수의 초기값을 지정합니다: full = Path.GetFullPath(Path.Combine(parent, name)) |
| 1243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals(Path.GetDirectoryName(full), parent, StringComparison.OrdinalIgnoreCase) |
| 1243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetDirectoryName(full) |
| 1243 | if | 조건에 따라 분기합니다: if (!string.Equals(Path.GetDirectoryName(full), parent, StringComparison.OrdinalIgnoreCase)) |
| 1244 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("레시피 부가 폴더 경로가 올바르지 않습니다.") |
| 1244 | throw | 예외를 발생/전달합니다: throw new IOException("레시피 부가 폴더 경로가 올바르지 않습니다."); |
| 1245 | return | 호출자에게 값 또는 제어를 반환합니다: return full; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompanionPath"]
 N0["L1243 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RestoreMissing` · L1248–1262

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1248–1262](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1248-L1262)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.RestoreMissing(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| backup | string | None | False /  |
| original | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1213–1213](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1213-L1213) | RestoreMissing | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1261–1261](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1261-L1261) | RestoreMissing | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1250 | Directory.Exists | resolved | bool System.IO.Directory.Exists(string?) |
| 1251 | RejectLink | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1399 |
| 1252 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 1253 | Directory.EnumerateFiles | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateFiles(string) |
| 1255 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1255 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 1256 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1257 | System.IO.File.Copy | resolved | void System.IO.File.Copy(string, string, bool) |
| 1260 | Directory.EnumerateDirectories | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateDirectories(string) |
| 1261 | RestoreMissing | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RestoreMissing(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1248 |
| 1261 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1261 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1250 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Exists(original) |
| 1250 | if | 조건에 따라 분기합니다: if (Directory.Exists(original)) |
| 1251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RejectLink(original) |
| 1252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(original) |
| 1253 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateFiles(backup) |
| 1253 | foreach | 컬렉션 요소를 순회합니다: foreach (var file in Directory.EnumerateFiles(backup)) |
| 1255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(original, Path.GetFileName(file)) |
| 1255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(file) |
| 1255 | local-declaration | 지역 변수를 선언합니다: var target = Path.Combine(original, Path.GetFileName(file)); |
| 1255 | variable-initializer | 변수의 초기값을 지정합니다: target = Path.Combine(original, Path.GetFileName(file)) |
| 1256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(target) |
| 1256 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(target)) |
| 1257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Copy(file, target, overwrite: false) |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(backup) |
| 1260 | foreach | 컬렉션 요소를 순회합니다: foreach (var child in Directory.EnumerateDirectories(backup)) |
| 1261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RestoreMissing(child, Path.Combine(original, Path.GetFileName(child))) |
| 1261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(original, Path.GetFileName(child)) |
| 1261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(child) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RestoreMissing"]
 N0["L1250 if"]
 M -->|포함| N0
 N1["L1253 foreach"]
 M -->|포함| N1
 N2["L1256 if"]
 N1 -->|포함| N2
 N3["L1260 foreach"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LogCompanionOperation` · L1264–1280

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1264–1280](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1264-L1280)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.LogCompanionOperation(System.Action) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| write | System.Action | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1174–1174](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1174-L1174) | LogCompanionOperation | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1231–1231](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1231-L1231) | LogCompanionOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1268 | write | resolved · 동적 구현 선택 가능 | void System.Action.Invoke() |
| 1274 | Trace.TraceError | resolved | void System.Diagnostics.Trace.TraceError(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1266 | try | 예외 처리 범위입니다: try |
| 1268 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: write() |
| 1270 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 1272 | try | 예외 처리 범위입니다: try |
| 1274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Trace.TraceError($"Recipe companion operation completed, but logging failed: {error}") |
| 1276 | catch | 지정 예외를 처리합니다: catch  |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LogCompanionOperation"]
 N0["L1266 try"]
 M -->|포함| N0
 N1["L1270 catch"]
 N0 -->|포함| N1
 N2["L1272 try"]
 N1 -->|포함| N2
 N3["L1276 catch"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ListCompanionFolders` · L1284–1284

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1284–1284](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1284-L1284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sourceRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1284 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>>(System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:417 |
| 1284 | ListCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1285 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => ListCompanions(sourceRecipeId, newRecipeId, token), token) |
| 1284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(sourceRecipeId, newRecipeId, token) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ListCompanions` · L1285–1294

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1285–1294](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1285-L1294)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sourceRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1145–1145](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1145-L1145) | ListCompanions | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1236–1236](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1236-L1236) | ListCompanions | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1284–1284](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1284-L1284) | ListCompanions | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1310–1310](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1310-L1310) | ListCompanions | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1313–1313](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1313-L1313) | ListCompanions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1287 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1288 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1289 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1290 | Directory.Exists | resolved | bool System.IO.Directory.Exists(string?) |
| 1293 | Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreCase).Select(name => new ST_RECIPE_COMPANION_FOLDER(name!, newRecipeId + name![sourceRecipeId.Length..])).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.ToArray<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>() |
| 1293 | Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreCase).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> System.Collections.Generic.IEnumerable<string?>.Select<string?, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>(System.Func<string?, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>) |
| 1293 | Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy | resolved | System.Linq.IOrderedEnumerable<string?> System.Collections.Generic.IEnumerable<string?>.OrderBy<string?, string?>(System.Func<string?, string?>, System.Collections.Generic.IComparer<string?>?) |
| 1293 | Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where | resolved | System.Collections.Generic.IEnumerable<string?> System.Collections.Generic.IEnumerable<string?>.Where<string?>(System.Func<string?, bool>) |
| 1293 | Directory.EnumerateDirectories(_recipeDirectory).Select | resolved | System.Collections.Generic.IEnumerable<string?> System.Collections.Generic.IEnumerable<string>.Select<string, string?>(System.Func<string, string?>) |
| 1293 | Directory.EnumerateDirectories | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateDirectories(string) |
| 1293 | name.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1293 | new ST_RECIPE_COMPANION_FOLDER | resolved | Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER.ST_RECIPE_COMPANION_FOLDER(string, string) · Drilling.Common/Managers/CRecipeManager.cs:339 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1287 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(sourceRecipeId) |
| 1288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(newRecipeId) |
| 1289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Exists(_recipeDirectory) |
| 1290 | if | 조건에 따라 분기합니다: if (!Directory.Exists(_recipeDirectory)) |
| 1291 | return | 호출자에게 값 또는 제어를 반환합니다: return[]; |
| 1292 | local-declaration | 지역 변수를 선언합니다: var prefix = sourceRecipeId + "_"; |
| 1292 | variable-initializer | 변수의 초기값을 지정합니다: prefix = sourceRecipeId + "_" |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreC… |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreC… |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreC… |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)) |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName) |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(_recipeDirectory) |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase) |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_COMPANION_FOLDER(name!, newRecipeId + name![sourceRecipeId.Length..]) |
| 1293 | return | 호출자에게 값 또는 제어를 반환합니다: return Directory.EnumerateDirectories(_recipeDirectory).Select(Path.GetFileName).Where(name => name is not null && name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)).OrderBy(name => name, StringComparer.OrdinalIgnoreCase |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ListCompanions"]
 N0["L1290 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateCopy` · L1296–1296

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1296–1296](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1296-L1296)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.CreateCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| sourceRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1296 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation(System.Action, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:430 |
| 1296 | CreateCopyCore | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.CreateCopyCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1297 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => CreateCopyCore(recipe, sourceRecipeId, selectedFolders, token), token) |
| 1296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateCopyCore(recipe, sourceRecipeId, selectedFolders, token) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateCopyCore` · L1297–1365

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1297–1365](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1297-L1365)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.CreateCopyCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| sourceRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1296–1296](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1296-L1296) | CreateCopyCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1299 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1300 | ValidateCopyId | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1415 |
| 1301 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1302 | sourceRecipeId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1303 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1304 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1304 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1305 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?) |
| 1306 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1307 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1308 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1310 | ListCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1285 |
| 1312 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1313 | ListCompanions(sourceRecipeId, recipe.Id, token).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1313 | ListCompanions | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> Drilling.File.JHMI.CJhmiRecipeFile.ListCompanions(string, string, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1285 |
| 1314 | selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.ToArray<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>() |
| 1314 | selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER> System.Collections.Generic.IEnumerable<string>.Select<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>(System.Func<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>) |
| 1314 | selectedFolders.Distinct | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Distinct<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 1314 | available.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>.TryGetValue(string, out Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER) |
| 1314 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1316 | Directory.Exists | resolved | bool System.IO.Directory.Exists(string?) |
| 1316 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1316 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1316 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1317 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1318 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1319 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1319 | Guid.NewGuid().ToString | resolved | string System.Guid.ToString(string?) |
| 1319 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 1320 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 1321 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 1325 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1326 | SaveCore | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.SaveCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken, string?, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:120 |
| 1330 | folder.SourceName.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 1333 | CopyDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.CopyDirectory(string, string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1367 |
| 1334 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1335 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1339 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1342 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1342 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1343 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1343 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1344 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |
| 1344 | Path.GetDirectoryName | resolved | string? System.IO.Path.GetDirectoryName(string?) |
| 1344 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |
| 1344 | Path.GetDirectoryName | resolved | string? System.IO.Path.GetDirectoryName(string?) |
| 1345 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1346 | Directory.Move | resolved | void System.IO.Directory.Move(string, string) |
| 1347 | committed.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1351 | System.IO.File.Move | resolved | void System.IO.File.Move(string, string, bool) |
| 1356 | DeleteOwnedDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1405 |
| 1361 | DeleteOwnedDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1405 |
| 1364 | _logManager.WriteRecipeCreate | unresolved | None |
| 1364 | GetRecipeName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipeName(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1061 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(sourceRecipeId) |
| 1300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateCopyId(recipe.Id) |
| 1301 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: sourceRecipeId.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase) |
| 1302 | if | 조건에 따라 분기합니다: if (sourceRecipeId.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase)) |
| 1303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("원본과 새 레시피 이름이 같습니다.") |
| 1303 | throw | 예외를 발생/전달합니다: throw new IOException("원본과 새 레시피 이름이 같습니다."); |
| 1304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(GetRecipePath(sourceRecipeId)) |
| 1304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(sourceRecipeId) |
| 1304 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(GetRecipePath(sourceRecipeId))) |
| 1305 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException("원본 레시피가 없습니다: " + sourceRecipeId) |
| 1305 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException("원본 레시피가 없습니다: " + sourceRecipeId); |
| 1306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipe.Id) |
| 1306 | local-declaration | 지역 변수를 선언합니다: var destination = GetRecipePath(recipe.Id); |
| 1306 | variable-initializer | 변수의 초기값을 지정합니다: destination = GetRecipePath(recipe.Id) |
| 1307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(destination) |
| 1307 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(destination)) |
| 1308 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("이미 존재하는 레시피입니다: " + recipe.Id) |
| 1308 | throw | 예외를 발생/전달합니다: throw new IOException("이미 존재하는 레시피입니다: " + recipe.Id); |
| 1310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(recipe.Id, recipe.Id, token) |
| 1310 | local-declaration | 지역 변수를 선언합니다: var existingFolders = ListCompanions(recipe.Id, recipe.Id, token); |
| 1310 | variable-initializer | 변수의 초기값을 지정합니다: existingFolders = ListCompanions(recipe.Id, recipe.Id, token) |
| 1311 | if | 조건에 따라 분기합니다: if (existingFolders.Count != 0) |
| 1312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("새 레시피 이름의 부가 폴더가 이미 존재합니다: " + existingFolders[0].SourceName) |
| 1312 | throw | 예외를 발생/전달합니다: throw new IOException("새 레시피 이름의 부가 폴더가 이미 존재합니다: " + existingFolders[0].SourceName); |
| 1313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(sourceRecipeId, recipe.Id, token).ToDictionary(item => item.SourceName, StringComparer.OrdinalIgnoreCase) |
| 1313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ListCompanions(sourceRecipeId, recipe.Id, token) |
| 1313 | local-declaration | 지역 변수를 선언합니다: var available = ListCompanions(sourceRecipeId, recipe.Id, token).ToDictionary(item => item.SourceName, StringComparer.OrdinalIgnoreCase); |
| 1313 | variable-initializer | 변수의 초기값을 지정합니다: available = ListCompanions(sourceRecipeId, recipe.Id, token).ToDictionary(item => item.SourceName, StringComparer.OrdinalIgnoreCase) |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name)).ToArray() |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name)) |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase) |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: available.TryGetValue(name, out var folder) |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name) |
| 1314 | conditional-expression | 조건에 따라 결과식을 선택합니다: available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name) |
| 1314 | local-declaration | 지역 변수를 선언합니다: var folders = selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name)).ToArray(); |
| 1314 | throw | 예외를 발생/전달합니다: throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name) |
| 1314 | variable-initializer | 변수의 초기값을 지정합니다: folders = selectedFolders.Distinct(StringComparer.OrdinalIgnoreCase).Select(name => available.TryGetValue(name, out var folder) ? folder : throw new IOException("원본 레시피의 부가 폴더를 찾을 수 없습니다: " + name)).ToArray() |
| 1315 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Exists(Path.Combine(_recipeDirectory, folder.TargetName)) |
| 1316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_recipeDirectory, folder.TargetName) |
| 1316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(Path.Combine(_recipeDirectory, folder.TargetName)) |
| 1316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_recipeDirectory, folder.TargetName) |
| 1316 | if | 조건에 따라 분기합니다: if (Directory.Exists(Path.Combine(_recipeDirectory, folder.TargetName)) &#124;&#124; System.IO.File.Exists(Path.Combine(_recipeDirectory, folder.TargetName))) |
| 1317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("새 레시피의 부가 폴더가 이미 존재합니다: " + folder.TargetName) |
| 1317 | throw | 예외를 발생/전달합니다: throw new IOException("새 레시피의 부가 폴더가 이미 존재합니다: " + folder.TargetName); |
| 1318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(_recipeDirectory) |
| 1318 | local-declaration | 지역 변수를 선언합니다: var root = Path.GetFullPath(_recipeDirectory); |
| 1318 | variable-initializer | 변수의 초기값을 지정합니다: root = Path.GetFullPath(_recipeDirectory) |
| 1319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(root, ".recipe-create-" + Guid.NewGuid().ToString("N")) |
| 1319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid().ToString("N") |
| 1319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 1319 | local-declaration | 지역 변수를 선언합니다: var staging = Path.Combine(root, ".recipe-create-" + Guid.NewGuid().ToString("N")); |
| 1319 | variable-initializer | 변수의 초기값을 지정합니다: staging = Path.Combine(root, ".recipe-create-" + Guid.NewGuid().ToString("N")) |
| 1320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>() |
| 1320 | local-declaration | 지역 변수를 선언합니다: var committed = new List<string>(); |
| 1320 | variable-initializer | 변수의 초기값을 지정합니다: committed = new List<string>() |
| 1321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(staging) |
| 1322 | try | 예외 처리 범위입니다: try |
| 1325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(staging, recipe.Id + ".csv") |
| 1325 | local-declaration | 지역 변수를 선언합니다: var stagedRecipe = Path.Combine(staging, recipe.Id + ".csv"); |
| 1325 | variable-initializer | 변수의 초기값을 지정합니다: stagedRecipe = Path.Combine(staging, recipe.Id + ".csv") |
| 1326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveCore(recipe, token, stagedRecipe, writeHistory: false) |
| 1327 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1330 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: folder.SourceName.EndsWith( "_reviewoffset", StringComparison.OrdinalIgnoreCase) |
| 1330 | local-declaration | 지역 변수를 선언합니다: var excludeApplyHistory = folder.SourceName.EndsWith( "_reviewoffset", StringComparison.OrdinalIgnoreCase); |
| 1330 | variable-initializer | 변수의 초기값을 지정합니다: excludeApplyHistory = folder.SourceName.EndsWith( "_reviewoffset", StringComparison.OrdinalIgnoreCase) |
| 1333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CopyDirectory( Path.Combine(root, folder.SourceName), Path.Combine(staging, folder.TargetName), token, excludeApplyHistory) |
| 1334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(root, folder.SourceName) |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(staging, folder.TargetName) |
| 1339 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1340 | foreach | 컬렉션 요소를 순회합니다: foreach (var folder in folders) |
| 1342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(root, folder.TargetName)) |
| 1342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(root, folder.TargetName) |
| 1342 | local-declaration | 지역 변수를 선언합니다: var target = Path.GetFullPath(Path.Combine(root, folder.TargetName)); |
| 1342 | variable-initializer | 변수의 초기값을 지정합니다: target = Path.GetFullPath(Path.Combine(root, folder.TargetName)) |
| 1343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(staging, folder.TargetName)) |
| 1343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(staging, folder.TargetName) |
| 1343 | local-declaration | 지역 변수를 선언합니다: var stagedFolder = Path.GetFullPath(Path.Combine(staging, folder.TargetName)); |
| 1343 | variable-initializer | 변수의 초기값을 지정합니다: stagedFolder = Path.GetFullPath(Path.Combine(staging, folder.TargetName)) |
| 1344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals(Path.GetDirectoryName(target), root, StringComparison.OrdinalIgnoreCase) |
| 1344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetDirectoryName(target) |
| 1344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals(Path.GetDirectoryName(stagedFolder), staging, StringComparison.OrdinalIgnoreCase) |
| 1344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetDirectoryName(stagedFolder) |
| 1344 | if | 조건에 따라 분기합니다: if (!string.Equals(Path.GetDirectoryName(target), root, StringComparison.OrdinalIgnoreCase) &#124;&#124; !string.Equals(Path.GetDirectoryName(stagedFolder), staging, StringComparison.OrdinalIgnoreCase)) |
| 1345 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("레시피 부가 폴더 경로가 올바르지 않습니다.") |
| 1345 | throw | 예외를 발생/전달합니다: throw new IOException("레시피 부가 폴더 경로가 올바르지 않습니다."); |
| 1346 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Move(stagedFolder, target) |
| 1347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: committed.Add(target) |
| 1351 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Move(stagedRecipe, destination, overwrite: false) |
| 1353 | catch | 지정 예외를 처리합니다: catch  |
| 1355 | foreach | 컬렉션 요소를 순회합니다: foreach (var directory in committed) |
| 1356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteOwnedDirectory(root, directory) |
| 1357 | throw | 예외를 발생/전달합니다: throw; |
| 1359 | finally | 종료 정리 구간입니다: finally |
| 1361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteOwnedDirectory(root, staging) |
| 1364 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _logManager.WriteRecipeCreate(GetRecipeName(recipe)) |
| 1364 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipeName(recipe) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateCopyCore"]
 N0["L1302 if"]
 M -->|포함| N0
 N1["L1304 if"]
 M -->|포함| N1
 N2["L1307 if"]
 M -->|포함| N2
 N3["L1311 if"]
 M -->|포함| N3
 N4["L1315 foreach"]
 M -->|포함| N4
 N5["L1316 if"]
 N4 -->|포함| N5
 N6["L1322 try"]
 M -->|포함| N6
 N7["L1327 foreach"]
 N6 -->|포함| N7
 N8["L1340 foreach"]
 N6 -->|포함| N8
 N9["L1344 if"]
 N8 -->|포함| N9
 N10["L1353 catch"]
 N6 -->|포함| N10
 N11["L1355 foreach"]
 N10 -->|포함| N11
 N12["L1359 finally"]
 N6 -->|포함| N12
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CopyDirectory` · L1367–1397

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1367–1397](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1367-L1397)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.CopyDirectory(string, string, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| source | string | None | False /  |
| destination | string | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |
| excludeReviewApplyHistory | bool | None | True / false |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1196–1196](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1196-L1196) | CopyDirectory | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1333–1337](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1333-L1337) | CopyDirectory | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1391–1395](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1391-L1395) | CopyDirectory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1373 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1374 | RejectLink | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1399 |
| 1375 | Directory.CreateDirectory | resolved | System.IO.DirectoryInfo System.IO.Directory.CreateDirectory(string) |
| 1376 | Directory.EnumerateFiles | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateFiles(string) |
| 1378 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1379 | RejectLink | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1399 |
| 1380 | System.IO.File.Copy | resolved | void System.IO.File.Copy(string, string, bool) |
| 1380 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1380 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 1383 | Directory.EnumerateDirectories | resolved | System.Collections.Generic.IEnumerable<string> System.IO.Directory.EnumerateDirectories(string) |
| 1386 | Path.GetFileName(child).Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1386 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 1391 | CopyDirectory | resolved | void Drilling.File.JHMI.CJhmiRecipeFile.CopyDirectory(string, string, System.Threading.CancellationToken, bool) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1367 |
| 1393 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1393 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RejectLink(source) |
| 1375 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.CreateDirectory(destination) |
| 1376 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateFiles(source) |
| 1376 | foreach | 컬렉션 요소를 순회합니다: foreach (var file in Directory.EnumerateFiles(source)) |
| 1378 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1379 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RejectLink(file) |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Copy(file, Path.Combine(destination, Path.GetFileName(file)), overwrite: false) |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(destination, Path.GetFileName(file)) |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(file) |
| 1383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.EnumerateDirectories(source) |
| 1383 | foreach | 컬렉션 요소를 순회합니다: foreach (var child in Directory.EnumerateDirectories(source)) |
| 1385 | if | 조건에 따라 분기합니다: if (excludeReviewApplyHistory && Path.GetFileName(child).Equals("_apply", StringComparison.OrdinalIgnoreCase)) |
| 1386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(child).Equals("_apply", StringComparison.OrdinalIgnoreCase) |
| 1386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(child) |
| 1388 | continue | 다음 반복으로 진행합니다: continue; |
| 1391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CopyDirectory( child, Path.Combine(destination, Path.GetFileName(child)), token, excludeReviewApplyHistory) |
| 1393 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(destination, Path.GetFileName(child)) |
| 1393 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(child) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CopyDirectory"]
 N0["L1376 foreach"]
 M -->|포함| N0
 N1["L1383 foreach"]
 M -->|포함| N1
 N2["L1385 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RejectLink` · L1399–1403

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1399–1403](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1399-L1403)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.RejectLink(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1159–1159](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1159-L1159) | RejectLink | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1251–1251](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1251-L1251) | RejectLink | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1374–1374](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1374-L1374) | RejectLink | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1379–1379](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1379-L1379) | RejectLink | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1401 | System.IO.File.GetAttributes | resolved | System.IO.FileAttributes System.IO.File.GetAttributes(string) |
| 1402 | new IOException | resolved | System.IO.IOException.IOException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.GetAttributes(path) |
| 1401 | if | 조건에 따라 분기합니다: if ((System.IO.File.GetAttributes(path) & FileAttributes.ReparsePoint) != 0) |
| 1402 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("링크 폴더 또는 링크 파일은 레시피 부가 데이터로 복사할 수 없습니다: " + path) |
| 1402 | throw | 예외를 발생/전달합니다: throw new IOException("링크 폴더 또는 링크 파일은 레시피 부가 데이터로 복사할 수 없습니다: " + path); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RejectLink"]
 N0["L1401 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteOwnedDirectory` · L1405–1413

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1405–1413](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1405-L1413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.DeleteOwnedDirectory(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| root | string | None | False /  |
| path | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1201–1201](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1201-L1201) | DeleteOwnedDirectory | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1227–1227](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1227-L1227) | DeleteOwnedDirectory | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1356–1356](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1356-L1356) | DeleteOwnedDirectory | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1361–1361](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1361-L1361) | DeleteOwnedDirectory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1408 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1409 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |
| 1409 | Path.GetDirectoryName | resolved | string? System.IO.Path.GetDirectoryName(string?) |
| 1410 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1411 | Directory.Exists | resolved | bool System.IO.Directory.Exists(string?) |
| 1412 | Directory.Delete | resolved | void System.IO.Directory.Delete(string, bool) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(path) |
| 1408 | local-declaration | 지역 변수를 선언합니다: var full = Path.GetFullPath(path); |
| 1408 | variable-initializer | 변수의 초기값을 지정합니다: full = Path.GetFullPath(path) |
| 1409 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals(Path.GetDirectoryName(full), root, StringComparison.OrdinalIgnoreCase) |
| 1409 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetDirectoryName(full) |
| 1409 | if | 조건에 따라 분기합니다: if (!string.Equals(Path.GetDirectoryName(full), root, StringComparison.OrdinalIgnoreCase)) |
| 1410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("레시피 작업 경로가 올바르지 않습니다.") |
| 1410 | throw | 예외를 발생/전달합니다: throw new IOException("레시피 작업 경로가 올바르지 않습니다."); |
| 1411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Exists(full) |
| 1411 | if | 조건에 따라 분기합니다: if (Directory.Exists(full)) |
| 1412 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.Delete(full, recursive: true) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteOwnedDirectory"]
 N0["L1409 if"]
 M -->|포함| N0
 N1["L1411 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateCopyId` · L1415–1419

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1415–1419](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1415-L1419)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.File.JHMI.CJhmiRecipeFile.ValidateCopyId(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1138–1138](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1138-L1138) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1139–1139](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1139-L1139) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1180–1180](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1180-L1180) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1287–1287](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1287-L1287) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1288–1288](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1288-L1288) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1299–1299](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1299-L1299) | ValidateCopyId | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1300–1300](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1300-L1300) | ValidateCopyId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1417 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1417 | GetSafeFileName(id).Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1417 | GetSafeFileName | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetSafeFileName(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1114 |
| 1418 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?, string?) |
| 1418 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1417 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(id) |
| 1417 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSafeFileName(id).Equals(id, StringComparison.Ordinal) |
| 1417 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSafeFileName(id) |
| 1417 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(id) &#124;&#124; id is "." or ".." &#124;&#124; !GetSafeFileName(id).Equals(id, StringComparison.Ordinal)) |
| 1418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("레시피 이름이 올바르지 않습니다.", nameof(id)) |
| 1418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(id) |
| 1418 | throw | 예외를 발생/전달합니다: throw new ArgumentException("레시피 이름이 올바르지 않습니다.", nameof(id)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateCopyId"]
 N0["L1417 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IncrementProtectWindowCount` · L1423–1423

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1423–1423](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1423-L1423)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1423 | ChangeProtectWindowCount | resolved | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ChangeProtectWindowCount(string, System.Func<string, int>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1426 |
| 1423 | CProtectWindowRecipeData.ParseCount | resolved | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseCount(string?, string) · Drilling.Common/Managers/CRecipeManager.cs:435 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ChangeProtectWindowCount(recipeId, current => checked(CProtectWindowRecipeData.ParseCount(current) + 1), cancellationToken) |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CProtectWindowRecipeData.ParseCount(current) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetProtectWindowCount` · L1424–1424

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1424–1424](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1424-L1424)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1424 | SetProtectWindowCount | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.SetProtectWindowCount(string, int, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1425 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProtectWindowCount(recipeId, 0, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetProtectWindowCount` · L1425–1425

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1425–1425](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1425-L1425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| count | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1424–1424](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1424-L1424) | SetProtectWindowCount | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1425 | Task.FromException<int> | resolved | System.Threading.Tasks.Task<int> System.Threading.Tasks.Task.FromException<int>(System.Exception) |
| 1425 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 1425 | nameof | unresolved | None |
| 1425 | ChangeProtectWindowCount | resolved | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ChangeProtectWindowCount(string, System.Func<string, int>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1426 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromException<int>(new ArgumentOutOfRangeException(nameof(count))) |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(count)) |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(count) |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ChangeProtectWindowCount(recipeId, _ => count, cancellationToken) |
| 1425 | conditional-expression | 조건에 따라 결과식을 선택합니다: count < 0 ? Task.FromException<int>(new ArgumentOutOfRangeException(nameof(count))) : ChangeProtectWindowCount(recipeId, _ => count, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ChangeProtectWindowCount` · L1426–1477

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1426–1477](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1426-L1477)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ChangeProtectWindowCount(string, System.Func<string, int>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| change | System.Func<string, int> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1423–1423](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1423-L1423) | ChangeProtectWindowCount | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1425–1425](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1425-L1425) | ChangeProtectWindowCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1426 | ExecuteFileOperation | resolved | System.Threading.Tasks.Task<int> Drilling.File.JHMI.CJhmiRecipeFile.ExecuteFileOperation<int>(System.Func<int>, System.Threading.CancellationToken) · Drilling.File/JHMI/CJhmiRecipeFile.cs:417 |
| 1428 | GetRecipePath | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.GetRecipePath(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:967 |
| 1429 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1430 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?, string?) |
| 1431 | CCsvParser.ReadLines | resolved | System.Collections.Generic.IReadOnlyList<string> Drilling.File.Parser.CCsvParser.ReadLines(string) · Drilling.File/Parser/CCsvParser.cs:147 |
| 1433 | lines.Select(ParseRecipeLine).LastOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE?>.LastOrDefault<Drilling.Common.Managers.ST_RECIPE_VALUE?>(System.Func<Drilling.Common.Managers.ST_RECIPE_VALUE?, bool>) |
| 1433 | lines.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_VALUE?> System.Collections.Generic.IEnumerable<string>.Select<string, Drilling.Common.Managers.ST_RECIPE_VALUE?>(System.Func<string, Drilling.Common.Managers.ST_RECIPE_VALUE?>) |
| 1434 | change | resolved · 동적 구현 선택 가능 | int System.Func<string, int>.Invoke(string) |
| 1435 | new List<string> | resolved | System.Collections.Generic.List<string>.List(int) |
| 1439 | IsCount | resolved | bool IsCount(Drilling.Common.Managers.ST_RECIPE_VALUE?) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1432 |
| 1439 | ParseRecipeLine | resolved | Drilling.Common.Managers.ST_RECIPE_VALUE? Drilling.File.JHMI.CJhmiRecipeFile.ParseRecipeLine(string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:916 |
| 1440 | updated.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1443 | updated.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1443 | CountLine | resolved | string CountLine() · Drilling.File/JHMI/CJhmiRecipeFile.cs:1476 |
| 1449 | updated.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1449 | CountLine | resolved | string CountLine() · Drilling.File/JHMI/CJhmiRecipeFile.cs:1476 |
| 1450 | Guid.NewGuid().ToString | resolved | string System.Guid.ToString(string?) |
| 1450 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 1454 | new FileStream | resolved | System.IO.FileStream.FileStream(string, System.IO.FileMode, System.IO.FileAccess, System.IO.FileShare, int, System.IO.FileOptions) |
| 1456 | new StreamWriter | resolved | System.IO.StreamWriter.StreamWriter(System.IO.Stream, System.Text.Encoding?, int, bool) |
| 1456 | new UTF8Encoding | resolved | System.Text.UTF8Encoding.UTF8Encoding(bool) |
| 1459 | writer.WriteLine | resolved · 동적 구현 선택 가능 | void System.IO.StreamWriter.WriteLine(string?) |
| 1460 | writer.Flush | resolved · 동적 구현 선택 가능 | void System.IO.StreamWriter.Flush() |
| 1463 | stream.Flush | resolved · 동적 구현 선택 가능 | void System.IO.FileStream.Flush(bool) |
| 1466 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1467 | System.IO.File.Move | resolved | void System.IO.File.Move(string, string, bool) |
| 1472 | System.IO.File.Exists | resolved | bool System.IO.File.Exists(string?) |
| 1473 | System.IO.File.Delete | resolved | void System.IO.File.Delete(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1426 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteFileOperation(() => { var path = GetRecipePath(recipeId); if (!System.IO.File.Exists(path)) throw new FileNotFoundException("Recipe not found for Protect Window count.", path); var lines = CCsvParser.ReadLines(pat… |
| 1428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetRecipePath(recipeId) |
| 1428 | local-declaration | 지역 변수를 선언합니다: var path = GetRecipePath(recipeId); |
| 1428 | variable-initializer | 변수의 초기값을 지정합니다: path = GetRecipePath(recipeId) |
| 1429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(path) |
| 1429 | if | 조건에 따라 분기합니다: if (!System.IO.File.Exists(path)) |
| 1430 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException("Recipe not found for Protect Window count.", path) |
| 1430 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException("Recipe not found for Protect Window count.", path); |
| 1431 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCsvParser.ReadLines(path) |
| 1431 | local-declaration | 지역 변수를 선언합니다: var lines = CCsvParser.ReadLines(path); |
| 1431 | variable-initializer | 변수의 초기값을 지정합니다: lines = CCsvParser.ReadLines(path) |
| 1433 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Select(ParseRecipeLine).LastOrDefault(IsCount) |
| 1433 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Select(ParseRecipeLine) |
| 1433 | local-declaration | 지역 변수를 선언합니다: var current = lines.Select(ParseRecipeLine).LastOrDefault(IsCount)?.Value ?? "0"; |
| 1433 | variable-initializer | 변수의 초기값을 지정합니다: current = lines.Select(ParseRecipeLine).LastOrDefault(IsCount)?.Value ?? "0" |
| 1434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: change(current) |
| 1434 | local-declaration | 지역 변수를 선언합니다: var next = change(current); |
| 1434 | variable-initializer | 변수의 초기값을 지정합니다: next = change(current) |
| 1435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>(lines.Count + 1) |
| 1435 | local-declaration | 지역 변수를 선언합니다: var updated = new List<string>(lines.Count + 1); |
| 1435 | variable-initializer | 변수의 초기값을 지정합니다: updated = new List<string>(lines.Count + 1) |
| 1436 | local-declaration | 지역 변수를 선언합니다: var inserted = false; |
| 1436 | variable-initializer | 변수의 초기값을 지정합니다: inserted = false |
| 1437 | foreach | 컬렉션 요소를 순회합니다: foreach (var line in lines) |
| 1439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsCount(ParseRecipeLine(line)) |
| 1439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseRecipeLine(line) |
| 1439 | if | 조건에 따라 분기합니다: if (!IsCount(ParseRecipeLine(line))) |
| 1440 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: updated.Add(line) |
| 1441 | else | 앞 조건이 거짓인 경로입니다: else |
| 1441 | if | 조건에 따라 분기합니다: if (!inserted) |
| 1443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: updated.Add(CountLine()) |
| 1443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CountLine() |
| 1444 | assignment | 값을 대상에 대입합니다: inserted = true |
| 1448 | if | 조건에 따라 분기합니다: if (!inserted) |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: updated.Add(CountLine()) |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CountLine() |
| 1450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid().ToString("N") |
| 1450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 1450 | local-declaration | 지역 변수를 선언합니다: var temporary = path + "." + Guid.NewGuid().ToString("N") + ".tmp"; |
| 1450 | variable-initializer | 변수의 초기값을 지정합니다: temporary = path + "." + Guid.NewGuid().ToString("N") + ".tmp" |
| 1451 | try | 예외 처리 범위입니다: try |
| 1454 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None, 4096, FileOptions.WriteThrough) |
| 1454 | variable-initializer | 변수의 초기값을 지정합니다: stream = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None, 4096, FileOptions.WriteThrough) |
| 1454 | using | 자원 사용과 정리 범위를 지정합니다: using (var stream = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None, 4096, FileOptions.WriteThrough)) |
| 1456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamWriter(stream, new UTF8Encoding(true), leaveOpen: true) |
| 1456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new UTF8Encoding(true) |
| 1456 | variable-initializer | 변수의 초기값을 지정합니다: writer = new StreamWriter(stream, new UTF8Encoding(true), leaveOpen: true) |
| 1456 | using | 자원 사용과 정리 범위를 지정합니다: using (var writer = new StreamWriter(stream, new UTF8Encoding(true), leaveOpen: true)) |
| 1458 | foreach | 컬렉션 요소를 순회합니다: foreach (var line in updated) |
| 1459 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: writer.WriteLine(line) |
| 1460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: writer.Flush() |
| 1463 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stream.Flush(flushToDisk: true) |
| 1466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Move(temporary, path, overwrite: true) |
| 1468 | return | 호출자에게 값 또는 제어를 반환합니다: return next; |
| 1470 | finally | 종료 정리 구간입니다: finally |
| 1472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Exists(temporary) |
| 1472 | if | 조건에 따라 분기합니다: if (System.IO.File.Exists(temporary)) |
| 1473 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.IO.File.Delete(temporary) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ChangeProtectWindowCount"]
 N0["L1429 if"]
 M -->|포함| N0
 N1["L1437 foreach"]
 M -->|포함| N1
 N2["L1439 if"]
 N1 -->|포함| N2
 N3["L1441 else"]
 N2 -->|포함| N3
 N4["L1441 if"]
 N2 -->|포함| N4
 N5["L1448 if"]
 M -->|포함| N5
 N6["L1451 try"]
 M -->|포함| N6
 N7["L1454 using"]
 N6 -->|포함| N7
 N8["L1456 using"]
 N7 -->|포함| N8
 N9["L1458 foreach"]
 N8 -->|포함| N9
 N10["L1470 finally"]
 N6 -->|포함| N10
 N11["L1472 if"]
 N10 -->|포함| N11
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `IsCount` · L1432–1432

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1432–1432](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1432-L1432)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool IsCount(Drilling.Common.Managers.ST_RECIPE_VALUE?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.Common.Managers.ST_RECIPE_VALUE? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1439–1439](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1439-L1439) | IsCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1432 | value.Tab.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1432 | value.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Tab.Equals(CProtectWindowRecipeData.Tab, StringComparison.OrdinalIgnoreCase) |
| 1432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Name.Equals(CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CountLine` · L1476–1476

[Drilling.File/JHMI/CJhmiRecipeFile.cs:1476–1476](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1476-L1476)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string CountLine() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.File.JHMI.CJhmiRecipeFile |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1443–1443](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1443-L1443) | CountLine | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1449–1449](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1449-L1449) | CountLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1476 | FormatRecipeLine | resolved | string Drilling.File.JHMI.CJhmiRecipeFile.FormatRecipeLine(string, string, string) · Drilling.File/JHMI/CJhmiRecipeFile.cs:1066 |
| 1476 | next.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1476 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatRecipeLine(CProtectWindowRecipeData.Tab, CProtectWindowRecipeData.CurrentCountKey, next.ToString(CultureInfo.InvariantCulture)) |
| 1476 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: next.ToString(CultureInfo.InvariantCulture) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.File/JHMI/CJhmiRecipeFile.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
