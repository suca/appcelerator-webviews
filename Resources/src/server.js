
function connectServer (data) {
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
    client.send(JSON.stringify({
    	"username": data.username,
    	"password": data.password
    }));

}

function ajax (params) {
	var client = Ti.Network.createHTTPClient({
	    onload : function(response) {
			if (params.success) {
				params.success(response);
			}

			if (params.complete) {
				params.complete(response);
			}
	    },
	    onerror : function(response) {
			if (params.success) {
				params.failure(response);
			}

			if (params.complete) {
				params.complete(response);
			}
	    }
    });

    client.open(params.method, params.url);
    client.setRequestHeader('Accept', 'application/json, text/plain, */*');
    client.setRequestHeader("Content-Type", "application/json");
    client.send(params.data);
};





module.exports = connectServer;
module.exports = ajax;