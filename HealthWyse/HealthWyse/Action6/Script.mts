Dim msgbdy,RowSwitch, ColumnSwitch,ContentInUI,ContentInDB, ContentInList,winlist, rs
Dim countOfMailsOnUI, countOfMailsInDB,countOfcolumnsonUI


isConnected = db_connect ( curConnection ,connection_string )


SQL="Select dateformat(messages.AddDate, 'Mm/Dd/yy') as 'Date', case when person.MiddleName!='NULL' THEN  person.lastname + ', '+  person.FirstName + ' ' + person.middlename +  ', ' + EmployeeOther.degree when messages.FromID = 0 THEN 'HealthWyse' WHEN EmployeeOther.Degree='NULL' and Person.MiddleName='NULL' THEN person.lastname + ', '+  person.FirstName ELSE   person.lastname + ', '+  person.FirstName + ', ' + EmployeeOther.Degree end as mailSubject,  messages.Subject From Messages JOIN  Person ON Messages.FromID = Person.PersonID LEFT  JOIN  EmployeeOther on messages.FromID = EmployeeOther.personid where messages.ToID = 7060430354880633758  and (messages.status is NULL or messages.status = 'H') ORDER BY Messages.AddDate DESC, Messages.AddTime DESC  "

Set rs = db_execute_query (curConnection, SQL)


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Clinical Desktop").WinButton("Mail").Click
Set winlist = Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("SysListView32")

call compareUIListWithDBList (winlist,  rs)



SQL="Select dateformat(messages.AddDate, 'Mm/Dd/yy') as 'Date',  case when person.MiddleName!='NULL' THEN  person.lastname + ', '+  person.FirstName + ' ' + person.middlename +  ', ' + EmployeeOther.degree  when messages.FromID = 0 THEN 'HealthWyse' WHEN EmployeeOther.Degree='NULL' and Person.MiddleName='NULL' THEN person.lastname + ', '+  person.FirstName ELSE   person.lastname + ', '+  person.FirstName + ', ' + EmployeeOther.Degree end as mailSubject,  messages.Subject From Messages JOIN  Person ON Messages.toID = Person.PersonID LEFT  JOIN  EmployeeOther on messages.toID = EmployeeOther.personid where messages.fromID = 7060430354880633758 AND Messages.Category='override' and (messages.status is NULL or messages.status = 'H')  ORDER BY Messages.AddDate DESC, Messages.AddTime DESC   "
Set rs = db_execute_query (curConnection, SQL)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("Messages").Select DataTable("Side_Menu2", dtLocalSheet)
Set winlist = Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("SysListView32")
call compareUIListWithDBList (winlist,  rs)

Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("Messages").Select DataTable("Side_Menu1", dtLocalSheet)
SQL="Select dateformat(messages.AddDate, 'Mm/Dd/yy') as 'Date', case when person.MiddleName!='NULL' THEN  person.lastname + ', '+  person.FirstName + ' ' + person.middlename +  ', ' + EmployeeOther.degree when messages.FromID = 0 THEN 'HealthWyse' WHEN EmployeeOther.Degree='NULL' and Person.MiddleName='NULL' THEN person.lastname + ', '+  person.FirstName ELSE   person.lastname + ', '+  person.FirstName + ', ' + EmployeeOther.Degree end as mailSubject,   messages.Subject  From Messages JOIN  Person  ON Messages.toID = Person.PersonID  LEFT  JOIN  EmployeeOther on messages.toID = EmployeeOther.personid  where messages.fromID = 7060430354880633758 and coalesce(Messages.Category,'') !='Override' and person.LastName!='NULL' and (messages.status is NULL or messages.status = 'H')  ORDER BY Messages.AddDate DESC, Messages.AddTime DESC  "
Set rs = db_execute_query (curConnection, SQL)
Set winlist = Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("SysListView32")
call compareUIListWithDBList (winlist,  rs)
ContentInUI=Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("SysListView32").GetSubItem(0)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinListView("SysListView32").Select ContentInUI
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinButton("Delete").Click




msgbdy =  DataTable("Msg_Body", dtLocalSheet)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinButton("New Msg").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinEditor("Msg").Type msgbdy
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinComboBox("ComboBox").Select DataTable("Clinician", dtLocalSheet)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinButton("To").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinComboBox("ComboBox_2").Select DataTable("SendTo", dtLocalSheet)
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinCheckBox("Yes/No Reply").Set "ON"
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").WinButton("OK").Click
Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").Dialog("New Message").Dialog("Message Sent").WinButton("DONE").Click
DbTable("DbTable_4").Check CheckPoint("DbTable_4")


Window("User: Tabitha Pope, RN").Dialog("#32770").Dialog("Messaging").WinButton("Clinical Desktop").Click