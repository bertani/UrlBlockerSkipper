function unlock() {
    domain = location.href.substr(0, location.href.indexOf("/", 8));
    chrome.extension.sendRequest({type: "resolve", domain: domain.replace("http://", "")}, function(response){ fix_page(response['ip'], domain); });
}


function fix_page(ip, domain) {
    addr = location.href.replace(domain, ip);
    location.href = addr;
}


//se e' un sito bloccato lo sblocco altrimenti nada!
if (document.body.innerHTML.indexOf("The URL you requested has been blocked")>-1) unlock();
