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
};

module.exports = thinkRisk;