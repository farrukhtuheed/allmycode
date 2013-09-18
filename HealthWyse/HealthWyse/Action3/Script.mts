Dim alp, typ
alp= DataTable("Alphabets", dtLocalSheet)
typ= DataTable("Type", dtLocalSheet)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("Patients").Click @@ hightlight id_;_2032702_;_script infofile_;_ZIP::ssf2.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Activate @@ hightlight id_;_1902604_;_script infofile_;_ZIP::ssf3.xml_;_
Window("User: Tabitha Pope, RN").Activate @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf5.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("SysListView32").Select DataTable("List", dtLocalSheet) @@ hightlight id_;_1967184_;_script infofile_;_ZIP::ssf7.xml_;_

'For alp=1 to 25
'Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("WinListView").Select alp
'Next
'
For typ=0 to 2
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinComboBox("ComboBox").Select typ @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf12.xml_;_
For alp=0 to 25
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("WinListView").Select alp
wait(1)
next 
Next

Window("User: Tabitha Pope, RN").Activate
DbTable("DbTable_3").Check CheckPoint("DbTable_3")
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Check CheckPoint("Patient(s) for Pope, Tabitha,") @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf14.xml_;_
Window("User: Tabitha Pope, RN").Activate @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf15.xml_;_
 @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf16.xml_;_
'
'For alp=1 to 25
'Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("WinListView").Select alp @@ hightlight id_;_1509408_;_script infofile_;_ZIP::ssf18.xml_;_
'Next

Window("User: Tabitha Pope, RN").Activate @@ hightlight id_;_2884620_;_script infofile_;_ZIP::ssf21.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Clinical Desktop").Click