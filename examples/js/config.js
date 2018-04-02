var URL_CONFIG = {
    TDT_IMG : 'https://[subdomain].tianditu.com/img_w/wmts',//天地图影像
    TDT_LABEL : 'https://[subdomain].tianditu.com/cia_w/wmts',//天地图文字注记
    BINGMAP : '//dev.virtualearth.net',//bing map影像
    STK : 'https://www.supermapol.com/iserver/services/3D-stk_terrain/rest/realspace/datas/info/data/path',//STK 地形
    ZF_IMG : 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/image',//珠峰影像SCI
    ZF_TERRAIN : 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/srtm_54_07@zhufeng',//珠峰地形SCT
    TENSE_IMG0 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0300@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG1 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0310@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG2 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0330@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG3 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0340@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG4 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0350@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG5 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0400@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG6 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0410@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG7 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0420@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG8 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0430@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG9 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0440@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG10 : 'https://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0450@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    SUPERMAP_IMG_WGS : 'https://www.supermapol.com/realspace/services/map-ChinaProvinces/rest/maps/ChinaProvinces',//经纬度投影地图TILE IMGERY（中国区域）
    SUPERMAP_IMG_MEC : 'https://www.supermapol.com/realspace/services/map-china400/rest/maps/China',//墨卡托投影地图TILE IMGERY（全球）
    SCP_JINJIANG : 'https://www.supermapol.com/realspace/services/3D-jinjiang/rest/realspace/datas/jinjiang/config',//晋江倾斜SCP
    SCP_SRSB : 'https://www.supermapol.com/iserver/services/3D-srsb/rest/realspace/datas/srsb/config',//萨尔茨堡SCP
    SCP_SRSB_WATER : 'https://www.supermapol.com/iserver/services/3D-srsb/rest/realspace/datas/%E6%B0%B4%E9%9D%A2@vector/config',//萨尔茨堡水面SCP
    SCP_NIAOCHAO : 'https://www.supermapol.com/iserver/services/3D-niaocao_water/rest/realspace/datas/%E9%B8%9F%E5%B7%A2%E4%BA%94%E6%9C%9F/config',//鸟巢SCP
    SCP_NIAOCHAO_WATER : 'https://www.supermapol.com/iserver/services/3D-niaocao_water/rest/realspace/datas/Waters@OlympicGreen/config',//鸟巢水面SCP
    SCP_CBD_TREE : 'https://www.supermapol.com/iserver/services/3D-WebGLCBD/rest/realspace/datas/Tree@%E6%96%B0CBD/config',//CBD 树SCP
    SCP_CBD_GROUND1 : 'https://www.supermapol.com/iserver/services/3D-WebGLCBD/rest/realspace/datas/Ground_1@%E6%96%B0CBD/config',//CBD 地面1 SCP
    SCP_CBD_GROUND2 : 'https://www.supermapol.com/iserver/services/3D-WebGLCBD/rest/realspace/datas/Ground_2@%E6%96%B0CBD/config',//CBD 地面2 SCP
    SCP_CBD_BUILD : 'https://www.supermapol.com/iserver/services/3D-WebGLCBD/rest/realspace/datas/Building@%E6%96%B0CBD/config',//CBD 建筑物 SCP
    SCP_BIM : 'https://www.supermapol.com/realspace/services/3D-S3MData/rest/realspace/datas/T8H_NoLod/config',//BIM scp
    SCP_VECTOR_POLYGON : 'https://www.supermapol.com/iserver/services/3D-China/rest/realspace/datas/%E4%B8%93%E9%A2%98%E5%9B%BE/config',//矢量 面 SCP
    SCP_VECTOR_LINE : 'https://www.supermapol.com/iserver/services/3D-China/rest/realspace/datas/Line/config',// 矢量 线 SCP
    SCP_VECTOR_TEXT : 'https://www.supermapol.com/iserver/services/3D-China/rest/realspace/datas/text/config',//矢量 文字 SCP
    SCP_POINTCLOUD : 'https://www.supermapol.com/realspace/services/3D-pointCloud/rest/realspace/datas/all/config',//点云 SCP
    SCP_SGNS : 'https://www.supermapol.com/iserver/services/3D-SGNS/rest/realspace/datas/siguniang/config',//四姑娘山 SCP
    SCP_OLYMPIC_TREE : 'https://www.supermapol.com/iserver/services/3D-WebGLOlympicGreen/rest/realspace/datas/Tree@OlympicGreen/config',//奥林匹克公园 树 SCP
    SCP_OLYMPIC_BUILD : 'https://www.supermapol.com/iserver/services/3D-WebGLOlympicGreen/rest/realspace/datas/Building@OlympicGreen/config',//奥林匹克公园 建筑物 SCP
    SCP_OLYMPIC_BILLBOARD : 'https://www.supermapol.com/iserver/services/3D-WebGLOlympicGreen/rest/realspace/datas/BillBoard@OlympicGreen/config',//奥林匹克公园 人物 SCP
    SCP_OLYMPIC_GROUND : 'https://www.supermapol.com/iserver/services/3D-WebGLOlympicGreen/rest/realspace/datas/Ground@OlympicGreen/config',//奥林匹克公园 地面 SCP
    SCP_OLYMPIC_WATER : 'https://www.supermapol.com/iserver/services/3D-WebGLOlympicGreen/rest/realspace/datas/Waters@OlympicGreen/config',//奥林匹克公园 水面 SCP
    SCP_XGPARK : 'https://www.supermapol.com/realspace/services/3D-yanmofenxi/rest/realspace/datas/sci_park/config',//香港科技园 SCP
    SCP_PIPELINE : 'https://www.supermapol.com/realspace/services/3D-pipeline_s3m/rest/realspace/datas/NetWork@Pipe3D/config', //管线 SCP
    SCP_HISTOGRAM1 : 'https://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_3000_5000/config', //
    SCP_HISTOGRAM2 : 'https://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_10000_max/config', //
    SCP_HISTOGRAM3 : 'https://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_min_1000/config', //
    SCP_HISTOGRAM4 : 'https://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_5000_10000/config',//
    SCP_HISTOGRAM5 : 'https://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_1000_3000/config' //
};