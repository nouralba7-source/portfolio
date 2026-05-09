var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Gecliptmasker_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geclipt (masker)<br />\
    <img src="styles/legend/Gecliptmasker_1_0.png" /> <= 0,4<br />\
    <img src="styles/legend/Gecliptmasker_1_1.png" /> 0,40-0,80<br />\
    <img src="styles/legend/Gecliptmasker_1_2.png" /> 0,80-1,20<br />\
    <img src="styles/legend/Gecliptmasker_1_3.png" /> 1,20-1,60<br />\
    <img src="styles/legend/Gecliptmasker_1_4.png" /> 1,60-2,00<br />\
    <img src="styles/legend/Gecliptmasker_1_5.png" /> 2,00-2,40<br />\
    <img src="styles/legend/Gecliptmasker_1_6.png" /> >2,40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gecliptmasker_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [562431.857616, 6818496.785154, 568132.445156, 6821600.125412]
        })
    });
var format_Demkaterrein_2 = new ol.format.GeoJSON();
var features_Demkaterrein_2 = format_Demkaterrein_2.readFeatures(json_Demkaterrein_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demkaterrein_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Demkaterrein_2.addFeatures(features_Demkaterrein_2);
var lyr_Demkaterrein_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Demkaterrein_2, 
                style: style_Demkaterrein_2,
                popuplayertitle: 'Demkaterrein',
                interactive: true,
                title: '<img src="styles/legend/Demkaterrein_2.png" /> Demkaterrein'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_Gecliptmasker_1.setVisible(true);lyr_Demkaterrein_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Gecliptmasker_1,lyr_Demkaterrein_2];
lyr_Demkaterrein_2.set('fieldAliases', {});
lyr_Demkaterrein_2.set('fieldImages', {});
lyr_Demkaterrein_2.set('fieldLabels', {});
lyr_Demkaterrein_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});