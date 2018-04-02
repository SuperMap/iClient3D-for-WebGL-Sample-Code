var Query = {
    queryByGeometry : function(Cesium,defered,parameter){
        var lon = parameter.lon;
        var lat = parameter.lat
        var url = parameter.url;
        var dataset = parameter.dataset;
        if(!lon || !lat || !url || !dataset){
            return;
        }
        var geometry = new SuperMap.Geometry.Point(lon, lat);
        geometry.calculateBounds();
        var queryParam, queryByGeometryParameters, queryService;
        queryParam = new SuperMap.REST.FilterParameter({name: dataset});
        queryByGeometryParameters = new SuperMap.REST.QueryByGeometryParameters({
            queryParams: [queryParam],
            geometry: geometry,
            spatialQueryMode: SuperMap.REST.SpatialQueryMode.INTERSECT,
            returnCustomResult:true
        });
        queryService = new SuperMap.REST.QueryByGeometryService(url);
        queryService.events.on({
            "processCompleted": function(queryEventArgs){
                var resultSet = queryEventArgs.result.recordsets;
                if(resultSet.length){
                    var features = resultSet[0].features;
                    if(features.length){
                        var points = features[0].geometry.getVertices();
                        var arr = [];
                        for(var i = 0,j = points.length;i < j;i++){
                            var p = points[i];
                            arr.push(Cesium.Cartesian3.fromDegrees(p.x, p.y));
                        }
                        var hierarchy = {
                            positions : arr
                        };
                        var entityObj = {
                            polygon : {
                                hierarchy : hierarchy,
                                material : Cesium.Color.BLUE.withAlpha(0.3)
                            }
                        };
                        var res = {
                            entity : entityObj,
                            feature : features[0].data
                        };
                        return defered.resolve(res);
                    }

                }
                return defered.reject('查询结果集为空');

            },
            'processFailed' : function(){
                return  defered.reject('查询失败');
            }
        });
        queryService.processAsync(queryByGeometryParameters);
        return defered;
    }
};
