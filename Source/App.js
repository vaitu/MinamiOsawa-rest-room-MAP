var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
  
  timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
  animation : false         //デフォルトのアニメーションウィジェットをオフにする
});

var dataSources = new Cesium.DataSourceCollection();

var dataSourceDisplay = new Cesium.DataSourceDisplay({
    scene: cesiumWidget.scen,
    dataSourceCollection: dataSources
});

cesiumWidget.scene.preRender.addEventListener(function(scene, time){
    dataSourceDisplay.updata(time);
});

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.6721684, 35.7052493, 50000),
  orientation: {
    heading: 0, // 水平方向の回転
    pitch: -Cesium.Math.PI_OVER_TWO, // 垂直方向の回転 上を見上げたり下を見下ろしたり
    roll: 0
  }
});

dataSources.add(Cesium.KmlDataSource.load('Source/MinamiOsawa-restroom.kml'));
