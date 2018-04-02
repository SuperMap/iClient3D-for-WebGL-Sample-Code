function onload(Cesium) {
    //地球初始化为圆球，X、Y、Z半径均设为6378137米
    Cesium.Ellipsoid.WGS84 = Cesium.freezeObject(new Cesium.Ellipsoid(6378137.0, 6378137.0, 6378137.0));
    var viewer = new Cesium.Viewer('cesiumContainer',{
        terrainProvider : new Cesium.CesiumTerrainProvider({
            url : URL_CONFIG.STK,//STK World Terrain地形服务地址
            requestWaterMask : true,
            requestVertexNormals : true
        })
    });
    //measure start----------------------
    var handlerDis,handlerArea,handlerHeight;
    Sandcastle.addToolbarButton('测距', function() {
        deactiveAll();
        handlerDis && handlerDis.activate();
    });
    Sandcastle.addToolbarButton('测面', function() {
        deactiveAll();
        handlerArea && handlerArea.activate();

    });
    Sandcastle.addToolbarButton('测高', function() {
        deactiveAll();
        handlerHeight && handlerHeight.activate();

    });
    Sandcastle.addToolbarButton('清除', function() {
        clearAll();
    });
    function clearAll(){
        handlerDis  && handlerDis.clear();
        handlerArea  && handlerArea.clear();
        handlerHeight && handlerHeight.clear();
    }
    function deactiveAll(){
        handlerDis  && handlerDis.deactivate();
        handlerArea  && handlerArea.deactivate();
        handlerHeight && handlerHeight.deactivate();
    }
    function isMeasuring(){
        return (handlerArea && handlerArea.active) || (handlerDis && handlerDis.active) || (handlerHeight && handlerHeight.active);
    }
    handlerDis = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.Distance);
    handlerDis.measureEvt.addEventListener(function(result){
        var distance = result.distance > 1000 ? (result.distance/1000).toFixed(2) + 'km' : result.distance + 'm';
        handlerDis.disLabel.text = '空间距离:' + distance;
    });
    handlerDis.activeEvt.addEventListener(function(isActive){
        if(isActive == true){
            $('body').removeClass('measureCur').addClass('measureCur');
        }
        else{
            $('body').removeClass('measureCur');
        }
    });

    handlerArea = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.Area);
    handlerArea.measureEvt.addEventListener(function(result){
        var area = result.area > 1000000 ? result.area/1000000 + 'km²' : result.area + '㎡'
        handlerArea.areaLabel.text = '面积:' + area;
    });
    handlerArea.activeEvt.addEventListener(function(isActive){
        if(isActive == true){
            $('body').removeClass('measureCur').addClass('measureCur');
        }
        else{
            $('body').removeClass('measureCur');
        }
    });

    handlerHeight = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.DVH);
    handlerHeight.measureEvt.addEventListener(function(result){
        var distance = result.distance > 1000 ? (result.distance/1000).toFixed(2) + 'km' : result.distance + 'm';
        var vHeight = result.verticalHeight > 1000 ? (result.verticalHeight/1000).toFixed(2) + 'km' : result.verticalHeight + 'm';
        var hDistance = result.horizontalDistance > 1000 ? (result.horizontalDistance/1000).toFixed(2) + 'km' : result.horizontalDistance + 'm';
        handlerHeight.disLabel.text = '空间距离:' + distance;
        handlerHeight.vLabel.text = '垂直高度:' + vHeight;
        handlerHeight.hLabel.text = '水平距离:' + hDistance;
    });
    handlerHeight.activeEvt.addEventListener(function(isActive){
        if(isActive == true){
            $('body').removeClass('measureCur').addClass('measureCur');
        }
        else{
            $('body').removeClass('measureCur');
        }
    });
    //measure end-----------------------

    var imageryLayers = viewer.imageryLayers;
    var provider = new Cesium.SuperMapImageryProvider({
        url:'https://www.supermapol.com/realspace/services/map-residential/rest/maps/residential'//地图服务地址
    });
    var imagery = imageryLayers.addImageryProvider(provider);
    //相机飞向地图服务图层区域
    //viewer.flyTo(imagery);
    viewer.scene.camera.setView({
        destination : new Cesium.Cartesian3(-2174088.7268437822,4378310.68391495,4098463.8357333713),
        orientation : {
            heading : 6.246791780084493 ,
            pitch : -0.4378028572409036 ,
            roll : 6.283185307179499
        }
    });
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    var highlightEntity;
    handler.setInputAction(function(evt){
        if(isMeasuring()){
            return ;
        }
        var scene = viewer.scene;
        //获取鼠标点击点的笛卡尔坐标
        var cartesian = scene.pickPosition(evt.position);
        if(cartesian){
            //将屏幕笛卡尔坐标转换为经纬度坐标
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var lon = Cesium.Math.toDegrees(cartographic.longitude);
            var lat = Cesium.Math.toDegrees(cartographic.latitude);
            var point = new SuperMap.Geometry.Point(lon, lat);
            //计算拾取点的范围
            point.calculateBounds();
            var defered = Cesium.when.defer();
            //设置几何查询服务参数
            var parameter = {
                lon : lon,
                lat : lat,
                url : 'https://www.supermapol.com/realspace/services/map-residential/rest/maps/residential',
                dataset : 'residential@residential'//数据源格式：“数据集@数据源”
            };
            //发送几何查询服务，获取polygon的geometry，再转换为Cesium的polygon entity,从而实现高亮显示
            var promise = Query.queryByGeometry(Cesium,defered,parameter);
            Cesium.when(promise,function(res){
                if(res && res.feature && res.entity){
                    if(highlightEntity){
                        highlightEntity = viewer.entities.remove(highlightEntity);
                    }
                    highlightEntity = viewer.entities.add(res.entity);
                    console.log(res.feature);//

                }
            },function(){
                if(highlightEntity){
                    highlightEntity = viewer.entities.remove(highlightEntity);
                }
            });
        }
    },Cesium.ScreenSpaceEventType.LEFT_CLICK);
}