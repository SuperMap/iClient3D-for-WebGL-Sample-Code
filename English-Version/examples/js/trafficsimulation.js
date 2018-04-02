   function onload(Cesium) {
        var viewer = new Cesium.Viewer('cesiumContainer');
        var scene = viewer.scene;
        $('#loadingbar').remove();
       var promise = scene.open('http://support.supermap.com.cn:8090/iserver/services/3D-CBD/rest/realspace');
       Cesium.when(promise,function(layer){
           scene.camera.setView({
               destination : new Cesium.Cartesian3(-2178725.6430165893,4380702.400924192,4091883.8564182515),
               orientation : {
                   heading : 1.5269481203936772,
                   pitch : -0.360835493231549,
                   roll : 6.283185307179563
               }
           });
       });
        var urls = [
            './data/car/qiche1.s3m',
            './data/car/qiche2.s3m',
            './data/car/qiche3.s3m',
            './data/car/qiche4.s3m',
            './data/car/qiche5.s3m',
            './data/car/qiche6.s3m',
            './data/car/qiche7.s3m',
            './data/car/qiche8.s3m',
            './data/car/qiche9.s3m',
            './data/car/qiche10.s3m',
            './data/car/qiche11.s3m',
            './data/car/qiche12.s3m',
            './data/car/qiche13.s3m',
            './data/car/qiche14.s3m',
            './data/car/qiche15.s3m',
            './data/car/qiche16.s3m',
            './data/car/qiche17.s3m',
            './data/car/qiche18.s3m',
        ];
        var Factor = urls.length;
        var keymap = {};
        for(var i = 0;i < Factor;i++){
            var url = urls[i];
            keymap[url] = [];
        }
        var layer = new Cesium.DynamicLayer3D(scene.context,urls);
        scene.primitives.add(layer);
        doSqlQuery();
        function onQueryComplete(queryEventArgs){
            var routes = queryEventArgs.originResult.features;
            var featureCount = queryEventArgs.originResult.features.length;
            var objects = [];
            var startRoads = [];
            var allRoads = {};
            for (var i = 0; i < featureCount; i++){
                var line = routes[i];
                var point3ds = line.geometry.points;
                var isStart = line.fieldValues[12];
                var id = line.fieldValues[0];
                var road = {
                    points : point3ds,
                    id : id,
                    linkRoads : []
                };
                if(isStart == 'true'){
                    startRoads.push(road);
                }
                allRoads[id] = road;
            }
            for(var key in allRoads){
                var sr = allRoads[key];
                var ep = sr.points[sr.points.length - 1];
                for(var key2 in  allRoads){
                    var or = allRoads[key2];
                    var sp = or.points[0];
                    if(ep.x == sp.x && ep.y == sp.y && ep.z == sp.z){
                        sr.linkRoads.push(or.id);
                    }
                }
            }


            function connectRoads(lines){
                var result = [];
                for(var i = 0,j = lines.length;i < j;i++){
                    var line = lines[i];
                    var allPts = [];
                    var pts = line.points;
                    allPts = [].concat(pts);

                    while(line.linkRoads.length){
                        var id = line.linkRoads[0];
                        line = allRoads[id];
                        var pts = line.points;
                        var newPts = pts.slice(0);
                        allPts = allPts.concat(newPts);
                    }

                    result.push(allPts);
                }
                return result;
            }

            var connectedLines = connectRoads(startRoads);

            var count = connectedLines.length;

            for(var i = 0;i < count;i++){
                var points = connectedLines[i];
                for(var j = 0;j < Factor;j++){
                    var url = urls[j];
                    var len = points.length;
                    var index = Math.floor(Math.random()*(len - 1));
                    var half = len / 2;
                    var dir = true;
                    if(j == 0){
                        index = 0;
                        dir = true;
                    }

                    var point = points[index];

                    if(!point){
                        continue;
                    }

                    var state = new Cesium.DynamicObjectState({
                        longitude : point.x,
                        latitude : point.y,
                        altitude : point.z,
                        scale : new Cesium.Cartesian3(1,1,1)
                    });

                    objects.push({
                        state : state,
                        dir : dir,
                        index : index,
                        origin : index
                    });

                    keymap[url].push(state);
                }
            }

            setInterval(function() {
                var m = 0;
                for(var i = 0;i < count;i++){
                    var points = connectedLines[i];
                    if(points.length == 0){
                        m++;
                        continue;
                    }
                    for(j = 0;j < Factor;j++){
                        var url = urls[j];
                        var obj = objects[(i-m)*Factor+j];
                        var state = obj.state;
                        var dir = obj.dir;
                        var point;
                        if(dir){
                            obj.index += 1;
                            point = points[obj.index];
                            if(!point){

                                layer.clear(url,i);
                                obj.index = obj.origin;
                                point = points[obj.index];
                            }
                        }
                        else{
                            obj.index -= 1;
                            point = points[obj.index];
                            if(!point){
                                obj.index = obj.origin;
                                point = points[obj.index];
                            }
                        }
                        state.longitude = point.x;
                        state.latitude = point.y;
                        state.altitude = point.z;
                    }
                }
                for(var key in keymap){
                    layer.updateObjectWithModel(key,keymap[key]);
                }
            }, 200);
            layer.updateInterval = 200;
        }


        function doSqlQuery(){
            var getFeatureParam, getFeatureBySQLService, getFeatureBySQLParams;

            getFeatureParam = new SuperMap.REST.FilterParameter({
                attributeFilter: "SMID>0"
            });
            getFeatureBySQLParams = new SuperMap.REST.GetFeaturesBySQLParameters({
                queryParameter: getFeatureParam,
                toIndex:426,
                datasetNames: ["CBD车道:" + "车道三维"]
            });
            var url = 'http://www.supermapol.com/realspace/services/data-road/rest/data';
            getFeatureBySQLService = new SuperMap.REST.GetFeaturesBySQLService(url, {
                eventListeners: {"processCompleted": onQueryComplete, "processFailed": processFailed}});
            getFeatureBySQLService.processAsync(getFeatureBySQLParams);
        }

        function processFailed(queryEventArgs){
            console.log('查询失败!');
        }

   }