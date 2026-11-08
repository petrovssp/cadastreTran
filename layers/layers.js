ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7801").setExtent([264348.995000, 4744167.789000, 270131.828000, 4751123.616000]);
var wms_layers = [];

var format_immovable_0 = new ol.format.GeoJSON();
var features_immovable_0 = format_immovable_0.readFeatures(json_immovable_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_immovable_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_immovable_0.addFeatures(features_immovable_0);
var lyr_immovable_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_immovable_0, 
                style: style_immovable_0,
                popuplayertitle: 'immovable',
                interactive: true,
    title: 'immovable<br />\
    <img src="styles/legend/immovable_0_0.png" /> Горска<br />\
    <img src="styles/legend/immovable_0_1.png" /> Защитена<br />\
    <img src="styles/legend/immovable_0_2.png" /> Земеделска<br />\
    <img src="styles/legend/immovable_0_3.png" /> Територия на транспорта<br />\
    <img src="styles/legend/immovable_0_4.png" /> Територия, заета от води и водни обекти<br />\
    <img src="styles/legend/immovable_0_5.png" /> Урбанизирана<br />' });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });

lyr_immovable_0.setVisible(true);lyr_buildings_1.setVisible(true);
var layersList = [lyr_immovable_0,lyr_buildings_1];
lyr_immovable_0.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'cadimm': 'cadimm', 'cadnum': 'cadnum', 'cadreg': 'cadreg', 'cattype': 'cattype', 'ekatte': 'ekatte', 'ekattefn': 'ekattefn', 'immaddr': 'immaddr', 'oldident': 'oldident', 'parcel': 'parcel', 'place': 'place', 'propcode': 'propcode', 'proptype': 'proptype', 'purpcode': 'purpcode', 'purptype': 'purptype', 'quarname': 'quarname', 'quarter': 'quarter', 'regname': 'regname', 'strename': 'strename', 'strnum': 'strnum', 'usecode': 'usecode', 'usetype': 'usetype', 'validate': 'validate', });
lyr_buildings_1.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'appcount': 'appcount', 'cadbuild': 'cadbuild', 'cadimm': 'cadimm', 'cadnum': 'cadnum', 'cadreg': 'cadreg', 'ekatte': 'ekatte', 'ekattefn': 'ekattefn', 'flrcount': 'flrcount', 'funccode': 'funccode', 'functype': 'functype', 'immaddr': 'immaddr', 'oldident': 'oldident', 'propcode': 'propcode', 'proptype': 'proptype', 'quarname': 'quarname', 'regname': 'regname', 'strename': 'strename', 'strnum': 'strnum', 'validate': 'validate', });
lyr_immovable_0.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'cadimm': 'TextEdit', 'cadnum': 'TextEdit', 'cadreg': 'TextEdit', 'cattype': 'TextEdit', 'ekatte': 'TextEdit', 'ekattefn': 'TextEdit', 'immaddr': 'TextEdit', 'oldident': 'TextEdit', 'parcel': 'TextEdit', 'place': 'TextEdit', 'propcode': 'TextEdit', 'proptype': 'TextEdit', 'purpcode': 'TextEdit', 'purptype': 'TextEdit', 'quarname': 'TextEdit', 'quarter': 'TextEdit', 'regname': 'TextEdit', 'strename': 'TextEdit', 'strnum': 'TextEdit', 'usecode': 'TextEdit', 'usetype': 'TextEdit', 'validate': 'TextEdit', });
lyr_buildings_1.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'appcount': 'TextEdit', 'cadbuild': 'TextEdit', 'cadimm': 'TextEdit', 'cadnum': 'TextEdit', 'cadreg': 'TextEdit', 'ekatte': 'TextEdit', 'ekattefn': 'TextEdit', 'flrcount': 'TextEdit', 'funccode': 'TextEdit', 'functype': 'TextEdit', 'immaddr': 'TextEdit', 'oldident': 'TextEdit', 'propcode': 'TextEdit', 'proptype': 'TextEdit', 'quarname': 'TextEdit', 'regname': 'TextEdit', 'strename': 'TextEdit', 'strnum': 'TextEdit', 'validate': 'TextEdit', });
lyr_immovable_0.set('fieldLabels', {'id': 'inline label - visible with data', 'area': 'inline label - visible with data', 'perim': 'inline label - visible with data', 'cadimm': 'inline label - visible with data', 'cadnum': 'inline label - visible with data', 'cadreg': 'inline label - visible with data', 'cattype': 'inline label - visible with data', 'ekatte': 'inline label - visible with data', 'ekattefn': 'inline label - visible with data', 'immaddr': 'inline label - visible with data', 'oldident': 'inline label - visible with data', 'parcel': 'inline label - visible with data', 'place': 'inline label - visible with data', 'propcode': 'inline label - visible with data', 'proptype': 'inline label - visible with data', 'purpcode': 'inline label - visible with data', 'purptype': 'inline label - visible with data', 'quarname': 'inline label - visible with data', 'quarter': 'inline label - visible with data', 'regname': 'inline label - visible with data', 'strename': 'inline label - visible with data', 'strnum': 'inline label - visible with data', 'usecode': 'inline label - visible with data', 'usetype': 'inline label - visible with data', 'validate': 'inline label - visible with data', });
lyr_buildings_1.set('fieldLabels', {'id': 'inline label - visible with data', 'area': 'inline label - visible with data', 'perim': 'inline label - visible with data', 'appcount': 'inline label - visible with data', 'cadbuild': 'inline label - visible with data', 'cadimm': 'inline label - visible with data', 'cadnum': 'inline label - visible with data', 'cadreg': 'inline label - visible with data', 'ekatte': 'inline label - visible with data', 'ekattefn': 'inline label - visible with data', 'flrcount': 'inline label - visible with data', 'funccode': 'inline label - visible with data', 'functype': 'inline label - visible with data', 'immaddr': 'inline label - visible with data', 'oldident': 'inline label - visible with data', 'propcode': 'inline label - visible with data', 'proptype': 'inline label - visible with data', 'quarname': 'inline label - visible with data', 'regname': 'inline label - visible with data', 'strename': 'inline label - visible with data', 'strnum': 'inline label - visible with data', 'validate': 'inline label - visible with data', });
lyr_buildings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});