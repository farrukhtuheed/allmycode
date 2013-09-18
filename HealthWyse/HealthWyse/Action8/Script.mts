Dim Activity, AmountCounter
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("DAR").Click @@ hightlight id_;_526496_;_script infofile_;_ZIP::ssf18.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinButton("Add").Click @@ hightlight id_;_526478_;_script infofile_;_ZIP::ssf19.xml_;_

For Activity=0 to 5
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinComboBox("ComboBox").Select Activity @@ hightlight id_;_592046_;_script infofile_;_ZIP::ssf20.xml_;_
Next



Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinCheckBox("Start at your home").Set "ON"
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinCheckBox("Return to your home").Set "ON"


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinCalendar("Activity Time (hrs:min)").SetTime DataTable("Time", dtLocalSheet) @@ hightlight id_;_395484_;_script infofile_;_ZIP::ssf29.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinCalendar("Travel Time (hrs:min)").SetTime DataTable("Time", dtLocalSheet) @@ hightlight id_;_395454_;_script infofile_;_ZIP::ssf30.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_3").Next @@ hightlight id_;_526514_;_script infofile_;_ZIP::ssf37.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_3").Next @@ hightlight id_;_526514_;_script infofile_;_ZIP::ssf38.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_3").Next @@ hightlight id_;_526514_;_script infofile_;_ZIP::ssf39.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_3").Next @@ hightlight id_;_526514_;_script infofile_;_ZIP::ssf40.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_4").Next @@ hightlight id_;_264408_;_script infofile_;_ZIP::ssf41.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_4").Next @@ hightlight id_;_264408_;_script infofile_;_ZIP::ssf42.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_4").Next @@ hightlight id_;_264408_;_script infofile_;_ZIP::ssf43.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_4").Next @@ hightlight id_;_264408_;_script infofile_;_ZIP::ssf44.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_4").Next @@ hightlight id_;_264408_;_script infofile_;_ZIP::ssf45.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_5").Next @@ hightlight id_;_526512_;_script infofile_;_ZIP::ssf46.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_5").Next @@ hightlight id_;_526512_;_script infofile_;_ZIP::ssf47.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_5").Next @@ hightlight id_;_526512_;_script infofile_;_ZIP::ssf48.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinSpin("msctls_updown32_5").Next @@ hightlight id_;_526512_;_script infofile_;_ZIP::ssf49.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").Static("Static").Click
AmountCounter=DataTable("Amount", dtLocalSheet)
For AmountCounter=0 to 2
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").Dialog("#32770").Click AmountCounter
Next

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Add DAR Activity").WinButton("OK").Click @@ hightlight id_;_264394_;_script infofile_;_ZIP::ssf53.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinListView("SysListView32").Select DataTable("Apt_Number", dtLocalSheet) @@ hightlight id_;_592036_;_script infofile_;_ZIP::ssf54.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinButton("Edit").Click @@ hightlight id_;_526480_;_script infofile_;_ZIP::ssf55.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Edit DAR Activity").WinButton("Comments").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Edit DAR Activity").Dialog("Notes").WinEditor("Notes").Type DataTable("Comments", dtLocalSheet) @@ hightlight id_;_329952_;_script infofile_;_ZIP::ssf57.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Edit DAR Activity").Dialog("Notes").WinButton("OK").Click @@ hightlight id_;_329502_;_script infofile_;_ZIP::ssf58.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Edit DAR Activity").WinButton("OK").Click @@ hightlight id_;_329490_;_script infofile_;_ZIP::ssf59.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinButton("Submit").Click @@ hightlight id_;_526482_;_script infofile_;_ZIP::ssf61.xml_;_


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Submit Timesheet").WinEditor("Enter additional Notes,").Type DataTable("Comments", dtLocalSheet) @@ hightlight id_;_723106_;_script infofile_;_ZIP::ssf65.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("Submit Timesheet").WinButton("Proceed").Click @@ hightlight id_;_788620_;_script infofile_;_ZIP::ssf66.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinButton("My Sched").Click @@ hightlight id_;_526486_;_script infofile_;_ZIP::ssf67.xml_;_

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Sun").Select DataTable("Sunday", dtLocalSheet) @@ hightlight id_;_788654_;_script infofile_;_ZIP::ssf68.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Mon").Select DataTable("Monday", dtLocalSheet) @@ hightlight id_;_788642_;_script infofile_;_ZIP::ssf69.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Tue").Select DataTable("Tuesday", dtLocalSheet) @@ hightlight id_;_788640_;_script infofile_;_ZIP::ssf70.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Wed").Select DataTable("Wednesday", dtLocalSheet) @@ hightlight id_;_788472_;_script infofile_;_ZIP::ssf71.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Thu").Select DataTable("Thursday", dtLocalSheet) @@ hightlight id_;_592090_;_script infofile_;_ZIP::ssf72.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Fri").Select DataTable("Friday", dtLocalSheet) @@ hightlight id_;_984958_;_script infofile_;_ZIP::ssf73.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinComboBox("Sat").Select DataTable("Saturday", dtLocalSheet) @@ hightlight id_;_592058_;_script infofile_;_ZIP::ssf74.xml_;_



Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32").Next @@ hightlight id_;_2820054_;_script infofile_;_ZIP::ssf91.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32").Next @@ hightlight id_;_2820054_;_script infofile_;_ZIP::ssf92.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32_2").Prev @@ hightlight id_;_10291358_;_script infofile_;_ZIP::ssf95.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32_2").Prev @@ hightlight id_;_10291358_;_script infofile_;_ZIP::ssf96.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32_2").Next @@ hightlight id_;_10291358_;_script infofile_;_ZIP::ssf97.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinSpin("msctls_updown32_2").Next @@ hightlight id_;_10291358_;_script infofile_;_ZIP::ssf98.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").Dialog("My Schedule").WinButton("DONE").Click @@ hightlight id_;_1771842_;_script infofile_;_ZIP::ssf99.xml_;_
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Timesheet (DAR)").WinButton("Clinical Desktop").Click @@ hightlight id_;_722898_;_script infofile_;_ZIP::ssf80.xml_;_