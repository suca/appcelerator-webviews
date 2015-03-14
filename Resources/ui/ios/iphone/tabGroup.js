function Main () {
	Titanium.UI.setBackgroundColor('#000');

	/**
	 * Hospitals
	 */
	var tabGroup = Titanium.UI.createTabGroup();
	var win1 = Titanium.UI.createWindow({  
	    title:' Hospitals',
	    backgroundColor:'#fff'
	});
	var tab1 = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Hospitals',
	    window:win1
	});

	var webview = Ti.UI.createWebView({
		url: '/ui/views/hospitals.html'
	});
	win1.add(webview);
	
	/**
	 * Top 10 Zones
	 */
	var win2 = Titanium.UI.createWindow({  
	    title:'Things at risk',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Things at risk',
	    window:win2
	});

	var listZoneView = require('/ui/ios/iphone/thingAtRisk');
	//var instance = new listZoneView().open();
	/*var label2 = Titanium.UI.createLabel({
		color:'#999',
		text:'Statistics',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});*/

	win2.add(listZoneView);

	/**
	 * Dashboard - Reports
	 */
	var win3 = Titanium.UI.createWindow({  
	    title:'Reports',
	    backgroundColor:'#fff'
	});
	var tab3 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Reports',
	    window:win3
	});

	var webview3 = Ti.UI.createWebView({
		url: '/ui/views/reportChart.html'
	});
	win3.add(webview3);

	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);  

	return tabGroup;
}

module.exports = Main;