function changeWirelessEncryption() {
    document.querySelector("body > header > div > div > ul > li:nth-child(3) > ul > li:nth-child(2) > a").click(); 
    document.querySelector("#maincontent > ul > li > a").click();
    document.getElementById('tab.wireless.default_radio0.encryption').children[0].click();
    document.getElementById('cbid.wireless.default_radio0.encryption').selectedIndex = 4;
    document.querySelector('#maincontent > form > div.cbi-page-actions > input.cbi-button.cbi-button-apply').click()
}
