function login_orange(pass) {

	document.getElementById('mainFrame').contentWindow.document.querySelector("#mainContent > table > tbody > tr > td:nth-child(2) > ul > li:nth-child(2) > div.readonly > input[type=password]").value = pass
	document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click()

}
