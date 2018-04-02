﻿var DemoDescription = {};
//地图
DemoDescription['image'] = {title: 'Local Image', desc: 'Definition: This layer is used to display a single image as a spherical image of the earth, suitable for use in local area networks or specific circumstances, to achieve simultaneous amplification, reduction, translation and other effects.', oper: 'none' };
DemoDescription['tianditu'] = {title: 'Tianditu Image', desc: 'Load the Tianditu image service and superimposes the Chinese annotation service', oper: 'Internet connection is required.' };
DemoDescription['bingMap'] = {title: 'BingMap Image', desc: 'Load the BIngmap image service', oper: 'Internet connection is required.' };
DemoDescription['openstreetMap'] = {title: 'OpenStreetMap Image', desc: 'Load OpenStreetMap image service', oper: 'Internet connection is required.' };
DemoDescription['STKterrain'] = {title: 'STK Terrain Services', desc: 'Load STK global terrain', oper: 'Internet connection is required.' };
DemoDescription['terrainAndImagery'] = {title: 'Terrain Image Layer', desc: 'Load TIN terrain rest services and SCI image rest services', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_jinjiang'] = {title: 'Oblique Photography Model', desc: 'Load S3M format of the Oblique photography model', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_srsb_water'] = {title: 'Salzburg', desc: 'Load S3M format Oblique photography model (Salzburg data), with water surface effect', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_niaochao_water'] = {title: 'Bird Nest', desc: 'Load S3M format fine model (Bird Nest data), with water surface effect', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_jingmo'] = {title: 'CBD Fine Model', desc: 'Load the fine model CBD in S3M format', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_BIM'] = {title: 'BIM Model', desc: 'Load the BIM model in S3M format (Building 8 data)', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_vector'] = {title: 'Vector Model', desc: 'Load S3M format vector model (national provincial data)', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3MTiles_pointCloud'] = {title: 'Point Cloud', desc: 'Load point cloud data', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['S3M3DTexture'] = {title: 'Volume Rendering', desc: '3D texture rendering', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['KML_edit'] = {title: 'GLTF Model', desc: 'Add GLTF model in KML format, and support model editing, including rotation, translation, scaling', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['KML_crane'] = {title: 'Model Animation', desc: 'Add GLTF model in KML format, and support model animation', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['KML_car'] = {title: 'Node Animation', desc: 'Add GLTF model in KML format, and support node animation (Car Move)', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['KML_beijing'] = {title: 'Route Labeling', desc: 'Add Route Labeling in KML format', oper: 'none' };
DemoDescription['Polygon'] = {title: 'Polygon', desc: 'Create the ground and object polygon in the KML', oper: 'This data is from SuperMap Online. Need to connect to the Internet' };
DemoDescription['KML_route'] = {title: 'Climbing Routes', desc: 'Load the climbing routes of the Four Maiden Mountain S3M layer and KML', oper: 'This data is from SuperMap Online. Need to connect to the Internet' };
DemoDescription['location'] = {title: 'Online Location', desc: 'Definition: SuperMap online POI index and location', oper: 'Enter a place name in the search box, you need to connect to the Internet.'};
DemoDescription['measure'] = {title: 'Measurement', desc: 'Measure distance and measure area', oper: 'Mouse click the corresponding icon, activate the drawing line handler start drawing, double-click the mouse to complete the drawing and measurement. Volume area used by the third-party library turf.js' };
DemoDescription['flyRoute'] = {title: 'Fly Along Line', desc: 'The demonstration shows the road flying along the bird Nest Park', oper: 'Click the play button to start the flight, during the flight click the pause button to pause, click stop to stop when the flight' };
DemoDescription['clipbox'] = {title: 'BOX Clip', desc: 'Click the icon to create BOX on the layer, select the corresponding mode for BOX clipping', oper: 'none' };
DemoDescription['S3MTiles'] = {title: 'Oblique Photography Attribute Query', desc: 'Click the building on the layer to query properties to bubble display, bubbles can contain text, pictures, audio and video.', oper: 'The data source from the SuperMap online. Need to connect to the Internet' };
DemoDescription['draw'] = {title: 'Draw Points, Lines, Regions', desc: 'Click the corresponding icon to draw points, lines and region, double-click end the drawing', oper: 'none' };
DemoDescription['polarizedStereoscopic'] = {title: 'Polarized 3D', desc: 'Need to set the display to 3D mode, and wear 3D glasses', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['flood'] = {title: 'Flood Analysis', desc: 'S3M layer flood analysis function', oper: 'None' };
DemoDescription['sightline'] = {title: 'Visibility Analysis', desc: 'Click to select the observer position, then add the target point to analyze', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['skyline'] = {title: 'Skyline Analysis', desc: 'Click the button to extract the current view port skyline', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['viewshed3D'] = {title: 'Viewshed Analysis', desc: 'Click the button to select the observer position. And move the mouse to analyze. Double click to finish', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['multiViewport'] = {title: 'Multi-screen Display', desc: 'Click the dropdown multi-screen mode.', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['dynamicTime'] = {title: 'Temporal Layer', desc: 'This example shows the function of the image layer dynamic gradient', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };
DemoDescription['SuperMapTileImagery'] = {title: 'Overlay Map', desc: 'Support to overlay 2D longitude and latitude projection and Mercator projection coordinate system maps', oper: 'The data source is from the SuperMap online. Need to connect to the Internet' };

