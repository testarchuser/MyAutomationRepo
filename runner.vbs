Set qtApp = createobject("Quicktest.application")
qtApp.Launch
qtApp.Visible = true
qtApp.Open "Test1",False
Set qtTest = qtApp.Test
qtTest.Run "D:\GitDemo"

