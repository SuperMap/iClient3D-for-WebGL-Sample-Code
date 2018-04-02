/**
 * Created by Vampire on 2017/8/11.
 */
function onload(Cesium) {
    var viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider:new Cesium.SingleTileImageryProvider({
            url : 'images/BlackMarble_2016_3km1.jpg'
            //url : ''
        }),
        infoBox : false
    });
    var scene = viewer.scene;
    scene.postRender.addEventListener(function(){
        var colc = viewer.scene.primitives;
        var tt = 0;
    });
    scene.globe.enableLighting=true;
    //移除logo
    var credit=viewer.scene.frameState.creditDisplay;
    credit.container.removeChild(credit._imageContainer);
    ////航线
    {
        var modelTime;
        var camera = scene.camera;
        var url1 = './SampleData/models/AirPlane.s3m';
        var layer = new Cesium.DynamicLayer3D(scene.context,url1);
        scene.primitives.add(layer);
        var airport_songxiang;
        var dir = "dep";
        var fn={};
        var arr = [];
        var objects = [];
        var objects2 = [];
        var index;
        var flag=0;
        var airportData=[];
        var jsonData;
        Cesium.loadJson('data/GlobalFlight.json').then(function(data) {
            jsonData = data;
            setTimeout(function(){
                var url = decodeURI(document.URL);
                var value = url.split("?")[1];
                switch (value)
                {
                    case "北京首都":
                        airport_songxiang = "PEK";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                    case "约翰内斯堡":
                        airport_songxiang = "JNB";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                    case "圣保罗":
                        airport_songxiang = "GRU";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                    case "荷兰阿姆斯特丹斯史基浦":
                        airport_songxiang = "AMS";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                    case "悉尼金斯福德":
                        airport_songxiang = "SYD";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                    case "洛杉矶":
                        airport_songxiang = "LAX";
                        StartFly_SONGXIANG(airport_songxiang);
                        break;
                }
            },100);
            /////////
        }).otherwise(function(error) {
            console.log(error);
        });

    
        function LoadPlaceEntity() {
            var entityPEK =new Cesium.Entity({
                name : "北京首都",
                position :  Cesium.Cartesian3.fromDegrees(116.5871, 40.078537,100000),
                label : {
                    text : "北京",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            var entityJNB =new Cesium.Entity({
                name : "约翰内斯堡",
                position :  Cesium.Cartesian3.fromDegrees(28.231314, -26.132664,100000),
                label : {
                    text : "约翰内斯堡",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            var entityGRU =new Cesium.Entity({
                name : "圣保罗",
                position :  Cesium.Cartesian3.fromDegrees(-46.481926, -23.425669,100000),
                label : {
                    text : "圣保罗",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            var entityAMS =new Cesium.Entity({
                name : "荷兰阿姆斯特丹斯史基浦",
                position :  Cesium.Cartesian3.fromDegrees(4.763385, 52.30907,100000),
                label : {
                    text : "阿姆斯特丹",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            var entitySYD =new Cesium.Entity({
                name : "悉尼金斯福德",
                position :  Cesium.Cartesian3.fromDegrees(151.1799, -33.932922,100000),
                label : {
                    text : "悉尼",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            var entityLAX =new Cesium.Entity({
                name : "洛杉矶",
                position :  Cesium.Cartesian3.fromDegrees(-118.40828, 33.943398,100000),
                label : {
                    text : "洛杉矶",
                    font : '24px Helvetica',
                    fillColor : Cesium.Color.SKYBLUE,
                    outlineColor : Cesium.Color.BLACK,
                    outlineWidth : 2,
                    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),

                }
            });
            viewer.entities.add(entityPEK);
            viewer.entities.add(entityJNB);
            viewer.entities.add(entityGRU);
            viewer.entities.add(entityAMS);
            viewer.entities.add(entitySYD);
            viewer.entities.add(entityLAX);
        }
        function StartFly_SONGXIANG(airport_songxiang) {
            flag=0;
            if(airportData.length>0){
                airportData.length=0;
            }
            for(var j=0;j<jsonData.length;j++){

                if (dir=="dep"){
                    if(jsonData[j][0]==airport_songxiang){
                        airportData.push(jsonData[j]);
                    }
                }
                if (dir=="arr"){
                    if(jsonData[j][1]==airport_songxiang)
                    {
                        airportData.push(jsonData[j]);
                    }
                }
            }
            for(i=0;i<airportData.length;i++){
                layer.clear(url1,i);
            }
            index=1;
            viewer.entities.removeAll();
            createPolyLine(airportData,dir);
        }
        function addBezier(pointA, pointB, height,num) {
            var earth = Cesium.Ellipsoid.WGS84;
            var startPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(parseFloat(pointA[0]),parseFloat(pointA[1]), 0.0));
            var endPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(parseFloat(pointB[0]), parseFloat(pointB[1]), 0.0));
            // determine the midpoint (point will be inside the earth)
            var addCartesian = startPoint.clone();
            Cesium.Cartesian3.add(startPoint, endPoint, addCartesian);
            var midpointCartesian = addCartesian.clone();
            Cesium.Cartesian3.divideByScalar(addCartesian, 2, midpointCartesian);
            // move the midpoint to the surface of the earth
            earth.scaleToGeodeticSurface(midpointCartesian);
            // add some altitude if you want (1000 km in this case)
            var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);
            midpointCartographic.height = height;
            midpointCartesian = earth.cartographicToCartesian(midpointCartographic);
            var spline = new Cesium.CatmullRomSpline({
                times: [0.0, 0.5, 1.0],
                points: [
                    startPoint,
                    midpointCartesian,
                    endPoint
                ]
            });
            var polylinePoints = [];
            for (var ii = 0; ii < num; ++ii) {
                polylinePoints.push(spline.evaluate(ii / num));
            }
            return polylinePoints;
        }
        /////////
        var EARTH_RADIUS = 6378137.0;    //单位M
        var PI = Math.PI;
        function getRad(d){
            return d*PI/180.0;
        }
        function getGreatCircleDistance(lat1,lng1,lat2,lng2){
            var radLat1 = getRad(lat1);
            var radLat2 = getRad(lat2);

            var a = radLat1 - radLat2;
            var b = getRad(lng1) - getRad(lng2);

            var s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
            s = s*EARTH_RADIUS;
            s = Math.round(s*10000)/10000.0;
            return s;
        }

        function createPolyLine(data,mode){
            var num=100;
            objects.length=0;
            objects2.length = 0;
            var flightline1 =[];
            var flightline2 = [];
            var testobjects = [];
            var pntArrays = [];
            var polylineEntities = [];

            var i;
            if(mode=="dep"){
                var p=data[0][0];
            }
            else if(mode=="arr"){

                var p=data[0][1]
            }
            else{
                flag=1;
                num=30;
            }
            if(airport_songxiang == 'PEK'){
                //北京首都机场
                viewer.camera.flyTo({
                    destination:new Cesium.Cartesian3(-4173152.489959189, 4263203.158324634,5483797.632401266),
                    orientation:{
                        heading : 4.609927363785777,
                        pitch : -0.79568893517928,
                        roll : 9.00879371101837e-12
                    },
                    duration:3,
                });
            }
            else if(airport_songxiang == 'JNB'){
                //约翰内斯堡机场
                viewer.camera.flyTo({
                    destination:new Cesium.Cartesian3(5576052.377930201, 2749479.8437809222,-4460750.550607387),
                    orientation:{
                        heading : 0.18530089695404683,
                        pitch : -0.820505955660976,
                        roll : 2.8332891588433995e-12
                    },
                    duration:3,
                });
            }
            else if(airport_songxiang == 'GRU'){
                //圣保罗机场
                viewer.camera.flyTo({
                    destination:new Cesium.Cartesian3(5012703.389637421, -4577025.234859512,-4375669.1295922855),
                    orientation:{
                        heading : 6.040202789851907,
                        pitch : -0.9539663351560614,
                        roll : 1.6081003195722587e-10
                    },
                    duration:3,
                });
            }
            else if(airport_songxiang == 'AMS'){
                //荷兰阿姆斯特丹斯史基浦机场
                viewer.camera.flyTo({
                    destination:new Cesium.Cartesian3(5537657.446263651, 328080.5918264813,5022754.9523508875),
                    orientation:{
                        heading : 6.2674400179950185,
                        pitch : -0.7380148398747899,
                        roll : 6.283185307179586
                    },
                    duration:3,
                });
            }
            else if(airport_songxiang == 'SYD'){
                //悉尼金斯福德·史密斯机场
                viewer.camera.flyTo({
                    destination:new Cesium.Cartesian3(-4832876.244551898, 2555163.3721805946,-5533148.684913205),
                    orientation:{
                        heading :6.238090980371744,
                        pitch : -0.6613851462073499,
                        roll : 6.283185307156497,
                    },
                    duration:3,
                });
            }
            else if(airport_songxiang == 'LAX'){
                //洛杉矶机场
                viewer.camera.flyTo({
                    destination : new Cesium.Cartesian3(-3155142.5766611677,-5569927.204097198,3464957.919422167),
                    orientation : {
                        heading : 0.2821914006768633,
                        pitch :-0.85352571786412,
                        roll : 6.2831853070750245
                    },
                    duration:3,
                });
            }

            for (i = 0; i < data.length; i++) {
                var dep = data[i][0];
                var arr = data[i][1];
                var pointA = geoCoordMap[dep];
                var pointB = geoCoordMap[arr];
                if (pointA && pointB) {
                    var origin = [parseFloat(pointA[0]), parseFloat(pointA[1])];
                    var destination = [parseFloat(pointB[0]), parseFloat(pointB[1])];
                    var dis = getGreatCircleDistance(origin[1], origin[0], destination[1], destination[0]);
                    var pntArray = addBezier(origin, destination, dis/7,num);
                    var pointA1 = earth.cartesianToCartographic(pntArray[0]);
                    var pointB1 = earth.cartesianToCartographic(pntArray[1]);
                    Cesium.Math.toDegrees(pointA1.longitude);
                    var origin1 = [parseFloat(Cesium.Math.toDegrees(pointA1.longitude)),parseFloat(Cesium.Math.toDegrees(pointA1.latitude))];
                    var destination1 = [parseFloat(Cesium.Math.toDegrees(pointB1.longitude)),parseFloat(Cesium.Math.toDegrees(pointB1.latitude))];
                    var dis1 =getGreatCircleDistance(origin1[1], origin1[0], destination1[1], destination1[0]);
                    var pntArray1 = addBezier(origin1, destination1, dis1/7,num);
                    pntArray.splice(1,0,pntArray1[1]);

                    if(mode=="dep"){

                        var color = new Cesium.Color(47/255, 79/255, 79/255,0.6);
                        viewer.entities.add({
                            position : Cesium.Cartesian3.fromDegrees(destination[0], destination[1]),
                            point : {
                                pixelSize : 2,
                                color : new Cesium.Color(0, 1, 1)
                            }
                        });
                    }
                    else if(mode=="arr") {
                        var color = new Cesium.Color(51/255, 153/255, 255/255,0.6);
                        viewer.entities.add({
                            position : Cesium.Cartesian3.fromDegrees(origin[0], origin[1]),
                            point : {
                                pixelSize : 5,
                                color : new Cesium.Color(1, 0, 1)
                            }
                        });
                    }
                    else if(mode="all"){
                        var color=new Cesium.Color(0.2,0.9,0.8,0.8);
                    }
                    if(data[i][4]){
                        data[i].pop();
                    }
                    if(flightline1.length<20){
                        if(dis>1500000) {
                            flightline1.push(pntArray);
                            dynamiclayer(pntArray);

                            var entity = new Cesium.Entity();
                            entity.dep = dep;
                            entity.arr = arr;
                            entity.bezier = new
                            Cesium.ConstantProperty(true);
                            entity.bezier = true;
                            entity.polyline = {
                                positions: pntArray,
                                width: 1,
                                material: color
                            };
                            entity.description = pointA[2] + '-' + pointB[2] + "     " + "  Distance:   " + dis / 1000 + " KM";
                            viewer.entities.add(entity);
                            polylineEntities.push(entity);
                        }
                    }
                    else
                    {
                        break;
                    }
                }

            }
            if (mode=="all"){
                return;
            }
            else {
                    layer.updateObjectWithModel(url1,objects);
                    var index2 = 7;
                    index= 1;
                    modelTime = setInterval(function () {
                        if (flag == 0) {
                            if (index > 220) {
                                index = 1;
                                //layer.clear();
                            }
                            for (i = 0; i < flightline1.length; i++) {
                                var state = objects[i];
                                var state19 = objects[i + objects.length/3];
                                var state39 = objects[i + objects.length*2/3];
                                var p =  flightline1[i];
                                if(index<120) {
                                    if(index>=0)
                                    {
                                        var newindex = index -i;
                                        if(newindex>0&&newindex<100)
                                        {
                                            var point = earth.cartesianToCartographic(p[newindex]);
                                            state.longitude = Cesium.Math.toDegrees(point.longitude);
                                            state.latitude = Cesium.Math.toDegrees(point.latitude);
                                            state.altitude = point.height;
                                            state.scale = new Cesium.Cartesian3(1000,1000,1000);
                                        }
                                        else {
                                            var point = earth.cartesianToCartographic(p[0]);
                                            state.longitude = Cesium.Math.toDegrees(point.longitude);
                                            state.latitude = Cesium.Math.toDegrees(point.latitude);
                                            state.altitude = point.height;
                                            state.scale = new Cesium.Cartesian3(1, 1, 1);
                                        }
                                    }
                                }
                                else
                                {
                                    state.scale = new Cesium.Cartesian3(1,1,1);
                                }
                                if(index>49 && index<170) {
                                    if((index-50)>=0){
                                        var newindex = index -i -50;
                                        if(newindex>0&&newindex<100)
                                        {
                                            var point19 = earth.cartesianToCartographic(p[newindex]);
                                            state19.longitude = Cesium.Math.toDegrees(point19.longitude);
                                            state19.latitude = Cesium.Math.toDegrees(point19.latitude);
                                            state19.altitude = point19.height;
                                            state19.scale = new Cesium.Cartesian3(1000, 1000, 1000);
                                        }
                                        else {
                                            var point19 = earth.cartesianToCartographic(p[0]);
                                            state19.longitude = Cesium.Math.toDegrees(point19.longitude);
                                            state19.latitude = Cesium.Math.toDegrees(point19.latitude);
                                            state19.altitude = point19.height;
                                            state19.scale = new Cesium.Cartesian3(1,1,1);
                                        }
                                    }
                                }
                                else
                                {
                                    state19.scale = new Cesium.Cartesian3(1,1,1);
                                }
                                if(index>99)
                                {
                                    if((index-100)>=0) {
                                        var newindex = index -i -100;
                                        if(newindex>0&&newindex<100)
                                        {
                                            var point39 = earth.cartesianToCartographic(p[newindex]);
                                            state39.longitude = Cesium.Math.toDegrees(point39.longitude);
                                            state39.latitude = Cesium.Math.toDegrees(point39.latitude);
                                            state39.altitude = point39.height;
                                            state39.scale = new Cesium.Cartesian3(1000, 1000, 1000);
                                        }
                                        else {
                                            var point39 = earth.cartesianToCartographic(p[0]);
                                            state39.longitude = Cesium.Math.toDegrees(point39.longitude);
                                            state39.latitude = Cesium.Math.toDegrees(point39.latitude);
                                            state39.altitude = point39.height;
                                            state39.scale = new Cesium.Cartesian3(1,1,1);
                                        }
                                    }
                                }
                                else
                                {
                                    state39.scale = new Cesium.Cartesian3(1,1,1);
                                }
                            }
                            index++;
                            layer.updateObjectWithModel(url1,objects);
                        }
                        else {
                            for(i=0;i<data.length;i++){
                                layer.clear(url1,i);
                            }
                            return;
                        }
                    }, 200);
                    layer.updateInterval = 200;
            }

        }
        ///此范例采用的本地数据，实时数据可以通过代理获得
        //var url="http://localhost:8090/WebGL3D/examples/Proxy.jsp?http://map.variflight.com/api?dep=PEK&isStop=0&isShare=0&isConnect=0&isExtend=0&isAll=1&queryDate=2017-06-13&dataType=1";
        var earth = Cesium.Ellipsoid.WGS84;
        function dynamiclayer(data){
            var p=data[0];
            var point=earth.cartesianToCartographic(p);
            var state = new Cesium.DynamicObjectState({
                longitude : Cesium.Math.toDegrees(point.longitude),
                latitude :  Cesium.Math.toDegrees(point.latitude),
                altitude : point.height,
                scale : new Cesium.Cartesian3(0.1,0.1,0.1)
            });
            var state1 = new Cesium.DynamicObjectState({
                longitude : Cesium.Math.toDegrees(point.longitude),
                latitude :  Cesium.Math.toDegrees(point.latitude),
                altitude : point.height,
                scale : new Cesium.Cartesian3(0.1,0.1,0.1)
            });
            var state2 = new Cesium.DynamicObjectState({
                longitude : Cesium.Math.toDegrees(point.longitude),
                latitude :  Cesium.Math.toDegrees(point.latitude),
                altitude : point.height,
                scale : new Cesium.Cartesian3(0.1,0.1,0.1)
            });
            objects.push(state);
            objects.push(state1);
            objects.push(state2);
        }
        function clone(Obj) {
            var buf;
            if(Obj instanceof Array){
                buf = [];
                var i = Obj.length;
                while(i--){
                    buf[i] = clone(Obj[i]);
                }
                return buf;
            }
            else if(Obj instanceof Object){
                buf = {};
                for(var k in Obj){
                    buf[k] = clone(Obj[k]);
                }
                return buf;
            }
            else {
                return Obj;
            }
        }
    }
}
