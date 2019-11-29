//http://192.168.1.1/index.htm

function wifivisitors(ssid,pass) {

document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-config").click()
// Wait Iframe + Change value

const mainlistener =  (ev) => {


document.getElementById("mainFrame").removeEventListener('load',mainlistener)

document.getElementById("mainFrame").contentWindow.document.querySelector("#menu_5 > td > a").click()

document.getElementById("mainFrame").addEventListener('load', secondlistener)

}

const secondlistener = (ev) => {


document.getElementById("mainFrame").removeEventListener('load',secondlistener)

document.getElementById("mainFrame").contentWindow.document.querySelector("#guest_wifi_ssid_input").value = ssid

document.getElementById("mainFrame").contentWindow.document.querySelector("#guest_wifi_key_input").value = pass

document.getElementById("mainFrame").contentWindow.document.querySelector("#guest_wifi_status_switch").click()

document.getElementById("mainFrame").contentWindow.document.querySelector("#bt_save").click()

}

document.getElementById("mainFrame").addEventListener('load',mainlistener)


}

