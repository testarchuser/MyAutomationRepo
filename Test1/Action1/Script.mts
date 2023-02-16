Systemutil.Run "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\QuickTest Professional\Sample Applications\Flight.lnk"
Dialog("Login").Activate @@ hightlight id_;_394688_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set "test" @@ hightlight id_;_984184_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "63ee255060bb1f79b954940ada380d2433c3aa21" @@ hightlight id_;_1115508_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_328882_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").Check CheckPoint("Flight Reservation") @@ hightlight id_;_460224_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").Close