var cesiumWidget = new Cesium.Viewer("cesiumContainer", {
  baseLayerPicker : false,  //デフォルトのレイヤ切り替えウィジェットをオフにする
  timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
  animation : false         //デフォルトのアニメーションウィジェットをオフにする
});

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.6721684, 35.7052493, 50000),
  orientation: {
    heading: 0, // 水平方向の回転
    pitch: -Cesium.Math.PI_OVER_TWO, // 垂直方向の回転 上を見上げたり下を見下ろしたり
    roll: 0
  }
});

viewer.dataSources.add(Cesium.KmlDataSource.load('Source/MinamiOsawa-restroom.kml'),{
         camera: viewer.scene.camera,
         canvas: viewer.scene.canvas
});
