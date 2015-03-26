var fnRisk = function () {
	var myTemplate = {
	    childTemplates: [
	        {                            // Image justified left
	            type: 'Ti.UI.ImageView', // Use an image view for the image
	            bindId: 'pic',           // Maps to a custom pic property of the item data
	            properties: {            // Sets the image view  properties
	                width: '50dp', height: '50dp', left: 0
	            }
	        },
	        {                            // Title 
	            type: 'Ti.UI.Label',     // Use a label for the title 
	            bindId: 'info',          // Maps to a custom info property of the item data
	            properties: {            // Sets the label properties
	                color: 'black',
	                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
	                left: '60dp', top: 0,
	            }
	        },
	        {                            // Subtitle
	            type: 'Ti.UI.Label',     // Use a label for the subtitle
	            bindId: 'es_info',       // Maps to a custom es_info property of the item data
	            properties: {            // Sets the label properties
	                color: 'gray',
	                font: { fontFamily:'Arial', fontSize: '14dp' },
	                left: '60dp', top: '25dp',
	            }
	        }
	    ]
	};

	var listView = Ti.UI.createListView({
	    
	    templates: { 'template': myTemplate },
	    
	    defaultItemTemplate: 'template'
	});
	var sections = [];

	var fruitSection = Ti.UI.createListSection({ headerTitle: 'Caja Petrolera - Calle Potosi'});
	var fruitDataSet = [
	    
	    { info: {text: 'Zone 1 '}, es_info: {text: 'Zone 1'}, pic: {image: ''}},
	    { info: {text: 'Zone 2'}, es_info: {text: 'Zone 1'}, pic: {image: ''}}
	];
	fruitSection.setItems(fruitDataSet);
	sections.push(fruitSection);

	var vegSection = Ti.UI.createListSection({ headerTitle: 'Caja Petrolera - 6 de Agosto'});
	var vegDataSet = [
	    { info: {text: 'Zone 3'}, es_info: {text: 'Zone 3'}, pic: {image: ''}},
	    { info: {text: 'Zone 3'}, es_info: {text: 'Zone 3'}, pic: {image: ''}}
	];
	vegSection.setItems(vegDataSet);
	sections.push(vegSection);

	var grainSection = Ti.UI.createListSection({ headerTitle: 'Caja Petrolera - Obrajes'});
	var grainDataSet = [
	    { info: {text: 'Zone 5'}, es_info: {text: 'Zone 5'}, pic: {image: ''}},
	    { info: {text: 'Zone 6'}, es_info: {text: 'Zone 5'}, pic: {image: ''}}
	];
	grainSection.setItems(grainDataSet);
	sections.push(grainSection);

	listView.setSections(sections);
	return listView;
}

var connectServer = function (data){
 
 var client = Ti.Network.createHTTPClient({
     onload : function(response) {
	   //Ti.API.info('Response ' + response);

	   var json = this.responseText;
	   console.log(json);
	   if (data.success) {
	    data.success(json);
	    
	   }

	   if (data.complete) {
	    data.complete(json);
	   }
     },
     onerror : function(response) {
      var json = this.responseText;
      	console.log(json);
		if (data.failure) {
			data.failure(json);
		}

   		if (data.complete) {
    		data.complete(json);
   		}
     }
    });
	console.log(data.token + '- ' + Titanium.App.Properties.getString("apiKey"));
	client.setEnableKeepAlive(true);
    
    client.open('POST', data.url);
    client.setRequestHeader('Accept', 'application/json, text/plain, */*');
    client.setRequestHeader("Content-Type", "application/json");
    client.setRequestHeader("X-Auth-Token", Titanium.App.Properties.getString("token") ? Titanium.App.Properties.getString("token") : '');
    client.setRequestHeader("my-header", "XXX");
    client.setRequestHeader("apiKey", Titanium.App.Properties.getString("apiKey") ? Titanium.App.Properties.getString("apiKey") : '');
    
    client.send();

};

function getFields(object){
 for(var i=0; i<object.results.length; i++){
  connectServer({
  url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/'+object.results[i].id,
  //extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
  token: Titanium.App.Properties.getString("token"),
  success: function (response) {
   var object;
   //alert("Two");
   if (typeof response === "string") {
    object = JSON.parse(response);
   } else {
    object = response;
   }
   console.log(object);
   getFieldsTimeseries(object);
   
   //var tabGroup = require('/ui/ios/iphone/tabGroup');
   //var instance = new tabGroup().open();
   
  },
  failure: function () {
   Ti.API.info("Something was wrong ...");
  }
  });
 }
}

function getFieldsTimeseries(object){
 for(var i=0; i<object.fields.length; i++){
  if(object.fields[i].name='temperture'){
   connectServer({
   url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/'+object.id+'/field/'+object.fields[i].id,
   //extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
   token: Titanium.App.Properties.getString("token"),
    success: function (response) {
     var object;
     //alert("Two");
     if (typeof response === "string") {
      timeseries = JSON.parse(response);
     } else {
      timeseries = response;
     }
     console.log(timeseries);
     var promedio;
     var sum=0;
     for (var i=0;i< timeseries.results.length; i++){
       sum = sum + timeseries.results[i].value;
     }
     promedio = sum/imeseries.results.length;
     thingsSeriesData.push({name: object.name, avg:promedio});
     //var tabGroup = require('/ui/ios/iphone/tabGroup');
     //var instance = new tabGroup().open();
     
    },
    failure: function () {
     Ti.API.info("Something was wrong ...");
    }
   });
  }

 }
}

function thinkRisk () {

	var myTemplate = {
	    childTemplates: [
	        {                            // Image justified left
	            type: 'Ti.UI.ImageView', // Use an image view for the image
	            bindId: 'pic',           // Maps to a custom pic property of the item data
	            properties: {            // Sets the image view  properties
	                width: '50dp', height: '50dp', left: 0
	            }
	        },
	        {                            // Title 
	            type: 'Ti.UI.Label',     // Use a label for the title 
	            bindId: 'info',          // Maps to a custom info property of the item data
	            properties: {            // Sets the label properties
	                color: 'black',
	                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
	                left: '60dp', top: 0,
	            }
	        },
	        {                            // Subtitle
	            type: 'Ti.UI.Label',     // Use a label for the subtitle
	            bindId: 'es_info',       // Maps to a custom es_info property of the item data
	            properties: {            // Sets the label properties
	                color: 'gray',
	                font: { fontFamily:'Arial', fontSize: '14dp' },
	                left: '60dp', top: '25dp',
	            }
	        }
	    ]
	};

	var listView = Ti.UI.createListView({
	    // Maps myTemplate dictionary to 'template' string
	    templates: { 'template': myTemplate },
	    // Use 'template', that is, the myTemplate dict created earlier
	    // for all items as long as the template property is not defined for an item.
	    defaultItemTemplate: 'template'
	});
	var sections = [];

	var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits / Frutas'});
	var fruitDataSet = [
	    // the text property of info maps to the text property of the title label
	    // the text property of es_info maps to text property of the subtitle label
	    // the image property of pic maps to the image property of the image view
	    { info: {text: 'Apple'}, es_info: {text: 'Manzana'}, pic: {image: 'apple.png'}},
	    { info: {text: 'Banana'}, es_info: {text: 'Banana'}, pic: {image: 'banana.png'}}
	];
	fruitSection.setItems(fruitDataSet);
	sections.push(fruitSection);

	var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables / Verduras'});
	var vegDataSet = [
	    { info: {text: 'Carrot'}, es_info: {text: 'Zanahoria'}, pic: {image: 'carrot.png'}},
	    { info: {text: 'Potato'}, es_info: {text: 'Patata'}, pic: {image: 'potato.png'}}
	];
	vegSection.setItems(vegDataSet);
	sections.push(vegSection);

	var grainSection = Ti.UI.createListSection({ headerTitle: 'Grains / Granos'});
	var grainDataSet = [
	    { info: {text: 'Corn'}, es_info: {text: 'Maiz'}, pic: {image: 'corn.png'}},
	    { info: {text: 'Rice'}, es_info: {text: 'Arroz'}, pic: {image: 'rice.png'}}
	];
	grainSection.setItems(grainDataSet);
	sections.push(grainSection);

	listView.setSections(sections);

	return listView;
	/*win.add(listView);
	win.open();*/
}


function Main () {
	Titanium.UI.setBackgroundColor('#000');

	var thingsSeriesData=[];
	 

	
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

	
	var list = fnRisk();
	win2.add(list);

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

	tab3.addEventListener('focus',function(){
		/**
	  * Hospitals
	  */
	 
	connectServer({
	 url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/',
	 extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
	 token: Titanium.App.Properties.getString("token"),
	 success: function (response) {
	  var object;
	  
	  if (typeof response === "string") {
	   object = JSON.parse(response);
	  } else {
	   object = response;
	  }
	  console.log(object);
	  getFields(object)
	  
	  //var tabGroup = require('/ui/ios/iphone/tabGroup');
	  //var instance = new tabGroup().open();
	  
	 },
	 failure: function () {
	  Ti.API.info("Something was wrong ...");
	 }
	});

		var data = JSON.stringify({
				        chart: {
				            type: 'pie',
				            options3d: {
				                enabled: true,
				                alpha: 45,
				                beta: 0
				            }
				        },
				        title: {
				            text: 'Things List'
				        },
				        tooltip: {
				            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				        },
				        plotOptions: {
				            pie: {
				                allowPointSelect: true,
				                cursor: 'pointer',
				                depth: 35,
				                dataLabels: {
				                    enabled: true,
				                    format: '{point.name}'
				                }
				            }
				        },
				        series: [{
				            type: 'pie',
				            name: 'Promedio',
				            data: [
				                ['Things 1',   45.0],
				                ['Things 2',       26.8],
				                {
				                    name: 'Things 3',
				                    y: 12.8,
				                    sliced: true,
				                    selected: true
				                },
				                ['Things 4',    8.5],
				                ['Things 5',     6.2],
				                ['Others',   0.7]
				            ]
				        }]
				    });
		/*data = JSON.stringify({
			url: 'http://one.hackiot.com:8080/riot-core-services/api/thing/',
			method: "POST",
	 		extra: 'parent,group,group.groupType,thingType,thingType.children,thingType',
	 		apiKey: Ti.API.info(Titanium.App.Properties.getString("apiKey"))
		});*/
		webview3.evalJS('dataCharts('+ "'"+data+"'"+');');

		//webview3.evalJS('dataCharts('+ datas +');');

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