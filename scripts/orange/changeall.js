//http://192.168.1.1/index.htm

function secure(ssid,pass) {

document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-config").click()
// Wait Iframe + Change value

const mainlistener = (ev) => {

document.getElementById("mainFrame").removeEventListener('load',mainlistener)

// WPS
if(document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").value == "desactivar"){
    document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").click()
}
// SSID
document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_com_ssid_input").value = ssid

// WIFI PASSWORD
document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_com_key_input").value = pass

// Save config
document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click()

}

document.getElementById("mainFrame").addEventListener('load', mainlistener);

}

