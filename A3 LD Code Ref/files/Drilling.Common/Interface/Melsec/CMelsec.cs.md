# Drilling.Common/Interface/Melsec/CMelsec.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 5aee8e58439c9b455cae7c9593c9be986c3e682e |
| 원본 SHA256 | f1e5c66984fae8c63362e88fa113717a2a9c463417b5ab3e1600bb3ca848204b |
| 파일 분류 | code |
| 원본 크기/행 | 152,767 bytes / 3,315 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs) |

## 파일의 역할과 읽는 순서

외부 통신과 장치 인터페이스를 연결합니다. 요청 생성·전송·수신·장치 실행을 같은 의미로 합치지 않습니다.

![파일 관계도](../../../../diagrams/files/ee3e119add0c463a3b0f.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CMelsec | ClassDeclaration | 12–3168 | CMelsec: CtrlThread, IDisposable |
| EN_MELSEC_THREAD_COMMAND | EnumDeclaration | 2255–2269 | EN_MELSEC_THREAD_COMMAND |
| CMelsecThreadRequest | ClassDeclaration | 2271–2291 | CMelsecThreadRequest |
| CMelsecWriteCommand | ClassDeclaration | 2293–2342 | CMelsecWriteCommand |
| CMelsecReadSnapshot | RecordDeclaration | 2344–2344 | CMelsecReadSnapshot |
| ST_MELSEC_ADDRESS | RecordDeclaration | 2345–2345 | ST_MELSEC_ADDRESS |
| ST_MELSEC_NET_OPTION | RecordDeclaration | 2346–2346 | ST_MELSEC_NET_OPTION |
| PollItem | RecordDeclaration | 3009–3009 | PollItem |
| PollBlock | ClassDeclaration | 3015–3032 | PollBlock |
| EN_MELSEC_DATA_TYPE | EnumDeclaration | 3170–3180 | EN_MELSEC_DATA_TYPE |
| EN_MELSEC_DIRECTION | EnumDeclaration | 3182–3187 | EN_MELSEC_DIRECTION |
| EN_MELSEC_ACCESS | EnumDeclaration | 3189–3194 | EN_MELSEC_ACCESS |
| EN_MELSEC_PROCESS | EnumDeclaration | 3196–3205 | EN_MELSEC_PROCESS |
| EN_MELSEC_WRITE_RESULT | EnumDeclaration | 3207–3219 | EN_MELSEC_WRITE_RESULT |
| EN_MELSEC_SIMULATION_READBACK | EnumDeclaration | 3221–3227 | EN_MELSEC_SIMULATION_READBACK |
| ST_MELSEC_WRITE_STATUS | RecordDeclaration | 3229–3243 | ST_MELSEC_WRITE_STATUS |
| ST_MELSEC_MAP_DATA | RecordDeclaration | 3244–3259 | ST_MELSEC_MAP_DATA |
| CMelsecMapFileBase | ClassDeclaration | 3260–3263 | CMelsecMapFileBase |
| EN_MELSEC_CACHE_STATE | EnumDeclaration | 3265–3272 | EN_MELSEC_CACHE_STATE |
| ST_MELSEC_CACHED_VALUE | RecordDeclaration | 3274–3277 | ST_MELSEC_CACHED_VALUE |
| CMelsecNetApi | ClassDeclaration | 3279–3302 | CMelsecNetApi |
| CMelsecNetNativeMethods | ClassDeclaration | 3304–3314 | CMelsecNetNativeMethods |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| DefaultWriteTimeoutMs | FieldDeclaration | L15–15 | int Drilling.Common.Interface.CMelsec.DefaultWriteTimeoutMs |
| MelsecThreadDelayMs | FieldDeclaration | L16–16 | int Drilling.Common.Interface.CMelsec.MelsecThreadDelayMs |
| MelsecNetMaximumTransferBytes | FieldDeclaration | L17–17 | int Drilling.Common.Interface.CMelsec.MelsecNetMaximumTransferBytes |
| MaximumStoredWriteStatusCount | FieldDeclaration | L18–18 | int Drilling.Common.Interface.CMelsec.MaximumStoredWriteStatusCount |
| MaximumWriteQueueCount | FieldDeclaration | L19–19 | int Drilling.Common.Interface.CMelsec.MaximumWriteQueueCount |
| _interfaceManager | FieldDeclaration | L20–20 | Drilling.Common.Interface.CInterfaceManager Drilling.Common.Interface.CMelsec._interfaceManager |
| _logManager | FieldDeclaration | L21–21 | CLogManager? Drilling.Common.Interface.CMelsec._logManager |
| _melsecNetApi | FieldDeclaration | L22–22 | Drilling.Common.Interface.CMelsecNetApi Drilling.Common.Interface.CMelsec._melsecNetApi |
| _ioLock | FieldDeclaration | L23–23 | object Drilling.Common.Interface.CMelsec._ioLock |
| _mapLock | FieldDeclaration | L24–24 | object Drilling.Common.Interface.CMelsec._mapLock |
| _requestLock | FieldDeclaration | L25–25 | object Drilling.Common.Interface.CMelsec._requestLock |
| _writeLock | FieldDeclaration | L26–26 | object Drilling.Common.Interface.CMelsec._writeLock |
| _readStateLock | FieldDeclaration | L27–27 | object Drilling.Common.Interface.CMelsec._readStateLock |
| _simulationLock | FieldDeclaration | L28–28 | object Drilling.Common.Interface.CMelsec._simulationLock |
| _simulationWords | FieldDeclaration | L29–29 | System.Collections.Generic.Dictionary<string, ushort> Drilling.Common.Interface.CMelsec._simulationWords |
| _requestQueue | FieldDeclaration | L30–30 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest> Drilling.Common.Interface.CMelsec._requestQueue |
| _writeQueue | FieldDeclaration | L31–31 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> Drilling.Common.Interface.CMelsec._writeQueue |
| _writeStatus | FieldDeclaration | L32–32 | System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> Drilling.Common.Interface.CMelsec._writeStatus |
| _readSnapshots | FieldDeclaration | L33–33 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot> Drilling.Common.Interface.CMelsec._readSnapshots |
| _melsecNetPaths | FieldDeclaration | L34–34 | System.Collections.Generic.Dictionary<int, int> Drilling.Common.Interface.CMelsec._melsecNetPaths |
| _map | FieldDeclaration | L35–35 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec._map |
| _mapSnapshot | FieldDeclaration | L36–36 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec._mapSnapshot |
| _acceptRequests | FieldDeclaration | L37–37 | bool Drilling.Common.Interface.CMelsec._acceptRequests |
| _nextRequestNo | FieldDeclaration | L38–38 | int Drilling.Common.Interface.CMelsec._nextRequestNo |
| _activeWriteCommand | FieldDeclaration | L39–39 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec._activeWriteCommand |
| _process | FieldDeclaration | L40–40 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec._process |
| _simulationReadback | FieldDeclaration | L41–41 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec._simulationReadback |
| _readCycleNo | FieldDeclaration | L42–42 | long Drilling.Common.Interface.CMelsec._readCycleNo |
| _lastSuccessfulReadAt | FieldDeclaration | L43–43 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec._lastSuccessfulReadAt |
| _lastReadReturnCode | FieldDeclaration | L44–44 | int Drilling.Common.Interface.CMelsec._lastReadReturnCode |
| _consecutiveReadFailureCount | FieldDeclaration | L45–45 | int Drilling.Common.Interface.CMelsec._consecutiveReadFailureCount |
| _communicationAvailable | FieldDeclaration | L46–46 | bool Drilling.Common.Interface.CMelsec._communicationAvailable |
| DefaultPollingIntervalMs | FieldDeclaration | L47–47 | int Drilling.Common.Interface.CMelsec.DefaultPollingIntervalMs |
| PollingFailureBackoffMs | FieldDeclaration | L48–48 | int Drilling.Common.Interface.CMelsec.PollingFailureBackoffMs |
| _pollLock | FieldDeclaration | L49–49 | object Drilling.Common.Interface.CMelsec._pollLock |
| _cachedValues | FieldDeclaration | L50–50 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec._cachedValues |
| _pollBlockById | FieldDeclaration | L51–51 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._pollBlockById |
| _pollDeviceBackoff | FieldDeclaration | L52–52 | System.Collections.Generic.Dictionary<int, System.DateTimeOffset> Drilling.Common.Interface.CMelsec._pollDeviceBackoff |
| _pollBlocks | FieldDeclaration | L53–53 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._pollBlocks |
| _requestedPollBlocks | FieldDeclaration | L54–54 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._requestedPollBlocks |
| _requestedPollBlockSet | FieldDeclaration | L55–55 | System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._requestedPollBlockSet |
| _serveRequestedPoll | FieldDeclaration | L56–56 | bool Drilling.Common.Interface.CMelsec._serveRequestedPoll |
| _controlPollStreak | FieldDeclaration | L57–57 | int Drilling.Common.Interface.CMelsec._controlPollStreak |
| _pollGeneration | FieldDeclaration | L58–58 | int Drilling.Common.Interface.CMelsec._pollGeneration |
| _nextPollBlock | FieldDeclaration | L59–59 | int Drilling.Common.Interface.CMelsec._nextPollBlock |
| StageAlignBusyWordId | FieldDeclaration | L60–60 | string Drilling.Common.Interface.CMelsec.StageAlignBusyWordId |
| StageProtectWindowCountId | FieldDeclaration | L61–61 | string Drilling.Common.Interface.CMelsec.StageProtectWindowCountId |
| StageProtectWindowCompleteId | FieldDeclaration | L62–62 | string Drilling.Common.Interface.CMelsec.StageProtectWindowCompleteId |
| .ctor | ConstructorDeclaration | L65–71 | Drilling.Common.Interface.CMelsec.CMelsec(Drilling.Common.Interface.CInterfaceManager, CLogManager?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>?, Drilling.Common.Interface.CMelsecNetApi?) |
| Process | PropertyDeclaration | L75–84 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec.Process |
| get_Process | GetAccessorDeclaration | L77–83 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec.Process.get |
| ReadCycleNo | PropertyDeclaration | L86–95 | long Drilling.Common.Interface.CMelsec.ReadCycleNo |
| get_ReadCycleNo | GetAccessorDeclaration | L88–94 | long Drilling.Common.Interface.CMelsec.ReadCycleNo.get |
| LastSuccessfulReadAt | PropertyDeclaration | L97–106 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.LastSuccessfulReadAt |
| get_LastSuccessfulReadAt | GetAccessorDeclaration | L99–105 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.LastSuccessfulReadAt.get |
| LastReadReturnCode | PropertyDeclaration | L108–117 | int Drilling.Common.Interface.CMelsec.LastReadReturnCode |
| get_LastReadReturnCode | GetAccessorDeclaration | L110–116 | int Drilling.Common.Interface.CMelsec.LastReadReturnCode.get |
| ConsecutiveReadFailureCount | PropertyDeclaration | L119–128 | int Drilling.Common.Interface.CMelsec.ConsecutiveReadFailureCount |
| get_ConsecutiveReadFailureCount | GetAccessorDeclaration | L121–127 | int Drilling.Common.Interface.CMelsec.ConsecutiveReadFailureCount.get |
| IsCommunicationAvailable | PropertyDeclaration | L130–139 | bool Drilling.Common.Interface.CMelsec.IsCommunicationAvailable |
| get_IsCommunicationAvailable | GetAccessorDeclaration | L132–138 | bool Drilling.Common.Interface.CMelsec.IsCommunicationAvailable.get |
| Initialize | MethodDeclaration | L141–154 | void Drilling.Common.Interface.CMelsec.Initialize() |
| DeInitialize | MethodDeclaration | L156–195 | void Drilling.Common.Interface.CMelsec.DeInitialize() |
| Run | MethodDeclaration | L197–230 | void Drilling.Common.Interface.CMelsec.Run() |
| OnThreadError | MethodDeclaration | L232–236 | void Drilling.Common.Interface.CMelsec.OnThreadError(System.Exception) |
| Map | PropertyDeclaration | L238–243 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.Map |
| get_Map | GetAccessorDeclaration | L242–242 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.Map.get |
| ValidateMapData | MethodDeclaration | L245–271 | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| ReloadMap | MethodDeclaration | L273–296 | void Drilling.Common.Interface.CMelsec.ReloadMap(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| FilterData4 | LocalFunctionStatement | L275–278 | bool FilterData4(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| HandleMap5 | LocalFunctionStatement | L280–283 | string HandleMap5(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| GetMapList | MethodDeclaration | L298–307 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.GetMapList(string) |
| FilterData6 | LocalFunctionStatement | L301–304 | bool FilterData6(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| GetMapData | MethodDeclaration | L309–329 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) |
| GetKeySortKey7 | LocalFunctionStatement | L323–326 | string GetKeySortKey7(string) |
| ReadBit | MethodDeclaration | L331–336 | bool Drilling.Common.Interface.CMelsec.ReadBit(string, System.Threading.CancellationToken) |
| ReadBitNoLog | MethodDeclaration | L338–343 | bool Drilling.Common.Interface.CMelsec.ReadBitNoLog(string, System.Threading.CancellationToken) |
| Open | MethodDeclaration | L345–349 | void Drilling.Common.Interface.CMelsec.Open(int, System.Threading.CancellationToken) |
| WriteBit | MethodDeclaration | L351–355 | void Drilling.Common.Interface.CMelsec.WriteBit(string, bool, System.Threading.CancellationToken) |
| ReadWord | MethodDeclaration | L357–362 | double Drilling.Common.Interface.CMelsec.ReadWord(string, System.Threading.CancellationToken) |
| ReadWordNoLog | MethodDeclaration | L364–369 | double Drilling.Common.Interface.CMelsec.ReadWordNoLog(string, System.Threading.CancellationToken) |
| WriteWord | MethodDeclaration | L371–375 | void Drilling.Common.Interface.CMelsec.WriteWord(string, double, System.Threading.CancellationToken) |
| ReadDouble | MethodDeclaration | L377–382 | double Drilling.Common.Interface.CMelsec.ReadDouble(string, System.Threading.CancellationToken) |
| ReadDoubleNoLog | MethodDeclaration | L384–389 | double Drilling.Common.Interface.CMelsec.ReadDoubleNoLog(string, System.Threading.CancellationToken) |
| WriteDouble | MethodDeclaration | L391–395 | void Drilling.Common.Interface.CMelsec.WriteDouble(string, double, System.Threading.CancellationToken) |
| ReadString | MethodDeclaration | L397–402 | string Drilling.Common.Interface.CMelsec.ReadString(string, System.Threading.CancellationToken) |
| ReadStringNoLog | MethodDeclaration | L404–409 | string Drilling.Common.Interface.CMelsec.ReadStringNoLog(string, System.Threading.CancellationToken) |
| WriteString | MethodDeclaration | L411–415 | void Drilling.Common.Interface.CMelsec.WriteString(string, string, System.Threading.CancellationToken) |
| QueueWriteBit | MethodDeclaration | L417–420 | int Drilling.Common.Interface.CMelsec.QueueWriteBit(string, bool, string, int, int) |
| QueueWriteWord | MethodDeclaration | L422–425 | int Drilling.Common.Interface.CMelsec.QueueWriteWord(string, double, string, int, int) |
| QueueWriteDouble | MethodDeclaration | L427–430 | int Drilling.Common.Interface.CMelsec.QueueWriteDouble(string, double, string, int, int) |
| QueueWriteString | MethodDeclaration | L432–435 | int Drilling.Common.Interface.CMelsec.QueueWriteString(string, string, string, int, int) |
| GetWriteResult | MethodDeclaration | L437–441 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.GetWriteResult(int) |
| GetWriteStatus | MethodDeclaration | L443–454 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS? Drilling.Common.Interface.CMelsec.GetWriteStatus(int) |
| TryGetReadSnapshot | MethodDeclaration | L456–471 | bool Drilling.Common.Interface.CMelsec.TryGetReadSnapshot(string, out object?, out long) |
| SetSimulationReadbackMode | MethodDeclaration | L473–479 | void Drilling.Common.Interface.CMelsec.SetSimulationReadbackMode(Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK) |
| Dispose | MethodDeclaration | L481–485 | void Drilling.Common.Interface.CMelsec.Dispose() |
| ReadBitCore | MethodDeclaration | L487–496 | bool Drilling.Common.Interface.CMelsec.ReadBitCore(string, System.Threading.CancellationToken, bool, string) |
| WriteBitCore | MethodDeclaration | L498–515 | void Drilling.Common.Interface.CMelsec.WriteBitCore(string, bool, System.Threading.CancellationToken) |
| ReadWordCore | MethodDeclaration | L517–526 | double Drilling.Common.Interface.CMelsec.ReadWordCore(string, System.Threading.CancellationToken, bool, string) |
| WriteWordCore | MethodDeclaration | L528–535 | void Drilling.Common.Interface.CMelsec.WriteWordCore(string, double, System.Threading.CancellationToken) |
| EncodeIntegerValue | MethodDeclaration | L537–543 | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) |
| ReadDoubleCore | MethodDeclaration | L545–565 | double Drilling.Common.Interface.CMelsec.ReadDoubleCore(string, System.Threading.CancellationToken, bool, string) |
| WriteDoubleCore | MethodDeclaration | L567–580 | void Drilling.Common.Interface.CMelsec.WriteDoubleCore(string, double, System.Threading.CancellationToken) |
| ReadStringCore | MethodDeclaration | L582–596 | string Drilling.Common.Interface.CMelsec.ReadStringCore(string, System.Threading.CancellationToken, bool, string) |
| WriteStringCore | MethodDeclaration | L598–612 | void Drilling.Common.Interface.CMelsec.WriteStringCore(string, string, System.Threading.CancellationToken) |
| ExecuteThreadRequest | MethodDeclaration | L614–642 | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| GetThreadRequest | MethodDeclaration | L644–655 | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest? Drilling.Common.Interface.CMelsec.GetThreadRequest() |
| ProcessThreadRequest | MethodDeclaration | L657–714 | void Drilling.Common.Interface.CMelsec.ProcessThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| OpenCore | MethodDeclaration | L716–768 | void Drilling.Common.Interface.CMelsec.OpenCore(int, System.Threading.CancellationToken) |
| CloseMelsecNetChannels | MethodDeclaration | L770–793 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannels() |
| CloseMelsecNetChannelsCore | MethodDeclaration | L795–815 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelsCore() |
| CloseMelsecNetChannelCore | MethodDeclaration | L817–846 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelCore(int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION) |
| ProbeDeviceRead | MethodDeclaration | L848–879 | void Drilling.Common.Interface.CMelsec.ProbeDeviceRead(int, System.Threading.CancellationToken) |
| CancelQueuedRequests | MethodDeclaration | L881–892 | void Drilling.Common.Interface.CMelsec.CancelQueuedRequests(string) |
| QueueWriteCommand | MethodDeclaration | L894–971 | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) |
| FindPendingDuplicateRequest | MethodDeclaration | L973–989 | int Drilling.Common.Interface.CMelsec.FindPendingDuplicateRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| IsSameWriteRequest | MethodDeclaration | L991–994 | bool Drilling.Common.Interface.CMelsec.IsSameWriteRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| PrepareQueuedWriteCommand | MethodDeclaration | L996–1020 | void Drilling.Common.Interface.CMelsec.PrepareQueuedWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, int, int) |
| ResolveReadbackId | MethodDeclaration | L1022–1046 | string Drilling.Common.Interface.CMelsec.ResolveReadbackId(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| GetAcceptedDataTypes | MethodDeclaration | L1048–1059 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> Drilling.Common.Interface.CMelsec.GetAcceptedDataTypes(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) |
| ValidateRequestedDataType | MethodDeclaration | L1061–1071 | void Drilling.Common.Interface.CMelsec.ValidateRequestedDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, bool) |
| StoreWriteStatus | MethodDeclaration | L1073–1080 | void Drilling.Common.Interface.CMelsec.StoreWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| GetActiveWriteCommand | MethodDeclaration | L1082–1088 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetActiveWriteCommand() |
| GetQueuedWriteCommand | MethodDeclaration | L1090–1101 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetQueuedWriteCommand() |
| ActivateWriteCommand | MethodDeclaration | L1103–1118 | void Drilling.Common.Interface.CMelsec.ActivateWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| ProcessWriteCommand | MethodDeclaration | L1120–1155 | void Drilling.Common.Interface.CMelsec.ProcessWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| PrepareActiveWrite | MethodDeclaration | L1157–1176 | void Drilling.Common.Interface.CMelsec.PrepareActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| ExecuteActiveWrite | MethodDeclaration | L1178–1217 | void Drilling.Common.Interface.CMelsec.ExecuteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| CheckActiveWriteReadback | MethodDeclaration | L1219–1282 | void Drilling.Common.Interface.CMelsec.CheckActiveWriteReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| BeginRetryWrite | MethodDeclaration | L1284–1291 | void Drilling.Common.Interface.CMelsec.BeginRetryWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| RetryOrCompleteTimeout | MethodDeclaration | L1293–1308 | void Drilling.Common.Interface.CMelsec.RetryOrCompleteTimeout(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| RetryOrCompleteCommunicationError | MethodDeclaration | L1310–1318 | void Drilling.Common.Interface.CMelsec.RetryOrCompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| TryScheduleRetry | MethodDeclaration | L1320–1337 | bool Drilling.Common.Interface.CMelsec.TryScheduleRetry(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| IsWriteAttemptTimedOut | MethodDeclaration | L1339–1345 | bool Drilling.Common.Interface.CMelsec.IsWriteAttemptTimedOut(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, System.DateTimeOffset) |
| CompleteCommunicationError | MethodDeclaration | L1347–1350 | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| CompleteCommunicationError | MethodDeclaration | L1352–1363 | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| CompleteInvalidWrite | MethodDeclaration | L1365–1375 | void Drilling.Common.Interface.CMelsec.CompleteInvalidWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| CompleteCancelledWrite | MethodDeclaration | L1377–1389 | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| CompleteActiveWrite | MethodDeclaration | L1391–1403 | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| CancelQueuedWrites | MethodDeclaration | L1405–1425 | void Drilling.Common.Interface.CMelsec.CancelQueuedWrites(string) |
| TrimWriteStatus | MethodDeclaration | L1427–1447 | void Drilling.Common.Interface.CMelsec.TrimWriteStatus() |
| IsTerminalWriteResult | MethodDeclaration | L1449–1452 | bool Drilling.Common.Interface.CMelsec.IsTerminalWriteResult(Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT) |
| WriteCommandValue | MethodDeclaration | L1454–1473 | void Drilling.Common.Interface.CMelsec.WriteCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| ReadCommandValue | MethodDeclaration | L1475–1490 | object Drilling.Common.Interface.CMelsec.ReadCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| IsExpectedValue | MethodDeclaration | L1492–1510 | bool Drilling.Common.Interface.CMelsec.IsExpectedValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, object) |
| ApplySimulationReadback | MethodDeclaration | L1512–1530 | void Drilling.Common.Interface.CMelsec.ApplySimulationReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| GetSimulationReadbackMode | MethodDeclaration | L1532–1538 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec.GetSimulationReadbackMode() |
| WriteSimulationValue | MethodDeclaration | L1540–1579 | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) |
| WriteSimulationString | MethodDeclaration | L1581–1594 | void Drilling.Common.Interface.CMelsec.WriteSimulationString(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, string) |
| SaveReadSnapshot | MethodDeclaration | L1596–1611 | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) |
| RegisterReadSuccess | MethodDeclaration | L1613–1623 | void Drilling.Common.Interface.CMelsec.RegisterReadSuccess() |
| RegisterReadFailure | MethodDeclaration | L1625–1633 | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) |
| RegisterCommunicationFailure | MethodDeclaration | L1635–1641 | void Drilling.Common.Interface.CMelsec.RegisterCommunicationFailure() |
| RegisterCommunicationSuccess | MethodDeclaration | L1643–1649 | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() |
| ReadWords | MethodDeclaration | L1651–1761 | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) |
| WriteWords | MethodDeclaration | L1763–1837 | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) |
| GetInterfaceData | MethodDeclaration | L1839–1842 | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| IsSimulation | MethodDeclaration | L1844–1847 | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) |
| ReadSimulationWords | MethodDeclaration | L1849–1859 | ushort[] Drilling.Common.Interface.CMelsec.ReadSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| WriteSimulationWords | MethodDeclaration | L1861–1868 | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) |
| CreateSimulationKey | MethodDeclaration | L1870–1873 | string Drilling.Common.Interface.CMelsec.CreateSimulationKey(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| GetMelsecNetPath | MethodDeclaration | L1875–1886 | int Drilling.Common.Interface.CMelsec.GetMelsecNetPath(int) |
| RegisterMelsecNetCommunicationError | MethodDeclaration | L1888–1894 | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) |
| WriteMelsecNetOpenLog | MethodDeclaration | L1896–1899 | void Drilling.Common.Interface.CMelsec.WriteMelsecNetOpenLog(Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int) |
| FormatMelsecNetContext | MethodDeclaration | L1901–1916 | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) |
| CreateMelsecNetReturnCodeException | MethodDeclaration | L1918–1922 | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) |
| IsMelsecNetRuntimeException | MethodDeclaration | L1924–1927 | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) |
| CreateMelsecNetRuntimeException | MethodDeclaration | L1929–1932 | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) |
| PrepareRead | MethodDeclaration | L1934–1937 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) |
| PrepareRead | MethodDeclaration | L1939–1950 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) |
| PrepareWrite | MethodDeclaration | L1952–1955 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) |
| PrepareWrite | MethodDeclaration | L1957–1968 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) |
| EnsureDataType | MethodDeclaration | L1970–1978 | void Drilling.Common.Interface.CMelsec.EnsureDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>) |
| ParseAddress | MethodDeclaration | L1980–2011 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) |
| ParseDeviceNumber | MethodDeclaration | L2013–2027 | int Drilling.Common.Interface.CMelsec.ParseDeviceNumber(string, string) |
| IsHexDevice | MethodDeclaration | L2029–2032 | bool Drilling.Common.Interface.CMelsec.IsHexDevice(string) |
| GetMelsecNetDeviceType | MethodDeclaration | L2034–2077 | int Drilling.Common.Interface.CMelsec.GetMelsecNetDeviceType(string) |
| EvaluateDeviceSwitch1 | LocalFunctionStatement | L2036–2074 | int EvaluateDeviceSwitch1() |
| RequireWordBit | MethodDeclaration | L2079–2087 | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| WordsToInt32 | MethodDeclaration | L2089–2097 | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) |
| Int32ToWords | MethodDeclaration | L2099–2109 | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) |
| WordsToFloat | MethodDeclaration | L2111–2117 | float Drilling.Common.Interface.CMelsec.WordsToFloat(System.Collections.Generic.IReadOnlyList<ushort>) |
| FloatToWords | MethodDeclaration | L2119–2130 | ushort[] Drilling.Common.Interface.CMelsec.FloatToWords(float, int) |
| ReadMelsecNetOption | MethodDeclaration | L2132–2149 | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) |
| ReadMelsecNetShortArgument | MethodDeclaration | L2151–2160 | short Drilling.Common.Interface.CMelsec.ReadMelsecNetShortArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) |
| ReadMelsecNetIntArgument | MethodDeclaration | L2162–2170 | int Drilling.Common.Interface.CMelsec.ReadMelsecNetIntArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) |
| WriteHandshakeLog | MethodDeclaration | L2172–2179 | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) |
| WriteHandshakeError | MethodDeclaration | L2181–2188 | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) |
| GetHandshakeInterfaceData | MethodDeclaration | L2190–2198 | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CMelsec.GetHandshakeInterfaceData(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| FormatWriteCommand | MethodDeclaration | L2200–2203 | string Drilling.Common.Interface.CMelsec.FormatWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| FormatWriteStatus | MethodDeclaration | L2205–2208 | string Drilling.Common.Interface.CMelsec.FormatWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| FormatCommandValue | MethodDeclaration | L2210–2238 | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) |
| WriteErrorLog | MethodDeclaration | L2240–2243 | void Drilling.Common.Interface.CMelsec.WriteErrorLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, string, string) |
| FormatMap | MethodDeclaration | L2245–2248 | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| NormalizeId | MethodDeclaration | L2250–2253 | string Drilling.Common.Interface.CMelsec.NormalizeId(string) |
| Open | EnumMemberDeclaration | L2257–2257 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.Open |
| Close | EnumMemberDeclaration | L2258–2258 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.Close |
| ReadBit | EnumMemberDeclaration | L2259–2259 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadBit |
| WriteBit | EnumMemberDeclaration | L2260–2260 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteBit |
| ReadWord | EnumMemberDeclaration | L2261–2261 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadWord |
| WriteWord | EnumMemberDeclaration | L2262–2262 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteWord |
| ReadDouble | EnumMemberDeclaration | L2263–2263 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadDouble |
| WriteDouble | EnumMemberDeclaration | L2264–2264 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteDouble |
| WriteDoubleArray | EnumMemberDeclaration | L2265–2265 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteDoubleArray |
| ReadDoubleArray | EnumMemberDeclaration | L2266–2266 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadDoubleArray |
| ReadString | EnumMemberDeclaration | L2267–2267 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadString |
| WriteString | EnumMemberDeclaration | L2268–2268 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteString |
| .ctor | ConstructorDeclaration | L2273–2280 | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) |
| Command | PropertyDeclaration | L2282–2282 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Command |
| get_Command | GetAccessorDeclaration | L2282–2282 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Command.get |
| QueuedTimestamp | PropertyDeclaration | L2283–2283 | long Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp |
| get_QueuedTimestamp | GetAccessorDeclaration | L2283–2283 | long Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp.get |
| set_QueuedTimestamp | SetAccessorDeclaration | L2283–2283 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp.set |
| Id | PropertyDeclaration | L2284–2284 | string Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Id |
| get_Id | GetAccessorDeclaration | L2284–2284 | string Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Id.get |
| Value | PropertyDeclaration | L2285–2285 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Value |
| get_Value | GetAccessorDeclaration | L2285–2285 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Value.get |
| CancellationToken | PropertyDeclaration | L2286–2286 | System.Threading.CancellationToken Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CancellationToken |
| get_CancellationToken | GetAccessorDeclaration | L2286–2286 | System.Threading.CancellationToken Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CancellationToken.get |
| SuppressLog | PropertyDeclaration | L2287–2287 | bool Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.SuppressLog |
| get_SuppressLog | GetAccessorDeclaration | L2287–2287 | bool Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.SuppressLog.get |
| Completed | PropertyDeclaration | L2288–2288 | System.Threading.ManualResetEvent Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Completed |
| get_Completed | GetAccessorDeclaration | L2288–2288 | System.Threading.ManualResetEvent Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Completed.get |
| Result | PropertyDeclaration | L2289–2289 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result |
| get_Result | GetAccessorDeclaration | L2289–2289 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result.get |
| set_Result | SetAccessorDeclaration | L2289–2289 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result.set |
| Error | PropertyDeclaration | L2290–2290 | System.Exception? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error |
| get_Error | GetAccessorDeclaration | L2290–2290 | System.Exception? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error.get |
| set_Error | SetAccessorDeclaration | L2290–2290 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error.set |
| .ctor | ConstructorDeclaration | L2295–2302 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CMelsecWriteCommand(int, string, string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, object) |
| RequestNo | PropertyDeclaration | L2304–2304 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestNo |
| get_RequestNo | GetAccessorDeclaration | L2304–2304 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestNo.get |
| WriteId | PropertyDeclaration | L2305–2305 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteId |
| get_WriteId | GetAccessorDeclaration | L2305–2305 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteId.get |
| ReadbackId | PropertyDeclaration | L2306–2306 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId |
| get_ReadbackId | GetAccessorDeclaration | L2306–2306 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId.get |
| set_ReadbackId | SetAccessorDeclaration | L2306–2306 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId.set |
| RequestedDataType | PropertyDeclaration | L2307–2307 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestedDataType |
| get_RequestedDataType | GetAccessorDeclaration | L2307–2307 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestedDataType.get |
| ExpectedValue | PropertyDeclaration | L2308–2308 | object Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ExpectedValue |
| get_ExpectedValue | GetAccessorDeclaration | L2308–2308 | object Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ExpectedValue.get |
| ActualValue | PropertyDeclaration | L2309–2309 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue |
| get_ActualValue | GetAccessorDeclaration | L2309–2309 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue.get |
| set_ActualValue | SetAccessorDeclaration | L2309–2309 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue.set |
| Result | PropertyDeclaration | L2310–2310 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result |
| get_Result | GetAccessorDeclaration | L2310–2310 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result.get |
| set_Result | SetAccessorDeclaration | L2310–2310 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result.set |
| CurrentRetryCount | PropertyDeclaration | L2311–2311 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount |
| get_CurrentRetryCount | GetAccessorDeclaration | L2311–2311 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount.get |
| set_CurrentRetryCount | SetAccessorDeclaration | L2311–2311 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount.set |
| RetryCount | PropertyDeclaration | L2312–2312 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount |
| get_RetryCount | GetAccessorDeclaration | L2312–2312 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount.get |
| set_RetryCount | SetAccessorDeclaration | L2312–2312 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount.set |
| TimeoutMs | PropertyDeclaration | L2313–2313 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs |
| get_TimeoutMs | GetAccessorDeclaration | L2313–2313 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs.get |
| set_TimeoutMs | SetAccessorDeclaration | L2313–2313 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs.set |
| WriteBeforeReadCycle | PropertyDeclaration | L2314–2314 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle |
| get_WriteBeforeReadCycle | GetAccessorDeclaration | L2314–2314 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle.get |
| set_WriteBeforeReadCycle | SetAccessorDeclaration | L2314–2314 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle.set |
| MinimumReadCycle | PropertyDeclaration | L2315–2315 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle |
| get_MinimumReadCycle | GetAccessorDeclaration | L2315–2315 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle.get |
| set_MinimumReadCycle | SetAccessorDeclaration | L2315–2315 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle.set |
| ConfirmReadCycle | PropertyDeclaration | L2316–2316 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle |
| get_ConfirmReadCycle | GetAccessorDeclaration | L2316–2316 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle.get |
| set_ConfirmReadCycle | SetAccessorDeclaration | L2316–2316 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle.set |
| ErrorMessage | PropertyDeclaration | L2317–2317 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage |
| get_ErrorMessage | GetAccessorDeclaration | L2317–2317 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage.get |
| set_ErrorMessage | SetAccessorDeclaration | L2317–2317 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage.set |
| AttemptStartedAt | PropertyDeclaration | L2318–2318 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt |
| get_AttemptStartedAt | GetAccessorDeclaration | L2318–2318 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt.get |
| set_AttemptStartedAt | SetAccessorDeclaration | L2318–2318 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt.set |
| NextReadAt | PropertyDeclaration | L2319–2319 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt |
| get_NextReadAt | GetAccessorDeclaration | L2319–2319 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt.get |
| set_NextReadAt | SetAccessorDeclaration | L2319–2319 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt.set |
| WriteData | PropertyDeclaration | L2320–2320 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData |
| get_WriteData | GetAccessorDeclaration | L2320–2320 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData.get |
| set_WriteData | SetAccessorDeclaration | L2320–2320 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData.set |
| ReadbackData | PropertyDeclaration | L2321–2321 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData |
| get_ReadbackData | GetAccessorDeclaration | L2321–2321 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData.get |
| set_ReadbackData | SetAccessorDeclaration | L2321–2321 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData.set |
| CancelRequested | FieldDeclaration | L2323–2323 | bool Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CancelRequested |
| CreateStatus | MethodDeclaration | L2324–2341 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CreateStatus() |
| CloseDevice | MethodDeclaration | L2350–2387 | void Drilling.Common.Interface.CMelsec.CloseDevice(int, System.Threading.CancellationToken) |
| CloseDeviceCore | MethodDeclaration | L2389–2409 | void Drilling.Common.Interface.CMelsec.CloseDeviceCore(int) |
| IsIofPositionId | MethodDeclaration | L2413–2414 | bool Drilling.Common.Interface.CMelsec.IsIofPositionId(string) |
| IsOnDemandValueId | MethodDeclaration | L2416–2422 | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) |
| GetDoubleArrayCapacity | MethodDeclaration | L2425–2425 | int Drilling.Common.Interface.CMelsec.GetDoubleArrayCapacity(string) |
| ResolveDoubleArrayData | MethodDeclaration | L2427–2453 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.ResolveDoubleArrayData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| WriteDoubleArray | MethodDeclaration | L2456–2460 | void Drilling.Common.Interface.CMelsec.WriteDoubleArray(string, System.Collections.Generic.IReadOnlyList<double>, System.Threading.CancellationToken) |
| ReadDoubleArray | MethodDeclaration | L2462–2467 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Interface.CMelsec.ReadDoubleArray(string, int, System.Threading.CancellationToken) |
| WriteDoubleArrayCore | MethodDeclaration | L2469–2499 | void Drilling.Common.Interface.CMelsec.WriteDoubleArrayCore(string, double[], System.Threading.CancellationToken) |
| ReadDoubleArrayCore | MethodDeclaration | L2501–2523 | double[] Drilling.Common.Interface.CMelsec.ReadDoubleArrayCore(string, int, System.Threading.CancellationToken) |
| ValidateArrayAddress | MethodDeclaration | L2525–2529 | void Drilling.Common.Interface.CMelsec.ValidateArrayAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) |
| GetCachedSnapshot | MethodDeclaration | L2535–2535 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot() |
| GetCachedSnapshot | MethodDeclaration | L2538–2546 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| GetCachedSnapshot | MethodDeclaration | L2550–2566 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(System.Collections.Generic.IEnumerable<string>, out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| GetCachedValue | MethodDeclaration | L2568–2573 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE? Drilling.Common.Interface.CMelsec.GetCachedValue(string) |
| RefreshCachedValueAsync | MethodDeclaration | L2577–2637 | System.Threading.Tasks.Task<Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.RefreshCachedValueAsync(string, System.Threading.CancellationToken) |
| WithCacheFreshness | MethodDeclaration | L2639–2652 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) |
| RebuildPollingMap | MethodDeclaration | L2654–2747 | void Drilling.Common.Interface.CMelsec.RebuildPollingMap(System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| RestartPollingSchedule | MethodDeclaration | L2749–2760 | void Drilling.Common.Interface.CMelsec.RestartPollingSchedule() |
| RestartPollingDevice | MethodDeclaration | L2762–2773 | void Drilling.Common.Interface.CMelsec.RestartPollingDevice(int) |
| InvalidatePollingCache | MethodDeclaration | L2775–2782 | void Drilling.Common.Interface.CMelsec.InvalidatePollingCache(Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| InvalidateWrittenCache | MethodDeclaration | L2784–2799 | void Drilling.Common.Interface.CMelsec.InvalidateWrittenCache(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| SetBlockState | MethodDeclaration | L2801–2805 | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| SetItemState | MethodDeclaration | L2807–2813 | void Drilling.Common.Interface.CMelsec.SetItemState(Drilling.Common.Interface.CMelsec.PollItem, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| RequestPollingBlock | MethodDeclaration | L2816–2823 | void Drilling.Common.Interface.CMelsec.RequestPollingBlock(Drilling.Common.Interface.CMelsec.PollBlock) |
| PollNextCacheBlock | MethodDeclaration | L2825–2847 | void Drilling.Common.Interface.CMelsec.PollNextCacheBlock() |
| PollDue | MethodDeclaration | L2850–2851 | bool Drilling.Common.Interface.CMelsec.PollDue(Drilling.Common.Interface.CMelsec.PollBlock, System.DateTimeOffset) |
| TryPollNextCacheBlock | MethodDeclaration | L2853–2962 | bool Drilling.Common.Interface.CMelsec.TryPollNextCacheBlock() |
| CompletePollingFailure | MethodDeclaration | L2964–2977 | void Drilling.Common.Interface.CMelsec.CompletePollingFailure(Drilling.Common.Interface.CMelsec.PollBlock, int, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| DecodePollingValue | MethodDeclaration | L2979–3006 | object Drilling.Common.Interface.CMelsec.DecodePollingValue(Drilling.Common.Interface.CMelsec.PollItem, ushort[], int) |
| ScaleInteger | MethodDeclaration | L3008–3008 | object Drilling.Common.Interface.CMelsec.ScaleInteger(int, double) |
| IsControlPollItem | MethodDeclaration | L3010–3014 | bool Drilling.Common.Interface.CMelsec.IsControlPollItem(Drilling.Common.Interface.CMelsec.PollItem) |
| Items | PropertyDeclaration | L3017–3017 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> Drilling.Common.Interface.CMelsec.PollBlock.Items |
| get_Items | GetAccessorDeclaration | L3017–3017 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> Drilling.Common.Interface.CMelsec.PollBlock.Items.get |
| DeviceNo | PropertyDeclaration | L3018–3018 | int Drilling.Common.Interface.CMelsec.PollBlock.DeviceNo |
| Address | PropertyDeclaration | L3019–3022 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.PollBlock.Address |
| Start | PropertyDeclaration | L3023–3023 | int Drilling.Common.Interface.CMelsec.PollBlock.Start |
| End | PropertyDeclaration | L3024–3024 | int Drilling.Common.Interface.CMelsec.PollBlock.End |
| get_End | GetAccessorDeclaration | L3024–3024 | int Drilling.Common.Interface.CMelsec.PollBlock.End.get |
| set_End | SetAccessorDeclaration | L3024–3024 | void Drilling.Common.Interface.CMelsec.PollBlock.End.set |
| WordCount | PropertyDeclaration | L3025–3025 | int Drilling.Common.Interface.CMelsec.PollBlock.WordCount |
| IntervalMs | PropertyDeclaration | L3026–3026 | int Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs |
| get_IntervalMs | GetAccessorDeclaration | L3026–3026 | int Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs.get |
| set_IntervalMs | SetAccessorDeclaration | L3026–3026 | void Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs.set |
| NextReadAt | PropertyDeclaration | L3027–3027 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt |
| get_NextReadAt | GetAccessorDeclaration | L3027–3027 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt.get |
| set_NextReadAt | SetAccessorDeclaration | L3027–3027 | void Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt.set |
| AttemptNo | PropertyDeclaration | L3028–3028 | long Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo |
| get_AttemptNo | GetAccessorDeclaration | L3028–3028 | long Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo.get |
| set_AttemptNo | SetAccessorDeclaration | L3028–3028 | void Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo.set |
| IsReading | PropertyDeclaration | L3029–3029 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsReading |
| get_IsReading | GetAccessorDeclaration | L3029–3029 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsReading.get |
| set_IsReading | SetAccessorDeclaration | L3029–3029 | void Drilling.Common.Interface.CMelsec.PollBlock.IsReading.set |
| LastReadAt | PropertyDeclaration | L3030–3030 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt |
| get_LastReadAt | GetAccessorDeclaration | L3030–3030 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt.get |
| set_LastReadAt | SetAccessorDeclaration | L3030–3030 | void Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt.set |
| IsControl | PropertyDeclaration | L3031–3031 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsControl |
| get_IsControl | GetAccessorDeclaration | L3031–3031 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsControl.get |
| set_IsControl | SetAccessorDeclaration | L3031–3031 | void Drilling.Common.Interface.CMelsec.PollBlock.IsControl.set |
| UpdateStageMotionSimulationWords | MethodDeclaration | L3038–3051 | void Drilling.Common.Interface.CMelsec.UpdateStageMotionSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| IsSimulationOnlyRoute | MethodDeclaration | L3055–3055 | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| DistortionMeasurementIds | FieldDeclaration | L3056–3058 | System.Collections.Generic.HashSet<string> Drilling.Common.Interface.CMelsec.DistortionMeasurementIds |
| IsDistortionMeasurementSimulationValue | MethodDeclaration | L3059–3060 | bool Drilling.Common.Interface.CMelsec.IsDistortionMeasurementSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| SetDistortionMeasurementSimulationValue | MethodDeclaration | L3061–3061 | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValue(string, double) |
| SetDistortionMeasurementSimulationValues | MethodDeclaration | L3062–3082 | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValues(System.Collections.Generic.IReadOnlyDictionary<string, double>) |
| PublishSimulationInput | MethodDeclaration | L3083–3089 | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| IsStageFlowSimulationSignal | MethodDeclaration | L3091–3091 | bool Drilling.Common.Interface.CMelsec.IsStageFlowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| SetStageFlowSimulationValue | MethodDeclaration | L3092–3106 | void Drilling.Common.Interface.CMelsec.SetStageFlowSimulationValue(string, int) |
| IsStageProtectWindowSimulationSignal | MethodDeclaration | L3108–3108 | bool Drilling.Common.Interface.CMelsec.IsStageProtectWindowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| SetStageProtectWindowSimulationValue | MethodDeclaration | L3110–3126 | void Drilling.Common.Interface.CMelsec.SetStageProtectWindowSimulationValue(string, int) |
| IsStageSimulationSignal | MethodDeclaration | L3128–3128 | bool Drilling.Common.Interface.CMelsec.IsStageSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| IsStageAlignSimulationSignal | MethodDeclaration | L3129–3129 | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| SetStageAlignSimulationValue | MethodDeclaration | L3131–3146 | void Drilling.Common.Interface.CMelsec.SetStageAlignSimulationValue(string, int) |
| SetStageSimulationSignal | MethodDeclaration | L3152–3166 | void Drilling.Common.Interface.CMelsec.SetStageSimulationSignal(string, bool) |
| Bit | EnumMemberDeclaration | L3172–3172 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Bit |
| Word | EnumMemberDeclaration | L3173–3173 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Word |
| DWord | EnumMemberDeclaration | L3174–3174 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.DWord |
| Double | EnumMemberDeclaration | L3177–3177 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Double |
| Float | EnumMemberDeclaration | L3178–3178 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Float |
| String | EnumMemberDeclaration | L3179–3179 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.String |
| In | EnumMemberDeclaration | L3184–3184 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.In |
| Out | EnumMemberDeclaration | L3185–3185 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.Out |
| InOut | EnumMemberDeclaration | L3186–3186 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.InOut |
| Read | EnumMemberDeclaration | L3191–3191 | Drilling.Common.Interface.EN_MELSEC_ACCESS.Read |
| Write | EnumMemberDeclaration | L3192–3192 | Drilling.Common.Interface.EN_MELSEC_ACCESS.Write |
| ReadWrite | EnumMemberDeclaration | L3193–3193 | Drilling.Common.Interface.EN_MELSEC_ACCESS.ReadWrite |
| Ready | EnumMemberDeclaration | L3198–3198 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Ready |
| PrepareWrite | EnumMemberDeclaration | L3199–3199 | Drilling.Common.Interface.EN_MELSEC_PROCESS.PrepareWrite |
| Write | EnumMemberDeclaration | L3200–3200 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Write |
| WaitReadback | EnumMemberDeclaration | L3201–3201 | Drilling.Common.Interface.EN_MELSEC_PROCESS.WaitReadback |
| RetryWrite | EnumMemberDeclaration | L3202–3202 | Drilling.Common.Interface.EN_MELSEC_PROCESS.RetryWrite |
| CommunicationError | EnumMemberDeclaration | L3203–3203 | Drilling.Common.Interface.EN_MELSEC_PROCESS.CommunicationError |
| Close | EnumMemberDeclaration | L3204–3204 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Close |
| None | EnumMemberDeclaration | L3209–3209 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.None |
| Queued | EnumMemberDeclaration | L3210–3210 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Queued |
| Writing | EnumMemberDeclaration | L3211–3211 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Writing |
| WriteSuccess | EnumMemberDeclaration | L3212–3212 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.WriteSuccess |
| WaitReadback | EnumMemberDeclaration | L3213–3213 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.WaitReadback |
| Confirmed | EnumMemberDeclaration | L3214–3214 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Confirmed |
| Timeout | EnumMemberDeclaration | L3215–3215 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Timeout |
| CommunicationError | EnumMemberDeclaration | L3216–3216 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.CommunicationError |
| InvalidParameter | EnumMemberDeclaration | L3217–3217 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.InvalidParameter |
| Cancelled | EnumMemberDeclaration | L3218–3218 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Cancelled |
| AutoEcho | EnumMemberDeclaration | L3223–3223 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.AutoEcho |
| HoldValue | EnumMemberDeclaration | L3224–3224 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.HoldValue |
| FailFirstAttempt | EnumMemberDeclaration | L3225–3225 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.FailFirstAttempt |
| CommunicationError | EnumMemberDeclaration | L3226–3226 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.CommunicationError |
| LoadAll | MethodDeclaration | L3262–3262 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsecMapFileBase.LoadAll(System.Threading.CancellationToken) |
| Pending | EnumMemberDeclaration | L3267–3267 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Pending |
| Valid | EnumMemberDeclaration | L3268–3268 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Valid |
| Stale | EnumMemberDeclaration | L3269–3269 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Stale |
| Error | EnumMemberDeclaration | L3270–3270 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Error |
| Offline | EnumMemberDeclaration | L3271–3271 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Offline |
| IsValid | PropertyDeclaration | L3276–3276 | bool Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.IsValid |
| OpenMode | FieldDeclaration | L3281–3281 | short Drilling.Common.Interface.CMelsecNetApi.OpenMode |
| NativeLibraryName | FieldDeclaration | L3282–3282 | string Drilling.Common.Interface.CMelsecNetApi.NativeLibraryName |
| Open | MethodDeclaration | L3283–3286 | int Drilling.Common.Interface.CMelsecNetApi.Open(short, out int) |
| Close | MethodDeclaration | L3288–3291 | int Drilling.Common.Interface.CMelsecNetApi.Close(int) |
| SendEx | MethodDeclaration | L3293–3296 | int Drilling.Common.Interface.CMelsecNetApi.SendEx(int, int, int, int, int, ref int, short[]) |
| ReceiveEx | MethodDeclaration | L3298–3301 | int Drilling.Common.Interface.CMelsecNetApi.ReceiveEx(int, int, int, int, int, ref int, short[]) |
| mdOpen | MethodDeclaration | L3306–3307 | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdOpen(short, short, out int) |
| mdClose | MethodDeclaration | L3308–3309 | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdClose(int) |
| mdSendEx | MethodDeclaration | L3310–3311 | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdSendEx(int, int, int, int, int, ref int, short[]) |
| mdReceiveEx | MethodDeclaration | L3312–3313 | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdReceiveEx(int, int, int, int, int, ref int, short[]) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `DefaultWriteTimeoutMs` · L15–15

[Drilling.Common/Interface/Melsec/CMelsec.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.DefaultWriteTimeoutMs |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 15 | variable-initializer | 변수의 초기값을 지정합니다: DefaultWriteTimeoutMs = 3000 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MelsecThreadDelayMs` · L16–16

[Drilling.Common/Interface/Melsec/CMelsec.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.MelsecThreadDelayMs |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | variable-initializer | 변수의 초기값을 지정합니다: MelsecThreadDelayMs = 2 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MelsecNetMaximumTransferBytes` · L17–17

[Drilling.Common/Interface/Melsec/CMelsec.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.MelsecNetMaximumTransferBytes |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 17 | variable-initializer | 변수의 초기값을 지정합니다: MelsecNetMaximumTransferBytes = 1920 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MaximumStoredWriteStatusCount` · L18–18

[Drilling.Common/Interface/Melsec/CMelsec.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.MaximumStoredWriteStatusCount |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 18 | variable-initializer | 변수의 초기값을 지정합니다: MaximumStoredWriteStatusCount = 256 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MaximumWriteQueueCount` · L19–19

[Drilling.Common/Interface/Melsec/CMelsec.cs:19–19](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L19-L19)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.MaximumWriteQueueCount |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 19 | variable-initializer | 변수의 초기값을 지정합니다: MaximumWriteQueueCount = 128 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_interfaceManager` · L20–20

[Drilling.Common/Interface/Melsec/CMelsec.cs:20–20](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L20-L20)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CInterfaceManager Drilling.Common.Interface.CMelsec._interfaceManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Interface.CInterfaceManager |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_logManager` · L21–21

[Drilling.Common/Interface/Melsec/CMelsec.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L21-L21)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | CLogManager? Drilling.Common.Interface.CMelsec._logManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | CLogManager? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_melsecNetApi` · L22–22

[Drilling.Common/Interface/Melsec/CMelsec.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsecNetApi Drilling.Common.Interface.CMelsec._melsecNetApi |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Interface.CMelsecNetApi |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_ioLock` · L23–23

[Drilling.Common/Interface/Melsec/CMelsec.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L23-L23)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._ioLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 23 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 23 | variable-initializer | 변수의 초기값을 지정합니다: _ioLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_mapLock` · L24–24

[Drilling.Common/Interface/Melsec/CMelsec.cs:24–24](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L24-L24)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._mapLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 24 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 24 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 24 | variable-initializer | 변수의 초기값을 지정합니다: _mapLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_requestLock` · L25–25

[Drilling.Common/Interface/Melsec/CMelsec.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L25-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._requestLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 25 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 25 | variable-initializer | 변수의 초기값을 지정합니다: _requestLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_writeLock` · L26–26

[Drilling.Common/Interface/Melsec/CMelsec.cs:26–26](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L26-L26)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._writeLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 26 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 26 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 26 | variable-initializer | 변수의 초기값을 지정합니다: _writeLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_readStateLock` · L27–27

[Drilling.Common/Interface/Melsec/CMelsec.cs:27–27](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L27-L27)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._readStateLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 27 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 27 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 27 | variable-initializer | 변수의 초기값을 지정합니다: _readStateLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulationLock` · L28–28

[Drilling.Common/Interface/Melsec/CMelsec.cs:28–28](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L28-L28)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._simulationLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 28 | new object | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new object () |
| 28 | variable-initializer | 변수의 초기값을 지정합니다: _simulationLock = new object () |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulationWords` · L29–29

[Drilling.Common/Interface/Melsec/CMelsec.cs:29–29](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L29-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, ushort> Drilling.Common.Interface.CMelsec._simulationWords |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, ushort> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 29 | new | resolved | System.Collections.Generic.Dictionary<string, ushort>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 29 | variable-initializer | 변수의 초기값을 지정합니다: _simulationWords = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_requestQueue` · L30–30

[Drilling.Common/Interface/Melsec/CMelsec.cs:30–30](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L30-L30)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest> Drilling.Common.Interface.CMelsec._requestQueue |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 30 | new Queue<CMelsecThreadRequest> | resolved | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Queue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 30 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Queue<CMelsecThreadRequest>() |
| 30 | variable-initializer | 변수의 초기값을 지정합니다: _requestQueue = new Queue<CMelsecThreadRequest>() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_writeQueue` · L31–31

[Drilling.Common/Interface/Melsec/CMelsec.cs:31–31](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L31-L31)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> Drilling.Common.Interface.CMelsec._writeQueue |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 31 | new Queue<CMelsecWriteCommand> | resolved | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Queue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 31 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Queue<CMelsecWriteCommand>() |
| 31 | variable-initializer | 변수의 초기값을 지정합니다: _writeQueue = new Queue<CMelsecWriteCommand>() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_writeStatus` · L32–32

[Drilling.Common/Interface/Melsec/CMelsec.cs:32–32](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L32-L32)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> Drilling.Common.Interface.CMelsec._writeStatus |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 32 | new Dictionary<int, CMelsecWriteCommand> | resolved | System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 32 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, CMelsecWriteCommand>() |
| 32 | variable-initializer | 변수의 초기값을 지정합니다: _writeStatus = new Dictionary<int, CMelsecWriteCommand>() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_readSnapshots` · L33–33

[Drilling.Common/Interface/Melsec/CMelsec.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L33-L33)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot> Drilling.Common.Interface.CMelsec._readSnapshots |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 33 | new Dictionary<string, CMelsecReadSnapshot> | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, CMelsecReadSnapshot>(StringComparer.OrdinalIgnoreCase) |
| 33 | variable-initializer | 변수의 초기값을 지정합니다: _readSnapshots = new Dictionary<string, CMelsecReadSnapshot>(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_melsecNetPaths` · L34–34

[Drilling.Common/Interface/Melsec/CMelsec.cs:34–34](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L34-L34)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<int, int> Drilling.Common.Interface.CMelsec._melsecNetPaths |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<int, int> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 34 | new Dictionary<int, int> | resolved | System.Collections.Generic.Dictionary<int, int>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 34 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, int>() |
| 34 | variable-initializer | 변수의 초기값을 지정합니다: _melsecNetPaths = new Dictionary<int, int>() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_map` · L35–35

[Drilling.Common/Interface/Melsec/CMelsec.cs:35–35](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L35-L35)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec._map |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 35 | new | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 35 | variable-initializer | 변수의 초기값을 지정합니다: _map = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_mapSnapshot` · L36–36

[Drilling.Common/Interface/Melsec/CMelsec.cs:36–36](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L36-L36)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec._mapSnapshot |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 36 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Array.AsReadOnly<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(Drilling.Common.Interface.ST_MELSEC_MAP_DATA[]) |
| 36 | Array.Empty<ST_MELSEC_MAP_DATA> | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA[] System.Array.Empty<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(Array.Empty<ST_MELSEC_MAP_DATA>()) |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.Empty<ST_MELSEC_MAP_DATA>() |
| 36 | variable-initializer | 변수의 초기값을 지정합니다: _mapSnapshot = Array.AsReadOnly(Array.Empty<ST_MELSEC_MAP_DATA>()) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_acceptRequests` · L37–37

[Drilling.Common/Interface/Melsec/CMelsec.cs:37–37](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L37-L37)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec._acceptRequests |
| 접근/수식자 | Private / private, volatile |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 37 | variable-initializer | 변수의 초기값을 지정합니다: _acceptRequests = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_nextRequestNo` · L38–38

[Drilling.Common/Interface/Melsec/CMelsec.cs:38–38](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L38-L38)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._nextRequestNo |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_activeWriteCommand` · L39–39

[Drilling.Common/Interface/Melsec/CMelsec.cs:39–39](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L39-L39)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec._activeWriteCommand |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_process` · L40–40

[Drilling.Common/Interface/Melsec/CMelsec.cs:40–40](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L40-L40)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec._process |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 40 | variable-initializer | 변수의 초기값을 지정합니다: _process = EN_MELSEC_PROCESS.Ready |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_simulationReadback` · L41–41

[Drilling.Common/Interface/Melsec/CMelsec.cs:41–41](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L41-L41)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec._simulationReadback |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 41 | variable-initializer | 변수의 초기값을 지정합니다: _simulationReadback = EN_MELSEC_SIMULATION_READBACK.AutoEcho |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_readCycleNo` · L42–42

[Drilling.Common/Interface/Melsec/CMelsec.cs:42–42](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L42-L42)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec._readCycleNo |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastSuccessfulReadAt` · L43–43

[Drilling.Common/Interface/Melsec/CMelsec.cs:43–43](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L43-L43)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec._lastSuccessfulReadAt |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastReadReturnCode` · L44–44

[Drilling.Common/Interface/Melsec/CMelsec.cs:44–44](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L44-L44)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._lastReadReturnCode |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_consecutiveReadFailureCount` · L45–45

[Drilling.Common/Interface/Melsec/CMelsec.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L45-L45)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._consecutiveReadFailureCount |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_communicationAvailable` · L46–46

[Drilling.Common/Interface/Melsec/CMelsec.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec._communicationAvailable |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultPollingIntervalMs` · L47–47

[Drilling.Common/Interface/Melsec/CMelsec.cs:47–47](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L47-L47)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.DefaultPollingIntervalMs |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 47 | variable-initializer | 변수의 초기값을 지정합니다: DefaultPollingIntervalMs = 1000 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `PollingFailureBackoffMs` · L48–48

[Drilling.Common/Interface/Melsec/CMelsec.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L48-L48)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollingFailureBackoffMs |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 48 | variable-initializer | 변수의 초기값을 지정합니다: PollingFailureBackoffMs = 2000 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pollLock` · L49–49

[Drilling.Common/Interface/Melsec/CMelsec.cs:49–49](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L49-L49)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec._pollLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 49 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 49 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 49 | variable-initializer | 변수의 초기값을 지정합니다: _pollLock = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_cachedValues` · L50–50

[Drilling.Common/Interface/Melsec/CMelsec.cs:50–50](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L50-L50)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec._cachedValues |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 50 | new | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 50 | variable-initializer | 변수의 초기값을 지정합니다: _cachedValues = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pollBlockById` · L51–51

[Drilling.Common/Interface/Melsec/CMelsec.cs:51–51](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L51-L51)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._pollBlockById |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 51 | new | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 51 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(StringComparer.OrdinalIgnoreCase) |
| 51 | variable-initializer | 변수의 초기값을 지정합니다: _pollBlockById = new(StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pollDeviceBackoff` · L52–52

[Drilling.Common/Interface/Melsec/CMelsec.cs:52–52](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L52-L52)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<int, System.DateTimeOffset> Drilling.Common.Interface.CMelsec._pollDeviceBackoff |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<int, System.DateTimeOffset> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 52 | new | resolved | System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 52 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 52 | variable-initializer | 변수의 초기값을 지정합니다: _pollDeviceBackoff = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pollBlocks` · L53–53

[Drilling.Common/Interface/Melsec/CMelsec.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L53-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._pollBlocks |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollBlock> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 53 | variable-initializer | 변수의 초기값을 지정합니다: _pollBlocks = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_requestedPollBlocks` · L54–54

[Drilling.Common/Interface/Melsec/CMelsec.cs:54–54](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L54-L54)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._requestedPollBlocks |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 54 | new | resolved | System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock>.Queue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 54 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 54 | variable-initializer | 변수의 초기값을 지정합니다: _requestedPollBlocks = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_requestedPollBlockSet` · L55–55

[Drilling.Common/Interface/Melsec/CMelsec.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L55-L55)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock> Drilling.Common.Interface.CMelsec._requestedPollBlockSet |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 55 | new | resolved | System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock>.HashSet() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 55 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 55 | variable-initializer | 변수의 초기값을 지정합니다: _requestedPollBlockSet = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_serveRequestedPoll` · L56–56

[Drilling.Common/Interface/Melsec/CMelsec.cs:56–56](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L56-L56)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec._serveRequestedPoll |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 56 | variable-initializer | 변수의 초기값을 지정합니다: _serveRequestedPoll = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_controlPollStreak` · L57–57

[Drilling.Common/Interface/Melsec/CMelsec.cs:57–57](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L57-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._controlPollStreak |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pollGeneration` · L58–58

[Drilling.Common/Interface/Melsec/CMelsec.cs:58–58](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L58-L58)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._pollGeneration |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_nextPollBlock` · L59–59

[Drilling.Common/Interface/Melsec/CMelsec.cs:59–59](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L59-L59)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec._nextPollBlock |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `StageAlignBusyWordId` · L60–60

[Drilling.Common/Interface/Melsec/CMelsec.cs:60–60](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L60-L60)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.StageAlignBusyWordId |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 60 | variable-initializer | 변수의 초기값을 지정합니다: StageAlignBusyWordId = "STAGE_MCC_BUSY_FLAGS" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `StageProtectWindowCountId` · L61–61

[Drilling.Common/Interface/Melsec/CMelsec.cs:61–61](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L61-L61)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.StageProtectWindowCountId |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 61 | variable-initializer | 변수의 초기값을 지정합니다: StageProtectWindowCountId = "PTW_TRAY_COUNT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `StageProtectWindowCompleteId` · L62–62

[Drilling.Common/Interface/Melsec/CMelsec.cs:62–62](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L62-L62)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.StageProtectWindowCompleteId |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 62 | variable-initializer | 변수의 초기값을 지정합니다: StageProtectWindowCompleteId = "PTW_EXCHANGE_SEQ_COMPLETE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L65–71

[Drilling.Common/Interface/Melsec/CMelsec.cs:65–71](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L65-L71)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsec(Drilling.Common.Interface.CInterfaceManager, CLogManager?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>?, Drilling.Common.Interface.CMelsecNetApi?) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaceManager | Drilling.Common.Interface.CInterfaceManager | None | False /  |
| logManager | CLogManager? | None | True / null |
| map | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>? | None | True / null |
| melsecNetApi | Drilling.Common.Interface.CMelsecNetApi? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CInterfaceManager.cs:54–54](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L54-L54) | new CMelsec | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 69 | new CMelsecNetApi | resolved | Drilling.Common.Interface.CMelsecNetApi.CMelsecNetApi() · Drilling.Common/Interface/Melsec/CMelsec.cs:3279 |
| 70 | ReloadMap | resolved | void Drilling.Common.Interface.CMelsec.ReloadMap(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) · Drilling.Common/Interface/Melsec/CMelsec.cs:273 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 67 | assignment | 값을 대상에 대입합니다: _interfaceManager = interfaceManager |
| 68 | assignment | 값을 대상에 대입합니다: _logManager = logManager |
| 69 | assignment | 값을 대상에 대입합니다: _melsecNetApi = melsecNetApi ?? new CMelsecNetApi() |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecNetApi() |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReloadMap(map ?? []) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Process` · L75–84

[Drilling.Common/Interface/Melsec/CMelsec.cs:75–84](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L75-L84)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec.Process |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Process` · L77–83

[Drilling.Common/Interface/Melsec/CMelsec.cs:77–83](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L77-L83)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS Drilling.Common.Interface.CMelsec.Process.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 79 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 81 | return | 호출자에게 값 또는 제어를 반환합니다: return _process; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_Process"]
 N0["L79 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ReadCycleNo` · L86–95

[Drilling.Common/Interface/Melsec/CMelsec.cs:86–95](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L86-L95)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.ReadCycleNo |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ReadCycleNo` · L88–94

[Drilling.Common/Interface/Melsec/CMelsec.cs:88–94](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L88-L94)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.ReadCycleNo.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 90 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 92 | return | 호출자에게 값 또는 제어를 반환합니다: return _readCycleNo; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_ReadCycleNo"]
 N0["L90 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `LastSuccessfulReadAt` · L97–106

[Drilling.Common/Interface/Melsec/CMelsec.cs:97–106](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L97-L106)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.LastSuccessfulReadAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_LastSuccessfulReadAt` · L99–105

[Drilling.Common/Interface/Melsec/CMelsec.cs:99–105](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L99-L105)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.LastSuccessfulReadAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 101 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 103 | return | 호출자에게 값 또는 제어를 반환합니다: return _lastSuccessfulReadAt; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_LastSuccessfulReadAt"]
 N0["L101 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `LastReadReturnCode` · L108–117

[Drilling.Common/Interface/Melsec/CMelsec.cs:108–117](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L108-L117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.LastReadReturnCode |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_LastReadReturnCode` · L110–116

[Drilling.Common/Interface/Melsec/CMelsec.cs:110–116](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L110-L116)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.LastReadReturnCode.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 112 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 114 | return | 호출자에게 값 또는 제어를 반환합니다: return _lastReadReturnCode; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_LastReadReturnCode"]
 N0["L112 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ConsecutiveReadFailureCount` · L119–128

[Drilling.Common/Interface/Melsec/CMelsec.cs:119–128](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L119-L128)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.ConsecutiveReadFailureCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ConsecutiveReadFailureCount` · L121–127

[Drilling.Common/Interface/Melsec/CMelsec.cs:121–127](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L121-L127)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.ConsecutiveReadFailureCount.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 123 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 125 | return | 호출자에게 값 또는 제어를 반환합니다: return _consecutiveReadFailureCount; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_ConsecutiveReadFailureCount"]
 N0["L123 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsCommunicationAvailable` · L130–139

[Drilling.Common/Interface/Melsec/CMelsec.cs:130–139](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L130-L139)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsCommunicationAvailable |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsCommunicationAvailable` · L132–138

[Drilling.Common/Interface/Melsec/CMelsec.cs:132–138](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L132-L138)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsCommunicationAvailable.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 134 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 136 | return | 호출자에게 값 또는 제어를 반환합니다: return _communicationAvailable; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["get_IsCommunicationAvailable"]
 N0["L134 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Initialize` · L141–154

[Drilling.Common/Interface/Melsec/CMelsec.cs:141–154](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L141-L154)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.Initialize() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CInterfaceManager.cs:150–150](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L150-L150) | _melsec.Initialize | False |
| [Drilling.Common/Interface/CInterfaceManager.cs:603–603](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L603-L603) | _melsec.Initialize | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:628–628](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L628-L628) | Initialize | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:968–968](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L968-L968) | Initialize | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 145 | RestartPollingSchedule | resolved | void Drilling.Common.Interface.CMelsec.RestartPollingSchedule() · Drilling.Common/Interface/Melsec/CMelsec.cs:2749 |
| 153 | Start | resolved | void Drilling.Common.Threading.CtrlThread.Start(int, string) · Drilling.Common/Threading/CtrlThread.cs:60 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 143 | if | 조건에 따라 분기합니다: if (!IsRunning) |
| 145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RestartPollingSchedule() |
| 148 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 150 | assignment | 값을 대상에 대입합니다: _acceptRequests = true |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Start(MelsecThreadDelayMs, "MELSEC_CONTROL") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Initialize"]
 N0["L143 if"]
 M -->|포함| N0
 N1["L148 lock"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeInitialize` · L156–195

[Drilling.Common/Interface/Melsec/CMelsec.cs:156–195](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L156-L195)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.DeInitialize() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CInterfaceManager.cs:138–138](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L138-L138) | _melsec.DeInitialize | False |
| [Drilling.Common/Interface/CInterfaceManager.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L257-L257) | _melsec.DeInitialize | False |
| [Drilling.Common/Interface/CInterfaceManager.cs:625–625](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L625-L625) | _melsec.DeInitialize | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:483–483](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L483-L483) | DeInitialize | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 163 | InvalidatePollingCache | resolved | void Drilling.Common.Interface.CMelsec.InvalidatePollingCache(Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2775 |
| 164 | FlushMelsecLogs | resolved | void Drilling.Common.Interface.CMelsec.FlushMelsecLogs() · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:73 |
| 165 | CancelQueuedRequests | resolved | void Drilling.Common.Interface.CMelsec.CancelQueuedRequests(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:881 |
| 166 | CancelQueuedWrites | resolved | void Drilling.Common.Interface.CMelsec.CancelQueuedWrites(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1405 |
| 167 | CloseMelsecNetChannels | resolved | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannels() · Drilling.Common/Interface/Melsec/CMelsec.cs:770 |
| 168 | Stop | resolved | void Drilling.Common.Threading.CtrlThread.Stop() · Drilling.Common/Threading/CtrlThread.cs:128 |
| 171 | Stop | resolved | void Drilling.Common.Threading.CtrlThread.Stop() · Drilling.Common/Threading/CtrlThread.cs:128 |
| 176 | _simulationWords.Clear | resolved | void System.Collections.Generic.Dictionary<string, ushort>.Clear() |
| 182 | _readSnapshots.Clear | resolved | void System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot>.Clear() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 158 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 160 | assignment | 값을 대상에 대입합니다: _acceptRequests = false |
| 163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InvalidatePollingCache(EN_MELSEC_CACHE_STATE.Offline, "MELSEC communication is stopped.") |
| 164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FlushMelsecLogs() |
| 165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancelQueuedRequests("MELSEC control is stopping.") |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancelQueuedWrites("MELSEC control is stopping.") |
| 167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseMelsecNetChannels() |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop() |
| 169 | if | 조건에 따라 분기합니다: if (IsRunning) |
| 171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop() |
| 174 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_simulationLock) |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationWords.Clear() |
| 177 | assignment | 값을 대상에 대입합니다: _simulationReadback = EN_MELSEC_SIMULATION_READBACK.AutoEcho |
| 180 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _readSnapshots.Clear() |
| 183 | assignment | 값을 대상에 대입합니다: _readCycleNo = 0 |
| 184 | assignment | 값을 대상에 대입합니다: _lastSuccessfulReadAt = null |
| 185 | assignment | 값을 대상에 대입합니다: _lastReadReturnCode = 0 |
| 186 | assignment | 값을 대상에 대입합니다: _consecutiveReadFailureCount = 0 |
| 187 | assignment | 값을 대상에 대입합니다: _communicationAvailable = false |
| 190 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 192 | assignment | 값을 대상에 대입합니다: _activeWriteCommand = null |
| 193 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.Ready |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeInitialize"]
 N0["L158 lock"]
 M -->|포함| N0
 N1["L169 if"]
 M -->|포함| N1
 N2["L174 lock"]
 M -->|포함| N2
 N3["L180 lock"]
 M -->|포함| N3
 N4["L190 lock"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Run` · L197–230

[Drilling.Common/Interface/Melsec/CMelsec.cs:197–230](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L197-L230)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.Run() |
| 접근/수식자 | Public / public, override |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 201 | GetActiveWriteCommand | resolved | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetActiveWriteCommand() · Drilling.Common/Interface/Melsec/CMelsec.cs:1082 |
| 204 | ProcessWriteCommand | resolved | void Drilling.Common.Interface.CMelsec.ProcessWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1120 |
| 205 | PollNextCacheBlock | resolved | void Drilling.Common.Interface.CMelsec.PollNextCacheBlock() · Drilling.Common/Interface/Melsec/CMelsec.cs:2825 |
| 209 | GetThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest? Drilling.Common.Interface.CMelsec.GetThreadRequest() · Drilling.Common/Interface/Melsec/CMelsec.cs:644 |
| 212 | ProcessThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ProcessThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:657 |
| 213 | PollNextCacheBlock | resolved | void Drilling.Common.Interface.CMelsec.PollNextCacheBlock() · Drilling.Common/Interface/Melsec/CMelsec.cs:2825 |
| 217 | GetQueuedWriteCommand | resolved | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetQueuedWriteCommand() · Drilling.Common/Interface/Melsec/CMelsec.cs:1090 |
| 220 | ActivateWriteCommand | resolved | void Drilling.Common.Interface.CMelsec.ActivateWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1103 |
| 223 | PollNextCacheBlock | resolved | void Drilling.Common.Interface.CMelsec.PollNextCacheBlock() · Drilling.Common/Interface/Melsec/CMelsec.cs:2825 |
| 227 | FlushMelsecLogs | resolved | void Drilling.Common.Interface.CMelsec.FlushMelsecLogs() · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:73 |
| 228 | PublishMelsecTimings | resolved | void Drilling.Common.Interface.CMelsec.PublishMelsecTimings() · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:27 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 199 | try | 예외 처리 범위입니다: try |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetActiveWriteCommand() |
| 201 | local-declaration | 지역 변수를 선언합니다: CMelsecWriteCommand? activeCommand = GetActiveWriteCommand(); |
| 201 | variable-initializer | 변수의 초기값을 지정합니다: activeCommand = GetActiveWriteCommand() |
| 202 | if | 조건에 따라 분기합니다: if (activeCommand != null) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ProcessWriteCommand(activeCommand) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollNextCacheBlock() |
| 206 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetThreadRequest() |
| 209 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest? request = GetThreadRequest(); |
| 209 | variable-initializer | 변수의 초기값을 지정합니다: request = GetThreadRequest() |
| 210 | if | 조건에 따라 분기합니다: if (request != null) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ProcessThreadRequest(request) |
| 213 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollNextCacheBlock() |
| 214 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 217 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetQueuedWriteCommand() |
| 217 | local-declaration | 지역 변수를 선언합니다: CMelsecWriteCommand? writeCommand = GetQueuedWriteCommand(); |
| 217 | variable-initializer | 변수의 초기값을 지정합니다: writeCommand = GetQueuedWriteCommand() |
| 218 | if | 조건에 따라 분기합니다: if (writeCommand != null) |
| 220 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ActivateWriteCommand(writeCommand) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollNextCacheBlock() |
| 225 | finally | 종료 정리 구간입니다: finally |
| 227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FlushMelsecLogs() |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishMelsecTimings() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Run"]
 N0["L199 try"]
 M -->|포함| N0
 N1["L202 if"]
 N0 -->|포함| N1
 N2["L210 if"]
 N0 -->|포함| N2
 N3["L218 if"]
 N0 -->|포함| N3
 N4["L225 finally"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OnThreadError` · L232–236

[Drilling.Common/Interface/Melsec/CMelsec.cs:232–236](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L232-L236)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.OnThreadError(System.Exception) |
| 접근/수식자 | Protected / protected, override |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| exception | System.Exception | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 234 | .WriteInterfaceError | unresolved | None |
| 235 | base.OnThreadError | resolved · 동적 구현 선택 가능 | void Drilling.Common.Threading.CtrlThread.OnThreadError(System.Exception) · Drilling.Common/Threading/CtrlThread.cs:219 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 234 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceError(EN_EQP_MODULE.Melsec, "MELSEC_CONTROL", "[I/F][COMM_ERROR] THREAD", exception.Message) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: base.OnThreadError(exception) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Map` · L238–243

[Drilling.Common/Interface/Melsec/CMelsec.cs:238–243](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L238-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.Map |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Map` · L242–242

[Drilling.Common/Interface/Melsec/CMelsec.cs:242–242](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L242-L242)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.Map.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 242 | Volatile.Read | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Threading.Volatile.Read<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>>(ref readonly System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Read(ref _mapSnapshot) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateMapData` · L245–271

[Drilling.Common/Interface/Melsec/CMelsec.cs:245–271](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L245-L271)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:400–400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L400-L400) | CMelsec.ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:548–548](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L548-L548) | ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:570–570](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L570-L570) | ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2429–2429](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2429-L2429) | ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2472–2472](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2472-L2472) | ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2504–2504](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2504-L2504) | ValidateMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2665–2665](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2665-L2665) | ValidateMapData | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5456–5456](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5456-L5456) | CMelsec.ValidateMapData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 247 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 247 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 249 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 249 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 252 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 255 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 255 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 260 | RequireWordBit | resolved | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2079 |
| 264 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 264 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 269 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 269 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(data.ReadScale) |
| 247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(data.WriteScale) |
| 247 | if | 조건에 따라 분기합니다: if (!double.IsFinite(data.ReadScale) &#124;&#124; data.ReadScale == 0 &#124;&#124; !double.IsFinite(data.WriteScale) &#124;&#124; data.WriteScale == 0) |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSEC READ_SCALE and WRITE_SCALE must be finite and nonzero: " + FormatMap(data)) |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 249 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSEC READ_SCALE and WRITE_SCALE must be finite and nonzero: " + FormatMap(data)); |
| 252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 252 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_ADDRESS address = ParseAddress(data.Address); |
| 252 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(data.Address) |
| 253 | if | 조건에 따라 분기합니다: if (address.Number < 0) |
| 255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSECNET device number cannot be negative: " + FormatMap(data)) |
| 255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 255 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSECNET device number cannot be negative: " + FormatMap(data)); |
| 258 | if | 조건에 따라 분기합니다: if (data.DataType == EN_MELSEC_DATA_TYPE.Bit) |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequireWordBit(address, data) |
| 262 | else | 앞 조건이 거짓인 경로입니다: else |
| 262 | if | 조건에 따라 분기합니다: if (address.BitIndex != null) |
| 264 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSEC non-BIT address cannot include a bit index: " + FormatMap(data)) |
| 264 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 264 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSEC non-BIT address cannot include a bit index: " + FormatMap(data)); |
| 267 | if | 조건에 따라 분기합니다: if ((data.DataType == EN_MELSEC_DATA_TYPE.DWord &#124;&#124; data.DataType == EN_MELSEC_DATA_TYPE.Double &#124;&#124; data.DataType == EN_MELSEC_DATA_TYPE.Float) && data.Length < 2) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSEC 2-word data LENGTH must be at least 2: " + FormatMap(data)) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 269 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSEC 2-word data LENGTH must be at least 2: " + FormatMap(data)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateMapData"]
 N0["L247 if"]
 M -->|포함| N0
 N1["L253 if"]
 M -->|포함| N1
 N2["L258 if"]
 M -->|포함| N2
 N3["L262 else"]
 N2 -->|포함| N3
 N4["L262 if"]
 N2 -->|포함| N4
 N5["L267 if"]
 M -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReloadMap` · L273–296

[Drilling.Common/Interface/Melsec/CMelsec.cs:273–296](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L273-L296)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ReloadMap(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| map | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L70-L70) | ReloadMap | False |
| [Drilling.Common/Managers/CManager.cs:110–110](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Managers/CManager.cs#L110-L110) | _interfaceManager.Melsec.ReloadMap | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 285 | map.Where(FilterData4).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToDictionary<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 285 | map.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 290 | map.FirstOrDefault | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.FirstOrDefault<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 290 | row.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 291 | original.Address.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 295 | RebuildPollingMap | resolved | void Drilling.Common.Interface.CMelsec.RebuildPollingMap(System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2654 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 285 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(FilterData4).ToDictionary(HandleMap5, StringComparer.OrdinalIgnoreCase) |
| 285 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(FilterData4) |
| 285 | local-declaration | 지역 변수를 선언합니다: Dictionary<string, ST_MELSEC_MAP_DATA> loadedMap = map.Where(FilterData4).ToDictionary(HandleMap5, StringComparer.OrdinalIgnoreCase); |
| 285 | variable-initializer | 변수의 초기값을 지정합니다: loadedMap = map.Where(FilterData4).ToDictionary(HandleMap5, StringComparer.OrdinalIgnoreCase) |
| 287 | foreach | 컬렉션 요소를 순회합니다: foreach (var signal in new[] { "ABLE", "COMPLETE" }) |
| 289 | local-declaration | 지역 변수를 선언합니다: var id = "HANDSHAKE_STG_DISTORTION_" + signal; |
| 289 | variable-initializer | 변수의 초기값을 지정합니다: id = "HANDSHAKE_STG_DISTORTION_" + signal |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.FirstOrDefault(row => row.Id.Equals(id, StringComparison.OrdinalIgnoreCase)) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row.Id.Equals(id, StringComparison.OrdinalIgnoreCase) |
| 290 | local-declaration | 지역 변수를 선언합니다: var original = map.FirstOrDefault(row => row.Id.Equals(id, StringComparison.OrdinalIgnoreCase)); |
| 290 | variable-initializer | 변수의 초기값을 지정합니다: original = map.FirstOrDefault(row => row.Id.Equals(id, StringComparison.OrdinalIgnoreCase)) |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: original.Address.Equals("UNASSIGNED", StringComparison.OrdinalIgnoreCase) |
| 291 | if | 조건에 따라 분기합니다: if (original is not null && !original.Use && original.Address.Equals("UNASSIGNED", StringComparison.OrdinalIgnoreCase)) |
| 292 | assignment | 값을 대상에 대입합니다: Use = true |
| 292 | assignment | 값을 대상에 대입합니다: Address = "SIM_DISTORTION_" + signal |
| 292 | assignment | 값을 대상에 대입합니다: PollMs = 0 |
| 292 | assignment | 값을 대상에 대입합니다: loadedMap[id] = original with { Use = true, Address = "SIM_DISTORTION_" + signal, PollMs = 0, Description = original.Description + "; SIMULATION 전용 가상 입력; 실통신에서는 사용하지 않음" } |
| 293 | assignment | 값을 대상에 대입합니다: Description = original.Description + "; SIMULATION 전용 가상 입력; 실통신에서는 사용하지 않음" |
| 295 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RebuildPollingMap(loadedMap) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReloadMap"]
 N0["L287 foreach"]
 M -->|포함| N0
 N1["L291 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `FilterData4` · L275–278

[Drilling.Common/Interface/Melsec/CMelsec.cs:275–278](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L275-L278)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool FilterData4(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 277 | return | 호출자에게 값 또는 제어를 반환합니다: return data.Use; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `HandleMap5` · L280–283

[Drilling.Common/Interface/Melsec/CMelsec.cs:280–283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L280-L283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string HandleMap5(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 282 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(data.Id) |
| 282 | return | 호출자에게 값 또는 제어를 반환합니다: return NormalizeId(data.Id); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetMapList` · L298–307

[Drilling.Common/Interface/Melsec/CMelsec.cs:298–307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L298-L307)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.GetMapList(string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | string | None | True / "" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:380–380](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L380-L380) | .Melsec.GetMapList | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2353–2353](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2353-L2353) | GetMapList | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5400–5400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5400-L5400) | .Melsec.GetMapList | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:4067–4067](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L4067-L4067) | interfaceManager.Melsec.GetMapList | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3794–3794](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3794-L3794) | _interfaceManager.Melsec.GetMapList | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3810–3810](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3810-L3810) | _interfaceManager.Melsec.GetMapList | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 300 | group.Trim | resolved | string string.Trim() |
| 306 | Map.Where(FilterData6).ToArray | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToArray<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>() |
| 306 | Map.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Trim() |
| 300 | local-declaration | 지역 변수를 선언합니다: var normalizedGroup = group.Trim(); |
| 300 | variable-initializer | 변수의 초기값을 지정합니다: normalizedGroup = group.Trim() |
| 306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Map.Where(FilterData6).ToArray() |
| 306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Map.Where(FilterData6) |
| 306 | return | 호출자에게 값 또는 제어를 반환합니다: return Map.Where(FilterData6).ToArray(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `FilterData6` · L301–304

[Drilling.Common/Interface/Melsec/CMelsec.cs:301–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L301-L304)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool FilterData6(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 303 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 303 | data.Group.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(normalizedGroup) |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Group.Equals(normalizedGroup, StringComparison.OrdinalIgnoreCase) |
| 303 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(normalizedGroup) &#124;&#124; data.Group.Equals(normalizedGroup, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetMapData` · L309–329

[Drilling.Common/Interface/Melsec/CMelsec.cs:309–329](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L309-L329)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:998–998](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L998-L998) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1006–1006](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1006-L1006) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1942–1942](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1942-L1942) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1960–1960](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1960-L1960) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2425–2425](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2425-L2425) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2581–2581](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2581-L2581) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2583–2583](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2583-L2583) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3067–3067](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3067-L3067) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3096–3096](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3096-L3096) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3114–3114](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3114-L3114) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3137–3137](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3137-L3137) | GetMapData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3156–3156](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3156-L3156) | GetMapData | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:274–274](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L274-L274) | _interfaces.Melsec.GetMapData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 311 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 315 | _map.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 320 | _map.Keys.ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 328 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 328 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 328 | availableKeys.OrderBy | resolved | System.Linq.IOrderedEnumerable<string> System.Collections.Generic.IEnumerable<string>.OrderBy<string, string>(System.Func<string, string>, System.Collections.Generic.IComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 311 | local-declaration | 지역 변수를 선언합니다: var normalizedId = NormalizeId(id); |
| 311 | variable-initializer | 변수의 초기값을 지정합니다: normalizedId = NormalizeId(id) |
| 312 | local-declaration | 지역 변수를 선언합니다: string[] availableKeys; |
| 313 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_mapLock) |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map.TryGetValue(normalizedId, out var data) |
| 315 | if | 조건에 따라 분기합니다: if (_map.TryGetValue(normalizedId, out var data)) |
| 317 | return | 호출자에게 값 또는 제어를 반환합니다: return data; |
| 320 | assignment | 값을 대상에 대입합니다: availableKeys = _map.Keys.ToArray() |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map.Keys.ToArray() |
| 328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC map was not registered: {id}. Available={string.Join(", ", availableKeys.OrderBy(GetKeySortKey7, StringComparer.OrdinalIgnoreCase))}") |
| 328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(", ", availableKeys.OrderBy(GetKeySortKey7, StringComparer.OrdinalIgnoreCase)) |
| 328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: availableKeys.OrderBy(GetKeySortKey7, StringComparer.OrdinalIgnoreCase) |
| 328 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC map was not registered: {id}. Available={string.Join(", ", availableKeys.OrderBy(GetKeySortKey7, StringComparer.OrdinalIgnoreCase))}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetMapData"]
 N0["L313 lock"]
 M -->|포함| N0
 N1["L315 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `GetKeySortKey7` · L323–326

[Drilling.Common/Interface/Melsec/CMelsec.cs:323–326](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L323-L326)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string GetKeySortKey7(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 325 | return | 호출자에게 값 또는 제어를 반환합니다: return key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadBit` · L331–336

[Drilling.Common/Interface/Melsec/CMelsec.cs:331–336](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L331-L336)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.ReadBit(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 333 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 334 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken) |
| 333 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken); |
| 333 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 335 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result is bool result && result; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadBitNoLog` · L338–343

[Drilling.Common/Interface/Melsec/CMelsec.cs:338–343](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L338-L343)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.ReadBitNoLog(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 340 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 341 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken, suppressLog: true) |
| 340 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken, suppressLog: true); |
| 340 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadBit, id, null, cancellationToken, suppressLog: true) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 342 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result is bool result && result; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Open` · L345–349

[Drilling.Common/Interface/Melsec/CMelsec.cs:345–349](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L345-L349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.Open(int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | True / 0 |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CInterfaceManager.cs:606–606](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L606-L606) | _melsec.Open | False |
| [Drilling.Common/Interface/CInterfaceManager.cs:613–613](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L613-L613) | _melsec.Open | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 347 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 347 | deviceNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 348 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Open, "MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture), deviceNo, cancellationToken) |
| 347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: deviceNo.ToString(CultureInfo.InvariantCulture) |
| 347 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Open, "MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture), deviceNo, cancellationToken); |
| 347 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Open, "MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture), deviceNo, cancellationToken) |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteBit` · L351–355

[Drilling.Common/Interface/Melsec/CMelsec.cs:351–355](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L351-L355)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteBit(string, bool, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2867–2867](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2867-L2867) | _interfaceManager.Melsec.WriteBit | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 353 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 354 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteBit, id, value, cancellationToken) |
| 353 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteBit, id, value, cancellationToken); |
| 353 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteBit, id, value, cancellationToken) |
| 354 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadWord` · L357–362

[Drilling.Common/Interface/Melsec/CMelsec.cs:357–362](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L357-L362)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadWord(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 359 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 360 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 359 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken) |
| 359 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken); |
| 359 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken) |
| 360 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 361 | return | 호출자에게 값 또는 제어를 반환합니다: return (double)request.Result!; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadWordNoLog` · L364–369

[Drilling.Common/Interface/Melsec/CMelsec.cs:364–369](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L364-L369)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadWordNoLog(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2585–2585](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2585-L2585) | ReadWordNoLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 366 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 367 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 366 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken, suppressLog: true) |
| 366 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken, suppressLog: true); |
| 366 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadWord, id, null, cancellationToken, suppressLog: true) |
| 367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 368 | return | 호출자에게 값 또는 제어를 반환합니다: return (double)request.Result!; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteWord` · L371–375

[Drilling.Common/Interface/Melsec/CMelsec.cs:371–375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L371-L375)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteWord(string, double, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | double | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:366–366](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L366-L366) | Interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:383–383](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L383-L383) | Interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:344–344](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L344-L344) | _interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStationProcess.cs:3917–3917](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3917-L3917) | _interfaceManager.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStationProcess.cs:4314–4314](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4314-L4314) | interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStationProcess.cs:4414–4414](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4414-L4414) | interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStationProcess.cs:4723–4723](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4723-L4723) | interfaces.Melsec.WriteWord | False |
| [Drilling.Common/Station/CStationProcess.cs:6446–6446](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L6446-L6446) | interfaces.Melsec.WriteWord | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6965–6965](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L6965-L6965) | _melsec.WriteWord | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6990–6990](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L6990-L6990) | _melsec.WriteWord | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2871–2871](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2871-L2871) | _interfaceManager.Melsec.WriteWord | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 373 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 374 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteWord, id, value, cancellationToken) |
| 373 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteWord, id, value, cancellationToken); |
| 373 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteWord, id, value, cancellationToken) |
| 374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDouble` · L377–382

[Drilling.Common/Interface/Melsec/CMelsec.cs:377–382](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L377-L382)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadDouble(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2585–2585](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2585-L2585) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2878–2878](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2878-L2878) | _interfaceManager.Melsec.ReadDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 379 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 380 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 379 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken) |
| 379 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken); |
| 379 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken) |
| 380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 381 | conditional-expression | 조건에 따라 결과식을 선택합니다: request.Result is double result ? result : 0.0 |
| 381 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result is double result ? result : 0.0; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDoubleNoLog` · L384–389

[Drilling.Common/Interface/Melsec/CMelsec.cs:384–389](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L384-L389)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadDoubleNoLog(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:382–382](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L382-L382) | .Melsec.ReadDoubleNoLog | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5400–5400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5400-L5400) | .Melsec.ReadDoubleNoLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 386 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 387 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken, suppressLog: true) |
| 386 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken, suppressLog: true); |
| 386 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDouble, id, null, cancellationToken, suppressLog: true) |
| 387 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 388 | conditional-expression | 조건에 따라 결과식을 선택합니다: request.Result is double result ? result : 0.0 |
| 388 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result is double result ? result : 0.0; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteDouble` · L391–395

[Drilling.Common/Interface/Melsec/CMelsec.cs:391–395](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L391-L395)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteDouble(string, double, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | double | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:383–383](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L383-L383) | manager.Melsec.WriteDouble | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:342–342](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L342-L342) | _interfaces.Melsec.WriteDouble | False |
| [Drilling.Common/Station/CStationProcess.cs:4721–4721](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4721-L4721) | interfaces.Melsec.WriteDouble | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2875–2875](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2875-L2875) | _interfaceManager.Melsec.WriteDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 393 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 394 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 393 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDouble, id, value, cancellationToken) |
| 393 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDouble, id, value, cancellationToken); |
| 393 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDouble, id, value, cancellationToken) |
| 394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadString` · L397–402

[Drilling.Common/Interface/Melsec/CMelsec.cs:397–402](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L397-L402)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.ReadString(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 399 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 400 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 399 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken) |
| 399 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken); |
| 399 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken) |
| 400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 401 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result as string ?? ""; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadStringNoLog` · L404–409

[Drilling.Common/Interface/Melsec/CMelsec.cs:404–409](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L404-L409)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.ReadStringNoLog(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 406 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 407 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 406 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken, suppressLog: true) |
| 406 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken, suppressLog: true); |
| 406 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadString, id, null, cancellationToken, suppressLog: true) |
| 407 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 408 | return | 호출자에게 값 또는 제어를 반환합니다: return request.Result as string ?? ""; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteString` · L411–415

[Drilling.Common/Interface/Melsec/CMelsec.cs:411–415](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L411-L415)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteString(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2881–2881](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2881-L2881) | _interfaceManager.Melsec.WriteString | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 413 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 414 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteString, id, value, cancellationToken) |
| 413 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteString, id, value, cancellationToken); |
| 413 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteString, id, value, cancellationToken) |
| 414 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueWriteBit` · L417–420

[Drilling.Common/Interface/Melsec/CMelsec.cs:417–420](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L417-L420)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.QueueWriteBit(string, bool, string, int, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| writeId | string | None | False /  |
| value | bool | None | False /  |
| readbackId | string | None | True / "" |
| timeoutMs | int | None | True / 0 |
| retryCount | int | None | True / -1 |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 419 | QueueWriteCommand | resolved | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:894 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueWriteCommand(EN_MELSEC_DATA_TYPE.Bit, writeId, readbackId, value, timeoutMs, retryCount) |
| 419 | return | 호출자에게 값 또는 제어를 반환합니다: return QueueWriteCommand(EN_MELSEC_DATA_TYPE.Bit, writeId, readbackId, value, timeoutMs, retryCount); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueWriteWord` · L422–425

[Drilling.Common/Interface/Melsec/CMelsec.cs:422–425](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L422-L425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.QueueWriteWord(string, double, string, int, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| writeId | string | None | False /  |
| value | double | None | False /  |
| readbackId | string | None | True / "" |
| timeoutMs | int | None | True / 0 |
| retryCount | int | None | True / -1 |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 424 | QueueWriteCommand | resolved | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:894 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueWriteCommand(EN_MELSEC_DATA_TYPE.Word, writeId, readbackId, value, timeoutMs, retryCount) |
| 424 | return | 호출자에게 값 또는 제어를 반환합니다: return QueueWriteCommand(EN_MELSEC_DATA_TYPE.Word, writeId, readbackId, value, timeoutMs, retryCount); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueWriteDouble` · L427–430

[Drilling.Common/Interface/Melsec/CMelsec.cs:427–430](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L427-L430)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.QueueWriteDouble(string, double, string, int, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| writeId | string | None | False /  |
| value | double | None | False /  |
| readbackId | string | None | True / "" |
| timeoutMs | int | None | True / 0 |
| retryCount | int | None | True / -1 |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 429 | QueueWriteCommand | resolved | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:894 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueWriteCommand(EN_MELSEC_DATA_TYPE.Double, writeId, readbackId, value, timeoutMs, retryCount) |
| 429 | return | 호출자에게 값 또는 제어를 반환합니다: return QueueWriteCommand(EN_MELSEC_DATA_TYPE.Double, writeId, readbackId, value, timeoutMs, retryCount); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueWriteString` · L432–435

[Drilling.Common/Interface/Melsec/CMelsec.cs:432–435](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L432-L435)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.QueueWriteString(string, string, string, int, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| writeId | string | None | False /  |
| value | string | None | False /  |
| readbackId | string | None | True / "" |
| timeoutMs | int | None | True / 0 |
| retryCount | int | None | True / -1 |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 434 | QueueWriteCommand | resolved | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:894 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueWriteCommand(EN_MELSEC_DATA_TYPE.String, writeId, readbackId, value, timeoutMs, retryCount) |
| 434 | return | 호출자에게 값 또는 제어를 반환합니다: return QueueWriteCommand(EN_MELSEC_DATA_TYPE.String, writeId, readbackId, value, timeoutMs, retryCount); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetWriteResult` · L437–441

[Drilling.Common/Interface/Melsec/CMelsec.cs:437–441](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L437-L441)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.GetWriteResult(int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| requestNo | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 439 | GetWriteStatus | resolved | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS? Drilling.Common.Interface.CMelsec.GetWriteStatus(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:443 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetWriteStatus(requestNo) |
| 439 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_WRITE_STATUS? status = GetWriteStatus(requestNo); |
| 439 | variable-initializer | 변수의 초기값을 지정합니다: status = GetWriteStatus(requestNo) |
| 440 | conditional-expression | 조건에 따라 결과식을 선택합니다: status == null ? EN_MELSEC_WRITE_RESULT.InvalidParameter : status.Result |
| 440 | return | 호출자에게 값 또는 제어를 반환합니다: return status == null ? EN_MELSEC_WRITE_RESULT.InvalidParameter : status.Result; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetWriteStatus` · L443–454

[Drilling.Common/Interface/Melsec/CMelsec.cs:443–454](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L443-L454)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS? Drilling.Common.Interface.CMelsec.GetWriteStatus(int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| requestNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:439–439](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L439-L439) | GetWriteStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 447 | _writeStatus.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.TryGetValue(int, out Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 452 | command.CreateStatus | resolved | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CreateStatus() · Drilling.Common/Interface/Melsec/CMelsec.cs:2324 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 445 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeStatus.TryGetValue(requestNo, out CMelsecWriteCommand? command) |
| 447 | if | 조건에 따라 분기합니다: if (!_writeStatus.TryGetValue(requestNo, out CMelsecWriteCommand? command)) |
| 449 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.CreateStatus() |
| 452 | return | 호출자에게 값 또는 제어를 반환합니다: return command.CreateStatus(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetWriteStatus"]
 N0["L445 lock"]
 M -->|포함| N0
 N1["L447 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryGetReadSnapshot` · L456–471

[Drilling.Common/Interface/Melsec/CMelsec.cs:456–471](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L456-L471)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.TryGetReadSnapshot(string, out object?, out long) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | object? | Out | False /  |
| readCycleNo | long | Out | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 460 | _readSnapshots.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot) |
| 460 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 458 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _readSnapshots.TryGetValue(NormalizeId(id), out CMelsecReadSnapshot? snapshot) |
| 460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 460 | if | 조건에 따라 분기합니다: if (_readSnapshots.TryGetValue(NormalizeId(id), out CMelsecReadSnapshot? snapshot)) |
| 462 | assignment | 값을 대상에 대입합니다: value = snapshot.Value |
| 463 | assignment | 값을 대상에 대입합니다: readCycleNo = snapshot.ReadCycleNo |
| 464 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 468 | assignment | 값을 대상에 대입합니다: value = null |
| 469 | assignment | 값을 대상에 대입합니다: readCycleNo = 0 |
| 470 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryGetReadSnapshot"]
 N0["L458 lock"]
 M -->|포함| N0
 N1["L460 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetSimulationReadbackMode` · L473–479

[Drilling.Common/Interface/Melsec/CMelsec.cs:473–479](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L473-L479)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetSimulationReadbackMode(Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mode | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 475 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_simulationLock) |
| 477 | assignment | 값을 대상에 대입합니다: _simulationReadback = mode |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetSimulationReadbackMode"]
 N0["L475 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Dispose` · L481–485

[Drilling.Common/Interface/Melsec/CMelsec.cs:481–485](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L481-L485)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.Dispose() |
| 접근/수식자 | Public / public, new |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 483 | DeInitialize | resolved | void Drilling.Common.Interface.CMelsec.DeInitialize() · Drilling.Common/Interface/Melsec/CMelsec.cs:156 |
| 484 | base.Dispose | resolved | void Drilling.Common.Threading.CtrlThread.Dispose() · Drilling.Common/Threading/CtrlThread.cs:190 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeInitialize() |
| 484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: base.Dispose() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadBitCore` · L487–496

[Drilling.Common/Interface/Melsec/CMelsec.cs:487–496](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L487-L496)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.ReadBitCore(string, System.Threading.CancellationToken, bool, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:675–675](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L675-L675) | ReadBitCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:862–862](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L862-L862) | ReadBitCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1480–1480](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1480-L1480) | ReadBitCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 489 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1934 |
| 490 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 491 | RequireWordBit | resolved | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2079 |
| 492 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 494 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 489 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken) |
| 489 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareRead(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken); |
| 489 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareRead(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken) |
| 490 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 490 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_ADDRESS address = ParseAddress(data.Address); |
| 490 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(data.Address) |
| 491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequireWordBit(address, data) |
| 491 | local-declaration | 지역 변수를 선언합니다: int bitIndex = RequireWordBit(address, data); |
| 491 | variable-initializer | 변수의 초기값을 지정합니다: bitIndex = RequireWordBit(address, data) |
| 492 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(data, address, 1, cancellationToken, suppressLog, logSource) |
| 492 | local-declaration | 지역 변수를 선언합니다: ushort[] words = ReadWords(data, address, 1, cancellationToken, suppressLog, logSource); |
| 492 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(data, address, 1, cancellationToken, suppressLog, logSource) |
| 493 | local-declaration | 지역 변수를 선언합니다: bool value = (words[0] & (1 << bitIndex)) != 0; |
| 493 | variable-initializer | 변수의 초기값을 지정합니다: value = (words[0] & (1 << bitIndex)) != 0 |
| 494 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot(data.Id, value) |
| 495 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteBitCore` · L498–515

[Drilling.Common/Interface/Melsec/CMelsec.cs:498–515](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L498-L515)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteBitCore(string, bool, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:678–678](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L678-L678) | WriteBitCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1459–1459](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1459-L1459) | WriteBitCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 500 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1952 |
| 501 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 502 | RequireWordBit | resolved | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2079 |
| 503 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 514 | WriteWords | resolved | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1763 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 500 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken) |
| 500 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareWrite(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken); |
| 500 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareWrite(id, EN_MELSEC_DATA_TYPE.Bit, cancellationToken) |
| 501 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 501 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_ADDRESS address = ParseAddress(data.Address); |
| 501 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(data.Address) |
| 502 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequireWordBit(address, data) |
| 502 | local-declaration | 지역 변수를 선언합니다: int bitIndex = RequireWordBit(address, data); |
| 502 | variable-initializer | 변수의 초기값을 지정합니다: bitIndex = RequireWordBit(address, data) |
| 503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(data, address, 1, cancellationToken) |
| 503 | local-declaration | 지역 변수를 선언합니다: ushort[] words = ReadWords(data, address, 1, cancellationToken); |
| 503 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(data, address, 1, cancellationToken) |
| 504 | local-declaration | 지역 변수를 선언합니다: ushort mask = (ushort)(1 << bitIndex); |
| 504 | variable-initializer | 변수의 초기값을 지정합니다: mask = (ushort)(1 << bitIndex) |
| 505 | if | 조건에 따라 분기합니다: if (value) |
| 507 | assignment | 값을 대상에 대입합니다: words[0] = (ushort)(words[0] &#124; mask) |
| 509 | else | 앞 조건이 거짓인 경로입니다: else |
| 511 | assignment | 값을 대상에 대입합니다: words[0] = (ushort)(words[0] & ~mask) |
| 514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWords(data, address, words, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteBitCore"]
 N0["L505 if"]
 M -->|포함| N0
 N1["L509 else"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadWordCore` · L517–526

[Drilling.Common/Interface/Melsec/CMelsec.cs:517–526](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L517-L526)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadWordCore(string, System.Threading.CancellationToken, bool, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:681–681](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L681-L681) | ReadWordCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:866–866](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L866-L866) | ReadWordCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1482–1482](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1482-L1482) | ReadWordCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 519 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1939 |
| 520 | Math.Max | resolved | int System.Math.Max(int, int) |
| 521 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 521 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 522 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 524 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 519 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken) |
| 519 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareRead(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken); |
| 519 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareRead(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken) |
| 520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, data.Length) |
| 520 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1 |
| 520 | local-declaration | 지역 변수를 선언합니다: int wordCount = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1; |
| 520 | variable-initializer | 변수의 초기값을 지정합니다: wordCount = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1 |
| 521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource) |
| 521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 521 | local-declaration | 지역 변수를 선언합니다: ushort[] words = ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource); |
| 521 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource) |
| 522 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32(words) |
| 522 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.DWord ? WordsToInt32(words) : words[0] |
| 522 | local-declaration | 지역 변수를 선언합니다: int rawValue = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? WordsToInt32(words) : words[0]; |
| 522 | variable-initializer | 변수의 초기값을 지정합니다: rawValue = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? WordsToInt32(words) : words[0] |
| 523 | local-declaration | 지역 변수를 선언합니다: double value = rawValue * data.ReadScale; |
| 523 | variable-initializer | 변수의 초기값을 지정합니다: value = rawValue * data.ReadScale |
| 524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot(data.Id, value) |
| 525 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteWordCore` · L528–535

[Drilling.Common/Interface/Melsec/CMelsec.cs:528–535](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L528-L535)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteWordCore(string, double, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | double | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:684–684](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L684-L684) | WriteWordCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1462–1462](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1462-L1462) | WriteWordCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 530 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1957 |
| 531 | Math.Max | resolved | int System.Math.Max(int, int) |
| 532 | EncodeIntegerValue | resolved | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:537 |
| 533 | Int32ToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2099 |
| 534 | WriteWords | resolved | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1763 |
| 534 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 530 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken) |
| 530 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken); |
| 530 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord], cancellationToken) |
| 531 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, data.Length) |
| 531 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1 |
| 531 | local-declaration | 지역 변수를 선언합니다: int wordCount = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1; |
| 531 | variable-initializer | 변수의 초기값을 지정합니다: wordCount = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Math.Max(2, data.Length) : 1 |
| 532 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EncodeIntegerValue(data, value * data.WriteScale) |
| 532 | local-declaration | 지역 변수를 선언합니다: int rawValue = EncodeIntegerValue(data, value * data.WriteScale); |
| 532 | variable-initializer | 변수의 초기값을 지정합니다: rawValue = EncodeIntegerValue(data, value * data.WriteScale) |
| 533 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Int32ToWords(rawValue, wordCount) |
| 533 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Int32ToWords(rawValue, wordCount) : [(ushort)rawValue] |
| 533 | local-declaration | 지역 변수를 선언합니다: ushort[] words = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Int32ToWords(rawValue, wordCount) : [(ushort)rawValue]; |
| 533 | variable-initializer | 변수의 초기값을 지정합니다: words = data.DataType == EN_MELSEC_DATA_TYPE.DWord ? Int32ToWords(rawValue, wordCount) : [(ushort)rawValue] |
| 534 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWords(data, ParseAddress(data.Address), words, cancellationToken) |
| 534 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EncodeIntegerValue` · L537–543

[Drilling.Common/Interface/Melsec/CMelsec.cs:537–543](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L537-L543)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| rawValue | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:532–532](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L532-L532) | EncodeIntegerValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1561–1561](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1561-L1561) | EncodeIntegerValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1564–1564](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1564-L1564) | EncodeIntegerValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1569–1569](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1569-L1569) | EncodeIntegerValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3074–3074](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3074-L3074) | EncodeIntegerValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 539 | Math.Round | resolved | double System.Math.Round(double, System.MidpointRounding) |
| 540 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 541 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 541 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(rawValue, MidpointRounding.AwayFromZero) |
| 539 | local-declaration | 지역 변수를 선언합니다: var rounded = Math.Round(rawValue, MidpointRounding.AwayFromZero); |
| 539 | variable-initializer | 변수의 초기값을 지정합니다: rounded = Math.Round(rawValue, MidpointRounding.AwayFromZero) |
| 540 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(rounded) |
| 540 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.Word ? 0 : int.MinValue |
| 540 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.Word ? ushort.MaxValue : int.MaxValue |
| 540 | if | 조건에 따라 분기합니다: if (!double.IsFinite(rounded) &#124;&#124; rounded < (data.DataType == EN_MELSEC_DATA_TYPE.Word ? 0 : int.MinValue) &#124;&#124; rounded > (data.DataType == EN_MELSEC_DATA_TYPE.Word ? ushort.MaxValue : int.MaxValue)) |
| 541 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(rawValue), "Scaled MELSEC value must fit the configured integer type.") |
| 541 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(rawValue) |
| 541 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(rawValue), "Scaled MELSEC value must fit the configured integer type."); |
| 542 | return | 호출자에게 값 또는 제어를 반환합니다: return (int)rounded; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EncodeIntegerValue"]
 N0["L540 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDoubleCore` · L545–565

[Drilling.Common/Interface/Melsec/CMelsec.cs:545–565](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L545-L565)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Interface.CMelsec.ReadDoubleCore(string, System.Threading.CancellationToken, bool, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:687–687](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L687-L687) | ReadDoubleCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:870–870](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L870-L870) | ReadDoubleCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1484–1484](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1484-L1484) | ReadDoubleCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 547 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1939 |
| 548 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 552 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 552 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 556 | WordsToFloat | resolved | float Drilling.Common.Interface.CMelsec.WordsToFloat(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2111 |
| 560 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 563 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken) |
| 547 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken); |
| 547 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken) |
| 548 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(data) |
| 551 | local-declaration | 지역 변수를 선언합니다: int wordCount = 2; |
| 551 | variable-initializer | 변수의 초기값을 지정합니다: wordCount = 2 |
| 552 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource) |
| 552 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 552 | local-declaration | 지역 변수를 선언합니다: ushort[] words = ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource); |
| 552 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(data, ParseAddress(data.Address), wordCount, cancellationToken, suppressLog, logSource) |
| 553 | local-declaration | 지역 변수를 선언합니다: double value; |
| 554 | if | 조건에 따라 분기합니다: if (data.DataType == EN_MELSEC_DATA_TYPE.Float) |
| 556 | assignment | 값을 대상에 대입합니다: value = WordsToFloat(words) * data.ReadScale |
| 556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToFloat(words) |
| 558 | else | 앞 조건이 거짓인 경로입니다: else |
| 560 | assignment | 값을 대상에 대입합니다: value = WordsToInt32(words) * data.ReadScale |
| 560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32(words) |
| 563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot(data.Id, value) |
| 564 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadDoubleCore"]
 N0["L554 if"]
 M -->|포함| N0
 N1["L558 else"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteDoubleCore` · L567–580

[Drilling.Common/Interface/Melsec/CMelsec.cs:567–580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L567-L580)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteDoubleCore(string, double, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | double | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:690–690](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L690-L690) | WriteDoubleCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1465–1465](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1465-L1465) | WriteDoubleCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 569 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1957 |
| 570 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 573 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 573 | Math.Abs | resolved | double System.Math.Abs(double) |
| 575 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 575 | nameof | unresolved | None |
| 578 | FloatToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.FloatToWords(float, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2119 |
| 578 | Int32ToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2099 |
| 578 | Math.Round | resolved | double System.Math.Round(double, System.MidpointRounding) |
| 579 | WriteWords | resolved | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1763 |
| 579 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken) |
| 569 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken); |
| 569 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float], cancellationToken) |
| 570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(data) |
| 571 | local-declaration | 지역 변수를 선언합니다: int wordCount = 2; |
| 571 | variable-initializer | 변수의 초기값을 지정합니다: wordCount = 2 |
| 572 | local-declaration | 지역 변수를 선언합니다: double rawValue = value * data.WriteScale; |
| 572 | variable-initializer | 변수의 초기값을 지정합니다: rawValue = value * data.WriteScale |
| 573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(rawValue) |
| 573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(rawValue) |
| 573 | if | 조건에 따라 분기합니다: if (!double.IsFinite(rawValue) &#124;&#124; (data.DataType == EN_MELSEC_DATA_TYPE.Float && Math.Abs(rawValue) > float.MaxValue)) |
| 575 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(value), "Scaled MELSEC value must fit the configured numeric type.") |
| 575 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(value) |
| 575 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(value), "Scaled MELSEC value must fit the configured numeric type."); |
| 578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FloatToWords((float)rawValue, wordCount) |
| 578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Int32ToWords(checked((int)Math.Round(rawValue, MidpointRounding.AwayFromZero)), wordCount) |
| 578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(rawValue, MidpointRounding.AwayFromZero) |
| 578 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType == EN_MELSEC_DATA_TYPE.Float ? FloatToWords((float)rawValue, wordCount) : Int32ToWords(checked((int)Math.Round(rawValue, MidpointRounding.AwayFromZero)), wordCount) |
| 578 | local-declaration | 지역 변수를 선언합니다: ushort[] words = data.DataType == EN_MELSEC_DATA_TYPE.Float ? FloatToWords((float)rawValue, wordCount) : Int32ToWords(checked((int)Math.Round(rawValue, MidpointRounding.AwayFromZero)), wordCount); |
| 578 | variable-initializer | 변수의 초기값을 지정합니다: words = data.DataType == EN_MELSEC_DATA_TYPE.Float ? FloatToWords((float)rawValue, wordCount) : Int32ToWords(checked((int)Math.Round(rawValue, MidpointRounding.AwayFromZero)), wordCount) |
| 579 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWords(data, ParseAddress(data.Address), words, cancellationToken) |
| 579 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteDoubleCore"]
 N0["L573 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadStringCore` · L582–596

[Drilling.Common/Interface/Melsec/CMelsec.cs:582–596](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L582-L596)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.ReadStringCore(string, System.Threading.CancellationToken, bool, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:699–699](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L699-L699) | ReadStringCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:873–873](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L873-L873) | ReadStringCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1486–1486](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1486-L1486) | ReadStringCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 584 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1934 |
| 585 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 585 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 593 | Encoding.ASCII.GetString(bytes).TrimEnd | resolved | string string.TrimEnd(params System.ReadOnlySpan<char>) |
| 593 | Encoding.ASCII.GetString | resolved · 동적 구현 선택 가능 | string System.Text.Encoding.GetString(byte[]) |
| 594 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, EN_MELSEC_DATA_TYPE.String, cancellationToken) |
| 584 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareRead(id, EN_MELSEC_DATA_TYPE.String, cancellationToken); |
| 584 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareRead(id, EN_MELSEC_DATA_TYPE.String, cancellationToken) |
| 585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(data, ParseAddress(data.Address), data.Length, cancellationToken, suppressLog, logSource) |
| 585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 585 | local-declaration | 지역 변수를 선언합니다: ushort[] words = ReadWords(data, ParseAddress(data.Address), data.Length, cancellationToken, suppressLog, logSource); |
| 585 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(data, ParseAddress(data.Address), data.Length, cancellationToken, suppressLog, logSource) |
| 586 | local-declaration | 지역 변수를 선언합니다: byte[] bytes = new byte[words.Length * 2]; |
| 586 | variable-initializer | 변수의 초기값을 지정합니다: bytes = new byte[words.Length * 2] |
| 587 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 587 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < words.Length; index++) |
| 589 | assignment | 값을 대상에 대입합니다: bytes[index * 2] = (byte)(words[index] & 0xFF) |
| 590 | assignment | 값을 대상에 대입합니다: bytes[index * 2 + 1] = (byte)(words[index] >> 8) |
| 593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetString(bytes).TrimEnd('\0', ' ') |
| 593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetString(bytes) |
| 593 | local-declaration | 지역 변수를 선언합니다: string value = Encoding.ASCII.GetString(bytes).TrimEnd('\0', ' '); |
| 593 | variable-initializer | 변수의 초기값을 지정합니다: value = Encoding.ASCII.GetString(bytes).TrimEnd('\0', ' ') |
| 594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot(data.Id, value) |
| 595 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadStringCore"]
 N0["L587 for"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteStringCore` · L598–612

[Drilling.Common/Interface/Melsec/CMelsec.cs:598–612](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L598-L612)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteStringCore(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:702–702](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L702-L702) | WriteStringCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1468–1468](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1468-L1468) | WriteStringCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 600 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1952 |
| 602 | Encoding.ASCII.GetBytes | resolved · 동적 구현 선택 가능 | byte[] System.Text.Encoding.GetBytes(string) |
| 603 | Enumerable.Repeat((byte)' ', byteLength).ToArray | resolved | byte[] System.Collections.Generic.IEnumerable<byte>.ToArray<byte>() |
| 603 | Enumerable.Repeat | resolved | System.Collections.Generic.IEnumerable<byte> System.Linq.Enumerable.Repeat<byte>(byte, int) |
| 604 | Array.Copy | resolved | void System.Array.Copy(System.Array, System.Array, int) |
| 604 | Math.Min | resolved | int System.Math.Min(int, int) |
| 611 | WriteWords | resolved | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1763 |
| 611 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 600 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, EN_MELSEC_DATA_TYPE.String, cancellationToken) |
| 600 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = PrepareWrite(id, EN_MELSEC_DATA_TYPE.String, cancellationToken); |
| 600 | variable-initializer | 변수의 초기값을 지정합니다: data = PrepareWrite(id, EN_MELSEC_DATA_TYPE.String, cancellationToken) |
| 601 | local-declaration | 지역 변수를 선언합니다: int byteLength = data.Length * 2; |
| 601 | variable-initializer | 변수의 초기값을 지정합니다: byteLength = data.Length * 2 |
| 602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetBytes(value) |
| 602 | local-declaration | 지역 변수를 선언합니다: byte[] sourceBytes = Encoding.ASCII.GetBytes(value); |
| 602 | variable-initializer | 변수의 초기값을 지정합니다: sourceBytes = Encoding.ASCII.GetBytes(value) |
| 603 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Repeat((byte)' ', byteLength).ToArray() |
| 603 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Repeat((byte)' ', byteLength) |
| 603 | local-declaration | 지역 변수를 선언합니다: byte[] bytes = Enumerable.Repeat((byte)' ', byteLength).ToArray(); |
| 603 | variable-initializer | 변수의 초기값을 지정합니다: bytes = Enumerable.Repeat((byte)' ', byteLength).ToArray() |
| 604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.Copy(sourceBytes, bytes, Math.Min(sourceBytes.Length, bytes.Length)) |
| 604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(sourceBytes.Length, bytes.Length) |
| 605 | local-declaration | 지역 변수를 선언합니다: ushort[] words = new ushort[data.Length]; |
| 605 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[data.Length] |
| 606 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 606 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < words.Length; index++) |
| 608 | assignment | 값을 대상에 대입합니다: words[index] = (ushort)(bytes[index * 2] &#124; (bytes[index * 2 + 1] << 8)) |
| 611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWords(data, ParseAddress(data.Address), words, cancellationToken) |
| 611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteStringCore"]
 N0["L606 for"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteThreadRequest` · L614–642

[Drilling.Common/Interface/Melsec/CMelsec.cs:614–642](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L614-L642)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| request | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:334–334](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L334-L334) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L341-L341) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:348–348](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L348-L348) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:354–354](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L354-L354) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:360–360](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L360-L360) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:367–367](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L367-L367) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:374–374](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L374-L374) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:380–380](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L380-L380) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:387–387](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L387-L387) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:394–394](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L394-L394) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:400–400](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L400-L400) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:407–407](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L407-L407) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L414-L414) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2384–2384](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2384-L2384) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2459–2459](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2459-L2459) | ExecuteThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2465–2465](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2465-L2465) | ExecuteThreadRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 616 | request.CancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 621 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 624 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 625 | _requestQueue.Enqueue | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Enqueue(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| 628 | Initialize | resolved | void Drilling.Common.Interface.CMelsec.Initialize() · Drilling.Common/Interface/Melsec/CMelsec.cs:141 |
| 629 | request.Completed.WaitOne | resolved · 동적 구현 선택 가능 | bool System.Threading.WaitHandle.WaitOne(int) |
| 631 | request.CancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 634 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 640 | ExceptionDispatchInfo.Capture(request.Error).Throw | resolved | void System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw() |
| 640 | ExceptionDispatchInfo.Capture | resolved | System.Runtime.ExceptionServices.ExceptionDispatchInfo System.Runtime.ExceptionServices.ExceptionDispatchInfo.Capture(System.Exception) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.CancellationToken.ThrowIfCancellationRequested() |
| 617 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 619 | if | 조건에 따라 분기합니다: if (!_acceptRequests) |
| 621 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC control is not accepting requests.") |
| 621 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC control is not accepting requests."); |
| 624 | assignment | 값을 대상에 대입합니다: request.QueuedTimestamp = Stopwatch.GetTimestamp() |
| 624 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Enqueue(request) |
| 628 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Initialize() |
| 629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Completed.WaitOne(20) |
| 629 | while | 조건을 먼저 확인하며 반복합니다: while (!request.Completed.WaitOne(20)) |
| 631 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.CancellationToken.ThrowIfCancellationRequested() |
| 632 | if | 조건에 따라 분기합니다: if (!IsRunning) |
| 634 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC control thread stopped before request completion: " + request.Id) |
| 634 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC control thread stopped before request completion: " + request.Id); |
| 638 | if | 조건에 따라 분기합니다: if (request.Error != null) |
| 640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExceptionDispatchInfo.Capture(request.Error).Throw() |
| 640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExceptionDispatchInfo.Capture(request.Error) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ExecuteThreadRequest"]
 N0["L617 lock"]
 M -->|포함| N0
 N1["L619 if"]
 N0 -->|포함| N1
 N2["L629 while"]
 M -->|포함| N2
 N3["L632 if"]
 N2 -->|포함| N3
 N4["L638 if"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetThreadRequest` · L644–655

[Drilling.Common/Interface/Melsec/CMelsec.cs:644–655](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L644-L655)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest? Drilling.Common.Interface.CMelsec.GetThreadRequest() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L209-L209) | GetThreadRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 653 | _requestQueue.Dequeue | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Dequeue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 646 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 648 | if | 조건에 따라 분기합니다: if (_requestQueue.Count == 0) |
| 650 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 653 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Dequeue() |
| 653 | return | 호출자에게 값 또는 제어를 반환합니다: return _requestQueue.Dequeue(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetThreadRequest"]
 N0["L646 lock"]
 M -->|포함| N0
 N1["L648 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ProcessThreadRequest` · L657–714

[Drilling.Common/Interface/Melsec/CMelsec.cs:657–714](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L657-L714)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ProcessThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| request | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L212-L212) | ProcessThreadRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 659 | RecordMelsecTiming | resolved | void Drilling.Common.Interface.CMelsec.RecordMelsecTiming(string, double, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:19 |
| 659 | Stopwatch.GetElapsedTime | resolved | System.TimeSpan System.Diagnostics.Stopwatch.GetElapsedTime(long) |
| 662 | request.CancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 666 | OpenCore | resolved | void Drilling.Common.Interface.CMelsec.OpenCore(int, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:716 |
| 670 | CloseDeviceCore | resolved | void Drilling.Common.Interface.CMelsec.CloseDeviceCore(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2389 |
| 672 | CloseMelsecNetChannelsCore | resolved | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelsCore() · Drilling.Common/Interface/Melsec/CMelsec.cs:795 |
| 675 | ReadBitCore | resolved | bool Drilling.Common.Interface.CMelsec.ReadBitCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:487 |
| 678 | WriteBitCore | resolved | void Drilling.Common.Interface.CMelsec.WriteBitCore(string, bool, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:498 |
| 681 | ReadWordCore | resolved | double Drilling.Common.Interface.CMelsec.ReadWordCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:517 |
| 684 | WriteWordCore | resolved | void Drilling.Common.Interface.CMelsec.WriteWordCore(string, double, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:528 |
| 687 | ReadDoubleCore | resolved | double Drilling.Common.Interface.CMelsec.ReadDoubleCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:545 |
| 690 | WriteDoubleCore | resolved | void Drilling.Common.Interface.CMelsec.WriteDoubleCore(string, double, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:567 |
| 693 | WriteDoubleArrayCore | resolved | void Drilling.Common.Interface.CMelsec.WriteDoubleArrayCore(string, double[], System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:2469 |
| 696 | ReadDoubleArrayCore | resolved | double[] Drilling.Common.Interface.CMelsec.ReadDoubleArrayCore(string, int, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:2501 |
| 699 | ReadStringCore | resolved | string Drilling.Common.Interface.CMelsec.ReadStringCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:582 |
| 702 | WriteStringCore | resolved | void Drilling.Common.Interface.CMelsec.WriteStringCore(string, string, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:598 |
| 712 | request.Completed.Set | resolved | bool System.Threading.EventWaitHandle.Set() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecordMelsecTiming("REQUEST_QUEUE", Stopwatch.GetElapsedTime(request.QueuedTimestamp).TotalMilliseconds, request.Id) |
| 659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetElapsedTime(request.QueuedTimestamp) |
| 660 | try | 예외 처리 범위입니다: try |
| 662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.CancellationToken.ThrowIfCancellationRequested() |
| 663 | switch | 값에 따라 분기합니다: switch (request.Command) |
| 665 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.Open: |
| 666 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OpenCore((int)request.Value!, request.CancellationToken) |
| 667 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 668 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.Close: |
| 669 | if | 조건에 따라 분기합니다: if (request.Value is int deviceNo) |
| 670 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseDeviceCore(deviceNo) |
| 671 | else | 앞 조건이 거짓인 경로입니다: else |
| 672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseMelsecNetChannelsCore() |
| 673 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 674 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.ReadBit: |
| 675 | assignment | 값을 대상에 대입합니다: request.Result = ReadBitCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 675 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadBitCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 676 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 677 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.WriteBit: |
| 678 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteBitCore(request.Id, (bool)request.Value!, request.CancellationToken) |
| 679 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 680 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.ReadWord: |
| 681 | assignment | 값을 대상에 대입합니다: request.Result = ReadWordCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWordCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 682 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 683 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.WriteWord: |
| 684 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWordCore(request.Id, (double)request.Value!, request.CancellationToken) |
| 685 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 686 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.ReadDouble: |
| 687 | assignment | 값을 대상에 대입합니다: request.Result = ReadDoubleCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDoubleCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 688 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 689 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.WriteDouble: |
| 690 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteDoubleCore(request.Id, (double)request.Value!, request.CancellationToken) |
| 691 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 692 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.WriteDoubleArray: |
| 693 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteDoubleArrayCore(request.Id, (double[])request.Value!, request.CancellationToken) |
| 694 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 695 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.ReadDoubleArray: |
| 696 | assignment | 값을 대상에 대입합니다: request.Result = ReadDoubleArrayCore(request.Id, (int)request.Value!, request.CancellationToken) |
| 696 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDoubleArrayCore(request.Id, (int)request.Value!, request.CancellationToken) |
| 697 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 698 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.ReadString: |
| 699 | assignment | 값을 대상에 대입합니다: request.Result = ReadStringCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 699 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadStringCore(request.Id, request.CancellationToken, request.SuppressLog) |
| 700 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 701 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_THREAD_COMMAND.WriteString: |
| 702 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteStringCore(request.Id, (string)request.Value!, request.CancellationToken) |
| 703 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 706 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 708 | assignment | 값을 대상에 대입합니다: request.Error = exception |
| 710 | finally | 종료 정리 구간입니다: finally |
| 712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Completed.Set() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ProcessThreadRequest"]
 N0["L660 try"]
 M -->|포함| N0
 N1["L663 switch"]
 N0 -->|포함| N1
 N2["L669 if"]
 N1 -->|포함| N2
 N3["L671 else"]
 N2 -->|포함| N3
 N4["L706 catch"]
 N0 -->|포함| N4
 N5["L710 finally"]
 N0 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OpenCore` · L716–768

[Drilling.Common/Interface/Melsec/CMelsec.cs:716–768](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L716-L768)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.OpenCore(int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:666–666](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L666-L666) | OpenCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 718 | _interfaceManager.GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CInterfaceManager.GetInterfaceData(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:348 |
| 718 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 718 | deviceNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 719 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 721 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 722 | RegisterCommunicationSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1643 |
| 723 | RestartPollingDevice | resolved | void Drilling.Common.Interface.CMelsec.RestartPollingDevice(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2762 |
| 725 | Map.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 725 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 726 | PublishSimulationInput | resolved | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3083 |
| 730 | ReadMelsecNetOption | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2132 |
| 733 | _melsecNetPaths.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, int>.ContainsKey(int) |
| 735 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 740 | _melsecNetApi.Open | resolved · 동적 구현 선택 가능 | int Drilling.Common.Interface.CMelsecNetApi.Open(short, out int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3283 |
| 742 | IsMelsecNetRuntimeException | resolved | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1924 |
| 744 | CreateMelsecNetRuntimeException | resolved | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1929 |
| 749 | CreateMelsecNetReturnCodeException | resolved | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1918 |
| 753 | WriteMelsecNetOpenLog | resolved | void Drilling.Common.Interface.CMelsec.WriteMelsecNetOpenLog(Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1896 |
| 759 | ProbeDeviceRead | resolved | void Drilling.Common.Interface.CMelsec.ProbeDeviceRead(int, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:848 |
| 760 | RegisterCommunicationSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1643 |
| 761 | RestartPollingDevice | resolved | void Drilling.Common.Interface.CMelsec.RestartPollingDevice(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2762 |
| 765 | CloseMelsecNetChannelCore | resolved | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelCore(int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION) · Drilling.Common/Interface/Melsec/CMelsec.cs:817 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC interface is not configured: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture)) |
| 718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: deviceNo.ToString(CultureInfo.InvariantCulture) |
| 718 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA interfaceData = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) ?? throw new InvalidOperationException("MELSEC interface is not configured: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCul |
| 718 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC interface is not configured: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture)) |
| 718 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) ?? throw new InvalidOperationException("MELSEC interface is not configured: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture)) |
| 719 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 719 | if | 조건에 따라 분기합니다: if (IsSimulation(interfaceData)) |
| 721 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 722 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationSuccess() |
| 723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RestartPollingDevice(deviceNo) |
| 724 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Map.Where(row => row.DeviceNo == deviceNo && IsSimulationOnlyRoute(row)) |
| 725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(row) |
| 725 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in Map.Where(row => row.DeviceNo == deviceNo && IsSimulationOnlyRoute(row))) |
| 726 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishSimulationInput(row) |
| 727 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 730 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetOption(interfaceData) |
| 730 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_NET_OPTION option = ReadMelsecNetOption(interfaceData); |
| 730 | variable-initializer | 변수의 초기값을 지정합니다: option = ReadMelsecNetOption(interfaceData) |
| 731 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.ContainsKey(deviceNo) |
| 733 | if | 조건에 따라 분기합니다: if (!_melsecNetPaths.ContainsKey(deviceNo)) |
| 735 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 736 | local-declaration | 지역 변수를 선언합니다: int path; |
| 737 | local-declaration | 지역 변수를 선언합니다: int returnCode; |
| 738 | try | 예외 처리 범위입니다: try |
| 740 | assignment | 값을 대상에 대입합니다: returnCode = _melsecNetApi.Open(option.ChannelNo, out path) |
| 740 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetApi.Open(option.ChannelNo, out path) |
| 742 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMelsecNetRuntimeException(exception) |
| 742 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (IsMelsecNetRuntimeException(exception)) |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetRuntimeException("mdOpen", exception) |
| 744 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetRuntimeException("mdOpen", exception); |
| 747 | if | 조건에 따라 분기합니다: if (returnCode != 0) |
| 749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetReturnCodeException("mdOpen", returnCode, interfaceData, option, 0, 0) |
| 749 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetReturnCodeException("mdOpen", returnCode, interfaceData, option, 0, 0); |
| 752 | assignment | 값을 대상에 대입합니다: _melsecNetPaths[deviceNo] = path |
| 753 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteMelsecNetOpenLog(interfaceData, option, path) |
| 757 | try | 예외 처리 범위입니다: try |
| 759 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ProbeDeviceRead(deviceNo, cancellationToken) |
| 760 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationSuccess() |
| 761 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RestartPollingDevice(deviceNo) |
| 763 | catch | 지정 예외를 처리합니다: catch  |
| 765 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseMelsecNetChannelCore(deviceNo, interfaceData, option) |
| 766 | throw | 예외를 발생/전달합니다: throw; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenCore"]
 N0["L719 if"]
 M -->|포함| N0
 N1["L724 lock"]
 N0 -->|포함| N1
 N2["L725 foreach"]
 N1 -->|포함| N2
 N3["L731 lock"]
 M -->|포함| N3
 N4["L733 if"]
 N3 -->|포함| N4
 N5["L738 try"]
 N4 -->|포함| N5
 N6["L742 catch"]
 N5 -->|포함| N6
 N7["L747 if"]
 N4 -->|포함| N7
 N8["L757 try"]
 M -->|포함| N8
 N9["L763 catch"]
 N8 -->|포함| N9
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseMelsecNetChannels` · L770–793

[Drilling.Common/Interface/Melsec/CMelsec.cs:770–793](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L770-L793)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannels() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:167–167](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L167-L167) | CloseMelsecNetChannels | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 777 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 780 | _requestQueue.Enqueue | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Enqueue(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| 783 | request.Completed.WaitOne | resolved · 동적 구현 선택 가능 | bool System.Threading.WaitHandle.WaitOne(int) |
| 785 | .WriteInterfaceError | unresolved | None |
| 791 | .WriteInterfaceError | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 772 | if | 조건에 따라 분기합니다: if (!IsRunning) |
| 774 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Close, "", null, CancellationToken.None) |
| 777 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Close, "", null, CancellationToken.None); |
| 777 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Close, "", null, CancellationToken.None) |
| 778 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Enqueue(request) |
| 783 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Completed.WaitOne(3000) |
| 783 | if | 조건에 따라 분기합니다: if (!request.Completed.WaitOne(3000)) |
| 785 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceError(EN_EQP_MODULE.Melsec, "MELSEC_CONTROL", "[I/F][COMM_ERROR] mdClose", "MELSECNET close request did not complete within 3000 ms.") |
| 786 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 789 | if | 조건에 따라 분기합니다: if (request.Error != null) |
| 791 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceError(EN_EQP_MODULE.Melsec, "MELSEC_CONTROL", "[I/F][COMM_ERROR] mdClose", request.Error.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CloseMelsecNetChannels"]
 N0["L772 if"]
 M -->|포함| N0
 N1["L778 lock"]
 M -->|포함| N1
 N2["L783 if"]
 M -->|포함| N2
 N3["L789 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseMelsecNetChannelsCore` · L795–815

[Drilling.Common/Interface/Melsec/CMelsec.cs:795–815](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L795-L815)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelsCore() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:672–672](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L672-L672) | CloseMelsecNetChannelsCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 800 | _melsecNetPaths.ToArray | resolved | System.Collections.Generic.KeyValuePair<int, int>[] System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, int>>.ToArray<System.Collections.Generic.KeyValuePair<int, int>>() |
| 806 | _interfaceManager.GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CInterfaceManager.GetInterfaceData(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:348 |
| 812 | ReadMelsecNetOption | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2132 |
| 813 | CloseMelsecNetChannelCore | resolved | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelCore(int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION) · Drilling.Common/Interface/Melsec/CMelsec.cs:817 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 797 | local-declaration | 지역 변수를 선언합니다: KeyValuePair<int, int>[] paths; |
| 798 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 800 | assignment | 값을 대상에 대입합니다: paths = _melsecNetPaths.ToArray() |
| 800 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.ToArray() |
| 803 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 803 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < paths.Length; index++) |
| 805 | local-declaration | 지역 변수를 선언합니다: int deviceNo = paths[index].Key; |
| 805 | variable-initializer | 변수의 초기값을 지정합니다: deviceNo = paths[index].Key |
| 806 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) |
| 806 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA? interfaceData = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo); |
| 806 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) |
| 807 | if | 조건에 따라 분기합니다: if (interfaceData == null) |
| 809 | continue | 다음 반복으로 진행합니다: continue; |
| 812 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetOption(interfaceData) |
| 812 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_NET_OPTION option = ReadMelsecNetOption(interfaceData); |
| 812 | variable-initializer | 변수의 초기값을 지정합니다: option = ReadMelsecNetOption(interfaceData) |
| 813 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseMelsecNetChannelCore(deviceNo, interfaceData, option) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CloseMelsecNetChannelsCore"]
 N0["L798 lock"]
 M -->|포함| N0
 N1["L803 for"]
 M -->|포함| N1
 N2["L807 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseMelsecNetChannelCore` · L817–846

[Drilling.Common/Interface/Melsec/CMelsec.cs:817–846](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L817-L846)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelCore(int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| interfaceData | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| option | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:765–765](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L765-L765) | CloseMelsecNetChannelCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:813–813](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L813-L813) | CloseMelsecNetChannelCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2396–2396](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2396-L2396) | CloseMelsecNetChannelCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 822 | _melsecNetPaths.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, int>.TryGetValue(int, out int) |
| 827 | _melsecNetPaths.Remove | resolved | bool System.Collections.Generic.Dictionary<int, int>.Remove(int) |
| 833 | _melsecNetApi.Close | resolved · 동적 구현 선택 가능 | int Drilling.Common.Interface.CMelsecNetApi.Close(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3288 |
| 835 | IsMelsecNetRuntimeException | resolved | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1924 |
| 837 | CreateMelsecNetRuntimeException | resolved | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1929 |
| 842 | CreateMelsecNetReturnCodeException | resolved | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1918 |
| 845 | .WriteInterfaceCommand | unresolved | None |
| 845 | FormatMelsecNetContext | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1901 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 819 | local-declaration | 지역 변수를 선언합니다: int path; |
| 820 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.TryGetValue(deviceNo, out path) |
| 822 | if | 조건에 따라 분기합니다: if (!_melsecNetPaths.TryGetValue(deviceNo, out path)) |
| 824 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 827 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.Remove(deviceNo) |
| 830 | local-declaration | 지역 변수를 선언합니다: int returnCode; |
| 831 | try | 예외 처리 범위입니다: try |
| 833 | assignment | 값을 대상에 대입합니다: returnCode = _melsecNetApi.Close(path) |
| 833 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetApi.Close(path) |
| 835 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMelsecNetRuntimeException(exception) |
| 835 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (IsMelsecNetRuntimeException(exception)) |
| 837 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetRuntimeException("mdClose", exception) |
| 837 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetRuntimeException("mdClose", exception); |
| 840 | if | 조건에 따라 분기합니다: if (returnCode != 0) |
| 842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetReturnCodeException("mdClose", returnCode, interfaceData, option, path, 0) |
| 842 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetReturnCodeException("mdClose", returnCode, interfaceData, option, path, 0); |
| 845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceCommand(EN_EQP_MODULE.Melsec, interfaceData.NickName, "MELSECNET:mdClose", "OK", FormatMelsecNetContext(option, path, 0, 0)) |
| 845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecNetContext(option, path, 0, 0) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CloseMelsecNetChannelCore"]
 N0["L820 lock"]
 M -->|포함| N0
 N1["L822 if"]
 N0 -->|포함| N1
 N2["L831 try"]
 M -->|포함| N2
 N3["L835 catch"]
 N2 -->|포함| N3
 N4["L840 if"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ProbeDeviceRead` · L848–879

[Drilling.Common/Interface/Melsec/CMelsec.cs:848–879](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L848-L879)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ProbeDeviceRead(int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:759–759](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L759-L759) | ProbeDeviceRead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 854 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 862 | ReadBitCore | resolved | bool Drilling.Common.Interface.CMelsec.ReadBitCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:487 |
| 866 | ReadWordCore | resolved | double Drilling.Common.Interface.CMelsec.ReadWordCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:517 |
| 870 | ReadDoubleCore | resolved | double Drilling.Common.Interface.CMelsec.ReadDoubleCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:545 |
| 873 | ReadStringCore | resolved | string Drilling.Common.Interface.CMelsec.ReadStringCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:582 |
| 878 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 878 | deviceNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 850 | local-declaration | 지역 변수를 선언합니다: IReadOnlyList<ST_MELSEC_MAP_DATA> map = Map; |
| 850 | variable-initializer | 변수의 초기값을 지정합니다: map = Map |
| 851 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 851 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < map.Count; index++) |
| 853 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA data = map[index]; |
| 853 | variable-initializer | 변수의 초기값을 지정합니다: data = map[index] |
| 854 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(data) |
| 854 | if | 조건에 따라 분기합니다: if (data.DeviceNo != deviceNo &#124;&#124; data.Access == EN_MELSEC_ACCESS.Write &#124;&#124; IsSimulationOnlyRoute(data)) |
| 856 | continue | 다음 반복으로 진행합니다: continue; |
| 859 | switch | 값에 따라 분기합니다: switch (data.DataType) |
| 861 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 862 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadBitCore(data.Id, cancellationToken) |
| 863 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 864 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 865 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.DWord: |
| 866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWordCore(data.Id, cancellationToken) |
| 867 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 868 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 869 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Float: |
| 870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDoubleCore(data.Id, cancellationToken) |
| 871 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 872 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadStringCore(data.Id, cancellationToken) |
| 874 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 878 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC initial read map is not configured for device " + deviceNo.ToString(CultureInfo.InvariantCulture) + ".") |
| 878 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: deviceNo.ToString(CultureInfo.InvariantCulture) |
| 878 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC initial read map is not configured for device " + deviceNo.ToString(CultureInfo.InvariantCulture) + "."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ProbeDeviceRead"]
 N0["L851 for"]
 M -->|포함| N0
 N1["L854 if"]
 N0 -->|포함| N1
 N2["L859 switch"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CancelQueuedRequests` · L881–892

[Drilling.Common/Interface/Melsec/CMelsec.cs:881–892](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L881-L892)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CancelQueuedRequests(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:165–165](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L165-L165) | CancelQueuedRequests | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 887 | _requestQueue.Dequeue | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Dequeue() |
| 888 | new OperationCanceledException | resolved | System.OperationCanceledException.OperationCanceledException(string?) |
| 889 | request.Completed.Set | resolved | bool System.Threading.EventWaitHandle.Set() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 883 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 885 | while | 조건을 먼저 확인하며 반복합니다: while (_requestQueue.Count > 0) |
| 887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Dequeue() |
| 887 | local-declaration | 지역 변수를 선언합니다: CMelsecThreadRequest request = _requestQueue.Dequeue(); |
| 887 | variable-initializer | 변수의 초기값을 지정합니다: request = _requestQueue.Dequeue() |
| 888 | assignment | 값을 대상에 대입합니다: request.Error = new OperationCanceledException(message) |
| 888 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new OperationCanceledException(message) |
| 889 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Completed.Set() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CancelQueuedRequests"]
 N0["L883 lock"]
 M -->|포함| N0
 N1["L885 while"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueWriteCommand` · L894–971

[Drilling.Common/Interface/Melsec/CMelsec.cs:894–971](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L894-L971)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.QueueWriteCommand(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, string, string, object, int, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| requestedDataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |
| writeId | string | None | False /  |
| readbackId | string | None | False /  |
| expectedValue | object | None | False /  |
| timeoutMs | int | None | False /  |
| retryCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:419–419](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L419-L419) | QueueWriteCommand | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:424–424](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L424-L424) | QueueWriteCommand | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:429–429](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L429-L429) | QueueWriteCommand | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:434–434](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L434-L434) | QueueWriteCommand | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 908 | new CMelsecWriteCommand | resolved | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CMelsecWriteCommand(int, string, string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:2295 |
| 908 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 908 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 911 | PrepareQueuedWriteCommand | resolved | void Drilling.Common.Interface.CMelsec.PrepareQueuedWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:996 |
| 917 | StoreWriteStatus | resolved | void Drilling.Common.Interface.CMelsec.StoreWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1073 |
| 918 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 928 | StoreWriteStatus | resolved | void Drilling.Common.Interface.CMelsec.StoreWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1073 |
| 935 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 936 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 936 | _interfaceManager.IsConnect | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsConnect(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:338 |
| 940 | StoreWriteStatus | resolved | void Drilling.Common.Interface.CMelsec.StoreWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1073 |
| 941 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 948 | FindPendingDuplicateRequest | resolved | int Drilling.Common.Interface.CMelsec.FindPendingDuplicateRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:973 |
| 959 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 965 | _writeQueue.Enqueue | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Enqueue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 968 | Initialize | resolved | void Drilling.Common.Interface.CMelsec.Initialize() · Drilling.Common/Interface/Melsec/CMelsec.cs:141 |
| 969 | WriteHandshakeLog | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2172 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 896 | local-declaration | 지역 변수를 선언합니다: int requestNo; |
| 897 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 900 | if | 조건에 따라 분기합니다: if (_nextRequestNo <= 0) |
| 902 | assignment | 값을 대상에 대입합니다: _nextRequestNo = 1 |
| 905 | assignment | 값을 대상에 대입합니다: requestNo = _nextRequestNo |
| 908 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecWriteCommand(requestNo, NormalizeId(writeId), NormalizeId(readbackId), requestedDataType, expectedValue) |
| 908 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(writeId) |
| 908 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(readbackId) |
| 908 | local-declaration | 지역 변수를 선언합니다: CMelsecWriteCommand command = new CMelsecWriteCommand(requestNo, NormalizeId(writeId), NormalizeId(readbackId), requestedDataType, expectedValue); |
| 908 | variable-initializer | 변수의 초기값을 지정합니다: command = new CMelsecWriteCommand(requestNo, NormalizeId(writeId), NormalizeId(readbackId), requestedDataType, expectedValue) |
| 909 | try | 예외 처리 범위입니다: try |
| 911 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareQueuedWriteCommand(command, timeoutMs, retryCount) |
| 913 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 915 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.InvalidParameter |
| 916 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = exception.Message |
| 917 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StoreWriteStatus(command) |
| 918 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][COMM_ERROR]", exception.Message) |
| 919 | return | 호출자에게 값 또는 제어를 반환합니다: return requestNo; |
| 922 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 924 | if | 조건에 따라 분기합니다: if (!_acceptRequests) |
| 926 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 927 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "MELSEC control is not accepting requests." |
| 928 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StoreWriteStatus(command) |
| 929 | return | 호출자에게 값 또는 제어를 반환합니다: return requestNo; |
| 933 | if | 조건에 따라 분기합니다: if (command.WriteData != null) |
| 935 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(command.WriteData) |
| 935 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA interfaceData = GetInterfaceData(command.WriteData); |
| 935 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(command.WriteData) |
| 936 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 936 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.IsConnect(EN_EQP_MODULE.Melsec, interfaceData.Number) |
| 936 | if | 조건에 따라 분기합니다: if (!IsSimulation(interfaceData) && !_interfaceManager.IsConnect(EN_EQP_MODULE.Melsec, interfaceData.Number)) |
| 938 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.CommunicationError |
| 939 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "MELSEC communication is offline." |
| 940 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StoreWriteStatus(command) |
| 941 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][COMM_ERROR]", command.ErrorMessage) |
| 942 | return | 호출자에게 값 또는 제어를 반환합니다: return requestNo; |
| 946 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindPendingDuplicateRequest(command) |
| 948 | local-declaration | 지역 변수를 선언합니다: int duplicateRequestNo = FindPendingDuplicateRequest(command); |
| 948 | variable-initializer | 변수의 초기값을 지정합니다: duplicateRequestNo = FindPendingDuplicateRequest(command) |
| 949 | if | 조건에 따라 분기합니다: if (duplicateRequestNo > 0) |
| 951 | return | 호출자에게 값 또는 제어를 반환합니다: return duplicateRequestNo; |
| 954 | if | 조건에 따라 분기합니다: if (_writeQueue.Count >= MaximumWriteQueueCount) |
| 956 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.CommunicationError |
| 957 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "MELSEC write queue reached its limit." |
| 958 | assignment | 값을 대상에 대입합니다: _writeStatus[requestNo] = command |
| 959 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][COMM_ERROR]", command.ErrorMessage) |
| 960 | return | 호출자에게 값 또는 제어를 반환합니다: return requestNo; |
| 963 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Queued |
| 964 | assignment | 값을 대상에 대입합니다: _writeStatus[requestNo] = command |
| 965 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeQueue.Enqueue(command) |
| 968 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Initialize() |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeLog(command, "[I/F][SEND]", "Write request queued.") |
| 970 | return | 호출자에게 값 또는 제어를 반환합니다: return requestNo; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["QueueWriteCommand"]
 N0["L897 lock"]
 M -->|포함| N0
 N1["L900 if"]
 N0 -->|포함| N1
 N2["L909 try"]
 M -->|포함| N2
 N3["L913 catch"]
 N2 -->|포함| N3
 N4["L922 lock"]
 M -->|포함| N4
 N5["L924 if"]
 N4 -->|포함| N5
 N6["L933 if"]
 M -->|포함| N6
 N7["L936 if"]
 N6 -->|포함| N7
 N8["L946 lock"]
 M -->|포함| N8
 N9["L949 if"]
 N8 -->|포함| N9
 N10["L954 if"]
 N8 -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindPendingDuplicateRequest` · L973–989

[Drilling.Common/Interface/Melsec/CMelsec.cs:973–989](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L973-L989)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.FindPendingDuplicateRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:948–948](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L948-L948) | FindPendingDuplicateRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 975 | IsSameWriteRequest | resolved | bool Drilling.Common.Interface.CMelsec.IsSameWriteRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:991 |
| 982 | IsSameWriteRequest | resolved | bool Drilling.Common.Interface.CMelsec.IsSameWriteRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:991 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 975 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSameWriteRequest(_activeWriteCommand, command) |
| 975 | if | 조건에 따라 분기합니다: if (_activeWriteCommand != null && IsSameWriteRequest(_activeWriteCommand, command)) |
| 977 | return | 호출자에게 값 또는 제어를 반환합니다: return _activeWriteCommand.RequestNo; |
| 980 | foreach | 컬렉션 요소를 순회합니다: foreach (CMelsecWriteCommand queuedCommand in _writeQueue) |
| 982 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSameWriteRequest(queuedCommand, command) |
| 982 | if | 조건에 따라 분기합니다: if (IsSameWriteRequest(queuedCommand, command)) |
| 984 | return | 호출자에게 값 또는 제어를 반환합니다: return queuedCommand.RequestNo; |
| 988 | return | 호출자에게 값 또는 제어를 반환합니다: return 0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FindPendingDuplicateRequest"]
 N0["L975 if"]
 M -->|포함| N0
 N1["L980 foreach"]
 M -->|포함| N1
 N2["L982 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsSameWriteRequest` · L991–994

[Drilling.Common/Interface/Melsec/CMelsec.cs:991–994](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L991-L994)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsSameWriteRequest(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| left | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| right | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:975–975](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L975-L975) | IsSameWriteRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:982–982](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L982-L982) | IsSameWriteRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 993 | left.WriteId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 993 | left.ReadbackId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 993 | FormatCommandValue(left.ExpectedValue).Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 993 | FormatCommandValue | resolved | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) · Drilling.Common/Interface/Melsec/CMelsec.cs:2210 |
| 993 | FormatCommandValue | resolved | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) · Drilling.Common/Interface/Melsec/CMelsec.cs:2210 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: left.WriteId.Equals(right.WriteId, StringComparison.OrdinalIgnoreCase) |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: left.ReadbackId.Equals(right.ReadbackId, StringComparison.OrdinalIgnoreCase) |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(left.ExpectedValue).Equals(FormatCommandValue(right.ExpectedValue), StringComparison.Ordinal) |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(left.ExpectedValue) |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(right.ExpectedValue) |
| 993 | return | 호출자에게 값 또는 제어를 반환합니다: return left.WriteId.Equals(right.WriteId, StringComparison.OrdinalIgnoreCase) && left.ReadbackId.Equals(right.ReadbackId, StringComparison.OrdinalIgnoreCase) && left.RequestedDataType == right.RequestedDataType && FormatCommandVal |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareQueuedWriteCommand` · L996–1020

[Drilling.Common/Interface/Melsec/CMelsec.cs:996–1020](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L996-L1020)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PrepareQueuedWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, int, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| timeoutMs | int | None | False /  |
| retryCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:911–911](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L911-L911) | PrepareQueuedWriteCommand | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 998 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 999 | ValidateRequestedDataType | resolved | void Drilling.Common.Interface.CMelsec.ValidateRequestedDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:1061 |
| 1000 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1957 |
| 1000 | GetAcceptedDataTypes | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> Drilling.Common.Interface.CMelsec.GetAcceptedDataTypes(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) · Drilling.Common/Interface/Melsec/CMelsec.cs:1048 |
| 1001 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1003 | ResolveReadbackId | resolved | string Drilling.Common.Interface.CMelsec.ResolveReadbackId(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1022 |
| 1006 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 1007 | ValidateRequestedDataType | resolved | void Drilling.Common.Interface.CMelsec.ValidateRequestedDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:1061 |
| 1008 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1939 |
| 1008 | GetAcceptedDataTypes | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> Drilling.Common.Interface.CMelsec.GetAcceptedDataTypes(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) · Drilling.Common/Interface/Melsec/CMelsec.cs:1048 |
| 1011 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1014 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1015 | CInterfaceConnectOption.Parse | resolved | Drilling.Common.Interface.ST_INTERFACE_CONNECT_OPTION Drilling.Common.Interface.CInterfaceConnectOption.Parse(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/CInterfaceManager.cs:3214 |
| 1016 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1017 | Math.Max | resolved | int System.Math.Max(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(command.WriteId) |
| 998 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA writeData = GetMapData(command.WriteId); |
| 998 | variable-initializer | 변수의 초기값을 지정합니다: writeData = GetMapData(command.WriteId) |
| 999 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateRequestedDataType(writeData, command.RequestedDataType, true) |
| 1000 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(writeData.Id, GetAcceptedDataTypes(command.RequestedDataType), CancellationToken.None) |
| 1000 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetAcceptedDataTypes(command.RequestedDataType) |
| 1001 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(command.ReadbackId) |
| 1001 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(command.ReadbackId)) |
| 1003 | assignment | 값을 대상에 대입합니다: command.ReadbackId = ResolveReadbackId(writeData) |
| 1003 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveReadbackId(writeData) |
| 1006 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(command.ReadbackId) |
| 1006 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_MAP_DATA readbackData = GetMapData(command.ReadbackId); |
| 1006 | variable-initializer | 변수의 초기값을 지정합니다: readbackData = GetMapData(command.ReadbackId) |
| 1007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateRequestedDataType(readbackData, command.RequestedDataType, false) |
| 1008 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(readbackData.Id, GetAcceptedDataTypes(command.RequestedDataType), CancellationToken.None) |
| 1008 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetAcceptedDataTypes(command.RequestedDataType) |
| 1009 | if | 조건에 따라 분기합니다: if (writeData.DeviceNo != readbackData.DeviceNo) |
| 1011 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC write/readback DEVICE NO does not match: " + writeData.Id + " / " + readbackData.Id) |
| 1011 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC write/readback DEVICE NO does not match: " + writeData.Id + " / " + readbackData.Id); |
| 1014 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(writeData) |
| 1014 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA interfaceData = GetInterfaceData(writeData); |
| 1014 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(writeData) |
| 1015 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CInterfaceConnectOption.Parse(interfaceData) |
| 1015 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_CONNECT_OPTION option = CInterfaceConnectOption.Parse(interfaceData); |
| 1015 | variable-initializer | 변수의 초기값을 지정합니다: option = CInterfaceConnectOption.Parse(interfaceData) |
| 1016 | assignment | 값을 대상에 대입합니다: command.TimeoutMs = timeoutMs > 0 ? timeoutMs : Math.Max(1, option.TimeoutMs > 0 ? option.TimeoutMs : DefaultWriteTimeoutMs) |
| 1016 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1, option.TimeoutMs > 0 ? option.TimeoutMs : DefaultWriteTimeoutMs) |
| 1016 | conditional-expression | 조건에 따라 결과식을 선택합니다: timeoutMs > 0 ? timeoutMs : Math.Max(1, option.TimeoutMs > 0 ? option.TimeoutMs : DefaultWriteTimeoutMs) |
| 1016 | conditional-expression | 조건에 따라 결과식을 선택합니다: option.TimeoutMs > 0 ? option.TimeoutMs : DefaultWriteTimeoutMs |
| 1017 | assignment | 값을 대상에 대입합니다: command.RetryCount = retryCount >= 0 ? retryCount : Math.Max(0, option.RetryCount) |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(0, option.RetryCount) |
| 1017 | conditional-expression | 조건에 따라 결과식을 선택합니다: retryCount >= 0 ? retryCount : Math.Max(0, option.RetryCount) |
| 1018 | assignment | 값을 대상에 대입합니다: command.WriteData = writeData |
| 1019 | assignment | 값을 대상에 대입합니다: command.ReadbackData = readbackData |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareQueuedWriteCommand"]
 N0["L1001 if"]
 M -->|포함| N0
 N1["L1009 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveReadbackId` · L1022–1046

[Drilling.Common/Interface/Melsec/CMelsec.cs:1022–1046](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1022-L1046)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.ResolveReadbackId(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| writeData | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1003–1003](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1003-L1003) | ResolveReadbackId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1025 | writeData.Id.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 1031 | _map.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ContainsKey(string) |
| 1045 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1024 | local-declaration | 지역 변수를 선언합니다: const string writeSuffix = "_WRITE"; |
| 1024 | variable-initializer | 변수의 초기값을 지정합니다: writeSuffix = "_WRITE" |
| 1025 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: writeData.Id.EndsWith(writeSuffix, StringComparison.OrdinalIgnoreCase) |
| 1025 | if | 조건에 따라 분기합니다: if (writeData.Id.EndsWith(writeSuffix, StringComparison.OrdinalIgnoreCase)) |
| 1027 | local-declaration | 지역 변수를 선언합니다: string candidate = writeData.Id[..^writeSuffix.Length] + "_READ"; |
| 1027 | variable-initializer | 변수의 초기값을 지정합니다: candidate = writeData.Id[..^writeSuffix.Length] + "_READ" |
| 1028 | local-declaration | 지역 변수를 선언합니다: bool containsReadback; |
| 1029 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_mapLock) |
| 1031 | assignment | 값을 대상에 대입합니다: containsReadback = _map.ContainsKey(candidate) |
| 1031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map.ContainsKey(candidate) |
| 1034 | if | 조건에 따라 분기합니다: if (containsReadback) |
| 1036 | return | 호출자에게 값 또는 제어를 반환합니다: return candidate; |
| 1040 | if | 조건에 따라 분기합니다: if (writeData.Access == EN_MELSEC_ACCESS.ReadWrite) |
| 1042 | return | 호출자에게 값 또는 제어를 반환합니다: return writeData.Id; |
| 1045 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC readback ID is not defined for write ID: " + writeData.Id) |
| 1045 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC readback ID is not defined for write ID: " + writeData.Id); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResolveReadbackId"]
 N0["L1025 if"]
 M -->|포함| N0
 N1["L1029 lock"]
 N0 -->|포함| N1
 N2["L1034 if"]
 N0 -->|포함| N2
 N3["L1040 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetAcceptedDataTypes` · L1048–1059

[Drilling.Common/Interface/Melsec/CMelsec.cs:1048–1059](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1048-L1059)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> Drilling.Common.Interface.CMelsec.GetAcceptedDataTypes(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| requestedDataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1000–1000](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1000-L1000) | GetAcceptedDataTypes | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1008–1008](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1008-L1008) | GetAcceptedDataTypes | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1063–1063](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1063-L1063) | GetAcceptedDataTypes | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1050 | switch | 값에 따라 분기합니다: switch (requestedDataType) |
| 1052 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 1053 | return | 호출자에게 값 또는 제어를 반환합니다: return[EN_MELSEC_DATA_TYPE.Word, EN_MELSEC_DATA_TYPE.DWord]; |
| 1054 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 1055 | return | 호출자에게 값 또는 제어를 반환합니다: return[EN_MELSEC_DATA_TYPE.Double, EN_MELSEC_DATA_TYPE.Float]; |
| 1056 | case | 분기값/패턴의 구간입니다: default: |
| 1057 | return | 호출자에게 값 또는 제어를 반환합니다: return[requestedDataType]; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetAcceptedDataTypes"]
 N0["L1050 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateRequestedDataType` · L1061–1071

[Drilling.Common/Interface/Melsec/CMelsec.cs:1061–1071](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1061-L1071)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ValidateRequestedDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| requestedDataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |
| isWrite | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:999–999](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L999-L999) | ValidateRequestedDataType | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1007–1007](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1007-L1007) | ValidateRequestedDataType | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1063 | GetAcceptedDataTypes | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> Drilling.Common.Interface.CMelsec.GetAcceptedDataTypes(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) · Drilling.Common/Interface/Melsec/CMelsec.cs:1048 |
| 1064 | acceptedDataTypes.Contains | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>.Contains<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) |
| 1070 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1070 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1063 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetAcceptedDataTypes(requestedDataType) |
| 1063 | local-declaration | 지역 변수를 선언합니다: IReadOnlyList<EN_MELSEC_DATA_TYPE> acceptedDataTypes = GetAcceptedDataTypes(requestedDataType); |
| 1063 | variable-initializer | 변수의 초기값을 지정합니다: acceptedDataTypes = GetAcceptedDataTypes(requestedDataType) |
| 1064 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: acceptedDataTypes.Contains(data.DataType) |
| 1064 | if | 조건에 따라 분기합니다: if (acceptedDataTypes.Contains(data.DataType)) |
| 1066 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1069 | conditional-expression | 조건에 따라 결과식을 선택합니다: isWrite ? "write" : "readback" |
| 1069 | local-declaration | 지역 변수를 선언합니다: string operation = isWrite ? "write" : "readback"; |
| 1069 | variable-initializer | 변수의 초기값을 지정합니다: operation = isWrite ? "write" : "readback" |
| 1070 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC " + operation + " data type mismatch: " + FormatMap(data) + ", Requested=" + requestedDataType) |
| 1070 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1070 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC " + operation + " data type mismatch: " + FormatMap(data) + ", Requested=" + requestedDataType); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateRequestedDataType"]
 N0["L1064 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StoreWriteStatus` · L1073–1080

[Drilling.Common/Interface/Melsec/CMelsec.cs:1073–1080](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1073-L1080)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.StoreWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:917–917](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L917-L917) | StoreWriteStatus | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:928–928](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L928-L928) | StoreWriteStatus | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:940–940](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L940-L940) | StoreWriteStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1078 | TrimWriteStatus | resolved | void Drilling.Common.Interface.CMelsec.TrimWriteStatus() · Drilling.Common/Interface/Melsec/CMelsec.cs:1427 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1075 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1077 | assignment | 값을 대상에 대입합니다: _writeStatus[command.RequestNo] = command |
| 1078 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TrimWriteStatus() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StoreWriteStatus"]
 N0["L1075 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetActiveWriteCommand` · L1082–1088

[Drilling.Common/Interface/Melsec/CMelsec.cs:1082–1088](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1082-L1088)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetActiveWriteCommand() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:201–201](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L201-L201) | GetActiveWriteCommand | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1084 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1086 | return | 호출자에게 값 또는 제어를 반환합니다: return _activeWriteCommand; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetActiveWriteCommand"]
 N0["L1084 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetQueuedWriteCommand` · L1090–1101

[Drilling.Common/Interface/Melsec/CMelsec.cs:1090–1101](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1090-L1101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? Drilling.Common.Interface.CMelsec.GetQueuedWriteCommand() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:217–217](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L217-L217) | GetQueuedWriteCommand | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1099 | _writeQueue.Dequeue | resolved | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Dequeue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1092 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1094 | if | 조건에 따라 분기합니다: if (_writeQueue.Count == 0) |
| 1096 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 1099 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeQueue.Dequeue() |
| 1099 | return | 호출자에게 값 또는 제어를 반환합니다: return _writeQueue.Dequeue(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetQueuedWriteCommand"]
 N0["L1092 lock"]
 M -->|포함| N0
 N1["L1094 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ActivateWriteCommand` · L1103–1118

[Drilling.Common/Interface/Melsec/CMelsec.cs:1103–1118](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1103-L1118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ActivateWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:220–220](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L220-L220) | ActivateWriteCommand | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1105 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1107 | if | 조건에 따라 분기합니다: if (command.CancelRequested) |
| 1109 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 1110 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1113 | assignment | 값을 대상에 대입합니다: command.WriteBeforeReadCycle = ReadCycleNo |
| 1114 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Writing |
| 1115 | assignment | 값을 대상에 대입합니다: _activeWriteCommand = command |
| 1116 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.PrepareWrite |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ActivateWriteCommand"]
 N0["L1105 lock"]
 M -->|포함| N0
 N1["L1107 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ProcessWriteCommand` · L1120–1155

[Drilling.Common/Interface/Melsec/CMelsec.cs:1120–1155](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1120-L1155)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ProcessWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:204–204](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L204-L204) | ProcessWriteCommand | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1127 | CompleteCancelledWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1377 |
| 1137 | PrepareActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.PrepareActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1157 |
| 1140 | ExecuteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.ExecuteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1178 |
| 1143 | CheckActiveWriteReadback | resolved | void Drilling.Common.Interface.CMelsec.CheckActiveWriteReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1219 |
| 1146 | BeginRetryWrite | resolved | void Drilling.Common.Interface.CMelsec.BeginRetryWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1284 |
| 1149 | CompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1347 |
| 1152 | CompleteCancelledWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1377 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1122 | local-declaration | 지역 변수를 선언합니다: EN_MELSEC_PROCESS process; |
| 1123 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1125 | if | 조건에 따라 분기합니다: if (command.CancelRequested) |
| 1127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCancelledWrite(command) |
| 1128 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1131 | assignment | 값을 대상에 대입합니다: process = _process |
| 1134 | switch | 값에 따라 분기합니다: switch (process) |
| 1136 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.PrepareWrite: |
| 1137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareActiveWrite(command) |
| 1138 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1139 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.Write: |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteActiveWrite(command) |
| 1141 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1142 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.WaitReadback: |
| 1143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckActiveWriteReadback(command) |
| 1144 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1145 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.RetryWrite: |
| 1146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BeginRetryWrite(command) |
| 1147 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1148 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.CommunicationError: |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCommunicationError(command) |
| 1150 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1151 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_PROCESS.Close: |
| 1152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCancelledWrite(command) |
| 1153 | break | 해당 반복/분기 구간을 종료합니다: break; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ProcessWriteCommand"]
 N0["L1123 lock"]
 M -->|포함| N0
 N1["L1125 if"]
 N0 -->|포함| N1
 N2["L1134 switch"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareActiveWrite` · L1157–1176

[Drilling.Common/Interface/Melsec/CMelsec.cs:1157–1176](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1157-L1176)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PrepareActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1137–1137](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1137-L1137) | PrepareActiveWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1161 | CompleteInvalidWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteInvalidWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1365 |
| 1165 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1166 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1166 | _interfaceManager.IsConnect | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsConnect(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:338 |
| 1168 | CompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1352 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1159 | if | 조건에 따라 분기합니다: if (command.WriteData == null) |
| 1161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteInvalidWrite(command, "MELSEC write map is not available.") |
| 1162 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(command.WriteData) |
| 1165 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA interfaceData = GetInterfaceData(command.WriteData); |
| 1165 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(command.WriteData) |
| 1166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.IsConnect(EN_EQP_MODULE.Melsec, interfaceData.Number) |
| 1166 | if | 조건에 따라 분기합니다: if (!IsSimulation(interfaceData) && !_interfaceManager.IsConnect(EN_EQP_MODULE.Melsec, interfaceData.Number)) |
| 1168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCommunicationError(command, "MELSEC communication is offline.") |
| 1169 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1172 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1174 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.Write |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareActiveWrite"]
 N0["L1159 if"]
 M -->|포함| N0
 N1["L1166 if"]
 M -->|포함| N1
 N2["L1172 lock"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExecuteActiveWrite` · L1178–1217

[Drilling.Common/Interface/Melsec/CMelsec.cs:1178–1217](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1178-L1217)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ExecuteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1140–1140](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1140-L1140) | ExecuteActiveWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1182 | WriteCommandValue | resolved | void Drilling.Common.Interface.CMelsec.WriteCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1454 |
| 1185 | CompleteCancelledWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1377 |
| 1198 | ApplySimulationReadback | resolved | void Drilling.Common.Interface.CMelsec.ApplySimulationReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1512 |
| 1199 | WriteHandshakeLog | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2172 |
| 1210 | CompleteCancelledWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1377 |
| 1214 | RegisterCommunicationFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationFailure() · Drilling.Common/Interface/Melsec/CMelsec.cs:1635 |
| 1215 | RetryOrCompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RetryOrCompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1310 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1180 | try | 예외 처리 범위입니다: try |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteCommandValue(command) |
| 1183 | if | 조건에 따라 분기합니다: if (command.CancelRequested) |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCancelledWrite(command) |
| 1186 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1189 | local-declaration | 지역 변수를 선언합니다: long minimumReadCycle = ReadCycleNo + 1; |
| 1189 | variable-initializer | 변수의 초기값을 지정합니다: minimumReadCycle = ReadCycleNo + 1 |
| 1190 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1192 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.WriteSuccess |
| 1193 | assignment | 값을 대상에 대입합니다: command.MinimumReadCycle = minimumReadCycle |
| 1194 | assignment | 값을 대상에 대입합니다: command.AttemptStartedAt = DateTimeOffset.UtcNow |
| 1195 | assignment | 값을 대상에 대입합니다: command.NextReadAt = DateTimeOffset.UtcNow |
| 1198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ApplySimulationReadback(command) |
| 1199 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeLog(command, "[I/F][WRITE_OK]", "PLC write response completed.") |
| 1200 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1202 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.WaitReadback |
| 1203 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.WaitReadback |
| 1206 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (exception is not OperationCanceledException) |
| 1208 | if | 조건에 따라 분기합니다: if (command.CancelRequested) |
| 1210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCancelledWrite(command) |
| 1211 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationFailure() |
| 1215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RetryOrCompleteCommunicationError(command, exception.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ExecuteActiveWrite"]
 N0["L1180 try"]
 M -->|포함| N0
 N1["L1183 if"]
 N0 -->|포함| N1
 N2["L1190 lock"]
 N0 -->|포함| N2
 N3["L1200 lock"]
 N0 -->|포함| N3
 N4["L1206 catch"]
 N0 -->|포함| N4
 N5["L1208 if"]
 N4 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CheckActiveWriteReadback` · L1219–1282

[Drilling.Common/Interface/Melsec/CMelsec.cs:1219–1282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1219-L1282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CheckActiveWriteReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1143–1143](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1143-L1143) | CheckActiveWriteReadback | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1232 | GetSimulationReadbackMode | resolved | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec.GetSimulationReadbackMode() · Drilling.Common/Interface/Melsec/CMelsec.cs:1532 |
| 1232 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1232 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1234 | RegisterReadFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1625 |
| 1235 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1238 | ReadCommandValue | resolved | object Drilling.Common.Interface.CMelsec.ReadCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1475 |
| 1240 | FormatCommandValue | resolved | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) · Drilling.Common/Interface/Melsec/CMelsec.cs:2210 |
| 1247 | IsExpectedValue | resolved | bool Drilling.Common.Interface.CMelsec.IsExpectedValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1492 |
| 1255 | WriteHandshakeLog | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2172 |
| 1255 | confirmReadCycle.ToString | resolved | string long.ToString(System.IFormatProvider?) |
| 1256 | WriteHandshakeLog | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2172 |
| 1257 | CompleteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1391 |
| 1261 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1264 | now.AddMilliseconds | resolved | System.DateTimeOffset System.DateTimeOffset.AddMilliseconds(double) |
| 1267 | IsWriteAttemptTimedOut | resolved | bool Drilling.Common.Interface.CMelsec.IsWriteAttemptTimedOut(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:1339 |
| 1269 | RetryOrCompleteTimeout | resolved | void Drilling.Common.Interface.CMelsec.RetryOrCompleteTimeout(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1293 |
| 1276 | CompleteCancelledWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1377 |
| 1280 | RetryOrCompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RetryOrCompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1310 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1221 | local-declaration | 지역 변수를 선언합니다: DateTimeOffset now = DateTimeOffset.UtcNow; |
| 1221 | variable-initializer | 변수의 초기값을 지정합니다: now = DateTimeOffset.UtcNow |
| 1222 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1224 | if | 조건에 따라 분기합니다: if (now < command.NextReadAt) |
| 1226 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1230 | try | 예외 처리 범위입니다: try |
| 1232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSimulationReadbackMode() |
| 1232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(command.WriteData)) |
| 1232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(command.WriteData) |
| 1232 | if | 조건에 따라 분기합니다: if (GetSimulationReadbackMode() == EN_MELSEC_SIMULATION_READBACK.CommunicationError && command.WriteData != null && IsSimulation(GetInterfaceData(command.WriteData))) |
| 1234 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadFailure(-1) |
| 1235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("[SIMULATION] MELSEC readback communication error.") |
| 1235 | throw | 예외를 발생/전달합니다: throw new IOException("[SIMULATION] MELSEC readback communication error."); |
| 1238 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadCommandValue(command) |
| 1238 | local-declaration | 지역 변수를 선언합니다: object actualValue = ReadCommandValue(command); |
| 1238 | variable-initializer | 변수의 초기값을 지정합니다: actualValue = ReadCommandValue(command) |
| 1239 | local-declaration | 지역 변수를 선언합니다: long confirmReadCycle = ReadCycleNo; |
| 1239 | variable-initializer | 변수의 초기값을 지정합니다: confirmReadCycle = ReadCycleNo |
| 1240 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(actualValue) |
| 1240 | local-declaration | 지역 변수를 선언합니다: string actualText = FormatCommandValue(actualValue); |
| 1240 | variable-initializer | 변수의 초기값을 지정합니다: actualText = FormatCommandValue(actualValue) |
| 1241 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1243 | assignment | 값을 대상에 대입합니다: command.ActualValue = actualText |
| 1244 | assignment | 값을 대상에 대입합니다: command.ConfirmReadCycle = confirmReadCycle |
| 1247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsExpectedValue(command, actualValue) |
| 1247 | if | 조건에 따라 분기합니다: if (confirmReadCycle >= command.MinimumReadCycle && IsExpectedValue(command, actualValue)) |
| 1249 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1251 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Confirmed |
| 1252 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "" |
| 1255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeLog(command, "[I/F][CONFIRM]", "Readback matched after new read cycle " + confirmReadCycle.ToString(CultureInfo.InvariantCulture) + ".") |
| 1255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: confirmReadCycle.ToString(CultureInfo.InvariantCulture) |
| 1256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeLog(command, "[I/F][COMPLETE]", "Write-confirm completed.") |
| 1257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteActiveWrite(command) |
| 1258 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(MelsecThreadDelayMs, command.ReadbackData.PollMs) |
| 1261 | conditional-expression | 조건에 따라 결과식을 선택합니다: command.ReadbackData == null ? MelsecThreadDelayMs : Math.Max(MelsecThreadDelayMs, command.ReadbackData.PollMs) |
| 1261 | local-declaration | 지역 변수를 선언합니다: int pollMs = command.ReadbackData == null ? MelsecThreadDelayMs : Math.Max(MelsecThreadDelayMs, command.ReadbackData.PollMs); |
| 1261 | variable-initializer | 변수의 초기값을 지정합니다: pollMs = command.ReadbackData == null ? MelsecThreadDelayMs : Math.Max(MelsecThreadDelayMs, command.ReadbackData.PollMs) |
| 1262 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1264 | assignment | 값을 대상에 대입합니다: command.NextReadAt = now.AddMilliseconds(pollMs) |
| 1264 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.AddMilliseconds(pollMs) |
| 1267 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsWriteAttemptTimedOut(command, now) |
| 1267 | if | 조건에 따라 분기합니다: if (IsWriteAttemptTimedOut(command, now)) |
| 1269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RetryOrCompleteTimeout(command) |
| 1272 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (exception is not OperationCanceledException) |
| 1274 | if | 조건에 따라 분기합니다: if (command.CancelRequested) |
| 1276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCancelledWrite(command) |
| 1277 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1280 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RetryOrCompleteCommunicationError(command, exception.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CheckActiveWriteReadback"]
 N0["L1222 lock"]
 M -->|포함| N0
 N1["L1224 if"]
 N0 -->|포함| N1
 N2["L1230 try"]
 M -->|포함| N2
 N3["L1232 if"]
 N2 -->|포함| N3
 N4["L1241 lock"]
 N2 -->|포함| N4
 N5["L1247 if"]
 N2 -->|포함| N5
 N6["L1249 lock"]
 N5 -->|포함| N6
 N7["L1262 lock"]
 N2 -->|포함| N7
 N8["L1267 if"]
 N2 -->|포함| N8
 N9["L1272 catch"]
 N2 -->|포함| N9
 N10["L1274 if"]
 N9 -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `BeginRetryWrite` · L1284–1291

[Drilling.Common/Interface/Melsec/CMelsec.cs:1284–1291](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1284-L1291)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.BeginRetryWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1146–1146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1146-L1146) | BeginRetryWrite | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1286 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1288 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Writing |
| 1289 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.Write |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["BeginRetryWrite"]
 N0["L1286 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RetryOrCompleteTimeout` · L1293–1308

[Drilling.Common/Interface/Melsec/CMelsec.cs:1293–1308](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1293-L1308)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RetryOrCompleteTimeout(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1269–1269](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1269-L1269) | RetryOrCompleteTimeout | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1295 | TryScheduleRetry | resolved | bool Drilling.Common.Interface.CMelsec.TryScheduleRetry(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1320 |
| 1306 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 1306 | command.TimeoutMs.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1307 | CompleteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1391 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1295 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryScheduleRetry(command, "Readback did not match before timeout.") |
| 1295 | if | 조건에 따라 분기합니다: if (TryScheduleRetry(command, "Readback did not match before timeout.")) |
| 1297 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1300 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1302 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Timeout |
| 1303 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "MELSEC readback timeout." |
| 1306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][TIMEOUT]", "Readback mismatch. TimeoutMs=" + command.TimeoutMs.ToString(CultureInfo.InvariantCulture)) |
| 1306 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.TimeoutMs.ToString(CultureInfo.InvariantCulture) |
| 1307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteActiveWrite(command) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RetryOrCompleteTimeout"]
 N0["L1295 if"]
 M -->|포함| N0
 N1["L1300 lock"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RetryOrCompleteCommunicationError` · L1310–1318

[Drilling.Common/Interface/Melsec/CMelsec.cs:1310–1318](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1310-L1318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RetryOrCompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| errorMessage | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1215–1215](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1215-L1215) | RetryOrCompleteCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1280–1280](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1280-L1280) | RetryOrCompleteCommunicationError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1312 | TryScheduleRetry | resolved | bool Drilling.Common.Interface.CMelsec.TryScheduleRetry(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1320 |
| 1317 | CompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1352 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryScheduleRetry(command, errorMessage) |
| 1312 | if | 조건에 따라 분기합니다: if (TryScheduleRetry(command, errorMessage)) |
| 1314 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCommunicationError(command, errorMessage) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RetryOrCompleteCommunicationError"]
 N0["L1312 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryScheduleRetry` · L1320–1337

[Drilling.Common/Interface/Melsec/CMelsec.cs:1320–1337](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1320-L1337)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.TryScheduleRetry(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| reason | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1295–1295](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1295-L1295) | TryScheduleRetry | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1312–1312](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1312-L1312) | TryScheduleRetry | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1335 | WriteHandshakeLog | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2172 |
| 1335 | command.CurrentRetryCount.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1335 | command.RetryCount.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1322 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1324 | if | 조건에 따라 분기합니다: if (command.CurrentRetryCount >= command.RetryCount) |
| 1326 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1330 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = reason |
| 1331 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Queued |
| 1332 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.RetryWrite |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeLog(command, "[I/F][RETRY]", reason + " Retry=" + command.CurrentRetryCount.ToString(CultureInfo.InvariantCulture) + "/" + command.RetryCount.ToString(CultureInfo.InvariantCulture)) |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.CurrentRetryCount.ToString(CultureInfo.InvariantCulture) |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.RetryCount.ToString(CultureInfo.InvariantCulture) |
| 1336 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryScheduleRetry"]
 N0["L1322 lock"]
 M -->|포함| N0
 N1["L1324 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsWriteAttemptTimedOut` · L1339–1345

[Drilling.Common/Interface/Melsec/CMelsec.cs:1339–1345](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1339-L1345)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsWriteAttemptTimedOut(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, System.DateTimeOffset) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| now | System.DateTimeOffset | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1267–1267](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1267-L1267) | IsWriteAttemptTimedOut | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1343 | TimeSpan.FromMilliseconds | resolved | System.TimeSpan System.TimeSpan.FromMilliseconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1341 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromMilliseconds(command.TimeoutMs) |
| 1343 | return | 호출자에게 값 또는 제어를 반환합니다: return now - command.AttemptStartedAt >= TimeSpan.FromMilliseconds(command.TimeoutMs); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsWriteAttemptTimedOut"]
 N0["L1341 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteCommunicationError` · L1347–1350

[Drilling.Common/Interface/Melsec/CMelsec.cs:1347–1350](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1347-L1350)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1149–1149](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1149-L1149) | CompleteCommunicationError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1349 | CompleteCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1352 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteCommunicationError(command, command.ErrorMessage) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteCommunicationError` · L1352–1363

[Drilling.Common/Interface/Melsec/CMelsec.cs:1352–1363](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1352-L1363)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompleteCommunicationError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1168–1168](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1168-L1168) | CompleteCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1317–1317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1317-L1317) | CompleteCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1349–1349](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1349-L1349) | CompleteCommunicationError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1361 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 1362 | CompleteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1391 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1354 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1356 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.CommunicationError |
| 1357 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = message |
| 1358 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.CommunicationError |
| 1361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][COMM_ERROR]", message) |
| 1362 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteActiveWrite(command) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteCommunicationError"]
 N0["L1354 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteInvalidWrite` · L1365–1375

[Drilling.Common/Interface/Melsec/CMelsec.cs:1365–1375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1365-L1375)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompleteInvalidWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1161–1161](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1161-L1161) | CompleteInvalidWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1373 | WriteHandshakeError | resolved | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2181 |
| 1374 | CompleteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1391 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1367 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1369 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.InvalidParameter |
| 1370 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = message |
| 1373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteHandshakeError(command, "[I/F][COMM_ERROR]", message) |
| 1374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteActiveWrite(command) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteInvalidWrite"]
 N0["L1367 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteCancelledWrite` · L1377–1389

[Drilling.Common/Interface/Melsec/CMelsec.cs:1377–1389](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1377-L1389)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompleteCancelledWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1127–1127](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1127-L1127) | CompleteCancelledWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1152–1152](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1152-L1152) | CompleteCancelledWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1185–1185](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1185-L1185) | CompleteCancelledWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1210–1210](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1210-L1210) | CompleteCancelledWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1276–1276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1276-L1276) | CompleteCancelledWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1382 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1388 | CompleteActiveWrite | resolved | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:1391 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1379 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1381 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 1382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(command.ErrorMessage) |
| 1382 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(command.ErrorMessage)) |
| 1384 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = "MELSEC write was cancelled." |
| 1388 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteActiveWrite(command) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteCancelledWrite"]
 N0["L1379 lock"]
 M -->|포함| N0
 N1["L1382 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteActiveWrite` · L1391–1403

[Drilling.Common/Interface/Melsec/CMelsec.cs:1391–1403](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1391-L1403)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompleteActiveWrite(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1257–1257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1257-L1257) | CompleteActiveWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1307–1307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1307-L1307) | CompleteActiveWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1362–1362](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1362-L1362) | CompleteActiveWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1374–1374](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1374-L1374) | CompleteActiveWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1388–1388](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1388-L1388) | CompleteActiveWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1401 | TrimWriteStatus | resolved | void Drilling.Common.Interface.CMelsec.TrimWriteStatus() · Drilling.Common/Interface/Melsec/CMelsec.cs:1427 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1393 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1395 | if | 조건에 따라 분기합니다: if (_activeWriteCommand == command) |
| 1397 | assignment | 값을 대상에 대입합니다: _activeWriteCommand = null |
| 1400 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.Ready |
| 1401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TrimWriteStatus() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteActiveWrite"]
 N0["L1393 lock"]
 M -->|포함| N0
 N1["L1395 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CancelQueuedWrites` · L1405–1425

[Drilling.Common/Interface/Melsec/CMelsec.cs:1405–1425](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1405-L1425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CancelQueuedWrites(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:166–166](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L166-L166) | CancelQueuedWrites | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1411 | _writeQueue.Dequeue | resolved | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Dequeue() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1407 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1409 | while | 조건을 먼저 확인하며 반복합니다: while (_writeQueue.Count > 0) |
| 1411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeQueue.Dequeue() |
| 1411 | local-declaration | 지역 변수를 선언합니다: CMelsecWriteCommand command = _writeQueue.Dequeue(); |
| 1411 | variable-initializer | 변수의 초기값을 지정합니다: command = _writeQueue.Dequeue() |
| 1412 | assignment | 값을 대상에 대입합니다: command.CancelRequested = true |
| 1413 | assignment | 값을 대상에 대입합니다: command.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 1414 | assignment | 값을 대상에 대입합니다: command.ErrorMessage = message |
| 1417 | if | 조건에 따라 분기합니다: if (_activeWriteCommand != null) |
| 1419 | assignment | 값을 대상에 대입합니다: _activeWriteCommand.CancelRequested = true |
| 1420 | assignment | 값을 대상에 대입합니다: _activeWriteCommand.ErrorMessage = message |
| 1421 | assignment | 값을 대상에 대입합니다: _activeWriteCommand.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 1422 | assignment | 값을 대상에 대입합니다: _process = EN_MELSEC_PROCESS.Close |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CancelQueuedWrites"]
 N0["L1407 lock"]
 M -->|포함| N0
 N1["L1409 while"]
 N0 -->|포함| N1
 N2["L1417 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TrimWriteStatus` · L1427–1447

[Drilling.Common/Interface/Melsec/CMelsec.cs:1427–1447](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1427-L1447)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.TrimWriteStatus() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1078–1078](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1078-L1078) | TrimWriteStatus | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1401–1401](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1401-L1401) | TrimWriteStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1434 | IsTerminalWriteResult | resolved | bool Drilling.Common.Interface.CMelsec.IsTerminalWriteResult(Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT) · Drilling.Common/Interface/Melsec/CMelsec.cs:1449 |
| 1445 | _writeStatus.Remove | resolved | bool System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Remove(int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1429 | while | 조건을 먼저 확인하며 반복합니다: while (_writeStatus.Count > MaximumStoredWriteStatusCount) |
| 1431 | local-declaration | 지역 변수를 선언합니다: int oldestRequestNo = int.MaxValue; |
| 1431 | variable-initializer | 변수의 초기값을 지정합니다: oldestRequestNo = int.MaxValue |
| 1432 | foreach | 컬렉션 요소를 순회합니다: foreach (KeyValuePair<int, CMelsecWriteCommand> pair in _writeStatus) |
| 1434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsTerminalWriteResult(pair.Value.Result) |
| 1434 | if | 조건에 따라 분기합니다: if (pair.Key < oldestRequestNo && IsTerminalWriteResult(pair.Value.Result)) |
| 1436 | assignment | 값을 대상에 대입합니다: oldestRequestNo = pair.Key |
| 1440 | if | 조건에 따라 분기합니다: if (oldestRequestNo == int.MaxValue) |
| 1442 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1445 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeStatus.Remove(oldestRequestNo) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TrimWriteStatus"]
 N0["L1429 while"]
 M -->|포함| N0
 N1["L1432 foreach"]
 N0 -->|포함| N1
 N2["L1434 if"]
 N1 -->|포함| N2
 N3["L1440 if"]
 N0 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsTerminalWriteResult` · L1449–1452

[Drilling.Common/Interface/Melsec/CMelsec.cs:1449–1452](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1449-L1452)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsTerminalWriteResult(Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| result | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1434–1434](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1434-L1434) | IsTerminalWriteResult | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1451 | return | 호출자에게 값 또는 제어를 반환합니다: return result == EN_MELSEC_WRITE_RESULT.Confirmed &#124;&#124; result == EN_MELSEC_WRITE_RESULT.Timeout &#124;&#124; result == EN_MELSEC_WRITE_RESULT.CommunicationError &#124;&#124; result == EN_MELSEC_WRITE_RESULT.InvalidParameter &#124;&#124; result == EN_MELSEC_WRITE |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteCommandValue` · L1454–1473

[Drilling.Common/Interface/Melsec/CMelsec.cs:1454–1473](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1454-L1473)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1182–1182](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1182-L1182) | WriteCommandValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1459 | WriteBitCore | resolved | void Drilling.Common.Interface.CMelsec.WriteBitCore(string, bool, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:498 |
| 1462 | WriteWordCore | resolved | void Drilling.Common.Interface.CMelsec.WriteWordCore(string, double, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:528 |
| 1465 | WriteDoubleCore | resolved | void Drilling.Common.Interface.CMelsec.WriteDoubleCore(string, double, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:567 |
| 1468 | WriteStringCore | resolved | void Drilling.Common.Interface.CMelsec.WriteStringCore(string, string, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:598 |
| 1471 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1456 | switch | 값에 따라 분기합니다: switch (command.RequestedDataType) |
| 1458 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 1459 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteBitCore(command.WriteId, (bool)command.ExpectedValue, CancellationToken.None) |
| 1460 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1461 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 1462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWordCore(command.WriteId, (double)command.ExpectedValue, CancellationToken.None) |
| 1463 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1464 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 1465 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteDoubleCore(command.WriteId, (double)command.ExpectedValue, CancellationToken.None) |
| 1466 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1467 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 1468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteStringCore(command.WriteId, (string)command.ExpectedValue, CancellationToken.None) |
| 1469 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1470 | case | 분기값/패턴의 구간입니다: default: |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC confirmed write data type is not supported: " + command.RequestedDataType) |
| 1471 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC confirmed write data type is not supported: " + command.RequestedDataType); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteCommandValue"]
 N0["L1456 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadCommandValue` · L1475–1490

[Drilling.Common/Interface/Melsec/CMelsec.cs:1475–1490](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1475-L1490)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec.ReadCommandValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1238–1238](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1238-L1238) | ReadCommandValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1480 | ReadBitCore | resolved | bool Drilling.Common.Interface.CMelsec.ReadBitCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:487 |
| 1482 | ReadWordCore | resolved | double Drilling.Common.Interface.CMelsec.ReadWordCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:517 |
| 1484 | ReadDoubleCore | resolved | double Drilling.Common.Interface.CMelsec.ReadDoubleCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:545 |
| 1486 | ReadStringCore | resolved | string Drilling.Common.Interface.CMelsec.ReadStringCore(string, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:582 |
| 1488 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1477 | switch | 값에 따라 분기합니다: switch (command.RequestedDataType) |
| 1479 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 1480 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadBitCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM") |
| 1480 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadBitCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM"); |
| 1481 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 1482 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWordCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM") |
| 1482 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadWordCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM"); |
| 1483 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 1484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDoubleCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM") |
| 1484 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadDoubleCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM"); |
| 1485 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 1486 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadStringCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM") |
| 1486 | return | 호출자에게 값 또는 제어를 반환합니다: return ReadStringCore(command.ReadbackId, CancellationToken.None, logSource: "WRITE_CONFIRM"); |
| 1487 | case | 분기값/패턴의 구간입니다: default: |
| 1488 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC readback data type is not supported: " + command.RequestedDataType) |
| 1488 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC readback data type is not supported: " + command.RequestedDataType); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadCommandValue"]
 N0["L1477 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsExpectedValue` · L1492–1510

[Drilling.Common/Interface/Melsec/CMelsec.cs:1492–1510](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1492-L1510)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsExpectedValue(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, object) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| actualValue | object | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1247–1247](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1247-L1247) | IsExpectedValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1502 | Math.Abs | resolved | double System.Math.Abs(double) |
| 1503 | Math.Max | resolved | double System.Math.Max(double, double) |
| 1504 | Math.Abs | resolved | double System.Math.Abs(double) |
| 1506 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1494 | switch | 값에 따라 분기합니다: switch (command.RequestedDataType) |
| 1496 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 1497 | return | 호출자에게 값 또는 제어를 반환합니다: return (bool)command.ExpectedValue == (bool)actualValue; |
| 1498 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 1499 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 1500 | local-declaration | 지역 변수를 선언합니다: double expected = (double)command.ExpectedValue; |
| 1500 | variable-initializer | 변수의 초기값을 지정합니다: expected = (double)command.ExpectedValue |
| 1501 | local-declaration | 지역 변수를 선언합니다: double actual = (double)actualValue; |
| 1501 | variable-initializer | 변수의 초기값을 지정합니다: actual = (double)actualValue |
| 1502 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(command.ReadbackData.ReadScale) |
| 1502 | conditional-expression | 조건에 따라 결과식을 선택합니다: command.ReadbackData == null ? 1.0 : Math.Abs(command.ReadbackData.ReadScale) |
| 1502 | local-declaration | 지역 변수를 선언합니다: double scale = command.ReadbackData == null ? 1.0 : Math.Abs(command.ReadbackData.ReadScale); |
| 1502 | variable-initializer | 변수의 초기값을 지정합니다: scale = command.ReadbackData == null ? 1.0 : Math.Abs(command.ReadbackData.ReadScale) |
| 1503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(double.Epsilon, scale / 2.0) |
| 1503 | local-declaration | 지역 변수를 선언합니다: double tolerance = Math.Max(double.Epsilon, scale / 2.0); |
| 1503 | variable-initializer | 변수의 초기값을 지정합니다: tolerance = Math.Max(double.Epsilon, scale / 2.0) |
| 1504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(expected - actual) |
| 1504 | return | 호출자에게 값 또는 제어를 반환합니다: return Math.Abs(expected - actual) <= tolerance; |
| 1505 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 1506 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals((string)command.ExpectedValue, (string)actualValue, StringComparison.Ordinal) |
| 1506 | return | 호출자에게 값 또는 제어를 반환합니다: return string.Equals((string)command.ExpectedValue, (string)actualValue, StringComparison.Ordinal); |
| 1507 | case | 분기값/패턴의 구간입니다: default: |
| 1508 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsExpectedValue"]
 N0["L1494 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ApplySimulationReadback` · L1512–1530

[Drilling.Common/Interface/Melsec/CMelsec.cs:1512–1530](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1512-L1530)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ApplySimulationReadback(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1198–1198](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1198-L1198) | ApplySimulationReadback | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1519 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1520 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1525 | GetSimulationReadbackMode | resolved | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec.GetSimulationReadbackMode() · Drilling.Common/Interface/Melsec/CMelsec.cs:1532 |
| 1528 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1514 | if | 조건에 따라 분기합니다: if (command.WriteData == null &#124;&#124; command.ReadbackData == null) |
| 1516 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1519 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(command.WriteData) |
| 1519 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA interfaceData = GetInterfaceData(command.WriteData); |
| 1519 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(command.WriteData) |
| 1520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1520 | if | 조건에 따라 분기합니다: if (!IsSimulation(interfaceData)) |
| 1522 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1525 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSimulationReadbackMode() |
| 1525 | local-declaration | 지역 변수를 선언합니다: EN_MELSEC_SIMULATION_READBACK mode = GetSimulationReadbackMode(); |
| 1525 | variable-initializer | 변수의 초기값을 지정합니다: mode = GetSimulationReadbackMode() |
| 1526 | if | 조건에 따라 분기합니다: if (mode == EN_MELSEC_SIMULATION_READBACK.AutoEcho &#124;&#124; (mode == EN_MELSEC_SIMULATION_READBACK.FailFirstAttempt && command.CurrentRetryCount > 0)) |
| 1528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(command.ReadbackData, command.ExpectedValue) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ApplySimulationReadback"]
 N0["L1514 if"]
 M -->|포함| N0
 N1["L1520 if"]
 M -->|포함| N1
 N2["L1526 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSimulationReadbackMode` · L1532–1538

[Drilling.Common/Interface/Melsec/CMelsec.cs:1532–1538](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1532-L1538)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK Drilling.Common.Interface.CMelsec.GetSimulationReadbackMode() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1232–1232](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1232-L1232) | GetSimulationReadbackMode | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1525–1525](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1525-L1525) | GetSimulationReadbackMode | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1534 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_simulationLock) |
| 1536 | return | 호출자에게 값 또는 제어를 반환합니다: return _simulationReadback; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetSimulationReadbackMode"]
 N0["L1534 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteSimulationValue` · L1540–1579

[Drilling.Common/Interface/Melsec/CMelsec.cs:1540–1579](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1540-L1579)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| value | object | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1528–1528](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1528-L1528) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3049–3049](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3049-L3049) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3078–3078](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3078-L3078) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3101–3101](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3101-L3101) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3122–3122](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3122-L3122) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3142–3142](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3142-L3142) | WriteSimulationValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3161–3161](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3161-L3161) | WriteSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1542 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 1546 | RequireWordBit | resolved | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2079 |
| 1547 | ReadSimulationWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1849 |
| 1558 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1561 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1561 | EncodeIntegerValue | resolved | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:537 |
| 1561 | Convert.ToDouble | resolved | double System.Convert.ToDouble(object?, System.IFormatProvider?) |
| 1564 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1564 | Int32ToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2099 |
| 1564 | EncodeIntegerValue | resolved | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:537 |
| 1564 | Convert.ToDouble | resolved | double System.Convert.ToDouble(object?, System.IFormatProvider?) |
| 1564 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1569 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1569 | Int32ToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2099 |
| 1569 | EncodeIntegerValue | resolved | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:537 |
| 1573 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1573 | FloatToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.FloatToWords(float, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2119 |
| 1573 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1576 | WriteSimulationString | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationString(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1581 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(data.Address) |
| 1542 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_ADDRESS address = ParseAddress(data.Address); |
| 1542 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(data.Address) |
| 1543 | switch | 값에 따라 분기합니다: switch (data.DataType) |
| 1545 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 1546 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequireWordBit(address, data) |
| 1546 | local-declaration | 지역 변수를 선언합니다: int bitIndex = RequireWordBit(address, data); |
| 1546 | variable-initializer | 변수의 초기값을 지정합니다: bitIndex = RequireWordBit(address, data) |
| 1547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadSimulationWords(data.DeviceNo, address, 1) |
| 1547 | local-declaration | 지역 변수를 선언합니다: ushort[] bitWords = ReadSimulationWords(data.DeviceNo, address, 1); |
| 1547 | variable-initializer | 변수의 초기값을 지정합니다: bitWords = ReadSimulationWords(data.DeviceNo, address, 1) |
| 1548 | local-declaration | 지역 변수를 선언합니다: ushort mask = (ushort)(1 << bitIndex); |
| 1548 | variable-initializer | 변수의 초기값을 지정합니다: mask = (ushort)(1 << bitIndex) |
| 1549 | if | 조건에 따라 분기합니다: if ((bool)value) |
| 1551 | assignment | 값을 대상에 대입합니다: bitWords[0] = (ushort)(bitWords[0] &#124; mask) |
| 1553 | else | 앞 조건이 거짓인 경로입니다: else |
| 1555 | assignment | 값을 대상에 대입합니다: bitWords[0] = (ushort)(bitWords[0] & ~mask) |
| 1558 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, bitWords) |
| 1559 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1560 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 1561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, [(ushort)EncodeIntegerValue(data, Convert.ToDouble(value, CultureInfo.InvariantCulture) / data.ReadScale)]) |
| 1561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EncodeIntegerValue(data, Convert.ToDouble(value, CultureInfo.InvariantCulture) / data.ReadScale) |
| 1561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(value, CultureInfo.InvariantCulture) |
| 1562 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1563 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.DWord: |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, Int32ToWords(EncodeIntegerValue(data, Convert.ToDouble(value, CultureInfo.InvariantCulture) / data.ReadScale), Math.Max(2, data.Length))) |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Int32ToWords(EncodeIntegerValue(data, Convert.ToDouble(value, CultureInfo.InvariantCulture) / data.ReadScale), Math.Max(2, data.Length)) |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EncodeIntegerValue(data, Convert.ToDouble(value, CultureInfo.InvariantCulture) / data.ReadScale) |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(value, CultureInfo.InvariantCulture) |
| 1564 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, data.Length) |
| 1565 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1566 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 1568 | local-declaration | 지역 변수를 선언합니다: double doubleRawValue = (double)value / data.ReadScale; |
| 1568 | variable-initializer | 변수의 초기값을 지정합니다: doubleRawValue = (double)value / data.ReadScale |
| 1569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, Int32ToWords(EncodeIntegerValue(data, doubleRawValue), 2)) |
| 1569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Int32ToWords(EncodeIntegerValue(data, doubleRawValue), 2) |
| 1569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EncodeIntegerValue(data, doubleRawValue) |
| 1570 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1571 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Float: |
| 1572 | local-declaration | 지역 변수를 선언합니다: double floatRawValue = (double)value / data.ReadScale; |
| 1572 | variable-initializer | 변수의 초기값을 지정합니다: floatRawValue = (double)value / data.ReadScale |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, FloatToWords((float)floatRawValue, Math.Max(2, data.Length))) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FloatToWords((float)floatRawValue, Math.Max(2, data.Length)) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, data.Length) |
| 1574 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1575 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 1576 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationString(data, address, (string)value) |
| 1577 | break | 해당 반복/분기 구간을 종료합니다: break; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteSimulationValue"]
 N0["L1543 switch"]
 M -->|포함| N0
 N1["L1549 if"]
 N0 -->|포함| N1
 N2["L1553 else"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteSimulationString` · L1581–1594

[Drilling.Common/Interface/Melsec/CMelsec.cs:1581–1594](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1581-L1594)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteSimulationString(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1576–1576](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1576-L1576) | WriteSimulationString | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1584 | Encoding.ASCII.GetBytes | resolved · 동적 구현 선택 가능 | byte[] System.Text.Encoding.GetBytes(string) |
| 1585 | Enumerable.Repeat((byte)' ', byteLength).ToArray | resolved | byte[] System.Collections.Generic.IEnumerable<byte>.ToArray<byte>() |
| 1585 | Enumerable.Repeat | resolved | System.Collections.Generic.IEnumerable<byte> System.Linq.Enumerable.Repeat<byte>(byte, int) |
| 1586 | Array.Copy | resolved | void System.Array.Copy(System.Array, System.Array, int) |
| 1586 | Math.Min | resolved | int System.Math.Min(int, int) |
| 1593 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1583 | local-declaration | 지역 변수를 선언합니다: int byteLength = data.Length * 2; |
| 1583 | variable-initializer | 변수의 초기값을 지정합니다: byteLength = data.Length * 2 |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetBytes(value) |
| 1584 | local-declaration | 지역 변수를 선언합니다: byte[] sourceBytes = Encoding.ASCII.GetBytes(value); |
| 1584 | variable-initializer | 변수의 초기값을 지정합니다: sourceBytes = Encoding.ASCII.GetBytes(value) |
| 1585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Repeat((byte)' ', byteLength).ToArray() |
| 1585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Repeat((byte)' ', byteLength) |
| 1585 | local-declaration | 지역 변수를 선언합니다: byte[] bytes = Enumerable.Repeat((byte)' ', byteLength).ToArray(); |
| 1585 | variable-initializer | 변수의 초기값을 지정합니다: bytes = Enumerable.Repeat((byte)' ', byteLength).ToArray() |
| 1586 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.Copy(sourceBytes, bytes, Math.Min(sourceBytes.Length, bytes.Length)) |
| 1586 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(sourceBytes.Length, bytes.Length) |
| 1587 | local-declaration | 지역 변수를 선언합니다: ushort[] words = new ushort[data.Length]; |
| 1587 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[data.Length] |
| 1588 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 1588 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < words.Length; index++) |
| 1590 | assignment | 값을 대상에 대입합니다: words[index] = (ushort)(bytes[index * 2] &#124; (bytes[index * 2 + 1] << 8)) |
| 1593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, words) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteSimulationString"]
 N0["L1588 for"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveReadSnapshot` · L1596–1611

[Drilling.Common/Interface/Melsec/CMelsec.cs:1596–1611](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1596-L1611)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | object | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:494–494](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L494-L494) | SaveReadSnapshot | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:524–524](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L524-L524) | SaveReadSnapshot | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:563–563](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L563-L563) | SaveReadSnapshot | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L594-L594) | SaveReadSnapshot | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2521–2521](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2521-L2521) | SaveReadSnapshot | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2943–2943](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2943-L2943) | SaveReadSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1598 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 1602 | new CMelsecReadSnapshot | resolved | Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot.CMelsecReadSnapshot(long, System.DateTimeOffset, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:2344 |
| 1607 | IsOnDemandValueId | resolved | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2416 |
| 1609 | _cachedValues.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.ContainsKey(string) |
| 1609 | _pollBlockById.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.ContainsKey(string) |
| 1610 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1598 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 1598 | local-declaration | 지역 변수를 선언합니다: var key = NormalizeId(id); |
| 1598 | variable-initializer | 변수의 초기값을 지정합니다: key = NormalizeId(id) |
| 1599 | local-declaration | 지역 변수를 선언합니다: CMelsecReadSnapshot snapshot; |
| 1600 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 1602 | assignment | 값을 대상에 대입합니다: snapshot = new CMelsecReadSnapshot(_readCycleNo, DateTimeOffset.UtcNow, value) |
| 1602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecReadSnapshot(_readCycleNo, DateTimeOffset.UtcNow, value) |
| 1603 | assignment | 값을 대상에 대입합니다: _readSnapshots[key] = snapshot |
| 1607 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOnDemandValueId(key) |
| 1607 | if | 조건에 따라 분기합니다: if (IsOnDemandValueId(key)) |
| 1608 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 1609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.ContainsKey(key) |
| 1609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.ContainsKey(key) |
| 1609 | if | 조건에 따라 분기합니다: if (_cachedValues.ContainsKey(key) && !_pollBlockById.ContainsKey(key)) |
| 1610 | assignment | 값을 대상에 대입합니다: _cachedValues[key] = new(key, value, EN_MELSEC_CACHE_STATE.Valid, snapshot.ReadAt, snapshot.ReadCycleNo, "") |
| 1610 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(key, value, EN_MELSEC_CACHE_STATE.Valid, snapshot.ReadAt, snapshot.ReadCycleNo, "") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveReadSnapshot"]
 N0["L1600 lock"]
 M -->|포함| N0
 N1["L1607 if"]
 M -->|포함| N1
 N2["L1608 lock"]
 N1 -->|포함| N2
 N3["L1609 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterReadSuccess` · L1613–1623

[Drilling.Common/Interface/Melsec/CMelsec.cs:1613–1623](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1613-L1623)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RegisterReadSuccess() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1672–1672](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1672-L1672) | RegisterReadSuccess | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1759–1759](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1759-L1759) | RegisterReadSuccess | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1615 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 1618 | assignment | 값을 대상에 대입합니다: _lastSuccessfulReadAt = DateTimeOffset.UtcNow |
| 1619 | assignment | 값을 대상에 대입합니다: _lastReadReturnCode = 0 |
| 1620 | assignment | 값을 대상에 대입합니다: _consecutiveReadFailureCount = 0 |
| 1621 | assignment | 값을 대상에 대입합니다: _communicationAvailable = true |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RegisterReadSuccess"]
 N0["L1615 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterReadFailure` · L1625–1633

[Drilling.Common/Interface/Melsec/CMelsec.cs:1625–1633](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1625-L1633)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| returnCode | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1234–1234](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1234-L1234) | RegisterReadFailure | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1702–1702](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1702-L1702) | RegisterReadFailure | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1717–1717](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1717-L1717) | RegisterReadFailure | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1733–1733](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1733-L1733) | RegisterReadFailure | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1627 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 1629 | assignment | 값을 대상에 대입합니다: _lastReadReturnCode = returnCode |
| 1631 | assignment | 값을 대상에 대입합니다: _communicationAvailable = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RegisterReadFailure"]
 N0["L1627 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterCommunicationFailure` · L1635–1641

[Drilling.Common/Interface/Melsec/CMelsec.cs:1635–1641](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1635-L1641)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RegisterCommunicationFailure() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1214–1214](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1214-L1214) | RegisterCommunicationFailure | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1890–1890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1890-L1890) | RegisterCommunicationFailure | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1637 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 1639 | assignment | 값을 대상에 대입합니다: _communicationAvailable = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RegisterCommunicationFailure"]
 N0["L1637 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterCommunicationSuccess` · L1643–1649

[Drilling.Common/Interface/Melsec/CMelsec.cs:1643–1649](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1643-L1649)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:722–722](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L722-L722) | RegisterCommunicationSuccess | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:760–760](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L760-L760) | RegisterCommunicationSuccess | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1781–1781](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1781-L1781) | RegisterCommunicationSuccess | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1836–1836](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1836-L1836) | RegisterCommunicationSuccess | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1645 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 1647 | assignment | 값을 대상에 대입합니다: _communicationAvailable = true |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RegisterCommunicationSuccess"]
 N0["L1645 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadWords` · L1651–1761

[Drilling.Common/Interface/Melsec/CMelsec.cs:1651–1761](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1651-L1761)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | ushort[] |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| wordCount | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:492–492](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L492-L492) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:503–503](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L503-L503) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:521–521](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L521-L521) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:552–552](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L552-L552) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:585–585](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L585-L585) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2515–2515](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2515-L2515) | ReadWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2928–2928](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2928-L2928) | ReadWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1655 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1655 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1658 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1659 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 1659 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1660 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1662 | BuildMelsecLogHeader | resolved | string Drilling.Common.Interface.CMelsec.BuildMelsecLogHeader(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:138 |
| 1663 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1665 | UpdateStageMotionSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.UpdateStageMotionSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3038 |
| 1666 | ReadSimulationWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1849 |
| 1669 | WriteTransferLog | resolved | void Drilling.Common.Interface.CMelsec.WriteTransferLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, string, string, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:87 |
| 1672 | RegisterReadSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1613 |
| 1676 | ReadMelsecNetOption | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2132 |
| 1677 | GetMelsecNetPath | resolved | int Drilling.Common.Interface.CMelsec.GetMelsecNetPath(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1875 |
| 1681 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1681 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1681 | requestedSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1689 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1690 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1693 | _melsecNetApi.ReceiveEx | resolved · 동적 구현 선택 가능 | int Drilling.Common.Interface.CMelsecNetApi.ReceiveEx(int, int, int, int, int, ref int, short[]) · Drilling.Common/Interface/Melsec/CMelsec.cs:3298 |
| 1697 | RecordMelsecTiming | resolved | void Drilling.Common.Interface.CMelsec.RecordMelsecTiming(string, double, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:19 |
| 1697 | Stopwatch.GetElapsedTime | resolved | System.TimeSpan System.Diagnostics.Stopwatch.GetElapsedTime(long) |
| 1697 | FormatMelsecLogAddress | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecLogAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:311 |
| 1700 | IsMelsecNetRuntimeException | resolved | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1924 |
| 1702 | RegisterReadFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1625 |
| 1705 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |
| 1709 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1712 | CreateMelsecNetRuntimeException | resolved | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1929 |
| 1717 | RegisterReadFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1625 |
| 1718 | CreateMelsecNetReturnCodeException | resolved | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1918 |
| 1721 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |
| 1725 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1733 | RegisterReadFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadFailure(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1625 |
| 1734 | requestedSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1734 | actualSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1737 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |
| 1741 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1744 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1744 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1755 | WriteTransferLog | resolved | void Drilling.Common.Interface.CMelsec.WriteTransferLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, string, string, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:87 |
| 1758 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |
| 1759 | RegisterReadSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterReadSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1613 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1653 | if | 조건에 따라 분기합니다: if (wordCount <= 0 &#124;&#124; wordCount > ushort.MaxValue) |
| 1655 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC word count is invalid: {FormatMap(data)}, Count={wordCount}") |
| 1655 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1655 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC word count is invalid: {FormatMap(data)}, Count={wordCount}"); |
| 1658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 1658 | local-declaration | 지역 변수를 선언합니다: var interfaceData = GetInterfaceData(data); |
| 1658 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(data) |
| 1659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(data) |
| 1659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1659 | if | 조건에 따라 분기합니다: if (IsSimulationOnlyRoute(data) && !IsSimulation(interfaceData)) |
| 1660 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion Stage 수신 주소가 미정입니다. SIMULATION 전용 입력은 실통신에서 읽을 수 없습니다: " + data.Id) |
| 1660 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion Stage 수신 주소가 미정입니다. SIMULATION 전용 입력은 실통신에서 읽을 수 없습니다: " + data.Id); |
| 1661 | conditional-expression | 조건에 따라 결과식을 선택합니다: logSource == "WRITE_CONFIRM" ? "READBACK" : "READ" |
| 1661 | local-declaration | 지역 변수를 선언합니다: var operation = logSource == "WRITE_CONFIRM" ? "READBACK" : "READ"; |
| 1661 | variable-initializer | 변수의 초기값을 지정합니다: operation = logSource == "WRITE_CONFIRM" ? "READBACK" : "READ" |
| 1662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BuildMelsecLogHeader(data, operation, address, wordCount) |
| 1662 | local-declaration | 지역 변수를 선언합니다: var command = BuildMelsecLogHeader(data, operation, address, wordCount); |
| 1662 | variable-initializer | 변수의 초기값을 지정합니다: command = BuildMelsecLogHeader(data, operation, address, wordCount) |
| 1663 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1663 | if | 조건에 따라 분기합니다: if (IsSimulation(interfaceData)) |
| 1665 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateStageMotionSimulationWords(data.DeviceNo, address, wordCount) |
| 1666 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadSimulationWords(data.DeviceNo, address, wordCount) |
| 1666 | local-declaration | 지역 변수를 선언합니다: var simulationWords = ReadSimulationWords(data.DeviceNo, address, wordCount); |
| 1666 | variable-initializer | 변수의 초기값을 지정합니다: simulationWords = ReadSimulationWords(data.DeviceNo, address, wordCount) |
| 1667 | if | 조건에 따라 분기합니다: if (!suppressLog) |
| 1669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteTransferLog(data, address, simulationWords, operation, logSource, operation == "READBACK" ? "READBACK_RECEIVED" : "RECEIVED") |
| 1669 | conditional-expression | 조건에 따라 결과식을 선택합니다: operation == "READBACK" ? "READBACK_RECEIVED" : "RECEIVED" |
| 1672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadSuccess() |
| 1673 | return | 호출자에게 값 또는 제어를 반환합니다: return simulationWords; |
| 1676 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetOption(interfaceData) |
| 1676 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_NET_OPTION option = ReadMelsecNetOption(interfaceData); |
| 1676 | variable-initializer | 변수의 초기값을 지정합니다: option = ReadMelsecNetOption(interfaceData) |
| 1677 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMelsecNetPath(data.DeviceNo) |
| 1677 | local-declaration | 지역 변수를 선언합니다: int path = GetMelsecNetPath(data.DeviceNo); |
| 1677 | variable-initializer | 변수의 초기값을 지정합니다: path = GetMelsecNetPath(data.DeviceNo) |
| 1678 | local-declaration | 지역 변수를 선언합니다: int requestedSize = checked(wordCount * sizeof(short)); |
| 1678 | variable-initializer | 변수의 초기값을 지정합니다: requestedSize = checked(wordCount * sizeof(short)) |
| 1679 | if | 조건에 따라 분기합니다: if (requestedSize > MelsecNetMaximumTransferBytes) |
| 1681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSECNET read size exceeds 1920 bytes: " + FormatMap(data) + ", Size=" + requestedSize.ToString(CultureInfo.InvariantCulture)) |
| 1681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedSize.ToString(CultureInfo.InvariantCulture) |
| 1681 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSECNET read size exceeds 1920 bytes: " + FormatMap(data) + ", Size=" + requestedSize.ToString(CultureInfo.InvariantCulture)); |
| 1684 | local-declaration | 지역 변수를 선언합니다: int actualSize = requestedSize; |
| 1684 | variable-initializer | 변수의 초기값을 지정합니다: actualSize = requestedSize |
| 1685 | local-declaration | 지역 변수를 선언합니다: short[] receiveData = new short[wordCount]; |
| 1685 | variable-initializer | 변수의 초기값을 지정합니다: receiveData = new short[wordCount] |
| 1686 | local-declaration | 지역 변수를 선언합니다: int returnCode; |
| 1687 | try | 예외 처리 범위입니다: try |
| 1689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1690 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1690 | local-declaration | 지역 변수를 선언합니다: var nativeStarted = Stopwatch.GetTimestamp(); |
| 1690 | variable-initializer | 변수의 초기값을 지정합니다: nativeStarted = Stopwatch.GetTimestamp() |
| 1691 | try | 예외 처리 범위입니다: try |
| 1693 | assignment | 값을 대상에 대입합니다: returnCode = _melsecNetApi.ReceiveEx(path, option.NetworkNo, option.StationNo, address.DeviceType, address.Number, ref actualSize, receiveData) |
| 1693 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetApi.ReceiveEx(path, option.NetworkNo, option.StationNo, address.DeviceType, address.Number, ref actualSize, receiveData) |
| 1695 | finally | 종료 정리 구간입니다: finally |
| 1697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecordMelsecTiming("mdReceiveEx", Stopwatch.GetElapsedTime(nativeStarted).TotalMilliseconds, data.Id + "@" + FormatMelsecLogAddress(address)) |
| 1697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetElapsedTime(nativeStarted) |
| 1697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecLogAddress(address) |
| 1700 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMelsecNetRuntimeException(exception) |
| 1700 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (IsMelsecNetRuntimeException(exception)) |
| 1702 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadFailure(-1) |
| 1703 | if | 조건에 따라 분기합니다: if (suppressLog) |
| 1705 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, false, "mdReceiveEx", "", exception.Message) |
| 1707 | else | 앞 조건이 거짓인 경로입니다: else |
| 1709 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdReceiveEx", exception.Message) |
| 1712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetRuntimeException("mdReceiveEx", exception) |
| 1712 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetRuntimeException("mdReceiveEx", exception); |
| 1715 | if | 조건에 따라 분기합니다: if (returnCode != 0) |
| 1717 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadFailure(returnCode) |
| 1718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetReturnCodeException("mdReceiveEx", returnCode, interfaceData, option, path, requestedSize) |
| 1718 | local-declaration | 지역 변수를 선언합니다: IOException exception = CreateMelsecNetReturnCodeException("mdReceiveEx", returnCode, interfaceData, option, path, requestedSize); |
| 1718 | variable-initializer | 변수의 초기값을 지정합니다: exception = CreateMelsecNetReturnCodeException("mdReceiveEx", returnCode, interfaceData, option, path, requestedSize) |
| 1719 | if | 조건에 따라 분기합니다: if (suppressLog) |
| 1721 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, false, "mdReceiveEx", "", exception.Message) |
| 1723 | else | 앞 조건이 거짓인 경로입니다: else |
| 1725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdReceiveEx", exception.Message) |
| 1728 | throw | 예외를 발생/전달합니다: throw exception; |
| 1731 | if | 조건에 따라 분기합니다: if (actualSize != requestedSize) |
| 1733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadFailure(-5) |
| 1734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedSize.ToString(CultureInfo.InvariantCulture) |
| 1734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: actualSize.ToString(CultureInfo.InvariantCulture) |
| 1734 | local-declaration | 지역 변수를 선언합니다: string message = "mdReceiveEx size mismatch. RequestedSize=" + requestedSize.ToString(CultureInfo.InvariantCulture) + ", ActualSize=" + actualSize.ToString(CultureInfo.InvariantCulture); |
| 1734 | variable-initializer | 변수의 초기값을 지정합니다: message = "mdReceiveEx size mismatch. RequestedSize=" + requestedSize.ToString(CultureInfo.InvariantCulture) + ", ActualSize=" + actualSize.ToString(CultureInfo.InvariantCulture) |
| 1735 | if | 조건에 따라 분기합니다: if (suppressLog) |
| 1737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, false, "mdReceiveEx", "", message) |
| 1739 | else | 앞 조건이 거짓인 경로입니다: else |
| 1741 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdReceiveEx", message) |
| 1744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException(message + " / " + FormatMap(data)) |
| 1744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1744 | throw | 예외를 발생/전달합니다: throw new IOException(message + " / " + FormatMap(data)); |
| 1747 | local-declaration | 지역 변수를 선언합니다: ushort[] words = new ushort[wordCount]; |
| 1747 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[wordCount] |
| 1748 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 1748 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < words.Length; index++) |
| 1750 | assignment | 값을 대상에 대입합니다: words[index] = unchecked((ushort)receiveData[index]) |
| 1753 | if | 조건에 따라 분기합니다: if (!suppressLog) |
| 1755 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteTransferLog(data, address, words, operation, logSource, operation == "READBACK" ? "READBACK_RECEIVED" : "RECEIVED") |
| 1755 | conditional-expression | 조건에 따라 결과식을 선택합니다: operation == "READBACK" ? "READBACK_RECEIVED" : "RECEIVED" |
| 1758 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, true, command, "mdReceiveEx OK", "") |
| 1759 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterReadSuccess() |
| 1760 | return | 호출자에게 값 또는 제어를 반환합니다: return words; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadWords"]
 N0["L1653 if"]
 M -->|포함| N0
 N1["L1659 if"]
 M -->|포함| N1
 N2["L1663 if"]
 M -->|포함| N2
 N3["L1667 if"]
 N2 -->|포함| N3
 N4["L1679 if"]
 M -->|포함| N4
 N5["L1687 try"]
 M -->|포함| N5
 N6["L1691 try"]
 N5 -->|포함| N6
 N7["L1695 finally"]
 N6 -->|포함| N7
 N8["L1700 catch"]
 N5 -->|포함| N8
 N9["L1703 if"]
 N8 -->|포함| N9
 N10["L1707 else"]
 N9 -->|포함| N10
 N11["L1715 if"]
 M -->|포함| N11
 N12["L1719 if"]
 N11 -->|포함| N12
 N13["L1723 else"]
 N12 -->|포함| N13
 N14["L1731 if"]
 M -->|포함| N14
 N15["L1735 if"]
 N14 -->|포함| N15
 N16["L1739 else"]
 N15 -->|포함| N16
 N17["L1748 for"]
 M -->|포함| N17
 N18["L1753 if"]
 M -->|포함| N18
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteWords` · L1763–1837

[Drilling.Common/Interface/Melsec/CMelsec.cs:1763–1837](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1763-L1837)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| words | System.Collections.Generic.IReadOnlyList<ushort> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| logSource | string | None | True / "DIRECT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:514–514](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L514-L514) | WriteWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:534–534](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L534-L534) | WriteWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L579-L579) | WriteWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:611–611](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L611-L611) | WriteWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2497–2497](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2497-L2497) | WriteWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1767 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1767 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1770 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 1771 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 1771 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1772 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1773 | BuildMelsecLogHeader | resolved | string Drilling.Common.Interface.CMelsec.BuildMelsecLogHeader(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:138 |
| 1776 | InvalidateWrittenCache | resolved | void Drilling.Common.Interface.CMelsec.InvalidateWrittenCache(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2784 |
| 1777 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 1779 | WriteSimulationWords | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1861 |
| 1780 | WriteTransferLog | resolved | void Drilling.Common.Interface.CMelsec.WriteTransferLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, string, string, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:87 |
| 1781 | RegisterCommunicationSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1643 |
| 1785 | ReadMelsecNetOption | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2132 |
| 1786 | GetMelsecNetPath | resolved | int Drilling.Common.Interface.CMelsec.GetMelsecNetPath(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1875 |
| 1790 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1790 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1790 | requestedSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1803 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1804 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1807 | _melsecNetApi.SendEx | resolved · 동적 구현 선택 가능 | int Drilling.Common.Interface.CMelsecNetApi.SendEx(int, int, int, int, int, ref int, short[]) · Drilling.Common/Interface/Melsec/CMelsec.cs:3293 |
| 1811 | RecordMelsecTiming | resolved | void Drilling.Common.Interface.CMelsec.RecordMelsecTiming(string, double, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:19 |
| 1811 | Stopwatch.GetElapsedTime | resolved | System.TimeSpan System.Diagnostics.Stopwatch.GetElapsedTime(long) |
| 1811 | FormatMelsecLogAddress | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecLogAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:311 |
| 1814 | IsMelsecNetRuntimeException | resolved | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1924 |
| 1816 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1817 | CreateMelsecNetRuntimeException | resolved | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) · Drilling.Common/Interface/Melsec/CMelsec.cs:1929 |
| 1822 | CreateMelsecNetReturnCodeException | resolved | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1918 |
| 1823 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1829 | requestedSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1829 | actualSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1830 | RegisterMelsecNetCommunicationError | resolved | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1888 |
| 1831 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 1831 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1834 | WriteTransferLog | resolved | void Drilling.Common.Interface.CMelsec.WriteTransferLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, string, string, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:87 |
| 1835 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |
| 1836 | RegisterCommunicationSuccess | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationSuccess() · Drilling.Common/Interface/Melsec/CMelsec.cs:1643 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1765 | if | 조건에 따라 분기합니다: if (words.Count <= 0 &#124;&#124; words.Count > ushort.MaxValue) |
| 1767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC word count is invalid: {FormatMap(data)}, Count={words.Count}") |
| 1767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1767 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC word count is invalid: {FormatMap(data)}, Count={words.Count}"); |
| 1770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 1770 | local-declaration | 지역 변수를 선언합니다: var interfaceData = GetInterfaceData(data); |
| 1770 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetInterfaceData(data) |
| 1771 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(data) |
| 1771 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1771 | if | 조건에 따라 분기합니다: if (IsSimulationOnlyRoute(data) && !IsSimulation(interfaceData)) |
| 1772 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("SIMULATION 전용 주소는 실제 MELSEC으로 쓸 수 없습니다: " + data.Id) |
| 1772 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("SIMULATION 전용 주소는 실제 MELSEC으로 쓸 수 없습니다: " + data.Id); |
| 1773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BuildMelsecLogHeader(data, "WRITE", address, words.Count) |
| 1773 | local-declaration | 지역 변수를 선언합니다: var command = BuildMelsecLogHeader(data, "WRITE", address, words.Count); |
| 1773 | variable-initializer | 변수의 초기값을 지정합니다: command = BuildMelsecLogHeader(data, "WRITE", address, words.Count) |
| 1776 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InvalidateWrittenCache(data.DeviceNo, address, words.Count) |
| 1777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 1777 | if | 조건에 따라 분기합니다: if (IsSimulation(interfaceData)) |
| 1779 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationWords(data.DeviceNo, address, words) |
| 1780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteTransferLog(data, address, words, "WRITE", logSource, "WRITE_ACCEPTED") |
| 1781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationSuccess() |
| 1782 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1785 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetOption(interfaceData) |
| 1785 | local-declaration | 지역 변수를 선언합니다: ST_MELSEC_NET_OPTION option = ReadMelsecNetOption(interfaceData); |
| 1785 | variable-initializer | 변수의 초기값을 지정합니다: option = ReadMelsecNetOption(interfaceData) |
| 1786 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMelsecNetPath(data.DeviceNo) |
| 1786 | local-declaration | 지역 변수를 선언합니다: int path = GetMelsecNetPath(data.DeviceNo); |
| 1786 | variable-initializer | 변수의 초기값을 지정합니다: path = GetMelsecNetPath(data.DeviceNo) |
| 1787 | local-declaration | 지역 변수를 선언합니다: int requestedSize = checked(words.Count * sizeof(short)); |
| 1787 | variable-initializer | 변수의 초기값을 지정합니다: requestedSize = checked(words.Count * sizeof(short)) |
| 1788 | if | 조건에 따라 분기합니다: if (requestedSize > MelsecNetMaximumTransferBytes) |
| 1790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSECNET write size exceeds 1920 bytes: " + FormatMap(data) + ", Size=" + requestedSize.ToString(CultureInfo.InvariantCulture)) |
| 1790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedSize.ToString(CultureInfo.InvariantCulture) |
| 1790 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSECNET write size exceeds 1920 bytes: " + FormatMap(data) + ", Size=" + requestedSize.ToString(CultureInfo.InvariantCulture)); |
| 1793 | local-declaration | 지역 변수를 선언합니다: short[] sendData = new short[words.Count]; |
| 1793 | variable-initializer | 변수의 초기값을 지정합니다: sendData = new short[words.Count] |
| 1794 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 1794 | for | 초기화·조건·증감이 있는 반복입니다: for (int index = 0; index < words.Count; index++) |
| 1796 | assignment | 값을 대상에 대입합니다: sendData[index] = unchecked((short)words[index]) |
| 1799 | local-declaration | 지역 변수를 선언합니다: int actualSize = requestedSize; |
| 1799 | variable-initializer | 변수의 초기값을 지정합니다: actualSize = requestedSize |
| 1800 | local-declaration | 지역 변수를 선언합니다: int returnCode; |
| 1801 | try | 예외 처리 범위입니다: try |
| 1803 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1804 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1804 | local-declaration | 지역 변수를 선언합니다: var nativeStarted = Stopwatch.GetTimestamp(); |
| 1804 | variable-initializer | 변수의 초기값을 지정합니다: nativeStarted = Stopwatch.GetTimestamp() |
| 1805 | try | 예외 처리 범위입니다: try |
| 1807 | assignment | 값을 대상에 대입합니다: returnCode = _melsecNetApi.SendEx(path, option.NetworkNo, option.StationNo, address.DeviceType, address.Number, ref actualSize, sendData) |
| 1807 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetApi.SendEx(path, option.NetworkNo, option.StationNo, address.DeviceType, address.Number, ref actualSize, sendData) |
| 1809 | finally | 종료 정리 구간입니다: finally |
| 1811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecordMelsecTiming("mdSendEx", Stopwatch.GetElapsedTime(nativeStarted).TotalMilliseconds, data.Id + "@" + FormatMelsecLogAddress(address)) |
| 1811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetElapsedTime(nativeStarted) |
| 1811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecLogAddress(address) |
| 1814 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMelsecNetRuntimeException(exception) |
| 1814 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (IsMelsecNetRuntimeException(exception)) |
| 1816 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdSendEx", exception.Message) |
| 1817 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetRuntimeException("mdSendEx", exception) |
| 1817 | throw | 예외를 발생/전달합니다: throw CreateMelsecNetRuntimeException("mdSendEx", exception); |
| 1820 | if | 조건에 따라 분기합니다: if (returnCode != 0) |
| 1822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMelsecNetReturnCodeException("mdSendEx", returnCode, interfaceData, option, path, requestedSize) |
| 1822 | local-declaration | 지역 변수를 선언합니다: IOException exception = CreateMelsecNetReturnCodeException("mdSendEx", returnCode, interfaceData, option, path, requestedSize); |
| 1822 | variable-initializer | 변수의 초기값을 지정합니다: exception = CreateMelsecNetReturnCodeException("mdSendEx", returnCode, interfaceData, option, path, requestedSize) |
| 1823 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdSendEx", exception.Message) |
| 1824 | throw | 예외를 발생/전달합니다: throw exception; |
| 1827 | if | 조건에 따라 분기합니다: if (actualSize != requestedSize) |
| 1829 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedSize.ToString(CultureInfo.InvariantCulture) |
| 1829 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: actualSize.ToString(CultureInfo.InvariantCulture) |
| 1829 | local-declaration | 지역 변수를 선언합니다: string message = "mdSendEx size mismatch. RequestedSize=" + requestedSize.ToString(CultureInfo.InvariantCulture) + ", ActualSize=" + actualSize.ToString(CultureInfo.InvariantCulture); |
| 1829 | variable-initializer | 변수의 초기값을 지정합니다: message = "mdSendEx size mismatch. RequestedSize=" + requestedSize.ToString(CultureInfo.InvariantCulture) + ", ActualSize=" + actualSize.ToString(CultureInfo.InvariantCulture) |
| 1830 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterMelsecNetCommunicationError(data, interfaceData, option, path, requestedSize, "mdSendEx", message) |
| 1831 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException(message + " / " + FormatMap(data)) |
| 1831 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1831 | throw | 예외를 발생/전달합니다: throw new IOException(message + " / " + FormatMap(data)); |
| 1834 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteTransferLog(data, address, words, "WRITE", logSource, "WRITE_ACCEPTED") |
| 1835 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, true, command, "mdSendEx OK", "") |
| 1836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationSuccess() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteWords"]
 N0["L1765 if"]
 M -->|포함| N0
 N1["L1771 if"]
 M -->|포함| N1
 N2["L1777 if"]
 M -->|포함| N2
 N3["L1788 if"]
 M -->|포함| N3
 N4["L1794 for"]
 M -->|포함| N4
 N5["L1801 try"]
 M -->|포함| N5
 N6["L1805 try"]
 N5 -->|포함| N6
 N7["L1809 finally"]
 N6 -->|포함| N7
 N8["L1814 catch"]
 N5 -->|포함| N8
 N9["L1820 if"]
 M -->|포함| N9
 N10["L1827 if"]
 M -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetInterfaceData` · L1839–1842

[Drilling.Common/Interface/Melsec/CMelsec.cs:1839–1842](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1839-L1842)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_INTERFACE_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:935–935](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L935-L935) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1014–1014](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1014-L1014) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1165–1165](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1165-L1165) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1232–1232](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1232-L1232) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1519–1519](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1519-L1519) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1658–1658](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1658-L1658) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1770–1770](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1770-L1770) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2915–2915](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2915-L2915) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3071–3071](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3071-L3071) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3097–3097](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3097-L3097) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3120–3120](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3120-L3120) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3140–3140](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3140-L3140) | GetInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3159–3159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3159-L3159) | GetInterfaceData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1841 | _interfaceManager.GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CInterfaceManager.GetInterfaceData(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:348 |
| 1841 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1841 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, data.DeviceNo) |
| 1841 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC interface is not configured: MELSEC_{data.DeviceNo}") |
| 1841 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, data.DeviceNo) ?? throw new InvalidOperationException($"MELSEC interface is not configured: MELSEC_{data.DeviceNo}"); |
| 1841 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC interface is not configured: MELSEC_{data.DeviceNo}") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsSimulation` · L1844–1847

[Drilling.Common/Interface/Melsec/CMelsec.cs:1844–1847](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1844-L1847)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:719–719](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L719-L719) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:936–936](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L936-L936) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1166–1166](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1166-L1166) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1232–1232](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1232-L1232) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1520–1520](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1520-L1520) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1659–1659](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1659-L1659) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1663–1663](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1663-L1663) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1771–1771](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1771-L1771) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1777–1777](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1777-L1777) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2175–2175](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2175-L2175) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2184–2184](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2184-L2184) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2916–2916](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2916-L2916) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3071–3071](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3071-L3071) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3097–3097](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3097-L3097) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3120–3120](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3120-L3120) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3140–3140](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3140-L3140) | IsSimulation | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3159–3159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3159-L3159) | IsSimulation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1846 | _interfaceManager.IsSimul | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsSimul(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:343 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1846 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.IsSimul(EN_EQP_MODULE.Melsec, data.Number) |
| 1846 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.IsSimul(EN_EQP_MODULE.Melsec, data.Number); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadSimulationWords` · L1849–1859

[Drilling.Common/Interface/Melsec/CMelsec.cs:1849–1859](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1849-L1859)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | ushort[] Drilling.Common.Interface.CMelsec.ReadSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | ushort[] |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| wordCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1547–1547](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1547-L1547) | ReadSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1666–1666](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1666-L1666) | ReadSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3086–3086](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3086-L3086) | ReadSimulationWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1855 | _simulationWords.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, ushort>.TryGetValue(string, out ushort) |
| 1855 | CreateSimulationKey | resolved | string Drilling.Common.Interface.CMelsec.CreateSimulationKey(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1870 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1851 | local-declaration | 지역 변수를 선언합니다: var words = new ushort[wordCount]; |
| 1851 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[wordCount] |
| 1852 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_simulationLock) |
| 1854 | variable-initializer | 변수의 초기값을 지정합니다: i = 0 |
| 1854 | for | 초기화·조건·증감이 있는 반복입니다: for (var i = 0; i < words.Length; i++) |
| 1855 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _simulationWords.TryGetValue(CreateSimulationKey(deviceNo, address, i), out words[i]) |
| 1855 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationKey(deviceNo, address, i) |
| 1858 | return | 호출자에게 값 또는 제어를 반환합니다: return words; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadSimulationWords"]
 N0["L1852 lock"]
 M -->|포함| N0
 N1["L1854 for"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteSimulationWords` · L1861–1868

[Drilling.Common/Interface/Melsec/CMelsec.cs:1861–1868](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1861-L1868)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| words | System.Collections.Generic.IReadOnlyList<ushort> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1558–1558](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1558-L1558) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1561–1561](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1561-L1561) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1564–1564](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1564-L1564) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1569–1569](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1569-L1569) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1573–1573](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1573-L1573) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1593–1593](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1593-L1593) | WriteSimulationWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1779–1779](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1779-L1779) | WriteSimulationWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1866 | CreateSimulationKey | resolved | string Drilling.Common.Interface.CMelsec.CreateSimulationKey(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1870 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1863 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_simulationLock) |
| 1865 | variable-initializer | 변수의 초기값을 지정합니다: i = 0 |
| 1865 | for | 초기화·조건·증감이 있는 반복입니다: for (var i = 0; i < words.Count; i++) |
| 1866 | assignment | 값을 대상에 대입합니다: _simulationWords[CreateSimulationKey(deviceNo, address, i)] = words[i] |
| 1866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateSimulationKey(deviceNo, address, i) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteSimulationWords"]
 N0["L1863 lock"]
 M -->|포함| N0
 N1["L1865 for"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateSimulationKey` · L1870–1873

[Drilling.Common/Interface/Melsec/CMelsec.cs:1870–1873](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1870-L1873)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CreateSimulationKey(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| wordOffset | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1855–1855](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1855-L1855) | CreateSimulationKey | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1866–1866](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1866-L1866) | CreateSimulationKey | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1872 | return | 호출자에게 값 또는 제어를 반환합니다: return $"{deviceNo}:{address.Device}:{address.Number + wordOffset:X}"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetMelsecNetPath` · L1875–1886

[Drilling.Common/Interface/Melsec/CMelsec.cs:1875–1886](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1875-L1886)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.GetMelsecNetPath(int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1677–1677](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1677-L1677) | GetMelsecNetPath | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1786–1786](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1786-L1786) | GetMelsecNetPath | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1879 | _melsecNetPaths.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, int>.TryGetValue(int, out int) |
| 1885 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1885 | deviceNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1877 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 1879 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.TryGetValue(deviceNo, out int path) |
| 1879 | if | 조건에 따라 분기합니다: if (_melsecNetPaths.TryGetValue(deviceNo, out int path)) |
| 1881 | return | 호출자에게 값 또는 제어를 반환합니다: return path; |
| 1885 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSECNET communication line is not open: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture)) |
| 1885 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: deviceNo.ToString(CultureInfo.InvariantCulture) |
| 1885 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSECNET communication line is not open: MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetMelsecNetPath"]
 N0["L1877 lock"]
 M -->|포함| N0
 N1["L1879 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RegisterMelsecNetCommunicationError` · L1888–1894

[Drilling.Common/Interface/Melsec/CMelsec.cs:1888–1894](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1888-L1894)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RegisterMelsecNetCommunicationError(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| interfaceData | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| option | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION | None | False /  |
| path | int | None | False /  |
| dataSize | int | None | False /  |
| functionName | string | None | False /  |
| detail | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1709–1709](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1709-L1709) | RegisterMelsecNetCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1725–1725](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1725-L1725) | RegisterMelsecNetCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1741–1741](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1741-L1741) | RegisterMelsecNetCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1816–1816](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1816-L1816) | RegisterMelsecNetCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1823–1823](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1823-L1823) | RegisterMelsecNetCommunicationError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1830–1830](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1830-L1830) | RegisterMelsecNetCommunicationError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1890 | RegisterCommunicationFailure | resolved | void Drilling.Common.Interface.CMelsec.RegisterCommunicationFailure() · Drilling.Common/Interface/Melsec/CMelsec.cs:1635 |
| 1891 | FormatMelsecNetContext | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1901 |
| 1892 | WriteErrorLog | resolved | void Drilling.Common.Interface.CMelsec.WriteErrorLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2240 |
| 1893 | _interfaceManager.UpdateMelsecCommunicationState | resolved | void Drilling.Common.Interface.CInterfaceManager.UpdateMelsecCommunicationState(int, bool, string, string, string) · Drilling.Common/Interface/CInterfaceManager.cs:353 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RegisterCommunicationFailure() |
| 1891 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecNetContext(option, path, dataSize, 0) |
| 1891 | local-declaration | 지역 변수를 선언합니다: string message = "[I/F][COMM_ERROR] " + functionName + " / " + detail + " / " + FormatMelsecNetContext(option, path, dataSize, 0); |
| 1891 | variable-initializer | 변수의 초기값을 지정합니다: message = "[I/F][COMM_ERROR] " + functionName + " / " + detail + " / " + FormatMelsecNetContext(option, path, dataSize, 0) |
| 1892 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteErrorLog(data, interfaceData, functionName, message) |
| 1893 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.UpdateMelsecCommunicationState(interfaceData.Number, false, functionName, "", message) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteMelsecNetOpenLog` · L1896–1899

[Drilling.Common/Interface/Melsec/CMelsec.cs:1896–1899](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1896-L1899)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteMelsecNetOpenLog(Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaceData | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| option | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION | None | False /  |
| path | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:753–753](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L753-L753) | WriteMelsecNetOpenLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1898 | .WriteInterfaceCommand | unresolved | None |
| 1898 | FormatMelsecNetContext | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1901 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1898 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceCommand(EN_EQP_MODULE.Melsec, interfaceData.NickName, "MELSECNET:mdOpen", "OK", FormatMelsecNetContext(option, path, 0, 0)) |
| 1898 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecNetContext(option, path, 0, 0) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatMelsecNetContext` · L1901–1916

[Drilling.Common/Interface/Melsec/CMelsec.cs:1901–1916](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1901-L1916)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| option | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION | None | False /  |
| path | int | None | False /  |
| dataSize | int | None | False /  |
| returnCode | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:845–845](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L845-L845) | FormatMelsecNetContext | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1891–1891](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1891-L1891) | FormatMelsecNetContext | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1898–1898](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1898-L1898) | FormatMelsecNetContext | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1920–1920](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1920-L1920) | FormatMelsecNetContext | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1915 | option.ChannelNo.ToString | resolved | string short.ToString(System.IFormatProvider?) |
| 1915 | option.NetworkNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1915 | option.StationNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1915 | path.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1915 | dataSize.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1915 | returnCode.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 1915 | requestNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1903 | local-declaration | 지역 변수를 선언합니다: int requestNo = 0; |
| 1903 | variable-initializer | 변수의 초기값을 지정합니다: requestNo = 0 |
| 1904 | local-declaration | 지역 변수를 선언합니다: EN_MELSEC_PROCESS process; |
| 1905 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 1907 | if | 조건에 따라 분기합니다: if (_activeWriteCommand != null) |
| 1909 | assignment | 값을 대상에 대입합니다: requestNo = _activeWriteCommand.RequestNo |
| 1912 | assignment | 값을 대상에 대입합니다: process = _process |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: option.ChannelNo.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: option.NetworkNo.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: option.StationNo.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: path.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dataSize.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: returnCode.ToString(CultureInfo.InvariantCulture) |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestNo.ToString(CultureInfo.InvariantCulture) |
| 1915 | return | 호출자에게 값 또는 제어를 반환합니다: return "ChannelNo=" + option.ChannelNo.ToString(CultureInfo.InvariantCulture) + ", NetworkNo=" + option.NetworkNo.ToString(CultureInfo.InvariantCulture) + ", StationNo=" + option.StationNo.ToString(CultureInfo.InvariantCulture) +  |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FormatMelsecNetContext"]
 N0["L1905 lock"]
 M -->|포함| N0
 N1["L1907 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateMelsecNetReturnCodeException` · L1918–1922

[Drilling.Common/Interface/Melsec/CMelsec.cs:1918–1922](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1918-L1922)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.IO.IOException Drilling.Common.Interface.CMelsec.CreateMelsecNetReturnCodeException(string, int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.IO.IOException |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| functionName | string | None | False /  |
| returnCode | int | None | False /  |
| interfaceData | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| option | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION | None | False /  |
| path | int | None | False /  |
| dataSize | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:749–749](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L749-L749) | CreateMelsecNetReturnCodeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:842–842](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L842-L842) | CreateMelsecNetReturnCodeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1718–1718](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1718-L1718) | CreateMelsecNetReturnCodeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1822–1822](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1822-L1822) | CreateMelsecNetReturnCodeException | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1920 | FormatMelsecNetContext | resolved | string Drilling.Common.Interface.CMelsec.FormatMelsecNetContext(Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION, int, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1901 |
| 1921 | new IOException | resolved | System.IO.IOException.IOException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1920 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMelsecNetContext(option, path, dataSize, returnCode) |
| 1920 | local-declaration | 지역 변수를 선언합니다: string message = functionName + " failed. " + FormatMelsecNetContext(option, path, dataSize, returnCode) + ", NickName=" + interfaceData.NickName; |
| 1920 | variable-initializer | 변수의 초기값을 지정합니다: message = functionName + " failed. " + FormatMelsecNetContext(option, path, dataSize, returnCode) + ", NickName=" + interfaceData.NickName |
| 1921 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException(message) |
| 1921 | return | 호출자에게 값 또는 제어를 반환합니다: return new IOException(message); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsMelsecNetRuntimeException` · L1924–1927

[Drilling.Common/Interface/Melsec/CMelsec.cs:1924–1927](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1924-L1927)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsMelsecNetRuntimeException(System.Exception) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| exception | System.Exception | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:742–742](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L742-L742) | IsMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:835–835](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L835-L835) | IsMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1700–1700](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1700-L1700) | IsMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1814–1814](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1814-L1814) | IsMelsecNetRuntimeException | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1926 | return | 호출자에게 값 또는 제어를 반환합니다: return exception is DllNotFoundException or EntryPointNotFoundException or BadImageFormatException; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateMelsecNetRuntimeException` · L1929–1932

[Drilling.Common/Interface/Melsec/CMelsec.cs:1929–1932](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1929-L1932)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.InvalidOperationException Drilling.Common.Interface.CMelsec.CreateMelsecNetRuntimeException(string, System.Exception) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.InvalidOperationException |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| functionName | string | None | False /  |
| exception | System.Exception | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:744–744](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L744-L744) | CreateMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:837–837](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L837-L837) | CreateMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1712–1712](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1712-L1712) | CreateMelsecNetRuntimeException | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1817–1817](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1817-L1817) | CreateMelsecNetRuntimeException | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1931 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?, System.Exception?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException(functionName + " cannot use the MELSEC Data Link Library. " + "Install the MELSECNET/H board software with the matching application architecture and " + CMelsecNetApi.NativeLibraryName + ". … |
| 1931 | return | 호출자에게 값 또는 제어를 반환합니다: return new InvalidOperationException(functionName + " cannot use the MELSEC Data Link Library. " + "Install the MELSECNET/H board software with the matching application architecture and " + CMelsecNetApi.NativeLibraryName + ". " + |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareRead` · L1934–1937

[Drilling.Common/Interface/Melsec/CMelsec.cs:1934–1937](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1934-L1937)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| dataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:489–489](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L489-L489) | PrepareRead | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:584–584](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L584-L584) | PrepareRead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1936 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1939 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1936 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, [dataType], cancellationToken) |
| 1936 | return | 호출자에게 값 또는 제어를 반환합니다: return PrepareRead(id, [dataType], cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareRead` · L1939–1950

[Drilling.Common/Interface/Melsec/CMelsec.cs:1939–1950](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1939-L1950)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| dataTypes | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:519–519](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L519-L519) | PrepareRead | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:547–547](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L547-L547) | PrepareRead | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1008–1008](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1008-L1008) | PrepareRead | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1936–1936](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1936-L1936) | PrepareRead | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2503–2503](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2503-L2503) | PrepareRead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1941 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1942 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 1943 | EnsureDataType | resolved | void Drilling.Common.Interface.CMelsec.EnsureDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1970 |
| 1946 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1946 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1941 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 1942 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 1942 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 1943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureDataType(data, dataTypes) |
| 1944 | if | 조건에 따라 분기합니다: if (data.Access == EN_MELSEC_ACCESS.Write) |
| 1946 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC map is write only: {FormatMap(data)}") |
| 1946 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1946 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC map is write only: {FormatMap(data)}"); |
| 1949 | return | 호출자에게 값 또는 제어를 반환합니다: return data; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareRead"]
 N0["L1944 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareWrite` · L1952–1955

[Drilling.Common/Interface/Melsec/CMelsec.cs:1952–1955](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1952-L1955)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| dataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:500–500](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L500-L500) | PrepareWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:600–600](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L600-L600) | PrepareWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1954 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1957 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, [dataType], cancellationToken) |
| 1954 | return | 호출자에게 값 또는 제어를 반환합니다: return PrepareWrite(id, [dataType], cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareWrite` · L1957–1968

[Drilling.Common/Interface/Melsec/CMelsec.cs:1957–1968](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1957-L1968)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| dataTypes | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:530–530](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L530-L530) | PrepareWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:569–569](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L569-L569) | PrepareWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1000–1000](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1000-L1000) | PrepareWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1954–1954](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1954-L1954) | PrepareWrite | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2471–2471](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2471-L2471) | PrepareWrite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1959 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1960 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 1961 | EnsureDataType | resolved | void Drilling.Common.Interface.CMelsec.EnsureDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>) · Drilling.Common/Interface/Melsec/CMelsec.cs:1970 |
| 1964 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1964 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1959 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1960 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 1960 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 1960 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 1961 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureDataType(data, dataTypes) |
| 1962 | if | 조건에 따라 분기합니다: if (data.Access == EN_MELSEC_ACCESS.Read) |
| 1964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC map is read only: {FormatMap(data)}") |
| 1964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1964 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC map is read only: {FormatMap(data)}"); |
| 1967 | return | 호출자에게 값 또는 제어를 반환합니다: return data; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareWrite"]
 N0["L1962 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnsureDataType` · L1970–1978

[Drilling.Common/Interface/Melsec/CMelsec.cs:1970–1978](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1970-L1978)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.EnsureDataType(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| dataTypes | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1943–1943](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1943-L1943) | EnsureDataType | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1961–1961](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1961-L1961) | EnsureDataType | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1972 | dataTypes.Contains | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>.Contains<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>(Drilling.Common.Interface.EN_MELSEC_DATA_TYPE) |
| 1977 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 1977 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |
| 1977 | string.Join | resolved | string string.Join<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>(string?, System.Collections.Generic.IEnumerable<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1972 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dataTypes.Contains(data.DataType) |
| 1972 | if | 조건에 따라 분기합니다: if (dataTypes.Contains(data.DataType)) |
| 1974 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1977 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC map data type mismatch: {FormatMap(data)}. Expected={string.Join("/", dataTypes)}") |
| 1977 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 1977 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("/", dataTypes) |
| 1977 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC map data type mismatch: {FormatMap(data)}. Expected={string.Join("/", dataTypes)}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EnsureDataType"]
 N0["L1972 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseAddress` · L1980–2011

[Drilling.Common/Interface/Melsec/CMelsec.cs:1980–2011](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1980-L2011)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:253–253](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L253-L253) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L252-L252) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:490–490](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L490-L490) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:501–501](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L501-L501) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:521–521](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L521-L521) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:534–534](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L534-L534) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:552–552](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L552-L552) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L579-L579) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:585–585](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L585-L585) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:611–611](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L611-L611) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1542–1542](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1542-L1542) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2438–2438](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2438-L2438) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2448–2448](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2448-L2448) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2488–2488](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2488-L2488) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2507–2507](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2507-L2507) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2681–2681](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2681-L2681) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3044–3044](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3044-L3044) | ParseAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3086–3086](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3086-L3086) | ParseAddress | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1982 | value.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1982 | value.Trim | resolved | string string.Trim() |
| 1984 | new ST_MELSEC_ADDRESS | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS.ST_MELSEC_ADDRESS(string, int, int?, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2345 |
| 1984 | text.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 1986 | text.IndexOf | resolved | int string.IndexOf(char, System.StringComparison) |
| 1990 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1990 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 1992 | new FormatException | resolved | System.FormatException.FormatException(string?) |
| 2002 | devices.FirstOrDefault | resolved | string? System.Collections.Generic.IEnumerable<string>.FirstOrDefault<string>(System.Func<string, bool>) |
| 2002 | text.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2005 | new FormatException | resolved | System.FormatException.FormatException(string?) |
| 2009 | ParseDeviceNumber | resolved | int Drilling.Common.Interface.CMelsec.ParseDeviceNumber(string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2013 |
| 2010 | new ST_MELSEC_ADDRESS | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS.ST_MELSEC_ADDRESS(string, int, int?, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2345 |
| 2010 | GetMelsecNetDeviceType | resolved | int Drilling.Common.Interface.CMelsec.GetMelsecNetDeviceType(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2034 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1982 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim().ToUpperInvariant() |
| 1982 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 1982 | local-declaration | 지역 변수를 선언합니다: var text = value.Trim().ToUpperInvariant(); |
| 1982 | variable-initializer | 변수의 초기값을 지정합니다: text = value.Trim().ToUpperInvariant() |
| 1983 | if | 조건에 따라 분기합니다: if (text is "SIM_DISTORTION_ABLE" or "SIM_DISTORTION_COMPLETE") |
| 1984 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_MELSEC_ADDRESS("SIM_DISTORTION", text.EndsWith("ABLE", StringComparison.Ordinal) ? 0 : 2, null, 0) |
| 1984 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.EndsWith("ABLE", StringComparison.Ordinal) |
| 1984 | conditional-expression | 조건에 따라 결과식을 선택합니다: text.EndsWith("ABLE", StringComparison.Ordinal) ? 0 : 2 |
| 1984 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_MELSEC_ADDRESS("SIM_DISTORTION", text.EndsWith("ABLE", StringComparison.Ordinal) ? 0 : 2, null, 0); |
| 1985 | local-declaration | 지역 변수를 선언합니다: var bitIndex = (int? )null; |
| 1985 | variable-initializer | 변수의 초기값을 지정합니다: bitIndex = (int? )null |
| 1986 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.IndexOf('.', StringComparison.Ordinal) |
| 1986 | local-declaration | 지역 변수를 선언합니다: var bitSeparatorIndex = text.IndexOf('.', StringComparison.Ordinal); |
| 1986 | variable-initializer | 변수의 초기값을 지정합니다: bitSeparatorIndex = text.IndexOf('.', StringComparison.Ordinal) |
| 1987 | if | 조건에 따라 분기합니다: if (bitSeparatorIndex >= 0) |
| 1989 | local-declaration | 지역 변수를 선언합니다: var bitText = text[(bitSeparatorIndex + 1)..]; |
| 1989 | variable-initializer | 변수의 초기값을 지정합니다: bitText = text[(bitSeparatorIndex + 1)..] |
| 1990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(bitText) |
| 1990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(bitText, NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var parsedBit) |
| 1990 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(bitText) &#124;&#124; !int.TryParse(bitText, NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var parsedBit) &#124;&#124; parsedBit < 0 &#124;&#124; parsedBit > 15) |
| 1992 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FormatException($"MELSEC bit index is invalid: {value}") |
| 1992 | throw | 예외를 발생/전달합니다: throw new FormatException($"MELSEC bit index is invalid: {value}"); |
| 1995 | assignment | 값을 대상에 대입합니다: bitIndex = parsedBit |
| 1996 | assignment | 값을 대상에 대입합니다: text = text[..bitSeparatorIndex] |
| 2001 | local-declaration | 지역 변수를 선언합니다: string[] devices = ["SM", "SD", "SB", "SW", "ZR", "X", "Y", "L", "M", "F", "D", "V", "R", "B", "W"]; |
| 2001 | variable-initializer | 변수의 초기값을 지정합니다: devices = ["SM", "SD", "SB", "SW", "ZR", "X", "Y", "L", "M", "F", "D", "V", "R", "B", "W"] |
| 2002 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: devices.FirstOrDefault(prefix => text.StartsWith(prefix, StringComparison.Ordinal)) |
| 2002 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.StartsWith(prefix, StringComparison.Ordinal) |
| 2002 | local-declaration | 지역 변수를 선언합니다: var device = devices.FirstOrDefault(prefix => text.StartsWith(prefix, StringComparison.Ordinal)); |
| 2002 | variable-initializer | 변수의 초기값을 지정합니다: device = devices.FirstOrDefault(prefix => text.StartsWith(prefix, StringComparison.Ordinal)) |
| 2003 | if | 조건에 따라 분기합니다: if (device is null &#124;&#124; device.Length >= text.Length) |
| 2005 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FormatException($"MELSEC address is invalid: {value}") |
| 2005 | throw | 예외를 발생/전달합니다: throw new FormatException($"MELSEC address is invalid: {value}"); |
| 2008 | local-declaration | 지역 변수를 선언합니다: var numberText = text[device.Length..]; |
| 2008 | variable-initializer | 변수의 초기값을 지정합니다: numberText = text[device.Length..] |
| 2009 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseDeviceNumber(device, numberText) |
| 2009 | local-declaration | 지역 변수를 선언합니다: var number = ParseDeviceNumber(device, numberText); |
| 2009 | variable-initializer | 변수의 초기값을 지정합니다: number = ParseDeviceNumber(device, numberText) |
| 2010 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_MELSEC_ADDRESS(device, number, bitIndex, GetMelsecNetDeviceType(device)) |
| 2010 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMelsecNetDeviceType(device) |
| 2010 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_MELSEC_ADDRESS(device, number, bitIndex, GetMelsecNetDeviceType(device)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseAddress"]
 N0["L1983 if"]
 M -->|포함| N0
 N1["L1987 if"]
 M -->|포함| N1
 N2["L1990 if"]
 N1 -->|포함| N2
 N3["L2003 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseDeviceNumber` · L2013–2027

[Drilling.Common/Interface/Melsec/CMelsec.cs:2013–2027](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2013-L2027)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.ParseDeviceNumber(string, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| device | string | None | False /  |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2009–2009](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2009-L2009) | ParseDeviceNumber | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2015 | value.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2017 | int.Parse | resolved | int int.Parse(string, System.Globalization.NumberStyles, System.IFormatProvider?) |
| 2020 | value.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 2022 | int.Parse | resolved | int int.Parse(string, System.Globalization.NumberStyles, System.IFormatProvider?) |
| 2025 | IsHexDevice | resolved | bool Drilling.Common.Interface.CMelsec.IsHexDevice(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2029 |
| 2026 | int.Parse | resolved | int int.Parse(string, System.Globalization.NumberStyles, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2015 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.StartsWith("0X", StringComparison.OrdinalIgnoreCase) |
| 2015 | if | 조건에 따라 분기합니다: if (value.StartsWith("0X", StringComparison.OrdinalIgnoreCase)) |
| 2017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.Parse(value[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture) |
| 2017 | return | 호출자에게 값 또는 제어를 반환합니다: return int.Parse(value[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture); |
| 2020 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.EndsWith("H", StringComparison.OrdinalIgnoreCase) |
| 2020 | if | 조건에 따라 분기합니다: if (value.EndsWith("H", StringComparison.OrdinalIgnoreCase)) |
| 2022 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.Parse(value[..^1], NumberStyles.HexNumber, CultureInfo.InvariantCulture) |
| 2022 | return | 호출자에게 값 또는 제어를 반환합니다: return int.Parse(value[..^1], NumberStyles.HexNumber, CultureInfo.InvariantCulture); |
| 2025 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsHexDevice(device) |
| 2025 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsHexDevice(device) ? NumberStyles.HexNumber : NumberStyles.Integer |
| 2025 | local-declaration | 지역 변수를 선언합니다: var style = IsHexDevice(device) ? NumberStyles.HexNumber : NumberStyles.Integer; |
| 2025 | variable-initializer | 변수의 초기값을 지정합니다: style = IsHexDevice(device) ? NumberStyles.HexNumber : NumberStyles.Integer |
| 2026 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.Parse(value, style, CultureInfo.InvariantCulture) |
| 2026 | return | 호출자에게 값 또는 제어를 반환합니다: return int.Parse(value, style, CultureInfo.InvariantCulture); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseDeviceNumber"]
 N0["L2015 if"]
 M -->|포함| N0
 N1["L2020 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsHexDevice` · L2029–2032

[Drilling.Common/Interface/Melsec/CMelsec.cs:2029–2032](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2029-L2032)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsHexDevice(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| device | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2025–2025](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2025-L2025) | IsHexDevice | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2031 | return | 호출자에게 값 또는 제어를 반환합니다: return device is "X" or "Y" or "B" or "W" or "SB" or "SW"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetMelsecNetDeviceType` · L2034–2077

[Drilling.Common/Interface/Melsec/CMelsec.cs:2034–2077](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2034-L2077)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.GetMelsecNetDeviceType(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| device | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2010–2010](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2010-L2010) | GetMelsecNetDeviceType | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2076 | EvaluateDeviceSwitch1 | resolved | int EvaluateDeviceSwitch1() · Drilling.Common/Interface/Melsec/CMelsec.cs:2036 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2076 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EvaluateDeviceSwitch1() |
| 2076 | return | 호출자에게 값 또는 제어를 반환합니다: return EvaluateDeviceSwitch1(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `EvaluateDeviceSwitch1` · L2036–2074

[Drilling.Common/Interface/Melsec/CMelsec.cs:2036–2074](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2036-L2074)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int EvaluateDeviceSwitch1() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2076–2076](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2076-L2076) | EvaluateDeviceSwitch1 | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2072 | new NotSupportedException | resolved | System.NotSupportedException.NotSupportedException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2038 | local-declaration | 지역 변수를 선언합니다: var switchValue = device; |
| 2038 | variable-initializer | 변수의 초기값을 지정합니다: switchValue = device |
| 2039 | switch | 값에 따라 분기합니다: switch (switchValue) |
| 2041 | case | 분기값/패턴의 구간입니다: case "X": |
| 2042 | return | 호출자에게 값 또는 제어를 반환합니다: return 1; |
| 2043 | case | 분기값/패턴의 구간입니다: case "Y": |
| 2044 | return | 호출자에게 값 또는 제어를 반환합니다: return 2; |
| 2045 | case | 분기값/패턴의 구간입니다: case "L": |
| 2046 | return | 호출자에게 값 또는 제어를 반환합니다: return 3; |
| 2047 | case | 분기값/패턴의 구간입니다: case "M": |
| 2048 | return | 호출자에게 값 또는 제어를 반환합니다: return 4; |
| 2049 | case | 분기값/패턴의 구간입니다: case "SM": |
| 2050 | return | 호출자에게 값 또는 제어를 반환합니다: return 5; |
| 2051 | case | 분기값/패턴의 구간입니다: case "F": |
| 2052 | return | 호출자에게 값 또는 제어를 반환합니다: return 6; |
| 2053 | case | 분기값/패턴의 구간입니다: case "D": |
| 2054 | return | 호출자에게 값 또는 제어를 반환합니다: return 13; |
| 2055 | case | 분기값/패턴의 구간입니다: case "SD": |
| 2056 | return | 호출자에게 값 또는 제어를 반환합니다: return 14; |
| 2057 | case | 분기값/패턴의 구간입니다: case "V": |
| 2058 | return | 호출자에게 값 또는 제어를 반환합니다: return 30; |
| 2059 | case | 분기값/패턴의 구간입니다: case "R": |
| 2060 | return | 호출자에게 값 또는 제어를 반환합니다: return 22; |
| 2061 | case | 분기값/패턴의 구간입니다: case "B": |
| 2062 | return | 호출자에게 값 또는 제어를 반환합니다: return 23; |
| 2063 | case | 분기값/패턴의 구간입니다: case "W": |
| 2064 | return | 호출자에게 값 또는 제어를 반환합니다: return 24; |
| 2065 | case | 분기값/패턴의 구간입니다: case "SB": |
| 2066 | return | 호출자에게 값 또는 제어를 반환합니다: return 25; |
| 2067 | case | 분기값/패턴의 구간입니다: case "SW": |
| 2068 | return | 호출자에게 값 또는 제어를 반환합니다: return 28; |
| 2069 | case | 분기값/패턴의 구간입니다: case "ZR": |
| 2070 | return | 호출자에게 값 또는 제어를 반환합니다: return 220; |
| 2071 | case | 분기값/패턴의 구간입니다: default: |
| 2072 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new NotSupportedException($"MELSEC device is not supported: {device}") |
| 2072 | throw | 예외를 발생/전달합니다: throw new NotSupportedException($"MELSEC device is not supported: {device}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EvaluateDeviceSwitch1"]
 N0["L2039 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RequireWordBit` · L2079–2087

[Drilling.Common/Interface/Melsec/CMelsec.cs:2079–2087](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2079-L2087)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.RequireWordBit(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L260-L260) | RequireWordBit | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:491–491](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L491-L491) | RequireWordBit | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:502–502](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L502-L502) | RequireWordBit | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1546–1546](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1546-L1546) | RequireWordBit | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2086 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2086 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2081 | if | 조건에 따라 분기합니다: if (address.BitIndex is { } bitIndex) |
| 2083 | return | 호출자에게 값 또는 제어를 반환합니다: return bitIndex; |
| 2086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC BIT address must include bit index such as W23458.0: {FormatMap(data)}") |
| 2086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |
| 2086 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC BIT address must include bit index such as W23458.0: {FormatMap(data)}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RequireWordBit"]
 N0["L2081 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WordsToInt32` · L2089–2097

[Drilling.Common/Interface/Melsec/CMelsec.cs:2089–2097](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2089-L2097)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| words | System.Collections.Generic.IReadOnlyList<ushort> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:243–243](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L243-L243) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:246–246](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L246-L246) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:247–247](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L247-L247) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:248–248](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L248-L248) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L304-L304) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:522–522](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L522-L522) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:560–560](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L560-L560) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2518–2518](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2518-L2518) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2989–2989](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2989-L2989) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2991–2991](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2991-L2991) | WordsToInt32 | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3086–3086](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3086-L3086) | WordsToInt32 | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2091 | if | 조건에 따라 분기합니다: if (words.Count <= 1) |
| 2093 | conditional-expression | 조건에 따라 결과식을 선택합니다: words.Count == 0 ? 0 : words[0] |
| 2093 | return | 호출자에게 값 또는 제어를 반환합니다: return words.Count == 0 ? 0 : words[0]; |
| 2096 | return | 호출자에게 값 또는 제어를 반환합니다: return unchecked((int)(words[0] &#124; ((uint)words[1] << 16))); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WordsToInt32"]
 N0["L2091 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Int32ToWords` · L2099–2109

[Drilling.Common/Interface/Melsec/CMelsec.cs:2099–2109](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2099-L2109)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | ushort[] |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |
| wordCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:533–533](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L533-L533) | Int32ToWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:578–578](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L578-L578) | Int32ToWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1564–1564](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1564-L1564) | Int32ToWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1569–1569](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1569-L1569) | Int32ToWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2483–2483](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2483-L2483) | Int32ToWords | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2101 | local-declaration | 지역 변수를 선언합니다: var words = new ushort[wordCount]; |
| 2101 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[wordCount] |
| 2102 | assignment | 값을 대상에 대입합니다: words[0] = (ushort)(value & 0xFFFF) |
| 2103 | if | 조건에 따라 분기합니다: if (wordCount > 1) |
| 2105 | assignment | 값을 대상에 대입합니다: words[1] = (ushort)((value >> 16) & 0xFFFF) |
| 2108 | return | 호출자에게 값 또는 제어를 반환합니다: return words; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Int32ToWords"]
 N0["L2103 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WordsToFloat` · L2111–2117

[Drilling.Common/Interface/Melsec/CMelsec.cs:2111–2117](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2111-L2117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | float Drilling.Common.Interface.CMelsec.WordsToFloat(System.Collections.Generic.IReadOnlyList<ushort>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | float |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| words | System.Collections.Generic.IReadOnlyList<ushort> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:242–242](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L242-L242) | WordsToFloat | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L244-L244) | WordsToFloat | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L304-L304) | WordsToFloat | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:556–556](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L556-L556) | WordsToFloat | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2993–2993](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2993-L2993) | WordsToFloat | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2114 | BinaryPrimitives.WriteUInt16LittleEndian | resolved | void System.Buffers.Binary.BinaryPrimitives.WriteUInt16LittleEndian(System.Span<byte>, ushort) |
| 2114 | bytes.AsSpan | resolved | System.Span<byte> byte[].AsSpan<byte>(int, int) |
| 2115 | BinaryPrimitives.WriteUInt16LittleEndian | resolved | void System.Buffers.Binary.BinaryPrimitives.WriteUInt16LittleEndian(System.Span<byte>, ushort) |
| 2115 | bytes.AsSpan | resolved | System.Span<byte> byte[].AsSpan<byte>(int, int) |
| 2116 | BitConverter.ToSingle | resolved | float System.BitConverter.ToSingle(byte[], int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2113 | local-declaration | 지역 변수를 선언합니다: var bytes = new byte[4]; |
| 2113 | variable-initializer | 변수의 초기값을 지정합니다: bytes = new byte[4] |
| 2114 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BinaryPrimitives.WriteUInt16LittleEndian(bytes.AsSpan(0, 2), words.Count > 0 ? words[0] : (ushort)0) |
| 2114 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bytes.AsSpan(0, 2) |
| 2114 | conditional-expression | 조건에 따라 결과식을 선택합니다: words.Count > 0 ? words[0] : (ushort)0 |
| 2115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BinaryPrimitives.WriteUInt16LittleEndian(bytes.AsSpan(2, 2), words.Count > 1 ? words[1] : (ushort)0) |
| 2115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bytes.AsSpan(2, 2) |
| 2115 | conditional-expression | 조건에 따라 결과식을 선택합니다: words.Count > 1 ? words[1] : (ushort)0 |
| 2116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BitConverter.ToSingle(bytes, 0) |
| 2116 | return | 호출자에게 값 또는 제어를 반환합니다: return BitConverter.ToSingle(bytes, 0); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FloatToWords` · L2119–2130

[Drilling.Common/Interface/Melsec/CMelsec.cs:2119–2130](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2119-L2130)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | ushort[] Drilling.Common.Interface.CMelsec.FloatToWords(float, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | ushort[] |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | float | None | False /  |
| wordCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:578–578](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L578-L578) | FloatToWords | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1573–1573](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1573-L1573) | FloatToWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2121 | BitConverter.GetBytes | resolved | byte[] System.BitConverter.GetBytes(float) |
| 2123 | BinaryPrimitives.ReadUInt16LittleEndian | resolved | ushort System.Buffers.Binary.BinaryPrimitives.ReadUInt16LittleEndian(System.ReadOnlySpan<byte>) |
| 2123 | bytes.AsSpan | resolved | System.Span<byte> byte[].AsSpan<byte>(int, int) |
| 2126 | BinaryPrimitives.ReadUInt16LittleEndian | resolved | ushort System.Buffers.Binary.BinaryPrimitives.ReadUInt16LittleEndian(System.ReadOnlySpan<byte>) |
| 2126 | bytes.AsSpan | resolved | System.Span<byte> byte[].AsSpan<byte>(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BitConverter.GetBytes(value) |
| 2121 | local-declaration | 지역 변수를 선언합니다: var bytes = BitConverter.GetBytes(value); |
| 2121 | variable-initializer | 변수의 초기값을 지정합니다: bytes = BitConverter.GetBytes(value) |
| 2122 | local-declaration | 지역 변수를 선언합니다: var words = new ushort[wordCount]; |
| 2122 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[wordCount] |
| 2123 | assignment | 값을 대상에 대입합니다: words[0] = BinaryPrimitives.ReadUInt16LittleEndian(bytes.AsSpan(0, 2)) |
| 2123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BinaryPrimitives.ReadUInt16LittleEndian(bytes.AsSpan(0, 2)) |
| 2123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bytes.AsSpan(0, 2) |
| 2124 | if | 조건에 따라 분기합니다: if (wordCount > 1) |
| 2126 | assignment | 값을 대상에 대입합니다: words[1] = BinaryPrimitives.ReadUInt16LittleEndian(bytes.AsSpan(2, 2)) |
| 2126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BinaryPrimitives.ReadUInt16LittleEndian(bytes.AsSpan(2, 2)) |
| 2126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: bytes.AsSpan(2, 2) |
| 2129 | return | 호출자에게 값 또는 제어를 반환합니다: return words; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FloatToWords"]
 N0["L2124 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadMelsecNetOption` · L2132–2149

[Drilling.Common/Interface/Melsec/CMelsec.cs:2132–2149](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2132-L2149)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:730–730](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L730-L730) | ReadMelsecNetOption | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:812–812](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L812-L812) | ReadMelsecNetOption | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1676–1676](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1676-L1676) | ReadMelsecNetOption | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1785–1785](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1785-L1785) | ReadMelsecNetOption | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2396–2396](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2396-L2396) | ReadMelsecNetOption | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2136 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2141 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2144 | ReadMelsecNetShortArgument | resolved | short Drilling.Common.Interface.CMelsec.ReadMelsecNetShortArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2151 |
| 2145 | ReadMelsecNetIntArgument | resolved | int Drilling.Common.Interface.CMelsec.ReadMelsecNetIntArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2162 |
| 2146 | ReadMelsecNetIntArgument | resolved | int Drilling.Common.Interface.CMelsec.ReadMelsecNetIntArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2162 |
| 2148 | new ST_MELSEC_NET_OPTION | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION.ST_MELSEC_NET_OPTION(short, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2346 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2134 | if | 조건에 따라 분기합니다: if (data.InterfaceType != EN_INTERFACE_TYPE.MelsecNet) |
| 2136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC requires the MELSEC_NET interface type.") |
| 2136 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC requires the MELSEC_NET interface type."); |
| 2139 | if | 조건에 따라 분기합니다: if (data.Arguments.Count < 3) |
| 2141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC_NET requires ARG1 channel, ARG2 network number, and ARG3 station number: " + data.NickName) |
| 2141 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC_NET requires ARG1 channel, ARG2 network number, and ARG3 station number: " + data.NickName); |
| 2144 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetShortArgument(data, 0, "ARG1/CHANNEL_NO") |
| 2144 | local-declaration | 지역 변수를 선언합니다: short channelNo = ReadMelsecNetShortArgument(data, 0, "ARG1/CHANNEL_NO"); |
| 2144 | variable-initializer | 변수의 초기값을 지정합니다: channelNo = ReadMelsecNetShortArgument(data, 0, "ARG1/CHANNEL_NO") |
| 2145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetIntArgument(data, 1, "ARG2/NETWORK_NO") |
| 2145 | local-declaration | 지역 변수를 선언합니다: int networkNo = ReadMelsecNetIntArgument(data, 1, "ARG2/NETWORK_NO"); |
| 2145 | variable-initializer | 변수의 초기값을 지정합니다: networkNo = ReadMelsecNetIntArgument(data, 1, "ARG2/NETWORK_NO") |
| 2146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetIntArgument(data, 2, "ARG3/STATION_NO") |
| 2146 | local-declaration | 지역 변수를 선언합니다: int stationNo = ReadMelsecNetIntArgument(data, 2, "ARG3/STATION_NO"); |
| 2146 | variable-initializer | 변수의 초기값을 지정합니다: stationNo = ReadMelsecNetIntArgument(data, 2, "ARG3/STATION_NO") |
| 2148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_MELSEC_NET_OPTION(channelNo, networkNo, stationNo) |
| 2148 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_MELSEC_NET_OPTION(channelNo, networkNo, stationNo); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadMelsecNetOption"]
 N0["L2134 if"]
 M -->|포함| N0
 N1["L2139 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadMelsecNetShortArgument` · L2151–2160

[Drilling.Common/Interface/Melsec/CMelsec.cs:2151–2160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2151-L2160)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | short Drilling.Common.Interface.CMelsec.ReadMelsecNetShortArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | short |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| argumentIndex | int | None | False /  |
| argumentName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2144–2144](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2144-L2144) | ReadMelsecNetShortArgument | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2153 | ReadMelsecNetIntArgument | resolved | int Drilling.Common.Interface.CMelsec.ReadMelsecNetIntArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2162 |
| 2156 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2156 | value.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetIntArgument(data, argumentIndex, argumentName) |
| 2153 | local-declaration | 지역 변수를 선언합니다: int value = ReadMelsecNetIntArgument(data, argumentIndex, argumentName); |
| 2153 | variable-initializer | 변수의 초기값을 지정합니다: value = ReadMelsecNetIntArgument(data, argumentIndex, argumentName) |
| 2154 | if | 조건에 따라 분기합니다: if (value < short.MinValue &#124;&#124; value > short.MaxValue) |
| 2156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC_NET " + argumentName + " is outside the Int16 range: " + value.ToString(CultureInfo.InvariantCulture)) |
| 2156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString(CultureInfo.InvariantCulture) |
| 2156 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC_NET " + argumentName + " is outside the Int16 range: " + value.ToString(CultureInfo.InvariantCulture)); |
| 2159 | return | 호출자에게 값 또는 제어를 반환합니다: return (short)value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadMelsecNetShortArgument"]
 N0["L2154 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadMelsecNetIntArgument` · L2162–2170

[Drilling.Common/Interface/Melsec/CMelsec.cs:2162–2170](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2162-L2170)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.ReadMelsecNetIntArgument(Drilling.Common.Interface.ST_INTERFACE_DATA, int, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| argumentIndex | int | None | False /  |
| argumentName | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2145–2145](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2145-L2145) | ReadMelsecNetIntArgument | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2146–2146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2146-L2146) | ReadMelsecNetIntArgument | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2153–2153](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2153-L2153) | ReadMelsecNetIntArgument | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2164 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 2166 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(data.Arguments[argumentIndex], NumberStyles.Integer, CultureInfo.InvariantCulture, out int value) |
| 2164 | if | 조건에 따라 분기합니다: if (argumentIndex >= data.Arguments.Count &#124;&#124; !int.TryParse(data.Arguments[argumentIndex], NumberStyles.Integer, CultureInfo.InvariantCulture, out int value)) |
| 2166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC_NET " + argumentName + " is invalid: " + data.NickName) |
| 2166 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC_NET " + argumentName + " is invalid: " + data.NickName); |
| 2169 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadMelsecNetIntArgument"]
 N0["L2164 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteHandshakeLog` · L2172–2179

[Drilling.Common/Interface/Melsec/CMelsec.cs:2172–2179](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2172-L2179)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteHandshakeLog(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| category | string | None | False /  |
| detail | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:969–969](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L969-L969) | WriteHandshakeLog | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1199–1199](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1199-L1199) | WriteHandshakeLog | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1255–1255](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1255-L1255) | WriteHandshakeLog | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1256–1256](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1256-L1256) | WriteHandshakeLog | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1335–1335](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1335-L1335) | WriteHandshakeLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2174 | GetHandshakeInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CMelsec.GetHandshakeInterfaceData(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2190 |
| 2175 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 2178 | .WriteInterfaceCommand | unresolved | None |
| 2178 | FormatWriteCommand | resolved | string Drilling.Common.Interface.CMelsec.FormatWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2200 |
| 2178 | FormatWriteStatus | resolved | string Drilling.Common.Interface.CMelsec.FormatWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2205 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetHandshakeInterfaceData(command) |
| 2174 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA? interfaceData = GetHandshakeInterfaceData(command); |
| 2174 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetHandshakeInterfaceData(command) |
| 2175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 2175 | local-declaration | 지역 변수를 선언합니다: bool simulation = interfaceData != null && IsSimulation(interfaceData); |
| 2175 | variable-initializer | 변수의 초기값을 지정합니다: simulation = interfaceData != null && IsSimulation(interfaceData) |
| 2176 | conditional-expression | 조건에 따라 결과식을 선택합니다: simulation ? "[SIMULATION] " : "" |
| 2176 | local-declaration | 지역 변수를 선언합니다: string prefix = simulation ? "[SIMULATION] " : ""; |
| 2176 | variable-initializer | 변수의 초기값을 지정합니다: prefix = simulation ? "[SIMULATION] " : "" |
| 2177 | conditional-expression | 조건에 따라 결과식을 선택합니다: interfaceData == null ? "MELSEC" : interfaceData.NickName |
| 2177 | local-declaration | 지역 변수를 선언합니다: string nickName = interfaceData == null ? "MELSEC" : interfaceData.NickName; |
| 2177 | variable-initializer | 변수의 초기값을 지정합니다: nickName = interfaceData == null ? "MELSEC" : interfaceData.NickName |
| 2178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceCommand(EN_EQP_MODULE.Melsec, nickName, prefix + category + " " + FormatWriteCommand(command), detail, FormatWriteStatus(command)) |
| 2178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatWriteCommand(command) |
| 2178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatWriteStatus(command) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteHandshakeError` · L2181–2188

[Drilling.Common/Interface/Melsec/CMelsec.cs:2181–2188](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2181-L2188)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteHandshakeError(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand, string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |
| category | string | None | False /  |
| detail | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:918–918](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L918-L918) | WriteHandshakeError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:941–941](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L941-L941) | WriteHandshakeError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:959–959](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L959-L959) | WriteHandshakeError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1306–1306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1306-L1306) | WriteHandshakeError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1361–1361](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1361-L1361) | WriteHandshakeError | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1373–1373](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1373-L1373) | WriteHandshakeError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2183 | GetHandshakeInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CMelsec.GetHandshakeInterfaceData(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2190 |
| 2184 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 2187 | .WriteInterfaceError | unresolved | None |
| 2187 | FormatWriteCommand | resolved | string Drilling.Common.Interface.CMelsec.FormatWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2200 |
| 2187 | FormatWriteStatus | resolved | string Drilling.Common.Interface.CMelsec.FormatWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) · Drilling.Common/Interface/Melsec/CMelsec.cs:2205 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetHandshakeInterfaceData(command) |
| 2183 | local-declaration | 지역 변수를 선언합니다: ST_INTERFACE_DATA? interfaceData = GetHandshakeInterfaceData(command); |
| 2183 | variable-initializer | 변수의 초기값을 지정합니다: interfaceData = GetHandshakeInterfaceData(command) |
| 2184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(interfaceData) |
| 2184 | local-declaration | 지역 변수를 선언합니다: bool simulation = interfaceData != null && IsSimulation(interfaceData); |
| 2184 | variable-initializer | 변수의 초기값을 지정합니다: simulation = interfaceData != null && IsSimulation(interfaceData) |
| 2185 | conditional-expression | 조건에 따라 결과식을 선택합니다: simulation ? "[SIMULATION] " : "" |
| 2185 | local-declaration | 지역 변수를 선언합니다: string prefix = simulation ? "[SIMULATION] " : ""; |
| 2185 | variable-initializer | 변수의 초기값을 지정합니다: prefix = simulation ? "[SIMULATION] " : "" |
| 2186 | conditional-expression | 조건에 따라 결과식을 선택합니다: interfaceData == null ? "MELSEC" : interfaceData.NickName |
| 2186 | local-declaration | 지역 변수를 선언합니다: string nickName = interfaceData == null ? "MELSEC" : interfaceData.NickName; |
| 2186 | variable-initializer | 변수의 초기값을 지정합니다: nickName = interfaceData == null ? "MELSEC" : interfaceData.NickName |
| 2187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceError(EN_EQP_MODULE.Melsec, nickName, prefix + category + " " + FormatWriteCommand(command), FormatWriteStatus(command) + " / " + detail) |
| 2187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatWriteCommand(command) |
| 2187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatWriteStatus(command) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetHandshakeInterfaceData` · L2190–2198

[Drilling.Common/Interface/Melsec/CMelsec.cs:2190–2198](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2190-L2198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CMelsec.GetHandshakeInterfaceData(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_INTERFACE_DATA? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2174–2174](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2174-L2174) | GetHandshakeInterfaceData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2183–2183](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2183-L2183) | GetHandshakeInterfaceData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2197 | _interfaceManager.GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CInterfaceManager.GetInterfaceData(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:348 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2192 | if | 조건에 따라 분기합니다: if (command.WriteData == null) |
| 2194 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 2197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, command.WriteData.DeviceNo) |
| 2197 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, command.WriteData.DeviceNo); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetHandshakeInterfaceData"]
 N0["L2192 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatWriteCommand` · L2200–2203

[Drilling.Common/Interface/Melsec/CMelsec.cs:2200–2203](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2200-L2203)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.FormatWriteCommand(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2178–2178](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2178-L2178) | FormatWriteCommand | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2187–2187](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2187-L2187) | FormatWriteCommand | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2202 | command.RequestNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2202 | FormatCommandValue | resolved | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) · Drilling.Common/Interface/Melsec/CMelsec.cs:2210 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.RequestNo.ToString(CultureInfo.InvariantCulture) |
| 2202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(command.ExpectedValue) |
| 2202 | return | 호출자에게 값 또는 제어를 반환합니다: return "RequestNo=" + command.RequestNo.ToString(CultureInfo.InvariantCulture) + ", WriteId=" + command.WriteId + ", ReadbackId=" + command.ReadbackId + ", Expected=" + FormatCommandValue(command.ExpectedValue); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatWriteStatus` · L2205–2208

[Drilling.Common/Interface/Melsec/CMelsec.cs:2205–2208](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2205-L2208)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.FormatWriteStatus(Drilling.Common.Interface.CMelsec.CMelsecWriteCommand) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2178–2178](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2178-L2178) | FormatWriteStatus | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2187–2187](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2187-L2187) | FormatWriteStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2207 | command.TimeoutMs.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2207 | command.CurrentRetryCount.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2207 | command.RetryCount.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2207 | command.ConfirmReadCycle.ToString | resolved | string long.ToString(System.IFormatProvider?) |
| 2207 | command.MinimumReadCycle.ToString | resolved | string long.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.TimeoutMs.ToString(CultureInfo.InvariantCulture) |
| 2207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.CurrentRetryCount.ToString(CultureInfo.InvariantCulture) |
| 2207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.RetryCount.ToString(CultureInfo.InvariantCulture) |
| 2207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.ConfirmReadCycle.ToString(CultureInfo.InvariantCulture) |
| 2207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: command.MinimumReadCycle.ToString(CultureInfo.InvariantCulture) |
| 2207 | return | 호출자에게 값 또는 제어를 반환합니다: return "Result=" + command.Result + ", Actual=" + command.ActualValue + ", TimeoutMs=" + command.TimeoutMs.ToString(CultureInfo.InvariantCulture) + ", Retry=" + command.CurrentRetryCount.ToString(CultureInfo.InvariantCulture) + "/ |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatCommandValue` · L2210–2238

[Drilling.Common/Interface/Melsec/CMelsec.cs:2210–2238](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2210-L2238)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | object? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:993–993](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L993-L993) | FormatCommandValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:993–993](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L993-L993) | FormatCommandValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1240–1240](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1240-L1240) | FormatCommandValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2202–2202](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2202-L2202) | FormatCommandValue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2330–2330](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2330-L2330) | FormatCommandValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2224 | doubleValue.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 2229 | floatValue.ToString | resolved | string float.ToString(string?, System.IFormatProvider?) |
| 2234 | formattable.ToString | resolved · 동적 구현 선택 가능 | string System.IFormattable.ToString(string?, System.IFormatProvider?) |
| 2237 | value.ToString | resolved · 동적 구현 선택 가능 | string? object.ToString() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2212 | if | 조건에 따라 분기합니다: if (value == null) |
| 2214 | return | 호출자에게 값 또는 제어를 반환합니다: return ""; |
| 2217 | if | 조건에 따라 분기합니다: if (value is bool boolValue) |
| 2219 | conditional-expression | 조건에 따라 결과식을 선택합니다: boolValue ? "1" : "0" |
| 2219 | return | 호출자에게 값 또는 제어를 반환합니다: return boolValue ? "1" : "0"; |
| 2222 | if | 조건에 따라 분기합니다: if (value is double doubleValue) |
| 2224 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: doubleValue.ToString("R", CultureInfo.InvariantCulture) |
| 2224 | return | 호출자에게 값 또는 제어를 반환합니다: return doubleValue.ToString("R", CultureInfo.InvariantCulture); |
| 2227 | if | 조건에 따라 분기합니다: if (value is float floatValue) |
| 2229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: floatValue.ToString("R", CultureInfo.InvariantCulture) |
| 2229 | return | 호출자에게 값 또는 제어를 반환합니다: return floatValue.ToString("R", CultureInfo.InvariantCulture); |
| 2232 | if | 조건에 따라 분기합니다: if (value is IFormattable formattable) |
| 2234 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: formattable.ToString(null, CultureInfo.InvariantCulture) |
| 2234 | return | 호출자에게 값 또는 제어를 반환합니다: return formattable.ToString(null, CultureInfo.InvariantCulture) ?? ""; |
| 2237 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString() |
| 2237 | return | 호출자에게 값 또는 제어를 반환합니다: return value.ToString() ?? ""; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FormatCommandValue"]
 N0["L2212 if"]
 M -->|포함| N0
 N1["L2217 if"]
 M -->|포함| N1
 N2["L2222 if"]
 M -->|포함| N2
 N3["L2227 if"]
 M -->|포함| N3
 N4["L2232 if"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteErrorLog` · L2240–2243

[Drilling.Common/Interface/Melsec/CMelsec.cs:2240–2243](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2240-L2243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteErrorLog(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.ST_INTERFACE_DATA, string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| interfaceData | Drilling.Common.Interface.ST_INTERFACE_DATA | None | False /  |
| command | string | None | False /  |
| detail | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1892–1892](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1892-L1892) | WriteErrorLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2242 | .WriteInterfaceError | unresolved | None |
| 2242 | FormatMap | resolved | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2245 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .WriteInterfaceError(EN_EQP_MODULE.Melsec, interfaceData.NickName, command, $"{FormatMap(data)} / RAW=N/A &#124; VALUE=N/A &#124; RESULT=IO_ERROR / {detail}") |
| 2242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatMap(data) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatMap` · L2245–2248

[Drilling.Common/Interface/Melsec/CMelsec.cs:2245–2248](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2245-L2248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.FormatMap(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L249-L249) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:255–255](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L255-L255) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:264–264](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L264-L264) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:269–269](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L269-L269) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1070–1070](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1070-L1070) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1655–1655](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1655-L1655) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1681–1681](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1681-L1681) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1744–1744](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1744-L1744) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1767–1767](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1767-L1767) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1790–1790](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1790-L1790) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1831–1831](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1831-L1831) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1946–1946](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1946-L1946) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1964–1964](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1964-L1964) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1977–1977](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1977-L1977) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2086–2086](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2086-L2086) | FormatMap | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2242–2242](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2242-L2242) | FormatMap | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2247 | return | 호출자에게 값 또는 제어를 반환합니다: return $"{data.Id}({data.Address}, {data.DataType}, MELSEC_{data.DeviceNo})"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeId` · L2250–2253

[Drilling.Common/Interface/Melsec/CMelsec.cs:2250–2253](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2250-L2253)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.NormalizeId(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:49–49](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L49-L49) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:63–63](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs#L63-L63) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L282-L282) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:311–311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L311-L311) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:460–460](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L460-L460) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:908–908](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L908-L908) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:908–908](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L908-L908) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1598–1598](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1598-L1598) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2353–2353](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2353-L2353) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2406–2406](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2406-L2406) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2560–2560](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2560-L2560) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2570–2570](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2570-L2570) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2580–2580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2580-L2580) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2662–2662](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2662-L2662) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2743–2743](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2743-L2743) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2809–2809](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2809-L2809) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2938–2938](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2938-L2938) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3087–3087](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3087-L3087) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3103–3103](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3103-L3103) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3123–3123](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3123-L3123) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3143–3143](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3143-L3143) | NormalizeId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3163–3163](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3163-L3163) | NormalizeId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2252 | id.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 2252 | id.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Trim().ToUpperInvariant() |
| 2252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Trim() |
| 2252 | return | 호출자에게 값 또는 제어를 반환합니다: return id.Trim().ToUpperInvariant(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Open` · L2257–2257

[Drilling.Common/Interface/Melsec/CMelsec.cs:2257–2257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2257-L2257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.Open |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Close` · L2258–2258

[Drilling.Common/Interface/Melsec/CMelsec.cs:2258–2258](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2258-L2258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.Close |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadBit` · L2259–2259

[Drilling.Common/Interface/Melsec/CMelsec.cs:2259–2259](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2259-L2259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadBit |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteBit` · L2260–2260

[Drilling.Common/Interface/Melsec/CMelsec.cs:2260–2260](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2260-L2260)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteBit |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadWord` · L2261–2261

[Drilling.Common/Interface/Melsec/CMelsec.cs:2261–2261](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2261-L2261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadWord |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteWord` · L2262–2262

[Drilling.Common/Interface/Melsec/CMelsec.cs:2262–2262](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2262-L2262)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteWord |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadDouble` · L2263–2263

[Drilling.Common/Interface/Melsec/CMelsec.cs:2263–2263](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2263-L2263)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadDouble |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteDouble` · L2264–2264

[Drilling.Common/Interface/Melsec/CMelsec.cs:2264–2264](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2264-L2264)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteDouble |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteDoubleArray` · L2265–2265

[Drilling.Common/Interface/Melsec/CMelsec.cs:2265–2265](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2265-L2265)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteDoubleArray |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadDoubleArray` · L2266–2266

[Drilling.Common/Interface/Melsec/CMelsec.cs:2266–2266](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2266-L2266)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadDoubleArray |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadString` · L2267–2267

[Drilling.Common/Interface/Melsec/CMelsec.cs:2267–2267](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2267-L2267)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.ReadString |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteString` · L2268–2268

[Drilling.Common/Interface/Melsec/CMelsec.cs:2268–2268](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2268-L2268)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND.WriteString |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L2273–2280

[Drilling.Common/Interface/Melsec/CMelsec.cs:2273–2280](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2273-L2280)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| command | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND | None | False /  |
| id | string | None | False /  |
| value | object? | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| suppressLog | bool | None | True / false |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:333–333](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L333-L333) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:340–340](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L340-L340) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:347–347](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L347-L347) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:353–353](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L353-L353) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:359–359](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L359-L359) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:366–366](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L366-L366) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:373–373](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L373-L373) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:379–379](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L379-L379) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:386–386](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L386-L386) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:393–393](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L393-L393) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:399–399](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L399-L399) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:406–406](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L406-L406) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L413-L413) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:777–777](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L777-L777) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2384–2384](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2384-L2384) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2458–2458](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2458-L2458) | new CMelsecThreadRequest | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2464–2464](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2464-L2464) | new CMelsecThreadRequest | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2275 | assignment | 값을 대상에 대입합니다: Command = command |
| 2276 | assignment | 값을 대상에 대입합니다: Id = id |
| 2277 | assignment | 값을 대상에 대입합니다: Value = value |
| 2278 | assignment | 값을 대상에 대입합니다: CancellationToken = cancellationToken |
| 2279 | assignment | 값을 대상에 대입합니다: SuppressLog = suppressLog |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Command` · L2282–2282

[Drilling.Common/Interface/Melsec/CMelsec.cs:2282–2282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2282-L2282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Command |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Command` · L2282–2282

[Drilling.Common/Interface/Melsec/CMelsec.cs:2282–2282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2282-L2282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Command.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `QueuedTimestamp` · L2283–2283

[Drilling.Common/Interface/Melsec/CMelsec.cs:2283–2283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2283-L2283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_QueuedTimestamp` · L2283–2283

[Drilling.Common/Interface/Melsec/CMelsec.cs:2283–2283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2283-L2283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_QueuedTimestamp` · L2283–2283

[Drilling.Common/Interface/Melsec/CMelsec.cs:2283–2283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2283-L2283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.QueuedTimestamp.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | long | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Id` · L2284–2284

[Drilling.Common/Interface/Melsec/CMelsec.cs:2284–2284](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2284-L2284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Id |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Id` · L2284–2284

[Drilling.Common/Interface/Melsec/CMelsec.cs:2284–2284](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2284-L2284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Id.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Value` · L2285–2285

[Drilling.Common/Interface/Melsec/CMelsec.cs:2285–2285](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2285-L2285)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Value |
| 접근/수식자 | Public / public |
| 반환/값 타입 | object? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Value` · L2285–2285

[Drilling.Common/Interface/Melsec/CMelsec.cs:2285–2285](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2285-L2285)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Value.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | object? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CancellationToken` · L2286–2286

[Drilling.Common/Interface/Melsec/CMelsec.cs:2286–2286](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2286-L2286)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationToken Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CancellationToken |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.CancellationToken |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CancellationToken` · L2286–2286

[Drilling.Common/Interface/Melsec/CMelsec.cs:2286–2286](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2286-L2286)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationToken Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CancellationToken.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Threading.CancellationToken |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SuppressLog` · L2287–2287

[Drilling.Common/Interface/Melsec/CMelsec.cs:2287–2287](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2287-L2287)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.SuppressLog |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SuppressLog` · L2287–2287

[Drilling.Common/Interface/Melsec/CMelsec.cs:2287–2287](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2287-L2287)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.SuppressLog.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Completed` · L2288–2288

[Drilling.Common/Interface/Melsec/CMelsec.cs:2288–2288](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2288-L2288)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.ManualResetEvent Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Completed |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.ManualResetEvent |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2288 | new ManualResetEvent | resolved | System.Threading.ManualResetEvent.ManualResetEvent(bool) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ManualResetEvent(false) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Completed` · L2288–2288

[Drilling.Common/Interface/Melsec/CMelsec.cs:2288–2288](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2288-L2288)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.ManualResetEvent Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Completed.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Threading.ManualResetEvent |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Result` · L2289–2289

[Drilling.Common/Interface/Melsec/CMelsec.cs:2289–2289](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2289-L2289)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result |
| 접근/수식자 | Public / public |
| 반환/값 타입 | object? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Result` · L2289–2289

[Drilling.Common/Interface/Melsec/CMelsec.cs:2289–2289](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2289-L2289)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | object? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_Result` · L2289–2289

[Drilling.Common/Interface/Melsec/CMelsec.cs:2289–2289](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2289-L2289)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Result.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Error` · L2290–2290

[Drilling.Common/Interface/Melsec/CMelsec.cs:2290–2290](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2290-L2290)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Exception? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Exception? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Error` · L2290–2290

[Drilling.Common/Interface/Melsec/CMelsec.cs:2290–2290](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2290-L2290)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Exception? Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Exception? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_Error` · L2290–2290

[Drilling.Common/Interface/Melsec/CMelsec.cs:2290–2290](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2290-L2290)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.Error.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecThreadRequest |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Exception? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L2295–2302

[Drilling.Common/Interface/Melsec/CMelsec.cs:2295–2302](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2295-L2302)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CMelsecWriteCommand(int, string, string, Drilling.Common.Interface.EN_MELSEC_DATA_TYPE, object) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| requestNo | int | None | False /  |
| writeId | string | None | False /  |
| readbackId | string | None | False /  |
| requestedDataType | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE | None | False /  |
| expectedValue | object | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:908–908](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L908-L908) | new CMelsecWriteCommand | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2297 | assignment | 값을 대상에 대입합니다: RequestNo = requestNo |
| 2298 | assignment | 값을 대상에 대입합니다: WriteId = writeId |
| 2299 | assignment | 값을 대상에 대입합니다: ReadbackId = readbackId |
| 2300 | assignment | 값을 대상에 대입합니다: RequestedDataType = requestedDataType |
| 2301 | assignment | 값을 대상에 대입합니다: ExpectedValue = expectedValue |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `RequestNo` · L2304–2304

[Drilling.Common/Interface/Melsec/CMelsec.cs:2304–2304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2304-L2304)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestNo |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_RequestNo` · L2304–2304

[Drilling.Common/Interface/Melsec/CMelsec.cs:2304–2304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2304-L2304)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestNo.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `WriteId` · L2305–2305

[Drilling.Common/Interface/Melsec/CMelsec.cs:2305–2305](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2305-L2305)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteId |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_WriteId` · L2305–2305

[Drilling.Common/Interface/Melsec/CMelsec.cs:2305–2305](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2305-L2305)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteId.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ReadbackId` · L2306–2306

[Drilling.Common/Interface/Melsec/CMelsec.cs:2306–2306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2306-L2306)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ReadbackId` · L2306–2306

[Drilling.Common/Interface/Melsec/CMelsec.cs:2306–2306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2306-L2306)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ReadbackId` · L2306–2306

[Drilling.Common/Interface/Melsec/CMelsec.cs:2306–2306](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2306-L2306)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackId.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `RequestedDataType` · L2307–2307

[Drilling.Common/Interface/Melsec/CMelsec.cs:2307–2307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2307-L2307)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestedDataType |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_RequestedDataType` · L2307–2307

[Drilling.Common/Interface/Melsec/CMelsec.cs:2307–2307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2307-L2307)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RequestedDataType.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ExpectedValue` · L2308–2308

[Drilling.Common/Interface/Melsec/CMelsec.cs:2308–2308](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2308-L2308)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ExpectedValue |
| 접근/수식자 | Public / public |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ExpectedValue` · L2308–2308

[Drilling.Common/Interface/Melsec/CMelsec.cs:2308–2308](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2308-L2308)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ExpectedValue.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ActualValue` · L2309–2309

[Drilling.Common/Interface/Melsec/CMelsec.cs:2309–2309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2309-L2309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ActualValue` · L2309–2309

[Drilling.Common/Interface/Melsec/CMelsec.cs:2309–2309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2309-L2309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ActualValue` · L2309–2309

[Drilling.Common/Interface/Melsec/CMelsec.cs:2309–2309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2309-L2309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ActualValue.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Result` · L2310–2310

[Drilling.Common/Interface/Melsec/CMelsec.cs:2310–2310](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2310-L2310)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Result` · L2310–2310

[Drilling.Common/Interface/Melsec/CMelsec.cs:2310–2310](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2310-L2310)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_Result` · L2310–2310

[Drilling.Common/Interface/Melsec/CMelsec.cs:2310–2310](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2310-L2310)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.Result.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentRetryCount` · L2311–2311

[Drilling.Common/Interface/Melsec/CMelsec.cs:2311–2311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2311-L2311)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CurrentRetryCount` · L2311–2311

[Drilling.Common/Interface/Melsec/CMelsec.cs:2311–2311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2311-L2311)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_CurrentRetryCount` · L2311–2311

[Drilling.Common/Interface/Melsec/CMelsec.cs:2311–2311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2311-L2311)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CurrentRetryCount.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `RetryCount` · L2312–2312

[Drilling.Common/Interface/Melsec/CMelsec.cs:2312–2312](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2312-L2312)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_RetryCount` · L2312–2312

[Drilling.Common/Interface/Melsec/CMelsec.cs:2312–2312](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2312-L2312)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_RetryCount` · L2312–2312

[Drilling.Common/Interface/Melsec/CMelsec.cs:2312–2312](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2312-L2312)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.RetryCount.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `TimeoutMs` · L2313–2313

[Drilling.Common/Interface/Melsec/CMelsec.cs:2313–2313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2313-L2313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_TimeoutMs` · L2313–2313

[Drilling.Common/Interface/Melsec/CMelsec.cs:2313–2313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2313-L2313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_TimeoutMs` · L2313–2313

[Drilling.Common/Interface/Melsec/CMelsec.cs:2313–2313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2313-L2313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.TimeoutMs.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `WriteBeforeReadCycle` · L2314–2314

[Drilling.Common/Interface/Melsec/CMelsec.cs:2314–2314](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2314-L2314)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_WriteBeforeReadCycle` · L2314–2314

[Drilling.Common/Interface/Melsec/CMelsec.cs:2314–2314](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2314-L2314)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_WriteBeforeReadCycle` · L2314–2314

[Drilling.Common/Interface/Melsec/CMelsec.cs:2314–2314](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2314-L2314)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteBeforeReadCycle.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | long | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `MinimumReadCycle` · L2315–2315

[Drilling.Common/Interface/Melsec/CMelsec.cs:2315–2315](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2315-L2315)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_MinimumReadCycle` · L2315–2315

[Drilling.Common/Interface/Melsec/CMelsec.cs:2315–2315](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2315-L2315)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_MinimumReadCycle` · L2315–2315

[Drilling.Common/Interface/Melsec/CMelsec.cs:2315–2315](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2315-L2315)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.MinimumReadCycle.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | long | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ConfirmReadCycle` · L2316–2316

[Drilling.Common/Interface/Melsec/CMelsec.cs:2316–2316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2316-L2316)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ConfirmReadCycle` · L2316–2316

[Drilling.Common/Interface/Melsec/CMelsec.cs:2316–2316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2316-L2316)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ConfirmReadCycle` · L2316–2316

[Drilling.Common/Interface/Melsec/CMelsec.cs:2316–2316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2316-L2316)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ConfirmReadCycle.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | long | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ErrorMessage` · L2317–2317

[Drilling.Common/Interface/Melsec/CMelsec.cs:2317–2317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2317-L2317)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ErrorMessage` · L2317–2317

[Drilling.Common/Interface/Melsec/CMelsec.cs:2317–2317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2317-L2317)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ErrorMessage` · L2317–2317

[Drilling.Common/Interface/Melsec/CMelsec.cs:2317–2317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2317-L2317)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ErrorMessage.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `AttemptStartedAt` · L2318–2318

[Drilling.Common/Interface/Melsec/CMelsec.cs:2318–2318](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2318-L2318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_AttemptStartedAt` · L2318–2318

[Drilling.Common/Interface/Melsec/CMelsec.cs:2318–2318](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2318-L2318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_AttemptStartedAt` · L2318–2318

[Drilling.Common/Interface/Melsec/CMelsec.cs:2318–2318](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2318-L2318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.AttemptStartedAt.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `NextReadAt` · L2319–2319

[Drilling.Common/Interface/Melsec/CMelsec.cs:2319–2319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2319-L2319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_NextReadAt` · L2319–2319

[Drilling.Common/Interface/Melsec/CMelsec.cs:2319–2319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2319-L2319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_NextReadAt` · L2319–2319

[Drilling.Common/Interface/Melsec/CMelsec.cs:2319–2319](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2319-L2319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.NextReadAt.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `WriteData` · L2320–2320

[Drilling.Common/Interface/Melsec/CMelsec.cs:2320–2320](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2320-L2320)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_WriteData` · L2320–2320

[Drilling.Common/Interface/Melsec/CMelsec.cs:2320–2320](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2320-L2320)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_WriteData` · L2320–2320

[Drilling.Common/Interface/Melsec/CMelsec.cs:2320–2320](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2320-L2320)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.WriteData.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ReadbackData` · L2321–2321

[Drilling.Common/Interface/Melsec/CMelsec.cs:2321–2321](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2321-L2321)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ReadbackData` · L2321–2321

[Drilling.Common/Interface/Melsec/CMelsec.cs:2321–2321](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2321-L2321)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ReadbackData` · L2321–2321

[Drilling.Common/Interface/Melsec/CMelsec.cs:2321–2321](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2321-L2321)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.ReadbackData.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.Common.Interface.ST_MELSEC_MAP_DATA? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `CancelRequested` · L2323–2323

[Drilling.Common/Interface/Melsec/CMelsec.cs:2323–2323](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2323-L2323)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CancelRequested |
| 접근/수식자 | Public / public, volatile |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateStatus` · L2324–2341

[Drilling.Common/Interface/Melsec/CMelsec.cs:2324–2341](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2324-L2341)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS Drilling.Common.Interface.CMelsec.CMelsecWriteCommand.CreateStatus() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.CMelsecWriteCommand |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:452–452](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L452-L452) | command.CreateStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2326 | new ST_MELSEC_WRITE_STATUS | resolved | Drilling.Common.Interface.ST_MELSEC_WRITE_STATUS.ST_MELSEC_WRITE_STATUS(int, string, string, string, string, Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT, int, int, int, long, long, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3229 |
| 2330 | FormatCommandValue | resolved | string Drilling.Common.Interface.CMelsec.FormatCommandValue(object?) · Drilling.Common/Interface/Melsec/CMelsec.cs:2210 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_MELSEC_WRITE_STATUS( RequestNo, WriteId, ReadbackId, FormatCommandValue(ExpectedValue), ActualValue, Result, CurrentRetryCount, RetryCount, TimeoutMs, WriteBeforeReadCycle, MinimumReadCycle, ConfirmReadCycle, Erro… |
| 2326 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_MELSEC_WRITE_STATUS( RequestNo, WriteId, ReadbackId, FormatCommandValue(ExpectedValue), ActualValue, Result, CurrentRetryCount, RetryCount, TimeoutMs, WriteBeforeReadCycle, MinimumReadCycle, ConfirmReadCycle, ErrorMe |
| 2330 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatCommandValue(ExpectedValue) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseDevice` · L2350–2387

[Drilling.Common/Interface/Melsec/CMelsec.cs:2350–2387](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2350-L2387)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CloseDevice(int, System.Threading.CancellationToken) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CInterfaceManager.cs:2085–2085](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CInterfaceManager.cs#L2085-L2085) | _melsec.CloseDevice | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2352 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 2353 | GetMapList().Where(row => row.DeviceNo == deviceNo).Select(row => NormalizeId(row.Id)).ToHashSet | resolved | System.Collections.Generic.HashSet<string> System.Collections.Generic.IEnumerable<string>.ToHashSet<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 2353 | GetMapList().Where(row => row.DeviceNo == deviceNo).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Select<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>) |
| 2353 | GetMapList().Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 2353 | GetMapList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.GetMapList(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:298 |
| 2353 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2360 | _requestQueue.Dequeue | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Dequeue() |
| 2361 | ids.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 2361 | Equals | resolved | bool object.Equals(object?, object?) |
| 2363 | new OperationCanceledException | resolved | System.OperationCanceledException.OperationCanceledException(string?) |
| 2364 | pending.Completed.Set | resolved | bool System.Threading.EventWaitHandle.Set() |
| 2367 | _requestQueue.Enqueue | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.CMelsecThreadRequest>.Enqueue(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) |
| 2373 | _writeQueue.Concat | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>.Concat<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>(System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.CMelsecWriteCommand>) |
| 2375 | ids.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 2375 | ids.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 2384 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |
| 2384 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 2384 | deviceNo.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2386 | CloseDeviceCore | resolved | void Drilling.Common.Interface.CMelsec.CloseDeviceCore(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2389 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2352 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapList().Where(row => row.DeviceNo == deviceNo).Select(row => NormalizeId(row.Id)).ToHashSet(StringComparer.OrdinalIgnoreCase) |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapList().Where(row => row.DeviceNo == deviceNo).Select(row => NormalizeId(row.Id)) |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapList().Where(row => row.DeviceNo == deviceNo) |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapList() |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(row.Id) |
| 2353 | local-declaration | 지역 변수를 선언합니다: var ids = GetMapList().Where(row => row.DeviceNo == deviceNo).Select(row => NormalizeId(row.Id)).ToHashSet(StringComparer.OrdinalIgnoreCase); |
| 2353 | variable-initializer | 변수의 초기값을 지정합니다: ids = GetMapList().Where(row => row.DeviceNo == deviceNo).Select(row => NormalizeId(row.Id)).ToHashSet(StringComparer.OrdinalIgnoreCase) |
| 2354 | local-declaration | 지역 변수를 선언합니다: const string message = "MELSEC interface settings changed."; |
| 2354 | variable-initializer | 변수의 초기값을 지정합니다: message = "MELSEC interface settings changed." |
| 2355 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 2357 | local-declaration | 지역 변수를 선언합니다: var count = _requestQueue.Count; |
| 2357 | variable-initializer | 변수의 초기값을 지정합니다: count = _requestQueue.Count |
| 2358 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 2358 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < count; index++) |
| 2360 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Dequeue() |
| 2360 | local-declaration | 지역 변수를 선언합니다: var pending = _requestQueue.Dequeue(); |
| 2360 | variable-initializer | 변수의 초기값을 지정합니다: pending = _requestQueue.Dequeue() |
| 2361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ids.Contains(pending.Id) |
| 2361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Equals(pending.Value, deviceNo) |
| 2361 | if | 조건에 따라 분기합니다: if (ids.Contains(pending.Id) &#124;&#124; (pending.Command == EN_MELSEC_THREAD_COMMAND.Open && Equals(pending.Value, deviceNo))) |
| 2363 | assignment | 값을 대상에 대입합니다: pending.Error = new OperationCanceledException(message) |
| 2363 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new OperationCanceledException(message) |
| 2364 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: pending.Completed.Set() |
| 2366 | else | 앞 조건이 거짓인 경로입니다: else |
| 2367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestQueue.Enqueue(pending) |
| 2371 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 2373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _writeQueue.Concat(_activeWriteCommand is null ? [] : new[] { _activeWriteCommand }) |
| 2373 | conditional-expression | 조건에 따라 결과식을 선택합니다: _activeWriteCommand is null ? [] : new[] { _activeWriteCommand } |
| 2373 | foreach | 컬렉션 요소를 순회합니다: foreach (var pending in _writeQueue.Concat(_activeWriteCommand is null ? [] : new[] { _activeWriteCommand })) |
| 2375 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ids.Contains(pending.WriteId) |
| 2375 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ids.Contains(pending.ReadbackId) |
| 2375 | if | 조건에 따라 분기합니다: if (!ids.Contains(pending.WriteId) && !ids.Contains(pending.ReadbackId)) |
| 2376 | continue | 다음 반복으로 진행합니다: continue; |
| 2377 | assignment | 값을 대상에 대입합니다: pending.CancelRequested = true |
| 2378 | assignment | 값을 대상에 대입합니다: pending.Result = EN_MELSEC_WRITE_RESULT.Cancelled |
| 2379 | assignment | 값을 대상에 대입합니다: pending.ErrorMessage = message |
| 2383 | if | 조건에 따라 분기합니다: if (IsRunning) |
| 2384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Close, "MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture), deviceNo, cancellationToken)) |
| 2384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.Close, "MELSEC_" + deviceNo.ToString(CultureInfo.InvariantCulture), deviceNo, cancellationToken) |
| 2384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: deviceNo.ToString(CultureInfo.InvariantCulture) |
| 2385 | else | 앞 조건이 거짓인 경로입니다: else |
| 2386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseDeviceCore(deviceNo) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CloseDevice"]
 N0["L2355 lock"]
 M -->|포함| N0
 N1["L2358 for"]
 N0 -->|포함| N1
 N2["L2361 if"]
 N1 -->|포함| N2
 N3["L2366 else"]
 N2 -->|포함| N3
 N4["L2371 lock"]
 M -->|포함| N4
 N5["L2373 foreach"]
 N4 -->|포함| N5
 N6["L2375 if"]
 N5 -->|포함| N6
 N7["L2383 if"]
 M -->|포함| N7
 N8["L2385 else"]
 N7 -->|포함| N8
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseDeviceCore` · L2389–2409

[Drilling.Common/Interface/Melsec/CMelsec.cs:2389–2409](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2389-L2409)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CloseDeviceCore(int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:670–670](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L670-L670) | CloseDeviceCore | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2386–2386](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2386-L2386) | CloseDeviceCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2391 | _interfaceManager.GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA? Drilling.Common.Interface.CInterfaceManager.GetInterfaceData(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:348 |
| 2394 | _melsecNetPaths.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, int>.ContainsKey(int) |
| 2396 | CloseMelsecNetChannelCore | resolved | void Drilling.Common.Interface.CMelsec.CloseMelsecNetChannelCore(int, Drilling.Common.Interface.ST_INTERFACE_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION) · Drilling.Common/Interface/Melsec/CMelsec.cs:817 |
| 2396 | ReadMelsecNetOption | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_NET_OPTION Drilling.Common.Interface.CMelsec.ReadMelsecNetOption(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2132 |
| 2399 | _pollDeviceBackoff.Remove | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Remove(int) |
| 2400 | _pollBlocks.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock>.Where<Drilling.Common.Interface.CMelsec.PollBlock>(System.Func<Drilling.Common.Interface.CMelsec.PollBlock, bool>) |
| 2403 | SetBlockState | resolved | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2801 |
| 2406 | _readSnapshots.Remove | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot>.Remove(string) |
| 2406 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) |
| 2391 | local-declaration | 지역 변수를 선언합니다: var data = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo); |
| 2391 | variable-initializer | 변수의 초기값을 지정합니다: data = _interfaceManager.GetInterfaceData(EN_EQP_MODULE.Melsec, deviceNo) |
| 2392 | local-declaration | 지역 변수를 선언합니다: bool hasPath; |
| 2393 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 2394 | assignment | 값을 대상에 대입합니다: hasPath = _melsecNetPaths.ContainsKey(deviceNo) |
| 2394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.ContainsKey(deviceNo) |
| 2395 | if | 조건에 따라 분기합니다: if (hasPath && data is not null) |
| 2396 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloseMelsecNetChannelCore(deviceNo, data, ReadMelsecNetOption(data)) |
| 2396 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadMelsecNetOption(data) |
| 2397 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2399 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Remove(deviceNo) |
| 2400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlocks.Where(block => block.DeviceNo == deviceNo) |
| 2400 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks.Where(block => block.DeviceNo == deviceNo)) |
| 2402 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |
| 2403 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetBlockState(block, EN_MELSEC_CACHE_STATE.Offline, "MELSEC interface settings changed.") |
| 2404 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 2405 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in block.Items) |
| 2406 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _readSnapshots.Remove(NormalizeId(item.Data.Id)) |
| 2406 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(item.Data.Id) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CloseDeviceCore"]
 N0["L2393 lock"]
 M -->|포함| N0
 N1["L2395 if"]
 M -->|포함| N1
 N2["L2397 lock"]
 M -->|포함| N2
 N3["L2400 foreach"]
 N2 -->|포함| N3
 N4["L2404 lock"]
 N3 -->|포함| N4
 N5["L2405 foreach"]
 N4 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsIofPositionId` · L2413–2414

[Drilling.Common/Interface/Melsec/CMelsec.cs:2413–2414](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2413-L2414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsIofPositionId(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2416–2416](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2416-L2416) | IsIofPositionId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2413 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2414 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("IOF_POS_ARRAY_", StringComparison.OrdinalIgnoreCase) |
| 2414 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(id[14..], NumberStyles.None, CultureInfo.InvariantCulture, out var index) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsOnDemandValueId` · L2416–2422

[Drilling.Common/Interface/Melsec/CMelsec.cs:2416–2422](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2416-L2422)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1607–1607](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1607-L1607) | IsOnDemandValueId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2581–2581](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2581-L2581) | IsOnDemandValueId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2641–2641](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2641-L2641) | IsOnDemandValueId | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2666–2666](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2666-L2666) | IsOnDemandValueId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2416 | IsIofPositionId | resolved | bool Drilling.Common.Interface.CMelsec.IsIofPositionId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2413 |
| 2418 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2419 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2420 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2421 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 2422 | id.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |
| 2422 | id.EndsWith | resolved | bool string.EndsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2416 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsIofPositionId(id) |
| 2418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("PROCESS_WAPAGE_ALIGNBASE_", StringComparison.OrdinalIgnoreCase) |
| 2419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("PROCESS_DISTORTION_", StringComparison.OrdinalIgnoreCase) |
| 2420 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("DISTORTION_POS", StringComparison.OrdinalIgnoreCase) |
| 2421 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("SVID_FINEALN_CAM", StringComparison.OrdinalIgnoreCase) |
| 2422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.EndsWith("_GLS_RESULT_X", StringComparison.OrdinalIgnoreCase) |
| 2422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.EndsWith("_GLS_RESULT_Y", StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetDoubleArrayCapacity` · L2425–2425

[Drilling.Common/Interface/Melsec/CMelsec.cs:2425–2425](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2425-L2425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.GetDoubleArrayCapacity(string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

원본 XML 주석:

````xml
/// <summary>Array capacity from map metadata only; does not perform device I/O.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStageReviewSequences.cs:160–160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L160-L160) | interfaces.Melsec.GetDoubleArrayCapacity | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:784–784](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L784-L784) | _interfaces.Melsec.GetDoubleArrayCapacity | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2425 | ResolveDoubleArrayData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.ResolveDoubleArrayData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2427 |
| 2425 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveDoubleArrayData(GetMapData(id)) |
| 2425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResolveDoubleArrayData` · L2427–2453

[Drilling.Common/Interface/Melsec/CMelsec.cs:2427–2453](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2427-L2453)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.ResolveDoubleArrayData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_MAP_DATA |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2425–2425](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2425-L2425) | ResolveDoubleArrayData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2471–2471](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2471-L2471) | ResolveDoubleArrayData | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2503–2503](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2503-L2503) | ResolveDoubleArrayData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2429 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 2431 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 2436 | row.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2438 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 2439 | ValidateArrayAddress | resolved | void Drilling.Common.Interface.CMelsec.ValidateArrayAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) · Drilling.Common/Interface/Melsec/CMelsec.cs:2525 |
| 2444 | index.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 2445 | _map.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 2448 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 2449 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(row) |
| 2430 | if | 조건에 따라 분기합니다: if (row.DataType != EN_MELSEC_DATA_TYPE.Double &#124;&#124; row.Length % 2 != 0) |
| 2431 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSEC 배열은 DOUBLE / 짝수 Word LENGTH여야 합니다: " + row.Id) |
| 2431 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSEC 배열은 DOUBLE / 짝수 Word LENGTH여야 합니다: " + row.Id); |
| 2436 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row.Id.Equals("IOF_POS_ARRAY_1", StringComparison.OrdinalIgnoreCase) |
| 2436 | if | 조건에 따라 분기합니다: if (!row.Id.Equals("IOF_POS_ARRAY_1", StringComparison.OrdinalIgnoreCase) &#124;&#124; row.Length != 2) |
| 2437 | return | 호출자에게 값 또는 제어를 반환합니다: return row; |
| 2438 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 2438 | local-declaration | 지역 변수를 선언합니다: var start = ParseAddress(row.Address); |
| 2438 | variable-initializer | 변수의 초기값을 지정합니다: start = ParseAddress(row.Address) |
| 2439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateArrayAddress(start) |
| 2440 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_mapLock) |
| 2442 | variable-initializer | 변수의 초기값을 지정합니다: index = 1 |
| 2442 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 1; index <= 500; index++) |
| 2444 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: index.ToString(CultureInfo.InvariantCulture) |
| 2444 | local-declaration | 지역 변수를 선언합니다: var id = "IOF_POS_ARRAY_" + index.ToString(CultureInfo.InvariantCulture); |
| 2444 | variable-initializer | 변수의 초기값을 지정합니다: id = "IOF_POS_ARRAY_" + index.ToString(CultureInfo.InvariantCulture) |
| 2445 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map.TryGetValue(id, out var item) |
| 2445 | if | 조건에 따라 분기합니다: if (!_map.TryGetValue(id, out var item) &#124;&#124; !item.Use &#124;&#124; item.DataType != EN_MELSEC_DATA_TYPE.Double &#124;&#124; item.Length != 2 &#124;&#124; item.DeviceNo != row.DeviceNo &#124;&#124; item.Direction != row.Direction &#124;&#124; item.Access != row.Access &#124;&#124; item…) |
| 2448 | assignment | 값을 대상에 대입합니다: Number = checked(start.Number + (index - 1) * 2) |
| 2448 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(item.Address) |
| 2449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("IOF 좌표 1~500의 연속 주소·2 Word·장치·입출력·스케일을 확인해 주세요: " + id) |
| 2449 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("IOF 좌표 1~500의 연속 주소·2 Word·장치·입출력·스케일을 확인해 주세요: " + id); |
| 2452 | assignment | 값을 대상에 대입합니다: Length = 1000 |
| 2452 | return | 호출자에게 값 또는 제어를 반환합니다: return row with { Length = 1000 }; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResolveDoubleArrayData"]
 N0["L2430 if"]
 M -->|포함| N0
 N1["L2436 if"]
 M -->|포함| N1
 N2["L2440 lock"]
 M -->|포함| N2
 N3["L2442 for"]
 N2 -->|포함| N3
 N4["L2445 if"]
 N3 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteDoubleArray` · L2456–2460

[Drilling.Common/Interface/Melsec/CMelsec.cs:2456–2460](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2456-L2460)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteDoubleArray(string, System.Collections.Generic.IReadOnlyList<double>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

원본 XML 주석:

````xml
/// <summary>Logical values, each encoded as a signed 32-bit pair using the map's scale. Single communication owner.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| values | System.Collections.Generic.IReadOnlyList<double> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStageReviewSequences.cs:786–786](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L786-L786) | _interfaces.Melsec.WriteDoubleArray | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2458 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 2458 | values.ToArray | resolved | double[] System.Collections.Generic.IEnumerable<double>.ToArray<double>() |
| 2459 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2458 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDoubleArray, id, values.ToArray(), token) |
| 2458 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.ToArray() |
| 2458 | local-declaration | 지역 변수를 선언합니다: var request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDoubleArray, id, values.ToArray(), token); |
| 2458 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.WriteDoubleArray, id, values.ToArray(), token) |
| 2459 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDoubleArray` · L2462–2467

[Drilling.Common/Interface/Melsec/CMelsec.cs:2462–2467](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2462-L2467)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Interface.CMelsec.ReadDoubleArray(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<double> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| count | int | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStageReviewSequences.cs:787–787](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L787-L787) | _interfaces.Melsec.ReadDoubleArray | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2464 | new CMelsecThreadRequest | resolved | Drilling.Common.Interface.CMelsec.CMelsecThreadRequest.CMelsecThreadRequest(Drilling.Common.Interface.CMelsec.EN_MELSEC_THREAD_COMMAND, string, object?, System.Threading.CancellationToken, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:2273 |
| 2465 | ExecuteThreadRequest | resolved | void Drilling.Common.Interface.CMelsec.ExecuteThreadRequest(Drilling.Common.Interface.CMelsec.CMelsecThreadRequest) · Drilling.Common/Interface/Melsec/CMelsec.cs:614 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2464 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDoubleArray, id, count, token, suppressLog: true) |
| 2464 | local-declaration | 지역 변수를 선언합니다: var request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDoubleArray, id, count, token, suppressLog: true); |
| 2464 | variable-initializer | 변수의 초기값을 지정합니다: request = new CMelsecThreadRequest(EN_MELSEC_THREAD_COMMAND.ReadDoubleArray, id, count, token, suppressLog: true) |
| 2465 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExecuteThreadRequest(request) |
| 2466 | return | 호출자에게 값 또는 제어를 반환합니다: return (double[])request.Result!; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteDoubleArrayCore` · L2469–2499

[Drilling.Common/Interface/Melsec/CMelsec.cs:2469–2499](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2469-L2499)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.WriteDoubleArrayCore(string, double[], System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| values | double[] | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:693–693](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L693-L693) | WriteDoubleArrayCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2471 | ResolveDoubleArrayData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.ResolveDoubleArrayData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2427 |
| 2471 | PrepareWrite | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareWrite(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1957 |
| 2472 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 2474 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?) |
| 2481 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 2482 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 2482 | nameof | unresolved | None |
| 2483 | Int32ToWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.Int32ToWords(int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2099 |
| 2483 | Math.Round | resolved | double System.Math.Round(double, System.MidpointRounding) |
| 2488 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 2489 | ValidateArrayAddress | resolved | void Drilling.Common.Interface.CMelsec.ValidateArrayAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) · Drilling.Common/Interface/Melsec/CMelsec.cs:2525 |
| 2495 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 2496 | Math.Min | resolved | int System.Math.Min(int, int) |
| 2497 | WriteWords | resolved | void Drilling.Common.Interface.CMelsec.WriteWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, System.Collections.Generic.IReadOnlyList<ushort>, System.Threading.CancellationToken, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1763 |
| 2497 | words.AsSpan(offset, count).ToArray | resolved | ushort[] System.Span<ushort>.ToArray() |
| 2497 | words.AsSpan | resolved | System.Span<ushort> ushort[].AsSpan<ushort>(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveDoubleArrayData(PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double], token)) |
| 2471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double], token) |
| 2471 | local-declaration | 지역 변수를 선언합니다: var row = ResolveDoubleArrayData(PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double], token)); |
| 2471 | variable-initializer | 변수의 초기값을 지정합니다: row = ResolveDoubleArrayData(PrepareWrite(id, [EN_MELSEC_DATA_TYPE.Double], token)) |
| 2472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(row) |
| 2473 | if | 조건에 따라 분기합니다: if (row.Length % 2 != 0 &#124;&#124; values.Length == 0 &#124;&#124; values.Length * 2 > row.Length) |
| 2474 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("MELSEC 배열 길이가 맵의 2-Word 저장 영역을 벗어납니다.") |
| 2474 | throw | 예외를 발생/전달합니다: throw new ArgumentException("MELSEC 배열 길이가 맵의 2-Word 저장 영역을 벗어납니다."); |
| 2477 | local-declaration | 지역 변수를 선언합니다: var words = new ushort[values.Length * 2]; |
| 2477 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[values.Length * 2] |
| 2478 | variable-initializer | 변수의 초기값을 지정합니다: i = 0 |
| 2478 | for | 초기화·조건·증감이 있는 반복입니다: for (var i = 0; i < values.Length; i++) |
| 2480 | local-declaration | 지역 변수를 선언합니다: var raw = values[i] * row.WriteScale; |
| 2480 | variable-initializer | 변수의 초기값을 지정합니다: raw = values[i] * row.WriteScale |
| 2481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(raw) |
| 2481 | if | 조건에 따라 분기합니다: if (!double.IsFinite(raw)) |
| 2482 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(values)) |
| 2482 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(values) |
| 2482 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(values)); |
| 2483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Int32ToWords(checked((int)Math.Round(raw, MidpointRounding.AwayFromZero)), 2) |
| 2483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(raw, MidpointRounding.AwayFromZero) |
| 2483 | local-declaration | 지역 변수를 선언합니다: var pair = Int32ToWords(checked((int)Math.Round(raw, MidpointRounding.AwayFromZero)), 2); |
| 2483 | variable-initializer | 변수의 초기값을 지정합니다: pair = Int32ToWords(checked((int)Math.Round(raw, MidpointRounding.AwayFromZero)), 2) |
| 2484 | assignment | 값을 대상에 대입합니다: words[i * 2] = pair[0] |
| 2485 | assignment | 값을 대상에 대입합니다: words[i * 2 + 1] = pair[1] |
| 2488 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 2488 | local-declaration | 지역 변수를 선언합니다: var address = ParseAddress(row.Address); |
| 2488 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(row.Address) |
| 2489 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateArrayAddress(address) |
| 2492 | local-declaration | 지역 변수를 선언합니다: var chunkWords = MelsecNetMaximumTransferBytes / sizeof(short); |
| 2492 | variable-initializer | 변수의 초기값을 지정합니다: chunkWords = MelsecNetMaximumTransferBytes / sizeof(short) |
| 2493 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: offset += chunkWords |
| 2493 | variable-initializer | 변수의 초기값을 지정합니다: offset = 0 |
| 2493 | for | 초기화·조건·증감이 있는 반복입니다: for (var offset = 0; offset < words.Length; offset += chunkWords) |
| 2495 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 2496 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(chunkWords, words.Length - offset) |
| 2496 | local-declaration | 지역 변수를 선언합니다: var count = Math.Min(chunkWords, words.Length - offset); |
| 2496 | variable-initializer | 변수의 초기값을 지정합니다: count = Math.Min(chunkWords, words.Length - offset) |
| 2497 | assignment | 값을 대상에 대입합니다: Number = checked(address.Number + offset) |
| 2497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteWords(row, address with { Number = checked(address.Number + offset) }, words.AsSpan(offset, count).ToArray(), token, logSource: "ARRAY") |
| 2497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: words.AsSpan(offset, count).ToArray() |
| 2497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: words.AsSpan(offset, count) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteDoubleArrayCore"]
 N0["L2473 if"]
 M -->|포함| N0
 N1["L2478 for"]
 M -->|포함| N1
 N2["L2481 if"]
 N1 -->|포함| N2
 N3["L2493 for"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDoubleArrayCore` · L2501–2523

[Drilling.Common/Interface/Melsec/CMelsec.cs:2501–2523](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2501-L2523)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double[] Drilling.Common.Interface.CMelsec.ReadDoubleArrayCore(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | double[] |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| pointCount | int | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:696–696](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L696-L696) | ReadDoubleArrayCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2503 | ResolveDoubleArrayData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.ResolveDoubleArrayData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:2427 |
| 2503 | PrepareRead | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.PrepareRead(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_MELSEC_DATA_TYPE>, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:1939 |
| 2504 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 2506 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 2506 | nameof | unresolved | None |
| 2507 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 2508 | ValidateArrayAddress | resolved | void Drilling.Common.Interface.CMelsec.ValidateArrayAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) · Drilling.Common/Interface/Melsec/CMelsec.cs:2525 |
| 2513 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 2514 | Math.Min | resolved | int System.Math.Min(int, int) |
| 2515 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 2516 | Array.Copy | resolved | void System.Array.Copy(System.Array, int, System.Array, int, int) |
| 2518 | Enumerable.Range(0, pointCount).Select(i => WordsToInt32([words[2 * i], words[2 * i + 1]]) * row.ReadScale).ToArray | resolved | double[] System.Collections.Generic.IEnumerable<double>.ToArray<double>() |
| 2518 | Enumerable.Range(0, pointCount).Select | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<int>.Select<int, double>(System.Func<int, double>) |
| 2518 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 2518 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 2519 | id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2521 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |
| 2521 | (index + 1).ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResolveDoubleArrayData(PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double], token)) |
| 2503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double], token) |
| 2503 | local-declaration | 지역 변수를 선언합니다: var row = ResolveDoubleArrayData(PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double], token)); |
| 2503 | variable-initializer | 변수의 초기값을 지정합니다: row = ResolveDoubleArrayData(PrepareRead(id, [EN_MELSEC_DATA_TYPE.Double], token)) |
| 2504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(row) |
| 2505 | if | 조건에 따라 분기합니다: if (pointCount < 1 &#124;&#124; pointCount > row.Length / 2) |
| 2506 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(pointCount), "MELSEC 배열 읽기 개수가 맵의 저장 범위를 벗어납니다.") |
| 2506 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(pointCount) |
| 2506 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(pointCount), "MELSEC 배열 읽기 개수가 맵의 저장 범위를 벗어납니다."); |
| 2507 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 2507 | local-declaration | 지역 변수를 선언합니다: var address = ParseAddress(row.Address); |
| 2507 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(row.Address) |
| 2508 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateArrayAddress(address) |
| 2509 | local-declaration | 지역 변수를 선언합니다: var words = new ushort[pointCount * 2]; |
| 2509 | variable-initializer | 변수의 초기값을 지정합니다: words = new ushort[pointCount * 2] |
| 2510 | local-declaration | 지역 변수를 선언합니다: var chunkWords = MelsecNetMaximumTransferBytes / sizeof(short); |
| 2510 | variable-initializer | 변수의 초기값을 지정합니다: chunkWords = MelsecNetMaximumTransferBytes / sizeof(short) |
| 2511 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: offset += chunkWords |
| 2511 | variable-initializer | 변수의 초기값을 지정합니다: offset = 0 |
| 2511 | for | 초기화·조건·증감이 있는 반복입니다: for (var offset = 0; offset < words.Length; offset += chunkWords) |
| 2513 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 2514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(chunkWords, words.Length - offset) |
| 2514 | local-declaration | 지역 변수를 선언합니다: var count = Math.Min(chunkWords, words.Length - offset); |
| 2514 | variable-initializer | 변수의 초기값을 지정합니다: count = Math.Min(chunkWords, words.Length - offset) |
| 2515 | assignment | 값을 대상에 대입합니다: Number = checked(address.Number + offset) |
| 2515 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(row, address with { Number = checked(address.Number + offset) }, count, token, logSource: "ARRAY") |
| 2515 | local-declaration | 지역 변수를 선언합니다: var part = ReadWords(row, address with { Number = checked(address.Number + offset) }, count, token, logSource: "ARRAY"); |
| 2515 | variable-initializer | 변수의 초기값을 지정합니다: part = ReadWords(row, address with { Number = checked(address.Number + offset) }, count, token, logSource: "ARRAY") |
| 2516 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.Copy(part, 0, words, offset, count) |
| 2518 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, pointCount).Select(i => WordsToInt32([words[2 * i], words[2 * i + 1]]) * row.ReadScale).ToArray() |
| 2518 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, pointCount).Select(i => WordsToInt32([words[2 * i], words[2 * i + 1]]) * row.ReadScale) |
| 2518 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, pointCount) |
| 2518 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32([words[2 * i], words[2 * i + 1]]) |
| 2518 | local-declaration | 지역 변수를 선언합니다: var result = Enumerable.Range(0, pointCount).Select(i => WordsToInt32([words[2 * i], words[2 * i + 1]]) * row.ReadScale).ToArray(); |
| 2518 | variable-initializer | 변수의 초기값을 지정합니다: result = Enumerable.Range(0, pointCount).Select(i => WordsToInt32([words[2 * i], words[2 * i + 1]]) * row.ReadScale).ToArray() |
| 2519 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Equals("IOF_POS_ARRAY_1", StringComparison.OrdinalIgnoreCase) |
| 2519 | if | 조건에 따라 분기합니다: if (id.Equals("IOF_POS_ARRAY_1", StringComparison.OrdinalIgnoreCase)) |
| 2520 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 2520 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < result.Length; index++) |
| 2521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot("IOF_POS_ARRAY_" + (index + 1).ToString(CultureInfo.InvariantCulture), result[index]) |
| 2521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (index + 1).ToString(CultureInfo.InvariantCulture) |
| 2522 | return | 호출자에게 값 또는 제어를 반환합니다: return result; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadDoubleArrayCore"]
 N0["L2505 if"]
 M -->|포함| N0
 N1["L2511 for"]
 M -->|포함| N1
 N2["L2519 if"]
 M -->|포함| N2
 N3["L2520 for"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateArrayAddress` · L2525–2529

[Drilling.Common/Interface/Melsec/CMelsec.cs:2525–2529](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2525-L2529)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.ValidateArrayAddress(Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2439–2439](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2439-L2439) | ValidateArrayAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2489–2489](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2489-L2489) | ValidateArrayAddress | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2508–2508](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2508-L2508) | ValidateArrayAddress | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2528 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2527 | if | 조건에 따라 분기합니다: if (address.BitIndex is not null &#124;&#124; address.Device is not ("W" or "SW" or "D" or "SD" or "R" or "ZR")) |
| 2528 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("MELSEC 배열에는 Word 단위 연속 주소가 필요합니다.") |
| 2528 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("MELSEC 배열에는 Word 단위 연속 주소가 필요합니다."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateArrayAddress"]
 N0["L2527 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCachedSnapshot` · L2535–2535

[Drilling.Common/Interface/Melsec/CMelsec.cs:2535–2535](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2535-L2535)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4374–4374](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4374-L4374) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3468–3468](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3468-L3468) | manager.Interface().Melsec.GetCachedSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2535 | GetCachedSnapshot | resolved | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2538 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2535 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetCachedSnapshot(out _) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCachedSnapshot` · L2538–2546

[Drilling.Common/Interface/Melsec/CMelsec.cs:2538–2546](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2538-L2546)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| map | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2535–2535](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2535-L2535) | GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4701–4701](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4701-L4701) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4729–4729](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4729-L4729) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:140–140](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L140-L140) | interfaceManager.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3324–3324](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L3324-L3324) | _manager.Interface().Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:7016–7016](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L7016-L7016) | _melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs:291–291](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L291-L291) | interfaceManager.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L158-L158) | interfaces.Melsec.GetCachedSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2544 | _cachedValues.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>>.ToDictionary<System.Collections.Generic.KeyValuePair<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>, string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>(System.Func<System.Collections.Generic.KeyValuePair<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>, string>, System.Func<System.Collections.Generic.KeyValuePair<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>, System.Collections.Generic.IEqualityComparer<string>?) |
| 2544 | WithCacheFreshness | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2639 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2540 | local-declaration | 지역 변수를 선언합니다: var now = DateTimeOffset.UtcNow; |
| 2540 | variable-initializer | 변수의 초기값을 지정합니다: now = DateTimeOffset.UtcNow |
| 2541 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2543 | assignment | 값을 대상에 대입합니다: map = Map |
| 2544 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.ToDictionary(pair => pair.Key, pair => WithCacheFreshness(pair.Key, pair.Value, now), StringComparer.OrdinalIgnoreCase) |
| 2544 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithCacheFreshness(pair.Key, pair.Value, now) |
| 2544 | return | 호출자에게 값 또는 제어를 반환합니다: return _cachedValues.ToDictionary(pair => pair.Key, pair => WithCacheFreshness(pair.Key, pair.Value, now), StringComparer.OrdinalIgnoreCase); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCachedSnapshot"]
 N0["L2541 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCachedSnapshot` · L2550–2566

[Drilling.Common/Interface/Melsec/CMelsec.cs:2550–2566](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2550-L2566)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(System.Collections.Generic.IEnumerable<string>, out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| ids | System.Collections.Generic.IEnumerable<string> | None | False /  |
| map | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:177–177](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L177-L177) | Interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:194–194](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L194-L194) | Interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:384–384](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L384-L384) | _interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:890–890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L890-L890) | _interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:3910–3910](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3910-L3910) | melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4395–4395](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4395-L4395) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4420–4420](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4420-L4420) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4567–4567](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4567-L4567) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:4806–4806](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4806-L4806) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:5943–5943](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L5943-L5943) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:6054–6054](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L6054-L6054) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:6145–6145](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L6145-L6145) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.Common/Station/CStationProcess.cs:6179–6179](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L6179-L6179) | interfaces.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:4021–4021](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L4021-L4021) | interfaceManager.Melsec.GetCachedSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:7848–7848](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuManual.cs#L7848-L7848) | melsec.GetCachedSnapshot | False |
| [Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs:64–64](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs#L64-L64) | _interfaces.Melsec.GetCachedSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2552 | ArgumentNullException.ThrowIfNull | resolved | void System.ArgumentNullException.ThrowIfNull(object?, string?) |
| 2554 | new Dictionary<string, ST_MELSEC_CACHED_VALUE> | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 2560 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2561 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 2562 | WithCacheFreshness | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2639 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2552 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentNullException.ThrowIfNull(ids) |
| 2553 | local-declaration | 지역 변수를 선언합니다: var now = DateTimeOffset.UtcNow; |
| 2553 | variable-initializer | 변수의 초기값을 지정합니다: now = DateTimeOffset.UtcNow |
| 2554 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase) |
| 2554 | local-declaration | 지역 변수를 선언합니다: var result = new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase); |
| 2554 | variable-initializer | 변수의 초기값을 지정합니다: result = new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase) |
| 2555 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2557 | assignment | 값을 대상에 대입합니다: map = Map |
| 2558 | foreach | 컬렉션 요소를 순회합니다: foreach (var id in ids) |
| 2560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 2560 | local-declaration | 지역 변수를 선언합니다: var key = NormalizeId(id); |
| 2560 | variable-initializer | 변수의 초기값을 지정합니다: key = NormalizeId(id) |
| 2561 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(key, out var sample) |
| 2561 | if | 조건에 따라 분기합니다: if (_cachedValues.TryGetValue(key, out var sample)) |
| 2562 | assignment | 값을 대상에 대입합니다: result[key] = WithCacheFreshness(key, sample, now) |
| 2562 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithCacheFreshness(key, sample, now) |
| 2565 | return | 호출자에게 값 또는 제어를 반환합니다: return result; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCachedSnapshot"]
 N0["L2555 lock"]
 M -->|포함| N0
 N1["L2558 foreach"]
 N0 -->|포함| N1
 N2["L2561 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetCachedValue` · L2568–2573

[Drilling.Common/Interface/Melsec/CMelsec.cs:2568–2573](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2568-L2573)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE? Drilling.Common.Interface.CMelsec.GetCachedValue(string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:139–139](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Managers/CSettingManager.cs#L139-L139) | .Melsec.GetCachedValue | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:283–283](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L283-L283) | _interfaces.Melsec.GetCachedValue | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:297–297](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L297-L297) | _interfaces.Melsec.GetCachedValue | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:308–308](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L308-L308) | _interfaces.Melsec.GetCachedValue | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:920–920](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L920-L920) | _interfaces.Melsec.GetCachedValue | False |
| [Drilling.Common/Station/CStationProcess.cs:5925–5925](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L5925-L5925) | interfaces.Melsec.GetCachedValue | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:51–51](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMain.cs#L51-L51) | .Melsec.GetCachedValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2570 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2572 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 2572 | WithCacheFreshness | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2639 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 2570 | local-declaration | 지역 변수를 선언합니다: var key = NormalizeId(id); |
| 2570 | variable-initializer | 변수의 초기값을 지정합니다: key = NormalizeId(id) |
| 2571 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(key, out var sample) |
| 2572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithCacheFreshness(key, sample, DateTimeOffset.UtcNow) |
| 2572 | conditional-expression | 조건에 따라 결과식을 선택합니다: _cachedValues.TryGetValue(key, out var sample) ? WithCacheFreshness(key, sample, DateTimeOffset.UtcNow) : null |
| 2572 | return | 호출자에게 값 또는 제어를 반환합니다: return _cachedValues.TryGetValue(key, out var sample) ? WithCacheFreshness(key, sample, DateTimeOffset.UtcNow) : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetCachedValue"]
 N0["L2571 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshCachedValueAsync` · L2577–2637

[Drilling.Common/Interface/Melsec/CMelsec.cs:2577–2637](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2577-L2637)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.RefreshCachedValueAsync(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/CPowerMeasureRun.cs#L229-L229) | Interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:315–315](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L315-L315) | _interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:347–347](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L347-L347) | _interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:374–374](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L374-L374) | _interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStageReviewSequences.cs:486–486](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L486-L486) | _interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStationProcess.cs:3930–3930](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3930-L3930) | _interfaceManager.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStationProcess.cs:4315–4315](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4315-L4315) | interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStationProcess.cs:4659–4659](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L4659-L4659) | interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStationProcess.cs:5902–5902](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L5902-L5902) | interfaces.Melsec.RefreshCachedValueAsync | False |
| [Drilling.Common/Station/CStationProcess.cs:6447–6447](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L6447-L6447) | interfaces.Melsec.RefreshCachedValueAsync | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2579 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 2580 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2581 | IsOnDemandValueId | resolved | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2416 |
| 2581 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 2583 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 2584 | Task.Run(() => data.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord ? ReadWordNoLog(key, cancellationToken) : ReadDouble(key, cancellationToken), cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<double> System.Threading.Tasks.Task<double>.ConfigureAwait(bool) |
| 2584 | Task.Run | resolved | System.Threading.Tasks.Task<double> System.Threading.Tasks.Task.Run<double>(System.Func<double>, System.Threading.CancellationToken) |
| 2585 | ReadWordNoLog | resolved | double Drilling.Common.Interface.CMelsec.ReadWordNoLog(string, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:364 |
| 2585 | ReadDouble | resolved | double Drilling.Common.Interface.CMelsec.ReadDouble(string, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:377 |
| 2594 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 2596 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 2597 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2602 | RequestPollingBlock | resolved | void Drilling.Common.Interface.CMelsec.RequestPollingBlock(Drilling.Common.Interface.CMelsec.PollBlock) · Drilling.Common/Interface/Melsec/CMelsec.cs:2816 |
| 2603 | _pollDeviceBackoff.Remove | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Remove(int) |
| 2606 | Stopwatch.StartNew | resolved | System.Diagnostics.Stopwatch System.Diagnostics.Stopwatch.StartNew() |
| 2609 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 2611 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2615 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2616 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 2618 | WithCacheFreshness | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2639 |
| 2626 | RequestPollingBlock | resolved | void Drilling.Common.Interface.CMelsec.RequestPollingBlock(Drilling.Common.Interface.CMelsec.PollBlock) · Drilling.Common/Interface/Melsec/CMelsec.cs:2816 |
| 2629 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 2633 | Task.Delay(10, cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2633 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |
| 2636 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2579 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 2580 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 2580 | local-declaration | 지역 변수를 선언합니다: var key = NormalizeId(id); |
| 2580 | variable-initializer | 변수의 초기값을 지정합니다: key = NormalizeId(id) |
| 2581 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOnDemandValueId(key) |
| 2581 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(key) |
| 2581 | if | 조건에 따라 분기합니다: if (IsOnDemandValueId(key) && GetMapData(key).PollMs == 0) |
| 2583 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(key) |
| 2583 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(key); |
| 2583 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(key) |
| 2584 | await | 비동기 완료를 기다립니다: await Task.Run(() => data.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord ? ReadWordNoLog(key, cancellationToken) : ReadDouble(key, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 2584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(() => data.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord ? ReadWordNoLog(key, cancellationToken) : ReadDouble(key, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 2584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(() => data.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord ? ReadWordNoLog(key, cancellationToken) : ReadDouble(key, cancellationToken), cancellationToken) |
| 2584 | conditional-expression | 조건에 따라 결과식을 선택합니다: data.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord ? ReadWordNoLog(key, cancellationToken) : ReadDouble(key, cancellationToken) |
| 2585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWordNoLog(key, cancellationToken) |
| 2585 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(key, cancellationToken) |
| 2586 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2587 | return | 호출자에게 값 또는 제어를 반환합니다: return _cachedValues[key]; |
| 2589 | local-declaration | 지역 변수를 선언합니다: PollBlock block; |
| 2590 | local-declaration | 지역 변수를 선언합니다: long previousAttempt; |
| 2591 | local-declaration | 지역 변수를 선언합니다: int generation; |
| 2592 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(key, out block!) |
| 2594 | if | 조건에 따라 분기합니다: if (!_pollBlockById.TryGetValue(key, out block!)) |
| 2596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(key, out var entry) |
| 2596 | conditional-expression | 조건에 따라 결과식을 선택합니다: _cachedValues.TryGetValue(key, out var entry) ? entry.ErrorMessage : "No readable enabled map entry." |
| 2596 | local-declaration | 지역 변수를 선언합니다: var reason = _cachedValues.TryGetValue(key, out var entry) ? entry.ErrorMessage : "No readable enabled map entry."; |
| 2596 | variable-initializer | 변수의 초기값을 지정합니다: reason = _cachedValues.TryGetValue(key, out var entry) ? entry.ErrorMessage : "No readable enabled map entry." |
| 2597 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC cache cannot refresh {id}: {reason}") |
| 2597 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC cache cannot refresh {id}: {reason}"); |
| 2600 | assignment | 값을 대상에 대입합니다: generation = _pollGeneration |
| 2601 | assignment | 값을 대상에 대입합니다: previousAttempt = block.AttemptNo |
| 2602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequestPollingBlock(block) |
| 2603 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Remove(block.DeviceNo) |
| 2606 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.StartNew() |
| 2606 | local-declaration | 지역 변수를 선언합니다: var elapsed = Stopwatch.StartNew(); |
| 2606 | variable-initializer | 변수의 초기값을 지정합니다: elapsed = Stopwatch.StartNew() |
| 2607 | while | 조건을 먼저 확인하며 반복합니다: while (elapsed.ElapsedMilliseconds < DefaultWriteTimeoutMs) |
| 2609 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 2610 | if | 조건에 따라 분기합니다: if (!_acceptRequests &#124;&#124; !IsRunning) |
| 2611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC communication is not running.") |
| 2611 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC communication is not running."); |
| 2612 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2614 | if | 조건에 따라 분기합니다: if (generation != _pollGeneration) |
| 2615 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC map changed while waiting for feedback.") |
| 2615 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC map changed while waiting for feedback."); |
| 2616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(key, out var sample) |
| 2616 | if | 조건에 따라 분기합니다: if (block.AttemptNo > previousAttempt && _cachedValues.TryGetValue(key, out var sample)) |
| 2618 | assignment | 값을 대상에 대입합니다: sample = WithCacheFreshness(key, sample, DateTimeOffset.UtcNow) |
| 2618 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithCacheFreshness(key, sample, DateTimeOffset.UtcNow) |
| 2619 | if | 조건에 따라 분기합니다: if (sample.IsValid) |
| 2620 | return | 호출자에게 값 또는 제어를 반환합니다: return sample; |
| 2621 | if | 조건에 따라 분기합니다: if (sample.State is EN_MELSEC_CACHE_STATE.Pending or EN_MELSEC_CACHE_STATE.Stale) |
| 2625 | assignment | 값을 대상에 대입합니다: previousAttempt = block.AttemptNo |
| 2626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequestPollingBlock(block) |
| 2628 | else | 앞 조건이 거짓인 경로입니다: else |
| 2629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException($"MELSEC feedback is unavailable: {id}. {sample.ErrorMessage}") |
| 2629 | throw | 예외를 발생/전달합니다: throw new IOException($"MELSEC feedback is unavailable: {id}. {sample.ErrorMessage}"); |
| 2633 | await | 비동기 완료를 기다립니다: await Task.Delay(10, cancellationToken).ConfigureAwait(false) |
| 2633 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(10, cancellationToken).ConfigureAwait(false) |
| 2633 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(10, cancellationToken) |
| 2636 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException($"MELSEC fresh feedback timed out: {id}.") |
| 2636 | throw | 예외를 발생/전달합니다: throw new TimeoutException($"MELSEC fresh feedback timed out: {id}."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshCachedValueAsync"]
 N0["L2581 if"]
 M -->|포함| N0
 N1["L2586 lock"]
 N0 -->|포함| N1
 N2["L2592 lock"]
 M -->|포함| N2
 N3["L2594 if"]
 N2 -->|포함| N3
 N4["L2607 while"]
 M -->|포함| N4
 N5["L2610 if"]
 N4 -->|포함| N5
 N6["L2612 lock"]
 N4 -->|포함| N6
 N7["L2614 if"]
 N6 -->|포함| N7
 N8["L2616 if"]
 N6 -->|포함| N8
 N9["L2619 if"]
 N8 -->|포함| N9
 N10["L2621 if"]
 N8 -->|포함| N10
 N11["L2628 else"]
 N10 -->|포함| N11
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WithCacheFreshness` · L2639–2652

[Drilling.Common/Interface/Melsec/CMelsec.cs:2639–2652](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2639-L2652)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| sample | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE | None | False /  |
| now | System.DateTimeOffset | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2544–2544](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2544-L2544) | WithCacheFreshness | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2562–2562](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2562-L2562) | WithCacheFreshness | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2572–2572](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2572-L2572) | WithCacheFreshness | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2618–2618](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2618-L2618) | WithCacheFreshness | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2940–2940](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2940-L2940) | WithCacheFreshness | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2641 | IsOnDemandValueId | resolved | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2416 |
| 2641 | _pollBlockById.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.ContainsKey(string) |
| 2643 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 2644 | TimeSpan.FromMilliseconds | resolved | System.TimeSpan System.TimeSpan.FromMilliseconds(long) |
| 2644 | Math.Max | resolved | long System.Math.Max(long, long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2641 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOnDemandValueId(id) |
| 2641 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.ContainsKey(id) |
| 2641 | if | 조건에 따라 분기합니다: if (IsOnDemandValueId(id) && !_pollBlockById.ContainsKey(id)) |
| 2642 | return | 호출자에게 값 또는 제어를 반환합니다: return sample; |
| 2643 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(id, out var block) |
| 2643 | conditional-expression | 조건에 따라 결과식을 선택합니다: _pollBlockById.TryGetValue(id, out var block) ? block.IntervalMs : DefaultPollingIntervalMs |
| 2643 | local-declaration | 지역 변수를 선언합니다: var interval = _pollBlockById.TryGetValue(id, out var block) ? block.IntervalMs : DefaultPollingIntervalMs; |
| 2643 | variable-initializer | 변수의 초기값을 지정합니다: interval = _pollBlockById.TryGetValue(id, out var block) ? block.IntervalMs : DefaultPollingIntervalMs |
| 2644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromMilliseconds(Math.Max(1000L, (long)interval * 3)) |
| 2644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1000L, (long)interval * 3) |
| 2644 | if | 조건에 따라 분기합니다: if (sample.IsValid && sample.UpdatedAt is { } updated && now - updated > TimeSpan.FromMilliseconds(Math.Max(1000L, (long)interval * 3))) |
| 2645 | return | 호출자에게 값 또는 제어를 반환합니다: return sample with { Value = null, State = EN_MELSEC_CACHE_STATE.Stale, ErrorMessage = "MELSEC feedback has not been updated within its polling interval." }; |
| 2647 | assignment | 값을 대상에 대입합니다: Value = null |
| 2648 | assignment | 값을 대상에 대입합니다: State = EN_MELSEC_CACHE_STATE.Stale |
| 2649 | assignment | 값을 대상에 대입합니다: ErrorMessage = "MELSEC feedback has not been updated within its polling interval." |
| 2651 | return | 호출자에게 값 또는 제어를 반환합니다: return sample; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WithCacheFreshness"]
 N0["L2641 if"]
 M -->|포함| N0
 N1["L2644 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RebuildPollingMap` · L2654–2747

[Drilling.Common/Interface/Melsec/CMelsec.cs:2654–2747](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2654-L2747)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RebuildPollingMap(System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| map | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:295–295](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L295-L295) | RebuildPollingMap | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2656 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Array.AsReadOnly<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(Drilling.Common.Interface.ST_MELSEC_MAP_DATA[]) |
| 2656 | map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase).ToArray | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToArray<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>() |
| 2656 | map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ThenBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>, System.Collections.Generic.IComparer<string>?) |
| 2656 | map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ThenBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>) |
| 2656 | map.Values.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.OrderBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>, System.Collections.Generic.IComparer<string>?) |
| 2658 | new List<PollItem> | resolved | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem>.List() |
| 2659 | new Dictionary<string, ST_MELSEC_CACHED_VALUE> | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 2660 | map.Values.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 2662 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2665 | ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 2666 | IsOnDemandValueId | resolved | bool Drilling.Common.Interface.CMelsec.IsOnDemandValueId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2416 |
| 2668 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |
| 2678 | Math.Max | resolved | int System.Math.Max(int, int) |
| 2680 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 2681 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 2683 | items.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem>.Add(Drilling.Common.Interface.CMelsec.PollItem) |
| 2683 | new PollItem | resolved | Drilling.Common.Interface.CMelsec.PollItem.PollItem(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3009 |
| 2684 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |
| 2688 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |
| 2692 | new List<PollBlock> | resolved | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollBlock>.List() |
| 2693 | items.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int DeviceNo, string Device), Drilling.Common.Interface.CMelsec.PollItem>> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollItem>.GroupBy<Drilling.Common.Interface.CMelsec.PollItem, (int DeviceNo, string Device)>(System.Func<Drilling.Common.Interface.CMelsec.PollItem, (int DeviceNo, string Device)>) |
| 2696 | group.OrderBy(item => item.Address.Number).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.CMelsec.PollItem> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.CMelsec.PollItem>.ThenBy<Drilling.Common.Interface.CMelsec.PollItem, int>(System.Func<Drilling.Common.Interface.CMelsec.PollItem, int>) |
| 2696 | group.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.CMelsec.PollItem> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollItem>.OrderBy<Drilling.Common.Interface.CMelsec.PollItem, int>(System.Func<Drilling.Common.Interface.CMelsec.PollItem, int>) |
| 2704 | Math.Max | resolved | int System.Math.Max(int, int) |
| 2707 | new PollBlock | resolved | Drilling.Common.Interface.CMelsec.PollBlock.PollBlock(Drilling.Common.Interface.CMelsec.PollItem) · Drilling.Common/Interface/Melsec/CMelsec.cs:3015 |
| 2708 | blocks.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollBlock>.Add(Drilling.Common.Interface.CMelsec.PollBlock) |
| 2712 | current!.Items.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem>.Add(Drilling.Common.Interface.CMelsec.PollItem) |
| 2713 | IsControlPollItem | resolved | bool Drilling.Common.Interface.CMelsec.IsControlPollItem(Drilling.Common.Interface.CMelsec.PollItem) · Drilling.Common/Interface/Melsec/CMelsec.cs:3010 |
| 2714 | Math.Max | resolved | int System.Math.Max(int, int) |
| 2715 | Math.Min | resolved | int System.Math.Min(int, int) |
| 2725 | Volatile.Write | resolved | void System.Threading.Volatile.Write<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>>(ref System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 2729 | _requestedPollBlocks.Clear | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock>.Clear() |
| 2730 | _requestedPollBlockSet.Clear | resolved | void System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock>.Clear() |
| 2734 | _pollDeviceBackoff.Clear | resolved | void System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Clear() |
| 2735 | _pollBlockById.Clear | resolved | void System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.Clear() |
| 2736 | _cachedValues.Clear | resolved | void System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.Clear() |
| 2737 | _pollLogSamples.Clear | resolved | void System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.MelsecLogSample>.Clear() |
| 2738 | _pendingMelsecLogs.Clear | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.MelsecLogEntry>.Clear() |
| 2743 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2745 | _readSnapshots.Clear | resolved | void System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.CMelsecReadSnapshot>.Clear() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) |
| 2656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase).ToArray()) |
| 2656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase).ToArray() |
| 2656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase) |
| 2656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo) |
| 2656 | local-declaration | 지역 변수를 선언합니다: var sortedMap = Array.AsReadOnly(map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase).ToArray()); |
| 2656 | variable-initializer | 변수의 초기값을 지정합니다: sortedMap = Array.AsReadOnly(map.Values.OrderBy(row => row.Group, StringComparer.OrdinalIgnoreCase) .ThenBy(row => row.DeviceNo).ThenBy(row => row.Id, StringComparer.OrdinalIgnoreCase).ToArray()) |
| 2658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<PollItem>() |
| 2658 | local-declaration | 지역 변수를 선언합니다: var items = new List<PollItem>(); |
| 2658 | variable-initializer | 변수의 초기값을 지정합니다: items = new List<PollItem>() |
| 2659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase) |
| 2659 | local-declaration | 지역 변수를 선언합니다: var entries = new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase); |
| 2659 | variable-initializer | 변수의 초기값을 지정합니다: entries = new Dictionary<string, ST_MELSEC_CACHED_VALUE>(StringComparer.OrdinalIgnoreCase) |
| 2660 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Values.Where(row => row.Use && row.Access != EN_MELSEC_ACCESS.Write) |
| 2660 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in map.Values.Where(row => row.Use && row.Access != EN_MELSEC_ACCESS.Write)) |
| 2662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(row.Id) |
| 2662 | local-declaration | 지역 변수를 선언합니다: var id = NormalizeId(row.Id); |
| 2662 | variable-initializer | 변수의 초기값을 지정합니다: id = NormalizeId(row.Id) |
| 2663 | try | 예외 처리 범위입니다: try |
| 2665 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMapData(row) |
| 2666 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOnDemandValueId(id) |
| 2666 | if | 조건에 따라 분기합니다: if (IsOnDemandValueId(id) && row.PollMs == 0) |
| 2668 | assignment | 값을 대상에 대입합니다: entries[id] = new(id, null, EN_MELSEC_CACHE_STATE.Pending, null, 0, "Read on demand: waiting for an explicit read.") |
| 2668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(id, null, EN_MELSEC_CACHE_STATE.Pending, null, 0, "Read on demand: waiting for an explicit read.") |
| 2669 | continue | 다음 반복으로 진행합니다: continue; |
| 2671 | local-declaration | 지역 변수를 선언합니다: var count = row.DataType switch { EN_MELSEC_DATA_TYPE.Bit or EN_MELSEC_DATA_TYPE.Word => 1, // The cache stores one scalar, not the IOF coordinate array. // Its full LENGTH is read explicitly when preparing IOF. EN_MELSEC_DATA_TYP |
| 2671 | switch-expression | 값별 결과식을 선택합니다: row.DataType switch { EN_MELSEC_DATA_TYPE.Bit or EN_MELSEC_DATA_TYPE.Word => 1, // The cache stores one scalar, not the IOF coordinate array. // Its full LENGTH is read explicitly when preparing IOF. EN_MELSEC_DATA_TYPE.Double =>  |
| 2671 | variable-initializer | 변수의 초기값을 지정합니다: count = row.DataType switch { EN_MELSEC_DATA_TYPE.Bit or EN_MELSEC_DATA_TYPE.Word => 1, // The cache stores one scalar, not the IOF coordinate array. // Its full LENGTH is read explicitly when preparing IOF. EN_MELSEC_DATA_TYPE.Do |
| 2678 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2, row.Length) |
| 2679 | if | 조건에 따라 분기합니다: if (count < 1 &#124;&#124; count > MelsecNetMaximumTransferBytes / sizeof(short)) |
| 2680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"MELSEC polling length is invalid: {row.Id}, {count} words.") |
| 2680 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"MELSEC polling length is invalid: {row.Id}, {count} words."); |
| 2681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 2681 | local-declaration | 지역 변수를 선언합니다: var address = ParseAddress(row.Address); |
| 2681 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(row.Address) |
| 2682 | assignment | 값을 대상에 대입합니다: _ = checked(address.Number + count - 1) |
| 2683 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: items.Add(new PollItem(row, address, count, row.PollMs > 0 ? row.PollMs : DefaultPollingIntervalMs)) |
| 2683 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new PollItem(row, address, count, row.PollMs > 0 ? row.PollMs : DefaultPollingIntervalMs) |
| 2683 | conditional-expression | 조건에 따라 결과식을 선택합니다: row.PollMs > 0 ? row.PollMs : DefaultPollingIntervalMs |
| 2684 | assignment | 값을 대상에 대입합니다: entries[id] = new(id, null, EN_MELSEC_CACHE_STATE.Pending, null, 0, "Waiting for MELSEC feedback.") |
| 2684 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(id, null, EN_MELSEC_CACHE_STATE.Pending, null, 0, "Waiting for MELSEC feedback.") |
| 2686 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (exception is FormatException or InvalidDataException or InvalidOperationException or NotSupportedException or OverflowException) |
| 2688 | assignment | 값을 대상에 대입합니다: entries[id] = new(id, null, EN_MELSEC_CACHE_STATE.Error, null, 0, exception.Message) |
| 2688 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(id, null, EN_MELSEC_CACHE_STATE.Error, null, 0, exception.Message) |
| 2692 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<PollBlock>() |
| 2692 | local-declaration | 지역 변수를 선언합니다: var blocks = new List<PollBlock>(); |
| 2692 | variable-initializer | 변수의 초기값을 지정합니다: blocks = new List<PollBlock>() |
| 2693 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: items.GroupBy(item => (item.Data.DeviceNo, item.Address.Device)) |
| 2693 | foreach | 컬렉션 요소를 순회합니다: foreach (var group in items.GroupBy(item => (item.Data.DeviceNo, item.Address.Device))) |
| 2695 | local-declaration | 지역 변수를 선언합니다: PollBlock? current = null; |
| 2695 | variable-initializer | 변수의 초기값을 지정합니다: current = null |
| 2696 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.OrderBy(item => item.Address.Number).ThenBy(item => item.WordCount) |
| 2696 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.OrderBy(item => item.Address.Number) |
| 2696 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in group.OrderBy(item => item.Address.Number).ThenBy(item => item.WordCount)) |
| 2698 | local-declaration | 지역 변수를 선언합니다: var end = checked(item.Address.Number + item.WordCount - 1); |
| 2698 | variable-initializer | 변수의 초기값을 지정합니다: end = checked(item.Address.Number + item.WordCount - 1) |
| 2701 | local-declaration | 지역 변수를 선언합니다: var wordAddressed = item.Address.Device is "W" or "SW" or "D" or "SD" or "R" or "ZR"; |
| 2701 | variable-initializer | 변수의 초기값을 지정합니다: wordAddressed = item.Address.Device is "W" or "SW" or "D" or "SD" or "R" or "ZR" |
| 2702 | local-declaration | 지역 변수를 선언합니다: var overlaps = current != null && item.Address.Number <= current.End; |
| 2702 | variable-initializer | 변수의 초기값을 지정합니다: overlaps = current != null && item.Address.Number <= current.End |
| 2703 | local-declaration | 지역 변수를 선언합니다: var adjacent = current != null && (long)item.Address.Number == (long)current.End + 1 && item.IntervalMs == current.IntervalMs; |
| 2703 | variable-initializer | 변수의 초기값을 지정합니다: adjacent = current != null && (long)item.Address.Number == (long)current.End + 1 && item.IntervalMs == current.IntervalMs |
| 2704 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(end, current.End) |
| 2704 | conditional-expression | 조건에 따라 결과식을 선택합니다: wordAddressed ? overlaps &#124;&#124; adjacent : item.Address.Number == current.Start && item.WordCount == current.WordCount |
| 2704 | local-declaration | 지역 변수를 선언합니다: var canMerge = current != null && (wordAddressed ? overlaps &#124;&#124; adjacent : item.Address.Number == current.Start && item.WordCount == current.WordCount) && (long)Math.Max(end, current.End) - current.Start + 1 <= MelsecNetMaximumTran |
| 2704 | variable-initializer | 변수의 초기값을 지정합니다: canMerge = current != null && (wordAddressed ? overlaps &#124;&#124; adjacent : item.Address.Number == current.Start && item.WordCount == current.WordCount) && (long)Math.Max(end, current.End) - current.Start + 1 <= MelsecNetMaximumTransfer |
| 2705 | if | 조건에 따라 분기합니다: if (!canMerge) |
| 2707 | assignment | 값을 대상에 대입합니다: current = new PollBlock(item) |
| 2707 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new PollBlock(item) |
| 2708 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: blocks.Add(current) |
| 2710 | else | 앞 조건이 거짓인 경로입니다: else |
| 2712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current!.Items.Add(item) |
| 2713 | assignment | 값을 대상에 대입합니다: current.IsControl &#124;= IsControlPollItem(item) |
| 2713 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsControlPollItem(item) |
| 2714 | assignment | 값을 대상에 대입합니다: current.End = Math.Max(current.End, end) |
| 2714 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(current.End, end) |
| 2715 | assignment | 값을 대상에 대입합니다: current.IntervalMs = Math.Min(current.IntervalMs, item.IntervalMs) |
| 2715 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(current.IntervalMs, item.IntervalMs) |
| 2720 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2722 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_mapLock) |
| 2724 | assignment | 값을 대상에 대입합니다: _map = map |
| 2725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Write(ref _mapSnapshot, sortedMap) |
| 2728 | assignment | 값을 대상에 대입합니다: _pollBlocks = blocks |
| 2729 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlocks.Clear() |
| 2730 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlockSet.Clear() |
| 2731 | assignment | 값을 대상에 대입합니다: _serveRequestedPoll = true |
| 2732 | assignment | 값을 대상에 대입합니다: _controlPollStreak = 0 |
| 2733 | assignment | 값을 대상에 대입합니다: _nextPollBlock = 0 |
| 2734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Clear() |
| 2735 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.Clear() |
| 2736 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.Clear() |
| 2737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollLogSamples.Clear() |
| 2738 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pendingMelsecLogs.Clear() |
| 2739 | foreach | 컬렉션 요소를 순회합니다: foreach (var pair in entries) |
| 2740 | assignment | 값을 대상에 대입합니다: _cachedValues[pair.Key] = pair.Value |
| 2741 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in blocks) |
| 2742 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in block.Items) |
| 2743 | assignment | 값을 대상에 대입합니다: _pollBlockById[NormalizeId(item.Data.Id)] = block |
| 2743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(item.Data.Id) |
| 2744 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_readStateLock) |
| 2745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _readSnapshots.Clear() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RebuildPollingMap"]
 N0["L2660 foreach"]
 M -->|포함| N0
 N1["L2663 try"]
 N0 -->|포함| N1
 N2["L2666 if"]
 N1 -->|포함| N2
 N3["L2671 switch-expression"]
 N1 -->|포함| N3
 N4["L2679 if"]
 N1 -->|포함| N4
 N5["L2686 catch"]
 N1 -->|포함| N5
 N6["L2693 foreach"]
 M -->|포함| N6
 N7["L2696 foreach"]
 N6 -->|포함| N7
 N8["L2705 if"]
 N7 -->|포함| N8
 N9["L2710 else"]
 N8 -->|포함| N9
 N10["L2720 lock"]
 M -->|포함| N10
 N11["L2722 lock"]
 N10 -->|포함| N11
 N12["L2739 foreach"]
 N10 -->|포함| N12
 N13["L2741 foreach"]
 N10 -->|포함| N13
 N14["L2742 foreach"]
 N13 -->|포함| N14
 N15["L2744 lock"]
 N10 -->|포함| N15
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RestartPollingSchedule` · L2749–2760

[Drilling.Common/Interface/Melsec/CMelsec.cs:2749–2760](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2749-L2760)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RestartPollingSchedule() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:145–145](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L145-L145) | RestartPollingSchedule | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2753 | _pollDeviceBackoff.Clear | resolved | void System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Clear() |
| 2757 | SetBlockState | resolved | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2801 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2751 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2753 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Clear() |
| 2754 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks) |
| 2756 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |
| 2757 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetBlockState(block, EN_MELSEC_CACHE_STATE.Pending, "Waiting for MELSEC feedback.") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RestartPollingSchedule"]
 N0["L2751 lock"]
 M -->|포함| N0
 N1["L2754 foreach"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RestartPollingDevice` · L2762–2773

[Drilling.Common/Interface/Melsec/CMelsec.cs:2762–2773](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2762-L2773)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RestartPollingDevice(int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:723–723](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L723-L723) | RestartPollingDevice | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:761–761](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L761-L761) | RestartPollingDevice | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2766 | _pollDeviceBackoff.Remove | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Remove(int) |
| 2767 | _pollBlocks.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock>.Where<Drilling.Common.Interface.CMelsec.PollBlock>(System.Func<Drilling.Common.Interface.CMelsec.PollBlock, bool>) |
| 2770 | SetBlockState | resolved | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2801 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2764 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2766 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Remove(deviceNo) |
| 2767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlocks.Where(block => block.DeviceNo == deviceNo) |
| 2767 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks.Where(block => block.DeviceNo == deviceNo)) |
| 2769 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |
| 2770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetBlockState(block, EN_MELSEC_CACHE_STATE.Pending, "Waiting for MELSEC feedback.") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RestartPollingDevice"]
 N0["L2764 lock"]
 M -->|포함| N0
 N1["L2767 foreach"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `InvalidatePollingCache` · L2775–2782

[Drilling.Common/Interface/Melsec/CMelsec.cs:2775–2782](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2775-L2782)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.InvalidatePollingCache(Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| state | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:163–163](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L163-L163) | InvalidatePollingCache | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2780 | SetBlockState | resolved | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2801 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2777 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2779 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks) |
| 2780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetBlockState(block, state, message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["InvalidatePollingCache"]
 N0["L2777 lock"]
 M -->|포함| N0
 N1["L2779 foreach"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `InvalidateWrittenCache` · L2784–2799

[Drilling.Common/Interface/Melsec/CMelsec.cs:2784–2799](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2784-L2799)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.InvalidateWrittenCache(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| address | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| count | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1776–1776](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1776-L1776) | InvalidateWrittenCache | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2788 | _pollBlocks.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock>.Where<Drilling.Common.Interface.CMelsec.PollBlock>(System.Func<Drilling.Common.Interface.CMelsec.PollBlock, bool>) |
| 2795 | SetItemState | resolved | void Drilling.Common.Interface.CMelsec.SetItemState(Drilling.Common.Interface.CMelsec.PollItem, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2807 |
| 2796 | RequestPollingBlock | resolved | void Drilling.Common.Interface.CMelsec.RequestPollingBlock(Drilling.Common.Interface.CMelsec.PollBlock) · Drilling.Common/Interface/Melsec/CMelsec.cs:2816 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2786 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlocks.Where(block => block.DeviceNo == deviceNo && block.Address.Device == address.Device && (long)block.Start < (long)address.Number + count && block.End >= address.Number) |
| 2788 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks.Where(block => block.DeviceNo == deviceNo && block.Address.Device == address.Device && (long)block.Start < (long)address.Number + count && block.End >= address.Number)) |
| 2792 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in block.Items) |
| 2793 | if | 조건에 따라 분기합니다: if ((long)item.Address.Number < (long)address.Number + count && (long)item.Address.Number + item.WordCount > address.Number) |
| 2795 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetItemState(item, EN_MELSEC_CACHE_STATE.Pending, "Waiting for feedback after write.") |
| 2796 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RequestPollingBlock(block) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["InvalidateWrittenCache"]
 N0["L2786 lock"]
 M -->|포함| N0
 N1["L2788 foreach"]
 N0 -->|포함| N1
 N2["L2792 foreach"]
 N1 -->|포함| N2
 N3["L2793 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetBlockState` · L2801–2805

[Drilling.Common/Interface/Melsec/CMelsec.cs:2801–2805](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2801-L2805)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| block | Drilling.Common.Interface.CMelsec.PollBlock | None | False /  |
| state | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2403–2403](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2403-L2403) | SetBlockState | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2757–2757](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2757-L2757) | SetBlockState | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2770–2770](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2770-L2770) | SetBlockState | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2780–2780](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2780-L2780) | SetBlockState | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2975–2975](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2975-L2975) | SetBlockState | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2804 | SetItemState | resolved | void Drilling.Common.Interface.CMelsec.SetItemState(Drilling.Common.Interface.CMelsec.PollItem, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2807 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2803 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in block.Items) |
| 2804 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetItemState(item, state, message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetBlockState"]
 N0["L2803 foreach"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetItemState` · L2807–2813

[Drilling.Common/Interface/Melsec/CMelsec.cs:2807–2813](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2807-L2813)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetItemState(Drilling.Common.Interface.CMelsec.PollItem, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Interface.CMelsec.PollItem | None | False /  |
| state | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2795–2795](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2795-L2795) | SetItemState | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2804–2804](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2804-L2804) | SetItemState | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2809 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2810 | QueuePollQualityLog | resolved | void Drilling.Common.Interface.CMelsec.QueuePollQualityLog(Drilling.Common.Interface.CMelsec.PollItem, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:59 |
| 2811 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2809 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(item.Data.Id) |
| 2809 | local-declaration | 지역 변수를 선언합니다: var id = NormalizeId(item.Data.Id); |
| 2809 | variable-initializer | 변수의 초기값을 지정합니다: id = NormalizeId(item.Data.Id) |
| 2810 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueuePollQualityLog(item, state, message) |
| 2811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(id, out var previous) |
| 2811 | if | 조건에 따라 분기합니다: if (_cachedValues.TryGetValue(id, out var previous)) |
| 2812 | assignment | 값을 대상에 대입합니다: _cachedValues[id] = previous with { Value = null, State = state, ErrorMessage = message } |
| 2812 | assignment | 값을 대상에 대입합니다: Value = null |
| 2812 | assignment | 값을 대상에 대입합니다: State = state |
| 2812 | assignment | 값을 대상에 대입합니다: ErrorMessage = message |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetItemState"]
 N0["L2811 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RequestPollingBlock` · L2816–2823

[Drilling.Common/Interface/Melsec/CMelsec.cs:2816–2823](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2816-L2823)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.RequestPollingBlock(Drilling.Common.Interface.CMelsec.PollBlock) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| block | Drilling.Common.Interface.CMelsec.PollBlock | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2602–2602](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2602-L2602) | RequestPollingBlock | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2626–2626](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2626-L2626) | RequestPollingBlock | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2796–2796](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2796-L2796) | RequestPollingBlock | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2821 | _requestedPollBlockSet.Add | resolved | bool System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock>.Add(Drilling.Common.Interface.CMelsec.PollBlock) |
| 2822 | _requestedPollBlocks.Enqueue | resolved | void System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock>.Enqueue(Drilling.Common.Interface.CMelsec.PollBlock) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2818 | if | 조건에 따라 분기합니다: if (block.IsReading) |
| 2819 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2820 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |
| 2821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlockSet.Add(block) |
| 2821 | if | 조건에 따라 분기합니다: if (_requestedPollBlockSet.Add(block)) |
| 2822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlocks.Enqueue(block) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RequestPollingBlock"]
 N0["L2818 if"]
 M -->|포함| N0
 N1["L2821 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PollNextCacheBlock` · L2825–2847

[Drilling.Common/Interface/Melsec/CMelsec.cs:2825–2847](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2825-L2847)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollNextCacheBlock() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L205-L205) | PollNextCacheBlock | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:213–213](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L213-L213) | PollNextCacheBlock | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:223–223](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L223-L223) | PollNextCacheBlock | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2829 | Stopwatch.StartNew | resolved | System.Diagnostics.Stopwatch System.Diagnostics.Stopwatch.StartNew() |
| 2844 | TryPollNextCacheBlock | resolved | bool Drilling.Common.Interface.CMelsec.TryPollNextCacheBlock() · Drilling.Common/Interface/Melsec/CMelsec.cs:2853 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2829 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.StartNew() |
| 2829 | local-declaration | 지역 변수를 선언합니다: var elapsed = Stopwatch.StartNew(); |
| 2829 | variable-initializer | 변수의 초기값을 지정합니다: elapsed = Stopwatch.StartNew() |
| 2830 | variable-initializer | 변수의 초기값을 지정합니다: attempt = 0 |
| 2830 | for | 초기화·조건·증감이 있는 반복입니다: for (var attempt = 0; attempt < 4; attempt++) |
| 2832 | if | 조건에 따라 분기합니다: if (attempt > 0) |
| 2834 | if | 조건에 따라 분기합니다: if (elapsed.ElapsedMilliseconds >= 8) |
| 2835 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2837 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_requestLock) |
| 2838 | if | 조건에 따라 분기합니다: if (_requestQueue.Count > 0 &#124;&#124; !_acceptRequests) |
| 2839 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2840 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_writeLock) |
| 2841 | if | 조건에 따라 분기합니다: if (_activeWriteCommand is not null &#124;&#124; _writeQueue.Count > 0) |
| 2842 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryPollNextCacheBlock() |
| 2844 | if | 조건에 따라 분기합니다: if (!TryPollNextCacheBlock()) |
| 2845 | break | 해당 반복/분기 구간을 종료합니다: break; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PollNextCacheBlock"]
 N0["L2830 for"]
 M -->|포함| N0
 N1["L2832 if"]
 N0 -->|포함| N1
 N2["L2834 if"]
 N1 -->|포함| N2
 N3["L2837 lock"]
 N1 -->|포함| N3
 N4["L2838 if"]
 N3 -->|포함| N4
 N5["L2840 lock"]
 N1 -->|포함| N5
 N6["L2841 if"]
 N5 -->|포함| N6
 N7["L2844 if"]
 N0 -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PollDue` · L2850–2851

[Drilling.Common/Interface/Melsec/CMelsec.cs:2850–2851](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2850-L2851)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.PollDue(Drilling.Common.Interface.CMelsec.PollBlock, System.DateTimeOffset) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| block | Drilling.Common.Interface.CMelsec.PollBlock | None | False /  |
| now | System.DateTimeOffset | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2882–2882](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2882-L2882) | PollDue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2891–2891](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2891-L2891) | PollDue | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2897–2897](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2897-L2897) | PollDue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2851 | _pollDeviceBackoff.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.TryGetValue(int, out System.DateTimeOffset) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.TryGetValue(block.DeviceNo, out var retryAt) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryPollNextCacheBlock` · L2853–2962

[Drilling.Common/Interface/Melsec/CMelsec.cs:2853–2962](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2853-L2962)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.TryPollNextCacheBlock() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2844–2844](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2844-L2844) | TryPollNextCacheBlock | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2869 | _requestedPollBlocks.TryDequeue | resolved | bool System.Collections.Generic.Queue<Drilling.Common.Interface.CMelsec.PollBlock>.TryDequeue(out Drilling.Common.Interface.CMelsec.PollBlock) |
| 2871 | _requestedPollBlockSet.Remove | resolved | bool System.Collections.Generic.HashSet<Drilling.Common.Interface.CMelsec.PollBlock>.Remove(Drilling.Common.Interface.CMelsec.PollBlock) |
| 2873 | _pollDeviceBackoff.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.TryGetValue(int, out System.DateTimeOffset) |
| 2882 | PollDue | resolved | bool Drilling.Common.Interface.CMelsec.PollDue(Drilling.Common.Interface.CMelsec.PollBlock, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2850 |
| 2891 | PollDue | resolved | bool Drilling.Common.Interface.CMelsec.PollDue(Drilling.Common.Interface.CMelsec.PollBlock, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2850 |
| 2897 | PollDue | resolved | bool Drilling.Common.Interface.CMelsec.PollDue(Drilling.Common.Interface.CMelsec.PollBlock, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2850 |
| 2904 | Math.Min | resolved | int System.Math.Min(int, int) |
| 2906 | RecordMelsecTiming | resolved | void Drilling.Common.Interface.CMelsec.RecordMelsecTiming(string, double, string) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:19 |
| 2915 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 2916 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 2920 | _melsecNetPaths.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, int>.ContainsKey(int) |
| 2923 | CompletePollingFailure | resolved | void Drilling.Common.Interface.CMelsec.CompletePollingFailure(Drilling.Common.Interface.CMelsec.PollBlock, int, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2964 |
| 2928 | ReadWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadWords(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int, System.Threading.CancellationToken, bool, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1651 |
| 2931 | selected.Items.Select(item => (Item: item, Value: DecodePollingValue(item, words, selected.Start))).ToArray | resolved | (Drilling.Common.Interface.CMelsec.PollItem Item, object Value)[] System.Collections.Generic.IEnumerable<(Drilling.Common.Interface.CMelsec.PollItem Item, object Value)>.ToArray<(Drilling.Common.Interface.CMelsec.PollItem Item, object Value)>() |
| 2931 | selected.Items.Select | resolved | System.Collections.Generic.IEnumerable<(Drilling.Common.Interface.CMelsec.PollItem Item, object Value)> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollItem>.Select<Drilling.Common.Interface.CMelsec.PollItem, (Drilling.Common.Interface.CMelsec.PollItem Item, object Value)>(System.Func<Drilling.Common.Interface.CMelsec.PollItem, (Drilling.Common.Interface.CMelsec.PollItem Item, object Value)>) |
| 2931 | DecodePollingValue | resolved | object Drilling.Common.Interface.CMelsec.DecodePollingValue(Drilling.Common.Interface.CMelsec.PollItem, ushort[], int) · Drilling.Common/Interface/Melsec/CMelsec.cs:2979 |
| 2938 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 2939 | _cachedValues.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 2940 | WithCacheFreshness | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE Drilling.Common.Interface.CMelsec.WithCacheFreshness(string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.cs:2639 |
| 2941 | QueuePollReadLog | resolved | void Drilling.Common.Interface.CMelsec.QueuePollReadLog(Drilling.Common.Interface.CMelsec.PollItem, ushort[], int, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset) · Drilling.Common/Interface/Melsec/CMelsec.InterfaceLog.cs:44 |
| 2942 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |
| 2943 | SaveReadSnapshot | resolved | void Drilling.Common.Interface.CMelsec.SaveReadSnapshot(string, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1596 |
| 2948 | updatedAt.AddMilliseconds | resolved | System.DateTimeOffset System.DateTimeOffset.AddMilliseconds(double) |
| 2949 | _pollDeviceBackoff.Remove | resolved | bool System.Collections.Generic.Dictionary<int, System.DateTimeOffset>.Remove(int) |
| 2954 | CompletePollingFailure | resolved | void Drilling.Common.Interface.CMelsec.CompletePollingFailure(Drilling.Common.Interface.CMelsec.PollBlock, int, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2964 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2855 | if | 조건에 따라 분기합니다: if (!_acceptRequests) |
| 2856 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 2857 | local-declaration | 지역 변수를 선언합니다: PollBlock? selected = null; |
| 2857 | variable-initializer | 변수의 초기값을 지정합니다: selected = null |
| 2858 | local-declaration | 지역 변수를 선언합니다: int generation; |
| 2859 | local-declaration | 지역 변수를 선언합니다: var now = DateTimeOffset.UtcNow; |
| 2859 | variable-initializer | 변수의 초기값을 지정합니다: now = DateTimeOffset.UtcNow |
| 2860 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2862 | assignment | 값을 대상에 대입합니다: generation = _pollGeneration |
| 2866 | local-declaration | 지역 변수를 선언합니다: var requested = false; |
| 2866 | variable-initializer | 변수의 초기값을 지정합니다: requested = false |
| 2867 | if | 조건에 따라 분기합니다: if (_serveRequestedPoll) |
| 2869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlocks.TryDequeue(out var block) |
| 2869 | while | 조건을 먼저 확인하며 반복합니다: while (_requestedPollBlocks.TryDequeue(out var block)) |
| 2871 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _requestedPollBlockSet.Remove(block) |
| 2872 | if | 조건에 따라 분기합니다: if (block.IsReading &#124;&#124; block.NextReadAt > now &#124;&#124; (_pollDeviceBackoff.TryGetValue(block.DeviceNo, out var retryAt) && retryAt > now)) |
| 2873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.TryGetValue(block.DeviceNo, out var retryAt) |
| 2874 | continue | 다음 반복으로 진행합니다: continue; |
| 2875 | assignment | 값을 대상에 대입합니다: selected = block |
| 2876 | assignment | 값을 대상에 대입합니다: requested = true |
| 2877 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2880 | if | 조건에 따라 분기합니다: if (selected is null && _controlPollStreak < 3) |
| 2881 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks) |
| 2882 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollDue(block, now) |
| 2882 | if | 조건에 따라 분기합니다: if (block.IsControl && PollDue(block, now) && (selected is null &#124;&#124; block.NextReadAt < selected.NextReadAt)) |
| 2884 | assignment | 값을 대상에 대입합니다: selected = block |
| 2885 | variable-initializer | 변수의 초기값을 지정합니다: scanned = 0 |
| 2885 | for | 초기화·조건·증감이 있는 반복입니다: for (var scanned = 0; selected is null && scanned < _pollBlocks.Count; scanned++) |
| 2887 | local-declaration | 지역 변수를 선언합니다: var index = _nextPollBlock++ % _pollBlocks.Count; |
| 2887 | variable-initializer | 변수의 초기값을 지정합니다: index = _nextPollBlock++ % _pollBlocks.Count |
| 2888 | if | 조건에 따라 분기합니다: if (_nextPollBlock >= _pollBlocks.Count) |
| 2889 | assignment | 값을 대상에 대입합니다: _nextPollBlock = 0 |
| 2890 | local-declaration | 지역 변수를 선언합니다: var block = _pollBlocks[index]; |
| 2890 | variable-initializer | 변수의 초기값을 지정합니다: block = _pollBlocks[index] |
| 2891 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollDue(block, now) |
| 2891 | if | 조건에 따라 분기합니다: if (!PollDue(block, now) &#124;&#124; block.IsControl && _controlPollStreak >= 3) |
| 2892 | continue | 다음 반복으로 진행합니다: continue; |
| 2893 | assignment | 값을 대상에 대입합니다: selected = block |
| 2895 | if | 조건에 따라 분기합니다: if (selected is null) |
| 2896 | foreach | 컬렉션 요소를 순회합니다: foreach (var block in _pollBlocks) |
| 2897 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PollDue(block, now) |
| 2897 | if | 조건에 따라 분기합니다: if (PollDue(block, now) && (selected is null &#124;&#124; block.NextReadAt < selected.NextReadAt)) |
| 2898 | assignment | 값을 대상에 대입합니다: selected = block |
| 2899 | if | 조건에 따라 분기합니다: if (selected is not null) |
| 2901 | assignment | 값을 대상에 대입합니다: selected.IsReading = true |
| 2902 | assignment | 값을 대상에 대입합니다: _serveRequestedPoll = !requested |
| 2903 | if | 조건에 따라 분기합니다: if (!requested) |
| 2904 | assignment | 값을 대상에 대입합니다: _controlPollStreak = selected.IsControl ? Math.Min(3, _controlPollStreak + 1) : 0 |
| 2904 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(3, _controlPollStreak + 1) |
| 2904 | conditional-expression | 조건에 따라 결과식을 선택합니다: selected.IsControl ? Math.Min(3, _controlPollStreak + 1) : 0 |
| 2905 | if | 조건에 따라 분기합니다: if (selected.IsControl && selected.LastReadAt is { } lastRead) |
| 2906 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecordMelsecTiming("CONTROL_POLL_GAP", (now - lastRead).TotalMilliseconds, selected.Items[0].Data.Id) |
| 2910 | if | 조건에 따라 분기합니다: if (selected == null) |
| 2911 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 2912 | try | 예외 처리 범위입니다: try |
| 2914 | local-declaration | 지역 변수를 선언합니다: var first = selected.Items[0].Data; |
| 2914 | variable-initializer | 변수의 초기값을 지정합니다: first = selected.Items[0].Data |
| 2915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(first) |
| 2915 | local-declaration | 지역 변수를 선언합니다: var connection = GetInterfaceData(first); |
| 2915 | variable-initializer | 변수의 초기값을 지정합니다: connection = GetInterfaceData(first) |
| 2916 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(connection) |
| 2916 | if | 조건에 따라 분기합니다: if (!IsSimulation(connection)) |
| 2918 | local-declaration | 지역 변수를 선언합니다: bool open; |
| 2919 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_ioLock) |
| 2920 | assignment | 값을 대상에 대입합니다: open = _melsecNetPaths.ContainsKey(selected.DeviceNo) |
| 2920 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _melsecNetPaths.ContainsKey(selected.DeviceNo) |
| 2921 | if | 조건에 따라 분기합니다: if (!open) |
| 2923 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompletePollingFailure(selected, generation, EN_MELSEC_CACHE_STATE.Offline, "MELSEC communication line is not open.") |
| 2924 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 2928 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadWords(first, selected.Address, selected.WordCount, CancellationToken.None, suppressLog: true) |
| 2928 | local-declaration | 지역 변수를 선언합니다: var words = ReadWords(first, selected.Address, selected.WordCount, CancellationToken.None, suppressLog: true); |
| 2928 | variable-initializer | 변수의 초기값을 지정합니다: words = ReadWords(first, selected.Address, selected.WordCount, CancellationToken.None, suppressLog: true) |
| 2929 | local-declaration | 지역 변수를 선언합니다: var updatedAt = DateTimeOffset.UtcNow; |
| 2929 | variable-initializer | 변수의 초기값을 지정합니다: updatedAt = DateTimeOffset.UtcNow |
| 2930 | local-declaration | 지역 변수를 선언합니다: var cycle = ReadCycleNo; |
| 2930 | variable-initializer | 변수의 초기값을 지정합니다: cycle = ReadCycleNo |
| 2931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Items.Select(item => (Item: item, Value: DecodePollingValue(item, words, selected.Start))).ToArray() |
| 2931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Items.Select(item => (Item: item, Value: DecodePollingValue(item, words, selected.Start))) |
| 2931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DecodePollingValue(item, words, selected.Start) |
| 2931 | local-declaration | 지역 변수를 선언합니다: var values = selected.Items.Select(item => (Item: item, Value: DecodePollingValue(item, words, selected.Start))).ToArray(); |
| 2931 | variable-initializer | 변수의 초기값을 지정합니다: values = selected.Items.Select(item => (Item: item, Value: DecodePollingValue(item, words, selected.Start))).ToArray() |
| 2932 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2934 | if | 조건에 따라 분기합니다: if (generation != _pollGeneration &#124;&#124; !_acceptRequests) |
| 2935 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 2936 | foreach | 컬렉션 요소를 순회합니다: foreach (var pair in values) |
| 2938 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(pair.Item.Data.Id) |
| 2938 | local-declaration | 지역 변수를 선언합니다: var id = NormalizeId(pair.Item.Data.Id); |
| 2938 | variable-initializer | 변수의 초기값을 지정합니다: id = NormalizeId(pair.Item.Data.Id) |
| 2939 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _cachedValues.TryGetValue(id, out var previous) |
| 2939 | conditional-expression | 조건에 따라 결과식을 선택합니다: _cachedValues.TryGetValue(id, out var previous) ? WithCacheFreshness(id, previous, updatedAt).State : EN_MELSEC_CACHE_STATE.Pending |
| 2939 | local-declaration | 지역 변수를 선언합니다: var previousQuality = _cachedValues.TryGetValue(id, out var previous) ? WithCacheFreshness(id, previous, updatedAt).State : EN_MELSEC_CACHE_STATE.Pending; |
| 2939 | variable-initializer | 변수의 초기값을 지정합니다: previousQuality = _cachedValues.TryGetValue(id, out var previous) ? WithCacheFreshness(id, previous, updatedAt).State : EN_MELSEC_CACHE_STATE.Pending |
| 2940 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithCacheFreshness(id, previous, updatedAt) |
| 2941 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueuePollReadLog(pair.Item, words, selected.Start, previousQuality, updatedAt) |
| 2942 | assignment | 값을 대상에 대입합니다: _cachedValues[id] = new(id, pair.Value, EN_MELSEC_CACHE_STATE.Valid, updatedAt, cycle, "") |
| 2942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(id, pair.Value, EN_MELSEC_CACHE_STATE.Valid, updatedAt, cycle, "") |
| 2943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveReadSnapshot(id, pair.Value) |
| 2947 | assignment | 값을 대상에 대입합니다: selected.LastReadAt = updatedAt |
| 2948 | assignment | 값을 대상에 대입합니다: selected.NextReadAt = updatedAt.AddMilliseconds(selected.IntervalMs) |
| 2948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: updatedAt.AddMilliseconds(selected.IntervalMs) |
| 2949 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollDeviceBackoff.Remove(selected.DeviceNo) |
| 2952 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 2954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompletePollingFailure(selected, generation, EN_MELSEC_CACHE_STATE.Error, exception.Message) |
| 2956 | finally | 종료 정리 구간입니다: finally |
| 2958 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2959 | assignment | 값을 대상에 대입합니다: selected.IsReading = false |
| 2961 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryPollNextCacheBlock"]
 N0["L2855 if"]
 M -->|포함| N0
 N1["L2860 lock"]
 M -->|포함| N1
 N2["L2867 if"]
 N1 -->|포함| N2
 N3["L2869 while"]
 N2 -->|포함| N3
 N4["L2872 if"]
 N3 -->|포함| N4
 N5["L2880 if"]
 N1 -->|포함| N5
 N6["L2881 foreach"]
 N5 -->|포함| N6
 N7["L2882 if"]
 N6 -->|포함| N7
 N8["L2885 for"]
 N1 -->|포함| N8
 N9["L2888 if"]
 N8 -->|포함| N9
 N10["L2891 if"]
 N8 -->|포함| N10
 N11["L2895 if"]
 N1 -->|포함| N11
 N12["L2896 foreach"]
 N11 -->|포함| N12
 N13["L2897 if"]
 N12 -->|포함| N13
 N14["L2899 if"]
 N1 -->|포함| N14
 N15["L2903 if"]
 N14 -->|포함| N15
 N16["L2905 if"]
 N14 -->|포함| N16
 N17["L2910 if"]
 M -->|포함| N17
 N18["L2912 try"]
 M -->|포함| N18
 N19["L2916 if"]
 N18 -->|포함| N19
 N20["L2919 lock"]
 N19 -->|포함| N20
 N21["L2921 if"]
 N19 -->|포함| N21
 N22["L2932 lock"]
 N18 -->|포함| N22
 N23["L2934 if"]
 N22 -->|포함| N23
 N24["L2936 foreach"]
 N22 -->|포함| N24
 N25["L2952 catch"]
 N18 -->|포함| N25
 N26["L2956 finally"]
 N18 -->|포함| N26
 N27["L2958 lock"]
 N26 -->|포함| N27
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompletePollingFailure` · L2964–2977

[Drilling.Common/Interface/Melsec/CMelsec.cs:2964–2977](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2964-L2977)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.CompletePollingFailure(Drilling.Common.Interface.CMelsec.PollBlock, int, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| block | Drilling.Common.Interface.CMelsec.PollBlock | None | False /  |
| generation | int | None | False /  |
| state | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2923–2923](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2923-L2923) | CompletePollingFailure | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2954–2954](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2954-L2954) | CompletePollingFailure | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2971 | DateTimeOffset.UtcNow.AddMilliseconds | resolved | System.DateTimeOffset System.DateTimeOffset.AddMilliseconds(double) |
| 2974 | _pollBlocks.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.CMelsec.PollBlock>.Where<Drilling.Common.Interface.CMelsec.PollBlock>(System.Func<Drilling.Common.Interface.CMelsec.PollBlock, bool>) |
| 2975 | SetBlockState | resolved | void Drilling.Common.Interface.CMelsec.SetBlockState(Drilling.Common.Interface.CMelsec.PollBlock, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2801 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2966 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 2968 | if | 조건에 따라 분기합니다: if (generation != _pollGeneration &#124;&#124; !_acceptRequests) |
| 2969 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2971 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTimeOffset.UtcNow.AddMilliseconds(PollingFailureBackoffMs) |
| 2971 | local-declaration | 지역 변수를 선언합니다: var retryAt = DateTimeOffset.UtcNow.AddMilliseconds(PollingFailureBackoffMs); |
| 2971 | variable-initializer | 변수의 초기값을 지정합니다: retryAt = DateTimeOffset.UtcNow.AddMilliseconds(PollingFailureBackoffMs) |
| 2972 | assignment | 값을 대상에 대입합니다: block.NextReadAt = retryAt |
| 2973 | assignment | 값을 대상에 대입합니다: _pollDeviceBackoff[block.DeviceNo] = retryAt |
| 2974 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlocks.Where(candidate => candidate.DeviceNo == block.DeviceNo) |
| 2974 | foreach | 컬렉션 요소를 순회합니다: foreach (var affected in _pollBlocks.Where(candidate => candidate.DeviceNo == block.DeviceNo)) |
| 2975 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetBlockState(affected, state, message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompletePollingFailure"]
 N0["L2966 lock"]
 M -->|포함| N0
 N1["L2968 if"]
 N0 -->|포함| N1
 N2["L2974 foreach"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DecodePollingValue` · L2979–3006

[Drilling.Common/Interface/Melsec/CMelsec.cs:2979–3006](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2979-L3006)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec.DecodePollingValue(Drilling.Common.Interface.CMelsec.PollItem, ushort[], int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Interface.CMelsec.PollItem | None | False /  |
| blockWords | ushort[] | None | False /  |
| start | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2931–2931](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2931-L2931) | DecodePollingValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2981 | blockWords.AsSpan(item.Address.Number - start, item.WordCount).ToArray | resolved | ushort[] System.Span<ushort>.ToArray() |
| 2981 | blockWords.AsSpan | resolved | System.Span<ushort> ushort[].AsSpan<ushort>(int, int) |
| 2987 | ScaleInteger | resolved | object Drilling.Common.Interface.CMelsec.ScaleInteger(int, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:3008 |
| 2989 | ScaleInteger | resolved | object Drilling.Common.Interface.CMelsec.ScaleInteger(int, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:3008 |
| 2989 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 2991 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 2993 | WordsToFloat | resolved | float Drilling.Common.Interface.CMelsec.WordsToFloat(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2111 |
| 3002 | Encoding.ASCII.GetString(bytes).TrimEnd | resolved | string string.TrimEnd(params System.ReadOnlySpan<char>) |
| 3002 | Encoding.ASCII.GetString | resolved · 동적 구현 선택 가능 | string System.Text.Encoding.GetString(byte[]) |
| 3004 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2981 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: blockWords.AsSpan(item.Address.Number - start, item.WordCount).ToArray() |
| 2981 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: blockWords.AsSpan(item.Address.Number - start, item.WordCount) |
| 2981 | local-declaration | 지역 변수를 선언합니다: var words = blockWords.AsSpan(item.Address.Number - start, item.WordCount).ToArray(); |
| 2981 | variable-initializer | 변수의 초기값을 지정합니다: words = blockWords.AsSpan(item.Address.Number - start, item.WordCount).ToArray() |
| 2982 | switch | 값에 따라 분기합니다: switch (item.Data.DataType) |
| 2984 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Bit: |
| 2985 | return | 호출자에게 값 또는 제어를 반환합니다: return (words[0] & (1 << item.Address.BitIndex!.Value)) != 0; |
| 2986 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Word: |
| 2987 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ScaleInteger(words[0], item.Data.ReadScale) |
| 2987 | return | 호출자에게 값 또는 제어를 반환합니다: return ScaleInteger(words[0], item.Data.ReadScale); |
| 2988 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.DWord: |
| 2989 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ScaleInteger(WordsToInt32(words), item.Data.ReadScale) |
| 2989 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32(words) |
| 2989 | return | 호출자에게 값 또는 제어를 반환합니다: return ScaleInteger(WordsToInt32(words), item.Data.ReadScale); |
| 2990 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Double: |
| 2991 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32(words) |
| 2991 | return | 호출자에게 값 또는 제어를 반환합니다: return WordsToInt32(words) * item.Data.ReadScale; |
| 2992 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.Float: |
| 2993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToFloat(words) |
| 2993 | return | 호출자에게 값 또는 제어를 반환합니다: return WordsToFloat(words) * item.Data.ReadScale; |
| 2994 | case | 분기값/패턴의 구간입니다: case EN_MELSEC_DATA_TYPE.String: |
| 2995 | local-declaration | 지역 변수를 선언합니다: var bytes = new byte[words.Length * 2]; |
| 2995 | variable-initializer | 변수의 초기값을 지정합니다: bytes = new byte[words.Length * 2] |
| 2996 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 2996 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < words.Length; index++) |
| 2998 | assignment | 값을 대상에 대입합니다: bytes[index * 2] = (byte)words[index] |
| 2999 | assignment | 값을 대상에 대입합니다: bytes[index * 2 + 1] = (byte)(words[index] >> 8) |
| 3002 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetString(bytes).TrimEnd('\0', ' ') |
| 3002 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Encoding.ASCII.GetString(bytes) |
| 3002 | return | 호출자에게 값 또는 제어를 반환합니다: return Encoding.ASCII.GetString(bytes).TrimEnd('\0', ' '); |
| 3003 | case | 분기값/패턴의 구간입니다: default: |
| 3004 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"Unsupported MELSEC cache type: {item.Data.DataType}.") |
| 3004 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"Unsupported MELSEC cache type: {item.Data.DataType}."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DecodePollingValue"]
 N0["L2982 switch"]
 M -->|포함| N0
 N1["L2996 for"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ScaleInteger` · L3008–3008

[Drilling.Common/Interface/Melsec/CMelsec.cs:3008–3008](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3008-L3008)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Interface.CMelsec.ScaleInteger(int, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| rawValue | int | None | False /  |
| readScale | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2987–2987](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2987-L2987) | ScaleInteger | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2989–2989](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2989-L2989) | ScaleInteger | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3008 | conditional-expression | 조건에 따라 결과식을 선택합니다: readScale == 1 ? (object)rawValue : rawValue * readScale |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsControlPollItem` · L3010–3014

[Drilling.Common/Interface/Melsec/CMelsec.cs:3010–3014](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3010-L3014)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsControlPollItem(Drilling.Common.Interface.CMelsec.PollItem) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Interface.CMelsec.PollItem | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:2713–2713](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L2713-L2713) | IsControlPollItem | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3031–3031](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3031-L3031) | IsControlPollItem | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3010 | item.Data.Id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 3011 | item.Data.Id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 3012 | item.Data.Id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 3013 | item.Data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 3014 | item.Data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3010 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Data.Id.StartsWith("HANDSHAKE_", StringComparison.OrdinalIgnoreCase) |
| 3011 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Data.Id.StartsWith("MOTOR_STAGE_", StringComparison.OrdinalIgnoreCase) |
| 3012 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Data.Id.StartsWith("MOTOR_CAMERA_", StringComparison.OrdinalIgnoreCase) |
| 3013 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Data.Id.Equals(StageAlignBusyWordId, StringComparison.OrdinalIgnoreCase) |
| 3014 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Data.Id.Equals(StageProtectWindowCompleteId, StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Items` · L3017–3017

[Drilling.Common/Interface/Melsec/CMelsec.cs:3017–3017](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3017-L3017)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> Drilling.Common.Interface.CMelsec.PollBlock.Items |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Items` · L3017–3017

[Drilling.Common/Interface/Melsec/CMelsec.cs:3017–3017](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3017-L3017)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> Drilling.Common.Interface.CMelsec.PollBlock.Items.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.List<Drilling.Common.Interface.CMelsec.PollItem> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `DeviceNo` · L3018–3018

[Drilling.Common/Interface/Melsec/CMelsec.cs:3018–3018](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3018-L3018)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.DeviceNo |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Address` · L3019–3022

[Drilling.Common/Interface/Melsec/CMelsec.cs:3019–3022](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3019-L3022)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.PollBlock.Address |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3021 | assignment | 값을 대상에 대입합니다: BitIndex = null |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Start` · L3023–3023

[Drilling.Common/Interface/Melsec/CMelsec.cs:3023–3023](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3023-L3023)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.Start |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `End` · L3024–3024

[Drilling.Common/Interface/Melsec/CMelsec.cs:3024–3024](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3024-L3024)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.End |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_End` · L3024–3024

[Drilling.Common/Interface/Melsec/CMelsec.cs:3024–3024](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3024-L3024)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.End.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_End` · L3024–3024

[Drilling.Common/Interface/Melsec/CMelsec.cs:3024–3024](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3024-L3024)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.End.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `WordCount` · L3025–3025

[Drilling.Common/Interface/Melsec/CMelsec.cs:3025–3025](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3025-L3025)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.WordCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IntervalMs` · L3026–3026

[Drilling.Common/Interface/Melsec/CMelsec.cs:3026–3026](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3026-L3026)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IntervalMs` · L3026–3026

[Drilling.Common/Interface/Melsec/CMelsec.cs:3026–3026](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3026-L3026)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_IntervalMs` · L3026–3026

[Drilling.Common/Interface/Melsec/CMelsec.cs:3026–3026](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3026-L3026)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.IntervalMs.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `NextReadAt` · L3027–3027

[Drilling.Common/Interface/Melsec/CMelsec.cs:3027–3027](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3027-L3027)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_NextReadAt` · L3027–3027

[Drilling.Common/Interface/Melsec/CMelsec.cs:3027–3027](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3027-L3027)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_NextReadAt` · L3027–3027

[Drilling.Common/Interface/Melsec/CMelsec.cs:3027–3027](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3027-L3027)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.NextReadAt.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `AttemptNo` · L3028–3028

[Drilling.Common/Interface/Melsec/CMelsec.cs:3028–3028](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3028-L3028)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo |
| 접근/수식자 | Public / public |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_AttemptNo` · L3028–3028

[Drilling.Common/Interface/Melsec/CMelsec.cs:3028–3028](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3028-L3028)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_AttemptNo` · L3028–3028

[Drilling.Common/Interface/Melsec/CMelsec.cs:3028–3028](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3028-L3028)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.AttemptNo.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | long | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsReading` · L3029–3029

[Drilling.Common/Interface/Melsec/CMelsec.cs:3029–3029](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3029-L3029)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsReading |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsReading` · L3029–3029

[Drilling.Common/Interface/Melsec/CMelsec.cs:3029–3029](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3029-L3029)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsReading.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_IsReading` · L3029–3029

[Drilling.Common/Interface/Melsec/CMelsec.cs:3029–3029](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3029-L3029)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.IsReading.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `LastReadAt` · L3030–3030

[Drilling.Common/Interface/Melsec/CMelsec.cs:3030–3030](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3030-L3030)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_LastReadAt` · L3030–3030

[Drilling.Common/Interface/Melsec/CMelsec.cs:3030–3030](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3030-L3030)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_LastReadAt` · L3030–3030

[Drilling.Common/Interface/Melsec/CMelsec.cs:3030–3030](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3030-L3030)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.LastReadAt.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsControl` · L3031–3031

[Drilling.Common/Interface/Melsec/CMelsec.cs:3031–3031](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3031-L3031)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsControl |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3031 | IsControlPollItem | resolved | bool Drilling.Common.Interface.CMelsec.IsControlPollItem(Drilling.Common.Interface.CMelsec.PollItem) · Drilling.Common/Interface/Melsec/CMelsec.cs:3010 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsControlPollItem(first) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsControl` · L3031–3031

[Drilling.Common/Interface/Melsec/CMelsec.cs:3031–3031](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3031-L3031)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.PollBlock.IsControl.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_IsControl` · L3031–3031

[Drilling.Common/Interface/Melsec/CMelsec.cs:3031–3031](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3031-L3031)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PollBlock.IsControl.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec.PollBlock |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `UpdateStageMotionSimulationWords` · L3038–3051

[Drilling.Common/Interface/Melsec/CMelsec.cs:3038–3051](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3038-L3051)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.UpdateStageMotionSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| deviceNo | int | None | False /  |
| start | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS | None | False /  |
| wordCount | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1665–1665](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1665-L1665) | UpdateStageMotionSimulationWords | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3040 | _interfaceManager.GetStageMotionSimulationFeedback | resolved | System.Collections.Generic.IReadOnlyDictionary<string, double> Drilling.Common.Interface.CInterfaceManager.GetStageMotionSimulationFeedback(int?) · Drilling.Common/Interface/CInterfaceManager.cs:2168 |
| 3041 | Map.Where(row => row.DeviceNo == deviceNo && row.Access == EN_MELSEC_ACCESS.Read && feedback.ContainsKey(row.Id)).ToArray | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToArray<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>() |
| 3041 | Map.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 3041 | feedback.ContainsKey | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, double>.ContainsKey(string) |
| 3044 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 3049 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3040 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetStageMotionSimulationFeedback(deviceNo) |
| 3040 | local-declaration | 지역 변수를 선언합니다: var feedback = _interfaceManager.GetStageMotionSimulationFeedback(deviceNo); |
| 3040 | variable-initializer | 변수의 초기값을 지정합니다: feedback = _interfaceManager.GetStageMotionSimulationFeedback(deviceNo) |
| 3041 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Map.Where(row => row.DeviceNo == deviceNo && row.Access == EN_MELSEC_ACCESS.Read && feedback.ContainsKey(row.Id)).ToArray() |
| 3041 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Map.Where(row => row.DeviceNo == deviceNo && row.Access == EN_MELSEC_ACCESS.Read && feedback.ContainsKey(row.Id)) |
| 3041 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: feedback.ContainsKey(row.Id) |
| 3041 | local-declaration | 지역 변수를 선언합니다: var rows = Map.Where(row => row.DeviceNo == deviceNo && row.Access == EN_MELSEC_ACCESS.Read && feedback.ContainsKey(row.Id)).ToArray(); |
| 3041 | variable-initializer | 변수의 초기값을 지정합니다: rows = Map.Where(row => row.DeviceNo == deviceNo && row.Access == EN_MELSEC_ACCESS.Read && feedback.ContainsKey(row.Id)).ToArray() |
| 3042 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in rows) |
| 3044 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 3044 | local-declaration | 지역 변수를 선언합니다: var address = ParseAddress(row.Address); |
| 3044 | variable-initializer | 변수의 초기값을 지정합니다: address = ParseAddress(row.Address) |
| 3045 | if | 조건에 따라 분기합니다: if (address.Device != start.Device &#124;&#124; address.Number < start.Number &#124;&#124; (long)address.Number + row.Length > (long)start.Number + wordCount) |
| 3046 | continue | 다음 반복으로 진행합니다: continue; |
| 3047 | local-declaration | 지역 변수를 선언합니다: var value = feedback[row.Id]; |
| 3047 | variable-initializer | 변수의 초기값을 지정합니다: value = feedback[row.Id] |
| 3048 | if | 조건에 따라 분기합니다: if (row.DataType is EN_MELSEC_DATA_TYPE.Word or EN_MELSEC_DATA_TYPE.DWord or EN_MELSEC_DATA_TYPE.Double or EN_MELSEC_DATA_TYPE.Float) |
| 3049 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(row, value) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["UpdateStageMotionSimulationWords"]
 N0["L3042 foreach"]
 M -->|포함| N0
 N1["L3045 if"]
 N0 -->|포함| N1
 N2["L3048 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsSimulationOnlyRoute` · L3055–3055

[Drilling.Common/Interface/Melsec/CMelsec.cs:3055–3055](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3055-L3055)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:725–725](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L725-L725) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:854–854](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L854-L854) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1659–1659](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1659-L1659) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1771–1771](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1771-L1771) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3102–3102](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3102-L3102) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3162–3162](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3162-L3162) | IsSimulationOnlyRoute | False |
| [Drilling.Common/Station/CStationProcess.cs:3913–3913](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3913-L3913) | CMelsec.IsSimulationOnlyRoute | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:311–311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L311-L311) | CMelsec.IsSimulationOnlyRoute | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3055 | row.Address.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3055 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row.Address.StartsWith("SIM_DISTORTION_", StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DistortionMeasurementIds` · L3056–3058

[Drilling.Common/Interface/Melsec/CMelsec.cs:3056–3058](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3056-L3058)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<string> Drilling.Common.Interface.CMelsec.DistortionMeasurementIds |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.HashSet<string> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3056 | Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) .Concat(Enumerable.Range(1, 3).SelectMany(position => new[] { $"DISTORTION_POS{position}_CAM2X", $"DISTORTION_POS{position}_CAM2Y", $"DISTORTION_POS{position}_CAM4X", $"DISTORTION_POS{position}_CAM4Y" })).ToHashSet | resolved | System.Collections.Generic.HashSet<string> System.Collections.Generic.IEnumerable<string>.ToHashSet<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 3056 | Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) .Concat | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Concat<string>(System.Collections.Generic.IEnumerable<string>) |
| 3056 | Enumerable.Range(1, 4) .SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.SelectMany<int, string>(System.Func<int, System.Collections.Generic.IEnumerable<string>>) |
| 3056 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 3058 | Enumerable.Range(1, 3).SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.SelectMany<int, string>(System.Func<int, System.Collections.Generic.IEnumerable<string>>) |
| 3058 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) |
| 3056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) |
| 3056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) .Concat(Enumerable.Range(1, 3).SelectMany(position => new[] { $"DISTORTION_POS{position}_CAM2X", $"… |
| 3056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) .Concat(Enumerable.Range(1, 3).SelectMany(position => new[] { $"DISTORTION_POS{position}_CAM2X", $"… |
| 3056 | variable-initializer | 변수의 초기값을 지정합니다: DistortionMeasurementIds = Enumerable.Range(1, 4) .SelectMany(camera => new[] { $"DISTORTION_POS0_CAM{camera}X", $"DISTORTION_POS0_CAM{camera}Y" }) .Concat(Enumerable.Range(1, 3).SelectMany(position => new[] { $"DISTORTION_POS{pos |
| 3058 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 3).SelectMany(position => new[] { $"DISTORTION_POS{position}_CAM2X", $"DISTORTION_POS{position}_CAM2Y", $"DISTORTION_POS{position}_CAM4X", $"DISTORTION_POS{position}_CAM4Y" }) |
| 3058 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 3) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsDistortionMeasurementSimulationValue` · L3059–3060

[Drilling.Common/Interface/Melsec/CMelsec.cs:3059–3060](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3059-L3060)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsDistortionMeasurementSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3071–3071](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3071-L3071) | IsDistortionMeasurementSimulationValue | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | CMelsec.IsDistortionMeasurementSimulationValue | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L276-L276) | CMelsec.IsDistortionMeasurementSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3059 | DistortionMeasurementIds.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3059 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DistortionMeasurementIds.Contains(row.Id) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetDistortionMeasurementSimulationValue` · L3061–3061

[Drilling.Common/Interface/Melsec/CMelsec.cs:3061–3061](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3061-L3061)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValue(string, double) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| mm | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L175-L175) | interfaces.Melsec.SetDistortionMeasurementSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3061 | SetDistortionMeasurementSimulationValues | resolved | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValues(System.Collections.Generic.IReadOnlyDictionary<string, double>) · Drilling.Common/Interface/Melsec/CMelsec.cs:3062 |
| 3061 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3061 | assignment | 값을 대상에 대입합니다: [id] = mm |
| 3061 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetDistortionMeasurementSimulationValues(new Dictionary<string, double> { [id] = mm }) |
| 3061 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double> { [id] = mm } |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetDistortionMeasurementSimulationValues` · L3062–3082

[Drilling.Common/Interface/Melsec/CMelsec.cs:3062–3082](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3062-L3082)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValues(System.Collections.Generic.IReadOnlyDictionary<string, double>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, double> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3061–3061](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3061-L3061) | SetDistortionMeasurementSimulationValues | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:79–79](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L79-L79) | interfaces.Melsec.SetDistortionMeasurementSimulationValues | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3064 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?) |
| 3067 | values.Select(item => (Row: GetMapData(item.Key), item.Value)).ToArray | resolved | (Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)[] System.Collections.Generic.IEnumerable<(Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)>.ToArray<(Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)>() |
| 3067 | values.Select | resolved | System.Collections.Generic.IEnumerable<(Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>.Select<System.Collections.Generic.KeyValuePair<string, double>, (Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)>(System.Func<System.Collections.Generic.KeyValuePair<string, double>, (Drilling.Common.Interface.ST_MELSEC_MAP_DATA Row, double Value)>) |
| 3067 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 3071 | IsDistortionMeasurementSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsDistortionMeasurementSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3059 |
| 3071 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 3071 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 3072 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3073 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 3073 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 3073 | nameof | unresolved | None |
| 3074 | EncodeIntegerValue | resolved | int Drilling.Common.Interface.CMelsec.EncodeIntegerValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:537 |
| 3078 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |
| 3079 | PublishSimulationInput | resolved | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3083 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3064 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("입력할 Distortion 측정값이 없습니다.") |
| 3064 | if | 조건에 따라 분기합니다: if (values.Count == 0) |
| 3064 | throw | 예외를 발생/전달합니다: throw new ArgumentException("입력할 Distortion 측정값이 없습니다."); |
| 3065 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 3067 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Select(item => (Row: GetMapData(item.Key), item.Value)).ToArray() |
| 3067 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Select(item => (Row: GetMapData(item.Key), item.Value)) |
| 3067 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(item.Key) |
| 3067 | local-declaration | 지역 변수를 선언합니다: var rows = values.Select(item => (Row: GetMapData(item.Key), item.Value)).ToArray(); |
| 3067 | variable-initializer | 변수의 초기값을 지정합니다: rows = values.Select(item => (Row: GetMapData(item.Key), item.Value)).ToArray() |
| 3069 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in rows) |
| 3071 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsDistortionMeasurementSimulationValue(item.Row) |
| 3071 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(item.Row)) |
| 3071 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(item.Row) |
| 3071 | if | 조건에 따라 분기합니다: if (!IsDistortionMeasurementSimulationValue(item.Row) &#124;&#124; !IsSimulation(GetInterfaceData(item.Row))) |
| 3072 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC SIMULATION의 Distortion 측정값만 변경할 수 있습니다: " + item.Row.Id) |
| 3072 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC SIMULATION의 Distortion 측정값만 변경할 수 있습니다: " + item.Row.Id); |
| 3073 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(item.Value) |
| 3073 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(values), "유효한 mm 숫자를 입력하세요.") |
| 3073 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(values) |
| 3073 | if | 조건에 따라 분기합니다: if (!double.IsFinite(item.Value)) |
| 3073 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(values), "유효한 mm 숫자를 입력하세요."); |
| 3074 | assignment | 값을 대상에 대입합니다: _ = EncodeIntegerValue(item.Row, item.Value / item.Row.ReadScale) |
| 3074 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EncodeIntegerValue(item.Row, item.Value / item.Row.ReadScale) |
| 3076 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in rows) |
| 3078 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(item.Row, item.Value) |
| 3079 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishSimulationInput(item.Row) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetDistortionMeasurementSimulationValues"]
 N0["L3064 if"]
 M -->|포함| N0
 N1["L3065 lock"]
 M -->|포함| N1
 N2["L3069 foreach"]
 N1 -->|포함| N2
 N3["L3071 if"]
 N2 -->|포함| N3
 N4["L3073 if"]
 N2 -->|포함| N4
 N5["L3076 foreach"]
 N1 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PublishSimulationInput` · L3083–3089

[Drilling.Common/Interface/Melsec/CMelsec.cs:3083–3089](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3083-L3089)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:726–726](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L726-L726) | PublishSimulationInput | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3079–3079](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3079-L3079) | PublishSimulationInput | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3102–3102](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3102-L3102) | PublishSimulationInput | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3162–3162](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3162-L3162) | PublishSimulationInput | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3086 | WordsToInt32 | resolved | int Drilling.Common.Interface.CMelsec.WordsToInt32(System.Collections.Generic.IReadOnlyList<ushort>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2089 |
| 3086 | ReadSimulationWords | resolved | ushort[] Drilling.Common.Interface.CMelsec.ReadSimulationWords(int, Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:1849 |
| 3086 | ParseAddress | resolved | Drilling.Common.Interface.CMelsec.ST_MELSEC_ADDRESS Drilling.Common.Interface.CMelsec.ParseAddress(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:1980 |
| 3087 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |
| 3088 | new | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.ST_MELSEC_CACHED_VALUE(string, object?, Drilling.Common.Interface.EN_MELSEC_CACHE_STATE, System.DateTimeOffset?, long, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3274 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WordsToInt32(ReadSimulationWords(row.DeviceNo, ParseAddress(row.Address), 2)) |
| 3086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadSimulationWords(row.DeviceNo, ParseAddress(row.Address), 2) |
| 3086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseAddress(row.Address) |
| 3086 | local-declaration | 지역 변수를 선언합니다: var raw = WordsToInt32(ReadSimulationWords(row.DeviceNo, ParseAddress(row.Address), 2)); |
| 3086 | variable-initializer | 변수의 초기값을 지정합니다: raw = WordsToInt32(ReadSimulationWords(row.DeviceNo, ParseAddress(row.Address), 2)) |
| 3087 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(row.Id) |
| 3087 | local-declaration | 지역 변수를 선언합니다: var key = NormalizeId(row.Id); |
| 3087 | variable-initializer | 변수의 초기값을 지정합니다: key = NormalizeId(row.Id) |
| 3088 | assignment | 값을 대상에 대입합니다: _cachedValues[key] = new(key, raw * row.ReadScale, EN_MELSEC_CACHE_STATE.Valid, DateTimeOffset.UtcNow, 0, "") |
| 3088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(key, raw * row.ReadScale, EN_MELSEC_CACHE_STATE.Valid, DateTimeOffset.UtcNow, 0, "") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsStageFlowSimulationSignal` · L3091–3091

[Drilling.Common/Interface/Melsec/CMelsec.cs:3091–3091](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3091-L3091)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsStageFlowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3097–3097](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3097-L3097) | IsStageFlowSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | CMelsec.IsStageFlowSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:171–171](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L171-L171) | CMelsec.IsStageFlowSimulationSignal | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3091 | IsStageSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3128 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3091 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStageSimulationSignal(data) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetStageFlowSimulationValue` · L3092–3106

[Drilling.Common/Interface/Melsec/CMelsec.cs:3092–3106](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3092-L3106)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetStageFlowSimulationValue(string, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStageReviewSequences.cs:373–373](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStageReviewSequences.cs#L373-L373) | _interfaces.Melsec.SetStageFlowSimulationValue | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L172-L172) | interfaces.Melsec.SetStageFlowSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3096 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 3097 | IsStageFlowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageFlowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3091 |
| 3097 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 3097 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 3098 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3100 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 3100 | nameof | unresolved | None |
| 3101 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |
| 3102 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 3102 | PublishSimulationInput | resolved | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3083 |
| 3103 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 3103 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3094 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 3096 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 3096 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 3096 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 3097 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStageFlowSimulationSignal(data) |
| 3097 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(data)) |
| 3097 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 3097 | if | 조건에 따라 분기합니다: if (!IsStageFlowSimulationSignal(data) &#124;&#124; !IsSimulation(GetInterfaceData(data))) |
| 3098 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC Simulation의 Stage Move / IOF 수신 항목만 변경할 수 있습니다: " + id) |
| 3098 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC Simulation의 Stage Move / IOF 수신 항목만 변경할 수 있습니다: " + id); |
| 3099 | if | 조건에 따라 분기합니다: if (value is not (0 or 1)) |
| 3100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(value)) |
| 3100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(value) |
| 3100 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(value)); |
| 3101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(data, value) |
| 3102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(data) |
| 3102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishSimulationInput(data) |
| 3102 | if | 조건에 따라 분기합니다: if (IsSimulationOnlyRoute(data)) |
| 3103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(NormalizeId(id), out var block) |
| 3103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 3103 | if | 조건에 따라 분기합니다: if (_pollBlockById.TryGetValue(NormalizeId(id), out var block)) |
| 3104 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetStageFlowSimulationValue"]
 N0["L3094 lock"]
 M -->|포함| N0
 N1["L3097 if"]
 N0 -->|포함| N1
 N2["L3099 if"]
 N0 -->|포함| N2
 N3["L3102 if"]
 N0 -->|포함| N3
 N4["L3103 if"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsStageProtectWindowSimulationSignal` · L3108–3108

[Drilling.Common/Interface/Melsec/CMelsec.cs:3108–3108](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3108-L3108)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsStageProtectWindowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3115–3115](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3115-L3115) | IsStageProtectWindowSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | CMelsec.IsStageProtectWindowSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:169–169](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L169-L169) | CMelsec.IsStageProtectWindowSimulationSignal | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3108 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 3108 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 3108 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(data.ReadScale) |
| 3108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase) |
| 3108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(StageProtectWindowCompleteId, StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetStageProtectWindowSimulationValue` · L3110–3126

[Drilling.Common/Interface/Melsec/CMelsec.cs:3110–3126](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3110-L3126)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetStageProtectWindowSimulationValue(string, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

원본 XML 주석:

````xml
/// <summary>Stage-owned Tray Count / completion input in simulation memory only.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| value | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:170–170](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L170-L170) | interfaces.Melsec.SetStageProtectWindowSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3114 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 3115 | IsStageProtectWindowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageProtectWindowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3108 |
| 3116 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3117 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 3119 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 3119 | nameof | unresolved | None |
| 3120 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 3120 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 3121 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3122 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |
| 3123 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 3123 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3112 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 3114 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 3114 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 3114 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 3115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStageProtectWindowSimulationSignal(data) |
| 3115 | if | 조건에 따라 분기합니다: if (!IsStageProtectWindowSimulationSignal(data)) |
| 3116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Stage 수신용 Protect Window 항목이 아닙니다: {id}") |
| 3116 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Stage 수신용 Protect Window 항목이 아닙니다: {id}"); |
| 3117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase) |
| 3117 | local-declaration | 지역 변수를 선언합니다: var isCount = data.Id.Equals(StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase); |
| 3117 | variable-initializer | 변수의 초기값을 지정합니다: isCount = data.Id.Equals(StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase) |
| 3118 | conditional-expression | 조건에 따라 결과식을 선택합니다: isCount ? value is < 0 or > ushort.MaxValue : value is not (0 or 1) |
| 3118 | if | 조건에 따라 분기합니다: if (isCount ? value is < 0 or > ushort.MaxValue : value is not (0 or 1)) |
| 3119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(value), isCount ? "Tray Count 원시값은 0~65535의 정수여야 합니다." : "교체완료 신호는 0 또는 1이어야 합니다.") |
| 3119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(value) |
| 3119 | conditional-expression | 조건에 따라 결과식을 선택합니다: isCount ? "Tray Count 원시값은 0~65535의 정수여야 합니다." : "교체완료 신호는 0 또는 1이어야 합니다." |
| 3119 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(value), isCount ? "Tray Count 원시값은 0~65535의 정수여야 합니다." : "교체완료 신호는 0 또는 1이어야 합니다."); |
| 3120 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(data)) |
| 3120 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 3120 | if | 조건에 따라 분기합니다: if (!IsSimulation(GetInterfaceData(data))) |
| 3121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다.") |
| 3121 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다."); |
| 3122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(data, isCount ? value * data.ReadScale : value) |
| 3122 | conditional-expression | 조건에 따라 결과식을 선택합니다: isCount ? value * data.ReadScale : value |
| 3123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(NormalizeId(id), out var block) |
| 3123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 3123 | if | 조건에 따라 분기합니다: if (_pollBlockById.TryGetValue(NormalizeId(id), out var block)) |
| 3124 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetStageProtectWindowSimulationValue"]
 N0["L3112 lock"]
 M -->|포함| N0
 N1["L3115 if"]
 N0 -->|포함| N1
 N2["L3118 if"]
 N0 -->|포함| N2
 N3["L3120 if"]
 N0 -->|포함| N3
 N4["L3123 if"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsStageSimulationSignal` · L3128–3128

[Drilling.Common/Interface/Melsec/CMelsec.cs:3128–3128](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3128-L3128)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsStageSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3091–3091](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3091-L3091) | IsStageSimulationSignal | False |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3157–3157](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3157-L3157) | IsStageSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | CMelsec.IsStageSimulationSignal | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3128 | data.Id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 3128 | double.IsFinite | resolved | bool double.IsFinite(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.StartsWith("HANDSHAKE_STG_", StringComparison.OrdinalIgnoreCase) |
| 3128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(data.ReadScale) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsStageAlignSimulationSignal` · L3129–3129

[Drilling.Common/Interface/Melsec/CMelsec.cs:3129–3129](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3129-L3129)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3138–3138](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3138-L3138) | IsStageAlignSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | CMelsec.IsStageAlignSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:167–167](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L167-L167) | CMelsec.IsStageAlignSimulationSignal | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:313–313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L313-L313) | CMelsec.IsStageAlignSimulationSignal | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3129 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 3129 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 3129 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals("SDC_DO_ALIGN_STATUS", StringComparison.OrdinalIgnoreCase) |
| 3129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals("SDC_DO_ALIGN_COMPLETE", StringComparison.OrdinalIgnoreCase) |
| 3129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(StageAlignBusyWordId, StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetStageAlignSimulationValue` · L3131–3146

[Drilling.Common/Interface/Melsec/CMelsec.cs:3131–3146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3131-L3146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetStageAlignSimulationValue(string, int) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

원본 XML 주석:

````xml
/// <summary>Writes a Stage-owned Align raw Word into simulation memory, never to a PLC.</summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| rawValue | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:168–168](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L168-L168) | interfaces.Melsec.SetStageAlignSimulationValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3134 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?, string?) |
| 3134 | nameof | unresolved | None |
| 3137 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 3138 | IsStageAlignSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3129 |
| 3139 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3140 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 3140 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 3141 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3142 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |
| 3143 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 3143 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3133 | if | 조건에 따라 분기합니다: if (rawValue is < 0 or > ushort.MaxValue) |
| 3134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(rawValue), "1 WORD 원시값은 0~65535의 정수여야 합니다.") |
| 3134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(rawValue) |
| 3134 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(rawValue), "1 WORD 원시값은 0~65535의 정수여야 합니다."); |
| 3135 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 3137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 3137 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 3137 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 3138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStageAlignSimulationSignal(data) |
| 3138 | if | 조건에 따라 분기합니다: if (!IsStageAlignSimulationSignal(data)) |
| 3139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Stage 수신용 ALIGN 신호가 아닙니다: {id}") |
| 3139 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Stage 수신용 ALIGN 신호가 아닙니다: {id}"); |
| 3140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(data)) |
| 3140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 3140 | if | 조건에 따라 분기합니다: if (!IsSimulation(GetInterfaceData(data))) |
| 3141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다.") |
| 3141 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다."); |
| 3142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(data, rawValue * data.ReadScale) |
| 3143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(NormalizeId(id), out var block) |
| 3143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 3143 | if | 조건에 따라 분기합니다: if (_pollBlockById.TryGetValue(NormalizeId(id), out var block)) |
| 3144 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetStageAlignSimulationValue"]
 N0["L3133 if"]
 M -->|포함| N0
 N1["L3135 lock"]
 M -->|포함| N1
 N2["L3138 if"]
 N1 -->|포함| N2
 N3["L3140 if"]
 N1 -->|포함| N3
 N4["L3143 if"]
 N1 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetStageSimulationSignal` · L3152–3166

[Drilling.Common/Interface/Melsec/CMelsec.cs:3152–3166](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3152-L3166)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Interface.CMelsec.SetStageSimulationSignal(string, bool) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsec |

원본 XML 주석:

````xml
/// <summary>
        /// Emulates the Stage PC's input in memory only. Does not use native writes,
        /// change map access, or publish UI/action flags. The common poller reads it normally.
        /// </summary>
````

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |
| on | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:174–174](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L174-L174) | interfaces.Melsec.SetStageSimulationSignal | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3156 | GetMapData | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA Drilling.Common.Interface.CMelsec.GetMapData(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:309 |
| 3157 | IsStageSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3128 |
| 3158 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3159 | IsSimulation | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulation(Drilling.Common.Interface.ST_INTERFACE_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1844 |
| 3159 | GetInterfaceData | resolved | Drilling.Common.Interface.ST_INTERFACE_DATA Drilling.Common.Interface.CMelsec.GetInterfaceData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:1839 |
| 3160 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 3161 | WriteSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.WriteSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, object) · Drilling.Common/Interface/Melsec/CMelsec.cs:1540 |
| 3162 | IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3055 |
| 3162 | PublishSimulationInput | resolved | void Drilling.Common.Interface.CMelsec.PublishSimulationInput(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3083 |
| 3163 | _pollBlockById.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.CMelsec.PollBlock>.TryGetValue(string, out Drilling.Common.Interface.CMelsec.PollBlock) |
| 3163 | NormalizeId | resolved | string Drilling.Common.Interface.CMelsec.NormalizeId(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2250 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3154 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_pollLock) |
| 3156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMapData(id) |
| 3156 | local-declaration | 지역 변수를 선언합니다: var data = GetMapData(id); |
| 3156 | variable-initializer | 변수의 초기값을 지정합니다: data = GetMapData(id) |
| 3157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStageSimulationSignal(data) |
| 3157 | if | 조건에 따라 분기합니다: if (!IsStageSimulationSignal(data)) |
| 3158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Stage 수신용 핸드셰이크 신호가 아닙니다: {id}") |
| 3158 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Stage 수신용 핸드셰이크 신호가 아닙니다: {id}"); |
| 3159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulation(GetInterfaceData(data)) |
| 3159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetInterfaceData(data) |
| 3159 | if | 조건에 따라 분기합니다: if (!IsSimulation(GetInterfaceData(data))) |
| 3160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다.") |
| 3160 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"MELSEC_{data.DeviceNo}가 SIMULATION 상태일 때만 변경할 수 있습니다."); |
| 3161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WriteSimulationValue(data, on ? 1 : 0) |
| 3161 | conditional-expression | 조건에 따라 결과식을 선택합니다: on ? 1 : 0 |
| 3162 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsSimulationOnlyRoute(data) |
| 3162 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PublishSimulationInput(data) |
| 3162 | if | 조건에 따라 분기합니다: if (IsSimulationOnlyRoute(data)) |
| 3163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _pollBlockById.TryGetValue(NormalizeId(id), out var block) |
| 3163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeId(id) |
| 3163 | if | 조건에 따라 분기합니다: if (_pollBlockById.TryGetValue(NormalizeId(id), out var block)) |
| 3164 | assignment | 값을 대상에 대입합니다: block.NextReadAt = DateTimeOffset.MinValue |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetStageSimulationSignal"]
 N0["L3154 lock"]
 M -->|포함| N0
 N1["L3157 if"]
 N0 -->|포함| N1
 N2["L3159 if"]
 N0 -->|포함| N2
 N3["L3162 if"]
 N0 -->|포함| N3
 N4["L3163 if"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Bit` · L3172–3172

[Drilling.Common/Interface/Melsec/CMelsec.cs:3172–3172](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3172-L3172)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Bit |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Word` · L3173–3173

[Drilling.Common/Interface/Melsec/CMelsec.cs:3173–3173](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3173-L3173)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Word |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `DWord` · L3174–3174

[Drilling.Common/Interface/Melsec/CMelsec.cs:3174–3174](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3174-L3174)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.DWord |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Double` · L3177–3177

[Drilling.Common/Interface/Melsec/CMelsec.cs:3177–3177](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3177-L3177)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Double |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Float` · L3178–3178

[Drilling.Common/Interface/Melsec/CMelsec.cs:3178–3178](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3178-L3178)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.Float |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `String` · L3179–3179

[Drilling.Common/Interface/Melsec/CMelsec.cs:3179–3179](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3179-L3179)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE.String |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `In` · L3184–3184

[Drilling.Common/Interface/Melsec/CMelsec.cs:3184–3184](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3184-L3184)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.In |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DIRECTION |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DIRECTION |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Out` · L3185–3185

[Drilling.Common/Interface/Melsec/CMelsec.cs:3185–3185](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3185-L3185)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.Out |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DIRECTION |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DIRECTION |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `InOut` · L3186–3186

[Drilling.Common/Interface/Melsec/CMelsec.cs:3186–3186](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3186-L3186)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_DIRECTION.InOut |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_DIRECTION |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_DIRECTION |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Read` · L3191–3191

[Drilling.Common/Interface/Melsec/CMelsec.cs:3191–3191](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3191-L3191)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_ACCESS.Read |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_ACCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_ACCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Write` · L3192–3192

[Drilling.Common/Interface/Melsec/CMelsec.cs:3192–3192](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3192-L3192)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_ACCESS.Write |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_ACCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_ACCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `ReadWrite` · L3193–3193

[Drilling.Common/Interface/Melsec/CMelsec.cs:3193–3193](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3193-L3193)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_ACCESS.ReadWrite |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_ACCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_ACCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Ready` · L3198–3198

[Drilling.Common/Interface/Melsec/CMelsec.cs:3198–3198](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3198-L3198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Ready |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `PrepareWrite` · L3199–3199

[Drilling.Common/Interface/Melsec/CMelsec.cs:3199–3199](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3199-L3199)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.PrepareWrite |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Write` · L3200–3200

[Drilling.Common/Interface/Melsec/CMelsec.cs:3200–3200](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3200-L3200)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Write |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WaitReadback` · L3201–3201

[Drilling.Common/Interface/Melsec/CMelsec.cs:3201–3201](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3201-L3201)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.WaitReadback |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `RetryWrite` · L3202–3202

[Drilling.Common/Interface/Melsec/CMelsec.cs:3202–3202](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3202-L3202)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.RetryWrite |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `CommunicationError` · L3203–3203

[Drilling.Common/Interface/Melsec/CMelsec.cs:3203–3203](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3203-L3203)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.CommunicationError |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Close` · L3204–3204

[Drilling.Common/Interface/Melsec/CMelsec.cs:3204–3204](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3204-L3204)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_PROCESS.Close |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_PROCESS |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_PROCESS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `None` · L3209–3209

[Drilling.Common/Interface/Melsec/CMelsec.cs:3209–3209](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3209-L3209)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.None |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Queued` · L3210–3210

[Drilling.Common/Interface/Melsec/CMelsec.cs:3210–3210](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3210-L3210)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Queued |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Writing` · L3211–3211

[Drilling.Common/Interface/Melsec/CMelsec.cs:3211–3211](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3211-L3211)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Writing |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WriteSuccess` · L3212–3212

[Drilling.Common/Interface/Melsec/CMelsec.cs:3212–3212](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3212-L3212)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.WriteSuccess |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `WaitReadback` · L3213–3213

[Drilling.Common/Interface/Melsec/CMelsec.cs:3213–3213](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3213-L3213)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.WaitReadback |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Confirmed` · L3214–3214

[Drilling.Common/Interface/Melsec/CMelsec.cs:3214–3214](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3214-L3214)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Confirmed |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Timeout` · L3215–3215

[Drilling.Common/Interface/Melsec/CMelsec.cs:3215–3215](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3215-L3215)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Timeout |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `CommunicationError` · L3216–3216

[Drilling.Common/Interface/Melsec/CMelsec.cs:3216–3216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3216-L3216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.CommunicationError |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `InvalidParameter` · L3217–3217

[Drilling.Common/Interface/Melsec/CMelsec.cs:3217–3217](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3217-L3217)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.InvalidParameter |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Cancelled` · L3218–3218

[Drilling.Common/Interface/Melsec/CMelsec.cs:3218–3218](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3218-L3218)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT.Cancelled |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_WRITE_RESULT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `AutoEcho` · L3223–3223

[Drilling.Common/Interface/Melsec/CMelsec.cs:3223–3223](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3223-L3223)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.AutoEcho |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `HoldValue` · L3224–3224

[Drilling.Common/Interface/Melsec/CMelsec.cs:3224–3224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3224-L3224)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.HoldValue |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `FailFirstAttempt` · L3225–3225

[Drilling.Common/Interface/Melsec/CMelsec.cs:3225–3225](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3225-L3225)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.FailFirstAttempt |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `CommunicationError` · L3226–3226

[Drilling.Common/Interface/Melsec/CMelsec.cs:3226–3226](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3226-L3226)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK.CommunicationError |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_SIMULATION_READBACK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAll` · L3262–3262

[Drilling.Common/Interface/Melsec/CMelsec.cs:3262–3262](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3262-L3262)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsecMapFileBase.LoadAll(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecMapFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CManager.cs:523–523](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Managers/CManager.cs#L523-L523) | _melsecMapFile.LoadAll | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Pending` · L3267–3267

[Drilling.Common/Interface/Melsec/CMelsec.cs:3267–3267](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3267-L3267)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Pending |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Valid` · L3268–3268

[Drilling.Common/Interface/Melsec/CMelsec.cs:3268–3268](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3268-L3268)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Valid |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Stale` · L3269–3269

[Drilling.Common/Interface/Melsec/CMelsec.cs:3269–3269](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3269-L3269)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Stale |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Error` · L3270–3270

[Drilling.Common/Interface/Melsec/CMelsec.cs:3270–3270](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3270-L3270)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Error |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Offline` · L3271–3271

[Drilling.Common/Interface/Melsec/CMelsec.cs:3271–3271](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3271-L3271)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE.Offline |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |
| 소속 타입 | NamedType:Drilling.Common.Interface.EN_MELSEC_CACHE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsValid` · L3276–3276

[Drilling.Common/Interface/Melsec/CMelsec.cs:3276–3276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3276-L3276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE.IsValid |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `OpenMode` · L3281–3281

[Drilling.Common/Interface/Melsec/CMelsec.cs:3281–3281](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3281-L3281)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | short Drilling.Common.Interface.CMelsecNetApi.OpenMode |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | short |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3281 | variable-initializer | 변수의 초기값을 지정합니다: OpenMode = -1 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `NativeLibraryName` · L3282–3282

[Drilling.Common/Interface/Melsec/CMelsec.cs:3282–3282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3282-L3282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Interface.CMelsecNetApi.NativeLibraryName |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3282 | variable-initializer | 변수의 초기값을 지정합니다: NativeLibraryName = "MDFUNC32.dll" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Open` · L3283–3286

[Drilling.Common/Interface/Melsec/CMelsec.cs:3283–3286](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3283-L3286)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetApi.Open(short, out int) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| channelNo | short | None | False /  |
| path | int | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:740–740](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L740-L740) | _melsecNetApi.Open | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3285 | CMelsecNetNativeMethods.mdOpen | resolved | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdOpen(short, short, out int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3307 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3285 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsecNetNativeMethods.mdOpen(channelNo, OpenMode, out path) |
| 3285 | return | 호출자에게 값 또는 제어를 반환합니다: return CMelsecNetNativeMethods.mdOpen(channelNo, OpenMode, out path); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Close` · L3288–3291

[Drilling.Common/Interface/Melsec/CMelsec.cs:3288–3291](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3288-L3291)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetApi.Close(int) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:833–833](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L833-L833) | _melsecNetApi.Close | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3290 | CMelsecNetNativeMethods.mdClose | resolved | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdClose(int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3309 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsecNetNativeMethods.mdClose(path) |
| 3290 | return | 호출자에게 값 또는 제어를 반환합니다: return CMelsecNetNativeMethods.mdClose(path); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SendEx` · L3293–3296

[Drilling.Common/Interface/Melsec/CMelsec.cs:3293–3296](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3293-L3296)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetApi.SendEx(int, int, int, int, int, ref int, short[]) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |
| networkNo | int | None | False /  |
| stationNo | int | None | False /  |
| deviceType | int | None | False /  |
| deviceNo | int | None | False /  |
| size | int | Ref | False /  |
| data | short[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1807–1807](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1807-L1807) | _melsecNetApi.SendEx | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3295 | CMelsecNetNativeMethods.mdSendEx | resolved | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdSendEx(int, int, int, int, int, ref int, short[]) · Drilling.Common/Interface/Melsec/CMelsec.cs:3311 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3295 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsecNetNativeMethods.mdSendEx(path, networkNo, stationNo, deviceType, deviceNo, ref size, data) |
| 3295 | return | 호출자에게 값 또는 제어를 반환합니다: return CMelsecNetNativeMethods.mdSendEx(path, networkNo, stationNo, deviceType, deviceNo, ref size, data); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReceiveEx` · L3298–3301

[Drilling.Common/Interface/Melsec/CMelsec.cs:3298–3301](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3298-L3301)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetApi.ReceiveEx(int, int, int, int, int, ref int, short[]) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetApi |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |
| networkNo | int | None | False /  |
| stationNo | int | None | False /  |
| deviceType | int | None | False /  |
| deviceNo | int | None | False /  |
| size | int | Ref | False /  |
| data | short[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:1693–1693](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L1693-L1693) | _melsecNetApi.ReceiveEx | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 3300 | CMelsecNetNativeMethods.mdReceiveEx | resolved | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdReceiveEx(int, int, int, int, int, ref int, short[]) · Drilling.Common/Interface/Melsec/CMelsec.cs:3313 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 3300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsecNetNativeMethods.mdReceiveEx(path, networkNo, stationNo, deviceType, deviceNo, ref size, data) |
| 3300 | return | 호출자에게 값 또는 제어를 반환합니다: return CMelsecNetNativeMethods.mdReceiveEx(path, networkNo, stationNo, deviceType, deviceNo, ref size, data); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `mdOpen` · L3306–3307

[Drilling.Common/Interface/Melsec/CMelsec.cs:3306–3307](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3306-L3307)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdOpen(short, short, out int) |
| 접근/수식자 | Internal / internal, static, extern |
| 반환/값 타입 | short |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetNativeMethods |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| channelNo | short | None | False /  |
| mode | short | None | False /  |
| path | int | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3285–3285](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3285-L3285) | CMelsecNetNativeMethods.mdOpen | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `mdClose` · L3308–3309

[Drilling.Common/Interface/Melsec/CMelsec.cs:3308–3309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3308-L3309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | short Drilling.Common.Interface.CMelsecNetNativeMethods.mdClose(int) |
| 접근/수식자 | Internal / internal, static, extern |
| 반환/값 타입 | short |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetNativeMethods |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3290–3290](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3290-L3290) | CMelsecNetNativeMethods.mdClose | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `mdSendEx` · L3310–3311

[Drilling.Common/Interface/Melsec/CMelsec.cs:3310–3311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3310-L3311)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdSendEx(int, int, int, int, int, ref int, short[]) |
| 접근/수식자 | Internal / internal, static, extern |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetNativeMethods |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |
| networkNo | int | None | False /  |
| stationNo | int | None | False /  |
| deviceType | int | None | False /  |
| deviceNo | int | None | False /  |
| size | int | Ref | False /  |
| data | short[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3295–3295](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3295-L3295) | CMelsecNetNativeMethods.mdSendEx | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `mdReceiveEx` · L3312–3313

[Drilling.Common/Interface/Melsec/CMelsec.cs:3312–3313](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3312-L3313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Interface.CMelsecNetNativeMethods.mdReceiveEx(int, int, int, int, int, ref int, short[]) |
| 접근/수식자 | Internal / internal, static, extern |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Interface.CMelsecNetNativeMethods |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| path | int | None | False /  |
| networkNo | int | None | False /  |
| stationNo | int | None | False /  |
| deviceType | int | None | False /  |
| deviceNo | int | None | False /  |
| size | int | Ref | False /  |
| data | short[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/Melsec/CMelsec.cs:3300–3300](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Interface/Melsec/CMelsec.cs#L3300-L3300) | CMelsecNetNativeMethods.mdReceiveEx | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../../annotated/Drilling.Common/Interface/Melsec/CMelsec.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
