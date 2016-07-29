var cesiumWidget = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.KmlDataSource.load('Source/MinamiOsawa-restroom.kml'),{
         camera: viewer.scene.camera,
         canvas: viewer.scene.canvas
});
