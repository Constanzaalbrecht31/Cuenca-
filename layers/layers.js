var wms_layers = [];

var lyr_Hillshade_SRTM_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade_SRTM<br />\
    <img src="styles/legend/Hillshade_SRTM_0_0.png" /> 0<br />\
    <img src="styles/legend/Hillshade_SRTM_0_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hillshade_SRTM_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7858809.898491, -3519546.119039, -7809369.352256, -3479691.541504]
        })
    });
var format_Cuencas_1 = new ol.format.GeoJSON();
var features_Cuencas_1 = format_Cuencas_1.readFeatures(json_Cuencas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_1.addFeatures(features_Cuencas_1);
var lyr_Cuencas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencas_1, 
                style: style_Cuencas_1,
                popuplayertitle: 'Cuencas',
                interactive: true,
    title: 'Cuencas<br />\
    <img src="styles/legend/Cuencas_1_0.png" /> <br />\
    <img src="styles/legend/Cuencas_1_1.png" /> Despensa<br />\
    <img src="styles/legend/Cuencas_1_2.png" /> Escorias<br />\
    <img src="styles/legend/Cuencas_1_3.png" /> Lechuzas<br />\
    <img src="styles/legend/Cuencas_1_4.png" /> Tapalcas<br />' });
var format_Zonal_Statistics_2 = new ol.format.GeoJSON();
var features_Zonal_Statistics_2 = format_Zonal_Statistics_2.readFeatures(json_Zonal_Statistics_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonal_Statistics_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonal_Statistics_2.addFeatures(features_Zonal_Statistics_2);
var lyr_Zonal_Statistics_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonal_Statistics_2, 
                style: style_Zonal_Statistics_2,
                popuplayertitle: 'Zonal_Statistics',
                interactive: true,
    title: 'Zonal_Statistics<br />\
    <img src="styles/legend/Zonal_Statistics_2_0.png" /> Despensa<br />\
    <img src="styles/legend/Zonal_Statistics_2_1.png" /> Escorias<br />\
    <img src="styles/legend/Zonal_Statistics_2_2.png" /> Lechuzas<br />\
    <img src="styles/legend/Zonal_Statistics_2_3.png" /> Tapalcas<br />\
    <img src="styles/legend/Zonal_Statistics_2_4.png" /> <br />' });
var format_Cauces_3 = new ol.format.GeoJSON();
var features_Cauces_3 = format_Cauces_3.readFeatures(json_Cauces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cauces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cauces_3.addFeatures(features_Cauces_3);
var lyr_Cauces_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cauces_3, 
                style: style_Cauces_3,
                popuplayertitle: 'Cauces',
                interactive: true,
                title: '<img src="styles/legend/Cauces_3.png" /> Cauces'
            });

lyr_Hillshade_SRTM_0.setVisible(true);lyr_Cuencas_1.setVisible(true);lyr_Zonal_Statistics_2.setVisible(true);lyr_Cauces_3.setVisible(true);
var layersList = [lyr_Hillshade_SRTM_0,lyr_Cuencas_1,lyr_Zonal_Statistics_2,lyr_Cauces_3];
lyr_Cuencas_1.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', 'Cuenca': 'Cuenca', });
lyr_Zonal_Statistics_2.set('fieldAliases', {'id': 'id', 'Cuenca': 'Cuenca', 'VALUE': 'VALUE', 'fid': 'fid', 'max': 'Altura Maxima', 'mean': 'Altitud Promedio', 'min': 'Altura minima', 'stdDev': 'Desviacion Estandar', });
lyr_Cauces_3.set('fieldAliases', {'fid': 'fid', 'BASIN': 'BASIN', 'UP_ELEV': 'UP_ELEV', 'DN_ELEV': 'DN_ELEV', 'LENGTH': 'LENGTH', 'AVG_SLOPE': 'AVG_SLOPE', });
lyr_Cuencas_1.set('fieldImages', {'fid': 'TextEdit', 'VALUE': 'TextEdit', 'Cuenca': 'TextEdit', });
lyr_Zonal_Statistics_2.set('fieldImages', {'id': 'TextEdit', 'Cuenca': 'TextEdit', 'VALUE': 'TextEdit', 'fid': 'Range', 'max': 'Range', 'mean': 'TextEdit', 'min': 'Range', 'stdDev': 'TextEdit', });
lyr_Cauces_3.set('fieldImages', {'fid': 'TextEdit', 'BASIN': 'TextEdit', 'UP_ELEV': 'TextEdit', 'DN_ELEV': 'TextEdit', 'LENGTH': 'TextEdit', 'AVG_SLOPE': 'TextEdit', });
lyr_Cuencas_1.set('fieldLabels', {'fid': 'no label', 'VALUE': 'inline label - always visible', 'Cuenca': 'no label', });
lyr_Zonal_Statistics_2.set('fieldLabels', {'id': 'no label', 'Cuenca': 'inline label - always visible', 'VALUE': 'no label', 'fid': 'no label', 'max': 'inline label - always visible', 'mean': 'inline label - always visible', 'min': 'inline label - always visible', 'stdDev': 'no label', });
lyr_Cauces_3.set('fieldLabels', {'fid': 'no label', 'BASIN': 'inline label - always visible', 'UP_ELEV': 'inline label - always visible', 'DN_ELEV': 'inline label - always visible', 'LENGTH': 'inline label - always visible', 'AVG_SLOPE': 'no label', });
lyr_Cauces_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});