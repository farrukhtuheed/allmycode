Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("Patients").Click @@ hightlight id_;_788542_;_script infofile_;_ZIP::ssf3.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Activate @@ hightlight id_;_3606536_;_script infofile_;_ZIP::ssf4.xml_;_
Window("User: Tabitha Pope, RN").Activate @@ hightlight id_;_2754554_;_script infofile_;_ZIP::ssf6.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("SysListView32").Select DataTable("Options", dtLocalSheet) @@ hightlight id_;_3933472_;_script infofile_;_ZIP::ssf7.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("New Pt").Click @@ hightlight id_;_7013732_;_script infofile_;_ZIP::ssf8.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Basic Patient Info").WinEdit("Lastname").Set DataTable("LastName", dtLocalSheet) @@ hightlight id_;_1378392_;_script infofile_;_ZIP::ssf9.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Basic Patient Info").WinEdit("Firstname").Set DataTable("FirstName", dtLocalSheet) @@ hightlight id_;_1050700_;_script infofile_;_ZIP::ssf10.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Basic Patient Info").WinComboBox("Type").Select DataTable("Type", dtLocalSheet) @@ hightlight id_;_3671060_;_script infofile_;_ZIP::ssf11.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Basic Patient Info").WinButton("OK").Click @@ hightlight id_;_1312854_;_script infofile_;_ZIP::ssf12.xml_;_
Window("User: Tabitha Pope, RN").Activate @@ hightlight id_;_2754554_;_script infofile_;_ZIP::ssf13.xml_;_
'Window("User: Tabitha Pope, RN").Activate
'Window("User: Tabitha Pope, RN").Activate
'Window("User: Tabitha Pope, RN").Activate
'Window("User: Tabitha Pope, RN").Activate
'Window("User: Tabitha Pope, RN").Activate
Window("User: Tabitha Pope, RN").Dialog("#32770").WinListView("SysListView32_2").Select DataTable("P_Chart", dtLocalSheet) @@ hightlight id_;_1575972_;_script infofile_;_ZIP::ssf30.xml_;_

'Window("User: Tabitha Pope, RN").Dialog("#32770").WinTreeView("Patient Chart").Select "Medications", micLeftBtn, 0

'Window("User: Tabitha Pope, RN").Dialog("#32770").WinTreeView("Patient Chart").DblClick 100, 100, micLeftBtn
'window("User: Tabitha Pope, RN").Dialog("#32770").WinTreeView("Patient Chart").MouseMove 0,0

'Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Tracking: Sher, Ali").WinButton("Patient Chart").Click @@ hightlight id_;_6030556_;_script infofile_;_ZIP::ssf90.xml_;_
wait(2)
Window("User: Tabitha Pope, RN").Dialog("#32770").WinButton("Clinical Desktop_2").Click @@ hightlight id_;_4720770_;_script infofile_;_ZIP::ssf91.xml_;_