 //http://192.168.1.1/cgi-bin/luci/admin/network/wireless/radio0.network1

function changeSSID(ssid) {
	a = document.querySelector("#cbid\\.wireless\\.default_radio0\\.ssid")
	a.setAttribute("value",ssid)
	document.querySelector("#maincontent > form > div.cbi-page-actions > input.cbi-button.cbi-button-apply").click()

}
