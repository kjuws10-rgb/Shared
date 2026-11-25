# Drilling.UI/Views/CMonitorView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | 1e2758ea85d4c0ca99f61306ffac97055f8010717fb0f5e54791a7a021d2f236 |
| 파일 분류 | code |
| 원본 크기/행 | 287,023 bytes / 3,918 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CMonitorView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/18b5ab2347b6a1fe7896.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CMonitorView.xaml.cs |
| 이름 있는 요소 | TabBorder, InputBorder, ItemBorder, ToggleButton, Shell, SelectedText, PART_Popup, XpsOperationScrollViewer, MelsecReadGrid, MelsecWriteGrid, CoordinatePositionValuesToggle, ToggleBorder, CoordinateGlassPreviewViewport, CoordinateGlassPreviewHoverTip, CoordinateGlassPreviewHoverTipTranslateTransform, CoordinateGlassPreviewHoverTipText, CoordinateShotCoordinateGrid |
| 이벤트 개수 | 49 |
| Binding 표현 개수 | 430 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| TabBorder | L56–56 |
| InputBorder | L131–131 |
| ItemBorder | L160–160 |
| ToggleButton | L172–172 |
| Shell | L172–172 |
| SelectedText | L172–172 |
| PART_Popup | L172–172 |
| XpsOperationScrollViewer | L492–492 |
| MelsecReadGrid | L2981–2981 |
| MelsecWriteGrid | L3050–3050 |
| CoordinatePositionValuesToggle | L3280–3280 |
| ToggleBorder | L3301–3301 |
| CoordinateGlassPreviewViewport | L3369–3369 |
| CoordinateGlassPreviewHoverTip | L3429–3429 |
| CoordinateGlassPreviewHoverTipTranslateTransform | L3441–3441 |
| CoordinateGlassPreviewHoverTipText | L3443–3443 |
| CoordinateShotCoordinateGrid | L3780–3780 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| Loaded | MonitorViewLoaded | L10–10 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Unloaded | MonitorViewUnloaded | L11–11 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L563–563 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L583–583 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L603–603 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L675–675 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L695–695 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L715–715 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L775–775 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L795–795 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonDown | StartXpsJogNegative | L810–810 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonUp | StopXpsJog | L811–811 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | StopXpsJogOnMouseLeave | L812–812 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostMouseCapture | StopXpsJogOnLostMouseCapture | L813–813 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostKeyboardFocus | StopXpsJogOnLostKeyboardFocus | L814–814 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonDown | StartXpsJogPositive | L820–820 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonUp | StopXpsJog | L821–821 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | StopXpsJogOnMouseLeave | L822–822 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostMouseCapture | StopXpsJogOnLostMouseCapture | L823–823 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostKeyboardFocus | StopXpsJogOnLostKeyboardFocus | L824–824 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | XpsMultiMoveGrid_PreviewMouseWheel | L852–852 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenXpsMultiMoveTargetInput | L891–891 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L917–917 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMotorOperationInput | L938–938 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenLaserSettingInput | L1182–1182 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseDown | PowerMeterSettingSelection_PreviewMouseDown | L1410–1410 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewKeyDown | PowerMeterSettingSelection_PreviewKeyDown | L1411–1411 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | PowerMeterSettingSelection_PreviewMouseWheel | L1412–1412 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| DropDownOpened | PowerMeterSettingSelection_DropDownOpened | L1413–1413 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| ScrollChanged | AttenuatorScrollViewer_ScrollChanged | L1873–1873 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | OuterScrollViewer_PreviewMouseWheel | L1874–1874 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenAttenuatorPositionInput | L2197–2197 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | OuterScrollViewer_PreviewMouseWheel | L2364–2364 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenBetTableInput | L2485–2485 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenBetTableInput | L2489–2489 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenBetTableInput | L2493–2493 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenBetPositionInput | L2618–2618 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenBetPositionInput | L2652–2652 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SizeChanged | MelsecGrid_SizeChanged | L2990–2990 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SizeChanged | MelsecGrid_SizeChanged | L3059–3059 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenMelsecWriteInput | L3090–3090 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseDown | MelsecWriteSelectionPreviewInput | L3106–3106 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | MelsecWriteSelectionPreviewInput | L3107–3107 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewKeyDown | MelsecWriteSelectionPreviewInput | L3108–3108 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewTextInput | MelsecWriteSelectionPreviewInput | L3109–3109 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | CoordinateCellPreviewLabel_MouseMove | L3390–3390 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | CoordinateCellPreviewLabel_MouseLeave | L3391–3391 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | CoordinateShotMap_MouseLeftButtonDown | L3531–3531 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | CoordinateShotCoordinateGrid_SelectionChanged | L3783–3783 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding PlacementTarget.DataContext.Description, RelativeSource={RelativeSource AncestorType=ToolTip}} | L18–18 |
| {Binding Description} | L25–25 |
| {Binding IsDropDownOpen, Mode=TwoWay, RelativeSource={RelativeSource TemplatedParent}} | L172–172 |
| {Binding SelectionBoxItem, RelativeSource={RelativeSource AncestorType=ComboBox}} | L172–172 |
| {Binding ActualWidth, ElementName=ToggleButton} | L172–172 |
| {Binding CurrentScreen.IsMonitorLayout, Converter={StaticResource BooleanToVisibilityConverter}} | L287–287 |
| {Binding CurrentScreen.Monitor.Title} | L295–295 |
| {Binding CurrentScreen.Monitor.Subtitle} | L299–299 |
| {Binding CurrentScreen.Monitor.Tabs} | L305–305 |
| {Binding Name} | L314–314 |
| {Binding DataContext.CurrentScreen.Monitor.SelectTabCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L315–315 |
| {Binding Name} | L316–316 |
| {Binding IsSelected} | L320–320 |
| {Binding CurrentScreen.Monitor.IsMotor, Converter={StaticResource BooleanToVisibilityConverter}} | L334–334 |
| {Binding CurrentScreen.Monitor.AxisRows} | L349–349 |
| {Binding CurrentScreen.Monitor.SelectedAxisRow, Mode=TwoWay} | L350–350 |
| {Binding IsSelected} | L362–362 |
| {Binding Axis} | L370–370 |
| {Binding Name} | L371–371 |
| {Binding CurrentPosition} | L372–372 |
| {Binding FeedbackVelocity} | L373–373 |
| {Binding FeedbackAcceleration} | L374–374 |
| {Binding Servo} | L375–375 |
| {Binding ServoBrush} | L378–378 |
| {Binding HomeBrush} | L393–393 |
| {Binding Home} | L394–394 |
| {Binding LimitPlusBrush} | L412–412 |
| {Binding LimitMinusBrush} | L425–425 |
| {Binding AlarmBrush} | L438–438 |
| {Binding CurrentScreen.Monitor.SelectedAxisRow.Name, StringFormat=XPS Axis Operation  (Selected Axis : {0})} | L455–455 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L461–461 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L468–468 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L476–476 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L483–483 |
| {Binding RelativeSource={RelativeSource AncestorType=ScrollViewer}, Path=ViewportHeight} | L497–497 |
| {Binding CurrentScreen.Monitor.SelectedAxisRow.CurrentPosition} | L540–540 |
| {Binding CurrentScreen.Monitor.OperationFields[0].Value} | L561–561 |
| {Binding CurrentScreen.Monitor.OperationFields[0]} | L562–562 |
| {Binding CurrentScreen.Monitor.OperationFields[0].Unit} | L566–566 |
| {Binding CurrentScreen.Monitor.OperationFields[1].Value} | L581–581 |
| {Binding CurrentScreen.Monitor.OperationFields[1]} | L582–582 |
| {Binding CurrentScreen.Monitor.OperationFields[1].Unit} | L586–586 |
| {Binding CurrentScreen.Monitor.OperationFields[2].Value} | L601–601 |
| {Binding CurrentScreen.Monitor.OperationFields[2]} | L602–602 |
| {Binding CurrentScreen.Monitor.OperationFields[2].Unit} | L606–606 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L613–613 |
| {Binding CurrentScreen.Monitor.SelectedAxisRow.CurrentPosition} | L652–652 |
| {Binding CurrentScreen.Monitor.OperationFields[3].Value} | L673–673 |
| {Binding CurrentScreen.Monitor.OperationFields[3]} | L674–674 |
| {Binding CurrentScreen.Monitor.OperationFields[3].Unit} | L678–678 |
| {Binding CurrentScreen.Monitor.OperationFields[4].Value} | L693–693 |
| {Binding CurrentScreen.Monitor.OperationFields[4]} | L694–694 |
| {Binding CurrentScreen.Monitor.OperationFields[4].Unit} | L698–698 |
| {Binding CurrentScreen.Monitor.OperationFields[5].Value} | L713–713 |
| {Binding CurrentScreen.Monitor.OperationFields[5]} | L714–714 |
| {Binding CurrentScreen.Monitor.OperationFields[5].Unit} | L718–718 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L725–725 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L738–738 |
| {Binding CurrentScreen.Monitor.OperationFields[6].Value} | L773–773 |
| {Binding CurrentScreen.Monitor.OperationFields[6]} | L774–774 |
| {Binding CurrentScreen.Monitor.OperationFields[6].Unit} | L778–778 |
| {Binding CurrentScreen.Monitor.OperationFields[7].Value} | L793–793 |
| {Binding CurrentScreen.Monitor.OperationFields[7]} | L794–794 |
| {Binding CurrentScreen.Monitor.OperationFields[7].Unit} | L798–798 |
| {Binding CurrentScreen.Monitor.MultiMoveAxisRows} | L851–851 |
| {Binding IsSelected, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L866–866 |
| {Binding Axis} | L872–872 |
| {Binding Name} | L873–873 |
| {Binding CurrentPosition} | L874–874 |
| {Binding TargetPosition} | L885–885 |
| {Binding} | L886–886 |
| {Binding CurrentScreen.Monitor.OperationFields[8].Value} | L915–915 |
| {Binding CurrentScreen.Monitor.OperationFields[8]} | L916–916 |
| {Binding CurrentScreen.Monitor.OperationFields[8].Unit} | L920–920 |
| {Binding CurrentScreen.Monitor.OperationFields[9].Value} | L936–936 |
| {Binding CurrentScreen.Monitor.OperationFields[9]} | L937–937 |
| {Binding CurrentScreen.Monitor.OperationFields[9].Unit} | L941–941 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L950–950 |
| {Binding CurrentScreen.Monitor.IsLaser, Converter={StaticResource BooleanToVisibilityConverter}} | L967–967 |
| {Binding CurrentScreen.Monitor.HeadDeviceSelectorTitle} | L985–985 |
| {Binding CurrentScreen.Monitor.SelectedHeadDeviceName} | L992–992 |
| {Binding CurrentScreen.Monitor.HeadSelectRows} | L1001–1001 |
| {Binding DataContext.CurrentScreen.Monitor.SelectHeadDeviceCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1010–1010 |
| {Binding} | L1011–1011 |
| {Binding BackgroundBrush} | L1012–1012 |
| {Binding BorderBrush} | L1013–1013 |
| {Binding BorderThicknessValue} | L1014–1014 |
| {Binding ButtonOpacity} | L1018–1018 |
| {Binding HeadName} | L1041–1041 |
| {Binding TextBrush} | L1042–1042 |
| {Binding StateIndicatorBrush} | L1048–1048 |
| {Binding State} | L1052–1052 |
| {Binding StateTextBrush} | L1053–1053 |
| {Binding StateIndicatorBrush} | L1061–1061 |
| {Binding CurrentScreen.Monitor.OperationButtons} | L1085–1085 |
| {Binding BackgroundBrush} | L1094–1094 |
| {Binding BorderBrush} | L1095–1095 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1096–1096 |
| {Binding} | L1097–1097 |
| {Binding Label} | L1103–1103 |
| {Binding CurrentScreen.Monitor.LaserControlRows} | L1140–1140 |
| {Binding CurrentLabel} | L1162–1162 |
| {Binding CurrentValue} | L1166–1166 |
| {Binding CurrentValueBrush} | L1167–1167 |
| {Binding CurrentUnit} | L1170–1170 |
| {Binding Setting.Value} | L1181–1181 |
| {Binding CanCommand} | L1187–1187 |
| {Binding CanCommand} | L1202–1202 |
| {Binding SetUnit} | L1214–1214 |
| {Binding BackgroundBrush} | L1221–1221 |
| {Binding BorderBrush} | L1222–1222 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1223–1223 |
| {Binding CommandLabel} | L1224–1224 |
| {Binding CanCommand} | L1225–1225 |
| {Binding CommandOpacity} | L1226–1226 |
| {Binding CommandLabel} | L1229–1229 |
| {Binding CurrentScreen.Monitor.OperationButtons} | L1262–1262 |
| {Binding BackgroundBrush} | L1271–1271 |
| {Binding BorderBrush} | L1272–1272 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1273–1273 |
| {Binding} | L1274–1274 |
| {Binding IconGeometry} | L1282–1282 |
| {Binding Label} | L1291–1291 |
| {Binding CurrentScreen.Monitor.ParameterRows} | L1328–1328 |
| {Binding Parameter} | L1349–1349 |
| {Binding Value} | L1353–1353 |
| {Binding ValueBrush} | L1354–1354 |
| {Binding Unit} | L1357–1357 |
| {Binding CurrentScreen.Monitor.PwmSettingRows[0]} | L1395–1395 |
| {Binding ValueOptions} | L1404–1404 |
| {Binding Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1405–1405 |
| {Binding CurrentScreen.Monitor.PwmDeviceRows} | L1417–1417 |
| {Binding Item} | L1431–1431 |
| {Binding Value} | L1432–1432 |
| {Binding ValueBrush} | L1435–1435 |
| {Binding Unit} | L1441–1441 |
| {Binding Command} | L1452–1452 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1455–1455 |
| {Binding} | L1456–1456 |
| {Binding CurrentScreen.Monitor.IsControlDevice, Converter={StaticResource BooleanToVisibilityConverter}} | L1473–1473 |
| {Binding CurrentScreen.Monitor.StatusPanelTitle} | L1483–1483 |
| {Binding CurrentScreen.Monitor.StatusRows} | L1486–1486 |
| {Binding Item} | L1493–1493 |
| {Binding Value} | L1494–1494 |
| {Binding ValueBrush} | L1497–1497 |
| {Binding StateBrush} | L1505–1505 |
| {Binding State} | L1510–1510 |
| {Binding Unit} | L1520–1520 |
| {Binding Description} | L1521–1521 |
| {Binding CurrentScreen.Monitor.OperationPanelTitle} | L1542–1542 |
| {Binding CurrentScreen.Monitor.OperationButtons} | L1547–1547 |
| {Binding BackgroundBrush} | L1556–1556 |
| {Binding BorderBrush} | L1557–1557 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1558–1558 |
| {Binding} | L1559–1559 |
| {Binding IconGeometry} | L1567–1567 |
| {Binding Label} | L1576–1576 |
| {Binding CurrentScreen.Monitor.OperationFields} | L1589–1589 |
| {Binding Parameter} | L1604–1604 |
| {Binding Value} | L1608–1608 |
| {Binding Unit} | L1615–1615 |
| {Binding CurrentScreen.Monitor.ParameterPanelTitle} | L1646–1646 |
| {Binding CurrentScreen.Monitor.ParameterRows} | L1649–1649 |
| {Binding Parameter} | L1656–1656 |
| {Binding Value} | L1657–1657 |
| {Binding ValueBrush} | L1660–1660 |
| {Binding Unit} | L1665–1665 |
| {Binding CurrentScreen.Monitor.TrendPanelTitle} | L1690–1690 |
| {Binding CurrentScreen.Monitor.SummaryItems} | L1731–1731 |
| {Binding Name} | L1741–1741 |
| {Binding Value} | L1747–1747 |
| {Binding ValueBrush} | L1748–1748 |
| {Binding Unit} | L1751–1751 |
| {Binding CurrentScreen.Monitor.IsAttenuator, Converter={StaticResource BooleanToVisibilityConverter}} | L1766–1766 |
| {Binding CurrentScreen.Monitor.HeadDeviceSelectorTitle} | L1783–1783 |
| {Binding CurrentScreen.Monitor.SelectedHeadDeviceName} | L1790–1790 |
| {Binding CurrentScreen.Monitor.HeadSelectRows} | L1799–1799 |
| {Binding DataContext.CurrentScreen.Monitor.SelectHeadDeviceCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1808–1808 |
| {Binding} | L1809–1809 |
| {Binding BackgroundBrush} | L1810–1810 |
| {Binding BorderBrush} | L1811–1811 |
| {Binding BorderThicknessValue} | L1812–1812 |
| {Binding HeadName} | L1838–1838 |
| {Binding TextBrush} | L1839–1839 |
| {Binding StateIndicatorBrush} | L1845–1845 |
| {Binding State} | L1849–1849 |
| {Binding StateTextBrush} | L1850–1850 |
| {Binding StateIndicatorBrush} | L1858–1858 |
| {Binding RelativeSource={RelativeSource AncestorType=ScrollViewer}, Path=ViewportHeight} | L1875–1875 |
| {Binding CurrentScreen.Monitor.AttenuatorStatusItems[0]} | L1909–1909 |
| {Binding Name} | L1915–1915 |
| {Binding Value} | L1922–1922 |
| {Binding ValueBrush} | L1923–1923 |
| {Binding Unit} | L1929–1929 |
| {Binding CurrentScreen.Monitor.AttenuatorStatusItems[1]} | L1950–1950 |
| {Binding Name} | L1956–1956 |
| {Binding Value} | L1962–1962 |
| {Binding ValueBrush} | L1963–1963 |
| {Binding CurrentScreen.Monitor.AttenuatorStatusItems[2]} | L1978–1978 |
| {Binding Name} | L1984–1984 |
| {Binding Value} | L1990–1990 |
| {Binding ValueBrush} | L1991–1991 |
| {Binding CurrentScreen.Monitor.AttenuatorStatusItems[3]} | L2006–2006 |
| {Binding Name} | L2012–2012 |
| {Binding Value} | L2018–2018 |
| {Binding ValueBrush} | L2019–2019 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2041–2041 |
| {Binding CurrentScreen.Monitor.AttenuatorSettingItems} | L2058–2058 |
| {Binding Name} | L2077–2077 |
| {Binding Value} | L2084–2084 |
| {Binding ValueBrush} | L2085–2085 |
| {Binding Unit} | L2091–2091 |
| {Binding CurrentScreen.Monitor.OperationPanelTitle} | L2114–2114 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2125–2125 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2139–2139 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2153–2153 |
| {Binding CurrentScreen.Monitor.OperationFields} | L2178–2178 |
| {Binding Parameter} | L2190–2190 |
| {Binding Value} | L2194–2194 |
| {Binding} | L2195–2195 |
| {Binding UsesSelectionEditor} | L2202–2202 |
| {Binding ValueOptions} | L2209–2209 |
| {Binding Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L2210–2210 |
| {Binding UsesSelectionEditor} | L2216–2216 |
| {Binding Unit} | L2225–2225 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L2230–2230 |
| {Binding CommandLabel} | L2231–2231 |
| {Binding HasCommand} | L2232–2232 |
| {Binding CommandLabel} | L2238–2238 |
| {Binding CurrentScreen.Monitor.IsBet, Converter={StaticResource BooleanToVisibilityConverter}} | L2257–2257 |
| {Binding CurrentScreen.Monitor.HeadDeviceSelectorTitle} | L2274–2274 |
| {Binding CurrentScreen.Monitor.SelectedHeadDeviceName} | L2281–2281 |
| {Binding CurrentScreen.Monitor.HeadSelectRows} | L2290–2290 |
| {Binding DataContext.CurrentScreen.Monitor.SelectHeadDeviceCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L2299–2299 |
| {Binding} | L2300–2300 |
| {Binding BackgroundBrush} | L2301–2301 |
| {Binding BorderBrush} | L2302–2302 |
| {Binding BorderThicknessValue} | L2303–2303 |
| {Binding HeadName} | L2329–2329 |
| {Binding TextBrush} | L2330–2330 |
| {Binding StateIndicatorBrush} | L2336–2336 |
| {Binding State} | L2340–2340 |
| {Binding StateTextBrush} | L2341–2341 |
| {Binding StateIndicatorBrush} | L2349–2349 |
| {Binding RelativeSource={RelativeSource AncestorType=ScrollViewer}, Path=ViewportHeight} | L2365–2365 |
| {Binding CurrentScreen.Monitor.SummaryItems} | L2386–2386 |
| {Binding Name} | L2406–2406 |
| {Binding Value} | L2415–2415 |
| {Binding ValueBrush} | L2416–2416 |
| {Binding Unit} | L2420–2420 |
| {Binding CurrentScreen.Monitor.ParameterPanelTitle} | L2437–2437 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2442–2442 |
| {Binding CurrentScreen.Monitor.BetTableRows} | L2456–2456 |
| {Binding RowBrush} | L2467–2467 |
| {Binding No} | L2475–2475 |
| {Binding RowBrush} | L2476–2476 |
| {Binding Description} | L2485–2485 |
| {Binding Div} | L2489–2489 |
| {Binding Mag} | L2493–2493 |
| {Binding State} | L2498–2498 |
| {Binding StateBrush} | L2499–2499 |
| {Binding DataContext.CurrentScreen.Monitor.ExecuteOperationCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L2510–2510 |
| {Binding} | L2511–2511 |
| {Binding CurrentScreen.Monitor.TrendPanelTitle} | L2535–2535 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2546–2546 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2560–2560 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2574–2574 |
| {Binding CurrentScreen.Monitor.OperationFields[0].Value} | L2615–2615 |
| {Binding CurrentScreen.Monitor.OperationFields[0]} | L2616–2616 |
| {Binding CurrentScreen.Monitor.OperationFields[0].Unit} | L2622–2622 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2628–2628 |
| {Binding CurrentScreen.Monitor.OperationFields[1].Value} | L2649–2649 |
| {Binding CurrentScreen.Monitor.OperationFields[1]} | L2650–2650 |
| {Binding CurrentScreen.Monitor.OperationFields[1].Unit} | L2656–2656 |
| {Binding CurrentScreen.Monitor.ExecuteOperationCommand} | L2662–2662 |
| {Binding CurrentScreen.Monitor.IsProduct, Converter={StaticResource BooleanToVisibilityConverter}} | L2683–2683 |
| {Binding CurrentScreen.Monitor.CreateGlassCommand} | L2705–2705 |
| {Binding CurrentScreen.Monitor.DeleteGlassCommand} | L2710–2710 |
| {Binding CurrentScreen.Monitor.ProductGlassItems} | L2712–2712 |
| {Binding Name} | L2721–2721 |
| {Binding Value} | L2722–2722 |
| {Binding ValueBrush} | L2725–2725 |
| {Binding Value} | L2729–2729 |
| {Binding CurrentScreen.Monitor.ProductHistoryRows} | L2744–2744 |
| {Binding Time} | L2751–2751 |
| {Binding GlassId} | L2752–2752 |
| {Binding RecipeId} | L2753–2753 |
| {Binding Action} | L2754–2754 |
| {Binding Result} | L2755–2755 |
| {Binding ResultBrush} | L2758–2758 |
| {Binding Detail} | L2764–2764 |
| {Binding CurrentScreen.Monitor.ProductAlignItems} | L2781–2781 |
| {Binding Name} | L2785–2785 |
| {Binding Value} | L2786–2786 |
| {Binding ValueBrush} | L2789–2789 |
| {Binding Value} | L2792–2792 |
| {Binding CurrentScreen.Monitor.ProductDistortionItems} | L2803–2803 |
| {Binding Name} | L2807–2807 |
| {Binding Value} | L2808–2808 |
| {Binding ValueBrush} | L2811–2811 |
| {Binding Value} | L2814–2814 |
| {Binding CurrentScreen.Monitor.ProductProcessItems} | L2834–2834 |
| {Binding Name} | L2838–2838 |
| {Binding Value} | L2839–2839 |
| {Binding ValueBrush} | L2842–2842 |
| {Binding Value} | L2845–2845 |
| {Binding CurrentScreen.Monitor.ProductRecipeItems} | L2856–2856 |
| {Binding Name} | L2860–2860 |
| {Binding Value} | L2861–2861 |
| {Binding CurrentScreen.Monitor.ProductReviewItems} | L2878–2878 |
| {Binding Name} | L2882–2882 |
| {Binding Value} | L2883–2883 |
| {Binding ValueBrush} | L2886–2886 |
| {Binding Value} | L2889–2889 |
| {Binding CurrentScreen.Monitor.ProductReviewRows} | L2900–2900 |
| {Binding Shot} | L2903–2903 |
| {Binding CellNo} | L2904–2904 |
| {Binding BeamNo} | L2905–2905 |
| {Binding ErrorX} | L2906–2906 |
| {Binding ErrorY} | L2907–2907 |
| {Binding Judge} | L2908–2908 |
| {Binding JudgeBrush} | L2911–2911 |
| {Binding CurrentScreen.Monitor.IsMelsec, Converter={StaticResource BooleanToVisibilityConverter}} | L2925–2925 |
| {Binding CurrentScreen.Monitor.MelsecGroups} | L2954–2954 |
| {Binding CurrentScreen.Monitor.SelectedMelsecGroupOption, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L2957–2957 |
| {Binding CurrentScreen.Monitor.SelectMelsecGroupCommand} | L2964–2964 |
| {Binding CurrentScreen.Monitor.SelectedMelsecGroupOption} | L2965–2965 |
| {Binding CurrentScreen.Monitor.MelsecReadRows} | L2982–2982 |
| {Binding Id} | L2996–2996 |
| {Binding Group} | L2997–2997 |
| {Binding Address} | L2998–2998 |
| {Binding DataType} | L2999–2999 |
| {Binding ReadValue} | L3000–3000 |
| {Binding ValueBrush} | L3003–3003 |
| {Binding PollMs} | L3008–3008 |
| {Binding CurrentScreen.Monitor.MelsecWriteLockText} | L3025–3025 |
| {Binding CurrentScreen.Monitor.ToggleMelsecWriteLockCommand} | L3026–3026 |
| {Binding CurrentScreen.Monitor.IsMelsecWriteLockVisible} | L3038–3038 |
| {Binding CurrentScreen.Monitor.IsMelsecWriteUnlocked} | L3041–3041 |
| {Binding CurrentScreen.Monitor.MelsecWriteRows} | L3051–3051 |
| {Binding Id} | L3065–3065 |
| {Binding Group} | L3066–3066 |
| {Binding Address} | L3067–3067 |
| {Binding DataType} | L3068–3068 |
| {Binding ReadValue} | L3069–3069 |
| {Binding ValueBrush} | L3072–3072 |
| {Binding WriteValue} | L3088–3088 |
| {Binding CanWrite} | L3089–3089 |
| {Binding UsesWriteSelection} | L3098–3098 |
| {Binding WriteValueOptions} | L3103–3103 |
| {Binding WriteValue, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L3104–3104 |
| {Binding CanWrite} | L3105–3105 |
| {Binding UsesWriteSelection} | L3119–3119 |
| {Binding CanWrite} | L3137–3137 |
| {Binding DataContext.CurrentScreen.Monitor.WriteMelsecCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L3140–3140 |
| {Binding} | L3141–3141 |
| {Binding} | L3162–3162 |
| {Binding CurrentScreen.Monitor.IsPicoMotor, Converter={StaticResource BooleanToVisibilityConverter}} | L3163–3163 |
| {Binding CurrentScreen.Monitor.IsLogViewer, Converter={StaticResource BooleanToVisibilityConverter}} | L3165–3165 |
| {Binding CurrentScreen.Monitor.LogViewer} | L3166–3166 |
| {Binding CurrentScreen.Monitor.IsCoordinateViewer, Converter={StaticResource BooleanToVisibilityConverter}} | L3168–3168 |
| {Binding CurrentScreen.Monitor.CoordinateBasisOptions} | L3190–3190 |
| {Binding BackgroundBrush} | L3201–3201 |
| {Binding BorderBrush} | L3202–3202 |
| {Binding TextBrush} | L3203–3203 |
| {Binding DataContext.CurrentScreen.Monitor.SelectCoordinateBasisCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L3205–3205 |
| {Binding} | L3206–3206 |
| {Binding Name} | L3207–3207 |
| {Binding IsChecked, ElementName=CoordinatePositionValuesToggle} | L3232–3232 |
| {Binding CurrentScreen.Monitor.CoordinateValueRows} | L3244–3244 |
| {Binding Source} | L3252–3252 |
| {Binding Parameter} | L3253–3253 |
| {Binding Value} | L3254–3254 |
| {Binding Unit} | L3255–3255 |
| {Binding CurrentScreen.Monitor.CoordinateGlassPreviewSummary} | L3362–3362 |
| {Binding CurrentScreen.Monitor.CoordinateGlassPreviewImage} | L3372–3372 |
| {Binding CurrentScreen.Monitor.CoordinateCellPreviewLabels} | L3376–3376 |
| {Binding CellNo} | L3381–3381 |
| {Binding Width} | L3382–3382 |
| {Binding Height} | L3383–3383 |
| {Binding DataContext.CurrentScreen.Monitor.SelectCoordinateCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L3384–3384 |
| {Binding CellNo} | L3385–3385 |
| {Binding IsSelected} | L3414–3414 |
| {Binding CurrentScreen.Monitor.CoordinateSelectedCellName} | L3473–3473 |
| {Binding CurrentScreen.Monitor.CoordinateShotMapSurfaceWidth} | L3527–3527 |
| {Binding CurrentScreen.Monitor.CoordinateShotMapSurfaceHeight} | L3528–3528 |
| {Binding CurrentScreen.Monitor.CoordinateShotMapImage} | L3532–3532 |
| {Binding CurrentScreen.Monitor.CoordinateHasShotMap} | L3549–3549 |
| {Binding CurrentScreen.Monitor.CoordinateCalculationSummary} | L3580–3580 |
| {Binding CurrentScreen.Monitor.CoordinateCalculationRows} | L3593–3593 |
| {Binding Description} | L3604–3604 |
| {Binding IsResult} | L3606–3606 |
| {Binding IsSelected, Mode=OneWay} | L3618–3618 |
| {Binding DataContext.CurrentScreen.Monitor.ToggleCoordinateOffsetCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L3622–3622 |
| {Binding} | L3623–3623 |
| {Binding IsSelectable} | L3628–3628 |
| {Binding Step} | L3638–3638 |
| {Binding X} | L3639–3639 |
| {Binding Y} | L3640–3640 |
| {Binding CurrentScreen.Monitor.CoordinateOffsetPreviewMinimumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L3677–3677 |
| {Binding CurrentScreen.Monitor.CoordinateOffsetPreviewMaximumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L3694–3694 |
| {Binding CurrentScreen.Monitor.CoordinateOffsetPreviewGridText} | L3700–3700 |
| {Binding DataContext.CurrentScreen.Monitor.ApplyCoordinateOffsetPreviewRangeCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L3713–3713 |
| {Binding CurrentScreen.Monitor.CoordinateOffsetPreviewImage} | L3716–3716 |
| {Binding CurrentScreen.Monitor.CoordinateHasCalculationRows} | L3728–3728 |
| {Binding CurrentScreen.Monitor.CoordinateShotCoordinateSummary} | L3773–3773 |
| {Binding CurrentScreen.Monitor.CoordinateShotCoordinateRows} | L3781–3781 |
| {Binding CurrentScreen.Monitor.CoordinateSelectedShotCoordinateRow, Mode=OneWay} | L3782–3782 |
| {Binding Shot} | L3798–3798 |
| {Binding IsSelected} | L3800–3800 |
| {Binding Shot} | L3809–3809 |
| {Binding Head} | L3810–3810 |
| {Binding X} | L3811–3811 |
| {Binding Y} | L3812–3812 |
| {Binding State} | L3816–3816 |
| {Binding State} | L3824–3824 |
| {Binding State} | L3827–3827 |
| {Binding CurrentScreen.Monitor.CoordinateHasShotCoordinateRows} | L3845–3845 |
| {Binding CurrentScreen.Monitor.IsGenericDevice, Converter={StaticResource BooleanToVisibilityConverter}} | L3868–3868 |
| {Binding CurrentScreen.Monitor.StatusPanelTitle} | L3877–3877 |
| {Binding CurrentScreen.Monitor.StatusRows} | L3880–3880 |
| {Binding Item} | L3886–3886 |
| {Binding Value} | L3887–3887 |
| {Binding State} | L3888–3888 |
| {Binding Description} | L3889–3889 |
| {Binding CurrentScreen.Monitor.ParameterPanelTitle} | L3898–3898 |
| {Binding CurrentScreen.Monitor.ParameterRows} | L3901–3901 |
| {Binding Parameter} | L3907–3907 |
| {Binding Value} | L3908–3908 |
| {Binding Unit} | L3909–3909 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CMonitorView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
