
/**
 * 
 * Gets a dimension from the resource file
 * @type string
 * @param {string} [resourceDimensionName] The name of the dimension in the resource file
 */
exports.getDimension = function(resourceDimensionName) {
	
	var osName = Ti.Platform.osname;
	osName = osName == 'android' ? osName : 'ios';
	switch (osName) {
		case 'android':
			var resourceId = eval('Ti.App.Android.R.dimen.' + resourceDimensionName);
			return Ti.Android.currentActivity.getString(resourceId);	
		case 'ios':
			var iosDevice =Ti.App.ritaQuirogaAdmin.isTablet ? 'ipad' : 'iphone';
			//Ti.API.info('iosDevice ' + iosDevice);
			var dimensionFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, String.format('/xml/%s/dimens.xml',iosDevice));
			var returnDimension = null;
			if (dimensionFile.exists()) {
				var doc = Ti.XML.parseString(dimensionFile.read().text); 	
				var elements = doc.getElementsByTagName('dimen');
				for (var i = 0; elements.length; i++){
				 	var element = elements.item(i);
				 	if (element.getAttributeNode('name').nodeValue == resourceDimensionName) {
				 		returnDimension = element.textContent;
				 		break;	
				 	}
				};

    			if (returnDimension == null) 
					Ti.API.debug(String.format('Unknow dimension: %s', resourceDimensionName));  		
						
			}
			else 
				Ti.API.debug('Couldn\'t open iOS dimension resource file');
			
			return returnDimension;
			
			default:
				Ti.API.debug(String.format('Unknow OS: %s',Ti.App.ritaQuirogaAdmin.osName));
				return null;
		}	
};

/**
 * 
 * Gets an integer dimension from the resource file
 * Use only with Android, since android does not allow ints in the resource file
 * @type int
 * @param {string} [resourceDimensionName] The name of the dimension in the resource file
 */
exports.getIntegerDimension = function(resourceDimensionName) {
	switch (Ti.App.ritaQuirogaAdmin.osName) {
		case 'android':
			var resourceId = eval('Ti.App.Android.R.dimen.' + resourceDimensionName);
			return parseInt(Ti.Android.currentActivity.getString(resourceId).replace('dp',''));	
		case 'ios':
			var iosDevice =Ti.App.ritaQuirogaAdmin.isTablet ? 'ipad' : 'iphone';
		
			var dimensionFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, String.format('/xml/%s/dimens.xml',iosDevice));
			var returnDimension = null;
			if (dimensionFile.exists()) {
				var doc = Ti.XML.parseString(dimensionFile.read().text); 	
				var elements = doc.getElementsByTagName('dimen');
				for (var i = 0; elements.length; i++){
				 	var element = elements.item(i);
				 	if (element.getAttributeNode('name').nodeValue == resourceDimensionName) {
				 		returnDimension = element.textContent;
				 		break;	
				 	}
				};

    			if (returnDimension == null) 
					Ti.API.debug(String.format('Unknow dimension: %s', resourceDimensionName));  		
						
			}
			else 
				Ti.API.debug('Couldn\'t open iOS dimension resource file');
		
			return parseInt(returnDimension.replace('dp',''));	
		default:
			Ti.API.debug(String.format('Unknow OS: %s', Ti.App.qaalog.osName));
			return null;
		}
};

/**
 * 
 * Gets the platform screen size, accounting for portrait/landscape orientations
 * @type object
 */
exports.getScreenSize = function() {
	var pWidth = Ti.Platform.displayCaps.platformWidth;
	var pHeight = Ti.Platform.displayCaps.platformHeight;
	return { 
		width: (pWidth > pHeight) ? pHeight : pWidth,
		height: (pWidth > pHeight) ? pWidth : pHeight
	};
};
