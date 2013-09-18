Dim opt
opt= DataTable("Options", dtLocalSheet)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("Schedule").Click @@ hightlight id_;_12715796_;_script infofile_;_ZIP::ssf38.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("SysListView32_3").Select " Visit" @@ hightlight id_;_722974_;_script infofile_;_ZIP::ssf71.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Edit").Click

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Edit Appointment").WinComboBox("Type").Select DataTable("Type", dtLocalSheet)

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Edit Appointment").WinListView("Est.Duration (minutes)").SetItemState DataTable("Duration", dtLocalSheet), micChecked @@ hightlight id_;_2557574_;_script infofile_;_ZIP::ssf72.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Edit Appointment").WinSpin("msctls_updown32").Set DataTable("Minutes", dtLocalSheet) @@ hightlight id_;_1378312_;_script infofile_;_ZIP::ssf73.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Edit Appointment").WinButton("OK").Click @@ hightlight id_;_3081412_;_script infofile_;_ZIP::ssf76.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinListView("SysListView32_3").Select " Visit" @@ hightlight id_;_722974_;_script infofile_;_ZIP::ssf71.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("D/C Appt").Click @@ hightlight id_;_3803510_;_script infofile_;_ZIP::ssf46.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Cancel Appointment").WinComboBox("ComboBox").Select DataTable("Reason", dtLocalSheet) @@ hightlight id_;_14551100_;_script infofile_;_ZIP::ssf47.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("Cancel Appointment").WinButton("OK").Click @@ hightlight id_;_5572474_;_script infofile_;_ZIP::ssf48.xml_;_
For opt=1 to 7
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinComboBox("ComboBox").Select opt @@ hightlight id_;_11076862_;_script infofile_;_ZIP::ssf49.xml_;_
Next


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Next >").Click @@ hightlight id_;_21824540_;_script infofile_;_ZIP::ssf53.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Next >").Click @@ hightlight id_;_21824540_;_script infofile_;_ZIP::ssf54.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Next >").Click @@ hightlight id_;_21824540_;_script infofile_;_ZIP::ssf55.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Next >").Click @@ hightlight id_;_21824540_;_script infofile_;_ZIP::ssf56.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("< Prev").Click @@ hightlight id_;_14157250_;_script infofile_;_ZIP::ssf57.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("< Prev").Click @@ hightlight id_;_14157250_;_script infofile_;_ZIP::ssf58.xml_;_

 @@ hightlight id_;_6358950_;_script infofile_;_ZIP::ssf59.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("At A Glance").Click @@ hightlight id_;_6031380_;_script infofile_;_ZIP::ssf65.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("At A Glance").WinListView("At A Glance").Select "Braswell, Ralph  (3/12/13)" @@ hightlight id_;_15009452_;_script infofile_;_ZIP::ssf66.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("At A Glance").WinListView("At A Glance").DragItem "Broussard, Wilson  (7/31/12)", micRightBtn @@ hightlight id_;_15009452_;_script infofile_;_ZIP::ssf67.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("At A Glance").WinListView("At A Glance").DropOnItem "Brown, Preston  (2/23/13)", micRightBtn @@ hightlight id_;_15009452_;_script infofile_;_ZIP::ssf68.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").Dialog("At A Glance").WinButton("DONE").Click @@ hightlight id_;_3539964_;_script infofile_;_ZIP::ssf69.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Patient(s) for Pope, Tabitha,").WinButton("Clinical Desktop").Click @@ hightlight id_;_5114290_;_script infofile_;_ZIP::ssf70.xml_;_