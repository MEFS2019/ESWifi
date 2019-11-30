//http://192.168.1.1/index.htm

function changewifipass(name) {

document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-config").click()
// Wait Iframe + Change value

const mainlistener = (ev) => {

document.getElementById("mainFrame").removeEventListener('load',mainlistener)

document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_com_key_input").value = name
// Save config
document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click()

}

document.getElementById("mainFrame").addEventListener('load', mainlistener);

}

