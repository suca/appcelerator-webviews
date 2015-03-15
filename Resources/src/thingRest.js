var connectServer = function (data){
	alert("Inside of Server...");
	var client = Ti.Network.createHTTPClient({
	    onload : function(response) {
			//Ti.API.info('Response ' + response);
			var json = this.responseText
			if (data.success) {
				data.success(json);
			}

			if (data.complete) {
				data.complete(json);
			}
	    },
	    onerror : function(response) {
	    	var json = this.responseText
			if (data.failure) {
				data.failure(json);
			}

			if (data.complete) {
				data.complete(json);
			}
	    }
    });

    client.open('POST', data.url);
    client.setRequestHeader('Accept', 'application/json, text/plain, */*');
    client.setRequestHeader("Content-Type", "application/json");
    client.setRequestHeader("token", token);
    client.send(JSON.stringify({
    	"extra": data.extra
    }));

};
	alert("One");
connectServer({
	url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/',
	extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
	token: Titanium.App.Properties.getString("token"),
	success: function (response) {
		var object;
		alert("Two");
		if (typeof response === "string") {
			object = JSON.parse(response);
		} else {
			object = response;
		}
		console.log(object);
		//var tabGroup = require('/ui/ios/iphone/tabGroup');
		//var instance = new tabGroup().open();
		
	},
	failure: function () {
		alert("Your credentials are wrong ...");
	}
});
/*var getTemps = function (){
	
	
}*/
