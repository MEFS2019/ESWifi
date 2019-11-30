function change_openwrt_pass(newWifiPass) {
    document.querySelector("body > header > div > div > ul > li:nth-child(2) > ul > li:nth-child(2) > a").click()
    document.getElementById("cbid.system._pass.pw1").value = newWifiPass
    document.getElementById("cbid.system._pass.pw2").value = newWifiPass
    document.forms[0].submit()
}