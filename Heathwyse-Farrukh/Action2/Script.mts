
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("Address Book").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").Dialog("Address Book").WinList("Address Book").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").Dialog("Address Book").WinList("Address Book").Select "Physicians"
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").Dialog("Address Book").WinButton("Select").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Address Book | Physicians").WinListView("Address Book | Physicians").Select "Akhtar, Syed"
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Address Book | Physicians").WinListView("Address Book | Physicians").Check CheckPoint("Address Book | Physicians")
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Address Book | Physicians").WinButton("DONE").Click

