/*var viewCenter = mapCenter ? _self.transform_latlon_to_ol(mapCenter) : [ 0, 0 ];
// define zoomLevel if this exist or is gonna set to 2
zoomLevel = zoomLevel || 2;
// set the min zoom level
var minZoomLevel = 2;

// set layer for the map view.
_self.firstLayer = new ol.layer.Tile({
    id : 1,
    source : new ol.source.OSM()
});

// set center zoom and minZoom where the map is going to be located.
var view = new ol.View({
    center : viewCenter,
    zoom : zoomLevel,
    minZoom : minZoomLevel
});
*/
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: 'sat'})
        })
    ],
    view: new ol.View({
        center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
        zoom: 20
    })
});