function Main () {
	Titanium.UI.setBackgroundColor('#000');

	var tabGroup = Titanium.UI.createTabGroup();
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
		text:'I am Window 1 Suca',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});

	var button = Titanium.UI.createButton({
	   title: 'Press Me!',
	   top: 10,
	   width: 100,
	   height: 50
	});
	button.addEventListener('click', function(e) {
	   
	});

	win1.add(label1);
	win1.add(button);

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
		text:'I am Window 2 Suca',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});

	win2.add(label2);

	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);  

	return tabGroup;
}

module.exports = Main;