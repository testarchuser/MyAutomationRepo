Set Fldr = createobject("Wscript.shell")
curdir = Fldr.CurrentDirectory
Set qtApp = createobject("Quicktest.application")
qtApp.Launch
qtApp.Visible = true
qtApp.Open curdir &"\Test1",False
Set qtTest = qtApp.Test
qtTest.Run

