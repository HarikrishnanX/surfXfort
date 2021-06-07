chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var tlink = tabs[0].url;
    var n;
    n = tlink.length;
    var tablink = "";
    var i;
    var j;
    for(i = 0;i < tlink.length;i++) {
        if((tlink[i] == 'h')&&(tlink[i + 1] == 't')&&(tlink[i + 2] == 't')&&(tlink[i + 3] == 'p')) {
            for(j = i;j < tlink.length;j++) {
                tablink += tlink[j];
            }
        }
    }
    n = tablink.length;
    var vul;
    if(n > 70) {
        vul = "Vulnerable";
    }
    else {
        vul = "Safe";
    }
    document.getElementById("demo1").innerHTML = "The full URL is : " + tablink;
	document.getElementById("demo2").innerHTML = "URL Length : " + n;
	document.getElementById("demo3").innerHTML = "Vulnerability Status : " + vul;
});