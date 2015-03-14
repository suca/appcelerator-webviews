

var RestProxy = function (options) {
    RestProxy.superclass.call(this, options);
    this.url = null;
    this.method = null;
    this.data = null;
    RestProxy.prototype.init.call(this, options);
};

RestProxy.prototype.type = "Proxy";
RestProxy.prototype.init = function (options) {
    var defaults = {
        url: null,
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(){},
        failure: function(){},
        complete: function(){}
    };
    jQuery.extend(true, defaults, options);
    this.setUrl(defaults.url)
        .setAuthorizationOAuth(defaults.authorizationOAuth)
        .setMethod(defaults.method)
        .setData(defaults.data)
        .setDataType(defaults.dataType)
        .setSuccessAction(defaults.success)
        .setFailureAction(defaults.failure)
        .setCompleteAction(defaults.complete);
};

RestProxy.prototype.setUrl = function (url) {
    this.url = url;
    return this;
};

RestProxy.prototype.setMethod = function (method) {
    this.method = method;
    return this;
};
RestProxy.prototype.setSuccessAction = function (action) {
    this.success = action;
    return this;
};
RestProxy.prototype.setFailureAction = function (action) {
    this.failure = action;
    return this;
};
RestProxy.prototype.setCompleteAction = function (action) {
    this.complete = action;
    return this;
};

RestProxy.prototype.setData = function (data) {
    this.data = data;
    return this;
};

RestProxy.prototype.setDataType = function (type) {
    this.type = type;
    return this;
};
RestProxy.prototype.setContentType = function (value) {
    this.contentType = value;
    return this;
};

RestProxy.prototype.post = function (settings) {
    var self = this;

	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	 		self.success(e);
	 		self.complete();
	         alert('success');
	     },
	     onerror : function(e) {
	         self.failure(e);
	         self.complete();
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 client.open("POST", this.url);
	 client.send();
};

RestProxy.prototype.patch = function (settings) {
    var self = this;

	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	 		self.success(e);
	 		self.complete();
	         alert('success');
	     },
	     onerror : function(e) {
	         self.failure(e);
	         self.complete();
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 client.open("PATCH", this.url);
	 client.send();
};

RestProxy.prototype.get = function (settings) {
    var self = this;

	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	 		self.success(e);
	 		self.complete();
	         alert('success');
	     },
	     onerror : function(e) {
	         self.failure(e);
	         self.complete();
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 client.open("GET", this.url);
	 client.send();
};

RestProxy.prototype.delete = function (settings) {
    var self = this;

	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	 		self.success(e);
	 		self.complete();
	         alert('success');
	     },
	     onerror : function(e) {
	         self.failure(e);
	         self.complete();
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 client.open("DELETE", this.url);
	 client.send();

};