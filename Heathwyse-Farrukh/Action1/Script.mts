
InvokeApplication("C:\HealthWyse\PalmWyse\BIN\PalmWyseStartup.exe -s 800x600")


Window("MobileWyse v10.21.00 (1339-959").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinEdit("Edit").Set DataTable("A", dtGlobalSheet)
var_Exist = Window("MobileWyse v10.21.00 (1339-959").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinButton("LOGIN").Exist

Window("MobileWyse v10.21.00 (1339-959").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinButton("LOGIN").Click


Window("MobileWyse v10.21.00 (1339-959").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").Dialog("Verify HW Login").WinButton("YES").Click
wait(15)






