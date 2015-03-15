var thingList = function (data){
	var client = Ti.Network.createHTTPClient({
	    onload : function(response) {
			//Ti.API.info('Response ' + response);
			if (data.success) {
				data.success(response);
			}

			if (data.complete) {
				data.complete(response);
			}
	    },
	    onerror : function(response) {
			if (data.success) {
				data.failure(response);
			}

			if (data.complete) {
				data.complete(response);
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

connectServer({
			url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/',
			extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
			token: Titanium.App.Properties.getString("token"),
			success: function (response) {
				Ti.API.info(response);
				//var tabGroup = require('/ui/ios/iphone/tabGroup');
				//var instance = new tabGroup().open();
				
			},
			failure: function () {
				alert("Your credentials are wrong ...");
			}
});
/*var getTemps = function (){
	
	
}*/
