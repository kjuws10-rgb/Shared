# A3 LD Code Ref · source 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4

구문 근거와 해설을 실행 지시로 취급하지 않습니다. 실제 source path/Commit/SHA/단위를 재확인하세요. `L번호 |`는 원본 행 번호이며 행 끝의 `⟦EOL⟧`은 원문 밖의 경계표시입니다.

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11425–11472
evidence_kind: script_source

L11425 | MoveRapid([GX_1,GY_1], [-744.7125,-11.9735]) ⟦EOL⟧
L11426 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11427 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11428 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11429 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11430 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11431 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11432 | MoveRapid([GX_1,GY_1], [-744.9315,-9.7735]) ⟦EOL⟧
L11433 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11434 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11435 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11436 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11437 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11438 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11439 | MoveRapid([GX_1,GY_1], [-744.4755,-6.4655]) ⟦EOL⟧
L11440 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11441 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11442 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11443 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11444 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11445 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11446 | MoveRapid([GX_1,GY_1], [-744.6025,-2.9785]) ⟦EOL⟧
L11447 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11448 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11449 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11450 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11451 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11452 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11453 | MoveRapid([GX_1,GY_1], [-745.7205,-0.7245]) ⟦EOL⟧
L11454 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11455 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11456 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11457 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11458 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11459 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11460 | MoveRapid([GX_1,GY_1], [-745.3295,1.6925]) ⟦EOL⟧
L11461 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11462 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11463 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11464 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11465 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11466 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11467 | MoveRapid([GX_1,GY_1], [-744.5835,5.1035]) ⟦EOL⟧
L11468 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11469 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11470 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11471 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11472 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11473–11520
evidence_kind: script_source

L11473 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11474 | MoveRapid([GX_1,GY_1], [-744.3495,8.2605]) ⟦EOL⟧
L11475 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11476 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11477 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11478 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11479 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11480 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11481 | MoveRapid([GX_1,GY_1], [-744.2415,9.3855]) ⟦EOL⟧
L11482 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11483 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11484 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11485 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11486 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11487 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11488 | MoveRapid([GX_1,GY_1], [-745.4405,12.0615]) ⟦EOL⟧
L11489 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11490 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11491 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11492 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11493 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11494 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11495 | MoveRapid([GX_1,GY_1], [-745.8365,15.4115]) ⟦EOL⟧
L11496 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11497 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11498 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11499 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11500 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11501 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11502 | MoveRapid([GX_1,GY_1], [-745.5915,17.8245]) ⟦EOL⟧
L11503 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11504 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11505 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11506 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11507 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11508 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11509 | MoveRapid([GX_1,GY_1], [-744.6895,20.5135]) ⟦EOL⟧
L11510 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11511 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11512 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11513 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11514 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11515 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11516 | MoveRapid([GX_1,GY_1], [-744.3605,23.5145]) ⟦EOL⟧
L11517 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11518 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11519 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11520 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11521–11568
evidence_kind: script_source

L11521 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11522 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11523 | MoveRapid([GX_1,GY_1], [-744.6685,25.7735]) ⟦EOL⟧
L11524 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11525 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11526 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11527 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11528 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11529 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11530 | MoveRapid([GX_1,GY_1], [-745.2075,29.3755]) ⟦EOL⟧
L11531 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11532 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11533 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11534 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11535 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11536 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11537 | MoveRapid([GX_1,GY_1], [-744.9095,31.9885]) ⟦EOL⟧
L11538 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11539 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11540 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11541 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11542 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11543 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11544 | MoveRapid([GX_1,GY_1], [-744.6345,33.3675]) ⟦EOL⟧
L11545 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11546 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11547 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11548 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11549 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11550 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11551 | MoveRapid([GX_1,GY_1], [-744.8515,36.7045]) ⟦EOL⟧
L11552 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11553 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11554 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11555 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11556 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11557 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11558 | MoveRapid([GX_1,GY_1], [-745.9455,39.2905]) ⟦EOL⟧
L11559 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11560 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11561 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11562 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11563 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11564 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11565 | MoveRapid([GX_1,GY_1], [-745.1635,41.6435]) ⟦EOL⟧
L11566 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11567 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11568 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11569–11616
evidence_kind: script_source

L11569 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11570 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11571 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11572 | MoveRapid([GX_1,GY_1], [-744.7425,44.0205]) ⟦EOL⟧
L11573 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -745112.5) ⟦EOL⟧
L11574 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11575 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11576 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11577 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11578 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11579 | MoveRapid([GX_1,GY_1], [-747.6825,-27.9445]) ⟦EOL⟧
L11580 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11581 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11582 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11583 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11584 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11585 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11586 | MoveRapid([GX_1,GY_1], [-747.6635,-25.3605]) ⟦EOL⟧
L11587 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11588 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11589 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11590 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11591 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11592 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11593 | MoveRapid([GX_1,GY_1], [-747.8115,-22.6695]) ⟦EOL⟧
L11594 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11595 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11596 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11597 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11598 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11599 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11600 | MoveRapid([GX_1,GY_1], [-747.5875,-19.9875]) ⟦EOL⟧
L11601 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11602 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11603 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11604 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11605 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11606 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11607 | MoveRapid([GX_1,GY_1], [-747.1385,-17.0235]) ⟦EOL⟧
L11608 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11609 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11610 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11611 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11612 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11613 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11614 | MoveRapid([GX_1,GY_1], [-747.3915,-15.4685]) ⟦EOL⟧
L11615 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11616 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11617–11664
evidence_kind: script_source

L11617 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11618 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11619 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11620 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11621 | MoveRapid([GX_1,GY_1], [-747.4295,-11.9565]) ⟦EOL⟧
L11622 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11623 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11624 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11625 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11626 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11627 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11628 | MoveRapid([GX_1,GY_1], [-747.6975,-9.7165]) ⟦EOL⟧
L11629 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11630 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11631 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11632 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11633 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11634 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11635 | MoveRapid([GX_1,GY_1], [-747.1635,-6.4075]) ⟦EOL⟧
L11636 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11637 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11638 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11639 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11640 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11641 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11642 | MoveRapid([GX_1,GY_1], [-747.3705,-3.0715]) ⟦EOL⟧
L11643 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11644 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11645 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11646 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11647 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11648 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11649 | MoveRapid([GX_1,GY_1], [-748.4575,-0.7155]) ⟦EOL⟧
L11650 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11651 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11652 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11653 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11654 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11655 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11656 | MoveRapid([GX_1,GY_1], [-747.9985,1.6875]) ⟦EOL⟧
L11657 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11658 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11659 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11660 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11661 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11662 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11663 | MoveRapid([GX_1,GY_1], [-747.3295,5.1145]) ⟦EOL⟧
L11664 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11665–11712
evidence_kind: script_source

L11665 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11666 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11667 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11668 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11669 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11670 | MoveRapid([GX_1,GY_1], [-747.1345,8.3275]) ⟦EOL⟧
L11671 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11672 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11673 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11674 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11675 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11676 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11677 | MoveRapid([GX_1,GY_1], [-746.9815,9.4485]) ⟦EOL⟧
L11678 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11679 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11680 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11681 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11682 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11683 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11684 | MoveRapid([GX_1,GY_1], [-748.2015,12.1805]) ⟦EOL⟧
L11685 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11686 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11687 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11688 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11689 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11690 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11691 | MoveRapid([GX_1,GY_1], [-748.4495,15.3125]) ⟦EOL⟧
L11692 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11693 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11694 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11695 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11696 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11697 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11698 | MoveRapid([GX_1,GY_1], [-748.2525,17.8295]) ⟦EOL⟧
L11699 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11700 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11701 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11702 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11703 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11704 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11705 | MoveRapid([GX_1,GY_1], [-747.3655,20.5545]) ⟦EOL⟧
L11706 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11707 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11708 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11709 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11710 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11711 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11712 | MoveRapid([GX_1,GY_1], [-747.0165,23.5885]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11713–11760
evidence_kind: script_source

L11713 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11714 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11715 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11716 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11717 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11718 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11719 | MoveRapid([GX_1,GY_1], [-747.3925,25.7865]) ⟦EOL⟧
L11720 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11721 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11722 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11723 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11724 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11725 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11726 | MoveRapid([GX_1,GY_1], [-748.0105,29.3635]) ⟦EOL⟧
L11727 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11728 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11729 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11730 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11731 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11732 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11733 | MoveRapid([GX_1,GY_1], [-747.5565,31.9975]) ⟦EOL⟧
L11734 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11735 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11736 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11737 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11738 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11739 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11740 | MoveRapid([GX_1,GY_1], [-747.4585,33.4295]) ⟦EOL⟧
L11741 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11742 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11743 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11744 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11745 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11746 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11747 | MoveRapid([GX_1,GY_1], [-747.6715,36.6315]) ⟦EOL⟧
L11748 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11749 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11750 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11751 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11752 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11753 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11754 | MoveRapid([GX_1,GY_1], [-748.6345,39.3425]) ⟦EOL⟧
L11755 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11756 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11757 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11758 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11759 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11760 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11761–11808
evidence_kind: script_source

L11761 | MoveRapid([GX_1,GY_1], [-747.9195,41.6545]) ⟦EOL⟧
L11762 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11763 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11764 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11765 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11766 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11767 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11768 | MoveRapid([GX_1,GY_1], [-747.5265,43.9695]) ⟦EOL⟧
L11769 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -747812.5) ⟦EOL⟧
L11770 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11771 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11772 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11773 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11774 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11775 | MoveRapid([GX_1,GY_1], [-750.3825,-27.9445]) ⟦EOL⟧
L11776 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11777 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11778 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11779 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11780 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11781 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11782 | MoveRapid([GX_1,GY_1], [-750.3405,-25.3055]) ⟦EOL⟧
L11783 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11784 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11785 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11786 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11787 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11788 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11789 | MoveRapid([GX_1,GY_1], [-750.5985,-22.5815]) ⟦EOL⟧
L11790 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11791 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11792 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11793 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11794 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11795 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11796 | MoveRapid([GX_1,GY_1], [-750.1695,-20.0465]) ⟦EOL⟧
L11797 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11798 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11799 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11800 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11801 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11802 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11803 | MoveRapid([GX_1,GY_1], [-750.0095,-16.9715]) ⟦EOL⟧
L11804 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11805 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11806 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11807 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11808 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11809–11856
evidence_kind: script_source

L11809 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11810 | MoveRapid([GX_1,GY_1], [-750.2295,-15.4555]) ⟦EOL⟧
L11811 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11812 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11813 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11814 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11815 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11816 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11817 | MoveRapid([GX_1,GY_1], [-750.1595,-11.9525]) ⟦EOL⟧
L11818 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11819 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11820 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11821 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11822 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11823 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11824 | MoveRapid([GX_1,GY_1], [-750.4685,-9.6305]) ⟦EOL⟧
L11825 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11826 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11827 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11828 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11829 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11830 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11831 | MoveRapid([GX_1,GY_1], [-749.8645,-6.3255]) ⟦EOL⟧
L11832 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11833 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11834 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11835 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11836 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11837 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11838 | MoveRapid([GX_1,GY_1], [-750.1795,-3.2185]) ⟦EOL⟧
L11839 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11840 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11841 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11842 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11843 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11844 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11845 | MoveRapid([GX_1,GY_1], [-751.2135,-0.6975]) ⟦EOL⟧
L11846 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11847 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11848 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11849 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11850 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11851 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11852 | MoveRapid([GX_1,GY_1], [-750.6615,1.6685]) ⟦EOL⟧
L11853 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11854 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11855 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11856 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11857–11904
evidence_kind: script_source

L11857 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11858 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11859 | MoveRapid([GX_1,GY_1], [-750.0875,5.1135]) ⟦EOL⟧
L11860 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11861 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11862 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11863 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11864 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11865 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11866 | MoveRapid([GX_1,GY_1], [-749.9515,8.3715]) ⟦EOL⟧
L11867 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11868 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11869 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11870 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11871 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11872 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11873 | MoveRapid([GX_1,GY_1], [-749.7685,9.5195]) ⟦EOL⟧
L11874 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11875 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11876 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11877 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11878 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11879 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11880 | MoveRapid([GX_1,GY_1], [-750.9565,12.3335]) ⟦EOL⟧
L11881 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11882 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11883 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11884 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11885 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11886 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11887 | MoveRapid([GX_1,GY_1], [-751.0175,15.2055]) ⟦EOL⟧
L11888 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11889 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11890 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11891 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11892 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11893 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11894 | MoveRapid([GX_1,GY_1], [-750.9125,17.8495]) ⟦EOL⟧
L11895 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11896 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11897 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11898 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11899 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11900 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11901 | MoveRapid([GX_1,GY_1], [-750.0695,20.5955]) ⟦EOL⟧
L11902 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11903 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11904 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11905–11952
evidence_kind: script_source

L11905 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11906 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11907 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11908 | MoveRapid([GX_1,GY_1], [-749.6955,23.6675]) ⟦EOL⟧
L11909 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11910 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11911 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11912 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11913 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11914 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11915 | MoveRapid([GX_1,GY_1], [-750.1165,25.8225]) ⟦EOL⟧
L11916 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11917 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11918 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11919 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11920 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11921 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11922 | MoveRapid([GX_1,GY_1], [-750.8125,29.3305]) ⟦EOL⟧
L11923 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11924 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11925 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11926 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11927 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11928 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11929 | MoveRapid([GX_1,GY_1], [-750.1955,31.9895]) ⟦EOL⟧
L11930 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11931 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11932 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11933 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11934 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11935 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11936 | MoveRapid([GX_1,GY_1], [-750.3125,33.5085]) ⟦EOL⟧
L11937 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11938 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11939 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11940 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11941 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11942 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11943 | MoveRapid([GX_1,GY_1], [-750.5125,36.5375]) ⟦EOL⟧
L11944 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11945 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11946 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11947 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11948 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11949 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11950 | MoveRapid([GX_1,GY_1], [-751.2975,39.4125]) ⟦EOL⟧
L11951 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11952 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 11953–12000
evidence_kind: script_source

L11953 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11954 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11955 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11956 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11957 | MoveRapid([GX_1,GY_1], [-750.6825,41.6765]) ⟦EOL⟧
L11958 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11959 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11960 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11961 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11962 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11963 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11964 | MoveRapid([GX_1,GY_1], [-750.3325,43.9485]) ⟦EOL⟧
L11965 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -750512.5) ⟦EOL⟧
L11966 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11967 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11968 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11969 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11970 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11971 | MoveRapid([GX_1,GY_1], [-753.0825,-27.9445]) ⟦EOL⟧
L11972 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L11973 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11974 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11975 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11976 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11977 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11978 | MoveRapid([GX_1,GY_1], [-753.0195,-25.2205]) ⟦EOL⟧
L11979 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L11980 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11981 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11982 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11983 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11984 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11985 | MoveRapid([GX_1,GY_1], [-753.4185,-22.4725]) ⟦EOL⟧
L11986 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L11987 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11988 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11989 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11990 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11991 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11992 | MoveRapid([GX_1,GY_1], [-752.7355,-20.1325]) ⟦EOL⟧
L11993 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L11994 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L11995 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L11996 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L11997 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L11998 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L11999 | MoveRapid([GX_1,GY_1], [-752.9215,-16.9165]) ⟦EOL⟧
L12000 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12001–12048
evidence_kind: script_source

L12001 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12002 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12003 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12004 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12005 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12006 | MoveRapid([GX_1,GY_1], [-753.0895,-15.4435]) ⟦EOL⟧
L12007 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12008 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12009 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12010 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12011 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12012 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12013 | MoveRapid([GX_1,GY_1], [-752.9025,-11.9645]) ⟦EOL⟧
L12014 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12015 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12016 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12017 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12018 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12019 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12020 | MoveRapid([GX_1,GY_1], [-753.2415,-9.5185]) ⟦EOL⟧
L12021 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12022 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12023 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12024 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12025 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12026 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12027 | MoveRapid([GX_1,GY_1], [-752.5785,-6.2195]) ⟦EOL⟧
L12028 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12029 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12030 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12031 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12032 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12033 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12034 | MoveRapid([GX_1,GY_1], [-753.0285,-3.4225]) ⟦EOL⟧
L12035 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12036 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12037 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12038 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12039 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12040 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12041 | MoveRapid([GX_1,GY_1], [-753.9865,-0.6705]) ⟦EOL⟧
L12042 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12043 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12044 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12045 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12046 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12047 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12048 | MoveRapid([GX_1,GY_1], [-753.3185,1.6345]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12049–12096
evidence_kind: script_source

L12049 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12050 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12051 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12052 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12053 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12054 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12055 | MoveRapid([GX_1,GY_1], [-752.8585,5.1025]) ⟦EOL⟧
L12056 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12057 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12058 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12059 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12060 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12061 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12062 | MoveRapid([GX_1,GY_1], [-752.7975,8.3885]) ⟦EOL⟧
L12063 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12064 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12065 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12066 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12067 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12068 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12069 | MoveRapid([GX_1,GY_1], [-752.6015,9.5985]) ⟦EOL⟧
L12070 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12071 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12072 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12073 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12074 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12075 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12076 | MoveRapid([GX_1,GY_1], [-753.7095,12.5175]) ⟦EOL⟧
L12077 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12078 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12079 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12080 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12081 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12082 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12083 | MoveRapid([GX_1,GY_1], [-753.5425,15.0905]) ⟦EOL⟧
L12084 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12085 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12086 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12087 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12088 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12089 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12090 | MoveRapid([GX_1,GY_1], [-753.5735,17.8825]) ⟦EOL⟧
L12091 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12092 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12093 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12094 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12095 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12096 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12097–12144
evidence_kind: script_source

L12097 | MoveRapid([GX_1,GY_1], [-752.7985,20.6395]) ⟦EOL⟧
L12098 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12099 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12100 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12101 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12102 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12103 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12104 | MoveRapid([GX_1,GY_1], [-752.3965,23.7535]) ⟦EOL⟧
L12105 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12106 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12107 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12108 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12109 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12110 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12111 | MoveRapid([GX_1,GY_1], [-752.8425,25.8805]) ⟦EOL⟧
L12112 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12113 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12114 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12115 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12116 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12117 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12118 | MoveRapid([GX_1,GY_1], [-753.6185,29.2805]) ⟦EOL⟧
L12119 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12120 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12121 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12122 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12123 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12124 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12125 | MoveRapid([GX_1,GY_1], [-752.8305,31.9645]) ⟦EOL⟧
L12126 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12127 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12128 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12129 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12130 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12131 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12132 | MoveRapid([GX_1,GY_1], [-753.1955,33.6055]) ⟦EOL⟧
L12133 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12134 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12135 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12136 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12137 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12138 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12139 | MoveRapid([GX_1,GY_1], [-753.3765,36.4185]) ⟦EOL⟧
L12140 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12141 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12142 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12143 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12144 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12145–12192
evidence_kind: script_source

L12145 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12146 | MoveRapid([GX_1,GY_1], [-753.9355,39.4995]) ⟦EOL⟧
L12147 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12148 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12149 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12150 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12151 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12152 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12153 | MoveRapid([GX_1,GY_1], [-753.4505,41.7105]) ⟦EOL⟧
L12154 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12155 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12156 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12157 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12158 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12159 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12160 | MoveRapid([GX_1,GY_1], [-753.1585,43.9535]) ⟦EOL⟧
L12161 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -753212.5) ⟦EOL⟧
L12162 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12163 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12164 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12165 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12166 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12167 | MoveRapid([GX_1,GY_1], [-755.7825,-27.9445]) ⟦EOL⟧
L12168 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12169 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12170 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12171 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12172 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12173 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12174 | MoveRapid([GX_1,GY_1], [-755.7005,-25.1035]) ⟦EOL⟧
L12175 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12176 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12177 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12178 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12179 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12180 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12181 | MoveRapid([GX_1,GY_1], [-756.2705,-22.3435]) ⟦EOL⟧
L12182 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12183 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12184 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12185 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12186 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12187 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12188 | MoveRapid([GX_1,GY_1], [-755.2855,-20.2475]) ⟦EOL⟧
L12189 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12190 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12191 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12192 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12193–12240
evidence_kind: script_source

L12193 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12194 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12195 | MoveRapid([GX_1,GY_1], [-755.8745,-16.8655]) ⟦EOL⟧
L12196 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12197 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12198 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12199 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12200 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12201 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12202 | MoveRapid([GX_1,GY_1], [-755.9735,-15.4295]) ⟦EOL⟧
L12203 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12204 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12205 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12206 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12207 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12208 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12209 | MoveRapid([GX_1,GY_1], [-755.6565,-11.9895]) ⟦EOL⟧
L12210 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12211 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12212 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12213 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12214 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12215 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12216 | MoveRapid([GX_1,GY_1], [-756.0195,-9.3785]) ⟦EOL⟧
L12217 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12218 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12219 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12220 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12221 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12222 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12223 | MoveRapid([GX_1,GY_1], [-755.3045,-6.0895]) ⟦EOL⟧
L12224 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12225 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12226 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12227 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12228 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12229 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12230 | MoveRapid([GX_1,GY_1], [-755.9185,-3.6825]) ⟦EOL⟧
L12231 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12232 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12233 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12234 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12235 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12236 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12237 | MoveRapid([GX_1,GY_1], [-756.7775,-0.6345]) ⟦EOL⟧
L12238 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12239 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12240 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12241–12288
evidence_kind: script_source

L12241 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12242 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12243 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12244 | MoveRapid([GX_1,GY_1], [-755.9715,1.5845]) ⟦EOL⟧
L12245 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12246 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12247 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12248 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12249 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12250 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12251 | MoveRapid([GX_1,GY_1], [-755.6435,5.0815]) ⟦EOL⟧
L12252 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12253 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12254 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12255 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12256 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12257 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12258 | MoveRapid([GX_1,GY_1], [-755.6755,8.3815]) ⟦EOL⟧
L12259 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12260 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12261 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12262 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12263 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12264 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12265 | MoveRapid([GX_1,GY_1], [-755.4835,9.6825]) ⟦EOL⟧
L12266 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12267 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12268 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12269 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12270 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12271 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12272 | MoveRapid([GX_1,GY_1], [-756.4565,12.7325]) ⟦EOL⟧
L12273 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12274 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12275 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12276 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12277 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12278 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12279 | MoveRapid([GX_1,GY_1], [-756.0235,14.9645]) ⟦EOL⟧
L12280 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12281 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12282 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12283 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12284 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12285 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12286 | MoveRapid([GX_1,GY_1], [-756.2355,17.9295]) ⟦EOL⟧
L12287 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12288 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12289–12336
evidence_kind: script_source

L12289 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12290 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12291 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12292 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12293 | MoveRapid([GX_1,GY_1], [-755.5545,20.6855]) ⟦EOL⟧
L12294 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12295 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12296 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12297 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12298 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12299 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12300 | MoveRapid([GX_1,GY_1], [-755.1215,23.8445]) ⟦EOL⟧
L12301 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12302 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12303 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12304 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12305 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12306 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12307 | MoveRapid([GX_1,GY_1], [-755.5675,25.9625]) ⟦EOL⟧
L12308 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12309 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12310 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12311 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12312 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12313 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12314 | MoveRapid([GX_1,GY_1], [-756.4245,29.2145]) ⟦EOL⟧
L12315 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12316 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12317 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12318 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12319 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12320 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12321 | MoveRapid([GX_1,GY_1], [-755.4595,31.9225]) ⟦EOL⟧
L12322 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12323 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12324 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12325 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12326 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12327 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12328 | MoveRapid([GX_1,GY_1], [-756.1065,33.7195]) ⟦EOL⟧
L12329 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12330 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12331 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12332 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12333 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12334 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12335 | MoveRapid([GX_1,GY_1], [-756.2645,36.2765]) ⟦EOL⟧
L12336 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12337–12384
evidence_kind: script_source

L12337 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12338 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12339 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12340 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12341 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12342 | MoveRapid([GX_1,GY_1], [-756.5475,39.6035]) ⟦EOL⟧
L12343 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12344 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12345 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12346 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12347 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12348 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12349 | MoveRapid([GX_1,GY_1], [-756.2215,41.7545]) ⟦EOL⟧
L12350 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12351 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12352 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12353 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12354 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12355 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12356 | MoveRapid([GX_1,GY_1], [-756.0055,43.9895]) ⟦EOL⟧
L12357 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -755912.5) ⟦EOL⟧
L12358 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12359 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12360 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12361 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12362 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12363 | MoveRapid([GX_1,GY_1], [-758.4825,-27.9445]) ⟦EOL⟧
L12364 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12365 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12366 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12367 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12368 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12369 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12370 | MoveRapid([GX_1,GY_1], [-758.3835,-24.9585]) ⟦EOL⟧
L12371 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12372 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12373 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12374 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12375 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12376 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12377 | MoveRapid([GX_1,GY_1], [-759.1555,-22.1945]) ⟦EOL⟧
L12378 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12379 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12380 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12381 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12382 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12383 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12384 | MoveRapid([GX_1,GY_1], [-757.8215,-20.3895]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12385–12432
evidence_kind: script_source

L12385 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12386 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12387 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12388 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12389 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12390 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12391 | MoveRapid([GX_1,GY_1], [-758.8675,-16.8125]) ⟦EOL⟧
L12392 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12393 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12394 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12395 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12396 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12397 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12398 | MoveRapid([GX_1,GY_1], [-758.8795,-15.4155]) ⟦EOL⟧
L12399 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12400 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12401 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12402 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12403 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12404 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12405 | MoveRapid([GX_1,GY_1], [-758.4225,-12.0295]) ⟦EOL⟧
L12406 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12407 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12408 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12409 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12410 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12411 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12412 | MoveRapid([GX_1,GY_1], [-758.8015,-9.2115]) ⟦EOL⟧
L12413 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12414 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12415 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12416 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12417 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12418 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12419 | MoveRapid([GX_1,GY_1], [-758.0425,-5.9375]) ⟦EOL⟧
L12420 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12421 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12422 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12423 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12424 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12425 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12426 | MoveRapid([GX_1,GY_1], [-758.8515,-3.9995]) ⟦EOL⟧
L12427 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12428 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12429 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12430 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12431 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12432 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12433–12480
evidence_kind: script_source

L12433 | MoveRapid([GX_1,GY_1], [-759.5875,-0.5885]) ⟦EOL⟧
L12434 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12435 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12436 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12437 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12438 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12439 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12440 | MoveRapid([GX_1,GY_1], [-758.6195,1.5215]) ⟦EOL⟧
L12441 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12442 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12443 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12444 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12445 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12446 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12447 | MoveRapid([GX_1,GY_1], [-758.4405,5.0465]) ⟦EOL⟧
L12448 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12449 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12450 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12451 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12452 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12453 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12454 | MoveRapid([GX_1,GY_1], [-758.5815,8.3475]) ⟦EOL⟧
L12455 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12456 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12457 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12458 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12459 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12460 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12461 | MoveRapid([GX_1,GY_1], [-758.4105,9.7745]) ⟦EOL⟧
L12462 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12463 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12464 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12465 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12466 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12467 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12468 | MoveRapid([GX_1,GY_1], [-759.1995,12.9795]) ⟦EOL⟧
L12469 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12470 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12471 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12472 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12473 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12474 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12475 | MoveRapid([GX_1,GY_1], [-758.4615,14.8295]) ⟦EOL⟧
L12476 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12477 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12478 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12479 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12480 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12481–12528
evidence_kind: script_source

L12481 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12482 | MoveRapid([GX_1,GY_1], [-758.8995,17.9895]) ⟦EOL⟧
L12483 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12484 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12485 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12486 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12487 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12488 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12489 | MoveRapid([GX_1,GY_1], [-758.3355,20.7305]) ⟦EOL⟧
L12490 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12491 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12492 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12493 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12494 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12495 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12496 | MoveRapid([GX_1,GY_1], [-757.8685,23.9415]) ⟦EOL⟧
L12497 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12498 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12499 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12500 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12501 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12502 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12503 | MoveRapid([GX_1,GY_1], [-758.2935,26.0685]) ⟦EOL⟧
L12504 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12505 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12506 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12507 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12508 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12509 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12510 | MoveRapid([GX_1,GY_1], [-759.2325,29.1315]) ⟦EOL⟧
L12511 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12512 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12513 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12514 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12515 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12516 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12517 | MoveRapid([GX_1,GY_1], [-758.0825,31.8625]) ⟦EOL⟧
L12518 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12519 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12520 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12521 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12522 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12523 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12524 | MoveRapid([GX_1,GY_1], [-759.0485,33.8525]) ⟦EOL⟧
L12525 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12526 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12527 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12528 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12529–12576
evidence_kind: script_source

L12529 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12530 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12531 | MoveRapid([GX_1,GY_1], [-759.1745,36.1135]) ⟦EOL⟧
L12532 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12533 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12534 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12535 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12536 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12537 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12538 | MoveRapid([GX_1,GY_1], [-759.1335,39.7235]) ⟦EOL⟧
L12539 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12540 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12541 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12542 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12543 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12544 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12545 | MoveRapid([GX_1,GY_1], [-758.9985,41.8095]) ⟦EOL⟧
L12546 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12547 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12548 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12549 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12550 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12551 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12552 | MoveRapid([GX_1,GY_1], [-758.8725,44.0525]) ⟦EOL⟧
L12553 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -758612.5) ⟦EOL⟧
L12554 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12555 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12556 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12557 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12558 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12559 | MoveRapid([GX_1,GY_1], [-761.1825,-27.9445]) ⟦EOL⟧
L12560 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12561 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12562 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12563 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12564 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12565 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12566 | MoveRapid([GX_1,GY_1], [-761.0685,-24.7835]) ⟦EOL⟧
L12567 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12568 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12569 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12570 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12571 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12572 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12573 | MoveRapid([GX_1,GY_1], [-762.0725,-22.0245]) ⟦EOL⟧
L12574 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12575 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12576 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12577–12624
evidence_kind: script_source

L12577 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12578 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12579 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12580 | MoveRapid([GX_1,GY_1], [-760.3385,-20.5595]) ⟦EOL⟧
L12581 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12582 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12583 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12584 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12585 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12586 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12587 | MoveRapid([GX_1,GY_1], [-761.9015,-16.7595]) ⟦EOL⟧
L12588 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12589 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12590 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12591 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12592 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12593 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12594 | MoveRapid([GX_1,GY_1], [-761.8105,-15.4005]) ⟦EOL⟧
L12595 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12596 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12597 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12598 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12599 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12600 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12601 | MoveRapid([GX_1,GY_1], [-761.2005,-12.0825]) ⟦EOL⟧
L12602 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12603 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12604 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12605 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12606 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12607 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12608 | MoveRapid([GX_1,GY_1], [-761.5865,-9.0165]) ⟦EOL⟧
L12609 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12610 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12611 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12612 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12613 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12614 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12615 | MoveRapid([GX_1,GY_1], [-760.7945,-5.7595]) ⟦EOL⟧
L12616 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12617 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12618 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12619 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12620 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12621 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12622 | MoveRapid([GX_1,GY_1], [-761.8235,-4.3705]) ⟦EOL⟧
L12623 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12624 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12625–12672
evidence_kind: script_source

L12625 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12626 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12627 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12628 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12629 | MoveRapid([GX_1,GY_1], [-762.4135,-0.5345]) ⟦EOL⟧
L12630 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12631 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12632 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12633 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12634 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12635 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12636 | MoveRapid([GX_1,GY_1], [-761.2635,1.4435]) ⟦EOL⟧
L12637 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12638 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12639 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12640 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12641 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12642 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12643 | MoveRapid([GX_1,GY_1], [-761.2515,5.0045]) ⟦EOL⟧
L12644 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12645 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12646 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12647 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12648 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12649 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12650 | MoveRapid([GX_1,GY_1], [-761.5195,8.2905]) ⟦EOL⟧
L12651 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12652 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12653 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12654 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12655 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12656 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12657 | MoveRapid([GX_1,GY_1], [-761.3855,9.8745]) ⟦EOL⟧
L12658 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12659 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12660 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12661 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12662 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12663 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12664 | MoveRapid([GX_1,GY_1], [-761.9375,13.2595]) ⟦EOL⟧
L12665 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12666 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12667 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12668 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12669 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12670 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12671 | MoveRapid([GX_1,GY_1], [-760.8535,14.6865]) ⟦EOL⟧
L12672 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12673–12720
evidence_kind: script_source

L12673 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12674 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12675 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12676 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12677 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12678 | MoveRapid([GX_1,GY_1], [-761.5615,18.0645]) ⟦EOL⟧
L12679 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12680 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12681 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12682 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12683 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12684 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12685 | MoveRapid([GX_1,GY_1], [-761.1425,20.7775]) ⟦EOL⟧
L12686 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12687 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12688 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12689 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12690 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12691 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12692 | MoveRapid([GX_1,GY_1], [-760.6375,24.0445]) ⟦EOL⟧
L12693 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12694 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12695 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12696 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12697 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12698 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12699 | MoveRapid([GX_1,GY_1], [-761.0215,26.1965]) ⟦EOL⟧
L12700 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12701 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12702 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12703 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12704 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12705 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12706 | MoveRapid([GX_1,GY_1], [-762.0405,29.0285]) ⟦EOL⟧
L12707 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12708 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12709 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12710 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12711 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12712 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12713 | MoveRapid([GX_1,GY_1], [-760.7005,31.7855]) ⟦EOL⟧
L12714 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12715 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12716 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12717 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12718 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12719 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12720 | MoveRapid([GX_1,GY_1], [-762.0175,34.0015]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12721–12768
evidence_kind: script_source

L12721 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12722 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12723 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12724 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12725 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12726 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12727 | MoveRapid([GX_1,GY_1], [-762.1065,35.9265]) ⟦EOL⟧
L12728 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12729 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12730 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12731 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12732 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12733 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12734 | MoveRapid([GX_1,GY_1], [-761.6935,39.8605]) ⟦EOL⟧
L12735 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12736 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12737 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12738 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12739 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12740 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12741 | MoveRapid([GX_1,GY_1], [-761.7795,41.8765]) ⟦EOL⟧
L12742 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12743 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12744 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12745 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12746 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12747 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12748 | MoveRapid([GX_1,GY_1], [-761.7605,44.1435]) ⟦EOL⟧
L12749 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -761312.5) ⟦EOL⟧
L12750 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12751 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12752 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12753 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12754 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12755 | MoveRapid([GX_1,GY_1], [-763.7265,-28.0175]) ⟦EOL⟧
L12756 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12757 | MoveRapid([GX_1,GY_1], [-763.7545,-24.5785]) ⟦EOL⟧
L12758 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12759 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12760 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12761 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12762 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12763 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12764 | MoveRapid([GX_1,GY_1], [-765.0225,-21.8335]) ⟦EOL⟧
L12765 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12766 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12767 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12768 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12769–12816
evidence_kind: script_source

L12769 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12770 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12771 | MoveRapid([GX_1,GY_1], [-762.8405,-20.7575]) ⟦EOL⟧
L12772 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12773 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12774 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12775 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12776 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12777 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12778 | MoveRapid([GX_1,GY_1], [-764.9775,-16.7055]) ⟦EOL⟧
L12779 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12780 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12781 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12782 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12783 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12784 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12785 | MoveRapid([GX_1,GY_1], [-764.7635,-15.3825]) ⟦EOL⟧
L12786 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12787 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12788 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12789 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12790 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12791 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12792 | MoveRapid([GX_1,GY_1], [-763.9915,-12.1515]) ⟦EOL⟧
L12793 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12794 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12795 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12796 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12797 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12798 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12799 | MoveRapid([GX_1,GY_1], [-764.3775,-8.7955]) ⟦EOL⟧
L12800 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12801 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12802 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12803 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12804 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12805 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12806 | MoveRapid([GX_1,GY_1], [-763.5565,-5.5585]) ⟦EOL⟧
L12807 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12808 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12809 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12810 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12811 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12812 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12813 | MoveRapid([GX_1,GY_1], [-764.8375,-4.7995]) ⟦EOL⟧
L12814 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12815 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12816 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12817–12864
evidence_kind: script_source

L12817 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12818 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12819 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12820 | MoveRapid([GX_1,GY_1], [-765.2585,-0.4705]) ⟦EOL⟧
L12821 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12822 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12823 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12824 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12825 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12826 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12827 | MoveRapid([GX_1,GY_1], [-763.9015,1.3515]) ⟦EOL⟧
L12828 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12829 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12830 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12831 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12832 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12833 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12834 | MoveRapid([GX_1,GY_1], [-764.0745,4.9495]) ⟦EOL⟧
L12835 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12836 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12837 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12838 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12839 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12840 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12841 | MoveRapid([GX_1,GY_1], [-764.4865,8.2075]) ⟦EOL⟧
L12842 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12843 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12844 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12845 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12846 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12847 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12848 | MoveRapid([GX_1,GY_1], [-764.4075,9.9805]) ⟦EOL⟧
L12849 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12850 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12851 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12852 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12853 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12854 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12855 | MoveRapid([GX_1,GY_1], [-764.6725,13.5695]) ⟦EOL⟧
L12856 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12857 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12858 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12859 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12860 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12861 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12862 | MoveRapid([GX_1,GY_1], [-763.2035,14.5335]) ⟦EOL⟧
L12863 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12864 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12865–12912
evidence_kind: script_source

L12865 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12866 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12867 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12868 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12869 | MoveRapid([GX_1,GY_1], [-764.2275,18.1535]) ⟦EOL⟧
L12870 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12871 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12872 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12873 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12874 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12875 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12876 | MoveRapid([GX_1,GY_1], [-763.9755,20.8275]) ⟦EOL⟧
L12877 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12878 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12879 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12880 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12881 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12882 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12883 | MoveRapid([GX_1,GY_1], [-763.4305,24.1535]) ⟦EOL⟧
L12884 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12885 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12886 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12887 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12888 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12889 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12890 | MoveRapid([GX_1,GY_1], [-763.7485,26.3475]) ⟦EOL⟧
L12891 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12892 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12893 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12894 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12895 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12896 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12897 | MoveRapid([GX_1,GY_1], [-764.8505,28.9105]) ⟦EOL⟧
L12898 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12899 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12900 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12901 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12902 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12903 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12904 | MoveRapid([GX_1,GY_1], [-763.3105,31.6915]) ⟦EOL⟧
L12905 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12906 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12907 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12908 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12909 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12910 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12911 | MoveRapid([GX_1,GY_1], [-765.0165,34.1705]) ⟦EOL⟧
L12912 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12913–12960
evidence_kind: script_source

L12913 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12914 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12915 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12916 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12917 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12918 | MoveRapid([GX_1,GY_1], [-765.0615,35.7155]) ⟦EOL⟧
L12919 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12920 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12921 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12922 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12923 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12924 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12925 | MoveRapid([GX_1,GY_1], [-764.2295,40.0145]) ⟦EOL⟧
L12926 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12927 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12928 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12929 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12930 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12931 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12932 | MoveRapid([GX_1,GY_1], [-764.5675,41.9535]) ⟦EOL⟧
L12933 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12934 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12935 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12936 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12937 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12938 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12939 | MoveRapid([GX_1,GY_1], [-764.6695,44.2635]) ⟦EOL⟧
L12940 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -764012.5) ⟦EOL⟧
L12941 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12942 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12943 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12944 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12945 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12946 | MoveRapid([GX_1,GY_1], [-774.6695,39.624988]) ⟦EOL⟧
L12947 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -774083.795523) ⟦EOL⟧
L12948 | MoveRapid([GX_1,GY_1], [-784.6695,34.986475]) ⟦EOL⟧
L12949 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -784155.091046) ⟦EOL⟧
L12950 | MoveRapid([GX_1,GY_1], [-794.6695,30.347963]) ⟦EOL⟧
L12951 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -794226.386569) ⟦EOL⟧
L12952 | MoveRapid([GX_1,GY_1], [-804.6695,25.70945]) ⟦EOL⟧
L12953 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -804297.682093) ⟦EOL⟧
L12954 | MoveRapid([GX_1,GY_1], [-814.6695,21.070938]) ⟦EOL⟧
L12955 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -814368.977616) ⟦EOL⟧
L12956 | MoveRapid([GX_1,GY_1], [-824.6695,16.432425]) ⟦EOL⟧
L12957 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -824440.273139) ⟦EOL⟧
L12958 | MoveRapid([GX_1,GY_1], [-834.6695,11.793913]) ⟦EOL⟧
L12959 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -834511.568662) ⟦EOL⟧
L12960 | MoveRapid([GX_1,GY_1], [-844.6695,7.155401]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 12961–13008
evidence_kind: script_source

L12961 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -844582.864185) ⟦EOL⟧
L12962 | MoveRapid([GX_1,GY_1], [-854.6695,2.516888]) ⟦EOL⟧
L12963 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -854654.159708) ⟦EOL⟧
L12964 | MoveRapid([GX_1,GY_1], [-864.6695,-2.121624]) ⟦EOL⟧
L12965 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -864725.455232) ⟦EOL⟧
L12966 | MoveRapid([GX_1,GY_1], [-874.6695,-6.760137]) ⟦EOL⟧
L12967 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -874796.750755) ⟦EOL⟧
L12968 | MoveRapid([GX_1,GY_1], [-884.6695,-11.398649]) ⟦EOL⟧
L12969 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -884868.046278) ⟦EOL⟧
L12970 | MoveRapid([GX_1,GY_1], [-894.6695,-16.037162]) ⟦EOL⟧
L12971 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -894939.341801) ⟦EOL⟧
L12972 | MoveRapid([GX_1,GY_1], [-904.6695,-20.675674]) ⟦EOL⟧
L12973 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -905010.637324) ⟦EOL⟧
L12974 | MoveRapid([GX_1,GY_1], [-914.6695,-25.314186]) ⟦EOL⟧
L12975 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -915081.932847) ⟦EOL⟧
L12976 | MoveRapid([GX_1,GY_1], [-920.3595,-27.9535]) ⟦EOL⟧
L12977 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L12978 | MoveRapid([GX_1,GY_1], [-920.1615,-27.1625]) ⟦EOL⟧
L12979 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L12980 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12981 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12982 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12983 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12984 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12985 | MoveRapid([GX_1,GY_1], [-920.1325,-24.3075]) ⟦EOL⟧
L12986 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L12987 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12988 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12989 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12990 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12991 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12992 | MoveRapid([GX_1,GY_1], [-921.1715,-20.3695]) ⟦EOL⟧
L12993 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L12994 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L12995 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L12996 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L12997 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L12998 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L12999 | MoveRapid([GX_1,GY_1], [-920.4765,-18.8215]) ⟦EOL⟧
L13000 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13001 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13002 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13003 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13004 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13005 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13006 | MoveRapid([GX_1,GY_1], [-920.2065,-14.3005]) ⟦EOL⟧
L13007 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13008 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13009–13056
evidence_kind: script_source

L13009 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13010 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13011 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13012 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13013 | MoveRapid([GX_1,GY_1], [-919.8425,-12.5115]) ⟦EOL⟧
L13014 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13015 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13016 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13017 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13018 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13019 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13020 | MoveRapid([GX_1,GY_1], [-920.8315,-11.2365]) ⟦EOL⟧
L13021 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13022 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13023 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13024 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13025 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13026 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13027 | MoveRapid([GX_1,GY_1], [-921.0725,-7.5115]) ⟦EOL⟧
L13028 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13029 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13030 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13031 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13032 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13033 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13034 | MoveRapid([GX_1,GY_1], [-920.9595,-4.5625]) ⟦EOL⟧
L13035 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13036 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13037 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13038 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13039 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13040 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13041 | MoveRapid([GX_1,GY_1], [-919.7275,-1.9685]) ⟦EOL⟧
L13042 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13043 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13044 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13045 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13046 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13047 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13048 | MoveRapid([GX_1,GY_1], [-920.1345,0.3305]) ⟦EOL⟧
L13049 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13050 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13051 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13052 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13053 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13054 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13055 | MoveRapid([GX_1,GY_1], [-921.2615,3.9275]) ⟦EOL⟧
L13056 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13057–13104
evidence_kind: script_source

L13057 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13058 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13059 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13060 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13061 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13062 | MoveRapid([GX_1,GY_1], [-919.3415,6.0245]) ⟦EOL⟧
L13063 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13064 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13065 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13066 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13067 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13068 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13069 | MoveRapid([GX_1,GY_1], [-920.6735,8.0045]) ⟦EOL⟧
L13070 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13071 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13072 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13073 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13074 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13075 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13076 | MoveRapid([GX_1,GY_1], [-920.7705,11.1195]) ⟦EOL⟧
L13077 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13078 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13079 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13080 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13081 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13082 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13083 | MoveRapid([GX_1,GY_1], [-920.8875,14.5845]) ⟦EOL⟧
L13084 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13085 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13086 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13087 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13088 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13089 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13090 | MoveRapid([GX_1,GY_1], [-920.1595,16.4755]) ⟦EOL⟧
L13091 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13092 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13093 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13094 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13095 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13096 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13097 | MoveRapid([GX_1,GY_1], [-919.9965,19.6465]) ⟦EOL⟧
L13098 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13099 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13100 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13101 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13102 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13103 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13104 | MoveRapid([GX_1,GY_1], [-919.2805,23.3705]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13105–13152
evidence_kind: script_source

L13105 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13106 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13107 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13108 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13109 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13110 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13111 | MoveRapid([GX_1,GY_1], [-920.6195,24.5335]) ⟦EOL⟧
L13112 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13113 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13114 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13115 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13116 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13117 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13118 | MoveRapid([GX_1,GY_1], [-919.7255,28.7245]) ⟦EOL⟧
L13119 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13120 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13121 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13122 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13123 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13124 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13125 | MoveRapid([GX_1,GY_1], [-919.2075,31.0435]) ⟦EOL⟧
L13126 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13127 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13128 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13129 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13130 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13131 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13132 | MoveRapid([GX_1,GY_1], [-920.3775,32.7785]) ⟦EOL⟧
L13133 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13134 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13135 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13136 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13137 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13138 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13139 | MoveRapid([GX_1,GY_1], [-921.4425,36.7275]) ⟦EOL⟧
L13140 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13141 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13142 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13143 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13144 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13145 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13146 | MoveRapid([GX_1,GY_1], [-919.8425,37.5785]) ⟦EOL⟧
L13147 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13148 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13149 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13150 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13151 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13152 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13153–13200
evidence_kind: script_source

L13153 | MoveRapid([GX_1,GY_1], [-919.4705,41.4955]) ⟦EOL⟧
L13154 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13155 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13156 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13157 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13158 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13159 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13160 | MoveRapid([GX_1,GY_1], [-920.2885,44.9595]) ⟦EOL⟧
L13161 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -920812.5) ⟦EOL⟧
L13162 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13163 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13164 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13165 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13166 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13167 | MoveRapid([GX_1,GY_1], [-923.2745,-27.8775]) ⟦EOL⟧
L13168 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13169 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13170 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13171 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13172 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13173 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13174 | MoveRapid([GX_1,GY_1], [-922.8905,-27.0265]) ⟦EOL⟧
L13175 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13176 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13177 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13178 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13179 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13180 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13181 | MoveRapid([GX_1,GY_1], [-922.7265,-24.2075]) ⟦EOL⟧
L13182 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13183 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13184 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13185 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13186 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13187 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13188 | MoveRapid([GX_1,GY_1], [-923.6255,-20.3055]) ⟦EOL⟧
L13189 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13190 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13191 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13192 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13193 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13194 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13195 | MoveRapid([GX_1,GY_1], [-923.0255,-18.7125]) ⟦EOL⟧
L13196 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13197 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13198 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13199 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13200 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13201–13248
evidence_kind: script_source

L13201 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13202 | MoveRapid([GX_1,GY_1], [-922.9925,-14.3255]) ⟦EOL⟧
L13203 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13204 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13205 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13206 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13207 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13208 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13209 | MoveRapid([GX_1,GY_1], [-922.6025,-12.6735]) ⟦EOL⟧
L13210 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13211 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13212 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13213 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13214 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13215 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13216 | MoveRapid([GX_1,GY_1], [-923.2605,-10.9735]) ⟦EOL⟧
L13217 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13218 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13219 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13220 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13221 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13222 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13223 | MoveRapid([GX_1,GY_1], [-923.5385,-7.6855]) ⟦EOL⟧
L13224 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13225 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13226 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13227 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13228 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13229 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13230 | MoveRapid([GX_1,GY_1], [-923.5005,-4.4595]) ⟦EOL⟧
L13231 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13232 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13233 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13234 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13235 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13236 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13237 | MoveRapid([GX_1,GY_1], [-922.7225,-1.7345]) ⟦EOL⟧
L13238 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13239 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13240 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13241 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13242 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13243 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13244 | MoveRapid([GX_1,GY_1], [-923.0155,0.2075]) ⟦EOL⟧
L13245 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13246 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13247 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13248 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13249–13296
evidence_kind: script_source

L13249 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13250 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13251 | MoveRapid([GX_1,GY_1], [-923.6245,3.8165]) ⟦EOL⟧
L13252 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13253 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13254 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13255 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13256 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13257 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13258 | MoveRapid([GX_1,GY_1], [-921.9275,6.0565]) ⟦EOL⟧
L13259 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13260 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13261 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13262 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13263 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13264 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13265 | MoveRapid([GX_1,GY_1], [-923.0535,7.9395]) ⟦EOL⟧
L13266 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13267 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13268 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13269 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13270 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13271 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13272 | MoveRapid([GX_1,GY_1], [-923.4795,11.3875]) ⟦EOL⟧
L13273 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13274 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13275 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13276 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13277 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13278 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13279 | MoveRapid([GX_1,GY_1], [-923.6745,14.8115]) ⟦EOL⟧
L13280 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13281 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13282 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13283 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13284 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13285 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13286 | MoveRapid([GX_1,GY_1], [-922.9495,16.6695]) ⟦EOL⟧
L13287 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13288 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13289 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13290 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13291 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13292 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13293 | MoveRapid([GX_1,GY_1], [-922.7955,19.4175]) ⟦EOL⟧
L13294 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13295 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13296 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13297–13344
evidence_kind: script_source

L13297 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13298 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13299 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13300 | MoveRapid([GX_1,GY_1], [-922.0125,23.4595]) ⟦EOL⟧
L13301 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13302 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13303 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13304 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13305 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13306 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13307 | MoveRapid([GX_1,GY_1], [-923.1295,24.6775]) ⟦EOL⟧
L13308 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13309 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13310 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13311 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13312 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13313 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13314 | MoveRapid([GX_1,GY_1], [-922.3195,28.6255]) ⟦EOL⟧
L13315 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13316 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13317 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13318 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13319 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13320 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13321 | MoveRapid([GX_1,GY_1], [-922.0655,30.7775]) ⟦EOL⟧
L13322 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13323 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13324 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13325 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13326 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13327 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13328 | MoveRapid([GX_1,GY_1], [-922.9785,32.9635]) ⟦EOL⟧
L13329 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13330 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13331 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13332 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13333 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13334 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13335 | MoveRapid([GX_1,GY_1], [-923.8525,36.6605]) ⟦EOL⟧
L13336 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13337 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13338 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13339 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13340 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13341 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13342 | MoveRapid([GX_1,GY_1], [-922.4335,37.6685]) ⟦EOL⟧
L13343 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13344 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13345–13392
evidence_kind: script_source

L13345 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13346 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13347 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13348 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13349 | MoveRapid([GX_1,GY_1], [-922.4135,41.6985]) ⟦EOL⟧
L13350 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13351 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13352 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13353 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13354 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13355 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13356 | MoveRapid([GX_1,GY_1], [-922.6565,44.6955]) ⟦EOL⟧
L13357 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -923512.5) ⟦EOL⟧
L13358 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13359 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13360 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13361 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13362 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13363 | MoveRapid([GX_1,GY_1], [-925.9745,-27.8775]) ⟦EOL⟧
L13364 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13365 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13366 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13367 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13368 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13369 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13370 | MoveRapid([GX_1,GY_1], [-925.6185,-26.9105]) ⟦EOL⟧
L13371 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13372 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13373 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13374 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13375 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13376 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13377 | MoveRapid([GX_1,GY_1], [-925.3425,-24.1205]) ⟦EOL⟧
L13378 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13379 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13380 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13381 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13382 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13383 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13384 | MoveRapid([GX_1,GY_1], [-926.1085,-20.2475]) ⟦EOL⟧
L13385 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13386 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13387 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13388 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13389 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13390 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13391 | MoveRapid([GX_1,GY_1], [-925.5885,-18.6175]) ⟦EOL⟧
L13392 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13393–13440
evidence_kind: script_source

L13393 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13394 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13395 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13396 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13397 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13398 | MoveRapid([GX_1,GY_1], [-925.7725,-14.3585]) ⟦EOL⟧
L13399 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13400 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13401 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13402 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13403 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13404 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13405 | MoveRapid([GX_1,GY_1], [-925.3595,-12.8085]) ⟦EOL⟧
L13406 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13407 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13408 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13409 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13410 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13411 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13412 | MoveRapid([GX_1,GY_1], [-925.7455,-10.2965]) ⟦EOL⟧
L13413 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13414 | MoveRapid([GX_1,GY_1], [-925.7875,-7.6395]) ⟦EOL⟧
L13415 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13416 | MoveRapid([GX_1,GY_1], [-926.0505,-4.6775]) ⟦EOL⟧
L13417 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13418 | MoveRapid([GX_1,GY_1], [-925.7635,-1.7295]) ⟦EOL⟧
L13419 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13420 | MoveRapid([GX_1,GY_1], [-925.8975,0.2295]) ⟦EOL⟧
L13421 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13422 | MoveRapid([GX_1,GY_1], [-926.0195,3.7225]) ⟦EOL⟧
L13423 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13424 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13425 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13426 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13427 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13428 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13429 | MoveRapid([GX_1,GY_1], [-924.5385,6.0895]) ⟦EOL⟧
L13430 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13431 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13432 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13433 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13434 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13435 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13436 | MoveRapid([GX_1,GY_1], [-925.4715,7.8995]) ⟦EOL⟧
L13437 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13438 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13439 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13440 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13441–13488
evidence_kind: script_source

L13441 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13442 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13443 | MoveRapid([GX_1,GY_1], [-926.1885,11.6195]) ⟦EOL⟧
L13444 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13445 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13446 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13447 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13448 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13449 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13450 | MoveRapid([GX_1,GY_1], [-926.4375,15.0065]) ⟦EOL⟧
L13451 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13452 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13453 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13454 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13455 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13456 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13457 | MoveRapid([GX_1,GY_1], [-925.7275,16.8305]) ⟦EOL⟧
L13458 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13459 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13460 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13461 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13462 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13463 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13464 | MoveRapid([GX_1,GY_1], [-925.5745,19.2245]) ⟦EOL⟧
L13465 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13466 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13467 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13468 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13469 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13470 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13471 | MoveRapid([GX_1,GY_1], [-924.7455,23.5265]) ⟦EOL⟧
L13472 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13473 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13474 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13475 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13476 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13477 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13478 | MoveRapid([GX_1,GY_1], [-925.6665,24.8115]) ⟦EOL⟧
L13479 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13480 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13481 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13482 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13483 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13484 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13485 | MoveRapid([GX_1,GY_1], [-924.9205,28.5295]) ⟦EOL⟧
L13486 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13487 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13488 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13489–13536
evidence_kind: script_source

L13489 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13490 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13491 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13492 | MoveRapid([GX_1,GY_1], [-924.9005,30.5455]) ⟦EOL⟧
L13493 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13494 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13495 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13496 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13497 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13498 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13499 | MoveRapid([GX_1,GY_1], [-925.5935,33.1355]) ⟦EOL⟧
L13500 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13501 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13502 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13503 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13504 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13505 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13506 | MoveRapid([GX_1,GY_1], [-926.2955,36.5855]) ⟦EOL⟧
L13507 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13508 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13509 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13510 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13511 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13512 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13513 | MoveRapid([GX_1,GY_1], [-925.0465,37.7485]) ⟦EOL⟧
L13514 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13515 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13516 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13517 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13518 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13519 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13520 | MoveRapid([GX_1,GY_1], [-925.3275,41.8725]) ⟦EOL⟧
L13521 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13522 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13523 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13524 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13525 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13526 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13527 | MoveRapid([GX_1,GY_1], [-925.0735,44.4595]) ⟦EOL⟧
L13528 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -926212.5) ⟦EOL⟧
L13529 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13530 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13531 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13532 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13533 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13534 | MoveRapid([GX_1,GY_1], [-928.6745,-27.8775]) ⟦EOL⟧
L13535 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13536 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13537–13584
evidence_kind: script_source

L13537 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13538 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13539 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13540 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13541 | MoveRapid([GX_1,GY_1], [-928.3435,-26.8135]) ⟦EOL⟧
L13542 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13543 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13544 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13545 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13546 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13547 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13548 | MoveRapid([GX_1,GY_1], [-927.9775,-24.0445]) ⟦EOL⟧
L13549 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13550 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13551 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13552 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13553 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13554 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13555 | MoveRapid([GX_1,GY_1], [-928.6185,-20.1965]) ⟦EOL⟧
L13556 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13557 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13558 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13559 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13560 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13561 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13562 | MoveRapid([GX_1,GY_1], [-928.1665,-18.5405]) ⟦EOL⟧
L13563 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13564 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13565 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13566 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13567 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13568 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13569 | MoveRapid([GX_1,GY_1], [-928.5485,-14.4015]) ⟦EOL⟧
L13570 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13571 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13572 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13573 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13574 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13575 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13576 | MoveRapid([GX_1,GY_1], [-928.1145,-12.9155]) ⟦EOL⟧
L13577 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13578 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13579 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13580 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13581 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13582 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13583 | MoveRapid([GX_1,GY_1], [-928.2285,-10.0885]) ⟦EOL⟧
L13584 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13585–13632
evidence_kind: script_source

L13585 | MoveRapid([GX_1,GY_1], [-928.3175,-7.7565]) ⟦EOL⟧
L13586 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13587 | MoveRapid([GX_1,GY_1], [-928.6335,-4.6125]) ⟦EOL⟧
L13588 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13589 | MoveRapid([GX_1,GY_1], [-928.6825,-1.5585]) ⟦EOL⟧
L13590 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13591 | MoveRapid([GX_1,GY_1], [-928.7345,0.1425]) ⟦EOL⟧
L13592 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13593 | MoveRapid([GX_1,GY_1], [-928.4445,3.6465]) ⟦EOL⟧
L13594 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13595 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13596 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13597 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13598 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13599 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13600 | MoveRapid([GX_1,GY_1], [-927.1735,6.1225]) ⟦EOL⟧
L13601 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13602 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13603 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13604 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13605 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13606 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13607 | MoveRapid([GX_1,GY_1], [-927.9285,7.8825]) ⟦EOL⟧
L13608 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13609 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13610 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13611 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13612 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13613 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13614 | MoveRapid([GX_1,GY_1], [-928.9015,11.8165]) ⟦EOL⟧
L13615 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13616 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13617 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13618 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13619 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13620 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13621 | MoveRapid([GX_1,GY_1], [-929.1765,15.1695]) ⟦EOL⟧
L13622 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13623 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13624 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13625 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13626 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13627 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13628 | MoveRapid([GX_1,GY_1], [-928.4925,16.9615]) ⟦EOL⟧
L13629 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13630 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13631 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13632 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13633–13680
evidence_kind: script_source

L13633 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13634 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13635 | MoveRapid([GX_1,GY_1], [-928.3365,19.0695]) ⟦EOL⟧
L13636 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13637 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13638 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13639 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13640 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13641 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13642 | MoveRapid([GX_1,GY_1], [-927.4805,23.5755]) ⟦EOL⟧
L13643 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13644 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13645 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13646 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13647 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13648 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13649 | MoveRapid([GX_1,GY_1], [-928.2295,24.9365]) ⟦EOL⟧
L13650 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13651 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13652 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13653 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13654 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13655 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13656 | MoveRapid([GX_1,GY_1], [-927.5285,28.4365]) ⟦EOL⟧
L13657 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13658 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13659 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13660 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13661 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13662 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13663 | MoveRapid([GX_1,GY_1], [-927.7135,30.3485]) ⟦EOL⟧
L13664 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13665 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13666 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13667 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13668 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13669 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13670 | MoveRapid([GX_1,GY_1], [-928.2215,33.2945]) ⟦EOL⟧
L13671 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13672 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13673 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13674 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13675 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13676 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13677 | MoveRapid([GX_1,GY_1], [-928.7755,36.5035]) ⟦EOL⟧
L13678 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13679 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13680 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13681–13728
evidence_kind: script_source

L13681 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13682 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13683 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13684 | MoveRapid([GX_1,GY_1], [-927.6785,37.8185]) ⟦EOL⟧
L13685 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13686 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13687 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13688 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13689 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13690 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13691 | MoveRapid([GX_1,GY_1], [-928.2115,42.0175]) ⟦EOL⟧
L13692 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13693 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13694 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13695 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13696 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13697 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13698 | MoveRapid([GX_1,GY_1], [-927.5385,44.2495]) ⟦EOL⟧
L13699 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -928912.5) ⟦EOL⟧
L13700 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13701 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13702 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13703 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13704 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13705 | MoveRapid([GX_1,GY_1], [-931.3745,-27.8775]) ⟦EOL⟧
L13706 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13707 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13708 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13709 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13710 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13711 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13712 | MoveRapid([GX_1,GY_1], [-931.0665,-26.7365]) ⟦EOL⟧
L13713 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13714 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13715 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13716 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13717 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13718 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13719 | MoveRapid([GX_1,GY_1], [-930.6355,-23.9815]) ⟦EOL⟧
L13720 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13721 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13722 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13723 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13724 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13725 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13726 | MoveRapid([GX_1,GY_1], [-931.1555,-20.1515]) ⟦EOL⟧
L13727 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13728 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13729–13776
evidence_kind: script_source

L13729 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13730 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13731 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13732 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13733 | MoveRapid([GX_1,GY_1], [-930.7555,-18.4785]) ⟦EOL⟧
L13734 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13735 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13736 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13737 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13738 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13739 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13740 | MoveRapid([GX_1,GY_1], [-931.3205,-14.4525]) ⟦EOL⟧
L13741 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13742 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13743 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13744 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13745 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13746 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13747 | MoveRapid([GX_1,GY_1], [-930.8685,-12.9945]) ⟦EOL⟧
L13748 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13749 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13750 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13751 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13752 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13753 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13754 | MoveRapid([GX_1,GY_1], [-930.7395,-9.9075]) ⟦EOL⟧
L13755 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13756 | MoveRapid([GX_1,GY_1], [-930.8785,-7.8445]) ⟦EOL⟧
L13757 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13758 | MoveRapid([GX_1,GY_1], [-931.2365,-4.5665]) ⟦EOL⟧
L13759 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13760 | MoveRapid([GX_1,GY_1], [-931.5625,-1.4175]) ⟦EOL⟧
L13761 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13762 | MoveRapid([GX_1,GY_1], [-931.5485,0.0765]) ⟦EOL⟧
L13763 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13764 | MoveRapid([GX_1,GY_1], [-930.9025,3.5865]) ⟦EOL⟧
L13765 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13766 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13767 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13768 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13769 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13770 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13771 | MoveRapid([GX_1,GY_1], [-929.8305,6.1535]) ⟦EOL⟧
L13772 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13773 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13774 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13775 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13776 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13777–13824
evidence_kind: script_source

L13777 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13778 | MoveRapid([GX_1,GY_1], [-930.4235,7.8915]) ⟦EOL⟧
L13779 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13780 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13781 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13782 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13783 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13784 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13785 | MoveRapid([GX_1,GY_1], [-931.6135,11.9785]) ⟦EOL⟧
L13786 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13787 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13788 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13789 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13790 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13791 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13792 | MoveRapid([GX_1,GY_1], [-931.8935,15.2995]) ⟦EOL⟧
L13793 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13794 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13795 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13796 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13797 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13798 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13799 | MoveRapid([GX_1,GY_1], [-931.2435,17.0615]) ⟦EOL⟧
L13800 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13801 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13802 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13803 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13804 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13805 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13806 | MoveRapid([GX_1,GY_1], [-931.0795,18.9505]) ⟦EOL⟧
L13807 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13808 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13809 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13810 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13811 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13812 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13813 | MoveRapid([GX_1,GY_1], [-930.2175,23.6015]) ⟦EOL⟧
L13814 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13815 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13816 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13817 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13818 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13819 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13820 | MoveRapid([GX_1,GY_1], [-930.8185,25.0525]) ⟦EOL⟧
L13821 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13822 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13823 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13824 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13825–13872
evidence_kind: script_source

L13825 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13826 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13827 | MoveRapid([GX_1,GY_1], [-930.1455,28.3465]) ⟦EOL⟧
L13828 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13829 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13830 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13831 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13832 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13833 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13834 | MoveRapid([GX_1,GY_1], [-930.5025,30.1815]) ⟦EOL⟧
L13835 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13836 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13837 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13838 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13839 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13840 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13841 | MoveRapid([GX_1,GY_1], [-930.8645,33.4415]) ⟦EOL⟧
L13842 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13843 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13844 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13845 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13846 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13847 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13848 | MoveRapid([GX_1,GY_1], [-931.2925,36.4145]) ⟦EOL⟧
L13849 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13850 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13851 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13852 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13853 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13854 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13855 | MoveRapid([GX_1,GY_1], [-930.3325,37.8805]) ⟦EOL⟧
L13856 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13857 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13858 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13859 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13860 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13861 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13862 | MoveRapid([GX_1,GY_1], [-931.0655,42.1325]) ⟦EOL⟧
L13863 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13864 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13865 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13866 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13867 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13868 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13869 | MoveRapid([GX_1,GY_1], [-930.0535,44.0675]) ⟦EOL⟧
L13870 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -931612.5) ⟦EOL⟧
L13871 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13872 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13873–13920
evidence_kind: script_source

L13873 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13874 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13875 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13876 | MoveRapid([GX_1,GY_1], [-934.0745,-27.8775]) ⟦EOL⟧
L13877 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13878 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13879 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13880 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13881 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13882 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13883 | MoveRapid([GX_1,GY_1], [-933.7875,-26.6775]) ⟦EOL⟧
L13884 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13885 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13886 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13887 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13888 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13889 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13890 | MoveRapid([GX_1,GY_1], [-933.3135,-23.9305]) ⟦EOL⟧
L13891 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13892 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13893 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13894 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13895 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13896 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13897 | MoveRapid([GX_1,GY_1], [-933.7205,-20.1135]) ⟦EOL⟧
L13898 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13899 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13900 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13901 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13902 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13903 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13904 | MoveRapid([GX_1,GY_1], [-933.3585,-18.4315]) ⟦EOL⟧
L13905 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13906 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13907 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13908 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13909 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13910 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13911 | MoveRapid([GX_1,GY_1], [-934.0875,-14.5125]) ⟦EOL⟧
L13912 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13913 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13914 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13915 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13916 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13917 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13918 | MoveRapid([GX_1,GY_1], [-933.6185,-13.0465]) ⟦EOL⟧
L13919 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13920 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13921–13968
evidence_kind: script_source

L13921 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13922 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13923 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13924 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13925 | MoveRapid([GX_1,GY_1], [-933.2765,-9.7535]) ⟦EOL⟧
L13926 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13927 | MoveRapid([GX_1,GY_1], [-933.4705,-7.9015]) ⟦EOL⟧
L13928 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13929 | MoveRapid([GX_1,GY_1], [-933.8605,-4.5405]) ⟦EOL⟧
L13930 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13931 | MoveRapid([GX_1,GY_1], [-934.4045,-1.3045]) ⟦EOL⟧
L13932 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13933 | MoveRapid([GX_1,GY_1], [-934.3405,0.0305]) ⟦EOL⟧
L13934 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13935 | MoveRapid([GX_1,GY_1], [-933.3925,3.5445]) ⟦EOL⟧
L13936 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13937 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13938 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13939 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13940 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13941 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13942 | MoveRapid([GX_1,GY_1], [-932.5135,6.1865]) ⟦EOL⟧
L13943 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13944 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13945 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13946 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13947 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13948 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13949 | MoveRapid([GX_1,GY_1], [-932.9585,7.9235]) ⟦EOL⟧
L13950 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13951 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13952 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13953 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13954 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13955 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13956 | MoveRapid([GX_1,GY_1], [-934.3305,12.1035]) ⟦EOL⟧
L13957 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13958 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13959 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13960 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13961 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13962 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13963 | MoveRapid([GX_1,GY_1], [-934.5875,15.3965]) ⟦EOL⟧
L13964 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13965 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13966 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13967 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13968 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 13969–14016
evidence_kind: script_source

L13969 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13970 | MoveRapid([GX_1,GY_1], [-933.9835,17.1305]) ⟦EOL⟧
L13971 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13972 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13973 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13974 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13975 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13976 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13977 | MoveRapid([GX_1,GY_1], [-933.8045,18.8695]) ⟦EOL⟧
L13978 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13979 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13980 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13981 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13982 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13983 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13984 | MoveRapid([GX_1,GY_1], [-932.9555,23.6105]) ⟦EOL⟧
L13985 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13986 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13987 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13988 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13989 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13990 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13991 | MoveRapid([GX_1,GY_1], [-933.4335,25.1585]) ⟦EOL⟧
L13992 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L13993 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L13994 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L13995 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L13996 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L13997 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L13998 | MoveRapid([GX_1,GY_1], [-932.7695,28.2625]) ⟦EOL⟧
L13999 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14000 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14001 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14002 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14003 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14004 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14005 | MoveRapid([GX_1,GY_1], [-933.2695,30.0515]) ⟦EOL⟧
L14006 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14007 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14008 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14009 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14010 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14011 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14012 | MoveRapid([GX_1,GY_1], [-933.5195,33.5765]) ⟦EOL⟧
L14013 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14014 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14015 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14016 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14017–14064
evidence_kind: script_source

L14017 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14018 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14019 | MoveRapid([GX_1,GY_1], [-933.8445,36.3195]) ⟦EOL⟧
L14020 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14021 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14022 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14023 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14024 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14025 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14026 | MoveRapid([GX_1,GY_1], [-933.0055,37.9335]) ⟦EOL⟧
L14027 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14028 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14029 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14030 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14031 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14032 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14033 | MoveRapid([GX_1,GY_1], [-933.8885,42.2185]) ⟦EOL⟧
L14034 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14035 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14036 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14037 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14038 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14039 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14040 | MoveRapid([GX_1,GY_1], [-932.6175,43.9125]) ⟦EOL⟧
L14041 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -934312.5) ⟦EOL⟧
L14042 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14043 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14044 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14045 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14046 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14047 | MoveRapid([GX_1,GY_1], [-936.7745,-27.8775]) ⟦EOL⟧
L14048 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14049 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14050 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14051 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14052 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14053 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14054 | MoveRapid([GX_1,GY_1], [-936.5075,-26.6385]) ⟦EOL⟧
L14055 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14056 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14057 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14058 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14059 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14060 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14061 | MoveRapid([GX_1,GY_1], [-936.0125,-23.8925]) ⟦EOL⟧
L14062 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14063 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14064 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14065–14112
evidence_kind: script_source

L14065 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14066 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14067 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14068 | MoveRapid([GX_1,GY_1], [-936.3135,-20.0825]) ⟦EOL⟧
L14069 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14070 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14071 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14072 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14073 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14074 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14075 | MoveRapid([GX_1,GY_1], [-935.9755,-18.4005]) ⟦EOL⟧
L14076 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14077 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14078 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14079 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14080 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14081 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14082 | MoveRapid([GX_1,GY_1], [-936.8505,-14.5805]) ⟦EOL⟧
L14083 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14084 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14085 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14086 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14087 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14088 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14089 | MoveRapid([GX_1,GY_1], [-936.3655,-13.0725]) ⟦EOL⟧
L14090 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14091 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14092 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14093 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14094 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14095 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14096 | MoveRapid([GX_1,GY_1], [-935.8415,-9.6265]) ⟦EOL⟧
L14097 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14098 | MoveRapid([GX_1,GY_1], [-936.0945,-7.9285]) ⟦EOL⟧
L14099 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14100 | MoveRapid([GX_1,GY_1], [-936.5045,-4.5345]) ⟦EOL⟧
L14101 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14102 | MoveRapid([GX_1,GY_1], [-937.2075,-1.2215]) ⟦EOL⟧
L14103 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14104 | MoveRapid([GX_1,GY_1], [-937.1085,0.0045]) ⟦EOL⟧
L14105 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14106 | MoveRapid([GX_1,GY_1], [-935.9155,3.5185]) ⟦EOL⟧
L14107 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14108 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14109 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14110 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14111 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14112 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14113–14160
evidence_kind: script_source

L14113 | MoveRapid([GX_1,GY_1], [-935.2195,6.2185]) ⟦EOL⟧
L14114 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14115 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14116 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14117 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14118 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14119 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14120 | MoveRapid([GX_1,GY_1], [-935.5305,7.9825]) ⟦EOL⟧
L14121 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14122 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14123 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14124 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14125 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14126 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14127 | MoveRapid([GX_1,GY_1], [-937.0465,12.1945]) ⟦EOL⟧
L14128 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14129 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14130 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14131 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14132 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14133 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14134 | MoveRapid([GX_1,GY_1], [-937.2565,15.4615]) ⟦EOL⟧
L14135 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14136 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14137 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14138 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14139 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14140 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14141 | MoveRapid([GX_1,GY_1], [-936.7095,17.1695]) ⟦EOL⟧
L14142 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14143 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14144 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14145 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14146 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14147 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14148 | MoveRapid([GX_1,GY_1], [-936.5105,18.8245]) ⟦EOL⟧
L14149 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14150 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14151 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14152 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14153 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14154 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14155 | MoveRapid([GX_1,GY_1], [-935.6935,23.5975]) ⟦EOL⟧
L14156 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14157 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14158 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14159 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14160 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14161–14208
evidence_kind: script_source

L14161 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14162 | MoveRapid([GX_1,GY_1], [-936.0745,25.2555]) ⟦EOL⟧
L14163 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14164 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14165 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14166 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14167 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14168 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14169 | MoveRapid([GX_1,GY_1], [-935.4005,28.1795]) ⟦EOL⟧
L14170 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14171 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14172 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14173 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14174 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14175 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14176 | MoveRapid([GX_1,GY_1], [-936.0145,29.9535]) ⟦EOL⟧
L14177 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14178 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14179 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14180 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14181 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14182 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14183 | MoveRapid([GX_1,GY_1], [-936.1905,33.6965]) ⟦EOL⟧
L14184 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14185 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14186 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14187 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14188 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14189 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14190 | MoveRapid([GX_1,GY_1], [-936.4315,36.2165]) ⟦EOL⟧
L14191 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14192 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14193 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14194 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14195 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14196 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14197 | MoveRapid([GX_1,GY_1], [-935.6995,37.9765]) ⟦EOL⟧
L14198 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14199 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14200 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14201 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14202 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14203 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14204 | MoveRapid([GX_1,GY_1], [-936.6845,42.2755]) ⟦EOL⟧
L14205 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14206 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14207 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14208 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14209–14256
evidence_kind: script_source

L14209 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14210 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14211 | MoveRapid([GX_1,GY_1], [-935.2285,43.7845]) ⟦EOL⟧
L14212 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -937012.5) ⟦EOL⟧
L14213 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14214 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14215 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14216 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14217 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14218 | MoveRapid([GX_1,GY_1], [-939.4745,-27.8775]) ⟦EOL⟧
L14219 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14220 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14221 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14222 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14223 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14224 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14225 | MoveRapid([GX_1,GY_1], [-939.2235,-26.6195]) ⟦EOL⟧
L14226 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14227 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14228 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14229 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14230 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14231 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14232 | MoveRapid([GX_1,GY_1], [-938.7325,-23.8665]) ⟦EOL⟧
L14233 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14234 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14235 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14236 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14237 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14238 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14239 | MoveRapid([GX_1,GY_1], [-938.9355,-20.0565]) ⟦EOL⟧
L14240 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14241 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14242 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14243 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14244 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14245 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14246 | MoveRapid([GX_1,GY_1], [-938.6065,-18.3875]) ⟦EOL⟧
L14247 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14248 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14249 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14250 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14251 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14252 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14253 | MoveRapid([GX_1,GY_1], [-939.6095,-14.6585]) ⟦EOL⟧
L14254 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14255 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14256 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14257–14304
evidence_kind: script_source

L14257 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14258 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14259 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14260 | MoveRapid([GX_1,GY_1], [-939.1105,-13.0705]) ⟦EOL⟧
L14261 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14262 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14263 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14264 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14265 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14266 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14267 | MoveRapid([GX_1,GY_1], [-938.4005,-9.9625]) ⟦EOL⟧
L14268 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14269 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14270 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14271 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14272 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14273 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14274 | MoveRapid([GX_1,GY_1], [-938.9935,-8.1085]) ⟦EOL⟧
L14275 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14276 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14277 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14278 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14279 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14280 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14281 | MoveRapid([GX_1,GY_1], [-939.1805,-4.2475]) ⟦EOL⟧
L14282 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14283 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14284 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14285 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14286 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14287 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14288 | MoveRapid([GX_1,GY_1], [-939.8895,-0.9595]) ⟦EOL⟧
L14289 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14290 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14291 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14292 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14293 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14294 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14295 | MoveRapid([GX_1,GY_1], [-939.8275,-0.1205]) ⟦EOL⟧
L14296 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14297 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14298 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14299 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14300 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14301 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14302 | MoveRapid([GX_1,GY_1], [-938.4695,3.5095]) ⟦EOL⟧
L14303 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14304 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14305–14352
evidence_kind: script_source

L14305 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14306 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14307 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14308 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14309 | MoveRapid([GX_1,GY_1], [-937.9505,6.2515]) ⟦EOL⟧
L14310 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14311 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14312 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14313 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14314 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14315 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14316 | MoveRapid([GX_1,GY_1], [-938.1425,8.0635]) ⟦EOL⟧
L14317 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14318 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14319 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14320 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14321 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14322 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14323 | MoveRapid([GX_1,GY_1], [-939.7655,12.2495]) ⟦EOL⟧
L14324 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14325 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14326 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14327 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14328 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14329 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14330 | MoveRapid([GX_1,GY_1], [-939.9045,15.4945]) ⟦EOL⟧
L14331 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14332 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14333 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14334 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14335 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14336 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14337 | MoveRapid([GX_1,GY_1], [-939.4235,17.1755]) ⟦EOL⟧
L14338 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14339 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14340 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14341 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14342 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14343 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14344 | MoveRapid([GX_1,GY_1], [-939.1995,18.8165]) ⟦EOL⟧
L14345 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14346 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14347 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14348 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14349 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14350 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14351 | MoveRapid([GX_1,GY_1], [-938.4355,23.5645]) ⟦EOL⟧
L14352 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14353–14400
evidence_kind: script_source

L14353 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14354 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14355 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14356 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14357 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14358 | MoveRapid([GX_1,GY_1], [-938.7425,25.3435]) ⟦EOL⟧
L14359 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14360 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14361 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14362 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14363 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14364 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14365 | MoveRapid([GX_1,GY_1], [-938.0395,28.0995]) ⟦EOL⟧
L14366 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14367 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14368 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14369 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14370 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14371 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14372 | MoveRapid([GX_1,GY_1], [-938.7365,29.8875]) ⟦EOL⟧
L14373 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14374 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14375 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14376 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14377 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14378 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14379 | MoveRapid([GX_1,GY_1], [-938.8745,33.8055]) ⟦EOL⟧
L14380 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14381 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14382 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14383 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14384 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14385 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14386 | MoveRapid([GX_1,GY_1], [-939.0545,36.1065]) ⟦EOL⟧
L14387 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14388 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14389 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14390 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14391 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14392 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14393 | MoveRapid([GX_1,GY_1], [-938.4145,38.0115]) ⟦EOL⟧
L14394 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14395 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14396 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14397 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14398 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14399 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14400 | MoveRapid([GX_1,GY_1], [-939.4475,42.3035]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14401–14448
evidence_kind: script_source

L14401 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14402 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14403 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14404 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14405 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14406 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14407 | MoveRapid([GX_1,GY_1], [-937.8895,43.6845]) ⟦EOL⟧
L14408 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -939712.5) ⟦EOL⟧
L14409 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14410 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14411 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14412 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14413 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14414 | MoveRapid([GX_1,GY_1], [-942.1745,-27.8775]) ⟦EOL⟧
L14415 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14416 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14417 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14418 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14419 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14420 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14421 | MoveRapid([GX_1,GY_1], [-941.9385,-26.6195]) ⟦EOL⟧
L14422 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14423 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14424 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14425 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14426 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14427 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14428 | MoveRapid([GX_1,GY_1], [-941.4745,-23.8525]) ⟦EOL⟧
L14429 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14430 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14431 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14432 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14433 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14434 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14435 | MoveRapid([GX_1,GY_1], [-941.5825,-20.0375]) ⟦EOL⟧
L14436 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14437 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14438 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14439 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14440 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14441 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14442 | MoveRapid([GX_1,GY_1], [-941.2495,-18.3885]) ⟦EOL⟧
L14443 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14444 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14445 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14446 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14447 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14448 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14449–14496
evidence_kind: script_source

L14449 | MoveRapid([GX_1,GY_1], [-942.3625,-14.7435]) ⟦EOL⟧
L14450 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14451 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14452 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14453 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14454 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14455 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14456 | MoveRapid([GX_1,GY_1], [-941.8535,-13.0405]) ⟦EOL⟧
L14457 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14458 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14459 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14460 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14461 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14462 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14463 | MoveRapid([GX_1,GY_1], [-941.0195,-9.8905]) ⟦EOL⟧
L14464 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14465 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14466 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14467 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14468 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14469 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14470 | MoveRapid([GX_1,GY_1], [-941.6795,-8.0755]) ⟦EOL⟧
L14471 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14472 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14473 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14474 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14475 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14476 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14477 | MoveRapid([GX_1,GY_1], [-941.8665,-4.2815]) ⟦EOL⟧
L14478 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14479 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14480 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14481 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14482 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14483 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14484 | MoveRapid([GX_1,GY_1], [-942.6165,-0.9355]) ⟦EOL⟧
L14485 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14486 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14487 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14488 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14489 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14490 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14491 | MoveRapid([GX_1,GY_1], [-942.5505,-0.1065]) ⟦EOL⟧
L14492 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14493 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14494 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14495 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14496 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14497–14544
evidence_kind: script_source

L14497 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14498 | MoveRapid([GX_1,GY_1], [-941.0555,3.5185]) ⟦EOL⟧
L14499 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14500 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14501 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14502 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14503 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14504 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14505 | MoveRapid([GX_1,GY_1], [-940.7055,6.2825]) ⟦EOL⟧
L14506 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14507 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14508 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14509 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14510 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14511 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14512 | MoveRapid([GX_1,GY_1], [-940.7915,8.1695]) ⟦EOL⟧
L14513 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14514 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14515 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14516 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14517 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14518 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14519 | MoveRapid([GX_1,GY_1], [-942.4855,12.2695]) ⟦EOL⟧
L14520 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14521 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14522 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14523 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14524 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14525 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14526 | MoveRapid([GX_1,GY_1], [-942.5275,15.4945]) ⟦EOL⟧
L14527 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14528 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14529 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14530 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14531 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14532 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14533 | MoveRapid([GX_1,GY_1], [-942.1235,17.1515]) ⟦EOL⟧
L14534 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14535 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14536 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14537 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14538 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14539 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14540 | MoveRapid([GX_1,GY_1], [-941.8695,18.8475]) ⟦EOL⟧
L14541 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14542 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14543 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14544 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14545–14592
evidence_kind: script_source

L14545 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14546 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14547 | MoveRapid([GX_1,GY_1], [-941.1765,23.5115]) ⟦EOL⟧
L14548 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14549 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14550 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14551 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14552 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14553 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14554 | MoveRapid([GX_1,GY_1], [-941.4355,25.4225]) ⟦EOL⟧
L14555 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14556 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14557 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14558 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14559 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14560 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14561 | MoveRapid([GX_1,GY_1], [-940.6865,28.0245]) ⟦EOL⟧
L14562 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14563 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14564 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14565 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14566 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14567 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14568 | MoveRapid([GX_1,GY_1], [-941.4365,29.8565]) ⟦EOL⟧
L14569 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14570 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14571 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14572 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14573 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14574 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14575 | MoveRapid([GX_1,GY_1], [-941.5715,33.9015]) ⟦EOL⟧
L14576 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14577 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14578 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14579 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14580 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14581 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14582 | MoveRapid([GX_1,GY_1], [-941.7135,35.9895]) ⟦EOL⟧
L14583 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14584 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14585 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14586 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14587 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14588 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14589 | MoveRapid([GX_1,GY_1], [-941.1485,38.0355]) ⟦EOL⟧
L14590 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14591 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14592 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14593–14640
evidence_kind: script_source

L14593 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14594 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14595 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14596 | MoveRapid([GX_1,GY_1], [-942.1825,42.3035]) ⟦EOL⟧
L14597 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14598 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14599 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14600 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14601 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14602 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14603 | MoveRapid([GX_1,GY_1], [-940.5985,43.6115]) ⟦EOL⟧
L14604 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -942412.5) ⟦EOL⟧
L14605 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14606 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14607 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14608 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14609 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14610 | MoveRapid([GX_1,GY_1], [-944.8745,-27.8775]) ⟦EOL⟧
L14611 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14612 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14613 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14614 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14615 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14616 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14617 | MoveRapid([GX_1,GY_1], [-944.6515,-26.6385]) ⟦EOL⟧
L14618 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14619 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14620 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14621 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14622 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14623 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14624 | MoveRapid([GX_1,GY_1], [-944.2375,-23.8505]) ⟦EOL⟧
L14625 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14626 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14627 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14628 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14629 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14630 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14631 | MoveRapid([GX_1,GY_1], [-944.2585,-20.0255]) ⟦EOL⟧
L14632 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14633 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14634 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14635 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14636 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14637 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14638 | MoveRapid([GX_1,GY_1], [-943.9065,-18.4065]) ⟦EOL⟧
L14639 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14640 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14641–14688
evidence_kind: script_source

L14641 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14642 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14643 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14644 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14645 | MoveRapid([GX_1,GY_1], [-945.1115,-14.8375]) ⟦EOL⟧
L14646 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14647 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14648 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14649 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14650 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14651 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14652 | MoveRapid([GX_1,GY_1], [-944.5935,-12.9835]) ⟦EOL⟧
L14653 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14654 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14655 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14656 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14657 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14658 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14659 | MoveRapid([GX_1,GY_1], [-943.6655,-9.8445]) ⟦EOL⟧
L14660 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14661 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14662 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14663 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14664 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14665 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14666 | MoveRapid([GX_1,GY_1], [-944.3985,-8.0125]) ⟦EOL⟧
L14667 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14668 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14669 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14670 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14671 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14672 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14673 | MoveRapid([GX_1,GY_1], [-944.5735,-4.3345]) ⟦EOL⟧
L14674 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14675 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14676 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14677 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14678 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14679 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14680 | MoveRapid([GX_1,GY_1], [-945.3045,-0.9405]) ⟦EOL⟧
L14681 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14682 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14683 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14684 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14685 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14686 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14687 | MoveRapid([GX_1,GY_1], [-945.2505,-0.0725]) ⟦EOL⟧
L14688 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14689–14736
evidence_kind: script_source

L14689 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14690 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14691 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14692 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14693 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14694 | MoveRapid([GX_1,GY_1], [-943.6735,3.5435]) ⟦EOL⟧
L14695 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14696 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14697 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14698 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14699 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14700 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14701 | MoveRapid([GX_1,GY_1], [-943.4845,6.3145]) ⟦EOL⟧
L14702 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14703 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14704 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14705 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14706 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14707 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14708 | MoveRapid([GX_1,GY_1], [-943.4795,8.2995]) ⟦EOL⟧
L14709 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14710 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14711 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14712 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14713 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14714 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14715 | MoveRapid([GX_1,GY_1], [-945.2075,12.2545]) ⟦EOL⟧
L14716 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14717 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14718 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14719 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14720 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14721 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14722 | MoveRapid([GX_1,GY_1], [-945.1275,15.4615]) ⟦EOL⟧
L14723 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14724 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14725 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14726 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14727 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14728 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14729 | MoveRapid([GX_1,GY_1], [-944.8115,17.0955]) ⟦EOL⟧
L14730 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14731 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14732 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14733 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14734 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14735 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14736 | MoveRapid([GX_1,GY_1], [-944.5215,18.9145]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14737–14784
evidence_kind: script_source

L14737 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14738 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14739 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14740 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14741 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14742 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14743 | MoveRapid([GX_1,GY_1], [-943.9195,23.4385]) ⟦EOL⟧
L14744 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14745 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14746 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14747 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14748 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14749 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14750 | MoveRapid([GX_1,GY_1], [-944.1565,25.4925]) ⟦EOL⟧
L14751 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14752 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14753 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14754 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14755 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14756 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14757 | MoveRapid([GX_1,GY_1], [-943.3415,27.9515]) ⟦EOL⟧
L14758 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14759 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14760 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14761 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14762 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14763 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14764 | MoveRapid([GX_1,GY_1], [-944.1135,29.8575]) ⟦EOL⟧
L14765 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14766 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14767 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14768 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14769 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14770 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14771 | MoveRapid([GX_1,GY_1], [-944.2835,33.9845]) ⟦EOL⟧
L14772 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14773 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14774 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14775 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14776 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14777 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14778 | MoveRapid([GX_1,GY_1], [-944.4085,35.8655]) ⟦EOL⟧
L14779 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14780 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14781 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14782 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14783 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14784 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14785–14832
evidence_kind: script_source

L14785 | MoveRapid([GX_1,GY_1], [-943.9025,38.0515]) ⟦EOL⟧
L14786 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14787 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14788 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14789 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14790 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14791 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14792 | MoveRapid([GX_1,GY_1], [-944.8875,42.2735]) ⟦EOL⟧
L14793 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14794 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14795 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14796 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14797 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14798 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14799 | MoveRapid([GX_1,GY_1], [-943.3555,43.5665]) ⟦EOL⟧
L14800 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -945112.5) ⟦EOL⟧
L14801 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14802 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14803 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14804 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14805 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14806 | MoveRapid([GX_1,GY_1], [-947.5745,-27.8775]) ⟦EOL⟧
L14807 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14808 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14809 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14810 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14811 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14812 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14813 | MoveRapid([GX_1,GY_1], [-947.3625,-26.6775]) ⟦EOL⟧
L14814 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14815 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14816 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14817 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14818 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14819 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14820 | MoveRapid([GX_1,GY_1], [-947.0205,-23.8615]) ⟦EOL⟧
L14821 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14822 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14823 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14824 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14825 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14826 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14827 | MoveRapid([GX_1,GY_1], [-946.9615,-20.0195]) ⟦EOL⟧
L14828 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14829 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14830 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14831 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14832 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14833–14880
evidence_kind: script_source

L14833 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14834 | MoveRapid([GX_1,GY_1], [-946.5755,-18.4405]) ⟦EOL⟧
L14835 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14836 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14837 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14838 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14839 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14840 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14841 | MoveRapid([GX_1,GY_1], [-947.8555,-14.9405]) ⟦EOL⟧
L14842 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14843 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14844 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14845 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14846 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14847 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14848 | MoveRapid([GX_1,GY_1], [-947.3315,-12.8995]) ⟦EOL⟧
L14849 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14850 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14851 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14852 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14853 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14854 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14855 | MoveRapid([GX_1,GY_1], [-946.3385,-9.8275]) ⟦EOL⟧
L14856 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14857 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14858 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14859 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14860 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14861 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14862 | MoveRapid([GX_1,GY_1], [-947.1455,-7.9195]) ⟦EOL⟧
L14863 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14864 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14865 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14866 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14867 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14868 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14869 | MoveRapid([GX_1,GY_1], [-947.2995,-4.4075]) ⟦EOL⟧
L14870 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14871 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14872 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14873 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14874 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14875 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14876 | MoveRapid([GX_1,GY_1], [-947.9555,-0.9755]) ⟦EOL⟧
L14877 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14878 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14879 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14880 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14881–14928
evidence_kind: script_source

L14881 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14882 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14883 | MoveRapid([GX_1,GY_1], [-947.9285,-0.0205]) ⟦EOL⟧
L14884 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14885 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14886 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14887 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14888 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14889 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14890 | MoveRapid([GX_1,GY_1], [-946.3235,3.5865]) ⟦EOL⟧
L14891 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14892 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14893 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14894 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14895 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14896 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14897 | MoveRapid([GX_1,GY_1], [-946.2865,6.3455]) ⟦EOL⟧
L14898 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14899 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14900 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14901 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14902 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14903 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14904 | MoveRapid([GX_1,GY_1], [-946.2065,8.4545]) ⟦EOL⟧
L14905 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14906 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14907 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14908 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14909 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14910 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14911 | MoveRapid([GX_1,GY_1], [-947.9325,12.2035]) ⟦EOL⟧
L14912 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14913 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14914 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14915 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14916 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14917 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14918 | MoveRapid([GX_1,GY_1], [-947.7055,15.3965]) ⟦EOL⟧
L14919 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14920 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14921 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14922 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14923 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14924 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14925 | MoveRapid([GX_1,GY_1], [-947.4865,17.0095]) ⟦EOL⟧
L14926 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14927 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14928 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14929–14976
evidence_kind: script_source

L14929 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14930 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14931 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14932 | MoveRapid([GX_1,GY_1], [-947.1545,19.0185]) ⟦EOL⟧
L14933 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14934 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14935 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14936 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14937 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14938 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14939 | MoveRapid([GX_1,GY_1], [-946.6635,23.3465]) ⟦EOL⟧
L14940 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14941 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14942 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14943 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14944 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14945 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14946 | MoveRapid([GX_1,GY_1], [-946.9015,25.5515]) ⟦EOL⟧
L14947 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14948 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14949 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14950 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14951 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14952 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14953 | MoveRapid([GX_1,GY_1], [-946.0025,27.8825]) ⟦EOL⟧
L14954 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14955 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14956 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14957 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14958 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14959 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14960 | MoveRapid([GX_1,GY_1], [-946.7675,29.8935]) ⟦EOL⟧
L14961 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14962 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14963 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14964 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14965 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14966 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14967 | MoveRapid([GX_1,GY_1], [-947.0075,34.0545]) ⟦EOL⟧
L14968 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14969 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14970 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14971 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14972 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14973 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14974 | MoveRapid([GX_1,GY_1], [-947.1395,35.7335]) ⟦EOL⟧
L14975 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14976 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 14977–15024
evidence_kind: script_source

L14977 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14978 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14979 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14980 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14981 | MoveRapid([GX_1,GY_1], [-946.6795,38.0575]) ⟦EOL⟧
L14982 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14983 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14984 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14985 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14986 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14987 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14988 | MoveRapid([GX_1,GY_1], [-947.5625,42.2145]) ⟦EOL⟧
L14989 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14990 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14991 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14992 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L14993 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L14994 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L14995 | MoveRapid([GX_1,GY_1], [-946.1635,43.5475]) ⟦EOL⟧
L14996 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -947812.5) ⟦EOL⟧
L14997 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L14998 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L14999 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15000 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15001 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15002 | MoveRapid([GX_1,GY_1], [-950.2745,-27.8775]) ⟦EOL⟧
L15003 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15004 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15005 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15006 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15007 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15008 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15009 | MoveRapid([GX_1,GY_1], [-950.0705,-26.7355]) ⟦EOL⟧
L15010 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15011 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15012 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15013 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15014 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15015 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15016 | MoveRapid([GX_1,GY_1], [-949.8255,-23.8845]) ⟦EOL⟧
L15017 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15018 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15019 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15020 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15021 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15022 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15023 | MoveRapid([GX_1,GY_1], [-949.6935,-20.0185]) ⟦EOL⟧
L15024 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15025–15072
evidence_kind: script_source

L15025 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15026 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15027 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15028 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15029 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15030 | MoveRapid([GX_1,GY_1], [-949.2585,-18.4885]) ⟦EOL⟧
L15031 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15032 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15033 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15034 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15035 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15036 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15037 | MoveRapid([GX_1,GY_1], [-950.5965,-15.0525]) ⟦EOL⟧
L15038 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15039 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15040 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15041 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15042 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15043 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15044 | MoveRapid([GX_1,GY_1], [-950.0665,-12.7875]) ⟦EOL⟧
L15045 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15046 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15047 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15048 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15049 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15050 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15051 | MoveRapid([GX_1,GY_1], [-949.0385,-9.8365]) ⟦EOL⟧
L15052 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15053 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15054 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15055 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15056 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15057 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15058 | MoveRapid([GX_1,GY_1], [-949.9285,-7.7965]) ⟦EOL⟧
L15059 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15060 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15061 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15062 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15063 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15064 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15065 | MoveRapid([GX_1,GY_1], [-950.0465,-4.4985]) ⟦EOL⟧
L15066 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15067 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15068 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15069 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15070 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15071 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15072 | MoveRapid([GX_1,GY_1], [-950.5665,-1.0385]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15073–15120
evidence_kind: script_source

L15073 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15074 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15075 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15076 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15077 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15078 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15079 | MoveRapid([GX_1,GY_1], [-950.5845,0.0525]) ⟦EOL⟧
L15080 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15081 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15082 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15083 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15084 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15085 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15086 | MoveRapid([GX_1,GY_1], [-949.0055,3.6465]) ⟦EOL⟧
L15087 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15088 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15089 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15090 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15091 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15092 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15093 | MoveRapid([GX_1,GY_1], [-949.1145,6.3785]) ⟦EOL⟧
L15094 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15095 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15096 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15097 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15098 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15099 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15100 | MoveRapid([GX_1,GY_1], [-948.9715,8.6335]) ⟦EOL⟧
L15101 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15102 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15103 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15104 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15105 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15106 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15107 | MoveRapid([GX_1,GY_1], [-950.6575,12.1165]) ⟦EOL⟧
L15108 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15109 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15110 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15111 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15112 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15113 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15114 | MoveRapid([GX_1,GY_1], [-950.2585,15.2985]) ⟦EOL⟧
L15115 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15116 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15117 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15118 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15119 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15120 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15121–15168
evidence_kind: script_source

L15121 | MoveRapid([GX_1,GY_1], [-950.1485,16.8925]) ⟦EOL⟧
L15122 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15123 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15124 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15125 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15126 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15127 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15128 | MoveRapid([GX_1,GY_1], [-949.7705,19.1595]) ⟦EOL⟧
L15129 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15130 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15131 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15132 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15133 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15134 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15135 | MoveRapid([GX_1,GY_1], [-949.4105,23.2315]) ⟦EOL⟧
L15136 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15137 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15138 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15139 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15140 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15141 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15142 | MoveRapid([GX_1,GY_1], [-949.6725,25.6025]) ⟦EOL⟧
L15143 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15144 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15145 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15146 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15147 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15148 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15149 | MoveRapid([GX_1,GY_1], [-948.6725,27.8175]) ⟦EOL⟧
L15150 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15151 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15152 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15153 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15154 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15155 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15156 | MoveRapid([GX_1,GY_1], [-949.3985,29.9625]) ⟦EOL⟧
L15157 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15158 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15159 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15160 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15161 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15162 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15163 | MoveRapid([GX_1,GY_1], [-949.7485,34.1125]) ⟦EOL⟧
L15164 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15165 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15166 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15167 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15168 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15169–15216
evidence_kind: script_source

L15169 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15170 | MoveRapid([GX_1,GY_1], [-949.9045,35.5955]) ⟦EOL⟧
L15171 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15172 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15173 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15174 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15175 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15176 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15177 | MoveRapid([GX_1,GY_1], [-949.4755,38.0545]) ⟦EOL⟧
L15178 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15179 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15180 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15181 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15182 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15183 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15184 | MoveRapid([GX_1,GY_1], [-950.2065,42.1255]) ⟦EOL⟧
L15185 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15186 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15187 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15188 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15189 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15190 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15191 | MoveRapid([GX_1,GY_1], [-949.0195,43.5565]) ⟦EOL⟧
L15192 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -950512.5) ⟦EOL⟧
L15193 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15194 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15195 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15196 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15197 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15198 | MoveRapid([GX_1,GY_1], [-952.9745,-27.8775]) ⟦EOL⟧
L15199 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15200 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15201 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15202 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15203 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15204 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15205 | MoveRapid([GX_1,GY_1], [-952.7785,-26.8135]) ⟦EOL⟧
L15206 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15207 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15208 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15209 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15210 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15211 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15212 | MoveRapid([GX_1,GY_1], [-952.6505,-23.9195]) ⟦EOL⟧
L15213 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15214 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15215 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15216 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15217–15264
evidence_kind: script_source

L15217 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15218 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15219 | MoveRapid([GX_1,GY_1], [-952.4515,-20.0265]) ⟦EOL⟧
L15220 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15221 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15222 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15223 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15224 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15225 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15226 | MoveRapid([GX_1,GY_1], [-951.9555,-18.5535]) ⟦EOL⟧
L15227 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15228 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15229 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15230 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15231 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15232 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15233 | MoveRapid([GX_1,GY_1], [-953.3315,-15.1735]) ⟦EOL⟧
L15234 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15235 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15236 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15237 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15238 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15239 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15240 | MoveRapid([GX_1,GY_1], [-952.7995,-12.6475]) ⟦EOL⟧
L15241 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15242 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15243 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15244 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15245 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15246 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15247 | MoveRapid([GX_1,GY_1], [-951.7655,-9.8725]) ⟦EOL⟧
L15248 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15249 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15250 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15251 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15252 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15253 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15254 | MoveRapid([GX_1,GY_1], [-952.7395,-7.6455]) ⟦EOL⟧
L15255 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15256 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15257 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15258 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15259 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15260 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15261 | MoveRapid([GX_1,GY_1], [-952.8145,-4.6105]) ⟦EOL⟧
L15262 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15263 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15264 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15265–15312
evidence_kind: script_source

L15265 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15266 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15267 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15268 | MoveRapid([GX_1,GY_1], [-953.1415,-1.1335]) ⟦EOL⟧
L15269 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15270 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15271 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15272 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15273 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15274 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15275 | MoveRapid([GX_1,GY_1], [-953.2185,0.1455]) ⟦EOL⟧
L15276 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15277 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15278 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15279 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15280 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15281 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15282 | MoveRapid([GX_1,GY_1], [-951.7185,3.7215]) ⟦EOL⟧
L15283 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15284 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15285 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15286 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15287 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15288 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15289 | MoveRapid([GX_1,GY_1], [-951.9655,6.4095]) ⟦EOL⟧
L15290 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15291 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15292 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15293 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15294 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15295 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15296 | MoveRapid([GX_1,GY_1], [-951.7745,8.8385]) ⟦EOL⟧
L15297 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15298 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15299 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15300 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15301 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15302 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15303 | MoveRapid([GX_1,GY_1], [-953.3845,11.9945]) ⟦EOL⟧
L15304 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15305 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15306 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15307 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15308 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15309 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15310 | MoveRapid([GX_1,GY_1], [-952.7895,15.1685]) ⟦EOL⟧
L15311 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15312 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15313–15360
evidence_kind: script_source

L15313 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15314 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15315 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15316 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15317 | MoveRapid([GX_1,GY_1], [-952.7975,16.7445]) ⟦EOL⟧
L15318 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15319 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15320 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15321 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15322 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15323 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15324 | MoveRapid([GX_1,GY_1], [-952.3665,19.3375]) ⟦EOL⟧
L15325 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15326 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15327 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15328 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15329 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15330 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15331 | MoveRapid([GX_1,GY_1], [-952.1585,23.0995]) ⟦EOL⟧
L15332 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15333 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15334 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15335 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15336 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15337 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15338 | MoveRapid([GX_1,GY_1], [-952.4705,25.6445]) ⟦EOL⟧
L15339 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15340 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15341 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15342 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15343 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15344 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15345 | MoveRapid([GX_1,GY_1], [-951.3485,27.7545]) ⟦EOL⟧
L15346 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15347 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15348 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15349 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15350 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15351 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15352 | MoveRapid([GX_1,GY_1], [-952.0085,30.0645]) ⟦EOL⟧
L15353 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15354 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15355 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15356 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15357 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15358 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15359 | MoveRapid([GX_1,GY_1], [-952.5005,34.1575]) ⟦EOL⟧
L15360 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15361–15408
evidence_kind: script_source

L15361 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15362 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15363 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15364 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15365 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15366 | MoveRapid([GX_1,GY_1], [-952.7065,35.4505]) ⟦EOL⟧
L15367 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15368 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15369 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15370 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15371 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15372 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15373 | MoveRapid([GX_1,GY_1], [-952.2915,38.0415]) ⟦EOL⟧
L15374 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15375 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15376 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15377 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15378 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15379 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15380 | MoveRapid([GX_1,GY_1], [-952.8225,42.0085]) ⟦EOL⟧
L15381 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15382 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15383 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15384 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15385 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15386 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15387 | MoveRapid([GX_1,GY_1], [-951.9235,43.5935]) ⟦EOL⟧
L15388 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -953212.5) ⟦EOL⟧
L15389 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15390 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15391 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15392 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15393 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15394 | MoveRapid([GX_1,GY_1], [-955.6745,-27.8775]) ⟦EOL⟧
L15395 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15396 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15397 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15398 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15399 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15400 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15401 | MoveRapid([GX_1,GY_1], [-955.4825,-26.9105]) ⟦EOL⟧
L15402 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15403 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15404 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15405 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15406 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15407 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15408 | MoveRapid([GX_1,GY_1], [-955.4975,-23.9675]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15409–15456
evidence_kind: script_source

L15409 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15410 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15411 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15412 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15413 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15414 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15415 | MoveRapid([GX_1,GY_1], [-955.2385,-20.0395]) ⟦EOL⟧
L15416 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15417 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15418 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15419 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15420 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15421 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15422 | MoveRapid([GX_1,GY_1], [-954.6665,-18.6345]) ⟦EOL⟧
L15423 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15424 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15425 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15426 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15427 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15428 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15429 | MoveRapid([GX_1,GY_1], [-956.0635,-15.3035]) ⟦EOL⟧
L15430 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15431 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15432 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15433 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15434 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15435 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15436 | MoveRapid([GX_1,GY_1], [-955.5295,-12.4805]) ⟦EOL⟧
L15437 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15438 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15439 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15440 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15441 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15442 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15443 | MoveRapid([GX_1,GY_1], [-954.5205,-9.9365]) ⟦EOL⟧
L15444 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15445 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15446 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15447 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15448 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15449 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15450 | MoveRapid([GX_1,GY_1], [-955.5845,-7.4645]) ⟦EOL⟧
L15451 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15452 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15453 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15454 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15455 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15456 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15457–15504
evidence_kind: script_source

L15457 | MoveRapid([GX_1,GY_1], [-955.6035,-4.7415]) ⟦EOL⟧
L15458 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15459 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15460 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15461 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15462 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15463 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15464 | MoveRapid([GX_1,GY_1], [-955.6755,-1.2565]) ⟦EOL⟧
L15465 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15466 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15467 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15468 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15469 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15470 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15471 | MoveRapid([GX_1,GY_1], [-955.8285,0.2555]) ⟦EOL⟧
L15472 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15473 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15474 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15475 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15476 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15477 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15478 | MoveRapid([GX_1,GY_1], [-954.4655,3.8155]) ⟦EOL⟧
L15479 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15480 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15481 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15482 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15483 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15484 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15485 | MoveRapid([GX_1,GY_1], [-954.8415,6.4415]) ⟦EOL⟧
L15486 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15487 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15488 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15489 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15490 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15491 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15492 | MoveRapid([GX_1,GY_1], [-954.6175,9.0665]) ⟦EOL⟧
L15493 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15494 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15495 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15496 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15497 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15498 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15499 | MoveRapid([GX_1,GY_1], [-956.1135,11.8375]) ⟦EOL⟧
L15500 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15501 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15502 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15503 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15504 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15505–15552
evidence_kind: script_source

L15505 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15506 | MoveRapid([GX_1,GY_1], [-955.2955,15.0065]) ⟦EOL⟧
L15507 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15508 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15509 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15510 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15511 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15512 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15513 | MoveRapid([GX_1,GY_1], [-955.4345,16.5655]) ⟦EOL⟧
L15514 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15515 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15516 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15517 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15518 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15519 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15520 | MoveRapid([GX_1,GY_1], [-954.9455,19.5525]) ⟦EOL⟧
L15521 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15522 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15523 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15524 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15525 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15526 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15527 | MoveRapid([GX_1,GY_1], [-954.9055,22.9455]) ⟦EOL⟧
L15528 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15529 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15530 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15531 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15532 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15533 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15534 | MoveRapid([GX_1,GY_1], [-955.2945,25.6775]) ⟦EOL⟧
L15535 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15536 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15537 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15538 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15539 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15540 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15541 | MoveRapid([GX_1,GY_1], [-954.0345,27.6965]) ⟦EOL⟧
L15542 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15543 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15544 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15545 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15546 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15547 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15548 | MoveRapid([GX_1,GY_1], [-954.5945,30.2005]) ⟦EOL⟧
L15549 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15550 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15551 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15552 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15553–15600
evidence_kind: script_source

L15553 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15554 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15555 | MoveRapid([GX_1,GY_1], [-955.2675,34.1905]) ⟦EOL⟧
L15556 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15557 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15558 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15559 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15560 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15561 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15562 | MoveRapid([GX_1,GY_1], [-955.5425,35.2975]) ⟦EOL⟧
L15563 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15564 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15565 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15566 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15567 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15568 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15569 | MoveRapid([GX_1,GY_1], [-955.1275,38.0205]) ⟦EOL⟧
L15570 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15571 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15572 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15573 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15574 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15575 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15576 | MoveRapid([GX_1,GY_1], [-955.4075,41.8615]) ⟦EOL⟧
L15577 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15578 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15579 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15580 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15581 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15582 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15583 | MoveRapid([GX_1,GY_1], [-954.8765,43.6555]) ⟦EOL⟧
L15584 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -955912.5) ⟦EOL⟧
L15585 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15586 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15587 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15588 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15589 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15590 | MoveRapid([GX_1,GY_1], [-958.3745,-27.8775]) ⟦EOL⟧
L15591 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15592 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15593 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15594 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15595 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15596 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15597 | MoveRapid([GX_1,GY_1], [-958.1855,-27.0265]) ⟦EOL⟧
L15598 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15599 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15600 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15601–15648
evidence_kind: script_source

L15601 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15602 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15603 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15604 | MoveRapid([GX_1,GY_1], [-958.3655,-24.0275]) ⟦EOL⟧
L15605 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15606 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15607 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15608 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15609 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15610 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15611 | MoveRapid([GX_1,GY_1], [-958.0525,-20.0605]) ⟦EOL⟧
L15612 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15613 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15614 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15615 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15616 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15617 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15618 | MoveRapid([GX_1,GY_1], [-957.3885,-18.7325]) ⟦EOL⟧
L15619 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15620 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15621 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15622 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15623 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15624 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15625 | MoveRapid([GX_1,GY_1], [-958.7885,-15.4405]) ⟦EOL⟧
L15626 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15627 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15628 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15629 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15630 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15631 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15632 | MoveRapid([GX_1,GY_1], [-958.2575,-12.2875]) ⟦EOL⟧
L15633 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15634 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15635 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15636 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15637 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15638 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15639 | MoveRapid([GX_1,GY_1], [-957.3025,-10.0285]) ⟦EOL⟧
L15640 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15641 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15642 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15643 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15644 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15645 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15646 | MoveRapid([GX_1,GY_1], [-958.4595,-7.2535]) ⟦EOL⟧
L15647 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15648 | MoveDelay([GX_1], 0.8) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15649–15696
evidence_kind: script_source

L15649 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15650 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15651 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15652 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15653 | MoveRapid([GX_1,GY_1], [-958.4135,-4.8915]) ⟦EOL⟧
L15654 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15655 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15656 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15657 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15658 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15659 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15660 | MoveRapid([GX_1,GY_1], [-958.1725,-1.4105]) ⟦EOL⟧
L15661 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15662 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15663 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15664 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15665 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15666 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15667 | MoveRapid([GX_1,GY_1], [-958.4165,0.3875]) ⟦EOL⟧
L15668 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15669 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15670 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15671 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15672 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15673 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15674 | MoveRapid([GX_1,GY_1], [-957.2435,3.9255]) ⟦EOL⟧
L15675 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15676 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15677 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15678 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15679 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15680 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15681 | MoveRapid([GX_1,GY_1], [-957.7405,6.4715]) ⟦EOL⟧
L15682 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15683 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15684 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15685 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15686 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15687 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15688 | MoveRapid([GX_1,GY_1], [-957.4975,9.3195]) ⟦EOL⟧
L15689 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15690 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15691 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15692 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15693 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15694 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15695 | MoveRapid([GX_1,GY_1], [-958.8445,11.6445]) ⟦EOL⟧
L15696 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15697–15744
evidence_kind: script_source

L15697 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15698 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15699 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15700 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15701 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15702 | MoveRapid([GX_1,GY_1], [-957.7795,14.8115]) ⟦EOL⟧
L15703 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15704 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15705 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15706 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15707 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15708 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15709 | MoveRapid([GX_1,GY_1], [-958.0585,16.3535]) ⟦EOL⟧
L15710 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15711 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15712 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15713 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15714 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15715 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15716 | MoveRapid([GX_1,GY_1], [-957.5055,19.8055]) ⟦EOL⟧
L15717 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15718 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15719 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15720 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15721 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15722 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15723 | MoveRapid([GX_1,GY_1], [-957.6565,22.7715]) ⟦EOL⟧
L15724 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15725 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15726 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15727 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15728 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15729 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15730 | MoveRapid([GX_1,GY_1], [-958.1465,25.6995]) ⟦EOL⟧
L15731 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15732 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15733 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15734 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15735 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15736 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15737 | MoveRapid([GX_1,GY_1], [-956.7275,27.6395]) ⟦EOL⟧
L15738 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15739 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15740 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15741 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15742 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15743 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15744 | MoveRapid([GX_1,GY_1], [-957.1575,30.3695]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15745–15792
evidence_kind: script_source

L15745 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15746 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15747 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15748 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15749 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15750 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15751 | MoveRapid([GX_1,GY_1], [-958.0485,34.2085]) ⟦EOL⟧
L15752 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15753 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15754 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15755 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15756 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15757 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15758 | MoveRapid([GX_1,GY_1], [-958.4175,35.1385]) ⟦EOL⟧
L15759 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15760 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15761 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15762 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15763 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15764 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15765 | MoveRapid([GX_1,GY_1], [-957.9855,37.9905]) ⟦EOL⟧
L15766 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15767 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15768 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15769 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15770 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15771 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15772 | MoveRapid([GX_1,GY_1], [-957.9635,41.6865]) ⟦EOL⟧
L15773 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15774 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15775 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15776 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15777 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15778 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15779 | MoveRapid([GX_1,GY_1], [-957.8775,43.7475]) ⟦EOL⟧
L15780 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -958612.5) ⟦EOL⟧
L15781 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15782 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15783 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15784 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15785 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15786 | MoveRapid([GX_1,GY_1], [-961.0745,-27.8775]) ⟦EOL⟧
L15787 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15788 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15789 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15790 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15791 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15792 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15793–15840
evidence_kind: script_source

L15793 | MoveRapid([GX_1,GY_1], [-960.8865,-27.1625]) ⟦EOL⟧
L15794 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15795 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15796 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15797 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15798 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15799 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15800 | MoveRapid([GX_1,GY_1], [-961.2545,-24.0995]) ⟦EOL⟧
L15801 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15802 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15803 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15804 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15805 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15806 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15807 | MoveRapid([GX_1,GY_1], [-960.8945,-20.0865]) ⟦EOL⟧
L15808 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15809 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15810 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15811 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15812 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15813 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15814 | MoveRapid([GX_1,GY_1], [-960.1255,-18.8435]) ⟦EOL⟧
L15815 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15816 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15817 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15818 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15819 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15820 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15821 | MoveRapid([GX_1,GY_1], [-961.5115,-15.5875]) ⟦EOL⟧
L15822 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15823 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15824 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15825 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15826 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15827 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15828 | MoveRapid([GX_1,GY_1], [-960.9825,-12.0655]) ⟦EOL⟧
L15829 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15830 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15831 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15832 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15833 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15834 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15835 | MoveRapid([GX_1,GY_1], [-960.1105,-10.1455]) ⟦EOL⟧
L15836 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15837 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15838 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15839 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15840 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15841–15888
evidence_kind: script_source

L15841 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15842 | MoveRapid([GX_1,GY_1], [-961.3665,-7.0125]) ⟦EOL⟧
L15843 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15844 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15845 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15846 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15847 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15848 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15849 | MoveRapid([GX_1,GY_1], [-961.2435,-5.0615]) ⟦EOL⟧
L15850 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15851 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15852 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15853 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15854 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15855 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15856 | MoveRapid([GX_1,GY_1], [-960.6305,-1.5945]) ⟦EOL⟧
L15857 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15858 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15859 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15860 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15861 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15862 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15863 | MoveRapid([GX_1,GY_1], [-960.9815,0.5385]) ⟦EOL⟧
L15864 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15865 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15866 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15867 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15868 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15869 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15870 | MoveRapid([GX_1,GY_1], [-960.0525,4.0525]) ⟦EOL⟧
L15871 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15872 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15873 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15874 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15875 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15876 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15877 | MoveRapid([GX_1,GY_1], [-960.6645,6.5045]) ⟦EOL⟧
L15878 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15879 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15880 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15881 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15882 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15883 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15884 | MoveRapid([GX_1,GY_1], [-960.4175,9.5965]) ⟦EOL⟧
L15885 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15886 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15887 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15888 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15889–15936
evidence_kind: script_source

L15889 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15890 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15891 | MoveRapid([GX_1,GY_1], [-961.5775,11.4165]) ⟦EOL⟧
L15892 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15893 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15894 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15895 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15896 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15897 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15898 | MoveRapid([GX_1,GY_1], [-960.2395,14.5835]) ⟦EOL⟧
L15899 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15900 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15901 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15902 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15903 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15904 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15905 | MoveRapid([GX_1,GY_1], [-960.6675,16.1135]) ⟦EOL⟧
L15906 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15907 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15908 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15909 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15910 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15911 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15912 | MoveRapid([GX_1,GY_1], [-960.0475,20.0955]) ⟦EOL⟧
L15913 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15914 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15915 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15916 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15917 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15918 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15919 | MoveRapid([GX_1,GY_1], [-960.4085,22.5785]) ⟦EOL⟧
L15920 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15921 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15922 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15923 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15924 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15925 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15926 | MoveRapid([GX_1,GY_1], [-961.0225,25.7145]) ⟦EOL⟧
L15927 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15928 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15929 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15930 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15931 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15932 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15933 | MoveRapid([GX_1,GY_1], [-959.4265,27.5875]) ⟦EOL⟧
L15934 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15935 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15936 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15937–15984
evidence_kind: script_source

L15937 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15938 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15939 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15940 | MoveRapid([GX_1,GY_1], [-959.6985,30.5725]) ⟦EOL⟧
L15941 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15942 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15943 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15944 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15945 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15946 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15947 | MoveRapid([GX_1,GY_1], [-960.8435,34.2155]) ⟦EOL⟧
L15948 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15949 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15950 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15951 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15952 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15953 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15954 | MoveRapid([GX_1,GY_1], [-961.3245,34.9725]) ⟦EOL⟧
L15955 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15956 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15957 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15958 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15959 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15960 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15961 | MoveRapid([GX_1,GY_1], [-960.8625,37.9505]) ⟦EOL⟧
L15962 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15963 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15964 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15965 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15966 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15967 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15968 | MoveRapid([GX_1,GY_1], [-960.4885,41.4805]) ⟦EOL⟧
L15969 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15970 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15971 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15972 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15973 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15974 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15975 | MoveRapid([GX_1,GY_1], [-960.9285,43.8655]) ⟦EOL⟧
L15976 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -961312.5) ⟦EOL⟧
L15977 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15978 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15979 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15980 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15981 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15982 | MoveRapid([GX_1,GY_1], [-963.5595,-27.9535]) ⟦EOL⟧
L15983 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L15984 | MoveRapid([GX_1,GY_1], [-963.5855,-27.3175]) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 15985–16032
evidence_kind: script_source

L15985 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L15986 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15987 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15988 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15989 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15990 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15991 | MoveRapid([GX_1,GY_1], [-964.1645,-24.1845]) ⟦EOL⟧
L15992 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L15993 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L15994 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L15995 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L15996 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L15997 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L15998 | MoveRapid([GX_1,GY_1], [-963.7635,-20.1185]) ⟦EOL⟧
L15999 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16000 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16001 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16002 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16003 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16004 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16005 | MoveRapid([GX_1,GY_1], [-962.8765,-18.9735]) ⟦EOL⟧
L16006 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16007 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16008 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16009 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16010 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16011 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16012 | MoveRapid([GX_1,GY_1], [-964.2285,-15.7425]) ⟦EOL⟧
L16013 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16014 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16015 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16016 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16017 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16018 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16019 | MoveRapid([GX_1,GY_1], [-963.7055,-11.8175]) ⟦EOL⟧
L16020 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16021 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16022 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16023 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16024 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16025 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16026 | MoveRapid([GX_1,GY_1], [-962.9475,-10.2915]) ⟦EOL⟧
L16027 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16028 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16029 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16030 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16031 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16032 | MoveDelay([GX_1], 0.2) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 16033–16080
evidence_kind: script_source

L16033 | MoveRapid([GX_1,GY_1], [-964.3055,-6.7415]) ⟦EOL⟧
L16034 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16035 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16036 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16037 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16038 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16039 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16040 | MoveRapid([GX_1,GY_1], [-964.0935,-5.2515]) ⟦EOL⟧
L16041 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16042 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16043 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16044 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16045 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16046 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16047 | MoveRapid([GX_1,GY_1], [-963.0505,-1.8075]) ⟦EOL⟧
L16048 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16049 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16050 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16051 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16052 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16053 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16054 | MoveRapid([GX_1,GY_1], [-963.5255,0.7085]) ⟦EOL⟧
L16055 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16056 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16057 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16058 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16059 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16060 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16061 | MoveRapid([GX_1,GY_1], [-962.8945,4.1975]) ⟦EOL⟧
L16062 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16063 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16064 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16065 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16066 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16067 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16068 | MoveRapid([GX_1,GY_1], [-963.6125,6.5345]) ⟦EOL⟧
L16069 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16070 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16071 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16072 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16073 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16074 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16075 | MoveRapid([GX_1,GY_1], [-963.3755,9.8975]) ⟦EOL⟧
L16076 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16077 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16078 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16079 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16080 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 16081–16128
evidence_kind: script_source

L16081 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16082 | MoveRapid([GX_1,GY_1], [-964.3115,11.1535]) ⟦EOL⟧
L16083 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16084 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16085 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16086 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16087 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16088 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16089 | MoveRapid([GX_1,GY_1], [-962.6775,14.3235]) ⟦EOL⟧
L16090 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16091 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16092 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16093 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16094 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16095 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16096 | MoveRapid([GX_1,GY_1], [-963.2665,15.8405]) ⟦EOL⟧
L16097 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16098 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16099 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16100 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16101 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16102 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16103 | MoveRapid([GX_1,GY_1], [-962.5715,20.4215]) ⟦EOL⟧
L16104 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16105 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16106 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16107 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16108 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16109 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16110 | MoveRapid([GX_1,GY_1], [-963.1615,22.3645]) ⟦EOL⟧
L16111 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16112 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16113 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16114 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16115 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16116 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16117 | MoveRapid([GX_1,GY_1], [-963.9245,25.7185]) ⟦EOL⟧
L16118 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16119 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16120 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16121 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16122 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16123 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16124 | MoveRapid([GX_1,GY_1], [-962.1345,27.5385]) ⟦EOL⟧
L16125 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16126 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16127 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16128 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 16129–16176
evidence_kind: script_source

L16129 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16130 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16131 | MoveRapid([GX_1,GY_1], [-962.2175,30.8085]) ⟦EOL⟧
L16132 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16133 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16134 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16135 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16136 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16137 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16138 | MoveRapid([GX_1,GY_1], [-963.6515,34.2095]) ⟦EOL⟧
L16139 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16140 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16141 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16142 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16143 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16144 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16145 | MoveRapid([GX_1,GY_1], [-964.2695,34.7985]) ⟦EOL⟧
L16146 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16147 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16148 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16149 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16150 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16151 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16152 | MoveRapid([GX_1,GY_1], [-963.7605,37.9015]) ⟦EOL⟧
L16153 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16154 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16155 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16156 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16157 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16158 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16159 | MoveRapid([GX_1,GY_1], [-962.9845,41.2465]) ⟦EOL⟧
L16160 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16161 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16162 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16163 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16164 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16165 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16166 | MoveRapid([GX_1,GY_1], [-964.0285,44.0105]) ⟦EOL⟧
L16167 | wait(StatusGetAxisItem(GX_1, AxisStatusItem.AuxiliaryFeedback) <= -964012.5) ⟦EOL⟧
L16168 | MoveDelay([GX_1], 0.8) ⟦EOL⟧
L16169 | GalvoLaserOutput(GX_1,GalvoLaser.On) ⟦EOL⟧
L16170 | MoveDelay([GX_1,GY_1], 0.01) ⟦EOL⟧
L16171 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16172 | MoveDelay([GX_1], 0.2) ⟦EOL⟧
L16173 | MoveDelay([GX_1,GY_1], 0.001) ⟦EOL⟧
L16174 | GalvoLaserOutput(GX_1,GalvoLaser.Off) ⟦EOL⟧
L16175 | GalvoEncoderScaleFactorSet(GX_1, 0) ⟦EOL⟧
L16176 | GalvoEncoderScaleFactorSet(GX_1, 0) ⟦EOL⟧

## PROCESS_H01.ascript

source_repository: https://github.com/kjuws10-rgb/A3Drilling.git
source_commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
source_path: Data/Script/ManualMOF/Buffered/20261111_132938_test0929/PROCESS_H01.ascript
source_sha256: 799e54efa3e910b390ca0fa23015d92038b57bf3358a43312b7b6c2b78bcfbf6
source_lines: 16177–16179
evidence_kind: script_source

L16177 | GalvoEncoderScaleFactorSet(GY_1, 0) ⟦EOL⟧
L16178 | MoveRapid([GX_1,GY_1], [0,0]) ⟦EOL⟧
L16179 | CommandQueueStop() ⟦EOL⟧
