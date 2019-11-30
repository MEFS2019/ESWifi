//http://192.168.1.1/index.htm

function wps() {

document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-config").click()
// Wait Iframe + Change value

document.getElementById("mainFrame").addEventListener('load', (ev) => { 

if(document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").value == "desactivar"){
    document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").click()
document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click()
}
});

}

