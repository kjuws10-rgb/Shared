# Drilling.Common/Automation/CAutomationManager.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 5aee8e58439c9b455cae7c9593c9be986c3e682e |
| 원본 SHA256 | 078cdb5110b41429bfa891ea3d01e39801f9263b6c0671e448bb891ab30dfc31 |
| 파일 분류 | code |
| 원본 크기/행 | 92,121 bytes / 1,779 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs) |

## 파일의 역할과 읽는 순서

프로그램의 시작·구성·공유 타입 또는 빌드 연결에 사용됩니다. 아래 실제 선언·참조와 원본 근거를 확인합니다.

![파일 관계도](../../../diagrams/files/5c475360e0761d4bdb02.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CAutomationManager | ClassDeclaration | 12–1401 | CAutomationManager |
| CSimulatedMofReadiness | ClassDeclaration | 1278–1284 | CSimulatedMofReadiness |
| CStageSimulatedTask | ClassDeclaration | 1321–1399 | CStageSimulatedTask |
| CAutomationAxisFault | ClassDeclaration | 1403–1439 | CAutomationAxisFault |
| ST_AUXILIARY_FEEDBACK | RecordDeclaration | 1441–1441 | ST_AUXILIARY_FEEDBACK |
| ST_MOF_ZERO_TARGET | RecordDeclaration | 1442–1442 | ST_MOF_ZERO_TARGET |
| CMofZeroOperation | ClassDeclaration | 1444–1504 | CMofZeroOperation |
| ST_BUFFERED_SCRIPT_RUN_ITEM | RecordDeclaration | 1506–1506 | ST_BUFFERED_SCRIPT_RUN_ITEM |
| ST_AUTOMATION_AXIS_STATUS | RecordDeclaration | 1508–1530 | ST_AUTOMATION_AXIS_STATUS |
| ST_STAGE_TASK_SIMULATION_TARGET | RecordDeclaration | 1532–1532 | ST_STAGE_TASK_SIMULATION_TARGET |
| ST_AUTOMATION_ABSOLUTE_MOVE_TARGET | RecordDeclaration | 1533–1533 | ST_AUTOMATION_ABSOLUTE_MOVE_TARGET |
| CAutomationPositioningService | ClassDeclaration | 1535–1640 | CAutomationPositioningService |
| CConfiguredHomeSpeedValues | ClassDeclaration | 1643–1656 | CConfiguredHomeSpeedValues: ReadOnlyDictionary<string, double> |
| CGalvoTemperature | ClassDeclaration | 1658–1670 | CGalvoTemperature |
| CManualMotionSession | ClassDeclaration | 1673–1754 | CManualMotionSession |
| ST_MOF_READINESS | RecordDeclaration | 1756–1756 | ST_MOF_READINESS |
| CMofReadiness | ClassDeclaration | 1758–1778 | CMofReadiness |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| _simulationConfiguredHomeSpeeds | FieldDeclaration | L15–15 | System.Collections.Concurrent.ConcurrentDictionary<string, double> Drilling.Common.Automation.CAutomationManager._simulationConfiguredHomeSpeeds |
| LocalScriptPathKey | FieldDeclaration | L16–16 | string Drilling.Common.Automation.CAutomationManager.LocalScriptPathKey |
| AutomationScriptPathKey | FieldDeclaration | L17–17 | string Drilling.Common.Automation.CAutomationManager.AutomationScriptPathKey |
| Automation1DriveStatusEnabledMask | FieldDeclaration | L18–18 | long Drilling.Common.Automation.CAutomationManager.Automation1DriveStatusEnabledMask |
| Automation1AxisStatusHomedMask | FieldDeclaration | L19–19 | long Drilling.Common.Automation.CAutomationManager.Automation1AxisStatusHomedMask |
| AxisNoMap | FieldDeclaration | L20–24 | System.Collections.Generic.IReadOnlyDictionary<string, int> Drilling.Common.Automation.CAutomationManager.AxisNoMap |
| _interfaceManager | FieldDeclaration | L25–25 | Drilling.Common.Interface.CInterfaceManager Drilling.Common.Automation.CAutomationManager._interfaceManager |
| _settingManager | FieldDeclaration | L26–26 | Drilling.Common.Managers.CSettingManager? Drilling.Common.Automation.CAutomationManager._settingManager |
| _projectRoot | FieldDeclaration | L27–27 | string Drilling.Common.Automation.CAutomationManager._projectRoot |
| _defaultLocalScriptDirectory | FieldDeclaration | L28–28 | string Drilling.Common.Automation.CAutomationManager._defaultLocalScriptDirectory |
| _simulationAxisAbleStates | FieldDeclaration | L29–29 | System.Collections.Concurrent.ConcurrentDictionary<string, bool> Drilling.Common.Automation.CAutomationManager._simulationAxisAbleStates |
| _simulationAxisPositions | FieldDeclaration | L30–30 | System.Collections.Concurrent.ConcurrentDictionary<string, double> Drilling.Common.Automation.CAutomationManager._simulationAxisPositions |
| _simulatedMofReadiness | FieldDeclaration | L31–31 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness> Drilling.Common.Automation.CAutomationManager._simulatedMofReadiness |
| _stageSimulationTasks | FieldDeclaration | L32–32 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask> Drilling.Common.Automation.CAutomationManager._stageSimulationTasks |
| .ctor | ConstructorDeclaration | L35–42 | Drilling.Common.Automation.CAutomationManager.CAutomationManager(Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Managers.CSettingManager?, string, string) |
| StatusSnapshots | PropertyDeclaration | L46–46 | Drilling.Common.Automation.CAutomationStatusSnapshotService Drilling.Common.Automation.CAutomationManager.StatusSnapshots |
| get_StatusSnapshots | GetAccessorDeclaration | L46–46 | Drilling.Common.Automation.CAutomationStatusSnapshotService Drilling.Common.Automation.CAutomationManager.StatusSnapshots.get |
| Connect | MethodDeclaration | L48–51 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.Connect(int, System.Threading.CancellationToken) |
| Disconnect | MethodDeclaration | L53–56 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.Disconnect(int, System.Threading.CancellationToken) |
| IsConnect | MethodDeclaration | L58–61 | bool Drilling.Common.Automation.CAutomationManager.IsConnect(int) |
| IsSimul | MethodDeclaration | L63–66 | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) |
| ReadStatus | MethodDeclaration | L68–71 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadStatus(int, System.Threading.CancellationToken) |
| ReadControllerAxes | MethodDeclaration | L73–80 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<string>> Drilling.Common.Automation.CAutomationManager.ReadControllerAxes(int, System.Threading.CancellationToken) |
| ReadProcessorUsage | MethodDeclaration | L82–85 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadProcessorUsage(int, System.Threading.CancellationToken) |
| ResetController | MethodDeclaration | L87–95 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ResetController(int, System.Threading.CancellationToken) |
| ReadIo | MethodDeclaration | L97–101 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadIo(string, int, System.Threading.CancellationToken) |
| SetIo | MethodDeclaration | L103–107 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.SetIo(string, bool, int, System.Threading.CancellationToken) |
| ValidateIoAddress | MethodDeclaration | L109–163 | string Drilling.Common.Automation.CAutomationManager.ValidateIoAddress(string, bool) |
| MatchesItem | LocalFunctionStatement | L113–116 | bool MatchesItem(char) |
| TrimIoAxisPrefix | MethodDeclaration | L165–173 | string Drilling.Common.Automation.CAutomationManager.TrimIoAxisPrefix(string) |
| IsUnsignedInteger | MethodDeclaration | L175–178 | bool Drilling.Common.Automation.CAutomationManager.IsUnsignedInteger(string) |
| ExecuteRaw | MethodDeclaration | L180–184 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) |
| Move | MethodDeclaration | L186–189 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Move(string, double, double, int, System.Threading.CancellationToken) |
| MoveRel | MethodDeclaration | L191–194 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.MoveRel(string, double, double, int, System.Threading.CancellationToken) |
| Stop | MethodDeclaration | L196–199 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Stop(string, int, System.Threading.CancellationToken) |
| ManualMove | MethodDeclaration | L201–206 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ManualMove(string, double, double, bool, int, System.Threading.CancellationToken) |
| JogStart | MethodDeclaration | L208–213 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.JogStart(string, double, int) |
| JogStop | MethodDeclaration | L215–215 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.JogStop(string, int) |
| AbortMotion | MethodDeclaration | L216–216 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.AbortMotion(string, int, System.Threading.CancellationToken) |
| ServoOn | MethodDeclaration | L217–220 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ServoOn(string, int, System.Threading.CancellationToken) |
| ServoOff | MethodDeclaration | L222–225 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ServoOff(string, int, System.Threading.CancellationToken) |
| Home | MethodDeclaration | L227–230 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Home(string, int, System.Threading.CancellationToken) |
| HomeAsync | MethodDeclaration | L232–235 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.HomeAsync(string, int, System.Threading.CancellationToken) |
| ResetAlarm | MethodDeclaration | L237–240 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ResetAlarm(string, int, System.Threading.CancellationToken) |
| ReadAxis | MethodDeclaration | L242–245 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxis(string, int, System.Threading.CancellationToken) |
| ReadAxisStatus | MethodDeclaration | L247–250 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatus(string, int, System.Threading.CancellationToken) |
| ReadAxisStatus | MethodDeclaration | L252–264 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatus(string, int, int, System.Threading.CancellationToken) |
| ReadAxisStatusByName | MethodDeclaration | L266–269 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByName(string, int, System.Threading.CancellationToken) |
| ReadAxisStatusByName | MethodDeclaration | L271–284 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByName(string, int, int, System.Threading.CancellationToken) |
| ReadAxisStatusByNameNoLog | MethodDeclaration | L286–299 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByNameNoLog(string, int, int, bool, System.Threading.CancellationToken) |
| RunLocalScript | MethodDeclaration | L301–313 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunLocalScript(string, string, int, int, System.Threading.CancellationToken) |
| UploadScript | MethodDeclaration | L315–321 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.UploadScript(string, string, int, System.Threading.CancellationToken) |
| RunScript | MethodDeclaration | L323–334 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunScript(string, int, int, System.Threading.CancellationToken) |
| RunScriptIfIdle | MethodDeclaration | L336–344 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunScriptIfIdle(string, int, int, System.Threading.CancellationToken) |
| RunBufferedScript | MethodDeclaration | L346–358 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScript(string, string, int, int, int, int, int, System.Threading.CancellationToken) |
| RunBufferedScripts | MethodDeclaration | L360–367 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScripts(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, System.Threading.CancellationToken) |
| RunStagePreparedBufferedScripts | MethodDeclaration | L372–372 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunStagePreparedBufferedScripts(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, System.Threading.CancellationToken) |
| RunBufferedScriptsCore | MethodDeclaration | L373–487 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScriptsCore(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, bool, bool, System.Threading.CancellationToken) |
| CreateBufferedRunControllerFileName | MethodDeclaration | L489–493 | string Drilling.Common.Automation.CAutomationManager.CreateBufferedRunControllerFileName(Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM, string, System.Threading.CancellationToken) |
| CreateTaskScopedScriptFileName | MethodDeclaration | L495–504 | string Drilling.Common.Automation.CAutomationManager.CreateTaskScopedScriptFileName(int, string) |
| StopTask | MethodDeclaration | L506–521 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.StopTask(int, int, System.Threading.CancellationToken) |
| ReadTaskStatus | MethodDeclaration | L523–532 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadTaskStatus(int, int, System.Threading.CancellationToken) |
| ReadTaskLineStatus | MethodDeclaration | L534–543 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadTaskLineStatus(int, int, System.Threading.CancellationToken) |
| ReleaseEncoderScaleFactor | MethodDeclaration | L545–552 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReleaseEncoderScaleFactor(string, int, int, System.Threading.CancellationToken) |
| SetGalvoLaserOutput | MethodDeclaration | L554–562 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.SetGalvoLaserOutput(string, bool, int, int, System.Threading.CancellationToken) |
| ConfigurePowerMeasurement | MethodDeclaration | L565–583 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.ConfigurePowerMeasurement(string, double, int, int, System.Threading.CancellationToken) |
| ValidateTaskIndex | MethodDeclaration | L585–591 | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) |
| CreateSimulationTaskStatus | MethodDeclaration | L593–596 | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) |
| ExecuteAxis | MethodDeclaration | L598–634 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) |
| ReadAxis | MethodDeclaration | L636–640 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxis(string, int, int, System.Threading.CancellationToken) |
| ReadAxisByName | MethodDeclaration | L642–645 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, System.Threading.CancellationToken) |
| ReadAxisByName | MethodDeclaration | L647–650 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken) |
| ReadAxisByName | MethodDeclaration | L652–658 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken, bool) |
| ValidateAxisNameOnly | MethodDeclaration | L660–667 | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) |
| ValidateAnalogInputNo | MethodDeclaration | L669–675 | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) |
| ValidateBufferedRunScriptFile | MethodDeclaration | L677–700 | void Drilling.Common.Automation.CAutomationManager.ValidateBufferedRunScriptFile(string) |
| GetAeroScriptToken | MethodDeclaration | L702–706 | string Drilling.Common.Automation.CAutomationManager.GetAeroScriptToken(string) |
| IsBufferedGlobalIntegerAssignment | MethodDeclaration | L709–719 | bool Drilling.Common.Automation.CAutomationManager.IsBufferedGlobalIntegerAssignment(string) |
| IsBufferedRunBlockedToken | MethodDeclaration | L721–724 | bool Drilling.Common.Automation.CAutomationManager.IsBufferedRunBlockedToken(string) |
| EnsureAutomationResponseSucceeded | MethodDeclaration | L726–734 | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) |
| IsAutomationSuccessResponse | MethodDeclaration | L736–750 | bool Drilling.Common.Automation.CAutomationManager.IsAutomationSuccessResponse(string) |
| FormatAutomationResponse | MethodDeclaration | L752–761 | string Drilling.Common.Automation.CAutomationManager.FormatAutomationResponse(string) |
| FormatAutomationErrorResponse | MethodDeclaration | L763–777 | string Drilling.Common.Automation.CAutomationManager.FormatAutomationErrorResponse(string) |
| ResolveAutomationAxis | MethodDeclaration | L779–783 | string Drilling.Common.Automation.CAutomationManager.ResolveAutomationAxis(string) |
| ResolveAeroScriptAxis | MethodDeclaration | L785–795 | string Drilling.Common.Automation.CAutomationManager.ResolveAeroScriptAxis(string) |
| IsAeroScriptAxisIdentifier | MethodDeclaration | L797–815 | bool Drilling.Common.Automation.CAutomationManager.IsAeroScriptAxisIdentifier(string) |
| MatchesItem | LocalFunctionStatement | L809–812 | bool MatchesItem(char) |
| IsAxisNameOnlyIdentifier | MethodDeclaration | L817–838 | bool Drilling.Common.Automation.CAutomationManager.IsAxisNameOnlyIdentifier(string) |
| CreateSimulationAxisStatus | MethodDeclaration | L840–867 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisStatus(int, string) |
| CreateSimulationAxisKey | MethodDeclaration | L869–872 | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) |
| ParseAxisStatus | MethodDeclaration | L874–927 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ParseAxisStatus(int, string, string) |
| ReadMotionStatusFlag | MethodDeclaration | L929–939 | bool? Drilling.Common.Automation.CAutomationManager.ReadMotionStatusFlag(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| ReadGalvoTemperatureCelsius | MethodDeclaration | L941–944 | double Drilling.Common.Automation.CAutomationManager.ReadGalvoTemperatureCelsius(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| CreateErrorAxisStatus | MethodDeclaration | L946–949 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateErrorAxisStatus(int, string, string, string) |
| TryGetAxisNo | MethodDeclaration | L951–960 | int? Drilling.Common.Automation.CAutomationManager.TryGetAxisNo(string) |
| GetValue | MethodDeclaration | L962–965 | string Drilling.Common.Automation.CAutomationManager.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| ReadDouble | MethodDeclaration | L967–970 | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| IsDriveAble | MethodDeclaration | L972–980 | bool Drilling.Common.Automation.CAutomationManager.IsDriveAble(string) |
| IsHomeDone | MethodDeclaration | L982–991 | bool Drilling.Common.Automation.CAutomationManager.IsHomeDone(string) |
| TryReadStatusWord | MethodDeclaration | L993–1014 | bool Drilling.Common.Automation.CAutomationManager.TryReadStatusWord(string, out long) |
| IsFaultActive | MethodDeclaration | L1016–1020 | bool Drilling.Common.Automation.CAutomationManager.IsFaultActive(string) |
| ResolveLocalScriptPath | MethodDeclaration | L1022–1039 | string Drilling.Common.Automation.CAutomationManager.ResolveLocalScriptPath(string, System.Threading.CancellationToken) |
| GetLocalScriptDirectory | MethodDeclaration | L1041–1045 | string Drilling.Common.Automation.CAutomationManager.GetLocalScriptDirectory(System.Threading.CancellationToken) |
| ResolveLocalDirectory | MethodDeclaration | L1047–1051 | string Drilling.Common.Automation.CAutomationManager.ResolveLocalDirectory(string, string) |
| CreateControllerFileName | MethodDeclaration | L1053–1065 | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) |
| GetControllerScriptDirectory | MethodDeclaration | L1067–1077 | string Drilling.Common.Automation.CAutomationManager.GetControllerScriptDirectory(System.Threading.CancellationToken) |
| CombineControllerPath | MethodDeclaration | L1079–1089 | string Drilling.Common.Automation.CAutomationManager.CombineControllerPath(string, string) |
| Format | MethodDeclaration | L1091–1094 | string Drilling.Common.Automation.CAutomationManager.Format(double) |
| RunStagePreparedScript | MethodDeclaration | L1098–1105 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.RunStagePreparedScript(string, int, int, System.Threading.CancellationToken) |
| StopStagePreparedTask | MethodDeclaration | L1107–1132 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.StopStagePreparedTask(int, int, System.Threading.CancellationToken) |
| ReadAuxiliaryFeedback | MethodDeclaration | L1134–1144 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> Drilling.Common.Automation.CAutomationManager.ReadAuxiliaryFeedback(string, int, System.Threading.CancellationToken) |
| SetAuxiliaryFeedbackZero | MethodDeclaration | L1146–1158 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.SetAuxiliaryFeedbackZero(string, int, int, System.Threading.CancellationToken) |
| ZeroMofFeedbackIfNeeded | MethodDeclaration | L1160–1160 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.ZeroMofFeedbackIfNeeded(System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>, System.Threading.CancellationToken) |
| ReadConfiguredHomeSpeeds | MethodDeclaration | L1164–1188 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Automation.CAutomationManager.ReadConfiguredHomeSpeeds(System.Collections.Generic.IReadOnlyList<string>, int, System.Threading.CancellationToken) |
| SetConfiguredHomeSpeed | MethodDeclaration | L1191–1218 | System.Threading.Tasks.Task<double> Drilling.Common.Automation.CAutomationManager.SetConfiguredHomeSpeed(string, double, int, System.Threading.CancellationToken) |
| ValidateConfiguredHomeAxis | MethodDeclaration | L1220–1231 | string Drilling.Common.Automation.CAutomationManager.ValidateConfiguredHomeAxis(string) |
| PrepareMofReadiness | MethodDeclaration | L1235–1252 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.PrepareMofReadiness(int, int, long, System.Threading.CancellationToken) |
| ReadMofReadiness | MethodDeclaration | L1254–1265 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_MOF_READINESS> Drilling.Common.Automation.CAutomationManager.ReadMofReadiness(int, int, System.Threading.CancellationToken) |
| PublishSimulatedMofReadiness | MethodDeclaration | L1267–1276 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.PublishSimulatedMofReadiness(int, int, Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| _value | FieldDeclaration | L1280–1280 | long Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness._value |
| Value | PropertyDeclaration | L1281–1281 | long Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.Value |
| Publish | MethodDeclaration | L1283–1283 | void Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.Publish() |
| RegisterStageSimulationTask | MethodDeclaration | L1288–1295 | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask Drilling.Common.Automation.CAutomationManager.RegisterStageSimulationTask(int, int, string, bool) |
| StartStageMachiningSimulation | MethodDeclaration | L1298–1319 | void Drilling.Common.Automation.CAutomationManager.StartStageMachiningSimulation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET>, System.Threading.CancellationToken) |
| _sync | FieldDeclaration | L1323–1323 | object Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._sync |
| _completion | FieldDeclaration | L1324–1324 | System.Threading.Tasks.TaskCompletionSource Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._completion |
| _stop | FieldDeclaration | L1325–1325 | System.Threading.CancellationTokenSource Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._stop |
| _state | FieldDeclaration | L1326–1326 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._state |
| _started | FieldDeclaration | L1327–1327 | bool Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._started |
| File | PropertyDeclaration | L1328–1328 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.File |
| get_File | GetAccessorDeclaration | L1328–1328 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.File.get |
| State | PropertyDeclaration | L1330–1337 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.State |
| get_State | GetAccessorDeclaration | L1332–1336 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.State.get |
| IsActive | PropertyDeclaration | L1339–1339 | bool Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.IsActive |
| Completion | PropertyDeclaration | L1340–1340 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Completion |
| Start | MethodDeclaration | L1342–1354 | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Start(System.TimeSpan, System.Threading.CancellationToken) |
| CompleteAfter | MethodDeclaration | L1356–1382 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.CompleteAfter(System.TimeSpan, System.Threading.CancellationToken) |
| Stop | MethodDeclaration | L1384–1398 | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Stop() |
| ParseMask | MethodDeclaration | L1405–1413 | long? Drilling.Common.Automation.CAutomationAxisFault.ParseMask(string) |
| RequiresReset | MethodDeclaration | L1415–1415 | bool Drilling.Common.Automation.CAutomationAxisFault.RequiresReset(long) |
| HasLimitFault | MethodDeclaration | L1416–1416 | bool Drilling.Common.Automation.CAutomationAxisFault.HasLimitFault(long) |
| Describe | MethodDeclaration | L1417–1438 | string Drilling.Common.Automation.CAutomationAxisFault.Describe(long) |
| Execute | MethodDeclaration | L1446–1489 | System.Threading.Tasks.Task Drilling.Common.Automation.CMofZeroOperation.Execute(System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>, System.Threading.CancellationToken) |
| WaitForValue | MethodDeclaration | L1491–1503 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> Drilling.Common.Automation.CMofZeroOperation.WaitForValue(Drilling.Common.Automation.ST_MOF_ZERO_TARGET, long, System.Threading.CancellationToken) |
| IsInPosition | PropertyDeclaration | L1528–1528 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition |
| get_IsInPosition | GetAccessorDeclaration | L1528–1528 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition.get |
| set_IsInPosition | InitAccessorDeclaration | L1528–1528 | void Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition.init |
| IsMotionDone | PropertyDeclaration | L1529–1529 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone |
| get_IsMotionDone | GetAccessorDeclaration | L1529–1529 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone.get |
| set_IsMotionDone | InitAccessorDeclaration | L1529–1529 | void Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone.init |
| MoveAndWait | MethodDeclaration | L1537–1598 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.MoveAndWait(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Threading.CancellationToken) |
| EnsureConnected | MethodDeclaration | L1600–1604 | void Drilling.Common.Automation.CAutomationPositioningService.EnsureConnected(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| Read | MethodDeclaration | L1606–1606 | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationPositioningService.Read(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| ReadReady | MethodDeclaration | L1607–1618 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS? Drilling.Common.Automation.CAutomationPositioningService.ReadReady(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS>?) |
| WaitUntil | MethodDeclaration | L1620–1633 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.WaitUntil(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>, System.Threading.CancellationToken) |
| EnsureResponse | MethodDeclaration | L1635–1639 | void Drilling.Common.Automation.CAutomationPositioningService.EnsureResponse(string, string) |
| Units | PropertyDeclaration | L1645–1645 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.Common.Automation.CConfiguredHomeSpeedValues.Units |
| get_Units | GetAccessorDeclaration | L1645–1645 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.Common.Automation.CConfiguredHomeSpeedValues.Units.get |
| .ctor | ConstructorDeclaration | L1647–1655 | Drilling.Common.Automation.CConfiguredHomeSpeedValues.CConfiguredHomeSpeedValues(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>?) |
| FromAnalogInput | MethodDeclaration | L1660–1664 | double Drilling.Common.Automation.CGalvoTemperature.FromAnalogInput(double) |
| FormatCelsius | MethodDeclaration | L1666–1669 | string Drilling.Common.Automation.CGalvoTemperature.FormatCelsius(double) |
| _gate | FieldDeclaration | L1675–1675 | System.Threading.SemaphoreSlim Drilling.Common.Automation.CManualMotionSession._gate |
| _generation | FieldDeclaration | L1676–1676 | long Drilling.Common.Automation.CManualMotionSession._generation |
| _stopJog | FieldDeclaration | L1677–1677 | System.Func<System.Threading.Tasks.Task>? Drilling.Common.Automation.CManualMotionSession._stopJog |
| Generation | PropertyDeclaration | L1678–1678 | long Drilling.Common.Automation.CManualMotionSession.Generation |
| Invalidate | MethodDeclaration | L1680–1680 | void Drilling.Common.Automation.CManualMotionSession.Invalidate() |
| Execute | MethodDeclaration | L1681–1698 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.Execute(long, System.Func<System.Threading.Tasks.Task>, System.Func<System.Threading.Tasks.Task>?) |
| StopJog | MethodDeclaration | L1700–1715 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.StopJog() |
| StopAll | MethodDeclaration | L1717–1753 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.StopAll(System.Func<System.Threading.Tasks.Task>) |
| _lastRunId | FieldDeclaration | L1761–1761 | long Drilling.Common.Automation.CMofReadiness._lastRunId |
| CreateRunId | MethodDeclaration | L1762–1762 | long Drilling.Common.Automation.CMofReadiness.CreateRunId() |
| VariableIndex | MethodDeclaration | L1763–1768 | int Drilling.Common.Automation.CMofReadiness.VariableIndex(int) |
| VariableIndex | MethodDeclaration | L1770–1777 | int Drilling.Common.Automation.CMofReadiness.VariableIndex(int, int) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `_simulationConfiguredHomeSpeeds` · L15–15

[Drilling.Common/Automation/CAutomationManager.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Concurrent.ConcurrentDictionary<string, double> Drilling.Common.Automation.CAutomationManager._simulationConfiguredHomeSpeeds |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Concurrent.ConcurrentDictionary<string, double> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 15 | new | resolved | System.Collections.Concurrent.ConcurrentDictionary<string, double>.ConcurrentDictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 15 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 15 | variable-initializer | 변수의 초기값을 지정합니다: _simulationConfiguredHomeSpeeds = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `LocalScriptPathKey` · L16–16

[Drilling.Common/Automation/CAutomationManager.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.LocalScriptPathKey |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | variable-initializer | 변수의 초기값을 지정합니다: LocalScriptPathKey = "LocalScriptPath" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `AutomationScriptPathKey` · L17–17

[Drilling.Common/Automation/CAutomationManager.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.AutomationScriptPathKey |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 17 | variable-initializer | 변수의 초기값을 지정합니다: AutomationScriptPathKey = "AutomationScriptPath" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `Automation1DriveStatusEnabledMask` · L18–18

[Drilling.Common/Automation/CAutomationManager.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CAutomationManager.Automation1DriveStatusEnabledMask |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 18 | variable-initializer | 변수의 초기값을 지정합니다: Automation1DriveStatusEnabledMask = 1L |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `Automation1AxisStatusHomedMask` · L19–19

[Drilling.Common/Automation/CAutomationManager.cs:19–19](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L19-L19)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CAutomationManager.Automation1AxisStatusHomedMask |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 19 | variable-initializer | 변수의 초기값을 지정합니다: Automation1AxisStatusHomedMask = 1L |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `AxisNoMap` · L20–24

[Drilling.Common/Automation/CAutomationManager.cs:20–24](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L20-L24)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, int> Drilling.Common.Automation.CAutomationManager.AxisNoMap |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, int> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 20 | new Dictionary<string, int> | resolved | System.Collections.Generic.Dictionary<string, int>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 20 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase) { ["GX"] = 0, ["GY"] = 1 } |
| 20 | variable-initializer | 변수의 초기값을 지정합니다: AxisNoMap = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase) { ["GX"] = 0, ["GY"] = 1 } |
| 22 | assignment | 값을 대상에 대입합니다: ["GX"] = 0 |
| 23 | assignment | 값을 대상에 대입합니다: ["GY"] = 1 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_interfaceManager` · L25–25

[Drilling.Common/Automation/CAutomationManager.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L25-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CInterfaceManager Drilling.Common.Automation.CAutomationManager._interfaceManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Interface.CInterfaceManager |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_settingManager` · L26–26

[Drilling.Common/Automation/CAutomationManager.cs:26–26](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L26-L26)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.CSettingManager? Drilling.Common.Automation.CAutomationManager._settingManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Managers.CSettingManager? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_projectRoot` · L27–27

[Drilling.Common/Automation/CAutomationManager.cs:27–27](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L27-L27)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager._projectRoot |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_defaultLocalScriptDirectory` · L28–28

[Drilling.Common/Automation/CAutomationManager.cs:28–28](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L28-L28)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager._defaultLocalScriptDirectory |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulationAxisAbleStates` · L29–29

[Drilling.Common/Automation/CAutomationManager.cs:29–29](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L29-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Concurrent.ConcurrentDictionary<string, bool> Drilling.Common.Automation.CAutomationManager._simulationAxisAbleStates |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Concurrent.ConcurrentDictionary<string, bool> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 29 | new | resolved | System.Collections.Concurrent.ConcurrentDictionary<string, bool>.ConcurrentDictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 29 | variable-initializer | 변수의 초기값을 지정합니다: _simulationAxisAbleStates = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulationAxisPositions` · L30–30

[Drilling.Common/Automation/CAutomationManager.cs:30–30](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L30-L30)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Concurrent.ConcurrentDictionary<string, double> Drilling.Common.Automation.CAutomationManager._simulationAxisPositions |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Concurrent.ConcurrentDictionary<string, double> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 30 | new | resolved | System.Collections.Concurrent.ConcurrentDictionary<string, double>.ConcurrentDictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 30 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 30 | variable-initializer | 변수의 초기값을 지정합니다: _simulationAxisPositions = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulatedMofReadiness` · L31–31

[Drilling.Common/Automation/CAutomationManager.cs:31–31](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L31-L31)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness> Drilling.Common.Automation.CAutomationManager._simulatedMofReadiness |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 31 | new | resolved | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness>.ConcurrentDictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 31 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 31 | variable-initializer | 변수의 초기값을 지정합니다: _simulatedMofReadiness = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stageSimulationTasks` · L32–32

[Drilling.Common/Automation/CAutomationManager.cs:32–32](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L32-L32)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask> Drilling.Common.Automation.CAutomationManager._stageSimulationTasks |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 32 | new | resolved | System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.ConcurrentDictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 32 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 32 | variable-initializer | 변수의 초기값을 지정합니다: _stageSimulationTasks = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L35–42

[Drilling.Common/Automation/CAutomationManager.cs:35–42](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L35-L42)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.CAutomationManager.CAutomationManager(Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Managers.CSettingManager?, string, string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaceManager | Drilling.Common.Interface.CInterfaceManager | None | False /  |
| settingManager | Drilling.Common.Managers.CSettingManager? | None | True / null |
| projectRoot | string | None | True / "" |
| defaultLocalScriptDirectory | string | None | True / "" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CManager.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Managers/CManager.cs#L107-L107) | new CAutomationManager | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 38 | new CAutomationStatusSnapshotService | resolved | Drilling.Common.Automation.CAutomationStatusSnapshotService.CAutomationStatusSnapshotService(Drilling.Common.Automation.CAutomationManager, bool) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:17 |
| 40 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 41 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 41 | Path.Combine | resolved | string System.IO.Path.Combine(string, string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 37 | assignment | 값을 대상에 대입합니다: _interfaceManager = interfaceManager |
| 38 | assignment | 값을 대상에 대입합니다: StatusSnapshots = new CAutomationStatusSnapshotService(this) |
| 38 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CAutomationStatusSnapshotService(this) |
| 39 | assignment | 값을 대상에 대입합니다: _settingManager = settingManager |
| 40 | assignment | 값을 대상에 대입합니다: _projectRoot = string.IsNullOrWhiteSpace(projectRoot) ? AppContext.BaseDirectory : projectRoot |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(projectRoot) |
| 40 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(projectRoot) ? AppContext.BaseDirectory : projectRoot |
| 41 | assignment | 값을 대상에 대입합니다: _defaultLocalScriptDirectory = string.IsNullOrWhiteSpace(defaultLocalScriptDirectory) ? Path.Combine(_projectRoot, "Data", "Script") : defaultLocalScriptDirectory |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(defaultLocalScriptDirectory) |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_projectRoot, "Data", "Script") |
| 41 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(defaultLocalScriptDirectory) ? Path.Combine(_projectRoot, "Data", "Script") : defaultLocalScriptDirectory |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StatusSnapshots` · L46–46

[Drilling.Common/Automation/CAutomationManager.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.CAutomationStatusSnapshotService Drilling.Common.Automation.CAutomationManager.StatusSnapshots |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.CAutomationStatusSnapshotService |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_StatusSnapshots` · L46–46

[Drilling.Common/Automation/CAutomationManager.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.CAutomationStatusSnapshotService Drilling.Common.Automation.CAutomationManager.StatusSnapshots.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Automation.CAutomationStatusSnapshotService |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Connect` · L48–51

[Drilling.Common/Automation/CAutomationManager.cs:48–51](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L48-L51)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.Connect(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 50 | _interfaceManager.Connect | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Connect(Drilling.Common.Interface.EN_EQP_MODULE, int, bool, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:262 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.Connect(EN_EQP_MODULE.Automation1, number, cancellationToken: cancellationToken) |
| 50 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.Connect(EN_EQP_MODULE.Automation1, number, cancellationToken: cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Disconnect` · L53–56

[Drilling.Common/Automation/CAutomationManager.cs:53–56](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L53-L56)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.Disconnect(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 55 | _interfaceManager.Disconnect | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Disconnect(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:276 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 55 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.Disconnect(EN_EQP_MODULE.Automation1, number, cancellationToken) |
| 55 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.Disconnect(EN_EQP_MODULE.Automation1, number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsConnect` · L58–61

[Drilling.Common/Automation/CAutomationManager.cs:58–61](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L58-L61)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsConnect(int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Alarm/CAlarmManager.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Alarm/CAlarmManager.cs#L594-L594) | automation.IsConnect | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1602–1602](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1602-L1602) | automation.IsConnect | False |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:128–128](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L128-L128) | _automation.IsConnect | False |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:287–287](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L287-L287) | _automation.IsConnect | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:265–265](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L265-L265) | Automation.IsConnect | False |
| [Drilling.Common/Station/CStationProcess.cs:1375–1375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1375-L1375) | _automationManager.IsConnect | False |
| [Drilling.Common/Station/CStationProcess.cs:2788–2788](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2788-L2788) | _owner._automationManager.IsConnect | False |
| [Drilling.Common/Station/CStationProcess.cs:2904–2904](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2904-L2904) | _owner._automationManager.IsConnect | False |
| [Drilling.Common/Station/CStationProcess.cs:2937–2937](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2937-L2937) | _owner._automationManager.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3501–3501](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3501-L3501) | manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1160–1160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1160-L1160) | automationManager.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1333–1333](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1333-L1333) | automationManager.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1798–1798](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1798-L1798) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1890–1890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1890-L1890) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1989–1989](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1989-L1989) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2191–2191](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2191-L2191) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2349–2349](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2349-L2349) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2370–2370](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2370-L2370) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2580–2580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2580-L2580) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2724–2724](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2724-L2724) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3476–3476](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3476-L3476) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4064–4064](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4064-L4064) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4221–4221](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4221-L4221) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4400–4400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4400-L4400) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4683–4683](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4683-L4683) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4891–4891](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4891-L4891) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5303–5303](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5303-L5303) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5405–5405](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5405-L5405) | _manager.automation.IsConnect | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:7729–7729](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L7729-L7729) | automationManager.IsConnect | False |
| [Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs#L89-L89) | automationManager.IsConnect | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 60 | _interfaceManager.IsConnect | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsConnect(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:338 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 60 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.IsConnect(EN_EQP_MODULE.Automation1, number) |
| 60 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.IsConnect(EN_EQP_MODULE.Automation1, number); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsSimul` · L63–66

[Drilling.Common/Automation/CAutomationManager.cs:63–66](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L63-L66)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Alarm/CAlarmManager.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Alarm/CAlarmManager.cs#L594-L594) | automation.IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L89-L89) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L257-L257) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L277-L277) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:292–292](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L292-L292) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:307–307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L307-L307) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:328–328](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L328-L328) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L341-L341) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:454–454](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L454-L454) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:509–509](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L509-L509) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:526–526](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L526-L526) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:537–537](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L537-L537) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:602–602](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L602-L602) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:609–609](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L609-L609) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1102–1102](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1102-L1102) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1137–1137](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1137-L1137) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1151–1151](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1151-L1151) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1172–1172](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1172-L1172) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1200–1200](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1200-L1200) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1241–1241](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1241-L1241) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1258–1258](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1258-L1258) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1309–1309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1309-L1309) | IsSimul | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1602–1602](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1602-L1602) | automation.IsSimul | False |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:128–128](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L128-L128) | _automation.IsSimul | False |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:287–287](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L287-L287) | _automation.IsSimul | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:167–167](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L167-L167) | Automation.IsSimul | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:265–265](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L265-L265) | Automation.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:1375–1375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1375-L1375) | _automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:2788–2788](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2788-L2788) | _owner._automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:2900–2900](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2900-L2900) | _owner._automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:2933–2933](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L2933-L2933) | _owner._automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:3832–3832](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3832-L3832) | _automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:3838–3838](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3838-L3838) | _automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:3877–3877](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3877-L3877) | _automationManager.IsSimul | False |
| [Drilling.Common/Station/CStationProcess.cs:3880–3880](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3880-L3880) | _automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3501–3501](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3501-L3501) | manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3505–3505](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3505-L3505) | manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3619–3619](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3619-L3619) | manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3625–3625](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3625-L3625) | manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3655–3655](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3655-L3655) | manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1128–1128](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1128-L1128) | automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1155–1155](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1155-L1155) | automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1333–1333](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1333-L1333) | automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1342–1342](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L1342-L1342) | automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1798–1798](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1798-L1798) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1890–1890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1890-L1890) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1988–1988](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1988-L1988) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2191–2191](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2191-L2191) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2349–2349](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2349-L2349) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2361–2361](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2361-L2361) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2580–2580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2580-L2580) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2663–2663](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2663-L2663) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2724–2724](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2724-L2724) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3476–3476](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3476-L3476) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3792–3792](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3792-L3792) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4064–4064](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4064-L4064) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4113–4113](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4113-L4113) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4221–4221](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4221-L4221) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4400–4400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4400-L4400) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4520–4520](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4520-L4520) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4683–4683](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4683-L4683) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4891–4891](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4891-L4891) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5303–5303](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5303-L5303) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5327–5327](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5327-L5327) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5405–5405](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5405-L5405) | _manager.automation.IsSimul | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:7729–7729](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L7729-L7729) | automationManager.IsSimul | False |
| [Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs#L89-L89) | automationManager.IsSimul | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 65 | _interfaceManager.IsSimul | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsSimul(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:343 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.IsSimul(EN_EQP_MODULE.Automation1, number) |
| 65 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.IsSimul(EN_EQP_MODULE.Automation1, number); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadStatus` · L68–71

[Drilling.Common/Automation/CAutomationManager.cs:68–71](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L68-L71)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadStatus(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2372–2372](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2372-L2372) | _manager.automation.ReadStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 70 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw("AUTOMATION1:STATUS", number, cancellationToken) |
| 70 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw("AUTOMATION1:STATUS", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadControllerAxes` · L73–80

[Drilling.Common/Automation/CAutomationManager.cs:73–80](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L73-L80)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<string>> Drilling.Common.Automation.CAutomationManager.ReadControllerAxes(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<string>> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1992–1992](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1992-L1992) | _manager.automation.ReadControllerAxes | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2006–2006](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2006-L2006) | _manager.automation.ReadControllerAxes | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 75 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 77 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 78 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 79 | response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString).Distinct(StringComparer.OrdinalIgnoreCase).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 79 | response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString).Distinct | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Distinct<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 79 | response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Select<string, string>(System.Func<string, string>) |
| 79 | response[prefix.Length..].Split | resolved | string[] string.Split(char, System.StringSplitOptions) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 75 | await | 비동기 완료를 기다립니다: await ExecuteRaw("AUTOMATION1:SYSTEM:AXES", number, cancellationToken, suppressLog: true) |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw("AUTOMATION1:SYSTEM:AXES", number, cancellationToken, suppressLog: true) |
| 75 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw("AUTOMATION1:SYSTEM:AXES", number, cancellationToken, suppressLog: true); |
| 75 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw("AUTOMATION1:SYSTEM:AXES", number, cancellationToken, suppressLog: true) |
| 76 | local-declaration | 지역 변수를 선언합니다: const string prefix = "OK:AXES:"; |
| 76 | variable-initializer | 변수의 초기값을 지정합니다: prefix = "OK:AXES:" |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith(prefix, StringComparison.Ordinal) |
| 77 | if | 조건에 따라 분기합니다: if (!response.StartsWith(prefix, StringComparison.Ordinal)) |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Controller axis list could not be read: {response}") |
| 78 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Controller axis list could not be read: {response}"); |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString).Distinct(StringComparer.OrdinalIgnoreCase).ToArray() |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString).Distinct(StringComparer.OrdinalIgnoreCase) |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString) |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries) |
| 79 | return | 호출자에게 값 또는 제어를 반환합니다: return response[prefix.Length..].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(Uri.UnescapeDataString).Distinct(StringComparer.OrdinalIgnoreCase).ToArray(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadControllerAxes"]
 N0["L77 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadProcessorUsage` · L82–85

[Drilling.Common/Automation/CAutomationManager.cs:82–85](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L82-L85)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadProcessorUsage(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L45-L45) | _automation.ReadProcessorUsage | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 84 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 84 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw("AUTOMATION1:SYSTEM:PROCESSOR_USAGE", number, cancellationToken) |
| 84 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw("AUTOMATION1:SYSTEM:PROCESSOR_USAGE", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetController` · L87–95

[Drilling.Common/Automation/CAutomationManager.cs:87–95](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L87-L95)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ResetController(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2213–2213](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2213-L2213) | _manager.automation.ResetController | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2354–2354](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2354-L2354) | _manager.automation.ResetController | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 89 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 91 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 91 | number.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 94 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 89 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 89 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 91 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult($"OK:SYSTEM:RESET:{number.ToString(CultureInfo.InvariantCulture)}") |
| 91 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: number.ToString(CultureInfo.InvariantCulture) |
| 91 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult($"OK:SYSTEM:RESET:{number.ToString(CultureInfo.InvariantCulture)}"); |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw("AUTOMATION1:SYSTEM:RESET", number, cancellationToken) |
| 94 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw("AUTOMATION1:SYSTEM:RESET", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResetController"]
 N0["L89 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadIo` · L97–101

[Drilling.Common/Automation/CAutomationManager.cs:97–101](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L97-L101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadIo(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| address | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1752–1752](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1752-L1752) | _manager.automation.ReadIo | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2476–2476](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2476-L2476) | _manager.automation.ReadIo | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2869–2869](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2869-L2869) | _manager.automation.ReadIo | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 99 | ValidateIoAddress | resolved | string Drilling.Common.Automation.CAutomationManager.ValidateIoAddress(string, bool) · Drilling.Common/Automation/CAutomationManager.cs:109 |
| 100 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 99 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateIoAddress(address, outputOnly: false) |
| 99 | local-declaration | 지역 변수를 선언합니다: var ioAddress = ValidateIoAddress(address, outputOnly: false); |
| 99 | variable-initializer | 변수의 초기값을 지정합니다: ioAddress = ValidateIoAddress(address, outputOnly: false) |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:IO:{ioAddress}:READ", number, cancellationToken) |
| 100 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:IO:{ioAddress}:READ", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetIo` · L103–107

[Drilling.Common/Automation/CAutomationManager.cs:103–107](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L103-L107)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.SetIo(string, bool, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| address | string | None | False /  |
| isOn | bool | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1752–1752](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1752-L1752) | _manager.automation.SetIo | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2468–2468](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2468-L2468) | _manager.automation.SetIo | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2933–2933](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2933-L2933) | _manager.automation.SetIo | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 105 | ValidateIoAddress | resolved | string Drilling.Common.Automation.CAutomationManager.ValidateIoAddress(string, bool) · Drilling.Common/Automation/CAutomationManager.cs:109 |
| 106 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateIoAddress(address, outputOnly: true) |
| 105 | local-declaration | 지역 변수를 선언합니다: var ioAddress = ValidateIoAddress(address, outputOnly: true); |
| 105 | variable-initializer | 변수의 초기값을 지정합니다: ioAddress = ValidateIoAddress(address, outputOnly: true) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:IO:{ioAddress}:{(isOn ? "ON" : "OFF")}", number, cancellationToken) |
| 106 | conditional-expression | 조건에 따라 결과식을 선택합니다: isOn ? "ON" : "OFF" |
| 106 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:IO:{ioAddress}:{(isOn ? "ON" : "OFF")}", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateIoAddress` · L109–163

[Drilling.Common/Automation/CAutomationManager.cs:109–163](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L109-L163)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ValidateIoAddress(string, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| address | string | None | False /  |
| outputOnly | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:99–99](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L99-L99) | ValidateIoAddress | False |
| [Drilling.Common/Automation/CAutomationManager.cs:105–105](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L105-L105) | ValidateIoAddress | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 111 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 112 | address.Trim | resolved | string string.Trim() |
| 118 | value.Any | resolved | bool System.Collections.Generic.IEnumerable<char>.Any<char>(System.Func<char, bool>) |
| 120 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 123 | value.ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 124 | normalized.Split | resolved | string[] string.Split(char[]?, System.StringSplitOptions) |
| 127 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 130 | TrimIoAxisPrefix | resolved | string Drilling.Common.Automation.CAutomationManager.TrimIoAxisPrefix(string) · Drilling.Common/Automation/CAutomationManager.cs:165 |
| 133 | bitText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 138 | bitText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 142 | bitText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 147 | bitText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 154 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 157 | IsUnsignedInteger | resolved | bool Drilling.Common.Automation.CAutomationManager.IsUnsignedInteger(string) · Drilling.Common/Automation/CAutomationManager.cs:175 |
| 157 | IsUnsignedInteger | resolved | bool Drilling.Common.Automation.CAutomationManager.IsUnsignedInteger(string) · Drilling.Common/Automation/CAutomationManager.cs:175 |
| 157 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 157 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 159 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(address) |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: address.Trim() |
| 112 | local-declaration | 지역 변수를 선언합니다: var value = address.Trim(); |
| 112 | variable-initializer | 변수의 초기값을 지정합니다: value = address.Trim() |
| 118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Any(MatchesItem) |
| 118 | if | 조건에 따라 분기합니다: if (value.Any(MatchesItem)) |
| 120 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 IO address contains an invalid command delimiter: {address}") |
| 120 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 IO address contains an invalid command delimiter: {address}"); |
| 123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToUpperInvariant() |
| 123 | local-declaration | 지역 변수를 선언합니다: var normalized = value.ToUpperInvariant(); |
| 123 | variable-initializer | 변수의 초기값을 지정합니다: normalized = value.ToUpperInvariant() |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Split(['.', '/', ','], StringSplitOptions.None) |
| 124 | local-declaration | 지역 변수를 선언합니다: var parts = normalized.Split(['.', '/', ','], StringSplitOptions.None); |
| 124 | variable-initializer | 변수의 초기값을 지정합니다: parts = normalized.Split(['.', '/', ','], StringSplitOptions.None) |
| 125 | if | 조건에 따라 분기합니다: if (parts.Length != 2) |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 IO address is invalid: {address}. Use A0.DO1, A0.DI1, or 0.1.") |
| 127 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 IO address is invalid: {address}. Use A0.DO1, A0.DI1, or 0.1."); |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TrimIoAxisPrefix(parts[0]) |
| 130 | local-declaration | 지역 변수를 선언합니다: var axisText = TrimIoAxisPrefix(parts[0]); |
| 130 | variable-initializer | 변수의 초기값을 지정합니다: axisText = TrimIoAxisPrefix(parts[0]) |
| 131 | local-declaration | 지역 변수를 선언합니다: var bitText = parts[1]; |
| 131 | variable-initializer | 변수의 초기값을 지정합니다: bitText = parts[1] |
| 132 | local-declaration | 지역 변수를 선언합니다: var isOutput = false; |
| 132 | variable-initializer | 변수의 초기값을 지정합니다: isOutput = false |
| 133 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bitText.StartsWith("DO", StringComparison.Ordinal) |
| 133 | if | 조건에 따라 분기합니다: if (bitText.StartsWith("DO", StringComparison.Ordinal)) |
| 135 | assignment | 값을 대상에 대입합니다: isOutput = true |
| 136 | assignment | 값을 대상에 대입합니다: bitText = bitText[2..] |
| 138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bitText.StartsWith("DI", StringComparison.Ordinal) |
| 138 | else | 앞 조건이 거짓인 경로입니다: else |
| 138 | if | 조건에 따라 분기합니다: if (bitText.StartsWith("DI", StringComparison.Ordinal)) |
| 140 | assignment | 값을 대상에 대입합니다: bitText = bitText[2..] |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bitText.StartsWith("Y", StringComparison.Ordinal) |
| 142 | else | 앞 조건이 거짓인 경로입니다: else |
| 142 | if | 조건에 따라 분기합니다: if (bitText.StartsWith("Y", StringComparison.Ordinal)) |
| 144 | assignment | 값을 대상에 대입합니다: isOutput = true |
| 145 | assignment | 값을 대상에 대입합니다: bitText = bitText[1..] |
| 147 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bitText.StartsWith("X", StringComparison.Ordinal) |
| 147 | else | 앞 조건이 거짓인 경로입니다: else |
| 147 | if | 조건에 따라 분기합니다: if (bitText.StartsWith("X", StringComparison.Ordinal)) |
| 149 | assignment | 값을 대상에 대입합니다: bitText = bitText[1..] |
| 152 | if | 조건에 따라 분기합니다: if (outputOnly && !isOutput) |
| 154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 IO output command can use DO/Y address only: {address}") |
| 154 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 IO output command can use DO/Y address only: {address}"); |
| 157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsUnsignedInteger(axisText) |
| 157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsUnsignedInteger(bitText) |
| 157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(axisText, NumberStyles.None, CultureInfo.InvariantCulture, out var axisNo) |
| 157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(bitText, NumberStyles.None, CultureInfo.InvariantCulture, out var bitNo) |
| 157 | if | 조건에 따라 분기합니다: if (!IsUnsignedInteger(axisText) &#124;&#124; !IsUnsignedInteger(bitText) &#124;&#124; !int.TryParse(axisText, NumberStyles.None, CultureInfo.InvariantCulture, out var axisNo) &#124;&#124; !int.TryParse(bitText, NumberStyles.None, CultureInfo.InvariantCu…) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 IO address is invalid: {address}. Use A0.DO1, A0.DI1, or 0.1.") |
| 159 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 IO address is invalid: {address}. Use A0.DO1, A0.DI1, or 0.1."); |
| 162 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateIoAddress"]
 N0["L118 if"]
 M -->|포함| N0
 N1["L125 if"]
 M -->|포함| N1
 N2["L133 if"]
 M -->|포함| N2
 N3["L138 else"]
 N2 -->|포함| N3
 N4["L138 if"]
 N2 -->|포함| N4
 N5["L142 else"]
 N3 -->|포함| N5
 N6["L142 if"]
 N3 -->|포함| N6
 N7["L147 else"]
 N5 -->|포함| N7
 N8["L147 if"]
 N5 -->|포함| N8
 N9["L152 if"]
 M -->|포함| N9
 N10["L157 if"]
 M -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L113–116

[Drilling.Common/Automation/CAutomationManager.cs:113–116](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L113-L116)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(char) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| character | char | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 115 | char.IsControl | resolved | bool char.IsControl(char) |
| 115 | char.IsWhiteSpace | resolved | bool char.IsWhiteSpace(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsControl(character) |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsWhiteSpace(character) |
| 115 | return | 호출자에게 값 또는 제어를 반환합니다: return character is ':' or '&#124;' or '\r' or '\n' &#124;&#124; char.IsControl(character) &#124;&#124; char.IsWhiteSpace(character); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TrimIoAxisPrefix` · L165–173

[Drilling.Common/Automation/CAutomationManager.cs:165–173](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L165-L173)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.TrimIoAxisPrefix(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisText | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:130–130](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L130-L130) | TrimIoAxisPrefix | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 167 | axisText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 172 | axisText.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisText.StartsWith("AXIS", StringComparison.Ordinal) |
| 167 | if | 조건에 따라 분기합니다: if (axisText.StartsWith("AXIS", StringComparison.Ordinal)) |
| 169 | return | 호출자에게 값 또는 제어를 반환합니다: return axisText[4..]; |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisText.StartsWith("A", StringComparison.Ordinal) |
| 172 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisText.StartsWith("A", StringComparison.Ordinal) ? axisText[1..] : axisText |
| 172 | return | 호출자에게 값 또는 제어를 반환합니다: return axisText.StartsWith("A", StringComparison.Ordinal) ? axisText[1..] : axisText; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TrimIoAxisPrefix"]
 N0["L167 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsUnsignedInteger` · L175–178

[Drilling.Common/Automation/CAutomationManager.cs:175–178](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L175-L178)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsUnsignedInteger(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:157–157](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L157-L157) | IsUnsignedInteger | False |
| [Drilling.Common/Automation/CAutomationManager.cs:157–157](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L157-L157) | IsUnsignedInteger | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 177 | value.All | resolved | bool System.Collections.Generic.IEnumerable<char>.All<char>(System.Func<char, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.All(char.IsAsciiDigit) |
| 177 | return | 호출자에게 값 또는 제어를 반환합니다: return value.Length > 0 && value.All(char.IsAsciiDigit); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteRaw` · L180–184

[Drilling.Common/Automation/CAutomationManager.cs:180–184](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L180-L184)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | string | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L70-L70) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:75–75](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L75-L75) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:84–84](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L84-L84) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:94–94](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L94-L94) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:100–100](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L100-L100) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:106–106](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L106-L106) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:312–312](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L312-L312) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:320–320](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L320-L320) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:333–333](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L333-L333) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:343–343](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L343-L343) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:484–484](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L484-L484) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:520–520](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L520-L520) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:531–531](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L531-L531) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:542–542](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L542-L542) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:549–549](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L549-L549) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:559–559](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L559-L559) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:580–580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L580-L580) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:633–633](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L633-L633) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:657–657](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L657-L657) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1139–1139](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1139-L1139) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1153–1153](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1153-L1153) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1174–1174](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1174-L1174) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1207–1207](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1207-L1207) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1247–1247](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1247-L1247) | ExecuteRaw | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1260–1260](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1260-L1260) | ExecuteRaw | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 182 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 183 | _interfaceManager.ExecuteFunctionNoLog | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<string> Drilling.Common.Interface.CInterfaceManager.ExecuteFunctionNoLog(Drilling.Common.Interface.EN_EQP_MODULE, int, string, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:326 |
| 183 | _interfaceManager.ExecuteFunction | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<string> Drilling.Common.Interface.CInterfaceManager.ExecuteFunction(Drilling.Common.Interface.EN_EQP_MODULE, int, string, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:320 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(command) |
| 183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.ExecuteFunctionNoLog(EN_EQP_MODULE.Automation1, number, command, cancellationToken) |
| 183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.ExecuteFunction(EN_EQP_MODULE.Automation1, number, command, cancellationToken) |
| 183 | conditional-expression | 조건에 따라 결과식을 선택합니다: suppressLog ? _interfaceManager.ExecuteFunctionNoLog(EN_EQP_MODULE.Automation1, number, command, cancellationToken) : _interfaceManager.ExecuteFunction(EN_EQP_MODULE.Automation1, number, command, cancellationToken) |
| 183 | return | 호출자에게 값 또는 제어를 반환합니다: return suppressLog ? _interfaceManager.ExecuteFunctionNoLog(EN_EQP_MODULE.Automation1, number, command, cancellationToken) : _interfaceManager.ExecuteFunction(EN_EQP_MODULE.Automation1, number, command, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Move` · L186–189

[Drilling.Common/Automation/CAutomationManager.cs:186–189](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L186-L189)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Move(string, double, double, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| targetPosition | double | None | False /  |
| velocity | double | None | True / 100 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 188 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |
| 188 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |
| 188 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, $"MOVE_ABS:{Format(targetPosition)}:{Format(velocity)}", number, cancellationToken) |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(targetPosition) |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(velocity) |
| 188 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, $"MOVE_ABS:{Format(targetPosition)}:{Format(velocity)}", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `MoveRel` · L191–194

[Drilling.Common/Automation/CAutomationManager.cs:191–194](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L191-L194)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.MoveRel(string, double, double, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| distance | double | None | False /  |
| velocity | double | None | True / 100 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 193 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |
| 193 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |
| 193 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, $"MOVE_REL:{Format(distance)}:{Format(velocity)}", number, cancellationToken) |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(distance) |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(velocity) |
| 193 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, $"MOVE_REL:{Format(distance)}:{Format(velocity)}", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Stop` · L196–199

[Drilling.Common/Automation/CAutomationManager.cs:196–199](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L196-L199)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Stop(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 198 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "STOP", number, cancellationToken) |
| 198 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "STOP", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ManualMove` · L201–206

[Drilling.Common/Automation/CAutomationManager.cs:201–206](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L201-L206)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ManualMove(string, double, double, bool, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| value | double | None | False /  |
| velocity | double | None | False /  |
| relative | bool | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1562–1562](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1562-L1562) | automation.ManualMove | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3542–3542](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3542-L3542) | _manager.automation.ManualMove | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3548–3548](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3548-L3548) | _manager.automation.ManualMove | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 203 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 203 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 204 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 204 | nameof | unresolved | None |
| 205 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |
| 205 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |
| 205 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(velocity) |
| 203 | if | 조건에 따라 분기합니다: if (!double.IsFinite(value) &#124;&#124; !double.IsFinite(velocity) &#124;&#124; velocity <= 0) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(velocity), "Position and speed must be finite; speed must be positive.") |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(velocity) |
| 204 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(velocity), "Position and speed must be finite; speed must be positive."); |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, $"MANUAL_{(relative ? "REL" : "ABS")}:{Format(value)}:{Format(velocity)}", number, cancellationToken) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(value) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(velocity) |
| 205 | conditional-expression | 조건에 따라 결과식을 선택합니다: relative ? "REL" : "ABS" |
| 205 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, $"MANUAL_{(relative ? "REL" : "ABS")}:{Format(value)}:{Format(velocity)}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ManualMove"]
 N0["L203 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `JogStart` · L208–213

[Drilling.Common/Automation/CAutomationManager.cs:208–213](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L208-L213)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.JogStart(string, double, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| velocity | double | None | False /  |
| number | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3581–3581](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3581-L3581) | _manager.automation.JogStart | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 210 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 211 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 211 | nameof | unresolved | None |
| 212 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |
| 212 | Format | resolved | string Drilling.Common.Automation.CAutomationManager.Format(double) · Drilling.Common/Automation/CAutomationManager.cs:1091 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(velocity) |
| 210 | if | 조건에 따라 분기합니다: if (!double.IsFinite(velocity) &#124;&#124; velocity == 0) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(velocity)) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(velocity) |
| 211 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(velocity)); |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, $"JOG_START:{Format(velocity)}", number, default) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Format(velocity) |
| 212 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, $"JOG_START:{Format(velocity)}", number, default); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["JogStart"]
 N0["L210 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `JogStop` · L215–215

[Drilling.Common/Automation/CAutomationManager.cs:215–215](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L215-L215)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.JogStop(string, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3582–3582](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3582-L3582) | _manager.automation.JogStop | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 215 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "JOG_STOP", number, default) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `AbortMotion` · L216–216

[Drilling.Common/Automation/CAutomationManager.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L216-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.AbortMotion(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1584–1584](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1584-L1584) | automation.AbortMotion | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3627–3627](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3627-L3627) | _manager.automation.AbortMotion | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3736–3736](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3736-L3736) | _manager.automation.AbortMotion | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6377–6377](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L6377-L6377) | _manager.automation.AbortMotion | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 216 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "ABORT_MOTION", number, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ServoOn` · L217–220

[Drilling.Common/Automation/CAutomationManager.cs:217–220](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L217-L220)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ServoOn(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2392–2392](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2392-L2392) | _manager.automation.ServoOn | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2752–2752](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2752-L2752) | _manager.automation.ServoOn | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 219 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "SERVO_ON", number, cancellationToken) |
| 219 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "SERVO_ON", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ServoOff` · L222–225

[Drilling.Common/Automation/CAutomationManager.cs:222–225](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L222-L225)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ServoOff(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2756–2756](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2756-L2756) | _manager.automation.ServoOff | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 224 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 224 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "SERVO_OFF", number, cancellationToken) |
| 224 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "SERVO_OFF", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Home` · L227–230

[Drilling.Common/Automation/CAutomationManager.cs:227–230](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L227-L230)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.Home(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 229 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "HOME", number, cancellationToken) |
| 229 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "HOME", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `HomeAsync` · L232–235

[Drilling.Common/Automation/CAutomationManager.cs:232–235](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L232-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.HomeAsync(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2408–2408](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2408-L2408) | _manager.automation.HomeAsync | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2748–2748](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2748-L2748) | _manager.automation.HomeAsync | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 234 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 234 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "HOME_ASYNC", number, cancellationToken) |
| 234 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "HOME_ASYNC", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetAlarm` · L237–240

[Drilling.Common/Automation/CAutomationManager.cs:237–240](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L237-L240)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ResetAlarm(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1812–1812](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1812-L1812) | _manager.automation.ResetAlarm | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 239 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "RESET_ALARM", number, cancellationToken) |
| 239 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "RESET_ALARM", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxis` · L242–245

[Drilling.Common/Automation/CAutomationManager.cs:242–245](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L242-L245)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxis(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 244 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 244 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, "READ", number, cancellationToken) |
| 244 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, "READ", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisStatus` · L247–250

[Drilling.Common/Automation/CAutomationManager.cs:247–250](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L247-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatus(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 249 | ReadAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatus(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:252 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisStatus(axisName, number, 0, cancellationToken) |
| 249 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadAxisStatus(axisName, number, 0, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisStatus` · L252–264

[Drilling.Common/Automation/CAutomationManager.cs:252–264](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L252-L264)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatus(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L249-L249) | ReadAxisStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 254 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 255 | ValidateAnalogInputNo | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) · Drilling.Common/Automation/CAutomationManager.cs:669 |
| 256 | axisName.Trim | resolved | string string.Trim() |
| 257 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 259 | CreateSimulationAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisStatus(int, string) · Drilling.Common/Automation/CAutomationManager.cs:840 |
| 262 | ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult | resolved | string System.Runtime.CompilerServices.TaskAwaiter<string>.GetResult() |
| 262 | ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter | resolved | System.Runtime.CompilerServices.TaskAwaiter<string> System.Threading.Tasks.Task<string>.GetAwaiter() |
| 262 | ReadAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxis(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:636 |
| 263 | ParseAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ParseAxisStatus(int, string, string) · Drilling.Common/Automation/CAutomationManager.cs:874 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAnalogInputNo(analogInputNo) |
| 256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 256 | local-declaration | 지역 변수를 선언합니다: var normalizedAxis = axisName.Trim(); |
| 256 | variable-initializer | 변수의 초기값을 지정합니다: normalizedAxis = axisName.Trim() |
| 257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 257 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisStatus(number, normalizedAxis) |
| 259 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationAxisStatus(number, normalizedAxis); |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult() |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter() |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken) |
| 262 | local-declaration | 지역 변수를 선언합니다: var response = ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult(); |
| 262 | variable-initializer | 변수의 초기값을 지정합니다: response = ReadAxis(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult() |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAxisStatus(number, normalizedAxis, response) |
| 263 | return | 호출자에게 값 또는 제어를 반환합니다: return ParseAxisStatus(number, normalizedAxis, response); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadAxisStatus"]
 N0["L257 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisStatusByName` · L266–269

[Drilling.Common/Automation/CAutomationManager.cs:266–269](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L266-L269)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByName(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 268 | ReadAxisStatusByName | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByName(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:271 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 268 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisStatusByName(axisName, number, 0, cancellationToken) |
| 268 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadAxisStatusByName(axisName, number, 0, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisStatusByName` · L271–284

[Drilling.Common/Automation/CAutomationManager.cs:271–284](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L271-L284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByName(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:268–268](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L268-L268) | ReadAxisStatusByName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 273 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 274 | ValidateAnalogInputNo | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) · Drilling.Common/Automation/CAutomationManager.cs:669 |
| 275 | axisName.Trim | resolved | string string.Trim() |
| 276 | ValidateAxisNameOnly | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) · Drilling.Common/Automation/CAutomationManager.cs:660 |
| 277 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 279 | CreateSimulationAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisStatus(int, string) · Drilling.Common/Automation/CAutomationManager.cs:840 |
| 282 | ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult | resolved | string System.Runtime.CompilerServices.TaskAwaiter<string>.GetResult() |
| 282 | ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter | resolved | System.Runtime.CompilerServices.TaskAwaiter<string> System.Threading.Tasks.Task<string>.GetAwaiter() |
| 282 | ReadAxisByName | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:642 |
| 283 | ParseAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ParseAxisStatus(int, string, string) · Drilling.Common/Automation/CAutomationManager.cs:874 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAnalogInputNo(analogInputNo) |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 275 | local-declaration | 지역 변수를 선언합니다: var normalizedAxis = axisName.Trim(); |
| 275 | variable-initializer | 변수의 초기값을 지정합니다: normalizedAxis = axisName.Trim() |
| 276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAxisNameOnly(normalizedAxis) |
| 277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 277 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 279 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisStatus(number, normalizedAxis) |
| 279 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationAxisStatus(number, normalizedAxis); |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult() |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter() |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken) |
| 282 | local-declaration | 지역 변수를 선언합니다: var response = ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult(); |
| 282 | variable-initializer | 변수의 초기값을 지정합니다: response = ReadAxisByName(normalizedAxis, number, analogInputNo, cancellationToken).GetAwaiter().GetResult() |
| 283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAxisStatus(number, normalizedAxis, response) |
| 283 | return | 호출자에게 값 또는 제어를 반환합니다: return ParseAxisStatus(number, normalizedAxis, response); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadAxisStatusByName"]
 N0["L277 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisStatusByNameNoLog` · L286–299

[Drilling.Common/Automation/CAutomationManager.cs:286–299](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L286-L299)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ReadAxisStatusByNameNoLog(string, int, int, bool, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| readExtendedStatus | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L23-L23) | _automation.ReadAxisStatusByNameNoLog | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2456–2456](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2456-L2456) | _manager.automation.ReadAxisStatusByNameNoLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 288 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 289 | ValidateAnalogInputNo | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) · Drilling.Common/Automation/CAutomationManager.cs:669 |
| 290 | axisName.Trim | resolved | string string.Trim() |
| 291 | ValidateAxisNameOnly | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) · Drilling.Common/Automation/CAutomationManager.cs:660 |
| 292 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 294 | CreateSimulationAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisStatus(int, string) · Drilling.Common/Automation/CAutomationManager.cs:840 |
| 297 | ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter().GetResult | resolved | string System.Runtime.CompilerServices.TaskAwaiter<string>.GetResult() |
| 297 | ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter | resolved | System.Runtime.CompilerServices.TaskAwaiter<string> System.Threading.Tasks.Task<string>.GetAwaiter() |
| 297 | ReadAxisByName | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:652 |
| 298 | ParseAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ParseAxisStatus(int, string, string) · Drilling.Common/Automation/CAutomationManager.cs:874 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAnalogInputNo(analogInputNo) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 290 | local-declaration | 지역 변수를 선언합니다: var normalizedAxis = axisName.Trim(); |
| 290 | variable-initializer | 변수의 초기값을 지정합니다: normalizedAxis = axisName.Trim() |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAxisNameOnly(normalizedAxis) |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 292 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisStatus(number, normalizedAxis) |
| 294 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationAxisStatus(number, normalizedAxis); |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter().GetResult() |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter() |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true) |
| 297 | local-declaration | 지역 변수를 선언합니다: var response = ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter().GetResult(); |
| 297 | variable-initializer | 변수의 초기값을 지정합니다: response = ReadAxisByName(normalizedAxis, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: true).GetAwaiter().GetResult() |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAxisStatus(number, normalizedAxis, response) |
| 298 | return | 호출자에게 값 또는 제어를 반환합니다: return ParseAxisStatus(number, normalizedAxis, response); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadAxisStatusByNameNoLog"]
 N0["L292 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunLocalScript` · L301–313

[Drilling.Common/Automation/CAutomationManager.cs:301–313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L301-L313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunLocalScript(string, string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| localScriptPath | string | None | False /  |
| controllerFileName | string | None | True / "" |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 303 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 304 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 305 | ResolveLocalScriptPath | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveLocalScriptPath(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1022 |
| 306 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 306 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 306 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 307 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 309 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 312 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(localScriptPath) |
| 304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 305 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveLocalScriptPath(localScriptPath, cancellationToken) |
| 305 | local-declaration | 지역 변수를 선언합니다: var resolvedLocalScriptPath = ResolveLocalScriptPath(localScriptPath, cancellationToken); |
| 305 | variable-initializer | 변수의 초기값을 지정합니다: resolvedLocalScriptPath = ResolveLocalScriptPath(localScriptPath, cancellationToken) |
| 306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(controllerFileName) |
| 306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(localScriptPath, cancellationToken) |
| 306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(controllerFileName, cancellationToken) |
| 306 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(controllerFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(controllerFileName, cancellationToken) |
| 306 | local-declaration | 지역 변수를 선언합니다: var resolvedControllerFileName = string.IsNullOrWhiteSpace(controllerFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(controllerFileName, cancellationToken); |
| 306 | variable-initializer | 변수의 초기값을 지정합니다: resolvedControllerFileName = string.IsNullOrWhiteSpace(controllerFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(controllerFileName, cancellationToken) |
| 307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 307 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 309 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, "Idle", resolvedControllerFileName) |
| 309 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationTaskStatus(taskIndex, "Idle", resolvedControllerFileName); |
| 312 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_LOCAL&#124;{taskIndex}&#124;{resolvedLocalScriptPath}&#124;{resolvedControllerFileName}", number, cancellationToken) |
| 312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_LOCAL&#124;{taskIndex}&#124;{resolvedLocalScriptPath}&#124;{resolvedControllerFileName}", number, cancellationToken) |
| 312 | return | 호출자에게 값 또는 제어를 반환합니다: return await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_LOCAL&#124;{taskIndex}&#124;{resolvedLocalScriptPath}&#124;{resolvedControllerFileName}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RunLocalScript"]
 N0["L307 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `UploadScript` · L315–321

[Drilling.Common/Automation/CAutomationManager.cs:315–321](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L315-L321)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.UploadScript(string, string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| localScriptPath | string | None | False /  |
| scriptFileName | string | None | True / "" |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:446–446](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L446-L446) | UploadScript | True |
| [Drilling.Common/Station/CStationProcess.cs:683–683](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L683-L683) | _automationManager.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3618–3618](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3618-L3618) | manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2023–2023](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2023-L2023) | _manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2648–2648](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2648-L2648) | _manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3693–3693](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3693-L3693) | _manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4103–4103](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4103-L4103) | _manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4494–4494](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4494-L4494) | _manager.automation.UploadScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5316–5316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5316-L5316) | _manager.automation.UploadScript | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 317 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 318 | ResolveLocalScriptPath | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveLocalScriptPath(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1022 |
| 319 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 319 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 319 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 320 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(localScriptPath) |
| 318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveLocalScriptPath(localScriptPath, cancellationToken) |
| 318 | local-declaration | 지역 변수를 선언합니다: var resolvedLocalScriptPath = ResolveLocalScriptPath(localScriptPath, cancellationToken); |
| 318 | variable-initializer | 변수의 초기값을 지정합니다: resolvedLocalScriptPath = ResolveLocalScriptPath(localScriptPath, cancellationToken) |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(scriptFileName) |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(localScriptPath, cancellationToken) |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(scriptFileName, cancellationToken) |
| 319 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(scriptFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(scriptFileName, cancellationToken) |
| 319 | local-declaration | 지역 변수를 선언합니다: var controllerFileName = string.IsNullOrWhiteSpace(scriptFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(scriptFileName, cancellationToken); |
| 319 | variable-initializer | 변수의 초기값을 지정합니다: controllerFileName = string.IsNullOrWhiteSpace(scriptFileName) ? CreateControllerFileName(localScriptPath, cancellationToken) : CreateControllerFileName(scriptFileName, cancellationToken) |
| 320 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;UPLOAD&#124;{resolvedLocalScriptPath}&#124;{controllerFileName}", number, cancellationToken) |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;UPLOAD&#124;{resolvedLocalScriptPath}&#124;{controllerFileName}", number, cancellationToken) |
| 320 | return | 호출자에게 값 또는 제어를 반환합니다: return await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;UPLOAD&#124;{resolvedLocalScriptPath}&#124;{controllerFileName}", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunScript` · L323–334

[Drilling.Common/Automation/CAutomationManager.cs:323–334](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L323-L334)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunScript(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scriptFileName | string | None | False /  |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:726–726](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L726-L726) | _automationManager.RunScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2650–2650](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2650-L2650) | _manager.automation.RunScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3708–3708](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3708-L3708) | _manager.automation.RunScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4105–4105](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4105-L4105) | _manager.automation.RunScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4510–4510](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4510-L4510) | _manager.automation.RunScript | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5319–5319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5319-L5319) | _manager.automation.RunScript | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 325 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 326 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 327 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 328 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 330 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 333 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(scriptFileName) |
| 326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 327 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(scriptFileName, cancellationToken) |
| 327 | local-declaration | 지역 변수를 선언합니다: var controllerFileName = CreateControllerFileName(scriptFileName, cancellationToken); |
| 327 | variable-initializer | 변수의 초기값을 지정합니다: controllerFileName = CreateControllerFileName(scriptFileName, cancellationToken) |
| 328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 328 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 330 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, "Idle", controllerFileName) |
| 330 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationTaskStatus(taskIndex, "Idle", controllerFileName); |
| 333 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken) |
| 333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken) |
| 333 | return | 호출자에게 값 또는 제어를 반환합니다: return await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RunScript"]
 N0["L328 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunScriptIfIdle` · L336–344

[Drilling.Common/Automation/CAutomationManager.cs:336–344](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L336-L344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunScriptIfIdle(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scriptFileName | string | None | False /  |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1100–1100](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1100-L1100) | RunScriptIfIdle | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3631–3631](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3631-L3631) | manager.automation.RunScriptIfIdle | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2025–2025](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2025-L2025) | _manager.automation.RunScriptIfIdle | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 338 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 339 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 340 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 341 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 342 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 343 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(scriptFileName) |
| 339 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(scriptFileName, cancellationToken) |
| 340 | local-declaration | 지역 변수를 선언합니다: var controllerFileName = CreateControllerFileName(scriptFileName, cancellationToken); |
| 340 | variable-initializer | 변수의 초기값을 지정합니다: controllerFileName = CreateControllerFileName(scriptFileName, cancellationToken) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 341 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, "Idle", controllerFileName) |
| 342 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateSimulationTaskStatus(taskIndex, "Idle", controllerFileName); |
| 343 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_IF_IDLE&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken) |
| 343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_IF_IDLE&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken) |
| 343 | return | 호출자에게 값 또는 제어를 반환합니다: return await ExecuteRaw($"AUTOMATION1:SCRIPT&#124;RUN_IF_IDLE&#124;{taskIndex}&#124;{controllerFileName}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RunScriptIfIdle"]
 N0["L341 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunBufferedScript` · L346–358

[Drilling.Common/Automation/CAutomationManager.cs:346–358](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L346-L358)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScript(string, string, int, int, int, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| localScriptPath | string | None | False /  |
| scriptFileName | string | None | True / "" |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| queueSize | int | None | True / 100 |
| linesPerCommand | int | None | True / 1000 |
| timeoutMs | int | None | True / 600000 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 357 | RunBufferedScripts | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScripts(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:360 |
| 357 | new ST_BUFFERED_SCRIPT_RUN_ITEM | resolved | Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM.ST_BUFFERED_SCRIPT_RUN_ITEM(string, string, int) · Drilling.Common/Automation/CAutomationManager.cs:1506 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 357 | await | 비동기 완료를 기다립니다: await RunBufferedScripts([new ST_BUFFERED_SCRIPT_RUN_ITEM(localScriptPath, scriptFileName, taskIndex)], number, queueSize, linesPerCommand, timeoutMs, cancellationToken) |
| 357 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunBufferedScripts([new ST_BUFFERED_SCRIPT_RUN_ITEM(localScriptPath, scriptFileName, taskIndex)], number, queueSize, linesPerCommand, timeoutMs, cancellationToken) |
| 357 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_BUFFERED_SCRIPT_RUN_ITEM(localScriptPath, scriptFileName, taskIndex) |
| 357 | return | 호출자에게 값 또는 제어를 반환합니다: return await RunBufferedScripts([new ST_BUFFERED_SCRIPT_RUN_ITEM(localScriptPath, scriptFileName, taskIndex)], number, queueSize, linesPerCommand, timeoutMs, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunBufferedScripts` · L360–367

[Drilling.Common/Automation/CAutomationManager.cs:360–367](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L360-L367)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScripts(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scripts | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM> | None | False /  |
| number | int | None | True / 0 |
| queueSize | int | None | True / 100 |
| linesPerCommand | int | None | True / 1000 |
| timeoutMs | int | None | True / 600000 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:357–357](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L357-L357) | RunBufferedScripts | False |
| [Drilling.Common/Station/CStationProcess.cs:1100–1100](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1100-L1100) | _automationManager.RunBufferedScripts | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 367 | RunBufferedScriptsCore(scripts, number, queueSize, linesPerCommand, timeoutMs, upload: true, stageSession: false, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 367 | RunBufferedScriptsCore | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScriptsCore(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, bool, bool, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:373 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 367 | await | 비동기 완료를 기다립니다: await RunBufferedScriptsCore(scripts, number, queueSize, linesPerCommand, timeoutMs, upload: true, stageSession: false, cancellationToken).ConfigureAwait(false) |
| 367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunBufferedScriptsCore(scripts, number, queueSize, linesPerCommand, timeoutMs, upload: true, stageSession: false, cancellationToken).ConfigureAwait(false) |
| 367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunBufferedScriptsCore(scripts, number, queueSize, linesPerCommand, timeoutMs, upload: true, stageSession: false, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunStagePreparedBufferedScripts` · L372–372

[Drilling.Common/Automation/CAutomationManager.cs:372–372](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L372-L372)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunStagePreparedBufferedScripts(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scripts | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM> | None | False /  |
| number | int | None | False /  |
| queueSize | int | None | False /  |
| linesPerCommand | int | None | False /  |
| timeoutMs | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4086–4086](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4086-L4086) | _automationManager.RunStagePreparedBufferedScripts | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 372 | RunBufferedScriptsCore | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScriptsCore(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, bool, bool, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:373 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 372 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunBufferedScriptsCore(scripts, number, queueSize, linesPerCommand, timeoutMs, upload: false, stageSession: true, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunBufferedScriptsCore` · L373–487

[Drilling.Common/Automation/CAutomationManager.cs:373–487](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L373-L487)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunBufferedScriptsCore(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>, int, int, int, int, bool, bool, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scripts | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM> | None | False /  |
| number | int | None | False /  |
| queueSize | int | None | False /  |
| linesPerCommand | int | None | False /  |
| timeoutMs | int | None | False /  |
| upload | bool | None | False /  |
| stageSession | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:367–367](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L367-L367) | RunBufferedScriptsCore | False |
| [Drilling.Common/Automation/CAutomationManager.cs:372–372](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L372-L372) | RunBufferedScriptsCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 384 | scripts.ToArray | resolved | Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM[] System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>.ToArray<Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM>() |
| 391 | new HashSet<int> | resolved | System.Collections.Generic.HashSet<int>.HashSet() |
| 394 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 395 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 396 | taskIndexes.Add | resolved | bool System.Collections.Generic.HashSet<int>.Add(int) |
| 397 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 400 | Math.Max | resolved | int System.Math.Max(int, int) |
| 401 | Math.Max | resolved | int System.Math.Max(int, int) |
| 402 | Math.Max | resolved | int System.Math.Max(int, int) |
| 403 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 407 | commandQueueSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 408 | commandLinesPerCommand.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 409 | commandTimeoutMs.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 411 | new HashSet<string> | resolved | System.Collections.Generic.HashSet<string>.HashSet(System.Collections.Generic.IEqualityComparer<string>?) |
| 412 | new List<(int TaskIndex, string ControllerFile, string? LocalPath)> | resolved | System.Collections.Generic.List<(int TaskIndex, string ControllerFile, string? LocalPath)>.List() |
| 415 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 420 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 421 | ResolveLocalScriptPath | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveLocalScriptPath(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1022 |
| 422 | ValidateBufferedRunScriptFile | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateBufferedRunScriptFile(string) · Drilling.Common/Automation/CAutomationManager.cs:677 |
| 423 | CreateBufferedRunControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateBufferedRunControllerFileName(Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM, string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:489 |
| 428 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 429 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |
| 432 | controllerFileNames.Add | resolved | bool System.Collections.Generic.HashSet<string>.Add(string) |
| 434 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 437 | requests.Add | resolved | void System.Collections.Generic.List<(int TaskIndex, string ControllerFile, string? LocalPath)>.Add((int TaskIndex, string ControllerFile, string? LocalPath)) |
| 443 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 446 | UploadScript | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.UploadScript(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:315 |
| 447 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 450 | fields.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 450 | request.TaskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 451 | fields.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 454 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 456 | new List<CStageSimulatedTask> | resolved | System.Collections.Generic.List<Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.List() |
| 460 | sessions.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.Add(Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 460 | RegisterStageSimulationTask | resolved | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask Drilling.Common.Automation.CAutomationManager.RegisterStageSimulationTask(int, int, string, bool) · Drilling.Common/Automation/CAutomationManager.cs:1288 |
| 462 | CancellationTokenSource.CreateLinkedTokenSource | resolved | System.Threading.CancellationTokenSource System.Threading.CancellationTokenSource.CreateLinkedTokenSource(System.Threading.CancellationToken) |
| 464 | limit.CancelAfter | resolved | void System.Threading.CancellationTokenSource.CancelAfter(int) |
| 467 | Task.WhenAll(sessions.Select(session => session.Completion)).WaitAsync(limit.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 467 | Task.WhenAll(sessions.Select(session => session.Completion)).WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.WaitAsync(System.Threading.CancellationToken) |
| 467 | Task.WhenAll | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.WhenAll(System.Collections.Generic.IEnumerable<System.Threading.Tasks.Task>) |
| 467 | sessions.Select | resolved | System.Collections.Generic.IEnumerable<System.Threading.Tasks.Task> System.Collections.Generic.IEnumerable<Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.Select<Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask, System.Threading.Tasks.Task>(System.Func<Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask, System.Threading.Tasks.Task>) |
| 471 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |
| 477 | session.Stop | resolved | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Stop() · Drilling.Common/Automation/CAutomationManager.cs:1384 |
| 484 | ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 484 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 484 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 485 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scripts.ToArray() |
| 384 | local-declaration | 지역 변수를 선언합니다: var runItems = scripts.ToArray(); |
| 384 | variable-initializer | 변수의 초기값을 지정합니다: runItems = scripts.ToArray() |
| 385 | if | 조건에 따라 분기합니다: if (runItems.Length == 0) |
| 387 | return | 호출자에게 값 또는 제어를 반환합니다: return "OK:SCRIPT:BUFFERED_RUN:EMPTY"; |
| 391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<int>() |
| 391 | local-declaration | 지역 변수를 선언합니다: var taskIndexes = new HashSet<int>(); |
| 391 | variable-initializer | 변수의 초기값을 지정합니다: taskIndexes = new HashSet<int>() |
| 392 | foreach | 컬렉션 요소를 순회합니다: foreach (var script in runItems) |
| 394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 395 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(script.TaskIndex) |
| 396 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndexes.Add(script.TaskIndex) |
| 396 | if | 조건에 따라 분기합니다: if (!taskIndexes.Add(script.TaskIndex)) |
| 397 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 buffered run group has duplicated task: {script.TaskIndex}") |
| 397 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 buffered run group has duplicated task: {script.TaskIndex}"); |
| 400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1, queueSize) |
| 400 | local-declaration | 지역 변수를 선언합니다: var commandQueueSize = Math.Max(1, queueSize); |
| 400 | variable-initializer | 변수의 초기값을 지정합니다: commandQueueSize = Math.Max(1, queueSize) |
| 401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, linesPerCommand) |
| 401 | local-declaration | 지역 변수를 선언합니다: var commandLinesPerCommand = Math.Max(2, linesPerCommand); |
| 401 | variable-initializer | 변수의 초기값을 지정합니다: commandLinesPerCommand = Math.Max(2, linesPerCommand) |
| 402 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(0, timeoutMs) |
| 402 | local-declaration | 지역 변수를 선언합니다: var commandTimeoutMs = Math.Max(0, timeoutMs); |
| 402 | variable-initializer | 변수의 초기값을 지정합니다: commandTimeoutMs = Math.Max(0, timeoutMs) |
| 403 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string> { "AUTOMATION1:SCRIPT", "BUFFERED_RUN_GROUP", commandQueueSize.ToString(CultureInfo.InvariantCulture), commandLinesPerCommand.ToString(CultureInfo.InvariantCulture), commandTimeoutMs.ToString(CultureInfo… |
| 403 | local-declaration | 지역 변수를 선언합니다: var fields = new List<string> { "AUTOMATION1:SCRIPT", "BUFFERED_RUN_GROUP", commandQueueSize.ToString(CultureInfo.InvariantCulture), commandLinesPerCommand.ToString(CultureInfo.InvariantCulture), commandTimeoutMs.ToString(CultureI |
| 403 | variable-initializer | 변수의 초기값을 지정합니다: fields = new List<string> { "AUTOMATION1:SCRIPT", "BUFFERED_RUN_GROUP", commandQueueSize.ToString(CultureInfo.InvariantCulture), commandLinesPerCommand.ToString(CultureInfo.InvariantCulture), commandTimeoutMs.ToString(CultureInfo. |
| 407 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commandQueueSize.ToString(CultureInfo.InvariantCulture) |
| 408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commandLinesPerCommand.ToString(CultureInfo.InvariantCulture) |
| 409 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commandTimeoutMs.ToString(CultureInfo.InvariantCulture) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<string>(StringComparer.OrdinalIgnoreCase) |
| 411 | local-declaration | 지역 변수를 선언합니다: var controllerFileNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase); |
| 411 | variable-initializer | 변수의 초기값을 지정합니다: controllerFileNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase) |
| 412 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(int TaskIndex, string ControllerFile, string? LocalPath)>() |
| 412 | local-declaration | 지역 변수를 선언합니다: var requests = new List<(int TaskIndex, string ControllerFile, string? LocalPath)>(); |
| 412 | variable-initializer | 변수의 초기값을 지정합니다: requests = new List<(int TaskIndex, string ControllerFile, string? LocalPath)>() |
| 413 | foreach | 컬렉션 요소를 순회합니다: foreach (var script in runItems) |
| 415 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 416 | local-declaration | 지역 변수를 선언합니다: string? resolvedLocalScriptPath = null; |
| 416 | variable-initializer | 변수의 초기값을 지정합니다: resolvedLocalScriptPath = null |
| 417 | local-declaration | 지역 변수를 선언합니다: string controllerFileName; |
| 418 | if | 조건에 따라 분기합니다: if (upload) |
| 420 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(script.LocalScriptPath) |
| 421 | assignment | 값을 대상에 대입합니다: resolvedLocalScriptPath = ResolveLocalScriptPath(script.LocalScriptPath, cancellationToken) |
| 421 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveLocalScriptPath(script.LocalScriptPath, cancellationToken) |
| 422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateBufferedRunScriptFile(resolvedLocalScriptPath) |
| 423 | assignment | 값을 대상에 대입합니다: controllerFileName = CreateBufferedRunControllerFileName(script, resolvedLocalScriptPath, cancellationToken) |
| 423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateBufferedRunControllerFileName(script, resolvedLocalScriptPath, cancellationToken) |
| 425 | else | 앞 조건이 거짓인 경로입니다: else |
| 428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(script.ScriptFileName) |
| 429 | assignment | 값을 대상에 대입합니다: controllerFileName = CreateControllerFileName(script.ScriptFileName, cancellationToken) |
| 429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(script.ScriptFileName, cancellationToken) |
| 432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: controllerFileNames.Add(controllerFileName) |
| 432 | if | 조건에 따라 분기합니다: if (!controllerFileNames.Add(controllerFileName)) |
| 434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 buffered run controller file is duplicated: {controllerFileName}") |
| 434 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 buffered run controller file is duplicated: {controllerFileName}"); |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requests.Add((script.TaskIndex, controllerFileName, resolvedLocalScriptPath)) |
| 441 | foreach | 컬렉션 요소를 순회합니다: foreach (var request in requests) |
| 443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 444 | if | 조건에 따라 분기합니다: if (upload) |
| 446 | await | 비동기 완료를 기다립니다: await UploadScript(request.LocalPath!, request.ControllerFile, number, cancellationToken) |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UploadScript(request.LocalPath!, request.ControllerFile, number, cancellationToken) |
| 446 | local-declaration | 지역 변수를 선언합니다: var uploadResponse = await UploadScript(request.LocalPath!, request.ControllerFile, number, cancellationToken); |
| 446 | variable-initializer | 변수의 초기값을 지정합니다: uploadResponse = await UploadScript(request.LocalPath!, request.ControllerFile, number, cancellationToken) |
| 447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(uploadResponse, $"Buffered script upload failed. ControllerFile={request.ControllerFile}") |
| 450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Add(request.TaskIndex.ToString(CultureInfo.InvariantCulture)) |
| 450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.TaskIndex.ToString(CultureInfo.InvariantCulture) |
| 451 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Add(request.ControllerFile) |
| 454 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 454 | if | 조건에 따라 분기합니다: if (stageSession && IsSimul(number)) |
| 456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<CStageSimulatedTask>() |
| 456 | local-declaration | 지역 변수를 선언합니다: var sessions = new List<CStageSimulatedTask>(); |
| 456 | variable-initializer | 변수의 초기값을 지정합니다: sessions = new List<CStageSimulatedTask>() |
| 457 | try | 예외 처리 범위입니다: try |
| 459 | foreach | 컬렉션 요소를 순회합니다: foreach (var request in requests) |
| 460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: sessions.Add(RegisterStageSimulationTask(number, request.TaskIndex, request.ControllerFile, buffered: true)) |
| 460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterStageSimulationTask(number, request.TaskIndex, request.ControllerFile, buffered: true) |
| 462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancellationTokenSource.CreateLinkedTokenSource(cancellationToken) |
| 462 | using-declaration | 정리할 자원을 선언합니다: using var limit = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken); |
| 462 | variable-initializer | 변수의 초기값을 지정합니다: limit = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken) |
| 463 | if | 조건에 따라 분기합니다: if (commandTimeoutMs > 0) |
| 464 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: limit.CancelAfter(commandTimeoutMs) |
| 465 | try | 예외 처리 범위입니다: try |
| 467 | await | 비동기 완료를 기다립니다: await Task.WhenAll(sessions.Select(session => session.Completion)).WaitAsync(limit.Token).ConfigureAwait(false) |
| 467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.WhenAll(sessions.Select(session => session.Completion)).WaitAsync(limit.Token).ConfigureAwait(false) |
| 467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.WhenAll(sessions.Select(session => session.Completion)).WaitAsync(limit.Token) |
| 467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.WhenAll(sessions.Select(session => session.Completion)) |
| 467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: sessions.Select(session => session.Completion) |
| 469 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (!cancellationToken.IsCancellationRequested && limit.IsCancellationRequested) |
| 471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException($"Automation1 buffered run timeout: {commandTimeoutMs} ms.") |
| 471 | throw | 예외를 발생/전달합니다: throw new TimeoutException($"Automation1 buffered run timeout: {commandTimeoutMs} ms."); |
| 474 | catch | 지정 예외를 처리합니다: catch  |
| 476 | foreach | 컬렉션 요소를 순회합니다: foreach (var session in sessions) |
| 477 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: session.Stop() |
| 478 | throw | 예외를 발생/전달합니다: throw; |
| 481 | return | 호출자에게 값 또는 제어를 반환합니다: return "OK:SCRIPT:BUFFERED_RUN:SIMULATION"; |
| 484 | await | 비동기 완료를 기다립니다: await ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken).ConfigureAwait(false) |
| 484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken).ConfigureAwait(false) |
| 484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken) |
| 484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("&#124;", fields) |
| 484 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken).ConfigureAwait(false); |
| 484 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw(string.Join("&#124;", fields), number, cancellationToken).ConfigureAwait(false) |
| 485 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, "Buffered script run failed.") |
| 486 | return | 호출자에게 값 또는 제어를 반환합니다: return response; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RunBufferedScriptsCore"]
 N0["L385 if"]
 M -->|포함| N0
 N1["L392 foreach"]
 M -->|포함| N1
 N2["L396 if"]
 N1 -->|포함| N2
 N3["L413 foreach"]
 M -->|포함| N3
 N4["L418 if"]
 N3 -->|포함| N4
 N5["L425 else"]
 N4 -->|포함| N5
 N6["L432 if"]
 N3 -->|포함| N6
 N7["L441 foreach"]
 M -->|포함| N7
 N8["L444 if"]
 N7 -->|포함| N8
 N9["L454 if"]
 M -->|포함| N9
 N10["L457 try"]
 N9 -->|포함| N10
 N11["L459 foreach"]
 N10 -->|포함| N11
 N12["L463 if"]
 N10 -->|포함| N12
 N13["L465 try"]
 N10 -->|포함| N13
 N14["L469 catch"]
 N13 -->|포함| N14
 N15["L474 catch"]
 N10 -->|포함| N15
 N16["L476 foreach"]
 N15 -->|포함| N16
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateBufferedRunControllerFileName` · L489–493

[Drilling.Common/Automation/CAutomationManager.cs:489–493](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L489-L493)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CreateBufferedRunControllerFileName(Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM, string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| script | Drilling.Common.Automation.ST_BUFFERED_SCRIPT_RUN_ITEM | None | False /  |
| resolvedLocalScriptPath | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:423–423](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L423-L423) | CreateBufferedRunControllerFileName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 491 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 491 | CreateTaskScopedScriptFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateTaskScopedScriptFileName(int, string) · Drilling.Common/Automation/CAutomationManager.cs:495 |
| 492 | CreateControllerFileName | resolved | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1053 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(script.ScriptFileName) |
| 491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateTaskScopedScriptFileName(script.TaskIndex, resolvedLocalScriptPath) |
| 491 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(script.ScriptFileName) ? CreateTaskScopedScriptFileName(script.TaskIndex, resolvedLocalScriptPath) : script.ScriptFileName |
| 491 | local-declaration | 지역 변수를 선언합니다: var fileName = string.IsNullOrWhiteSpace(script.ScriptFileName) ? CreateTaskScopedScriptFileName(script.TaskIndex, resolvedLocalScriptPath) : script.ScriptFileName; |
| 491 | variable-initializer | 변수의 초기값을 지정합니다: fileName = string.IsNullOrWhiteSpace(script.ScriptFileName) ? CreateTaskScopedScriptFileName(script.TaskIndex, resolvedLocalScriptPath) : script.ScriptFileName |
| 492 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateControllerFileName(fileName, cancellationToken) |
| 492 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateControllerFileName(fileName, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateTaskScopedScriptFileName` · L495–504

[Drilling.Common/Automation/CAutomationManager.cs:495–504](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L495-L504)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CreateTaskScopedScriptFileName(int, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | False /  |
| localScriptPath | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:491–491](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L491-L491) | CreateTaskScopedScriptFileName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 497 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 498 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 503 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(localScriptPath) |
| 497 | local-declaration | 지역 변수를 선언합니다: var fileName = Path.GetFileName(localScriptPath); |
| 497 | variable-initializer | 변수의 초기값을 지정합니다: fileName = Path.GetFileName(localScriptPath) |
| 498 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(fileName) |
| 498 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(fileName)) |
| 500 | assignment | 값을 대상에 대입합니다: fileName = "PROCESS.ascript" |
| 503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 503 | return | 호출자에게 값 또는 제어를 반환합니다: return $"T{taskIndex.ToString(CultureInfo.InvariantCulture)}_{fileName}"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateTaskScopedScriptFileName"]
 N0["L498 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopTask` · L506–521

[Drilling.Common/Automation/CAutomationManager.cs:506–521](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L506-L521)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.StopTask(int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1109–1109](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1109-L1109) | StopTask | True |
| [Drilling.Common/Station/CStationProcess.cs:951–951](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L951-L951) | _automationManager.StopTask | True |
| [Drilling.Common/Station/CStationProcess.cs:1122–1122](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1122-L1122) | _automationManager.StopTask | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3831–3831](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3831-L3831) | _manager.automation.StopTask | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4573–4573](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4573-L4573) | _manager.automation.StopTask | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4911–4911](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4911-L4911) | _manager.automation.StopTask | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5417–5417](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5417-L5417) | _manager.automation.StopTask | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 508 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 509 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 511 | _stageSimulationTasks.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 513 | session.Stop | resolved | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Stop() · Drilling.Common/Automation/CAutomationManager.cs:1384 |
| 514 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 514 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 517 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 517 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 520 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 508 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 509 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 509 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 511 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationTasks.TryGetValue((number, taskIndex), out var session) |
| 511 | if | 조건에 따라 분기합니다: if (_stageSimulationTasks.TryGetValue((number, taskIndex), out var session)) |
| 513 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: session.Stop() |
| 514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult(CreateSimulationTaskStatus(taskIndex, session.State, session.File)) |
| 514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, session.State, session.File) |
| 514 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult(CreateSimulationTaskStatus(taskIndex, session.State, session.File)); |
| 517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult(CreateSimulationTaskStatus(taskIndex, "Idle")) |
| 517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, "Idle") |
| 517 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult(CreateSimulationTaskStatus(taskIndex, "Idle")); |
| 520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;STOP&#124;{taskIndex}", number, cancellationToken) |
| 520 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:SCRIPT&#124;STOP&#124;{taskIndex}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopTask"]
 N0["L509 if"]
 M -->|포함| N0
 N1["L511 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadTaskStatus` · L523–532

[Drilling.Common/Automation/CAutomationManager.cs:523–532](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L523-L532)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadTaskStatus(int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:44–44](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L44-L44) | _automation.ReadTaskStatus | True |
| [Drilling.Common/Station/CStationProcess.cs:896–896](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L896-L896) | _automationManager.ReadTaskStatus | True |
| [Drilling.Common/Station/CStationProcess.cs:985–985](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L985-L985) | _automationManager.ReadTaskStatus | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2010–2010](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2010-L2010) | _manager.automation.ReadTaskStatus | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3783–3783](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3783-L3783) | _manager.automation.ReadTaskStatus | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4478–4478](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4478-L4478) | _manager.automation.ReadTaskStatus | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5516–5516](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L5516-L5516) | _manager.automation.ReadTaskStatus | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 525 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 526 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 528 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 528 | _stageSimulationTasks.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 528 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 528 | CreateSimulationTaskStatus | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:593 |
| 531 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 525 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 526 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 526 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult(_stageSimulationTasks.TryGetValue((number, taskIndex), out var session) ? CreateSimulationTaskStatus(taskIndex, session.State, session.File) : CreateSimulationTaskStatus(taskIndex, "Idle")) |
| 528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationTasks.TryGetValue((number, taskIndex), out var session) |
| 528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, session.State, session.File) |
| 528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationTaskStatus(taskIndex, "Idle") |
| 528 | conditional-expression | 조건에 따라 결과식을 선택합니다: _stageSimulationTasks.TryGetValue((number, taskIndex), out var session) ? CreateSimulationTaskStatus(taskIndex, session.State, session.File) : CreateSimulationTaskStatus(taskIndex, "Idle") |
| 528 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult(_stageSimulationTasks.TryGetValue((number, taskIndex), out var session) ? CreateSimulationTaskStatus(taskIndex, session.State, session.File) : CreateSimulationTaskStatus(taskIndex, "Idle")); |
| 531 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:SCRIPT&#124;STATUS&#124;{taskIndex}", number, cancellationToken, suppressLog: true) |
| 531 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:SCRIPT&#124;STATUS&#124;{taskIndex}", number, cancellationToken, suppressLog: true); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadTaskStatus"]
 N0["L526 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadTaskLineStatus` · L534–543

[Drilling.Common/Automation/CAutomationManager.cs:534–543](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L534-L543)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadTaskLineStatus(int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:1036–1036](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1036-L1036) | _automationManager.ReadTaskLineStatus | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 536 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 537 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 539 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 539 | string.Join | resolved | string string.Join(string?, params System.ReadOnlySpan<string?>) |
| 539 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 542 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 536 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 537 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 537 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult(string.Join(":", "OK", "TASK_LINE", taskIndex.ToString(CultureInfo.InvariantCulture), "0")) |
| 539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(":", "OK", "TASK_LINE", taskIndex.ToString(CultureInfo.InvariantCulture), "0") |
| 539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 539 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult(string.Join(":", "OK", "TASK_LINE", taskIndex.ToString(CultureInfo.InvariantCulture), "0")); |
| 542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:TASK&#124;LINE_STATUS&#124;{taskIndex}", number, cancellationToken, suppressLog: true) |
| 542 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:TASK&#124;LINE_STATUS&#124;{taskIndex}", number, cancellationToken, suppressLog: true); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadTaskLineStatus"]
 N0["L537 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReleaseEncoderScaleFactor` · L545–552

[Drilling.Common/Automation/CAutomationManager.cs:545–552](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L545-L552)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReleaseEncoderScaleFactor(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| galvoAxis | string | None | False /  |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 547 | ResolveAeroScriptAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAeroScriptAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:785 |
| 548 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 549 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 549 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 550 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 550 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAeroScriptAxis(galvoAxis) |
| 547 | local-declaration | 지역 변수를 선언합니다: var axis = ResolveAeroScriptAxis(galvoAxis); |
| 547 | variable-initializer | 변수의 초기값을 지정합니다: axis = ResolveAeroScriptAxis(galvoAxis) |
| 548 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 549 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoEncoderScaleFactorSet({axis}, 0)", number, cancellationToken) |
| 549 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoEncoderScaleFactorSet({axis}, 0)", number, cancellationToken) |
| 549 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 549 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoEncoderScaleFactorSet({axis}, 0)", number, cancellationToken); |
| 549 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoEncoderScaleFactorSet({axis}, 0)", number, cancellationToken) |
| 550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"Automation1 encoder scale release failed. Axis={axis}, Task={taskIndex.ToString(CultureInfo.InvariantCulture)}.") |
| 550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 551 | return | 호출자에게 값 또는 제어를 반환합니다: return response; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetGalvoLaserOutput` · L554–562

[Drilling.Common/Automation/CAutomationManager.cs:554–562](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L554-L562)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.SetGalvoLaserOutput(string, bool, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| galvoAxis | string | None | False /  |
| isOn | bool | None | False /  |
| taskIndex | int | None | True / 1 |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:572–572](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L572-L572) | SetGalvoLaserOutput | True |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:364–364](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L364-L364) | Automation.SetGalvoLaserOutput | True |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:376–376](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L376-L376) | Automation.SetGalvoLaserOutput | True |
| [Drilling.Common/Station/CStationProcess.cs:4169–4169](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4169-L4169) | _automationManager.SetGalvoLaserOutput | True |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3663–3663](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3663-L3663) | manager.automation.SetGalvoLaserOutput | True |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3709–3709](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3709-L3709) | _defaultManager!.automation.SetGalvoLaserOutput | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4588–4588](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4588-L4588) | _manager.automation.SetGalvoLaserOutput | True |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4930–4930](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L4930-L4930) | _manager.automation.SetGalvoLaserOutput | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 556 | ResolveAeroScriptAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAeroScriptAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:785 |
| 557 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 559 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 559 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 560 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 560 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAeroScriptAxis(galvoAxis) |
| 556 | local-declaration | 지역 변수를 선언합니다: var axis = ResolveAeroScriptAxis(galvoAxis); |
| 556 | variable-initializer | 변수의 초기값을 지정합니다: axis = ResolveAeroScriptAxis(galvoAxis) |
| 557 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 558 | conditional-expression | 조건에 따라 결과식을 선택합니다: isOn ? "On" : "Off" |
| 558 | local-declaration | 지역 변수를 선언합니다: var output = isOn ? "On" : "Off"; |
| 558 | variable-initializer | 변수의 초기값을 지정합니다: output = isOn ? "On" : "Off" |
| 559 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoLaserOutput({axis}, GalvoLaser.{output})", number, cancellationToken) |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoLaserOutput({axis}, GalvoLaser.{output})", number, cancellationToken) |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 559 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoLaserOutput({axis}, GalvoLaser.{output})", number, cancellationToken); |
| 559 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex.ToString(CultureInfo.InvariantCulture)}&#124;GalvoLaserOutput({axis}, GalvoLaser.{output})", number, cancellationToken) |
| 560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"Automation1 laser output command failed. Axis={axis}, Output={output}, Task={taskIndex.ToString(CultureInfo.InvariantCulture)}.") |
| 560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 561 | return | 호출자에게 값 또는 제어를 반환합니다: return response; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ConfigurePowerMeasurement` · L565–583

[Drilling.Common/Automation/CAutomationManager.cs:565–583](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L565-L583)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.ConfigurePowerMeasurement(string, double, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

원본 XML 주석:

````xml
/// <summary>Continuous electrical duty at 10 V; Recipe frequency is kHz and pulse times are microseconds.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| galvoAxis | string | None | False /  |
| frequencyKhz | double | None | False /  |
| taskIndex | int | None | False /  |
| number | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:303–303](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L303-L303) | Automation.ConfigurePowerMeasurement | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 567 | ResolveAeroScriptAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAeroScriptAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:785 |
| 568 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 569 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 570 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 570 | nameof | unresolved | None |
| 571 | (1000.0 / frequencyKhz).ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 572 | SetGalvoLaserOutput(axis, false, taskIndex, number, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 572 | SetGalvoLaserOutput | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.SetGalvoLaserOutput(string, bool, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:554 |
| 580 | ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 580 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 581 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 567 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAeroScriptAxis(galvoAxis) |
| 567 | local-declaration | 지역 변수를 선언합니다: var axis = ResolveAeroScriptAxis(galvoAxis); |
| 567 | variable-initializer | 변수의 초기값을 지정합니다: axis = ResolveAeroScriptAxis(galvoAxis) |
| 568 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(taskIndex) |
| 569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(frequencyKhz) |
| 569 | if | 조건에 따라 분기합니다: if (!double.IsFinite(frequencyKhz) &#124;&#124; frequencyKhz <= 0) |
| 570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(frequencyKhz)) |
| 570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(frequencyKhz) |
| 570 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(frequencyKhz)); |
| 571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (1000.0 / frequencyKhz).ToString("R", CultureInfo.InvariantCulture) |
| 571 | local-declaration | 지역 변수를 선언합니다: var period = (1000.0 / frequencyKhz).ToString("R", CultureInfo.InvariantCulture); |
| 571 | variable-initializer | 변수의 초기값을 지정합니다: period = (1000.0 / frequencyKhz).ToString("R", CultureInfo.InvariantCulture) |
| 572 | await | 비동기 완료를 기다립니다: await SetGalvoLaserOutput(axis, false, taskIndex, number, token).ConfigureAwait(false) |
| 572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetGalvoLaserOutput(axis, false, taskIndex, number, token).ConfigureAwait(false) |
| 572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetGalvoLaserOutput(axis, false, taskIndex, number, token) |
| 573 | foreach | 컬렉션 요소를 순회합니다: foreach (var command in new[] { "SetupTaskDistanceUnits(DistanceUnits.Primary)", "SetupTaskTimeUnits(TimeUnits.Seconds)", "VelocityBlendingOff()", "SetupTaskWaitMode(WaitMode.Auto)", "SetupTaskTargetMode(TargetMode.Absolute)", $"G |
| 580 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token).ConfigureAwait(false) |
| 580 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token).ConfigureAwait(false) |
| 580 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token) |
| 580 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token).ConfigureAwait(false); |
| 580 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:COMMAND&#124;{taskIndex}&#124;{command}", number, token).ConfigureAwait(false) |
| 581 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"PowerMeasure configuration failed: {command}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ConfigurePowerMeasurement"]
 N0["L569 if"]
 M -->|포함| N0
 N1["L573 foreach"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateTaskIndex` · L585–591

[Drilling.Common/Automation/CAutomationManager.cs:585–591](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L585-L591)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L304-L304) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:326–326](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L326-L326) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:339–339](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L339-L339) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:395–395](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L395-L395) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:508–508](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L508-L508) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:525–525](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L525-L525) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:536–536](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L536-L536) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:548–548](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L548-L548) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:557–557](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L557-L557) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:568–568](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L568-L568) | ValidateTaskIndex | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1238–1238](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1238-L1238) | ValidateTaskIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 589 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, object?, string?) |
| 589 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 587 | if | 조건에 따라 분기합니다: if (taskIndex < 1) |
| 589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(taskIndex), taskIndex, "Automation1 task index must be 1 or greater.") |
| 589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(taskIndex) |
| 589 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(taskIndex), taskIndex, "Automation1 task index must be 1 or greater."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateTaskIndex"]
 N0["L587 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateSimulationTaskStatus` · L593–596

[Drilling.Common/Automation/CAutomationManager.cs:593–596](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L593-L596)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CreateSimulationTaskStatus(int, string, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| taskIndex | int | None | False /  |
| state | string | None | False /  |
| sourceFile | string | None | True / "" |
| errorMessage | string | None | True / "" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:309–309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L309-L309) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:330–330](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L330-L330) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:342–342](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L342-L342) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:514–514](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L514-L514) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:517–517](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L517-L517) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:528–528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L528-L528) | CreateSimulationTaskStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:528–528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L528-L528) | CreateSimulationTaskStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 595 | string.Join | resolved | string string.Join(string?, params System.ReadOnlySpan<string?>) |
| 595 | taskIndex.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 595 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(":", "OK", "TASK", taskIndex.ToString(CultureInfo.InvariantCulture), state, sourceFile, errorMessage) |
| 595 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: taskIndex.ToString(CultureInfo.InvariantCulture) |
| 595 | return | 호출자에게 값 또는 제어를 반환합니다: return string.Join(":", "OK", "TASK", taskIndex.ToString(CultureInfo.InvariantCulture), state, sourceFile, errorMessage); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteAxis` · L598–634

[Drilling.Common/Automation/CAutomationManager.cs:598–634](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L598-L634)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| command | string | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L188-L188) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L193-L193) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L198-L198) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L205-L205) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L212-L212) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:215–215](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L215-L215) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L216-L216) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:219–219](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L219-L219) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:224–224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L224-L224) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L229-L229) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:234–234](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L234-L234) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:239–239](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L239-L239) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L244-L244) | ExecuteAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:639–639](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L639-L639) | ExecuteAxis | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 600 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 601 | ResolveAutomationAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAutomationAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:779 |
| 602 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 604 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 605 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 606 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 609 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 611 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 612 | command.Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 616 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 616 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 617 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 618 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 619 | _simulationAxisPositions.AddOrUpdate | resolved | double System.Collections.Concurrent.ConcurrentDictionary<string, double>.AddOrUpdate(string, double, System.Func<string, double, double>) |
| 620 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 625 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 626 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 630 | Task.FromResult | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task.FromResult<string>(string) |
| 633 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 600 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 601 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAutomationAxis(axisName) |
| 601 | local-declaration | 지역 변수를 선언합니다: var automationAxis = ResolveAutomationAxis(axisName); |
| 601 | variable-initializer | 변수의 초기값을 지정합니다: automationAxis = ResolveAutomationAxis(axisName) |
| 602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 602 | if | 조건에 따라 분기합니다: if (IsSimul(number) && command is "SERVO_ON" or "SERVO_OFF") |
| 604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 605 | assignment | 값을 대상에 대입합니다: _simulationAxisAbleStates[CreateSimulationAxisKey(number, automationAxis)] = command == "SERVO_ON" |
| 605 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(number, automationAxis) |
| 606 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult($"OK:AXIS:{automationAxis}:{command}") |
| 606 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult($"OK:AXIS:{automationAxis}:{command}"); |
| 609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 609 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 612 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.Split(':') |
| 612 | local-declaration | 지역 변수를 선언합니다: var parts = command.Split(':'); |
| 612 | variable-initializer | 변수의 초기값을 지정합니다: parts = command.Split(':') |
| 613 | local-declaration | 지역 변수를 선언합니다: var operation = parts[0]; |
| 613 | variable-initializer | 변수의 초기값을 지정합니다: operation = parts[0] |
| 614 | if | 조건에 따라 분기합니다: if (operation is "MANUAL_ABS" or "MANUAL_REL" or "MOVE_ABS" or "MOVE_REL") |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(parts[1], NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 616 | if | 조건에 따라 분기합니다: if (parts.Length < 2 &#124;&#124; !double.TryParse(parts[1], NumberStyles.Float, CultureInfo.InvariantCulture, out var value) &#124;&#124; !double.IsFinite(value)) |
| 617 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Simulated axis target is invalid.") |
| 617 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Simulated axis target is invalid."); |
| 618 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(number, automationAxis) |
| 618 | local-declaration | 지역 변수를 선언합니다: var key = CreateSimulationAxisKey(number, automationAxis); |
| 618 | variable-initializer | 변수의 초기값을 지정합니다: key = CreateSimulationAxisKey(number, automationAxis) |
| 619 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationAxisPositions.AddOrUpdate(key, value, (_, previous) => operation is "MANUAL_REL" or "MOVE_REL" ? previous + value : value) |
| 619 | conditional-expression | 조건에 따라 결과식을 선택합니다: operation is "MANUAL_REL" or "MOVE_REL" ? previous + value : value |
| 620 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult($"OK:AXIS:{automationAxis}:{operation}") |
| 620 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult($"OK:AXIS:{automationAxis}:{operation}"); |
| 623 | if | 조건에 따라 분기합니다: if (operation is "HOME" or "HOME_ASYNC") |
| 625 | assignment | 값을 대상에 대입합니다: _simulationAxisPositions[CreateSimulationAxisKey(number, automationAxis)] = 0 |
| 625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(number, automationAxis) |
| 626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult($"OK:AXIS:{automationAxis}:{operation}") |
| 626 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult($"OK:AXIS:{automationAxis}:{operation}"); |
| 629 | if | 조건에 따라 분기합니다: if (operation is "STOP" or "ABORT_MOTION" or "JOG_STOP") |
| 630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult($"OK:AXIS:{automationAxis}:{operation}") |
| 630 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.FromResult($"OK:AXIS:{automationAxis}:{operation}"); |
| 633 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:AXIS:{automationAxis}:{command}", number, cancellationToken) |
| 633 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:AXIS:{automationAxis}:{command}", number, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ExecuteAxis"]
 N0["L602 if"]
 M -->|포함| N0
 N1["L609 if"]
 M -->|포함| N1
 N2["L614 if"]
 N1 -->|포함| N2
 N3["L616 if"]
 N2 -->|포함| N3
 N4["L623 if"]
 N1 -->|포함| N4
 N5["L629 if"]
 N1 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxis` · L636–640

[Drilling.Common/Automation/CAutomationManager.cs:636–640](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L636-L640)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxis(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:262–262](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L262-L262) | ReadAxis | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 638 | ValidateAnalogInputNo | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) · Drilling.Common/Automation/CAutomationManager.cs:669 |
| 639 | ExecuteAxis | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteAxis(string, string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:598 |
| 639 | analogInputNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 638 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAnalogInputNo(analogInputNo) |
| 639 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteAxis(axisName, $"READ:{analogInputNo.ToString(CultureInfo.InvariantCulture)}", number, cancellationToken) |
| 639 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: analogInputNo.ToString(CultureInfo.InvariantCulture) |
| 639 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteAxis(axisName, $"READ:{analogInputNo.ToString(CultureInfo.InvariantCulture)}", number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisByName` · L642–645

[Drilling.Common/Automation/CAutomationManager.cs:642–645](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L642-L645)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L282-L282) | ReadAxisByName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 644 | ReadAxisByName | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:647 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(axisName, number, analogInputNo, true, cancellationToken) |
| 644 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadAxisByName(axisName, number, analogInputNo, true, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisByName` · L647–650

[Drilling.Common/Automation/CAutomationManager.cs:647–650](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L647-L650)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| readExtendedStatus | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:644–644](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L644-L644) | ReadAxisByName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 649 | ReadAxisByName | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:652 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadAxisByName(axisName, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: false) |
| 649 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadAxisByName(axisName, number, analogInputNo, readExtendedStatus, cancellationToken, suppressLog: false); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAxisByName` · L652–658

[Drilling.Common/Automation/CAutomationManager.cs:652–658](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L652-L658)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ReadAxisByName(string, int, int, bool, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| number | int | None | False /  |
| analogInputNo | int | None | False /  |
| readExtendedStatus | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:297–297](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L297-L297) | ReadAxisByName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:649–649](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L649-L649) | ReadAxisByName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 654 | ValidateAnalogInputNo | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) · Drilling.Common/Automation/CAutomationManager.cs:669 |
| 655 | ValidateAxisNameOnly | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) · Drilling.Common/Automation/CAutomationManager.cs:660 |
| 657 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 657 | axisName.Trim | resolved | string string.Trim() |
| 657 | analogInputNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 654 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAnalogInputNo(analogInputNo) |
| 655 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAxisNameOnly(axisName) |
| 656 | conditional-expression | 조건에 따라 결과식을 선택합니다: readExtendedStatus ? "FULL" : "BASIC" |
| 656 | local-declaration | 지역 변수를 선언합니다: var statusMode = readExtendedStatus ? "FULL" : "BASIC"; |
| 656 | variable-initializer | 변수의 초기값을 지정합니다: statusMode = readExtendedStatus ? "FULL" : "BASIC" |
| 657 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:AXIS:{axisName.Trim()}:READ:{analogInputNo.ToString(CultureInfo.InvariantCulture)}:{statusMode}", number, cancellationToken, suppressLog) |
| 657 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 657 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: analogInputNo.ToString(CultureInfo.InvariantCulture) |
| 657 | return | 호출자에게 값 또는 제어를 반환합니다: return ExecuteRaw($"AUTOMATION1:AXIS:{axisName.Trim()}:READ:{analogInputNo.ToString(CultureInfo.InvariantCulture)}:{statusMode}", number, cancellationToken, suppressLog); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateAxisNameOnly` · L660–667

[Drilling.Common/Automation/CAutomationManager.cs:660–667](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L660-L667)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L276-L276) | ValidateAxisNameOnly | False |
| [Drilling.Common/Automation/CAutomationManager.cs:291–291](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L291-L291) | ValidateAxisNameOnly | False |
| [Drilling.Common/Automation/CAutomationManager.cs:655–655](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L655-L655) | ValidateAxisNameOnly | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1136–1136](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1136-L1136) | ValidateAxisNameOnly | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1148–1148](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1148-L1148) | ValidateAxisNameOnly | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 662 | axisName.Trim | resolved | string string.Trim() |
| 663 | IsAxisNameOnlyIdentifier | resolved | bool Drilling.Common.Automation.CAutomationManager.IsAxisNameOnlyIdentifier(string) · Drilling.Common/Automation/CAutomationManager.cs:817 |
| 665 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 662 | local-declaration | 지역 변수를 선언합니다: var normalized = axisName.Trim(); |
| 662 | variable-initializer | 변수의 초기값을 지정합니다: normalized = axisName.Trim() |
| 663 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsAxisNameOnlyIdentifier(normalized) |
| 663 | if | 조건에 따라 분기합니다: if (!IsAxisNameOnlyIdentifier(normalized)) |
| 665 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 axis must be configured by axis name, not axis number: {axisName}") |
| 665 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 axis must be configured by axis name, not axis number: {axisName}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateAxisNameOnly"]
 N0["L663 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateAnalogInputNo` · L669–675

[Drilling.Common/Automation/CAutomationManager.cs:669–675](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L669-L675)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.ValidateAnalogInputNo(int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| analogInputNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:255–255](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L255-L255) | ValidateAnalogInputNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:274–274](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L274-L274) | ValidateAnalogInputNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:289–289](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L289-L289) | ValidateAnalogInputNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:638–638](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L638-L638) | ValidateAnalogInputNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:654–654](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L654-L654) | ValidateAnalogInputNo | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 673 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, object?, string?) |
| 673 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 671 | if | 조건에 따라 분기합니다: if (analogInputNo < 0 &#124;&#124; analogInputNo > 3) |
| 673 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(analogInputNo), analogInputNo, "Automation1 analog input number must be between 0 and 3.") |
| 673 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(analogInputNo) |
| 673 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(analogInputNo), analogInputNo, "Automation1 analog input number must be between 0 and 3."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateAnalogInputNo"]
 N0["L671 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateBufferedRunScriptFile` · L677–700

[Drilling.Common/Automation/CAutomationManager.cs:677–700](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L677-L700)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.ValidateBufferedRunScriptFile(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| localScriptPath | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:422–422](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L422-L422) | ValidateBufferedRunScriptFile | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 679 | File.Exists | unresolved | None |
| 681 | new FileNotFoundException | resolved | System.IO.FileNotFoundException.FileNotFoundException(string?, string?) |
| 685 | File.ReadLines | unresolved | None |
| 688 | rawLine.Trim | unresolved | None |
| 689 | string.IsNullOrWhiteSpace | candidate | OverloadResolutionFailure |
| 689 | line.StartsWith | unresolved | None |
| 694 | GetAeroScriptToken | candidate | OverloadResolutionFailure |
| 695 | IsBufferedRunBlockedToken | resolved | bool Drilling.Common.Automation.CAutomationManager.IsBufferedRunBlockedToken(string) · Drilling.Common/Automation/CAutomationManager.cs:721 |
| 695 | token.StartsWith | resolved | bool string.StartsWith(char) |
| 695 | IsBufferedGlobalIntegerAssignment | candidate | OverloadResolutionFailure |
| 697 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 697 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 679 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: File.Exists(localScriptPath) |
| 679 | if | 조건에 따라 분기합니다: if (!File.Exists(localScriptPath)) |
| 681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FileNotFoundException("Buffered run script file was not found.", localScriptPath) |
| 681 | throw | 예외를 발생/전달합니다: throw new FileNotFoundException("Buffered run script file was not found.", localScriptPath); |
| 684 | local-declaration | 지역 변수를 선언합니다: var lineNo = 0; |
| 684 | variable-initializer | 변수의 초기값을 지정합니다: lineNo = 0 |
| 685 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: File.ReadLines(localScriptPath) |
| 685 | foreach | 컬렉션 요소를 순회합니다: foreach (var rawLine in File.ReadLines(localScriptPath)) |
| 688 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rawLine.Trim() |
| 688 | local-declaration | 지역 변수를 선언합니다: var line = rawLine.Trim(); |
| 688 | variable-initializer | 변수의 초기값을 지정합니다: line = rawLine.Trim() |
| 689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(line) |
| 689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.StartsWith("//", StringComparison.Ordinal) |
| 689 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(line) &#124;&#124; line.StartsWith("//", StringComparison.Ordinal)) |
| 691 | continue | 다음 반복으로 진행합니다: continue; |
| 694 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetAeroScriptToken(line) |
| 694 | local-declaration | 지역 변수를 선언합니다: var token = GetAeroScriptToken(line); |
| 694 | variable-initializer | 변수의 초기값을 지정합니다: token = GetAeroScriptToken(line) |
| 695 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsBufferedRunBlockedToken(token) |
| 695 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.StartsWith('$') |
| 695 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsBufferedGlobalIntegerAssignment(line) |
| 695 | if | 조건에 따라 분기합니다: if (IsBufferedRunBlockedToken(token) &#124;&#124; (token.StartsWith('$') && !IsBufferedGlobalIntegerAssignment(line))) |
| 697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"Buffered run script validation failed. {Path.GetFileName(localScriptPath)} line {lineNo} cannot be queued: {line}") |
| 697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(localScriptPath) |
| 697 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"Buffered run script validation failed. {Path.GetFileName(localScriptPath)} line {lineNo} cannot be queued: {line}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateBufferedRunScriptFile"]
 N0["L679 if"]
 M -->|포함| N0
 N1["L685 foreach"]
 M -->|포함| N1
 N2["L689 if"]
 N1 -->|포함| N2
 N3["L695 if"]
 N1 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetAeroScriptToken` · L702–706

[Drilling.Common/Automation/CAutomationManager.cs:702–706](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L702-L706)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.GetAeroScriptToken(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| line | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 704 | line.IndexOfAny | resolved | int string.IndexOfAny(char[]) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 704 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.IndexOfAny(['(', ' ', '\t']) |
| 704 | local-declaration | 지역 변수를 선언합니다: var endIndex = line.IndexOfAny(['(', ' ', '\t']); |
| 704 | variable-initializer | 변수의 초기값을 지정합니다: endIndex = line.IndexOfAny(['(', ' ', '\t']) |
| 705 | conditional-expression | 조건에 따라 결과식을 선택합니다: endIndex <= 0 ? line : line[..endIndex] |
| 705 | return | 호출자에게 값 또는 제어를 반환합니다: return endIndex <= 0 ? line : line[..endIndex]; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsBufferedGlobalIntegerAssignment` · L709–719

[Drilling.Common/Automation/CAutomationManager.cs:709–719](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L709-L719)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsBufferedGlobalIntegerAssignment(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| line | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 712 | line.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 714 | line.IndexOf | resolved | int string.IndexOf(char, int) |
| 715 | int.TryParse | resolved | bool int.TryParse(System.ReadOnlySpan<char>, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 715 | line.AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int, int) |
| 717 | line[(close + 1)..].Trim | resolved | string string.Trim() |
| 718 | assignment.StartsWith | resolved | bool string.StartsWith(char) |
| 718 | long.TryParse | resolved | bool long.TryParse(System.ReadOnlySpan<char>, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |
| 718 | assignment.AsSpan(1).Trim | resolved | System.ReadOnlySpan<char> System.ReadOnlySpan<char>.Trim() |
| 718 | assignment.AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 711 | local-declaration | 지역 변수를 선언합니다: const string prefix = "$iglobal["; |
| 711 | variable-initializer | 변수의 초기값을 지정합니다: prefix = "$iglobal[" |
| 712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.StartsWith(prefix, StringComparison.Ordinal) |
| 712 | if | 조건에 따라 분기합니다: if (!line.StartsWith(prefix, StringComparison.Ordinal)) |
| 713 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 714 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.IndexOf(']', prefix.Length) |
| 714 | local-declaration | 지역 변수를 선언합니다: var close = line.IndexOf(']', prefix.Length); |
| 714 | variable-initializer | 변수의 초기값을 지정합니다: close = line.IndexOf(']', prefix.Length) |
| 715 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(line.AsSpan(prefix.Length, close - prefix.Length), NumberStyles.None, CultureInfo.InvariantCulture, out var index) |
| 715 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.AsSpan(prefix.Length, close - prefix.Length) |
| 715 | if | 조건에 따라 분기합니다: if (close < 0 &#124;&#124; !int.TryParse(line.AsSpan(prefix.Length, close - prefix.Length), NumberStyles.None, CultureInfo.InvariantCulture, out var index) &#124;&#124; index < 0) |
| 716 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 717 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line[(close + 1)..].Trim() |
| 717 | local-declaration | 지역 변수를 선언합니다: var assignment = line[(close + 1)..].Trim(); |
| 717 | variable-initializer | 변수의 초기값을 지정합니다: assignment = line[(close + 1)..].Trim() |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: assignment.StartsWith('=') |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(assignment.AsSpan(1).Trim(), NumberStyles.None, CultureInfo.InvariantCulture, out var value) |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: assignment.AsSpan(1).Trim() |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: assignment.AsSpan(1) |
| 718 | return | 호출자에게 값 또는 제어를 반환합니다: return assignment.StartsWith('=') && long.TryParse(assignment.AsSpan(1).Trim(), NumberStyles.None, CultureInfo.InvariantCulture, out var value) && value >= 0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsBufferedGlobalIntegerAssignment"]
 N0["L712 if"]
 M -->|포함| N0
 N1["L715 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsBufferedRunBlockedToken` · L721–724

[Drilling.Common/Automation/CAutomationManager.cs:721–724](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L721-L724)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsBufferedRunBlockedToken(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:695–695](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L695-L695) | IsBufferedRunBlockedToken | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 723 | token.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("program", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("end", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("var", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("global", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("if", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("else", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("elseif", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("endif", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("while", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("endwhile", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("for", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("endfor", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("repeat", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("endrepeat", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("function", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("endfunction", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("return", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("break", StringComparison.OrdinalIgnoreCase) |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.Equals("continue", StringComparison.OrdinalIgnoreCase) |
| 723 | return | 호출자에게 값 또는 제어를 반환합니다: return token.Equals("program", StringComparison.OrdinalIgnoreCase) &#124;&#124; token.Equals("end", StringComparison.OrdinalIgnoreCase) &#124;&#124; token.Equals("var", StringComparison.OrdinalIgnoreCase) &#124;&#124; token.Equals("global", StringComparison.Or |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnsureAutomationResponseSucceeded` · L726–734

[Drilling.Common/Automation/CAutomationManager.cs:726–734](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L726-L734)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| response | string | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:447–447](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L447-L447) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:485–485](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L485-L485) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:550–550](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L550-L550) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:560–560](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L560-L560) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:581–581](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L581-L581) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1101–1101](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1101-L1101) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1110–1110](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1110-L1110) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1154–1154](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1154-L1154) | EnsureAutomationResponseSucceeded | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1248–1248](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1248-L1248) | EnsureAutomationResponseSucceeded | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 728 | IsAutomationSuccessResponse | resolved | bool Drilling.Common.Automation.CAutomationManager.IsAutomationSuccessResponse(string) · Drilling.Common/Automation/CAutomationManager.cs:736 |
| 733 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 733 | FormatAutomationResponse | resolved | string Drilling.Common.Automation.CAutomationManager.FormatAutomationResponse(string) · Drilling.Common/Automation/CAutomationManager.cs:752 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 728 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsAutomationSuccessResponse(response) |
| 728 | if | 조건에 따라 분기합니다: if (IsAutomationSuccessResponse(response)) |
| 730 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{message} Response={FormatAutomationResponse(response)}") |
| 733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatAutomationResponse(response) |
| 733 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{message} Response={FormatAutomationResponse(response)}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EnsureAutomationResponseSucceeded"]
 N0["L728 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsAutomationSuccessResponse` · L736–750

[Drilling.Common/Automation/CAutomationManager.cs:736–750](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L736-L750)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsAutomationSuccessResponse(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| response | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:728–728](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L728-L728) | IsAutomationSuccessResponse | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 738 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 743 | response.Trim | resolved | string string.Trim() |
| 744 | trimmed.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 744 | trimmed.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 749 | trimmed.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 749 | trimmed.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 738 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(response) |
| 738 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(response)) |
| 740 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Trim() |
| 743 | local-declaration | 지역 변수를 선언합니다: var trimmed = response.Trim(); |
| 743 | variable-initializer | 변수의 초기값을 지정합니다: trimmed = response.Trim() |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.StartsWith("OK", StringComparison.OrdinalIgnoreCase) |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.StartsWith("ACK", StringComparison.OrdinalIgnoreCase) |
| 744 | if | 조건에 따라 분기합니다: if (trimmed.StartsWith("OK", StringComparison.OrdinalIgnoreCase) &#124;&#124; trimmed.StartsWith("ACK", StringComparison.OrdinalIgnoreCase)) |
| 746 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.StartsWith("SIM:", StringComparison.OrdinalIgnoreCase) |
| 749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.EndsWith(":OK", StringComparison.OrdinalIgnoreCase) |
| 749 | return | 호출자에게 값 또는 제어를 반환합니다: return trimmed.StartsWith("SIM:", StringComparison.OrdinalIgnoreCase) && trimmed.EndsWith(":OK", StringComparison.OrdinalIgnoreCase); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsAutomationSuccessResponse"]
 N0["L738 if"]
 M -->|포함| N0
 N1["L744 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatAutomationResponse` · L752–761

[Drilling.Common/Automation/CAutomationManager.cs:752–761](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L752-L761)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.FormatAutomationResponse(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| response | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:733–733](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L733-L733) | FormatAutomationResponse | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 754 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 759 | FormatAutomationErrorResponse | resolved | string Drilling.Common.Automation.CAutomationManager.FormatAutomationErrorResponse(string) · Drilling.Common/Automation/CAutomationManager.cs:763 |
| 760 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 760 | response.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 754 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(response) |
| 754 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(response)) |
| 756 | return | 호출자에게 값 또는 제어를 반환합니다: return "<empty>"; |
| 759 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatAutomationErrorResponse(response) |
| 759 | local-declaration | 지역 변수를 선언합니다: var automationError = FormatAutomationErrorResponse(response); |
| 759 | variable-initializer | 변수의 초기값을 지정합니다: automationError = FormatAutomationErrorResponse(response) |
| 760 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(automationError) |
| 760 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Trim() |
| 760 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(automationError) ? response.Trim() : automationError |
| 760 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(automationError) ? response.Trim() : automationError; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FormatAutomationResponse"]
 N0["L754 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatAutomationErrorResponse` · L763–777

[Drilling.Common/Automation/CAutomationManager.cs:763–777](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L763-L777)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.FormatAutomationErrorResponse(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| response | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:759–759](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L759-L759) | FormatAutomationErrorResponse | False |
| [Drilling.Common/Automation/CAutomationManager.cs:881–881](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L881-L881) | FormatAutomationErrorResponse | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 765 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 770 | response.Trim().Split | resolved | string[] string.Split(char, int, System.StringSplitOptions) |
| 770 | response.Trim | resolved | string string.Trim() |
| 771 | fields[0].Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 771 | fields[1].Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 765 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(response) |
| 765 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(response)) |
| 767 | return | 호출자에게 값 또는 제어를 반환합니다: return ""; |
| 770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Trim().Split(':', 4, StringSplitOptions.TrimEntries) |
| 770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Trim() |
| 770 | local-declaration | 지역 변수를 선언합니다: var fields = response.Trim().Split(':', 4, StringSplitOptions.TrimEntries); |
| 770 | variable-initializer | 변수의 초기값을 지정합니다: fields = response.Trim().Split(':', 4, StringSplitOptions.TrimEntries) |
| 771 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields[0].Equals("ERROR", StringComparison.OrdinalIgnoreCase) |
| 771 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields[1].Equals("AUTOMATION1", StringComparison.OrdinalIgnoreCase) |
| 771 | if | 조건에 따라 분기합니다: if (fields.Length >= 4 && fields[0].Equals("ERROR", StringComparison.OrdinalIgnoreCase) && fields[1].Equals("AUTOMATION1", StringComparison.OrdinalIgnoreCase)) |
| 773 | return | 호출자에게 값 또는 제어를 반환합니다: return $"{fields[2]}: {fields[3]}"; |
| 776 | return | 호출자에게 값 또는 제어를 반환합니다: return ""; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FormatAutomationErrorResponse"]
 N0["L765 if"]
 M -->|포함| N0
 N1["L771 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveAutomationAxis` · L779–783

[Drilling.Common/Automation/CAutomationManager.cs:779–783](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L779-L783)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ResolveAutomationAxis(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:601–601](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L601-L601) | ResolveAutomationAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:842–842](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L842-L842) | ResolveAutomationAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:843–843](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L843-L843) | ResolveAutomationAxis | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 781 | axisName.Trim | resolved | string string.Trim() |
| 782 | AxisNoMap.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, int>.TryGetValue(string, out int) |
| 782 | axisNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 781 | local-declaration | 지역 변수를 선언합니다: var normalized = axisName.Trim(); |
| 781 | variable-initializer | 변수의 초기값을 지정합니다: normalized = axisName.Trim() |
| 782 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AxisNoMap.TryGetValue(normalized, out var axisNo) |
| 782 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNo.ToString(CultureInfo.InvariantCulture) |
| 782 | conditional-expression | 조건에 따라 결과식을 선택합니다: AxisNoMap.TryGetValue(normalized, out var axisNo) ? axisNo.ToString(CultureInfo.InvariantCulture) : normalized |
| 782 | return | 호출자에게 값 또는 제어를 반환합니다: return AxisNoMap.TryGetValue(normalized, out var axisNo) ? axisNo.ToString(CultureInfo.InvariantCulture) : normalized; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveAeroScriptAxis` · L785–795

[Drilling.Common/Automation/CAutomationManager.cs:785–795](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L785-L795)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ResolveAeroScriptAxis(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:547–547](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L547-L547) | ResolveAeroScriptAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:556–556](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L556-L556) | ResolveAeroScriptAxis | False |
| [Drilling.Common/Automation/CAutomationManager.cs:567–567](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L567-L567) | ResolveAeroScriptAxis | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 787 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 788 | axisName.Trim | resolved | string string.Trim() |
| 789 | IsAeroScriptAxisIdentifier | resolved | bool Drilling.Common.Automation.CAutomationManager.IsAeroScriptAxisIdentifier(string) · Drilling.Common/Automation/CAutomationManager.cs:797 |
| 791 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 794 | AxisNoMap.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, int>.TryGetValue(string, out int) |
| 794 | axisNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 787 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 788 | local-declaration | 지역 변수를 선언합니다: var normalized = axisName.Trim(); |
| 788 | variable-initializer | 변수의 초기값을 지정합니다: normalized = axisName.Trim() |
| 789 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsAeroScriptAxisIdentifier(normalized) |
| 789 | if | 조건에 따라 분기합니다: if (!IsAeroScriptAxisIdentifier(normalized)) |
| 791 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Automation1 axis name must be a numeric axis number or start with a letter and use letters, numbers, and underscores only: {axisName}") |
| 791 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Automation1 axis name must be a numeric axis number or start with a letter and use letters, numbers, and underscores only: {axisName}"); |
| 794 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AxisNoMap.TryGetValue(normalized, out var axisNo) |
| 794 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNo.ToString(CultureInfo.InvariantCulture) |
| 794 | conditional-expression | 조건에 따라 결과식을 선택합니다: AxisNoMap.TryGetValue(normalized, out var axisNo) ? axisNo.ToString(CultureInfo.InvariantCulture) : normalized |
| 794 | return | 호출자에게 값 또는 제어를 반환합니다: return AxisNoMap.TryGetValue(normalized, out var axisNo) ? axisNo.ToString(CultureInfo.InvariantCulture) : normalized; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResolveAeroScriptAxis"]
 N0["L789 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsAeroScriptAxisIdentifier` · L797–815

[Drilling.Common/Automation/CAutomationManager.cs:797–815](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L797-L815)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsAeroScriptAxisIdentifier(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:789–789](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L789-L789) | IsAeroScriptAxisIdentifier | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1224–1224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1224-L1224) | IsAeroScriptAxisIdentifier | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 804 | value.All | resolved | bool System.Collections.Generic.IEnumerable<char>.All<char>(System.Func<char, bool>) |
| 814 | char.IsAsciiLetter | resolved | bool char.IsAsciiLetter(char) |
| 814 | value.All | resolved | bool System.Collections.Generic.IEnumerable<char>.All<char>(System.Func<char, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 799 | if | 조건에 따라 분기합니다: if (value.Length == 0) |
| 801 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 804 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.All(char.IsAsciiDigit) |
| 804 | if | 조건에 따라 분기합니다: if (value.All(char.IsAsciiDigit)) |
| 806 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 814 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetter(value[0]) |
| 814 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.All(MatchesItem) |
| 814 | return | 호출자에게 값 또는 제어를 반환합니다: return char.IsAsciiLetter(value[0]) && value.All(MatchesItem); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsAeroScriptAxisIdentifier"]
 N0["L799 if"]
 M -->|포함| N0
 N1["L804 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L809–812

[Drilling.Common/Automation/CAutomationManager.cs:809–812](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L809-L812)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(char) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| character | char | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 811 | char.IsAsciiLetter | resolved | bool char.IsAsciiLetter(char) |
| 811 | char.IsAsciiDigit | resolved | bool char.IsAsciiDigit(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetter(character) |
| 811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiDigit(character) |
| 811 | return | 호출자에게 값 또는 제어를 반환합니다: return char.IsAsciiLetter(character) &#124;&#124; char.IsAsciiDigit(character) &#124;&#124; character == '_'; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsAxisNameOnlyIdentifier` · L817–838

[Drilling.Common/Automation/CAutomationManager.cs:817–838](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L817-L838)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsAxisNameOnlyIdentifier(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:663–663](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L663-L663) | IsAxisNameOnlyIdentifier | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 819 | char.IsAsciiDigit | resolved | bool char.IsAsciiDigit(char) |
| 824 | char.IsAsciiLetter | resolved | bool char.IsAsciiLetter(char) |
| 831 | char.IsAsciiLetter | resolved | bool char.IsAsciiLetter(char) |
| 831 | char.IsAsciiDigit | resolved | bool char.IsAsciiDigit(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 819 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiDigit(value[0]) |
| 819 | if | 조건에 따라 분기합니다: if (value.Length == 0 &#124;&#124; char.IsAsciiDigit(value[0])) |
| 821 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 824 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetter(value[0]) |
| 824 | if | 조건에 따라 분기합니다: if (!char.IsAsciiLetter(value[0])) |
| 826 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 829 | foreach | 컬렉션 요소를 순회합니다: foreach (var character in value) |
| 831 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetter(character) |
| 831 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiDigit(character) |
| 831 | if | 조건에 따라 분기합니다: if (!char.IsAsciiLetter(character) && !char.IsAsciiDigit(character) && character != '_') |
| 833 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 837 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsAxisNameOnlyIdentifier"]
 N0["L819 if"]
 M -->|포함| N0
 N1["L824 if"]
 M -->|포함| N1
 N2["L829 foreach"]
 M -->|포함| N2
 N3["L831 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateSimulationAxisStatus` · L840–867

[Drilling.Common/Automation/CAutomationManager.cs:840–867](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L840-L867)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisStatus(int, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| automationNo | int | None | False /  |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L259-L259) | CreateSimulationAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:279–279](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L279-L279) | CreateSimulationAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:294–294](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L294-L294) | CreateSimulationAxisStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 842 | _simulationAxisAbleStates.GetOrAdd | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<string, bool>.GetOrAdd(string, bool) |
| 842 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 842 | ResolveAutomationAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAutomationAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:779 |
| 843 | _simulationAxisPositions.GetValueOrDefault | resolved | double System.Collections.Generic.IReadOnlyDictionary<string, double>.GetValueOrDefault<string, double>(string) |
| 843 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 843 | ResolveAutomationAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveAutomationAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:779 |
| 844 | new ST_AUTOMATION_AXIS_STATUS | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.ST_AUTOMATION_AXIS_STATUS(int, string, int?, double, double, double, double, double, double, bool, bool, bool, string, string, string, string, System.DateTimeOffset) · Drilling.Common/Automation/CAutomationManager.cs:1508 |
| 847 | TryGetAxisNo | resolved | int? Drilling.Common.Automation.CAutomationManager.TryGetAxisNo(string) · Drilling.Common/Automation/CAutomationManager.cs:951 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationAxisAbleStates.GetOrAdd(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName)), true) |
| 842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName)) |
| 842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAutomationAxis(axisName) |
| 842 | local-declaration | 지역 변수를 선언합니다: var able = _simulationAxisAbleStates.GetOrAdd(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName)), true); |
| 842 | variable-initializer | 변수의 초기값을 지정합니다: able = _simulationAxisAbleStates.GetOrAdd(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName)), true) |
| 843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationAxisPositions.GetValueOrDefault(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName))) |
| 843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName)) |
| 843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveAutomationAxis(axisName) |
| 843 | local-declaration | 지역 변수를 선언합니다: var position = _simulationAxisPositions.GetValueOrDefault(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName))); |
| 843 | variable-initializer | 변수의 초기값을 지정합니다: position = _simulationAxisPositions.GetValueOrDefault(CreateSimulationAxisKey(automationNo, ResolveAutomationAxis(axisName))) |
| 844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_AUTOMATION_AXIS_STATUS( automationNo, axisName, TryGetAxisNo(axisName), position, position, 0.0, 0.0, 0.0, 20.0, able, true, false, able ? "Enabled" : "Disabled", "Homed", "0", $"SIM:AUTOMATION1:AXIS:{axisName}:RE… |
| 844 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_AUTOMATION_AXIS_STATUS( automationNo, axisName, TryGetAxisNo(axisName), position, position, 0.0, 0.0, 0.0, 20.0, able, true, false, able ? "Enabled" : "Disabled", "Homed", "0", $"SIM:AUTOMATION1:AXIS:{axisName}:READ: |
| 847 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetAxisNo(axisName) |
| 857 | conditional-expression | 조건에 따라 결과식을 선택합니다: able ? "Enabled" : "Disabled" |
| 864 | assignment | 값을 대상에 대입합니다: IsInPosition = true |
| 865 | assignment | 값을 대상에 대입합니다: IsMotionDone = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateSimulationAxisKey` · L869–872

[Drilling.Common/Automation/CAutomationManager.cs:869–872](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L869-L872)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| automationNo | int | None | False /  |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:605–605](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L605-L605) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:618–618](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L618-L618) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:625–625](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L625-L625) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:842–842](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L842-L842) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:843–843](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L843-L843) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1173–1173](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1173-L1173) | CreateSimulationAxisKey | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1202–1202](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1202-L1202) | CreateSimulationAxisKey | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 871 | automationNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 871 | axisName.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 871 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automationNo.ToString(CultureInfo.InvariantCulture) |
| 871 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 871 | return | 호출자에게 값 또는 제어를 반환합니다: return $"{automationNo.ToString(CultureInfo.InvariantCulture)}:{axisName.Trim()}"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseAxisStatus` · L874–927

[Drilling.Common/Automation/CAutomationManager.cs:874–927](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L874-L927)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.ParseAxisStatus(int, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| automationNo | int | None | False /  |
| requestedAxis | string | None | False /  |
| response | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:263–263](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L263-L263) | ParseAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:283–283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L283-L283) | ParseAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:298–298](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L298-L298) | ParseAxisStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 876 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 878 | CreateErrorAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateErrorAxisStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:946 |
| 881 | FormatAutomationErrorResponse | resolved | string Drilling.Common.Automation.CAutomationManager.FormatAutomationErrorResponse(string) · Drilling.Common/Automation/CAutomationManager.cs:763 |
| 882 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 884 | CreateErrorAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateErrorAxisStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:946 |
| 887 | response.Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 888 | tokens[0].Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 888 | tokens[1].Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 890 | CreateErrorAxisStatus | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateErrorAxisStatus(int, string, string, string) · Drilling.Common/Automation/CAutomationManager.cs:946 |
| 893 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 894 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 900 | GetValue | resolved | string Drilling.Common.Automation.CAutomationManager.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:962 |
| 901 | GetValue | resolved | string Drilling.Common.Automation.CAutomationManager.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:962 |
| 902 | GetValue | resolved | string Drilling.Common.Automation.CAutomationManager.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:962 |
| 903 | values.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 903 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 903 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 903 | values.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 903 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 903 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 904 | new ST_AUTOMATION_AXIS_STATUS | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.ST_AUTOMATION_AXIS_STATUS(int, string, int?, double, double, double, double, double, double, bool, bool, bool, string, string, string, string, System.DateTimeOffset) · Drilling.Common/Automation/CAutomationManager.cs:1508 |
| 907 | TryGetAxisNo | resolved | int? Drilling.Common.Automation.CAutomationManager.TryGetAxisNo(string) · Drilling.Common/Automation/CAutomationManager.cs:951 |
| 908 | ReadDouble | resolved | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:967 |
| 909 | ReadDouble | resolved | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:967 |
| 910 | ReadDouble | resolved | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:967 |
| 911 | ReadDouble | resolved | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:967 |
| 912 | ReadDouble | resolved | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:967 |
| 913 | ReadGalvoTemperatureCelsius | resolved | double Drilling.Common.Automation.CAutomationManager.ReadGalvoTemperatureCelsius(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Automation/CAutomationManager.cs:941 |
| 914 | IsDriveAble | resolved | bool Drilling.Common.Automation.CAutomationManager.IsDriveAble(string) · Drilling.Common/Automation/CAutomationManager.cs:972 |
| 915 | IsHomeDone | resolved | bool Drilling.Common.Automation.CAutomationManager.IsHomeDone(string) · Drilling.Common/Automation/CAutomationManager.cs:982 |
| 916 | IsFaultActive | resolved | bool Drilling.Common.Automation.CAutomationManager.IsFaultActive(string) · Drilling.Common/Automation/CAutomationManager.cs:1016 |
| 924 | ReadMotionStatusFlag | resolved | bool? Drilling.Common.Automation.CAutomationManager.ReadMotionStatusFlag(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:929 |
| 925 | ReadMotionStatusFlag | resolved | bool? Drilling.Common.Automation.CAutomationManager.ReadMotionStatusFlag(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Automation/CAutomationManager.cs:929 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 876 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(response) |
| 876 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(response)) |
| 878 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorAxisStatus(automationNo, requestedAxis, "No Response", response) |
| 878 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorAxisStatus(automationNo, requestedAxis, "No Response", response); |
| 881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatAutomationErrorResponse(response) |
| 881 | local-declaration | 지역 변수를 선언합니다: var automationError = FormatAutomationErrorResponse(response); |
| 881 | variable-initializer | 변수의 초기값을 지정합니다: automationError = FormatAutomationErrorResponse(response) |
| 882 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(automationError) |
| 882 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(automationError)) |
| 884 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorAxisStatus(automationNo, requestedAxis, automationError, response) |
| 884 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorAxisStatus(automationNo, requestedAxis, automationError, response); |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Split(':', StringSplitOptions.TrimEntries &#124; StringSplitOptions.None) |
| 887 | local-declaration | 지역 변수를 선언합니다: var tokens = response.Split(':', StringSplitOptions.TrimEntries &#124; StringSplitOptions.None); |
| 887 | variable-initializer | 변수의 초기값을 지정합니다: tokens = response.Split(':', StringSplitOptions.TrimEntries &#124; StringSplitOptions.None) |
| 888 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tokens[0].Equals("OK", StringComparison.OrdinalIgnoreCase) |
| 888 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tokens[1].Equals("AXIS", StringComparison.OrdinalIgnoreCase) |
| 888 | if | 조건에 따라 분기합니다: if (tokens.Length < 3 &#124;&#124; !tokens[0].Equals("OK", StringComparison.OrdinalIgnoreCase) &#124;&#124; !tokens[1].Equals("AXIS", StringComparison.OrdinalIgnoreCase)) |
| 890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorAxisStatus(automationNo, requestedAxis, "Invalid Response", response) |
| 890 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorAxisStatus(automationNo, requestedAxis, "Invalid Response", response); |
| 893 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(tokens[2]) |
| 893 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(tokens[2]) ? requestedAxis : tokens[2] |
| 893 | local-declaration | 지역 변수를 선언합니다: var axisName = string.IsNullOrWhiteSpace(tokens[2]) ? requestedAxis : tokens[2]; |
| 893 | variable-initializer | 변수의 초기값을 지정합니다: axisName = string.IsNullOrWhiteSpace(tokens[2]) ? requestedAxis : tokens[2] |
| 894 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 894 | local-declaration | 지역 변수를 선언합니다: var values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase); |
| 894 | variable-initializer | 변수의 초기값을 지정합니다: values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 895 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: index += 2 |
| 895 | variable-initializer | 변수의 초기값을 지정합니다: index = 3 |
| 895 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 3; index + 1 < tokens.Length; index += 2) |
| 897 | assignment | 값을 대상에 대입합니다: values[tokens[index]] = tokens[index + 1] |
| 900 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "DRIVE") |
| 900 | local-declaration | 지역 변수를 선언합니다: var driveStatus = GetValue(values, "DRIVE"); |
| 900 | variable-initializer | 변수의 초기값을 지정합니다: driveStatus = GetValue(values, "DRIVE") |
| 901 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "FAULT") |
| 901 | local-declaration | 지역 변수를 선언합니다: var fault = GetValue(values, "FAULT"); |
| 901 | variable-initializer | 변수의 초기값을 지정합니다: fault = GetValue(values, "FAULT") |
| 902 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(values, "HOME") |
| 902 | local-declaration | 지역 변수를 선언합니다: var homeState = GetValue(values, "HOME"); |
| 902 | variable-initializer | 변수의 초기값을 지정합니다: homeState = GetValue(values, "HOME") |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue("FPOS", out var feedbackText) |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(feedbackText, NumberStyles.Float, CultureInfo.InvariantCulture, out var feedback) |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(feedback) |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue("CPOS", out var commandText) |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(commandText, NumberStyles.Float, CultureInfo.InvariantCulture, out var command) |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(command) |
| 903 | local-declaration | 지역 변수를 선언합니다: var hasMotionPositions = values.TryGetValue("FPOS", out var feedbackText) && double.TryParse(feedbackText, NumberStyles.Float, CultureInfo.InvariantCulture, out var feedback) && double.IsFinite(feedback) && values.TryGetValue("CPO |
| 903 | variable-initializer | 변수의 초기값을 지정합니다: hasMotionPositions = values.TryGetValue("FPOS", out var feedbackText) && double.TryParse(feedbackText, NumberStyles.Float, CultureInfo.InvariantCulture, out var feedback) && double.IsFinite(feedback) && values.TryGetValue("CPOS",  |
| 904 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_AUTOMATION_AXIS_STATUS( automationNo, axisName, TryGetAxisNo(axisName), ReadDouble(values, "FPOS"), ReadDouble(values, "CPOS"), ReadDouble(values, "AUX"), ReadDouble(values, "CURRENT"), ReadDouble(values, "LASER_R… |
| 904 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_AUTOMATION_AXIS_STATUS( automationNo, axisName, TryGetAxisNo(axisName), ReadDouble(values, "FPOS"), ReadDouble(values, "CPOS"), ReadDouble(values, "AUX"), ReadDouble(values, "CURRENT"), ReadDouble(values, "LASER_RAW" |
| 907 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetAxisNo(axisName) |
| 908 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(values, "FPOS") |
| 909 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(values, "CPOS") |
| 910 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(values, "AUX") |
| 911 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(values, "CURRENT") |
| 912 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(values, "LASER_RAW") |
| 913 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadGalvoTemperatureCelsius(values) |
| 914 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsDriveAble(driveStatus) |
| 915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsHomeDone(homeState) |
| 916 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsFaultActive(fault) |
| 924 | assignment | 값을 대상에 대입합니다: IsInPosition = hasMotionPositions ? ReadMotionStatusFlag(values, "IN_POSITION") : null |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMotionStatusFlag(values, "IN_POSITION") |
| 924 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasMotionPositions ? ReadMotionStatusFlag(values, "IN_POSITION") : null |
| 925 | assignment | 값을 대상에 대입합니다: IsMotionDone = hasMotionPositions ? ReadMotionStatusFlag(values, "MOTION_DONE") : null |
| 925 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMotionStatusFlag(values, "MOTION_DONE") |
| 925 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasMotionPositions ? ReadMotionStatusFlag(values, "MOTION_DONE") : null |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseAxisStatus"]
 N0["L876 if"]
 M -->|포함| N0
 N1["L882 if"]
 M -->|포함| N1
 N2["L888 if"]
 M -->|포함| N2
 N3["L895 for"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadMotionStatusFlag` · L929–939

[Drilling.Common/Automation/CAutomationManager.cs:929–939](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L929-L939)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool? Drilling.Common.Automation.CAutomationManager.ReadMotionStatusFlag(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:924–924](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L924-L924) | ReadMotionStatusFlag | False |
| [Drilling.Common/Automation/CAutomationManager.cs:925–925](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L925-L925) | ReadMotionStatusFlag | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 931 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 933 | text.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(key, out var text) |
| 931 | if | 조건에 따라 분기합니다: if (!values.TryGetValue(key, out var text)) |
| 932 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 933 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Trim() |
| 933 | return | 호출자에게 값 또는 제어를 반환합니다: return text.Trim() switch { "1" => true, "0" => false, _ => null }; |
| 933 | switch-expression | 값별 결과식을 선택합니다: text.Trim() switch { "1" => true, "0" => false, _ => null } |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadMotionStatusFlag"]
 N0["L931 if"]
 M -->|포함| N0
 N1["L933 switch-expression"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadGalvoTemperatureCelsius` · L941–944

[Drilling.Common/Automation/CAutomationManager.cs:941–944](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L941-L944)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Automation.CAutomationManager.ReadGalvoTemperatureCelsius(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:913–913](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L913-L913) | ReadGalvoTemperatureCelsius | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 943 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 943 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 943 | CGalvoTemperature.FromAnalogInput | resolved | double Drilling.Common.Automation.CGalvoTemperature.FromAnalogInput(double) · Drilling.Common/Automation/CAutomationManager.cs:1660 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue("MOTOR_TEMP", out var text) |
| 943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CGalvoTemperature.FromAnalogInput(value) |
| 943 | conditional-expression | 조건에 따라 결과식을 선택합니다: values.TryGetValue("MOTOR_TEMP", out var text) && double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? CGalvoTemperature.FromAnalogInput(value) : double.NaN |
| 943 | return | 호출자에게 값 또는 제어를 반환합니다: return values.TryGetValue("MOTOR_TEMP", out var text) && double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? CGalvoTemperature.FromAnalogInput(value) : double.NaN; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateErrorAxisStatus` · L946–949

[Drilling.Common/Automation/CAutomationManager.cs:946–949](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L946-L949)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS Drilling.Common.Automation.CAutomationManager.CreateErrorAxisStatus(int, string, string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| automationNo | int | None | False /  |
| axisName | string | None | False /  |
| fault | string | None | False /  |
| response | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:878–878](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L878-L878) | CreateErrorAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:884–884](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L884-L884) | CreateErrorAxisStatus | False |
| [Drilling.Common/Automation/CAutomationManager.cs:890–890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L890-L890) | CreateErrorAxisStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 948 | new ST_AUTOMATION_AXIS_STATUS | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.ST_AUTOMATION_AXIS_STATUS(int, string, int?, double, double, double, double, double, double, bool, bool, bool, string, string, string, string, System.DateTimeOffset) · Drilling.Common/Automation/CAutomationManager.cs:1508 |
| 948 | TryGetAxisNo | resolved | int? Drilling.Common.Automation.CAutomationManager.TryGetAxisNo(string) · Drilling.Common/Automation/CAutomationManager.cs:951 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_AUTOMATION_AXIS_STATUS(automationNo, axisName, TryGetAxisNo(axisName), 0.0, 0.0, 0.0, 0.0, 0.0, double.NaN, false, false, true, "", "", fault, response, DateTimeOffset.Now) |
| 948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetAxisNo(axisName) |
| 948 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_AUTOMATION_AXIS_STATUS(automationNo, axisName, TryGetAxisNo(axisName), 0.0, 0.0, 0.0, 0.0, 0.0, double.NaN, false, false, true, "", "", fault, response, DateTimeOffset.Now); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryGetAxisNo` · L951–960

[Drilling.Common/Automation/CAutomationManager.cs:951–960](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L951-L960)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int? Drilling.Common.Automation.CAutomationManager.TryGetAxisNo(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:847–847](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L847-L847) | TryGetAxisNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:907–907](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L907-L907) | TryGetAxisNo | False |
| [Drilling.Common/Automation/CAutomationManager.cs:948–948](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L948-L948) | TryGetAxisNo | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 953 | axisName.Trim | resolved | string string.Trim() |
| 954 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 959 | AxisNoMap.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, int>.TryGetValue(string, out int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 953 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 953 | local-declaration | 지역 변수를 선언합니다: var normalized = axisName.Trim(); |
| 953 | variable-initializer | 변수의 초기값을 지정합니다: normalized = axisName.Trim() |
| 954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(normalized, NumberStyles.Integer, CultureInfo.InvariantCulture, out var axisNo) |
| 954 | if | 조건에 따라 분기합니다: if (int.TryParse(normalized, NumberStyles.Integer, CultureInfo.InvariantCulture, out var axisNo)) |
| 956 | return | 호출자에게 값 또는 제어를 반환합니다: return axisNo; |
| 959 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AxisNoMap.TryGetValue(normalized, out axisNo) |
| 959 | conditional-expression | 조건에 따라 결과식을 선택합니다: AxisNoMap.TryGetValue(normalized, out axisNo) ? axisNo : null |
| 959 | return | 호출자에게 값 또는 제어를 반환합니다: return AxisNoMap.TryGetValue(normalized, out axisNo) ? axisNo : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryGetAxisNo"]
 N0["L954 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetValue` · L962–965

[Drilling.Common/Automation/CAutomationManager.cs:962–965](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L962-L965)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.GetValue(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:900–900](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L900-L900) | GetValue | False |
| [Drilling.Common/Automation/CAutomationManager.cs:901–901](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L901-L901) | GetValue | False |
| [Drilling.Common/Automation/CAutomationManager.cs:902–902](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L902-L902) | GetValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 964 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(key, out var value) |
| 964 | conditional-expression | 조건에 따라 결과식을 선택합니다: values.TryGetValue(key, out var value) ? value : "" |
| 964 | return | 호출자에게 값 또는 제어를 반환합니다: return values.TryGetValue(key, out var value) ? value : ""; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDouble` · L967–970

[Drilling.Common/Automation/CAutomationManager.cs:967–970](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L967-L970)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Automation.CAutomationManager.ReadDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:908–908](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L908-L908) | ReadDouble | False |
| [Drilling.Common/Automation/CAutomationManager.cs:909–909](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L909-L909) | ReadDouble | False |
| [Drilling.Common/Automation/CAutomationManager.cs:910–910](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L910-L910) | ReadDouble | False |
| [Drilling.Common/Automation/CAutomationManager.cs:911–911](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L911-L911) | ReadDouble | False |
| [Drilling.Common/Automation/CAutomationManager.cs:912–912](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L912-L912) | ReadDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 969 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 969 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(key, out var value) |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) |
| 969 | conditional-expression | 조건에 따라 결과식을 선택합니다: values.TryGetValue(key, out var value) && double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed : 0.0 |
| 969 | return | 호출자에게 값 또는 제어를 반환합니다: return values.TryGetValue(key, out var value) && double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed : 0.0; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsDriveAble` · L972–980

[Drilling.Common/Automation/CAutomationManager.cs:972–980](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L972-L980)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsDriveAble(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| driveStatus | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:914–914](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L914-L914) | IsDriveAble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 974 | TryReadStatusWord | resolved | bool Drilling.Common.Automation.CAutomationManager.TryReadStatusWord(string, out long) · Drilling.Common/Automation/CAutomationManager.cs:993 |
| 979 | driveStatus.Contains | resolved | bool string.Contains(string, System.StringComparison) |
| 979 | driveStatus.Contains | resolved | bool string.Contains(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 974 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryReadStatusWord(driveStatus, out var statusWord) |
| 974 | if | 조건에 따라 분기합니다: if (TryReadStatusWord(driveStatus, out var statusWord)) |
| 976 | return | 호출자에게 값 또는 제어를 반환합니다: return (statusWord & Automation1DriveStatusEnabledMask) == Automation1DriveStatusEnabledMask; |
| 979 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: driveStatus.Contains("Enabled", StringComparison.OrdinalIgnoreCase) |
| 979 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: driveStatus.Contains("ServoControl", StringComparison.OrdinalIgnoreCase) |
| 979 | return | 호출자에게 값 또는 제어를 반환합니다: return driveStatus.Contains("Enabled", StringComparison.OrdinalIgnoreCase) &#124;&#124; driveStatus.Contains("ServoControl", StringComparison.OrdinalIgnoreCase); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsDriveAble"]
 N0["L974 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsHomeDone` · L982–991

[Drilling.Common/Automation/CAutomationManager.cs:982–991](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L982-L991)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsHomeDone(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| homeState | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:915–915](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L915-L915) | IsHomeDone | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 984 | homeState.Trim | resolved | string string.Trim() |
| 985 | TryReadStatusWord | resolved | bool Drilling.Common.Automation.CAutomationManager.TryReadStatusWord(string, out long) · Drilling.Common/Automation/CAutomationManager.cs:993 |
| 990 | normalized.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 990 | normalized.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 990 | normalized.Contains | resolved | bool string.Contains(string, System.StringComparison) |
| 990 | normalized.Contains | resolved | bool string.Contains(string, System.StringComparison) |
| 990 | normalized.Contains | resolved | bool string.Contains(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 984 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: homeState.Trim() |
| 984 | local-declaration | 지역 변수를 선언합니다: var normalized = homeState.Trim(); |
| 984 | variable-initializer | 변수의 초기값을 지정합니다: normalized = homeState.Trim() |
| 985 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryReadStatusWord(normalized, out var statusWord) |
| 985 | if | 조건에 따라 분기합니다: if (TryReadStatusWord(normalized, out var statusWord)) |
| 987 | return | 호출자에게 값 또는 제어를 반환합니다: return (statusWord & Automation1AxisStatusHomedMask) == Automation1AxisStatusHomedMask; |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Equals("1", StringComparison.OrdinalIgnoreCase) |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Equals("TRUE", StringComparison.OrdinalIgnoreCase) |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Contains("Homed", StringComparison.OrdinalIgnoreCase) |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Contains("Done", StringComparison.OrdinalIgnoreCase) |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Contains("Complete", StringComparison.OrdinalIgnoreCase) |
| 990 | return | 호출자에게 값 또는 제어를 반환합니다: return normalized.Equals("1", StringComparison.OrdinalIgnoreCase) &#124;&#124; normalized.Equals("TRUE", StringComparison.OrdinalIgnoreCase) &#124;&#124; normalized.Contains("Homed", StringComparison.OrdinalIgnoreCase) &#124;&#124; normalized.Contains("Done",  |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsHomeDone"]
 N0["L985 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryReadStatusWord` · L993–1014

[Drilling.Common/Automation/CAutomationManager.cs:993–1014](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L993-L1014)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.TryReadStatusWord(string, out long) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |
| statusWord | long | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:974–974](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L974-L974) | TryReadStatusWord | False |
| [Drilling.Common/Automation/CAutomationManager.cs:985–985](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L985-L985) | TryReadStatusWord | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 995 | value.Trim | resolved | string string.Trim() |
| 996 | long.TryParse | resolved | bool long.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |
| 1001 | normalized.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1001 | long.TryParse | resolved | bool long.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |
| 1006 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 1006 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1008 | Convert.ToInt64 | resolved | long System.Convert.ToInt64(double) |
| 1009 | Math.Abs | resolved | double System.Math.Abs(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 995 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 995 | local-declaration | 지역 변수를 선언합니다: var normalized = value.Trim(); |
| 995 | variable-initializer | 변수의 초기값을 지정합니다: normalized = value.Trim() |
| 996 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(normalized, NumberStyles.Integer, CultureInfo.InvariantCulture, out statusWord) |
| 996 | if | 조건에 따라 분기합니다: if (long.TryParse(normalized, NumberStyles.Integer, CultureInfo.InvariantCulture, out statusWord)) |
| 998 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 1001 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.StartsWith("0x", StringComparison.OrdinalIgnoreCase) |
| 1001 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(normalized[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out statusWord) |
| 1001 | if | 조건에 따라 분기합니다: if (normalized.StartsWith("0x", StringComparison.OrdinalIgnoreCase) && long.TryParse(normalized[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out statusWord)) |
| 1003 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 1006 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(normalized, NumberStyles.Float, CultureInfo.InvariantCulture, out var doubleValue) |
| 1006 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(doubleValue) |
| 1006 | if | 조건에 따라 분기합니다: if (double.TryParse(normalized, NumberStyles.Float, CultureInfo.InvariantCulture, out var doubleValue) && double.IsFinite(doubleValue)) |
| 1008 | assignment | 값을 대상에 대입합니다: statusWord = Convert.ToInt64(doubleValue) |
| 1008 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToInt64(doubleValue) |
| 1009 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(doubleValue - statusWord) |
| 1009 | return | 호출자에게 값 또는 제어를 반환합니다: return Math.Abs(doubleValue - statusWord) <= 0.000001; |
| 1012 | assignment | 값을 대상에 대입합니다: statusWord = 0 |
| 1013 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryReadStatusWord"]
 N0["L996 if"]
 M -->|포함| N0
 N1["L1001 if"]
 M -->|포함| N1
 N2["L1006 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsFaultActive` · L1016–1020

[Drilling.Common/Automation/CAutomationManager.cs:1016–1020](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1016-L1020)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.IsFaultActive(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| fault | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:916–916](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L916-L916) | IsFaultActive | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1018 | fault.Trim | resolved | string string.Trim() |
| 1019 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1019 | normalized.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1019 | normalized.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1018 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fault.Trim() |
| 1018 | local-declaration | 지역 변수를 선언합니다: var normalized = fault.Trim(); |
| 1018 | variable-initializer | 변수의 초기값을 지정합니다: normalized = fault.Trim() |
| 1019 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(normalized) |
| 1019 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Equals("0", StringComparison.OrdinalIgnoreCase) |
| 1019 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.Equals("None", StringComparison.OrdinalIgnoreCase) |
| 1019 | return | 호출자에게 값 또는 제어를 반환합니다: return !string.IsNullOrWhiteSpace(normalized) && !normalized.Equals("0", StringComparison.OrdinalIgnoreCase) && !normalized.Equals("None", StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveLocalScriptPath` · L1022–1039

[Drilling.Common/Automation/CAutomationManager.cs:1022–1039](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1022-L1039)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ResolveLocalScriptPath(string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| fileNameOrPath | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:305–305](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L305-L305) | ResolveLocalScriptPath | False |
| [Drilling.Common/Automation/CAutomationManager.cs:318–318](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L318-L318) | ResolveLocalScriptPath | False |
| [Drilling.Common/Automation/CAutomationManager.cs:421–421](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L421-L421) | ResolveLocalScriptPath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1024 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 1025 | fileNameOrPath.Trim | resolved | string string.Trim() |
| 1026 | Path.IsPathRooted | resolved | bool System.IO.Path.IsPathRooted(string?) |
| 1028 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1031 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 1032 | trimmed.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1034 | GetLocalScriptDirectory | resolved | string Drilling.Common.Automation.CAutomationManager.GetLocalScriptDirectory(System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1041 |
| 1035 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1035 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |
| 1038 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1038 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1024 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(fileNameOrPath) |
| 1025 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fileNameOrPath.Trim() |
| 1025 | local-declaration | 지역 변수를 선언합니다: var trimmed = fileNameOrPath.Trim(); |
| 1025 | variable-initializer | 변수의 초기값을 지정합니다: trimmed = fileNameOrPath.Trim() |
| 1026 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.IsPathRooted(trimmed) |
| 1026 | if | 조건에 따라 분기합니다: if (Path.IsPathRooted(trimmed)) |
| 1028 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(trimmed) |
| 1028 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.GetFullPath(trimmed); |
| 1031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(trimmed) |
| 1031 | local-declaration | 지역 변수를 선언합니다: var fileNameOnly = Path.GetFileName(trimmed); |
| 1031 | variable-initializer | 변수의 초기값을 지정합니다: fileNameOnly = Path.GetFileName(trimmed) |
| 1032 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.Equals(fileNameOnly, StringComparison.OrdinalIgnoreCase) |
| 1032 | if | 조건에 따라 분기합니다: if (trimmed.Equals(fileNameOnly, StringComparison.OrdinalIgnoreCase)) |
| 1034 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetLocalScriptDirectory(cancellationToken) |
| 1034 | local-declaration | 지역 변수를 선언합니다: var scriptDirectory = GetLocalScriptDirectory(cancellationToken); |
| 1034 | variable-initializer | 변수의 초기값을 지정합니다: scriptDirectory = GetLocalScriptDirectory(cancellationToken) |
| 1035 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(scriptDirectory, trimmed)) |
| 1035 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(scriptDirectory, trimmed) |
| 1035 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.GetFullPath(Path.Combine(scriptDirectory, trimmed)); |
| 1038 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(_projectRoot, trimmed)) |
| 1038 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_projectRoot, trimmed) |
| 1038 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.GetFullPath(Path.Combine(_projectRoot, trimmed)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResolveLocalScriptPath"]
 N0["L1026 if"]
 M -->|포함| N0
 N1["L1032 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetLocalScriptDirectory` · L1041–1045

[Drilling.Common/Automation/CAutomationManager.cs:1041–1045](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1041-L1045)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.GetLocalScriptDirectory(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1034–1034](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1034-L1034) | GetLocalScriptDirectory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1043 | _settingManager.GetValue | resolved | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:59 |
| 1044 | ResolveLocalDirectory | resolved | string Drilling.Common.Automation.CAutomationManager.ResolveLocalDirectory(string, string) · Drilling.Common/Automation/CAutomationManager.cs:1047 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1043 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _settingManager.GetValue(EN_SETTING_TAB.Option, LocalScriptPathKey, "", cancellationToken) |
| 1043 | conditional-expression | 조건에 따라 결과식을 선택합니다: _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, LocalScriptPathKey, "", cancellationToken) |
| 1043 | local-declaration | 지역 변수를 선언합니다: var settingValue = _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, LocalScriptPathKey, "", cancellationToken); |
| 1043 | variable-initializer | 변수의 초기값을 지정합니다: settingValue = _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, LocalScriptPathKey, "", cancellationToken) |
| 1044 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveLocalDirectory(settingValue, _defaultLocalScriptDirectory) |
| 1044 | return | 호출자에게 값 또는 제어를 반환합니다: return ResolveLocalDirectory(settingValue, _defaultLocalScriptDirectory); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveLocalDirectory` · L1047–1051

[Drilling.Common/Automation/CAutomationManager.cs:1047–1051](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1047-L1051)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ResolveLocalDirectory(string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| settingValue | string | None | False /  |
| defaultDirectory | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1044–1044](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1044-L1044) | ResolveLocalDirectory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1049 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1049 | settingValue.Trim | resolved | string string.Trim() |
| 1050 | Path.IsPathRooted | resolved | bool System.IO.Path.IsPathRooted(string?) |
| 1050 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1050 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 1050 | Path.Combine | resolved | string System.IO.Path.Combine(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1049 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(settingValue) |
| 1049 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingValue.Trim() |
| 1049 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(settingValue) ? defaultDirectory : settingValue.Trim() |
| 1049 | local-declaration | 지역 변수를 선언합니다: var value = string.IsNullOrWhiteSpace(settingValue) ? defaultDirectory : settingValue.Trim(); |
| 1049 | variable-initializer | 변수의 초기값을 지정합니다: value = string.IsNullOrWhiteSpace(settingValue) ? defaultDirectory : settingValue.Trim() |
| 1050 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.IsPathRooted(value) |
| 1050 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(value) |
| 1050 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(Path.Combine(_projectRoot, value)) |
| 1050 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(_projectRoot, value) |
| 1050 | conditional-expression | 조건에 따라 결과식을 선택합니다: Path.IsPathRooted(value) ? Path.GetFullPath(value) : Path.GetFullPath(Path.Combine(_projectRoot, value)) |
| 1050 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.IsPathRooted(value) ? Path.GetFullPath(value) : Path.GetFullPath(Path.Combine(_projectRoot, value)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateControllerFileName` · L1053–1065

[Drilling.Common/Automation/CAutomationManager.cs:1053–1065](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1053-L1065)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CreateControllerFileName(string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| fileNameOrPath | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:306–306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L306-L306) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:306–306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L306-L306) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:319–319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L319-L319) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:319–319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L319-L319) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:327–327](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L327-L327) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:340–340](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L340-L340) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:429–429](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L429-L429) | CreateControllerFileName | False |
| [Drilling.Common/Automation/CAutomationManager.cs:492–492](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L492-L492) | CreateControllerFileName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1055 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 1056 | fileNameOrPath.Trim().Replace | resolved | string string.Replace(char, char) |
| 1056 | fileNameOrPath.Trim | resolved | string string.Trim() |
| 1057 | trimmed.StartsWith | resolved | bool string.StartsWith(char) |
| 1062 | GetControllerScriptDirectory | resolved | string Drilling.Common.Automation.CAutomationManager.GetControllerScriptDirectory(System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1067 |
| 1063 | Path.GetFileName | resolved | string? System.IO.Path.GetFileName(string?) |
| 1064 | CombineControllerPath | resolved | string Drilling.Common.Automation.CAutomationManager.CombineControllerPath(string, string) · Drilling.Common/Automation/CAutomationManager.cs:1079 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1055 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(fileNameOrPath) |
| 1056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fileNameOrPath.Trim().Replace('\\', '/') |
| 1056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fileNameOrPath.Trim() |
| 1056 | local-declaration | 지역 변수를 선언합니다: var trimmed = fileNameOrPath.Trim().Replace('\\', '/'); |
| 1056 | variable-initializer | 변수의 초기값을 지정합니다: trimmed = fileNameOrPath.Trim().Replace('\\', '/') |
| 1057 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: trimmed.StartsWith('/') |
| 1057 | if | 조건에 따라 분기합니다: if (trimmed.StartsWith('/')) |
| 1059 | return | 호출자에게 값 또는 제어를 반환합니다: return trimmed; |
| 1062 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetControllerScriptDirectory(cancellationToken) |
| 1062 | local-declaration | 지역 변수를 선언합니다: var controllerDirectory = GetControllerScriptDirectory(cancellationToken); |
| 1062 | variable-initializer | 변수의 초기값을 지정합니다: controllerDirectory = GetControllerScriptDirectory(cancellationToken) |
| 1063 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileName(trimmed) |
| 1063 | local-declaration | 지역 변수를 선언합니다: var fileName = Path.GetFileName(trimmed); |
| 1063 | variable-initializer | 변수의 초기값을 지정합니다: fileName = Path.GetFileName(trimmed) |
| 1064 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CombineControllerPath(controllerDirectory, fileName) |
| 1064 | return | 호출자에게 값 또는 제어를 반환합니다: return CombineControllerPath(controllerDirectory, fileName); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateControllerFileName"]
 N0["L1057 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetControllerScriptDirectory` · L1067–1077

[Drilling.Common/Automation/CAutomationManager.cs:1067–1077](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1067-L1077)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.GetControllerScriptDirectory(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1062–1062](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1062-L1062) | GetControllerScriptDirectory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1069 | _settingManager.GetValue | resolved | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:59 |
| 1070 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1075 | settingValue.Trim().Replace | resolved | string string.Replace(char, char) |
| 1075 | settingValue.Trim | resolved | string string.Trim() |
| 1076 | normalized.StartsWith | resolved | bool string.StartsWith(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1069 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _settingManager.GetValue(EN_SETTING_TAB.Option, AutomationScriptPathKey, "/", cancellationToken) |
| 1069 | conditional-expression | 조건에 따라 결과식을 선택합니다: _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, AutomationScriptPathKey, "/", cancellationToken) |
| 1069 | local-declaration | 지역 변수를 선언합니다: var settingValue = _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, AutomationScriptPathKey, "/", cancellationToken); |
| 1069 | variable-initializer | 변수의 초기값을 지정합니다: settingValue = _settingManager is null ? "" : _settingManager.GetValue(EN_SETTING_TAB.Option, AutomationScriptPathKey, "/", cancellationToken) |
| 1070 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(settingValue) |
| 1070 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(settingValue)) |
| 1072 | return | 호출자에게 값 또는 제어를 반환합니다: return "/"; |
| 1075 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingValue.Trim().Replace('\\', '/') |
| 1075 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingValue.Trim() |
| 1075 | local-declaration | 지역 변수를 선언합니다: var normalized = settingValue.Trim().Replace('\\', '/'); |
| 1075 | variable-initializer | 변수의 초기값을 지정합니다: normalized = settingValue.Trim().Replace('\\', '/') |
| 1076 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalized.StartsWith('/') |
| 1076 | conditional-expression | 조건에 따라 결과식을 선택합니다: normalized.StartsWith('/') ? normalized : "/" + normalized |
| 1076 | return | 호출자에게 값 또는 제어를 반환합니다: return normalized.StartsWith('/') ? normalized : "/" + normalized; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetControllerScriptDirectory"]
 N0["L1070 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CombineControllerPath` · L1079–1089

[Drilling.Common/Automation/CAutomationManager.cs:1079–1089](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1079-L1089)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CombineControllerPath(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| directory | string | None | False /  |
| fileName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1064–1064](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1064-L1064) | CombineControllerPath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1081 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1081 | directory.Trim().Replace | resolved | string string.Replace(char, char) |
| 1081 | directory.Trim | resolved | string string.Trim() |
| 1082 | normalizedDirectory.StartsWith | resolved | bool string.StartsWith(char) |
| 1087 | normalizedDirectory.TrimEnd | resolved | string string.TrimEnd(char) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1081 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(directory) |
| 1081 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: directory.Trim().Replace('\\', '/') |
| 1081 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: directory.Trim() |
| 1081 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(directory) ? "/" : directory.Trim().Replace('\\', '/') |
| 1081 | local-declaration | 지역 변수를 선언합니다: var normalizedDirectory = string.IsNullOrWhiteSpace(directory) ? "/" : directory.Trim().Replace('\\', '/'); |
| 1081 | variable-initializer | 변수의 초기값을 지정합니다: normalizedDirectory = string.IsNullOrWhiteSpace(directory) ? "/" : directory.Trim().Replace('\\', '/') |
| 1082 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalizedDirectory.StartsWith('/') |
| 1082 | if | 조건에 따라 분기합니다: if (!normalizedDirectory.StartsWith('/')) |
| 1084 | assignment | 값을 대상에 대입합니다: normalizedDirectory = "/" + normalizedDirectory |
| 1087 | assignment | 값을 대상에 대입합니다: normalizedDirectory = normalizedDirectory.TrimEnd('/') |
| 1087 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: normalizedDirectory.TrimEnd('/') |
| 1088 | conditional-expression | 조건에 따라 결과식을 선택합니다: normalizedDirectory.Length == 0 ? "/" + fileName : $"{normalizedDirectory}/{fileName}" |
| 1088 | return | 호출자에게 값 또는 제어를 반환합니다: return normalizedDirectory.Length == 0 ? "/" + fileName : $"{normalizedDirectory}/{fileName}"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CombineControllerPath"]
 N0["L1082 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Format` · L1091–1094

[Drilling.Common/Automation/CAutomationManager.cs:1091–1094](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1091-L1094)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.Format(double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L188-L188) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L188-L188) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L193-L193) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L193-L193) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L205-L205) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L205-L205) | Format | False |
| [Drilling.Common/Automation/CAutomationManager.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L212-L212) | Format | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1093 | value.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1093 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString("0.######", CultureInfo.InvariantCulture) |
| 1093 | return | 호출자에게 값 또는 제어를 반환합니다: return value.ToString("0.######", CultureInfo.InvariantCulture); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RunStagePreparedScript` · L1098–1105

[Drilling.Common/Automation/CAutomationManager.cs:1098–1105](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1098-L1105)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.RunStagePreparedScript(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| file | string | None | False /  |
| task | int | None | False /  |
| controller | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4063–4063](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4063-L4063) | _automationManager.RunStagePreparedScript | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3627–3627](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3627-L3627) | manager.automation.RunStagePreparedScript | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1100 | RunScriptIfIdle(file, task, controller, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1100 | RunScriptIfIdle | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.RunScriptIfIdle(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:336 |
| 1101 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 1102 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1103 | RegisterStageSimulationTask | resolved | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask Drilling.Common.Automation.CAutomationManager.RegisterStageSimulationTask(int, int, string, bool) · Drilling.Common/Automation/CAutomationManager.cs:1288 |
| 1104 | StatusSnapshots.InvalidateTask | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateTask(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:361 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1100 | await | 비동기 완료를 기다립니다: await RunScriptIfIdle(file, task, controller, token).ConfigureAwait(false) |
| 1100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunScriptIfIdle(file, task, controller, token).ConfigureAwait(false) |
| 1100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RunScriptIfIdle(file, task, controller, token) |
| 1100 | local-declaration | 지역 변수를 선언합니다: var response = await RunScriptIfIdle(file, task, controller, token).ConfigureAwait(false); |
| 1100 | variable-initializer | 변수의 초기값을 지정합니다: response = await RunScriptIfIdle(file, task, controller, token).ConfigureAwait(false) |
| 1101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"Stage script RUN failed: {file}.") |
| 1102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(controller) |
| 1102 | if | 조건에 따라 분기합니다: if (IsSimul(controller)) |
| 1103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterStageSimulationTask(controller, task, file, buffered: false) |
| 1104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateTask(task, controller) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RunStagePreparedScript"]
 N0["L1102 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopStagePreparedTask` · L1107–1132

[Drilling.Common/Automation/CAutomationManager.cs:1107–1132](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1107-L1132)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.StopStagePreparedTask(int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| task | int | None | False /  |
| controller | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4164–4164](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4164-L4164) | _automationManager.StopStagePreparedTask | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3666–3666](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3666-L3666) | manager.automation.StopStagePreparedTask | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1109 | StopTask(task, controller, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1109 | StopTask | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.StopTask(int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:506 |
| 1110 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 1111 | StatusSnapshots.InvalidateTask | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateTask(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:361 |
| 1112 | CancellationTokenSource.CreateLinkedTokenSource | resolved | System.Threading.CancellationTokenSource System.Threading.CancellationTokenSource.CreateLinkedTokenSource(System.Threading.CancellationToken) |
| 1113 | limit.CancelAfter | resolved | void System.Threading.CancellationTokenSource.CancelAfter(System.TimeSpan) |
| 1113 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1118 | limit.Token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1119 | StatusSnapshots.GetTask | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<string> Drilling.Common.Automation.CAutomationStatusSnapshotService.GetTask(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:44 |
| 1121 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1122 | .Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 1123 | int.TryParse | resolved | bool int.TryParse(string?, out int) |
| 1125 | Task.Delay(50, limit.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1125 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |
| 1130 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?, System.Exception?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1109 | await | 비동기 완료를 기다립니다: await StopTask(task, controller, token).ConfigureAwait(false) |
| 1109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopTask(task, controller, token).ConfigureAwait(false) |
| 1109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopTask(task, controller, token) |
| 1109 | local-declaration | 지역 변수를 선언합니다: var response = await StopTask(task, controller, token).ConfigureAwait(false); |
| 1109 | variable-initializer | 변수의 초기값을 지정합니다: response = await StopTask(task, controller, token).ConfigureAwait(false) |
| 1110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"Stage Task stop failed: {task}.") |
| 1111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateTask(task, controller) |
| 1112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancellationTokenSource.CreateLinkedTokenSource(token) |
| 1112 | using-declaration | 정리할 자원을 선언합니다: using var limit = CancellationTokenSource.CreateLinkedTokenSource(token); |
| 1112 | variable-initializer | 변수의 초기값을 지정합니다: limit = CancellationTokenSource.CreateLinkedTokenSource(token) |
| 1113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: limit.CancelAfter(TimeSpan.FromSeconds(5)) |
| 1113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 1114 | try | 예외 처리 범위입니다: try |
| 1116 | while | 조건을 먼저 확인하며 반복합니다: while (true) |
| 1118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: limit.Token.ThrowIfCancellationRequested() |
| 1119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.GetTask(task, controller) |
| 1119 | local-declaration | 지역 변수를 선언합니다: var sample = StatusSnapshots.GetTask(task, controller); |
| 1119 | variable-initializer | 변수의 초기값을 지정합니다: sample = StatusSnapshots.GetTask(task, controller) |
| 1120 | if | 조건에 따라 분기합니다: if (sample.State is "ERROR" or "OFFLINE" or "STOPPED") |
| 1121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Cannot confirm Task STOP: {task}. {sample.Detail}") |
| 1121 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Cannot confirm Task STOP: {task}. {sample.Detail}"); |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Split(':') |
| 1122 | conditional-expression | 조건에 따라 결과식을 선택합니다: sample.State == "OK" ? sample.Value?.Split(':') : null |
| 1122 | local-declaration | 지역 변수를 선언합니다: var fields = sample.State == "OK" ? sample.Value?.Split(':') : null; |
| 1122 | variable-initializer | 변수의 초기값을 지정합니다: fields = sample.State == "OK" ? sample.Value?.Split(':') : null |
| 1123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(fields[2], out var taskNo) |
| 1123 | if | 조건에 따라 분기합니다: if (fields is { Length: >= 4 } && fields[0] == "OK" && fields[1] == "TASK" && int.TryParse(fields[2], out var taskNo) && taskNo == task && fields[3] is "Idle" or "ProgramComplete" or "QueueComplete" or "Stopped") |
| 1124 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1125 | await | 비동기 완료를 기다립니다: await Task.Delay(50, limit.Token).ConfigureAwait(false) |
| 1125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, limit.Token).ConfigureAwait(false) |
| 1125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, limit.Token) |
| 1128 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException error) when (limit.IsCancellationRequested && !token.IsCancellationRequested) |
| 1130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException($"Task STOP 확인 시간 초과(5초): Controller {controller}, Task {task}.", error) |
| 1130 | throw | 예외를 발생/전달합니다: throw new TimeoutException($"Task STOP 확인 시간 초과(5초): Controller {controller}, Task {task}.", error); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopStagePreparedTask"]
 N0["L1114 try"]
 M -->|포함| N0
 N1["L1116 while"]
 N0 -->|포함| N1
 N2["L1120 if"]
 N1 -->|포함| N2
 N3["L1123 if"]
 N1 -->|포함| N3
 N4["L1128 catch"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadAuxiliaryFeedback` · L1134–1144

[Drilling.Common/Automation/CAutomationManager.cs:1134–1144](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1134-L1144)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> Drilling.Common.Automation.CAutomationManager.ReadAuxiliaryFeedback(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Internal / internal, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axis | string | None | False /  |
| controller | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:354–354](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L354-L354) | _automation.ReadAuxiliaryFeedback | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1136 | ValidateAxisNameOnly | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) · Drilling.Common/Automation/CAutomationManager.cs:660 |
| 1137 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1138 | new | resolved | Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK.ST_AUXILIARY_FEEDBACK(double) · Drilling.Common/Automation/CAutomationManager.cs:1441 |
| 1139 | ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1139 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1141 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1141 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 1141 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1142 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1143 | new | resolved | Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK.ST_AUXILIARY_FEEDBACK(double) · Drilling.Common/Automation/CAutomationManager.cs:1441 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAxisNameOnly(axis) |
| 1137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(controller) |
| 1137 | if | 조건에 따라 분기합니다: if (IsSimul(controller)) |
| 1138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(0) |
| 1138 | return | 호출자에게 값 또는 제어를 반환합니다: return new(0); |
| 1139 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true) |
| 1139 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true).ConfigureAwait(false); |
| 1139 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;READ_AUX&#124;{axis}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1140 | local-declaration | 지역 변수를 선언합니다: const string prefix = "OK:AUX:"; |
| 1140 | variable-initializer | 변수의 초기값을 지정합니다: prefix = "OK:AUX:" |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith(prefix, StringComparison.Ordinal) |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(response[prefix.Length..], NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 1141 | if | 조건에 따라 분기합니다: if (!response.StartsWith(prefix, StringComparison.Ordinal) &#124;&#124; !double.TryParse(response[prefix.Length..], NumberStyles.Float, CultureInfo.InvariantCulture, out var value) &#124;&#124; !double.IsFinite(value)) |
| 1142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Auxiliary feedback read failed: {axis}. {response}") |
| 1142 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Auxiliary feedback read failed: {axis}. {response}"); |
| 1143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(value) |
| 1143 | return | 호출자에게 값 또는 제어를 반환합니다: return new(value); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadAuxiliaryFeedback"]
 N0["L1137 if"]
 M -->|포함| N0
 N1["L1141 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetAuxiliaryFeedbackZero` · L1146–1158

[Drilling.Common/Automation/CAutomationManager.cs:1146–1158](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1146-L1158)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.SetAuxiliaryFeedbackZero(string, int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axis | string | None | False /  |
| task | int | None | False /  |
| controller | int | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1160–1160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1160-L1160) | SetAuxiliaryFeedbackZero | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1148 | ValidateAxisNameOnly | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateAxisNameOnly(string) · Drilling.Common/Automation/CAutomationManager.cs:660 |
| 1150 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 1150 | nameof | unresolved | None |
| 1151 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1153 | ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1153 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1154 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 1157 | StatusSnapshots.InvalidateAuxiliaryFeedback | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateAuxiliaryFeedback(string, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:355 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateAxisNameOnly(axis) |
| 1149 | if | 조건에 따라 분기합니다: if (task < 1) |
| 1150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(task)) |
| 1150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(task) |
| 1150 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(task)); |
| 1151 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(controller) |
| 1151 | if | 조건에 따라 분기합니다: if (!IsSimul(controller)) |
| 1153 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token).ConfigureAwait(false) |
| 1153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token).ConfigureAwait(false) |
| 1153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token) |
| 1153 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token).ConfigureAwait(false); |
| 1153 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:FEEDBACK&#124;ZERO_AUX&#124;{axis}&#124;{task}", controller, token).ConfigureAwait(false) |
| 1154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"Auxiliary encoder zero failed: {axis}.") |
| 1157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateAuxiliaryFeedback(axis, controller) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetAuxiliaryFeedbackZero"]
 N0["L1149 if"]
 M -->|포함| N0
 N1["L1151 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ZeroMofFeedbackIfNeeded` · L1160–1160

[Drilling.Common/Automation/CAutomationManager.cs:1160–1160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1160-L1160)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.ZeroMofFeedbackIfNeeded(System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targets | System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:3544–3544](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3544-L3544) | _automationManager.ZeroMofFeedbackIfNeeded | False |
| [Drilling.Common/Station/CStationProcess.cs:4013–4013](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4013-L4013) | _automationManager.ZeroMofFeedbackIfNeeded | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1160 | new CMofZeroOperation(target => StatusSnapshots.GetAuxiliaryFeedback(target.Axis, target.Controller), (target, ct) => SetAuxiliaryFeedbackZero(target.Axis, target.Task, target.Controller, ct)).Execute | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CMofZeroOperation.Execute(System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1446 |
| 1160 | new CMofZeroOperation | resolved | Drilling.Common.Automation.CMofZeroOperation.CMofZeroOperation(System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>>, System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, System.Threading.CancellationToken, System.Threading.Tasks.Task>) · Drilling.Common/Automation/CAutomationManager.cs:1444 |
| 1160 | StatusSnapshots.GetAuxiliaryFeedback | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> Drilling.Common.Automation.CAutomationStatusSnapshotService.GetAuxiliaryFeedback(string, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:354 |
| 1160 | SetAuxiliaryFeedbackZero | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.SetAuxiliaryFeedbackZero(string, int, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1146 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMofZeroOperation(target => StatusSnapshots.GetAuxiliaryFeedback(target.Axis, target.Controller), (target, ct) => SetAuxiliaryFeedbackZero(target.Axis, target.Task, target.Controller, ct)).Execute(targets, token) |
| 1160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMofZeroOperation(target => StatusSnapshots.GetAuxiliaryFeedback(target.Axis, target.Controller), (target, ct) => SetAuxiliaryFeedbackZero(target.Axis, target.Task, target.Controller, ct)) |
| 1160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.GetAuxiliaryFeedback(target.Axis, target.Controller) |
| 1160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAuxiliaryFeedbackZero(target.Axis, target.Task, target.Controller, ct) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadConfiguredHomeSpeeds` · L1164–1188

[Drilling.Common/Automation/CAutomationManager.cs:1164–1188](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1164-L1188)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Automation.CAutomationManager.ReadConfiguredHomeSpeeds(System.Collections.Generic.IReadOnlyList<string>, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

원본 XML 주석:

````xml
/// <summary>Reads saved HomeSpeed values, which may differ from the active values until controller reset.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisNames | System.Collections.Generic.IReadOnlyList<string> | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:293–293](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L293-L293) | _automation.ReadConfiguredHomeSpeeds | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1166 | ArgumentNullException.ThrowIfNull | resolved | void System.ArgumentNullException.ThrowIfNull(object?, string?) |
| 1167 | ArgumentOutOfRangeException.ThrowIfNegative | resolved | void System.ArgumentOutOfRangeException.ThrowIfNegative<int>(int, string?) |
| 1168 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1169 | axisNames.Select(ValidateConfiguredHomeAxis).Distinct(StringComparer.OrdinalIgnoreCase).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 1169 | axisNames.Select(ValidateConfiguredHomeAxis).Distinct | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Distinct<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 1169 | axisNames.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Select<string, string>(System.Func<string, string>) |
| 1171 | new CConfiguredHomeSpeedValues | resolved | Drilling.Common.Automation.CConfiguredHomeSpeedValues.CConfiguredHomeSpeedValues(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>?) · Drilling.Common/Automation/CAutomationManager.cs:1647 |
| 1172 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1173 | new CConfiguredHomeSpeedValues | resolved | Drilling.Common.Automation.CConfiguredHomeSpeedValues.CConfiguredHomeSpeedValues(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>?) · Drilling.Common/Automation/CAutomationManager.cs:1647 |
| 1173 | axes.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, double> System.Collections.Generic.IEnumerable<string>.ToDictionary<string, string, double>(System.Func<string, string>, System.Func<string, double>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1173 | _simulationConfiguredHomeSpeeds.GetOrAdd | resolved | double System.Collections.Concurrent.ConcurrentDictionary<string, double>.GetOrAdd(string, double) |
| 1173 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 1173 | axes.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<string>.ToDictionary<string, string, string>(System.Func<string, string>, System.Func<string, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1174 | ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1174 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1174 | string.Join | resolved | string string.Join(char, params string?[]) |
| 1176 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1177 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1178 | JsonDocument.Parse | resolved | System.Text.Json.JsonDocument System.Text.Json.JsonDocument.Parse(string, System.Text.Json.JsonDocumentOptions) |
| 1180 | root.TryGetProperty | resolved | bool System.Text.Json.JsonElement.TryGetProperty(string, out System.Text.Json.JsonElement) |
| 1181 | root.GetProperty | resolved | System.Text.Json.JsonElement System.Text.Json.JsonElement.GetProperty(string) |
| 1182 | valuesElement.Deserialize<Dictionary<string, double>> | resolved | System.Collections.Generic.Dictionary<string, double>? System.Text.Json.JsonElement.Deserialize<System.Collections.Generic.Dictionary<string, double>>(System.Text.Json.JsonSerializerOptions?) |
| 1182 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1183 | root.TryGetProperty | resolved | bool System.Text.Json.JsonElement.TryGetProperty(string, out System.Text.Json.JsonElement) |
| 1183 | unitsElement.Deserialize<Dictionary<string, string>> | resolved | System.Collections.Generic.Dictionary<string, string>? System.Text.Json.JsonElement.Deserialize<System.Collections.Generic.Dictionary<string, string>>(System.Text.Json.JsonSerializerOptions?) |
| 1184 | new CConfiguredHomeSpeedValues | resolved | Drilling.Common.Automation.CConfiguredHomeSpeedValues.CConfiguredHomeSpeedValues(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>?) · Drilling.Common/Automation/CAutomationManager.cs:1647 |
| 1185 | axes.Any | resolved | bool System.Collections.Generic.IEnumerable<string>.Any<string>(System.Func<string, bool>) |
| 1185 | result.TryGetValue | resolved | bool System.Collections.ObjectModel.ReadOnlyDictionary<string, double>.TryGetValue(string, out double) |
| 1185 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1186 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentNullException.ThrowIfNull(axisNames) |
| 1167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentOutOfRangeException.ThrowIfNegative(number) |
| 1168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNames.Select(ValidateConfiguredHomeAxis).Distinct(StringComparer.OrdinalIgnoreCase).ToArray() |
| 1169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNames.Select(ValidateConfiguredHomeAxis).Distinct(StringComparer.OrdinalIgnoreCase) |
| 1169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNames.Select(ValidateConfiguredHomeAxis) |
| 1169 | local-declaration | 지역 변수를 선언합니다: var axes = axisNames.Select(ValidateConfiguredHomeAxis).Distinct(StringComparer.OrdinalIgnoreCase).ToArray(); |
| 1169 | variable-initializer | 변수의 초기값을 지정합니다: axes = axisNames.Select(ValidateConfiguredHomeAxis).Distinct(StringComparer.OrdinalIgnoreCase).ToArray() |
| 1170 | if | 조건에 따라 분기합니다: if (axes.Length == 0) |
| 1171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CConfiguredHomeSpeedValues([]) |
| 1171 | return | 호출자에게 값 또는 제어를 반환합니다: return new CConfiguredHomeSpeedValues([]); |
| 1172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 1172 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CConfiguredHomeSpeedValues(axes.ToDictionary(axis => axis, axis => _simulationConfiguredHomeSpeeds.GetOrAdd(CreateSimulationAxisKey(number, axis), 20.0), StringComparer.OrdinalIgnoreCase), axes.ToDictionary(axis => a… |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axes.ToDictionary(axis => axis, axis => _simulationConfiguredHomeSpeeds.GetOrAdd(CreateSimulationAxisKey(number, axis), 20.0), StringComparer.OrdinalIgnoreCase) |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationConfiguredHomeSpeeds.GetOrAdd(CreateSimulationAxisKey(number, axis), 20.0) |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(number, axis) |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axes.ToDictionary(axis => axis, _ => "mm/sec", StringComparer.OrdinalIgnoreCase) |
| 1173 | return | 호출자에게 값 또는 제어를 반환합니다: return new CConfiguredHomeSpeedValues(axes.ToDictionary(axis => axis, axis => _simulationConfiguredHomeSpeeds.GetOrAdd(CreateSimulationAxisKey(number, axis), 20.0), StringComparer.OrdinalIgnoreCase), axes.ToDictionary(axis => axis |
| 1174 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true).ConfigureAwait(false) |
| 1174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true).ConfigureAwait(false) |
| 1174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true) |
| 1174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(',', axes) |
| 1174 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true).ConfigureAwait(false); |
| 1174 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEEDS:{string.Join(',', axes)}", number, cancellationToken, suppressLog: true).ConfigureAwait(false) |
| 1175 | local-declaration | 지역 변수를 선언합니다: const string prefix = "OK:CONFIG_HOME_SPEEDS:"; |
| 1175 | variable-initializer | 변수의 초기값을 지정합니다: prefix = "OK:CONFIG_HOME_SPEEDS:" |
| 1176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith(prefix, StringComparison.Ordinal) |
| 1176 | if | 조건에 따라 분기합니다: if (!response.StartsWith(prefix, StringComparison.Ordinal)) |
| 1177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Saved HomeSpeed values could not be read: {response}") |
| 1177 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Saved HomeSpeed values could not be read: {response}"); |
| 1178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: JsonDocument.Parse(response[prefix.Length..]) |
| 1178 | using-declaration | 정리할 자원을 선언합니다: using var document = JsonDocument.Parse(response[prefix.Length..]); |
| 1178 | variable-initializer | 변수의 초기값을 지정합니다: document = JsonDocument.Parse(response[prefix.Length..]) |
| 1179 | local-declaration | 지역 변수를 선언합니다: var root = document.RootElement; |
| 1179 | variable-initializer | 변수의 초기값을 지정합니다: root = document.RootElement |
| 1180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: root.TryGetProperty("Values", out _) |
| 1180 | local-declaration | 지역 변수를 선언합니다: var hasMetadata = root.ValueKind == JsonValueKind.Object && root.TryGetProperty("Values", out _); |
| 1180 | variable-initializer | 변수의 초기값을 지정합니다: hasMetadata = root.ValueKind == JsonValueKind.Object && root.TryGetProperty("Values", out _) |
| 1181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: root.GetProperty("Values") |
| 1181 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasMetadata ? root.GetProperty("Values") : root |
| 1181 | local-declaration | 지역 변수를 선언합니다: var valuesElement = hasMetadata ? root.GetProperty("Values") : root; |
| 1181 | variable-initializer | 변수의 초기값을 지정합니다: valuesElement = hasMetadata ? root.GetProperty("Values") : root |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: valuesElement.Deserialize<Dictionary<string, double>>() |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Saved HomeSpeed response was empty.") |
| 1182 | local-declaration | 지역 변수를 선언합니다: var values = valuesElement.Deserialize<Dictionary<string, double>>() ?? throw new InvalidOperationException("Saved HomeSpeed response was empty."); |
| 1182 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Saved HomeSpeed response was empty.") |
| 1182 | variable-initializer | 변수의 초기값을 지정합니다: values = valuesElement.Deserialize<Dictionary<string, double>>() ?? throw new InvalidOperationException("Saved HomeSpeed response was empty.") |
| 1183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: root.TryGetProperty("Units", out var unitsElement) |
| 1183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: unitsElement.Deserialize<Dictionary<string, string>>() |
| 1183 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasMetadata && root.TryGetProperty("Units", out var unitsElement) ? unitsElement.Deserialize<Dictionary<string, string>>() : null |
| 1183 | local-declaration | 지역 변수를 선언합니다: var units = hasMetadata && root.TryGetProperty("Units", out var unitsElement) ? unitsElement.Deserialize<Dictionary<string, string>>() : null; |
| 1183 | variable-initializer | 변수의 초기값을 지정합니다: units = hasMetadata && root.TryGetProperty("Units", out var unitsElement) ? unitsElement.Deserialize<Dictionary<string, string>>() : null |
| 1184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CConfiguredHomeSpeedValues(values, units) |
| 1184 | local-declaration | 지역 변수를 선언합니다: var result = new CConfiguredHomeSpeedValues(values, units); |
| 1184 | variable-initializer | 변수의 초기값을 지정합니다: result = new CConfiguredHomeSpeedValues(values, units) |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axes.Any(axis => !result.TryGetValue(axis, out var value) &#124;&#124; !double.IsFinite(value) &#124;&#124; value < 0) |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: result.TryGetValue(axis, out var value) |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 1185 | if | 조건에 따라 분기합니다: if (result.Count != axes.Length &#124;&#124; axes.Any(axis => !result.TryGetValue(axis, out var value) &#124;&#124; !double.IsFinite(value) &#124;&#124; value < 0)) |
| 1186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Saved HomeSpeed response did not contain valid values for the requested axes.") |
| 1186 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Saved HomeSpeed response did not contain valid values for the requested axes."); |
| 1187 | return | 호출자에게 값 또는 제어를 반환합니다: return result; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadConfiguredHomeSpeeds"]
 N0["L1170 if"]
 M -->|포함| N0
 N1["L1172 if"]
 M -->|포함| N1
 N2["L1176 if"]
 M -->|포함| N2
 N3["L1185 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetConfiguredHomeSpeed` · L1191–1218

[Drilling.Common/Automation/CAutomationManager.cs:1191–1218](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1191-L1218)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<double> Drilling.Common.Automation.CAutomationManager.SetConfiguredHomeSpeed(string, double, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<double> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

원본 XML 주석:

````xml
/// <summary>Saves and verifies one HomeSpeed; does not change active parameters or reset the controller.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |
| speed | double | None | False /  |
| number | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1892–1892](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1892-L1892) | _manager.automation.SetConfiguredHomeSpeed | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1193 | ValidateConfiguredHomeAxis | resolved | string Drilling.Common.Automation.CAutomationManager.ValidateConfiguredHomeAxis(string) · Drilling.Common/Automation/CAutomationManager.cs:1220 |
| 1194 | ArgumentOutOfRangeException.ThrowIfNegative | resolved | void System.ArgumentOutOfRangeException.ThrowIfNegative<int>(int, string?) |
| 1195 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1196 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 1196 | nameof | unresolved | None |
| 1197 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1200 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1202 | CreateSimulationAxisKey | resolved | string Drilling.Common.Automation.CAutomationManager.CreateSimulationAxisKey(int, string) · Drilling.Common/Automation/CAutomationManager.cs:869 |
| 1207 | ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1207 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1207 | speed.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1209 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1209 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 1209 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1210 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1216 | StatusSnapshots.RequestConfiguredHomeSpeedsRefresh | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.RequestConfiguredHomeSpeedsRefresh(int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:241 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateConfiguredHomeAxis(axisName) |
| 1193 | local-declaration | 지역 변수를 선언합니다: var axis = ValidateConfiguredHomeAxis(axisName); |
| 1193 | variable-initializer | 변수의 초기값을 지정합니다: axis = ValidateConfiguredHomeAxis(axisName) |
| 1194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentOutOfRangeException.ThrowIfNegative(number) |
| 1195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(speed) |
| 1195 | if | 조건에 따라 분기합니다: if (!double.IsFinite(speed) &#124;&#124; speed <= 0) |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(speed), "Home speed must be finite and greater than zero.") |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(speed) |
| 1196 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(speed), "Home speed must be finite and greater than zero."); |
| 1197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1198 | try | 예외 처리 범위입니다: try |
| 1200 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(number) |
| 1200 | if | 조건에 따라 분기합니다: if (IsSimul(number)) |
| 1202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationAxisKey(number, axis) |
| 1202 | local-declaration | 지역 변수를 선언합니다: var key = CreateSimulationAxisKey(number, axis); |
| 1202 | variable-initializer | 변수의 초기값을 지정합니다: key = CreateSimulationAxisKey(number, axis) |
| 1203 | assignment | 값을 대상에 대입합니다: _simulationConfiguredHomeSpeeds[key] = speed |
| 1204 | return | 호출자에게 값 또는 제어를 반환합니다: return _simulationConfiguredHomeSpeeds[key]; |
| 1207 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken).ConfigureAwait(false) |
| 1207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken).ConfigureAwait(false) |
| 1207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken) |
| 1207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: speed.ToString("R", CultureInfo.InvariantCulture) |
| 1207 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken).ConfigureAwait(false); |
| 1207 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:CONFIG:HOME_SPEED:{axis}:{speed.ToString("R", CultureInfo.InvariantCulture)}", number, cancellationToken).ConfigureAwait(false) |
| 1208 | local-declaration | 지역 변수를 선언합니다: const string prefix = "OK:CONFIG_HOME_SPEED:"; |
| 1208 | variable-initializer | 변수의 초기값을 지정합니다: prefix = "OK:CONFIG_HOME_SPEED:" |
| 1209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith(prefix, StringComparison.Ordinal) |
| 1209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(response[prefix.Length..], NumberStyles.Float, CultureInfo.InvariantCulture, out var saved) |
| 1209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(saved) |
| 1209 | if | 조건에 따라 분기합니다: if (!response.StartsWith(prefix, StringComparison.Ordinal) &#124;&#124; !double.TryParse(response[prefix.Length..], NumberStyles.Float, CultureInfo.InvariantCulture, out var saved) &#124;&#124; !double.IsFinite(saved) &#124;&#124; saved != speed) |
| 1210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"HomeSpeed save could not be verified. Axis={axis}, response={response}") |
| 1210 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"HomeSpeed save could not be verified. Axis={axis}, response={response}"); |
| 1211 | return | 호출자에게 값 또는 제어를 반환합니다: return saved; |
| 1213 | finally | 종료 정리 구간입니다: finally |
| 1216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.RequestConfiguredHomeSpeedsRefresh(number) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetConfiguredHomeSpeed"]
 N0["L1195 if"]
 M -->|포함| N0
 N1["L1198 try"]
 M -->|포함| N1
 N2["L1200 if"]
 N1 -->|포함| N2
 N3["L1209 if"]
 N1 -->|포함| N3
 N4["L1213 finally"]
 N1 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateConfiguredHomeAxis` · L1220–1231

[Drilling.Common/Automation/CAutomationManager.cs:1220–1231](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1220-L1231)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.ValidateConfiguredHomeAxis(string) |
| 접근/수식자 | Internal / internal, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1193–1193](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1193-L1193) | ValidateConfiguredHomeAxis | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1222 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 1223 | axisName.Trim | resolved | string string.Trim() |
| 1224 | IsAeroScriptAxisIdentifier | resolved | bool Drilling.Common.Automation.CAutomationManager.IsAeroScriptAxisIdentifier(string) · Drilling.Common/Automation/CAutomationManager.cs:797 |
| 1225 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?, string?) |
| 1225 | nameof | unresolved | None |
| 1226 | axis.All | resolved | bool System.Collections.Generic.IEnumerable<char>.All<char>(System.Func<char, bool>) |
| 1228 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 1229 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?, string?) |
| 1229 | nameof | unresolved | None |
| 1230 | axisNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1222 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(axisName) |
| 1223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisName.Trim() |
| 1223 | local-declaration | 지역 변수를 선언합니다: var axis = axisName.Trim(); |
| 1223 | variable-initializer | 변수의 초기값을 지정합니다: axis = axisName.Trim() |
| 1224 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsAeroScriptAxisIdentifier(axis) |
| 1224 | if | 조건에 따라 분기합니다: if (!IsAeroScriptAxisIdentifier(axis)) |
| 1225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("Axis reference must be an axis name or a nonnegative axis number.", nameof(axisName)) |
| 1225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(axisName) |
| 1225 | throw | 예외를 발생/전달합니다: throw new ArgumentException("Axis reference must be an axis name or a nonnegative axis number.", nameof(axisName)); |
| 1226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axis.All(char.IsAsciiDigit) |
| 1226 | if | 조건에 따라 분기합니다: if (!axis.All(char.IsAsciiDigit)) |
| 1227 | return | 호출자에게 값 또는 제어를 반환합니다: return axis; |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(axis, NumberStyles.None, CultureInfo.InvariantCulture, out var axisNo) |
| 1228 | if | 조건에 따라 분기합니다: if (!int.TryParse(axis, NumberStyles.None, CultureInfo.InvariantCulture, out var axisNo)) |
| 1229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("Axis number is out of range.", nameof(axisName)) |
| 1229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(axisName) |
| 1229 | throw | 예외를 발생/전달합니다: throw new ArgumentException("Axis number is out of range.", nameof(axisName)); |
| 1230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisNo.ToString(CultureInfo.InvariantCulture) |
| 1230 | return | 호출자에게 값 또는 제어를 반환합니다: return axisNo.ToString(CultureInfo.InvariantCulture); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateConfiguredHomeAxis"]
 N0["L1224 if"]
 M -->|포함| N0
 N1["L1226 if"]
 M -->|포함| N1
 N2["L1228 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareMofReadiness` · L1235–1252

[Drilling.Common/Automation/CAutomationManager.cs:1235–1252](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1235-L1252)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.PrepareMofReadiness(int, int, long, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| task | int | None | False /  |
| controller | int | None | False /  |
| runId | long | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4050–4050](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4050-L4050) | _automationManager.PrepareMofReadiness | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1237 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1238 | ValidateTaskIndex | resolved | void Drilling.Common.Automation.CAutomationManager.ValidateTaskIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:585 |
| 1240 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 1240 | nameof | unresolved | None |
| 1241 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1242 | new | resolved | Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.CSimulatedMofReadiness(long) · Drilling.Common/Automation/CAutomationManager.cs:1278 |
| 1247 | ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1247 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1248 | EnsureAutomationResponseSucceeded | resolved | void Drilling.Common.Automation.CAutomationManager.EnsureAutomationResponseSucceeded(string, string) · Drilling.Common/Automation/CAutomationManager.cs:726 |
| 1251 | StatusSnapshots.InvalidateMofReadiness | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateMofReadiness(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:385 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1238 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateTaskIndex(task) |
| 1239 | if | 조건에 따라 분기합니다: if (runId <= 0) |
| 1240 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(runId)) |
| 1240 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(runId) |
| 1240 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(runId)); |
| 1241 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(controller) |
| 1241 | if | 조건에 따라 분기합니다: if (IsSimul(controller)) |
| 1242 | assignment | 값을 대상에 대입합니다: _simulatedMofReadiness[(controller, task)] = new(runId) |
| 1242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(runId) |
| 1243 | else | 앞 조건이 거짓인 경로입니다: else |
| 1247 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token).ConfigureAwait(false) |
| 1247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token).ConfigureAwait(false) |
| 1247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token) |
| 1247 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token).ConfigureAwait(false); |
| 1247 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;SET_MOF_READINESS&#124;{task}&#124;0", controller, token).ConfigureAwait(false) |
| 1248 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureAutomationResponseSucceeded(response, $"MOF readiness reset failed: A{controller}/T{task}.") |
| 1251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateMofReadiness(task, controller) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareMofReadiness"]
 N0["L1239 if"]
 M -->|포함| N0
 N1["L1241 if"]
 M -->|포함| N1
 N2["L1243 else"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadMofReadiness` · L1254–1265

[Drilling.Common/Automation/CAutomationManager.cs:1254–1265](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1254-L1265)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_MOF_READINESS> Drilling.Common.Automation.CAutomationManager.ReadMofReadiness(int, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_MOF_READINESS> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| task | int | None | False /  |
| controller | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:384–384](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L384-L384) | _automation.ReadMofReadiness | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1256 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1257 | CMofReadiness.VariableIndex | resolved | int Drilling.Common.Automation.CMofReadiness.VariableIndex(int) · Drilling.Common/Automation/CAutomationManager.cs:1763 |
| 1258 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1259 | new | resolved | Drilling.Common.Automation.ST_MOF_READINESS.ST_MOF_READINESS(long) · Drilling.Common/Automation/CAutomationManager.cs:1756 |
| 1259 | _simulatedMofReadiness.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness) |
| 1260 | ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 1260 | ExecuteRaw | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ExecuteRaw(string, int, System.Threading.CancellationToken, bool) · Drilling.Common/Automation/CAutomationManager.cs:180 |
| 1261 | response.Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 1262 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 1262 | long.TryParse | resolved | bool long.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |
| 1263 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1264 | new | resolved | Drilling.Common.Automation.ST_MOF_READINESS.ST_MOF_READINESS(long) · Drilling.Common/Automation/CAutomationManager.cs:1756 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMofReadiness.VariableIndex(task) |
| 1257 | local-declaration | 지역 변수를 선언합니다: var index = CMofReadiness.VariableIndex(task); |
| 1257 | variable-initializer | 변수의 초기값을 지정합니다: index = CMofReadiness.VariableIndex(task) |
| 1258 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(controller) |
| 1258 | if | 조건에 따라 분기합니다: if (IsSimul(controller)) |
| 1259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_simulatedMofReadiness.TryGetValue((controller, task), out var ready) ? ready.Value : 0) |
| 1259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulatedMofReadiness.TryGetValue((controller, task), out var ready) |
| 1259 | conditional-expression | 조건에 따라 결과식을 선택합니다: _simulatedMofReadiness.TryGetValue((controller, task), out var ready) ? ready.Value : 0 |
| 1259 | return | 호출자에게 값 또는 제어를 반환합니다: return new(_simulatedMofReadiness.TryGetValue((controller, task), out var ready) ? ready.Value : 0); |
| 1260 | await | 비동기 완료를 기다립니다: await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true) |
| 1260 | local-declaration | 지역 변수를 선언합니다: var response = await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true).ConfigureAwait(false); |
| 1260 | variable-initializer | 변수의 초기값을 지정합니다: response = await ExecuteRaw($"AUTOMATION1:VARIABLE&#124;GET_MOF_READINESS&#124;{task}", controller, token, suppressLog: true).ConfigureAwait(false) |
| 1261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.Split(':') |
| 1261 | local-declaration | 지역 변수를 선언합니다: var fields = response.Split(':'); |
| 1261 | variable-initializer | 변수의 초기값을 지정합니다: fields = response.Split(':') |
| 1262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(fields[2], NumberStyles.Integer, CultureInfo.InvariantCulture, out var receivedIndex) |
| 1262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(fields[3], NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) |
| 1262 | if | 조건에 따라 분기합니다: if (fields.Length != 4 &#124;&#124; fields[0] != "OK" &#124;&#124; fields[1] != "GLOBAL_INTEGER" &#124;&#124; !int.TryParse(fields[2], NumberStyles.Integer, CultureInfo.InvariantCulture, out var receivedIndex) &#124;&#124; receivedIndex != index &#124;&#124; !long.TryParse(…) |
| 1263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MOF readiness read failed: A{controller}/T{task}. {response}") |
| 1263 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MOF readiness read failed: A{controller}/T{task}. {response}"); |
| 1264 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(value) |
| 1264 | return | 호출자에게 값 또는 제어를 반환합니다: return new(value); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadMofReadiness"]
 N0["L1258 if"]
 M -->|포함| N0
 N1["L1262 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PublishSimulatedMofReadiness` · L1267–1276

[Drilling.Common/Automation/CAutomationManager.cs:1267–1276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1267-L1276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.PublishSimulatedMofReadiness(int, int, Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| controller | int | None | False /  |
| task | int | None | False /  |
| session | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1293–1293](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1293-L1293) | PublishSimulatedMofReadiness | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1269 | _simulatedMofReadiness.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness) |
| 1271 | Task.Delay(200).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1271 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int) |
| 1272 | _stageSimulationTasks.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 1272 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 1272 | _simulatedMofReadiness.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness) |
| 1272 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 1274 | ready.Publish | resolved | void Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.Publish() · Drilling.Common/Automation/CAutomationManager.cs:1283 |
| 1275 | StatusSnapshots.InvalidateMofReadiness | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateMofReadiness(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:385 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulatedMofReadiness.TryGetValue((controller, task), out var ready) |
| 1269 | if | 조건에 따라 분기합니다: if (!_simulatedMofReadiness.TryGetValue((controller, task), out var ready)) |
| 1270 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1271 | await | 비동기 완료를 기다립니다: await Task.Delay(200).ConfigureAwait(false) |
| 1271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(200).ConfigureAwait(false) |
| 1271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(200) |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationTasks.TryGetValue((controller, task), out var active) |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(active, session) |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulatedMofReadiness.TryGetValue((controller, task), out var current) |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(current, ready) |
| 1272 | if | 조건에 따라 분기합니다: if (!session.IsActive &#124;&#124; !_stageSimulationTasks.TryGetValue((controller, task), out var active) &#124;&#124; !ReferenceEquals(active, session) &#124;&#124; !_simulatedMofReadiness.TryGetValue((controller, task), out var current) &#124;&#124; !ReferenceEq…) |
| 1273 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ready.Publish() |
| 1275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateMofReadiness(task, controller) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PublishSimulatedMofReadiness"]
 N0["L1269 if"]
 M -->|포함| N0
 N1["L1272 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_value` · L1280–1280

[Drilling.Common/Automation/CAutomationManager.cs:1280–1280](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1280-L1280)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness._value |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Value` · L1281–1281

[Drilling.Common/Automation/CAutomationManager.cs:1281–1281](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1281-L1281)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.Value |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1281 | Interlocked.Read | resolved | long System.Threading.Interlocked.Read(ref readonly long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Read(ref _value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Publish` · L1283–1283

[Drilling.Common/Automation/CAutomationManager.cs:1283–1283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1283-L1283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness.Publish() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CSimulatedMofReadiness |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1274–1274](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1274-L1274) | ready.Publish | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1283 | Interlocked.Exchange | resolved | long System.Threading.Interlocked.Exchange(ref long, long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _value, expected) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterStageSimulationTask` · L1288–1295

[Drilling.Common/Automation/CAutomationManager.cs:1288–1295](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1288-L1295)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask Drilling.Common.Automation.CAutomationManager.RegisterStageSimulationTask(int, int, string, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| controller | int | None | False /  |
| task | int | None | False /  |
| file | string | None | False /  |
| buffered | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:460–460](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L460-L460) | RegisterStageSimulationTask | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1103–1103](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1103-L1103) | RegisterStageSimulationTask | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1290 | new CStageSimulatedTask | resolved | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.CStageSimulatedTask(string, bool, System.Action) · Drilling.Common/Automation/CAutomationManager.cs:1321 |
| 1290 | StatusSnapshots.InvalidateTask | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateTask(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:361 |
| 1291 | _stageSimulationTasks.AddOrUpdate | resolved | Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.AddOrUpdate((int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask, System.Func<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask, Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>) |
| 1291 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1292 | StatusSnapshots.InvalidateTask | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateTask(int, int) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:361 |
| 1293 | PublishSimulatedMofReadiness | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.PublishSimulatedMofReadiness(int, int, Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) · Drilling.Common/Automation/CAutomationManager.cs:1267 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CStageSimulatedTask(file, buffered, () => StatusSnapshots.InvalidateTask(task, controller)) |
| 1290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateTask(task, controller) |
| 1290 | local-declaration | 지역 변수를 선언합니다: var session = new CStageSimulatedTask(file, buffered, () => StatusSnapshots.InvalidateTask(task, controller)); |
| 1290 | variable-initializer | 변수의 초기값을 지정합니다: session = new CStageSimulatedTask(file, buffered, () => StatusSnapshots.InvalidateTask(task, controller)) |
| 1291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationTasks.AddOrUpdate((controller, task), session, (_, previous) => previous.IsActive ? throw new InvalidOperationException($"Simulated Task is already running: A{controller}/T{task}.") : session) |
| 1291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Simulated Task is already running: A{controller}/T{task}.") |
| 1291 | conditional-expression | 조건에 따라 결과식을 선택합니다: previous.IsActive ? throw new InvalidOperationException($"Simulated Task is already running: A{controller}/T{task}.") : session |
| 1291 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Simulated Task is already running: A{controller}/T{task}.") |
| 1292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StatusSnapshots.InvalidateTask(task, controller) |
| 1293 | assignment | 값을 대상에 대입합니다: _ = PublishSimulatedMofReadiness(controller, task, session) |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishSimulatedMofReadiness(controller, task, session) |
| 1294 | return | 호출자에게 값 또는 제어를 반환합니다: return session; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StartStageMachiningSimulation` · L1298–1319

[Drilling.Common/Automation/CAutomationManager.cs:1298–1319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1298-L1319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.StartStageMachiningSimulation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager |

원본 XML 주석:

````xml
/// <summary>Only the Automation interface's own simulation setting permits a virtual completion.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targets | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:3804–3804](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3804-L3804) | _automationManager.StartStageMachiningSimulation | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3628–3628](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3628-L3628) | manager.automation.StartStageMachiningSimulation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1304 | targets.OrderBy(target => target.HeadNo).ToArray | resolved | Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET[] System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET>.ToArray<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET>() |
| 1304 | targets.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET> System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET>.OrderBy<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET, int>(System.Func<Drilling.Common.Automation.ST_STAGE_TASK_SIMULATION_TARGET, int>) |
| 1307 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1309 | IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1311 | _stageSimulationTasks.TryGetValue | resolved | bool System.Collections.Concurrent.ConcurrentDictionary<(int Controller, int Task), Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask>.TryGetValue((int Controller, int Task), out Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask) |
| 1312 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1317 | session.Start | resolved | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Start(System.TimeSpan, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1342 |
| 1317 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.OrderBy(target => target.HeadNo).ToArray() |
| 1304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.OrderBy(target => target.HeadNo) |
| 1304 | local-declaration | 지역 변수를 선언합니다: var ordered = targets.OrderBy(target => target.HeadNo).ToArray(); |
| 1304 | variable-initializer | 변수의 초기값을 지정합니다: ordered = targets.OrderBy(target => target.HeadNo).ToArray() |
| 1305 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 1305 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < ordered.Length; index++) |
| 1307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1308 | local-declaration | 지역 변수를 선언합니다: var target = ordered[index]; |
| 1308 | variable-initializer | 변수의 초기값을 지정합니다: target = ordered[index] |
| 1309 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimul(target.Controller) |
| 1309 | if | 조건에 따라 분기합니다: if (!IsSimul(target.Controller)) |
| 1310 | continue | 다음 반복으로 진행합니다: continue; |
| 1311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationTasks.TryGetValue((target.Controller, target.Task), out var session) |
| 1311 | if | 조건에 따라 분기합니다: if (!_stageSimulationTasks.TryGetValue((target.Controller, target.Task), out var session)) |
| 1312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"No simulated RUN for H{target.HeadNo:00}: A{target.Controller}/T{target.Task}.") |
| 1312 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"No simulated RUN for H{target.HeadNo:00}: A{target.Controller}/T{target.Task}."); |
| 1317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: session.Start(TimeSpan.FromSeconds(3 + index), token) |
| 1317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(3 + index) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StartStageMachiningSimulation"]
 N0["L1305 for"]
 M -->|포함| N0
 N1["L1309 if"]
 N0 -->|포함| N1
 N2["L1311 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_sync` · L1323–1323

[Drilling.Common/Automation/CAutomationManager.cs:1323–1323](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1323-L1323)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._sync |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1323 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 1323 | variable-initializer | 변수의 초기값을 지정합니다: _sync = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_completion` · L1324–1324

[Drilling.Common/Automation/CAutomationManager.cs:1324–1324](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1324-L1324)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.TaskCompletionSource Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._completion |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.Tasks.TaskCompletionSource |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1324 | new | resolved | System.Threading.Tasks.TaskCompletionSource.TaskCompletionSource(System.Threading.Tasks.TaskCreationOptions) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(TaskCreationOptions.RunContinuationsAsynchronously) |
| 1324 | variable-initializer | 변수의 초기값을 지정합니다: _completion = new(TaskCreationOptions.RunContinuationsAsynchronously) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stop` · L1325–1325

[Drilling.Common/Automation/CAutomationManager.cs:1325–1325](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1325-L1325)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationTokenSource Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._stop |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.CancellationTokenSource |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1325 | new | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 1325 | variable-initializer | 변수의 초기값을 지정합니다: _stop = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_state` · L1326–1326

[Drilling.Common/Automation/CAutomationManager.cs:1326–1326](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1326-L1326)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._state |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1326 | conditional-expression | 조건에 따라 결과식을 선택합니다: buffered ? "QueueRunning" : "ProgramRunning" |
| 1326 | variable-initializer | 변수의 초기값을 지정합니다: _state = buffered ? "QueueRunning" : "ProgramRunning" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_started` · L1327–1327

[Drilling.Common/Automation/CAutomationManager.cs:1327–1327](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1327-L1327)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask._started |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `File` · L1328–1328

[Drilling.Common/Automation/CAutomationManager.cs:1328–1328](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1328-L1328)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.File |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_File` · L1328–1328

[Drilling.Common/Automation/CAutomationManager.cs:1328–1328](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1328-L1328)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.File.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `State` · L1330–1337

[Drilling.Common/Automation/CAutomationManager.cs:1330–1337](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1330-L1337)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.State |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_State` · L1332–1336

[Drilling.Common/Automation/CAutomationManager.cs:1332–1336](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1332-L1336)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.State.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1334 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_sync) |
| 1335 | return | 호출자에게 값 또는 제어를 반환합니다: return _state; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_State"]
 N0["L1334 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsActive` · L1339–1339

[Drilling.Common/Automation/CAutomationManager.cs:1339–1339](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1339-L1339)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.IsActive |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Completion` · L1340–1340

[Drilling.Common/Automation/CAutomationManager.cs:1340–1340](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1340-L1340)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Completion |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Start` · L1342–1354

[Drilling.Common/Automation/CAutomationManager.cs:1342–1354](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1342-L1354)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Start(System.TimeSpan, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| duration | System.TimeSpan | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1317–1317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1317-L1317) | session.Start | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1347 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1349 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1353 | CompleteAfter | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.CompleteAfter(System.TimeSpan, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1356 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1344 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_sync) |
| 1346 | if | 조건에 따라 분기합니다: if (_started) |
| 1347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Simulated machining was already started.") |
| 1347 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Simulated machining was already started."); |
| 1348 | if | 조건에 따라 분기합니다: if (!IsActive) |
| 1349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Simulated Task is no longer running.") |
| 1349 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Simulated Task is no longer running."); |
| 1350 | assignment | 값을 대상에 대입합니다: _started = true |
| 1353 | assignment | 값을 대상에 대입합니다: _ = CompleteAfter(duration, token) |
| 1353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteAfter(duration, token) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Start"]
 N0["L1344 lock"]
 M -->|포함| N0
 N1["L1346 if"]
 N0 -->|포함| N1
 N2["L1348 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteAfter` · L1356–1382

[Drilling.Common/Automation/CAutomationManager.cs:1356–1382](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1356-L1382)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.CompleteAfter(System.TimeSpan, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| duration | System.TimeSpan | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1353–1353](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1353-L1353) | CompleteAfter | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1358 | CancellationTokenSource.CreateLinkedTokenSource | resolved | System.Threading.CancellationTokenSource System.Threading.CancellationTokenSource.CreateLinkedTokenSource(System.Threading.CancellationToken, System.Threading.CancellationToken) |
| 1361 | Task.Delay(duration, limit.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1361 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(System.TimeSpan, System.Threading.CancellationToken) |
| 1364 | limit.Token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1368 | _completion.TrySetResult | resolved | bool System.Threading.Tasks.TaskCompletionSource.TrySetResult() |
| 1371 | changed | resolved · 동적 구현 선택 가능 | void System.Action.Invoke() |
| 1375 | Stop | resolved | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Stop() · Drilling.Common/Automation/CAutomationManager.cs:1384 |
| 1380 | _stop.Dispose | resolved | void System.Threading.CancellationTokenSource.Dispose() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1358 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancellationTokenSource.CreateLinkedTokenSource(token, _stop.Token) |
| 1358 | using-declaration | 정리할 자원을 선언합니다: using var limit = CancellationTokenSource.CreateLinkedTokenSource(token, _stop.Token); |
| 1358 | variable-initializer | 변수의 초기값을 지정합니다: limit = CancellationTokenSource.CreateLinkedTokenSource(token, _stop.Token) |
| 1359 | try | 예외 처리 범위입니다: try |
| 1361 | await | 비동기 완료를 기다립니다: await Task.Delay(duration, limit.Token).ConfigureAwait(false) |
| 1361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(duration, limit.Token).ConfigureAwait(false) |
| 1361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(duration, limit.Token) |
| 1362 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_sync) |
| 1364 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: limit.Token.ThrowIfCancellationRequested() |
| 1365 | if | 조건에 따라 분기합니다: if (!IsActive) |
| 1366 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1367 | assignment | 값을 대상에 대입합니다: _state = buffered ? "QueueComplete" : "ProgramComplete" |
| 1367 | conditional-expression | 조건에 따라 결과식을 선택합니다: buffered ? "QueueComplete" : "ProgramComplete" |
| 1368 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _completion.TrySetResult() |
| 1371 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changed() |
| 1373 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) |
| 1375 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop() |
| 1377 | finally | 종료 정리 구간입니다: finally |
| 1379 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_sync) |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stop.Dispose() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteAfter"]
 N0["L1359 try"]
 M -->|포함| N0
 N1["L1362 lock"]
 N0 -->|포함| N1
 N2["L1365 if"]
 N1 -->|포함| N2
 N3["L1373 catch"]
 N0 -->|포함| N3
 N4["L1377 finally"]
 N0 -->|포함| N4
 N5["L1379 lock"]
 N4 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Stop` · L1384–1398

[Drilling.Common/Automation/CAutomationManager.cs:1384–1398](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1384-L1398)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask.Stop() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationManager.CStageSimulatedTask |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:477–477](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L477-L477) | session.Stop | False |
| [Drilling.Common/Automation/CAutomationManager.cs:513–513](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L513-L513) | session.Stop | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1375–1375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1375-L1375) | Stop | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1391 | _completion.TrySetCanceled | resolved | bool System.Threading.Tasks.TaskCompletionSource.TrySetCanceled() |
| 1392 | _stop.Cancel | resolved | void System.Threading.CancellationTokenSource.Cancel() |
| 1394 | _stop.Dispose | resolved | void System.Threading.CancellationTokenSource.Dispose() |
| 1397 | changed | resolved · 동적 구현 선택 가능 | void System.Action.Invoke() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1386 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_sync) |
| 1388 | if | 조건에 따라 분기합니다: if (!IsActive) |
| 1389 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1390 | assignment | 값을 대상에 대입합니다: _state = "Stopped" |
| 1391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _completion.TrySetCanceled() |
| 1392 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stop.Cancel() |
| 1393 | if | 조건에 따라 분기합니다: if (!_started) |
| 1394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stop.Dispose() |
| 1397 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changed() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Stop"]
 N0["L1386 lock"]
 M -->|포함| N0
 N1["L1388 if"]
 N0 -->|포함| N1
 N2["L1393 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseMask` · L1405–1413

[Drilling.Common/Automation/CAutomationManager.cs:1405–1413](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1405-L1413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long? Drilling.Common.Automation.CAutomationAxisFault.ParseMask(string) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | long? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationAxisFault |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1801–1801](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1801-L1801) | CAutomationAxisFault.ParseMask | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:7762–7762](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L7762-L7762) | CAutomationAxisFault.ParseMask | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1407 | value.Trim | resolved | string string.Trim() |
| 1408 | text.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1410 | text.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1411 | long.TryParse | resolved | bool long.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |
| 1412 | long.TryParse | resolved | bool long.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1407 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 1407 | local-declaration | 지역 변수를 선언합니다: var text = value.Trim(); |
| 1407 | variable-initializer | 변수의 초기값을 지정합니다: text = value.Trim() |
| 1408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Equals("None", StringComparison.OrdinalIgnoreCase) |
| 1408 | if | 조건에 따라 분기합니다: if (text.Equals("None", StringComparison.OrdinalIgnoreCase)) |
| 1409 | return | 호출자에게 값 또는 제어를 반환합니다: return 0; |
| 1410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.StartsWith("0x", StringComparison.OrdinalIgnoreCase) |
| 1410 | if | 조건에 따라 분기합니다: if (text.StartsWith("0x", StringComparison.OrdinalIgnoreCase)) |
| 1411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(text[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var hex) |
| 1411 | conditional-expression | 조건에 따라 결과식을 선택합니다: long.TryParse(text[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var hex) && hex >= 0 ? hex : null |
| 1411 | return | 호출자에게 값 또는 제어를 반환합니다: return long.TryParse(text[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var hex) && hex >= 0 ? hex : null; |
| 1412 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: long.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var mask) |
| 1412 | conditional-expression | 조건에 따라 결과식을 선택합니다: long.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var mask) && mask >= 0 ? mask : null |
| 1412 | return | 호출자에게 값 또는 제어를 반환합니다: return long.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var mask) && mask >= 0 ? mask : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseMask"]
 N0["L1408 if"]
 M -->|포함| N0
 N1["L1410 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RequiresReset` · L1415–1415

[Drilling.Common/Automation/CAutomationManager.cs:1415–1415](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1415-L1415)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationAxisFault.RequiresReset(long) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationAxisFault |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mask | long | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1435–1435](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1435-L1435) | RequiresReset | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1804–1804](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1804-L1804) | CAutomationAxisFault.RequiresReset | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8373–8373](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L8373-L8373) | CAutomationAxisFault.RequiresReset | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `HasLimitFault` · L1416–1416

[Drilling.Common/Automation/CAutomationManager.cs:1416–1416](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1416-L1416)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Automation.CAutomationAxisFault.HasLimitFault(long) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationAxisFault |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mask | long | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1789–1789](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L1789-L1789) | CAutomationAxisFault.HasLimitFault | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Describe` · L1417–1438

[Drilling.Common/Automation/CAutomationManager.cs:1417–1438](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1417-L1438)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CAutomationAxisFault.Describe(long) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationAxisFault |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mask | long | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8371–8371](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L8371-L8371) | CAutomationAxisFault.Describe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1421 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 1423 | Enum.GetNames<AxisFault>().Where | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Where<string>(System.Func<string, bool>) |
| 1423 | Enum.GetNames<AxisFault> | resolved | string[] System.Enum.GetNames<AxisFault>() |
| 1423 | name.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 1425 | Enum.Parse<AxisFault> | resolved | AxisFault System.Enum.Parse<AxisFault>(string) |
| 1429 | names.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1434 | names.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1435 | RequiresReset | resolved | bool Drilling.Common.Automation.CAutomationAxisFault.RequiresReset(long) · Drilling.Common/Automation/CAutomationManager.cs:1415 |
| 1436 | names.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1437 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1419 | if | 조건에 따라 분기합니다: if (mask == 0) |
| 1420 | return | 호출자에게 값 또는 제어를 반환합니다: return "활성 Fault 없음"; |
| 1421 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>() |
| 1421 | local-declaration | 지역 변수를 선언합니다: var names = new List<string>(); |
| 1421 | variable-initializer | 변수의 초기값을 지정합니다: names = new List<string>() |
| 1422 | local-declaration | 지역 변수를 선언합니다: long known = 0; |
| 1422 | variable-initializer | 변수의 초기값을 지정합니다: known = 0 |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetNames<AxisFault>().Where(name => name.EndsWith("Fault", StringComparison.Ordinal)) |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetNames<AxisFault>() |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.EndsWith("Fault", StringComparison.Ordinal) |
| 1423 | foreach | 컬렉션 요소를 순회합니다: foreach (var name in Enum.GetNames<AxisFault>().Where(name => name.EndsWith("Fault", StringComparison.Ordinal))) |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.Parse<AxisFault>(name) |
| 1425 | local-declaration | 지역 변수를 선언합니다: var fault = Enum.Parse<AxisFault>(name); |
| 1425 | variable-initializer | 변수의 초기값을 지정합니다: fault = Enum.Parse<AxisFault>(name) |
| 1426 | local-declaration | 지역 변수를 선언합니다: var bit = (long)fault; |
| 1426 | variable-initializer | 변수의 초기값을 지정합니다: bit = (long)fault |
| 1427 | if | 조건에 따라 분기합니다: if (bit == 0 &#124;&#124; (known & bit) == bit &#124;&#124; (mask & bit) != bit) |
| 1428 | continue | 다음 반복으로 진행합니다: continue; |
| 1429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: names.Add(name) |
| 1430 | assignment | 값을 대상에 대입합니다: known &#124;= bit |
| 1433 | if | 조건에 따라 분기합니다: if ((mask & ~known) != 0) |
| 1434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: names.Add($"Unknown Fault: 0x{mask & ~known:X}") |
| 1435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequiresReset(mask) |
| 1435 | if | 조건에 따라 분기합니다: if (RequiresReset(mask)) |
| 1436 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: names.Add("InternalFault는 컨트롤러 RESET이 필요합니다.") |
| 1437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("\n", names) |
| 1437 | return | 호출자에게 값 또는 제어를 반환합니다: return $"FAULT: 0x{mask:X}\n{string.Join("\n", names)}"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Describe"]
 N0["L1419 if"]
 M -->|포함| N0
 N1["L1423 foreach"]
 M -->|포함| N1
 N2["L1427 if"]
 N1 -->|포함| N2
 N3["L1433 if"]
 M -->|포함| N3
 N4["L1435 if"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Execute` · L1446–1489

[Drilling.Common/Automation/CAutomationManager.cs:1446–1489](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1446-L1489)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CMofZeroOperation.Execute(System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofZeroOperation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targets | System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1160–1160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1160-L1160) | new CMofZeroOperation(target => StatusSnapshots.GetAuxiliaryFeedback(target.Axis, target.Controller), (target, ct) => SetAuxiliaryFeedbackZero(target.Axis, target.Task, target.Controller, ct)).Execute | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1448 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1449 | targets.DistinctBy(t => (t.Controller, t.Axis.Trim().ToUpperInvariant())).ToArray | resolved | Drilling.Common.Automation.ST_MOF_ZERO_TARGET[] System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>.ToArray<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>() |
| 1449 | targets.DistinctBy | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET> System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_MOF_ZERO_TARGET>.DistinctBy<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, (int Controller, string)>(System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, (int Controller, string)>) |
| 1449 | t.Axis.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1449 | t.Axis.Trim | resolved | string string.Trim() |
| 1450 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1455 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1456 | read | resolved · 동적 구현 선택 가능 | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>>.Invoke(Drilling.Common.Automation.ST_MOF_ZERO_TARGET) |
| 1461 | CancellationTokenSource.CreateLinkedTokenSource | resolved | System.Threading.CancellationTokenSource System.Threading.CancellationTokenSource.CreateLinkedTokenSource(System.Threading.CancellationToken) |
| 1462 | timeout.CancelAfter | resolved | void System.Threading.CancellationTokenSource.CancelAfter(System.TimeSpan) |
| 1462 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1466 | WaitForValue(target, preparationStarted, timeout.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>>.ConfigureAwait(bool) |
| 1466 | WaitForValue | resolved | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> Drilling.Common.Automation.CMofZeroOperation.WaitForValue(Drilling.Common.Automation.ST_MOF_ZERO_TARGET, long, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1491 |
| 1470 | timeout.Token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1471 | zero(target, timeout.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1471 | zero | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, System.Threading.CancellationToken, System.Threading.Tasks.Task>.Invoke(Drilling.Common.Automation.ST_MOF_ZERO_TARGET, System.Threading.CancellationToken) |
| 1472 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1478 | WaitForValue(target, commandCompleted, timeout.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>>.ConfigureAwait(bool) |
| 1478 | WaitForValue | resolved | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> Drilling.Common.Automation.CMofZeroOperation.WaitForValue(Drilling.Common.Automation.ST_MOF_ZERO_TARGET, long, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1491 |
| 1481 | Task.Delay(50, timeout.Token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1481 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |
| 1486 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?, System.Exception?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1448 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.DistinctBy(t => (t.Controller, t.Axis.Trim().ToUpperInvariant())).ToArray() |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.DistinctBy(t => (t.Controller, t.Axis.Trim().ToUpperInvariant())) |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: t.Axis.Trim().ToUpperInvariant() |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: t.Axis.Trim() |
| 1449 | local-declaration | 지역 변수를 선언합니다: var preparedTargets = targets.DistinctBy(t => (t.Controller, t.Axis.Trim().ToUpperInvariant())).ToArray(); |
| 1449 | variable-initializer | 변수의 초기값을 지정합니다: preparedTargets = targets.DistinctBy(t => (t.Controller, t.Axis.Trim().ToUpperInvariant())).ToArray() |
| 1450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1450 | local-declaration | 지역 변수를 선언합니다: var preparationStarted = Stopwatch.GetTimestamp(); |
| 1450 | variable-initializer | 변수의 초기값을 지정합니다: preparationStarted = Stopwatch.GetTimestamp() |
| 1453 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in preparedTargets) |
| 1455 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: read(target) |
| 1459 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in preparedTargets) |
| 1461 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancellationTokenSource.CreateLinkedTokenSource(token) |
| 1461 | using-declaration | 정리할 자원을 선언합니다: using var timeout = CancellationTokenSource.CreateLinkedTokenSource(token); |
| 1461 | variable-initializer | 변수의 초기값을 지정합니다: timeout = CancellationTokenSource.CreateLinkedTokenSource(token) |
| 1462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: timeout.CancelAfter(TimeSpan.FromSeconds(10)) |
| 1462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(10) |
| 1463 | local-declaration | 지역 변수를 선언합니다: var phase = "새 보조 피드백 수집"; |
| 1463 | variable-initializer | 변수의 초기값을 지정합니다: phase = "새 보조 피드백 수집" |
| 1464 | try | 예외 처리 범위입니다: try |
| 1466 | await | 비동기 완료를 기다립니다: await WaitForValue(target, preparationStarted, timeout.Token).ConfigureAwait(false) |
| 1466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForValue(target, preparationStarted, timeout.Token).ConfigureAwait(false) |
| 1466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForValue(target, preparationStarted, timeout.Token) |
| 1466 | local-declaration | 지역 변수를 선언합니다: var before = await WaitForValue(target, preparationStarted, timeout.Token).ConfigureAwait(false); |
| 1466 | variable-initializer | 변수의 초기값을 지정합니다: before = await WaitForValue(target, preparationStarted, timeout.Token).ConfigureAwait(false) |
| 1467 | if | 조건에 따라 분기합니다: if (before.Value!.Position == 0) |
| 1468 | continue | 다음 반복으로 진행합니다: continue; |
| 1469 | assignment | 값을 대상에 대입합니다: phase = "ZERO_AUX 명령" |
| 1470 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: timeout.Token.ThrowIfCancellationRequested() |
| 1471 | await | 비동기 완료를 기다립니다: await zero(target, timeout.Token).ConfigureAwait(false) |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: zero(target, timeout.Token).ConfigureAwait(false) |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: zero(target, timeout.Token) |
| 1472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1472 | local-declaration | 지역 변수를 선언합니다: var commandCompleted = Stopwatch.GetTimestamp(); |
| 1472 | variable-initializer | 변수의 초기값을 지정합니다: commandCompleted = Stopwatch.GetTimestamp() |
| 1473 | assignment | 값을 대상에 대입합니다: phase = "ZERO_AUX 이후 새 0점 피드백 확인" |
| 1476 | while | 조건을 먼저 확인하며 반복합니다: while (true) |
| 1478 | await | 비동기 완료를 기다립니다: await WaitForValue(target, commandCompleted, timeout.Token).ConfigureAwait(false) |
| 1478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForValue(target, commandCompleted, timeout.Token).ConfigureAwait(false) |
| 1478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForValue(target, commandCompleted, timeout.Token) |
| 1478 | local-declaration | 지역 변수를 선언합니다: var after = await WaitForValue(target, commandCompleted, timeout.Token).ConfigureAwait(false); |
| 1478 | variable-initializer | 변수의 초기값을 지정합니다: after = await WaitForValue(target, commandCompleted, timeout.Token).ConfigureAwait(false) |
| 1479 | if | 조건에 따라 분기합니다: if (after.Version > before.Version && after.Value!.Position == 0) |
| 1480 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1481 | await | 비동기 완료를 기다립니다: await Task.Delay(50, timeout.Token).ConfigureAwait(false) |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, timeout.Token).ConfigureAwait(false) |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, timeout.Token) |
| 1484 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException error) when (timeout.IsCancellationRequested && !token.IsCancellationRequested) |
| 1486 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException($"MOF Zero Set 확인 시간 초과(10초): Controller {target.Controller}, Task {target.Task}, Axis {target.Axis}, 단계: {phase}.", error) |
| 1486 | throw | 예외를 발생/전달합니다: throw new TimeoutException($"MOF Zero Set 확인 시간 초과(10초): Controller {target.Controller}, Task {target.Task}, Axis {target.Axis}, 단계: {phase}.", error); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Execute"]
 N0["L1453 foreach"]
 M -->|포함| N0
 N1["L1459 foreach"]
 M -->|포함| N1
 N2["L1464 try"]
 N1 -->|포함| N2
 N3["L1467 if"]
 N2 -->|포함| N3
 N4["L1476 while"]
 N2 -->|포함| N4
 N5["L1479 if"]
 N4 -->|포함| N5
 N6["L1484 catch"]
 N2 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WaitForValue` · L1491–1503

[Drilling.Common/Automation/CAutomationManager.cs:1491–1503](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1491-L1503)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> Drilling.Common.Automation.CMofZeroOperation.WaitForValue(Drilling.Common.Automation.ST_MOF_ZERO_TARGET, long, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofZeroOperation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| target | Drilling.Common.Automation.ST_MOF_ZERO_TARGET | None | False /  |
| collectedAfter | long | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1466–1466](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1466-L1466) | WaitForValue | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1478–1478](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1478-L1478) | WaitForValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1495 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1496 | read | resolved · 동적 구현 선택 가능 | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK> System.Func<Drilling.Common.Automation.ST_MOF_ZERO_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>>.Invoke(Drilling.Common.Automation.ST_MOF_ZERO_TARGET) |
| 1497 | sample.IsFresh | resolved | bool Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUXILIARY_FEEDBACK>.IsFresh(System.TimeSpan) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:399 |
| 1497 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1497 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1500 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1501 | Task.Delay(50, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 1501 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1493 | while | 조건을 먼저 확인하며 반복합니다: while (true) |
| 1495 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 1496 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: read(target) |
| 1496 | local-declaration | 지역 변수를 선언합니다: var sample = read(target); |
| 1496 | variable-initializer | 변수의 초기값을 지정합니다: sample = read(target) |
| 1497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: sample.IsFresh(TimeSpan.FromSeconds(5)) |
| 1497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 1497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value.Position) |
| 1497 | if | 조건에 따라 분기합니다: if (sample.IsFresh(TimeSpan.FromSeconds(5)) && sample.CollectedTimestamp >= collectedAfter && sample.Value is { } value && double.IsFinite(value.Position)) |
| 1498 | return | 호출자에게 값 또는 제어를 반환합니다: return sample; |
| 1499 | if | 조건에 따라 분기합니다: if (sample.State is "ERROR" or "OFFLINE" or "STOPPED") |
| 1500 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MOF feedback unavailable: Controller {target.Controller}, {target.Axis}. {sample.State}: {sample.Detail}") |
| 1500 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MOF feedback unavailable: Controller {target.Controller}, {target.Axis}. {sample.State}: {sample.Detail}"); |
| 1501 | await | 비동기 완료를 기다립니다: await Task.Delay(50, token).ConfigureAwait(false) |
| 1501 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, token).ConfigureAwait(false) |
| 1501 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50, token) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WaitForValue"]
 N0["L1493 while"]
 M -->|포함| N0
 N1["L1497 if"]
 N0 -->|포함| N1
 N2["L1499 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsInPosition` · L1528–1528

[Drilling.Common/Automation/CAutomationManager.cs:1528–1528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1528-L1528)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool? |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsInPosition` · L1528–1528

[Drilling.Common/Automation/CAutomationManager.cs:1528–1528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1528-L1528)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool? |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_IsInPosition` · L1528–1528

[Drilling.Common/Automation/CAutomationManager.cs:1528–1528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1528-L1528)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsInPosition.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsMotionDone` · L1529–1529

[Drilling.Common/Automation/CAutomationManager.cs:1529–1529](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1529-L1529)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool? |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsMotionDone` · L1529–1529

[Drilling.Common/Automation/CAutomationManager.cs:1529–1529](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1529-L1529)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool? Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool? |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_IsMotionDone` · L1529–1529

[Drilling.Common/Automation/CAutomationManager.cs:1529–1529](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1529-L1529)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS.IsMotionDone.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `MoveAndWait` · L1537–1598

[Drilling.Common/Automation/CAutomationManager.cs:1537–1598](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1537-L1598)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.MoveAndWait(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targets | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L304-L304) | new CAutomationPositioningService(Automation).MoveAndWait | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2317–2317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L2317-L2317) | new CAutomationPositioningService(_manager.automation).MoveAndWait | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1539 | new HashSet<(int, string)> | resolved | System.Collections.Generic.HashSet<(int, string)>.HashSet() |
| 1542 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1542 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1542 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1542 | char.IsAsciiLetter | resolved | bool char.IsAsciiLetter(char) |
| 1542 | target.AxisReference.Any | resolved | bool System.Collections.Generic.IEnumerable<char>.Any<char>(System.Func<char, bool>) |
| 1542 | char.IsAsciiLetterOrDigit | resolved | bool char.IsAsciiLetterOrDigit(char) |
| 1542 | routes.Add | resolved | bool System.Collections.Generic.HashSet<(int, string)>.Add((int, string)) |
| 1542 | target.AxisReference.ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1543 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1544 | EnsureConnected | resolved | void Drilling.Common.Automation.CAutomationPositioningService.EnsureConnected(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1600 |
| 1545 | Read | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationPositioningService.Read(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1606 |
| 1550 | new List<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET> | resolved | System.Collections.Generic.List<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>.List() |
| 1551 | new Dictionary<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, long> | resolved | System.Collections.Generic.Dictionary<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, long>.Dictionary() |
| 1554 | WaitUntil | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.WaitUntil(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1620 |
| 1554 | ReadReady | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS? Drilling.Common.Automation.CAutomationPositioningService.ReadReady(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS>?) · Drilling.Common/Automation/CAutomationManager.cs:1607 |
| 1557 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1558 | EnsureConnected | resolved | void Drilling.Common.Automation.CAutomationPositioningService.EnsureConnected(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1600 |
| 1559 | attempted.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>.Add(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| 1560 | CancellationTokenSource.CreateLinkedTokenSource | resolved | System.Threading.CancellationTokenSource System.Threading.CancellationTokenSource.CreateLinkedTokenSource(System.Threading.CancellationToken) |
| 1561 | commandTimeout.CancelAfter | resolved | void System.Threading.CancellationTokenSource.CancelAfter(System.TimeSpan) |
| 1561 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1562 | EnsureResponse | resolved | void Drilling.Common.Automation.CAutomationPositioningService.EnsureResponse(string, string) · Drilling.Common/Automation/CAutomationManager.cs:1635 |
| 1562 | automation.ManualMove(target.AxisReference, target.Position, target.Speed, false, target.AutomationNo, commandTimeout.Token).WaitAsync | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task<string>.WaitAsync(System.Threading.CancellationToken) |
| 1562 | automation.ManualMove | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.ManualMove(string, double, double, bool, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:201 |
| 1563 | automation.StatusSnapshots.InvalidateAxis | resolved | void Drilling.Common.Automation.CAutomationStatusSnapshotService.InvalidateAxis(string, int, int, bool) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:25 |
| 1564 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1567 | WaitUntil | resolved | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.WaitUntil(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:1620 |
| 1569 | Read | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationPositioningService.Read(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1606 |
| 1572 | ReadReady | resolved | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS? Drilling.Common.Automation.CAutomationPositioningService.ReadReady(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS>?) · Drilling.Common/Automation/CAutomationManager.cs:1607 |
| 1573 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1573 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1573 | Math.Abs | resolved | double System.Math.Abs(double) |
| 1573 | Math.Abs | resolved | double System.Math.Abs(double) |
| 1578 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 1583 | new CancellationTokenSource | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource(System.TimeSpan) |
| 1583 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1584 | EnsureResponse | resolved | void Drilling.Common.Automation.CAutomationPositioningService.EnsureResponse(string, string) · Drilling.Common/Automation/CAutomationManager.cs:1635 |
| 1584 | automation.AbortMotion(target.AxisReference, target.AutomationNo, timeout.Token).WaitAsync | resolved | System.Threading.Tasks.Task<string> System.Threading.Tasks.Task<string>.WaitAsync(System.Threading.CancellationToken) |
| 1584 | automation.AbortMotion | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Automation.CAutomationManager.AbortMotion(string, int, System.Threading.CancellationToken) · Drilling.Common/Automation/CAutomationManager.cs:216 |
| 1588 | stopErrors.Add | resolved | void System.Collections.Generic.List<string>.Add(string) |
| 1593 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?, System.Exception?) |
| 1593 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 1595 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?, System.Exception?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<(int, string)>() |
| 1539 | local-declaration | 지역 변수를 선언합니다: var routes = new HashSet<(int, string)>(); |
| 1539 | variable-initializer | 변수의 초기값을 지정합니다: routes = new HashSet<(int, string)>() |
| 1540 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in targets) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(target.Position) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(target.Speed) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(target.AxisReference) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetter(target.AxisReference[0]) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: target.AxisReference.Any(c => !char.IsAsciiLetterOrDigit(c) && c != '_') |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: char.IsAsciiLetterOrDigit(c) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: routes.Add((target.AutomationNo, target.AxisReference.ToUpperInvariant())) |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: target.AxisReference.ToUpperInvariant() |
| 1542 | if | 조건에 따라 분기합니다: if (!double.IsFinite(target.Position) &#124;&#124; !double.IsFinite(target.Speed) &#124;&#124; target.Speed <= 0 &#124;&#124; string.IsNullOrWhiteSpace(target.AxisReference) &#124;&#124; !char.IsAsciiLetter(target.AxisReference[0]) &#124;&#124; target.AxisReference.Any(c =>…) |
| 1543 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{target.Label}: invalid or duplicate absolute move target.") |
| 1543 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{target.Label}: invalid or duplicate absolute move target."); |
| 1544 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureConnected(target) |
| 1545 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(target) |
| 1548 | if | 조건에 따라 분기합니다: if (targets.Count == 0) |
| 1549 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>() |
| 1550 | local-declaration | 지역 변수를 선언합니다: var attempted = new List<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>(); |
| 1550 | variable-initializer | 변수의 초기값을 지정합니다: attempted = new List<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>() |
| 1551 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, long>() |
| 1551 | local-declaration | 지역 변수를 선언합니다: var fences = new Dictionary<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, long>(); |
| 1551 | variable-initializer | 변수의 초기값을 지정합니다: fences = new Dictionary<ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, long>() |
| 1552 | try | 예외 처리 범위입니다: try |
| 1554 | await | 비동기 완료를 기다립니다: await WaitUntil(targets, target => ReadReady(target)is not null, cancellationToken) |
| 1554 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitUntil(targets, target => ReadReady(target)is not null, cancellationToken) |
| 1554 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadReady(target) |
| 1555 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in targets) |
| 1557 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1558 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureConnected(target) |
| 1559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: attempted.Add(target) |
| 1560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancellationTokenSource.CreateLinkedTokenSource(cancellationToken) |
| 1560 | using-declaration | 정리할 자원을 선언합니다: using var commandTimeout = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken); |
| 1560 | variable-initializer | 변수의 초기값을 지정합니다: commandTimeout = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken) |
| 1561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commandTimeout.CancelAfter(TimeSpan.FromSeconds(5)) |
| 1561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 1562 | await | 비동기 완료를 기다립니다: await automation.ManualMove(target.AxisReference, target.Position, target.Speed, false, target.AutomationNo, commandTimeout.Token).WaitAsync(commandTimeout.Token) |
| 1562 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureResponse(await automation.ManualMove(target.AxisReference, target.Position, target.Speed, false, target.AutomationNo, commandTimeout.Token).WaitAsync(commandTimeout.Token), target.Label) |
| 1562 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.ManualMove(target.AxisReference, target.Position, target.Speed, false, target.AutomationNo, commandTimeout.Token).WaitAsync(commandTimeout.Token) |
| 1562 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.ManualMove(target.AxisReference, target.Position, target.Speed, false, target.AutomationNo, commandTimeout.Token) |
| 1563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.StatusSnapshots.InvalidateAxis(target.AxisReference, target.AutomationNo, target.AioNo, target.ReadExtendedStatus) |
| 1564 | assignment | 값을 대상에 대입합니다: fences[target] = Stopwatch.GetTimestamp() |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1567 | await | 비동기 완료를 기다립니다: await WaitUntil(targets, target => { var snapshot = Read(target); if (snapshot.CollectedTimestamp <= fences[target]) return false; var status = ReadReady(target, snapshot); return status is { IsInPosition: true, IsMotionDone: true |
| 1567 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitUntil(targets, target => { var snapshot = Read(target); if (snapshot.CollectedTimestamp <= fences[target]) return false; var status = ReadReady(target, snapshot); return status is { IsInPosition: true, IsMotionDone: … |
| 1569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(target) |
| 1569 | local-declaration | 지역 변수를 선언합니다: var snapshot = Read(target); |
| 1569 | variable-initializer | 변수의 초기값을 지정합니다: snapshot = Read(target) |
| 1570 | if | 조건에 따라 분기합니다: if (snapshot.CollectedTimestamp <= fences[target]) |
| 1571 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadReady(target, snapshot) |
| 1572 | local-declaration | 지역 변수를 선언합니다: var status = ReadReady(target, snapshot); |
| 1572 | variable-initializer | 변수의 초기값을 지정합니다: status = ReadReady(target, snapshot) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(status.PositionFeedback) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(status.PositionCommand) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(status.PositionFeedback - target.Position) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(status.PositionCommand - target.Position) |
| 1573 | return | 호출자에게 값 또는 제어를 반환합니다: return status is { IsInPosition: true, IsMotionDone: true } && double.IsFinite(status.PositionFeedback) && double.IsFinite(status.PositionCommand) && Math.Abs(status.PositionFeedback - target.Position) <= 0.001 && Math.Abs(status. |
| 1576 | catch | 지정 예외를 처리합니다: catch (Exception failure) |
| 1578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>() |
| 1578 | local-declaration | 지역 변수를 선언합니다: var stopErrors = new List<string>(); |
| 1578 | variable-initializer | 변수의 초기값을 지정합니다: stopErrors = new List<string>() |
| 1579 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in attempted) |
| 1581 | try | 예외 처리 범위입니다: try |
| 1583 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CancellationTokenSource(TimeSpan.FromSeconds(5)) |
| 1583 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 1583 | using-declaration | 정리할 자원을 선언합니다: using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(5)); |
| 1583 | variable-initializer | 변수의 초기값을 지정합니다: timeout = new CancellationTokenSource(TimeSpan.FromSeconds(5)) |
| 1584 | await | 비동기 완료를 기다립니다: await automation.AbortMotion(target.AxisReference, target.AutomationNo, timeout.Token).WaitAsync(timeout.Token) |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureResponse(await automation.AbortMotion(target.AxisReference, target.AutomationNo, timeout.Token).WaitAsync(timeout.Token), $"{target.Label} STOP") |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.AbortMotion(target.AxisReference, target.AutomationNo, timeout.Token).WaitAsync(timeout.Token) |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.AbortMotion(target.AxisReference, target.AutomationNo, timeout.Token) |
| 1586 | catch | 지정 예외를 처리합니다: catch (Exception stopFailure) |
| 1588 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stopErrors.Add($"{target.Label}: {stopFailure.Message}") |
| 1592 | if | 조건에 따라 분기합니다: if (stopErrors.Count > 0) |
| 1593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{failure.Message}\n축 정지 확인 실패:\n{string.Join("\n", stopErrors)}", failure) |
| 1593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("\n", stopErrors) |
| 1593 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{failure.Message}\n축 정지 확인 실패:\n{string.Join("\n", stopErrors)}", failure); |
| 1594 | if | 조건에 따라 분기합니다: if (failure is OperationCanceledException && !cancellationToken.IsCancellationRequested) |
| 1595 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException("DOE Z 이동 명령 응답 시간이 초과되었습니다.", failure) |
| 1595 | throw | 예외를 발생/전달합니다: throw new TimeoutException("DOE Z 이동 명령 응답 시간이 초과되었습니다.", failure); |
| 1596 | throw | 예외를 발생/전달합니다: throw; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["MoveAndWait"]
 N0["L1540 foreach"]
 M -->|포함| N0
 N1["L1542 if"]
 N0 -->|포함| N1
 N2["L1548 if"]
 M -->|포함| N2
 N3["L1552 try"]
 M -->|포함| N3
 N4["L1555 foreach"]
 N3 -->|포함| N4
 N5["L1570 if"]
 N3 -->|포함| N5
 N6["L1576 catch"]
 N3 -->|포함| N6
 N7["L1579 foreach"]
 N6 -->|포함| N7
 N8["L1581 try"]
 N7 -->|포함| N8
 N9["L1586 catch"]
 N8 -->|포함| N9
 N10["L1592 if"]
 N6 -->|포함| N10
 N11["L1594 if"]
 N6 -->|포함| N11
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnsureConnected` · L1600–1604

[Drilling.Common/Automation/CAutomationManager.cs:1600–1604](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1600-L1604)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationPositioningService.EnsureConnected(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| target | Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1544–1544](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1544-L1544) | EnsureConnected | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1558–1558](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1558-L1558) | EnsureConnected | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1609–1609](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1609-L1609) | EnsureConnected | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1602 | automation.IsSimul | resolved | bool Drilling.Common.Automation.CAutomationManager.IsSimul(int) · Drilling.Common/Automation/CAutomationManager.cs:63 |
| 1602 | automation.IsConnect | resolved | bool Drilling.Common.Automation.CAutomationManager.IsConnect(int) · Drilling.Common/Automation/CAutomationManager.cs:58 |
| 1603 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.IsSimul(target.AutomationNo) |
| 1602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.IsConnect(target.AutomationNo) |
| 1602 | if | 조건에 따라 분기합니다: if (!automation.IsSimul(target.AutomationNo) && !automation.IsConnect(target.AutomationNo)) |
| 1603 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{target.Label}: controller is offline.") |
| 1603 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{target.Label}: controller is offline."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EnsureConnected"]
 N0["L1602 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Read` · L1606–1606

[Drilling.Common/Automation/CAutomationManager.cs:1606–1606](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1606-L1606)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationPositioningService.Read(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| target | Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1545–1545](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1545-L1545) | Read | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1569–1569](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1569-L1569) | Read | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1610–1610](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1610-L1610) | Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1606 | automation.StatusSnapshots.GetAxis | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationStatusSnapshotService.GetAxis(string, int, int, bool) · Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:23 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1606 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: automation.StatusSnapshots.GetAxis(target.AxisReference, target.AutomationNo, target.AioNo, target.ReadExtendedStatus) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadReady` · L1607–1618

[Drilling.Common/Automation/CAutomationManager.cs:1607–1618](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1607-L1618)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS? Drilling.Common.Automation.CAutomationPositioningService.ReadReady(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS>?) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| target | Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET | None | False /  |
| snapshot | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1554–1554](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1554-L1554) | ReadReady | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1572–1572](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1572-L1572) | ReadReady | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1609 | EnsureConnected | resolved | void Drilling.Common.Automation.CAutomationPositioningService.EnsureConnected(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1600 |
| 1610 | Read | resolved | Drilling.Common.Automation.ST_AUTOMATION_STATUS_SNAPSHOT<Drilling.Common.Automation.ST_AUTOMATION_AXIS_STATUS> Drilling.Common.Automation.CAutomationPositioningService.Read(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) · Drilling.Common/Automation/CAutomationManager.cs:1606 |
| 1612 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1616 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureConnected(target) |
| 1610 | assignment | 값을 대상에 대입합니다: snapshot ??= Read(target) |
| 1610 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(target) |
| 1611 | if | 조건에 따라 분기합니다: if (snapshot.State is "ERROR" or "OFFLINE" or "STOPPED") |
| 1612 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{target.Label}: {snapshot.State} {snapshot.Detail}") |
| 1612 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{target.Label}: {snapshot.State} {snapshot.Detail}"); |
| 1613 | if | 조건에 따라 분기합니다: if (snapshot.State != "OK" &#124;&#124; snapshot.Value is not { } status) |
| 1614 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 1615 | if | 조건에 따라 분기합니다: if (status.HasError &#124;&#124; !status.Able &#124;&#124; !status.HomeDone) |
| 1616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{target.Label}: Enable/Home/Fault 상태를 확인해 주세요. Fault={status.Fault}") |
| 1616 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{target.Label}: Enable/Home/Fault 상태를 확인해 주세요. Fault={status.Fault}"); |
| 1617 | return | 호출자에게 값 또는 제어를 반환합니다: return status; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadReady"]
 N0["L1611 if"]
 M -->|포함| N0
 N1["L1613 if"]
 M -->|포함| N1
 N2["L1615 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WaitUntil` · L1620–1633

[Drilling.Common/Automation/CAutomationManager.cs:1620–1633](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1620-L1633)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CAutomationPositioningService.WaitUntil(System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>, System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, static, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targets | System.Collections.Generic.IReadOnlyList<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET> | None | False /  |
| ready | System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1554–1554](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1554-L1554) | WaitUntil | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1567–1574](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1567-L1574) | WaitUntil | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1622 | Stopwatch.StartNew | resolved | System.Diagnostics.Stopwatch System.Diagnostics.Stopwatch.StartNew() |
| 1625 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1626 | targets.Where(target => !ready(target)).ToArray | resolved | Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET[] System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>.ToArray<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>() |
| 1626 | targets.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET> System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>.Where<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>(System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>) |
| 1626 | ready | resolved · 동적 구현 선택 가능 | bool System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, bool>.Invoke(Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET) |
| 1629 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1630 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |
| 1630 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 1630 | pending.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET>.Select<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, string>(System.Func<Drilling.Common.Automation.ST_AUTOMATION_ABSOLUTE_MOVE_TARGET, string>) |
| 1631 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1622 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.StartNew() |
| 1622 | local-declaration | 지역 변수를 선언합니다: var elapsed = Stopwatch.StartNew(); |
| 1622 | variable-initializer | 변수의 초기값을 지정합니다: elapsed = Stopwatch.StartNew() |
| 1623 | while | 조건을 먼저 확인하며 반복합니다: while (true) |
| 1625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(target => !ready(target)).ToArray() |
| 1626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(target => !ready(target)) |
| 1626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ready(target) |
| 1626 | local-declaration | 지역 변수를 선언합니다: var pending = targets.Where(target => !ready(target)).ToArray(); |
| 1626 | variable-initializer | 변수의 초기값을 지정합니다: pending = targets.Where(target => !ready(target)).ToArray() |
| 1627 | if | 조건에 따라 분기합니다: if (pending.Length == 0) |
| 1628 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(60) |
| 1629 | if | 조건에 따라 분기합니다: if (elapsed.Elapsed >= TimeSpan.FromSeconds(60)) |
| 1630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException($"DOE Z 이동 완료 확인 시간 초과: {string.Join(", ", pending.Select(t => t.Label))}") |
| 1630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(", ", pending.Select(t => t.Label)) |
| 1630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: pending.Select(t => t.Label) |
| 1630 | throw | 예외를 발생/전달합니다: throw new TimeoutException($"DOE Z 이동 완료 확인 시간 초과: {string.Join(", ", pending.Select(t => t.Label))}"); |
| 1631 | await | 비동기 완료를 기다립니다: await Task.Delay(200, cancellationToken) |
| 1631 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(200, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WaitUntil"]
 N0["L1623 while"]
 M -->|포함| N0
 N1["L1627 if"]
 N0 -->|포함| N1
 N2["L1629 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnsureResponse` · L1635–1639

[Drilling.Common/Automation/CAutomationManager.cs:1635–1639](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1635-L1639)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CAutomationPositioningService.EnsureResponse(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CAutomationPositioningService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| response | string | None | False /  |
| label | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1562–1562](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1562-L1562) | EnsureResponse | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1584–1584](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1584-L1584) | EnsureResponse | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1637 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1637 | response.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1638 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1637 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith("OK:", StringComparison.OrdinalIgnoreCase) |
| 1637 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: response.StartsWith("SIM:", StringComparison.OrdinalIgnoreCase) |
| 1637 | if | 조건에 따라 분기합니다: if (!response.StartsWith("OK:", StringComparison.OrdinalIgnoreCase) && !response.StartsWith("SIM:", StringComparison.OrdinalIgnoreCase)) |
| 1638 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{label}: {response}") |
| 1638 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{label}: {response}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EnsureResponse"]
 N0["L1637 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Units` · L1645–1645

[Drilling.Common/Automation/CAutomationManager.cs:1645–1645](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1645-L1645)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.Common.Automation.CConfiguredHomeSpeedValues.Units |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CConfiguredHomeSpeedValues |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Units` · L1645–1645

[Drilling.Common/Automation/CAutomationManager.cs:1645–1645](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1645-L1645)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.Common.Automation.CConfiguredHomeSpeedValues.Units.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, string> |
| 소속 타입 | NamedType:Drilling.Common.Automation.CConfiguredHomeSpeedValues |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L1647–1655

[Drilling.Common/Automation/CAutomationManager.cs:1647–1655](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1647-L1655)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Automation.CConfiguredHomeSpeedValues.CConfiguredHomeSpeedValues(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>?) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CConfiguredHomeSpeedValues |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>> | None | False /  |
| units | System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1171–1171](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1171-L1171) | new CConfiguredHomeSpeedValues | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1173–1173](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1173-L1173) | new CConfiguredHomeSpeedValues | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1184–1184](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1184-L1184) | new CConfiguredHomeSpeedValues | False |
| [Drilling.Common/Automation/CAutomationStatusSnapshotService.cs:325–325](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L325-L325) | new CConfiguredHomeSpeedValues | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1647 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1649 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 1652 | ContainsKey | resolved | bool System.Collections.ObjectModel.ReadOnlyDictionary<string, double>.ContainsKey(string) |
| 1652 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1653 | unit.Trim | resolved | string string.Trim() |
| 1654 | new ReadOnlyDictionary<string, string> | resolved | System.Collections.ObjectModel.ReadOnlyDictionary<string, string>.ReadOnlyDictionary(System.Collections.Generic.IDictionary<string, string>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1647 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>(values, StringComparer.OrdinalIgnoreCase) |
| 1649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1649 | local-declaration | 지역 변수를 선언합니다: var copiedUnits = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase); |
| 1649 | variable-initializer | 변수의 초기값을 지정합니다: copiedUnits = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1650 | if | 조건에 따라 분기합니다: if (units is not null) |
| 1651 | foreach | 컬렉션 요소를 순회합니다: foreach (var(axis, unit)in units) if (ContainsKey(axis) && !string.IsNullOrWhiteSpace(unit)) copiedUnits[axis] = unit.Trim(); |
| 1652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ContainsKey(axis) |
| 1652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(unit) |
| 1652 | if | 조건에 따라 분기합니다: if (ContainsKey(axis) && !string.IsNullOrWhiteSpace(unit)) |
| 1653 | assignment | 값을 대상에 대입합니다: copiedUnits[axis] = unit.Trim() |
| 1653 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: unit.Trim() |
| 1654 | assignment | 값을 대상에 대입합니다: Units = new ReadOnlyDictionary<string, string>(copiedUnits) |
| 1654 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ReadOnlyDictionary<string, string>(copiedUnits) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L1650 if"]
 M -->|포함| N0
 N1["L1651 foreach"]
 N0 -->|포함| N1
 N2["L1652 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FromAnalogInput` · L1660–1664

[Drilling.Common/Automation/CAutomationManager.cs:1660–1664](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1660-L1664)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Automation.CGalvoTemperature.FromAnalogInput(double) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Automation.CGalvoTemperature |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:943–943](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L943-L943) | CGalvoTemperature.FromAnalogInput | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1663 | double.IsFinite | resolved | bool double.IsFinite(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1663 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 1663 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.IsFinite(value) ? (2637.0 - value) / 13.6 : double.NaN |
| 1663 | return | 호출자에게 값 또는 제어를 반환합니다: return double.IsFinite(value) ? (2637.0 - value) / 13.6 : double.NaN; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatCelsius` · L1666–1669

[Drilling.Common/Automation/CAutomationManager.cs:1666–1669](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1666-L1669)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Automation.CGalvoTemperature.FormatCelsius(double) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Automation.CGalvoTemperature |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:3042–3042](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3042-L3042) | CGalvoTemperature.FormatCelsius | False |
| [Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs:224–224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs#L224-L224) | CGalvoTemperature.FormatCelsius | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1668 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1668 | value.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 1668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString("F3", CultureInfo.InvariantCulture) |
| 1668 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.IsFinite(value) ? $"{value.ToString("F3", CultureInfo.InvariantCulture)} °C" : "-" |
| 1668 | return | 호출자에게 값 또는 제어를 반환합니다: return double.IsFinite(value) ? $"{value.ToString("F3", CultureInfo.InvariantCulture)} °C" : "-"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_gate` · L1675–1675

[Drilling.Common/Automation/CAutomationManager.cs:1675–1675](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1675-L1675)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.Common.Automation.CManualMotionSession._gate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1675 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1675 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 1675 | variable-initializer | 변수의 초기값을 지정합니다: _gate = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_generation` · L1676–1676

[Drilling.Common/Automation/CAutomationManager.cs:1676–1676](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1676-L1676)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CManualMotionSession._generation |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stopJog` · L1677–1677

[Drilling.Common/Automation/CAutomationManager.cs:1677–1677](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1677-L1677)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Func<System.Threading.Tasks.Task>? Drilling.Common.Automation.CManualMotionSession._stopJog |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Func<System.Threading.Tasks.Task>? |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Generation` · L1678–1678

[Drilling.Common/Automation/CAutomationManager.cs:1678–1678](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1678-L1678)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CManualMotionSession.Generation |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1678 | Interlocked.Read | resolved | long System.Threading.Interlocked.Read(ref readonly long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1678 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Read(ref _generation) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Invalidate` · L1680–1680

[Drilling.Common/Automation/CAutomationManager.cs:1680–1680](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1680-L1680)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Automation.CManualMotionSession.Invalidate() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1702–1702](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1702-L1702) | Invalidate | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1719–1719](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1719-L1719) | Invalidate | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3429–3429](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3429-L3429) | MotionSession.Invalidate | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1680 | Interlocked.Increment | resolved | long System.Threading.Interlocked.Increment(ref long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Increment(ref _generation) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Execute` · L1681–1698

[Drilling.Common/Automation/CAutomationManager.cs:1681–1698](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1681-L1698)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.Execute(long, System.Func<System.Threading.Tasks.Task>, System.Func<System.Threading.Tasks.Task>?) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| generation | long | None | False /  |
| action | System.Func<System.Threading.Tasks.Task> | None | False /  |
| stopJog | System.Func<System.Threading.Tasks.Task>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3537–3552](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3537-L3552) | MotionSession.Execute | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3576–3582](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3576-L3582) | MotionSession.Execute | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3688–3711](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3688-L3711) | MotionSession.Execute | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1683 | _gate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync() |
| 1689 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1692 | action | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 1696 | _gate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1683 | await | 비동기 완료를 기다립니다: await _gate.WaitAsync() |
| 1683 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.WaitAsync() |
| 1684 | try | 예외 처리 범위입니다: try |
| 1686 | if | 조건에 따라 분기합니다: if (generation != Generation) |
| 1687 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1688 | if | 조건에 따라 분기합니다: if (_stopJog is not null) |
| 1689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("JOG를 먼저 정지해 주세요.") |
| 1689 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("JOG를 먼저 정지해 주세요."); |
| 1691 | assignment | 값을 대상에 대입합니다: _stopJog = stopJog |
| 1692 | await | 비동기 완료를 기다립니다: await action() |
| 1692 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: action() |
| 1694 | finally | 종료 정리 구간입니다: finally |
| 1696 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Execute"]
 N0["L1684 try"]
 M -->|포함| N0
 N1["L1686 if"]
 N0 -->|포함| N1
 N2["L1688 if"]
 N0 -->|포함| N2
 N3["L1694 finally"]
 N0 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopJog` · L1700–1715

[Drilling.Common/Automation/CAutomationManager.cs:1700–1715](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1700-L1715)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.StopJog() |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3436–3436](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3436-L3436) | MotionSession.StopJog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1702 | Invalidate | resolved | void Drilling.Common.Automation.CManualMotionSession.Invalidate() · Drilling.Common/Automation/CAutomationManager.cs:1680 |
| 1703 | _gate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync() |
| 1708 | _stopJog | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 1713 | _gate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1702 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Invalidate() |
| 1703 | await | 비동기 완료를 기다립니다: await _gate.WaitAsync() |
| 1703 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.WaitAsync() |
| 1704 | try | 예외 처리 범위입니다: try |
| 1706 | if | 조건에 따라 분기합니다: if (_stopJog is null) |
| 1707 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1708 | await | 비동기 완료를 기다립니다: await _stopJog() |
| 1708 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stopJog() |
| 1709 | assignment | 값을 대상에 대입합니다: _stopJog = null |
| 1711 | finally | 종료 정리 구간입니다: finally |
| 1713 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopJog"]
 N0["L1704 try"]
 M -->|포함| N0
 N1["L1706 if"]
 N0 -->|포함| N1
 N2["L1711 finally"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopAll` · L1717–1753

[Drilling.Common/Automation/CAutomationManager.cs:1717–1753](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1717-L1753)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Automation.CManualMotionSession.StopAll(System.Func<System.Threading.Tasks.Task>) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Automation.CManualMotionSession |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| stopAll | System.Func<System.Threading.Tasks.Task> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3597–3639](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3597-L3639) | MotionSession.StopAll | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6362–6387](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L6362-L6387) | _motionSession.StopAll | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1719 | Invalidate | resolved | void Drilling.Common.Automation.CManualMotionSession.Invalidate() · Drilling.Common/Automation/CAutomationManager.cs:1680 |
| 1720 | _gate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync() |
| 1723 | new List<Exception> | resolved | System.Collections.Generic.List<System.Exception>.List() |
| 1728 | _stopJog | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 1734 | errors.Add | resolved | void System.Collections.Generic.List<System.Exception>.Add(System.Exception) |
| 1739 | stopAll | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 1743 | errors.Add | resolved | void System.Collections.Generic.List<System.Exception>.Add(System.Exception) |
| 1747 | new AggregateException | resolved | System.AggregateException.AggregateException(System.Collections.Generic.IEnumerable<System.Exception>) |
| 1751 | _gate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1719 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Invalidate() |
| 1720 | await | 비동기 완료를 기다립니다: await _gate.WaitAsync() |
| 1720 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.WaitAsync() |
| 1721 | try | 예외 처리 범위입니다: try |
| 1723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<Exception>() |
| 1723 | local-declaration | 지역 변수를 선언합니다: var errors = new List<Exception>(); |
| 1723 | variable-initializer | 변수의 초기값을 지정합니다: errors = new List<Exception>() |
| 1724 | try | 예외 처리 범위입니다: try |
| 1726 | if | 조건에 따라 분기합니다: if (_stopJog is not null) |
| 1728 | await | 비동기 완료를 기다립니다: await _stopJog() |
| 1728 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stopJog() |
| 1729 | assignment | 값을 대상에 대입합니다: _stopJog = null |
| 1732 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 1734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: errors.Add(exception) |
| 1737 | try | 예외 처리 범위입니다: try |
| 1739 | await | 비동기 완료를 기다립니다: await stopAll() |
| 1739 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stopAll() |
| 1741 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 1743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: errors.Add(exception) |
| 1746 | if | 조건에 따라 분기합니다: if (errors.Count > 0) |
| 1747 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new AggregateException(errors) |
| 1747 | throw | 예외를 발생/전달합니다: throw new AggregateException(errors); |
| 1749 | finally | 종료 정리 구간입니다: finally |
| 1751 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _gate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopAll"]
 N0["L1721 try"]
 M -->|포함| N0
 N1["L1724 try"]
 N0 -->|포함| N1
 N2["L1726 if"]
 N1 -->|포함| N2
 N3["L1732 catch"]
 N1 -->|포함| N3
 N4["L1737 try"]
 N0 -->|포함| N4
 N5["L1741 catch"]
 N4 -->|포함| N5
 N6["L1746 if"]
 N0 -->|포함| N6
 N7["L1749 finally"]
 N0 -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastRunId` · L1761–1761

[Drilling.Common/Automation/CAutomationManager.cs:1761–1761](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1761-L1761)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CMofReadiness._lastRunId |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofReadiness |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1761 | DateTimeOffset.UtcNow.ToUnixTimeMilliseconds | resolved | long System.DateTimeOffset.ToUnixTimeMilliseconds() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1761 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() |
| 1761 | variable-initializer | 변수의 초기값을 지정합니다: _lastRunId = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() * 1000 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateRunId` · L1762–1762

[Drilling.Common/Automation/CAutomationManager.cs:1762–1762](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1762-L1762)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Automation.CMofReadiness.CreateRunId() |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofReadiness |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.File/Script/CAutomation1ScriptFile.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/Script/CAutomation1ScriptFile.cs#L55-L55) | CMofReadiness.CreateRunId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1762 | Interlocked.Increment | resolved | long System.Threading.Interlocked.Increment(ref long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1762 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Increment(ref _lastRunId) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `VariableIndex` · L1763–1768

[Drilling.Common/Automation/CAutomationManager.cs:1763–1768](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1763-L1768)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Automation.CMofReadiness.VariableIndex(int) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofReadiness |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| task | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1257–1257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1257-L1257) | CMofReadiness.VariableIndex | False |
| [Drilling.File/Script/CAutomation1ScriptFile.cs:437–437](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/Script/CAutomation1ScriptFile.cs#L437-L437) | CMofReadiness.VariableIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1766 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 1766 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1765 | if | 조건에 따라 분기합니다: if (task < 1) |
| 1766 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(task)) |
| 1766 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(task) |
| 1766 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(task)); |
| 1767 | return | 호출자에게 값 또는 제어를 반환합니다: return task - 1; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["VariableIndex"]
 N0["L1765 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `VariableIndex` · L1770–1777

[Drilling.Common/Automation/CAutomationManager.cs:1770–1777](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Automation/CAutomationManager.cs#L1770-L1777)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Automation.CMofReadiness.VariableIndex(int, int) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Automation.CMofReadiness |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| task | int | None | False /  |
| controllerTaskCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Automation1/CAutomation1Comm.cs:1905–1905](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Automation1/CAutomation1Comm.cs#L1905-L1905) | CMofReadiness.VariableIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1773 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1775 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, object?, string?) |
| 1775 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1772 | if | 조건에 따라 분기합니다: if (controllerTaskCount < 1) |
| 1773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Automation1 controller has no available Tasks.") |
| 1773 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Automation1 controller has no available Tasks."); |
| 1774 | if | 조건에 따라 분기합니다: if (task < 1 &#124;&#124; task > controllerTaskCount) |
| 1775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(task), task, $"Automation1 Task index is out of range. Range=1~{controllerTaskCount}") |
| 1775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(task) |
| 1775 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(task), task, $"Automation1 Task index is out of range. Range=1~{controllerTaskCount}"); |
| 1776 | return | 호출자에게 값 또는 제어를 반환합니다: return task - 1; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["VariableIndex"]
 N0["L1772 if"]
 M -->|포함| N0
 N1["L1774 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.Common/Automation/CAutomationManager.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
