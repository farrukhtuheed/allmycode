InvokeApplication("C:\Users\farrukh.tuheed\Desktop\Healthwyse\OfficeWyse Setup\MobileWyse.exe -s 800x600")
wait(5)
Dim UserName, Password
Password= DataTable("Password", dtLocalSheet)
UserName=DataTable("UserName", dtLocalSheet)

Window("MobileWyse vXX.YY.ZZ (Build_2").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinComboBox("ComboBox").Select UserName
Window("MobileWyse vXX.YY.ZZ (Build_2").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinEdit("Edit").Set Password
wait(2)

Window("MobileWyse vXX.YY.ZZ (Build_2").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinButton("LOGIN").Click
Window("MobileWyse vXX.YY.ZZ (Build_2").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").WinButton("LOGIN").Check CheckPoint("LOGIN")
Window("MobileWyse vXX.YY.ZZ (Build_2").Dialog("#32770").Dialog("MobileWyse Login (1339-959)").Dialog("HealthWyse Login Options").WinButton("OK").Click

wait(10)

