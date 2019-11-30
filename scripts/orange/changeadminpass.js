
function changePassAdmin(pass,newpass) {

document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-advconfig > span").click()

const mainlistener =  (ev) => {


document.getElementById("mainFrame").removeEventListener('load',mainlistener)

document.getElementById("mainFrame").contentWindow.document.querySelector("#menu_30 > td > a").click()

document.getElementById("mainFrame").addEventListener('load', secondlistener)

}

const secondlistener = (ev) => {


document.getElementById("mainFrame").removeEventListener('load',secondlistener)

document.getElementById("mainFrame").contentWindow.document.querySelector("#opasswd").value = pass

document.getElementById("mainFrame").contentWindow.document.querySelector("#npasswd").value = newpass

document.getElementById("mainFrame").contentWindow.document.querySelector("#cpasswd").value = newpass

document.getElementById("mainFrame").contentWindow.document.querySelector("#bt_save").click()

}

document.getElementById("mainFrame").addEventListener('load',mainlistener)


}
