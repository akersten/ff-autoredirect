require("sdk/tabs").on("ready", checkUrl);
 
function checkUrl(tab) {
	var re = /https:\/\/steamcommunity\.com\/linkfilter\/\?url=/;
	
	if (re.test(tab.url)) {
		var extract = /\?url=.+/;
		var arr = tab.url.match(extract);
		var target = arr[0].substr(5, arr[0].length - 5);

		tab.url = target;
	}
}