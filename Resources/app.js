//var loginPage = require('src/login');
//var tabGroup = require('src/tabGroup');

Titanium.App.Properties.setString("userAccesskey", "");
Titanium.App.Properties.setBool("loginWithFacebook", false);
Titanium.App.Properties.setString("deviceID", Titanium.Platform.id);
Titanium.App.Properties.setString("plataforma", Titanium.Platform.osname);


Titanium.App.Properties.setString("urlBaseAPI", "http://estrategias-juridicas.com/api/services/api.php");

(function() {
  //determine platform and form factor and render approproate components
  var loginPage,
  osName = Ti.Platform.osname;

  //Define our global scope shared configuration
  Ti.App.iotAdmin = {
    version : Ti.App.version,
    osName : osName,
    //Not used right now, but ready to rock
    //isTablet: checkTablet(osName),
    isTablet : osName === 'ipad',
    //Platform specific library for obtaining device resources and configuration
    platformManager : require('/lib/platform_manager')
    //Helper for all user and local data management activities
    //configManager: new configClass()
  };

  if (osName == 'android') {
    loginPage = require('/ui/android/login');
  } else {
    loginPage = require('/ui/ios/iphone/login');
  }
  var instance = new loginPage().open();

})();

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/*Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
*/