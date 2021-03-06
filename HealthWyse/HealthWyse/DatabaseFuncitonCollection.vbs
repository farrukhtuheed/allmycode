
'Example of How to use functions.

''************************************************************************************
' Example use DSN created for database of Flight sample application.
''************************************************************************************
 SQL="SELECT * FROM PERSONS"
connection_string="DSN=Handheld;UID=DBA;PWD=pwd4hw"
''****************************************************************************************
 
 
' Database Functions library
'******************************************************************************************
'db_connect
' ---------------
' The function creates a new connection session to a database.
' curSession - the session name (string)
' connection_string - a connection string
' for example the connection_string can be "DSN=SQLServer_Source;UID=SA;PWD=abc123"
'******************************************************************************************
Function db_connect( byRef curSession ,connection_string)
    dim connection
    on error Resume next
    ' Opening connection
    set connection = CreateObject("ADODB.Connection")
    If Err.Number <> 0 then
        db_connect= "Error # " & CStr(Err.Number) & " " & Err.Description
        err.clear
        Exit Function
    End If
  
    connection.Open connection_string
    If Err.Number <> 0 then
        db_connect= "Error # " & CStr(Err.Number) & " " & Err.Description
        err.clear
        Exit Function
    End If
    set curSession=connection
    db_connect=0
End Function
 
'********************************************************************************************
' db_disconnect
' ---------------------
' The function disconnects from the database and deletes the session.
' curSession - the session name (string)
'********************************************************************************************
Function db_disconnect( byRef curSession )
    curSession.close
    set curSession = Nothing
End Function
 
'*********************************************************************************************
' db_execute_query
' ---------------------------
' The function executes an SQL statement.
' Note that a db_connect for (arg1) must be called before this function
' curSession - the session name (string)
' SQL - an SQL statement
'**********************************************************************************************
Function db_execute_query ( byRef curSession , SQL)
    set rs = curSession.Execute( SQL )
    set db_execute_query = rs
End Function
 
''***********************************************************************************************
' db_get_rows_count
' ----------------------------
' The function returns the number of rows in the record set
' curRS - variable , contain record set , that contain all values that retrieved from DB by query execution
''***********************************************************************************************
Function db_get_rows_count( byRef curRS )
    dim rows
    rows = 0
    curRS.MoveFirst
    Do Until curRS.EOF
        rows = rows+1
        curRS.MoveNext
    Loop
    db_get_rows_count = rows
End Function
 
''************************************************************************************************
' db_get_rows_count_SQL
' ------------------------------------
' The function returns the number of rows that are the result of a given SQL statement
' curSession - the session name (string)
' CountSQL - SQL statement
''************************************************************************************************
Function db_get_rows_count_SQL( byRef curSession ,CountSQL )
    dim cur_rs
    set cur_rs = curSession.Execute( CountSQL )
    db_get_rows_count_SQL = cur_rs.fields(0).value
End Function
 
''*************************************************************************************************
' db_get_field_value_SQL
' -----------------------------------
' curSession - variable denote current active connection
' tableName - name of the table , where value should be retrieved
' rowIndex - row number
' colName - the column name.
'*************************************************************************************************
Function db_get_field_value_SQL( curSession , tableName , rowIndex , colName )
    dim rs
    SQL = " select " & colName & " from " & tableName
    set rs = curSession.Execute( SQL )

    rs.move rowIndex
    db_get_field_value_SQL = rs.fields(colName).value
End Function

'*************************************************************************************************
' db_get_field_value
' --------------------------
' The function returns the value of a single item of an executed query.
' Note that a db_execute_query for (arg1) must called before this function
 
' curRecordSet - variable , contain record set , that contain all values that retrieved from DB by query execution
' rowIndex - the row index number (zero based)
' colIndex - the column index number (zero based) or the column name.
' returned values
' -1 - requested field index more than exists in record set
'*************************************************************************************************
Function db_get_field_value( curRecordSet , rowIndex , colIndex )
    dim curRow
 
    curRecordSet.MoveFirst
    count_fields = curRecordSet.fields.count-1
    If ( TypeName(colIndex)<> "String" ) and ( count_fields < colIndex ) then
        db_get_field_value = -1 'requested field index more than exists in recordset
    Else
        curRecordSet.Move rowIndex
        db_get_field_value = curRecordSet.fields(colIndex).Value
    End If
End Function
 
'*************************************************************************************************
' db_set_field_value
' ---------------------------
' The function changes the value of a field according to a search criteria.
' We search for a certain row according to a column name and the desired vale, then we change a value in that row according
' to a desired columns
 
' curConnection - the session name (string)
' tableName - name of the table , where value should be retrieved
' colFind - the column we search the criteria in
' colFindValue - the value we search in the column
' colChange - the column were we want to change the value
' colChangeValue - the new value
 
' returned values
' -1 - requested field index that doesn't exists in the recordset
'*************************************************************************************************
Function db_set_field_value(curConnection, tableName , colFind , colFindValue, colChange, colChangeValue)
    dim curRow
    dim updateSQL
    dim checkSQL
 
    checkSQL = "select * from Details"
    set myrs1 = db_execute_query( curConnection , SQL )
    myrs1.MoveFirst
    count_fields = myrs1.fields.count
    If ( TypeName(colFind)<> "String" ) or ( TypeName(colChange)<> "String" ) then
        db_set_field_value = -1 'requested field index that doesn't exists in the record set
    Else
        updateSQL = "UPDATE " & tableName & " SET " & colChange & "='" & colChangeValue & "' WHERE " & colFind & "='" & colFindValue & "'"
        set myrs1 = db_execute_query( curConnection , updateSQL )
        db_set_field_value = 1 'operation suceeded
    End If
End Function
 
'*************************************************************************************************
' db_add_row
' -----------------
' The function adds a new row to the desired table
 
' curConnection - variable , contains a recordset , that contains all the values to be retrieved from DB by query execution
' tableName - name of the table , where value should be retrieved from
' values - array that contains values to be entered in a new row to the table.

' Note: the function must receive values for all the columns in the table!
' returned values
' -1 - the number of values to be entered to the table doesn't fit the number of columns
' 1 - execution of the query succeed and the data was entered to the table
'*************************************************************************************************
Function db_add_row(curConnection, tableName , byRef values)
    dim i
    dim updateSQL
    dim myrs1
 
    updateSQL = "INSERT INTO " & tableName & " VALUES ("
    arrLen = UBound (values) - LBound (values) + 1
 
    set myrs1=db_execute_query( curConnection , SQL )
    myrs1.MoveFirst
    count_fields = myrs1.fields.count
    ' check if numbers of values fit the numbers of columns
    If arrLen <> count_fields then
        db_add_row = -1
    Else
        For i = 0 to arrLen-1
            updateSQL = updateSQL & values (i)
            If i <> arrLen-1 then
                updateSQL = updateSQL & ","
            End If
        Next
        updateSQL = updateSQL & ")"
        set myrs1 = db_execute_query( curConnection , updateSQL )
        db_add_row = 1
     End If
End Function
 
'*************************************************************************************************
' represent_values_of_RecordSet
' ---------------------------------------------
' the function reports all the values on fields in a record set
' curRS - variable , contains the recordset , that contains all the values that were retrieved from the DB by the query execution
'*************************************************************************************************
Function represent_values_of_RecordSet( myrs)
    dim curRowString
    myrs.MoveFirst
    reporter.ReportEvent 4,"Fields quantity" , myrs.fields.count
    count_fields = myrs.fields.count-1
    curRow=0
    Do Until myrs.EOF
        curRowString= ""
        curRow = curRow+1
        For ii=0 to count_fields
            curRowString = curRowString& "Field " &"==> " & myrs.fields(ii).Name &" : Value ==>" & myrs.fields(ii).Value & vbCrLf
        Next
        myrs.MoveNext
        reporter.ReportEvent 4,"Current row"& curRow , curRowString
    Loop
End Function