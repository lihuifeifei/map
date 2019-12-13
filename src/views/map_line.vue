<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map" :scroll-wheel-zoom="true">
        <!--    右上角缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!--    左上角地图类型控件-->
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <!--    右下角定位控件-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <div v-if="checked1">
            <!--    画折线1-->
            <bm-polyline :path="polylinePath1" stroke-color="red" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点1控件-->
            <bm-marker
                    :position="position1"
                    :icon="{url: require('../assets/images/location_red.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked2">
            <!--    画折线2-->
            <bm-polyline :path="polylinePath2" stroke-color="blue" :stroke-opacity="0.6" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点2控件-->
            <bm-marker
                    :position="position2"
                    :icon="{url: require('../assets/images/location_blue.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked3">
            <!--    画折线3-->
            <bm-polyline :path="polylinePath3" stroke-color="purple" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点3控件-->
            <bm-marker
                    :position="position3"
                    :icon="{url: require('../assets/images/location_purple.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>


        <div v-if="checked4">
            <!--        画折线4-->
            <bm-polyline :path="polylinePath4" stroke-color="gray" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点4控件-->
            <bm-marker
                    :position="position4"
                    :icon="{url: require('../assets/images/location_gray.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked5">
            <!--        画折线5-->
            <bm-polyline :path="polylinePath5" stroke-color="#f47983" :stroke-opacity="1" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点5控件-->
            <bm-marker
                    :position="position5"
                    :icon="{url: require('../assets/images/location_pink.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked6">
            <!--        画折线6-->
            <bm-polyline :path="polylinePath6" stroke-color="#e29c45" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点6控件-->
            <bm-marker
                    :position="position6"
                    :icon="{url: require('../assets/images/location_brown.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked7">
            <!--        画折线7-->
            <bm-polyline :path="polylinePath7" stroke-color="green" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点7控件-->
            <bm-marker
                    :position="position7"
                    :icon="{url: require('../assets/images/location_green.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <div v-if="checked8">
            <!--        画折线8-->
            <bm-polyline :path="polylinePath8" stroke-color="black" :stroke-opacity="0.8" :stroke-weight="3"  :stroke-style="dashed" @lineupdate="updatePolylinePath"></bm-polyline>
            <!--    标记点8控件-->
            <bm-marker
                    :position="position8"
                    :icon="{url: require('../assets/images/location_black.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>

        <!--        右下角队员选择-->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>队员选择</span>
            </div>
            <!--            队员1为红色-->
            <div  class="text item">
                <el-checkbox v-model="checked1">队员1</el-checkbox>
                <img src="../assets/images/location_red.svg">
            </div>
            <!--            队员2为蓝色-->
            <div  class="text item">
                <el-checkbox v-model="checked2">队员2</el-checkbox>
                <img src="../assets/images/location_blue.svg">
            </div>
            <!--            队员3为紫色-->
            <div  class="text item">
                <el-checkbox v-model="checked3">队员3</el-checkbox>
                <img src="../assets/images/location_purple.svg">
            </div>
            <!--            队员4为灰色-->
            <div  class="text item">
                <el-checkbox v-model="checked4">队员4</el-checkbox>
                <img src="../assets/images/location_gray.svg">
            </div>
            <!--            队员5为粉色-->
            <div  class="text item">
                <el-checkbox v-model="checked5">队员5</el-checkbox>
                <img src="../assets/images/location_pink.svg">
            </div>
            <!--            队员6为棕色-->
            <div  class="text item">
                <el-checkbox v-model="checked6">队员6</el-checkbox>
                <img src="../assets/images/location_brown.svg">
            </div>
            <!--            队员7为绿色-->
            <div  class="text item">
                <el-checkbox v-model="checked7">队员7</el-checkbox>
                <img src="../assets/images/location_green.svg">
            </div>
            <!--            队员8为黑色-->
            <div  class="text item">
                <el-checkbox v-model="checked8">队员8</el-checkbox>
                <img src="../assets/images/location_black.svg">
            </div>
        </el-card>

    </baidu-map>
</template>

<script>
    export default {
        name: "map_line",
        data(){
            return{
                zoom: 20,
                center: {lng: 0, lat: 0},
                // 初始化标记点的位置
                position1:{lng: 0, lat: 0},
                position2:{lng: 0, lat: 0},
                position3:{lng: 0, lat: 0},
                position4:{lng: 0, lat: 0},
                position5:{lng: 0, lat: 0},
                position6:{lng: 0, lat: 0},
                position7:{lng: 0, lat: 0},
                position8:{lng: 0, lat: 0},
                // 初始化折线
                polylinePath1: [],
                polylinePath2:[],
                polylinePath3:[],
                polylinePath4:[],
                polylinePath5:[],
                polylinePath6:[],
                polylinePath7:[],
                polylinePath8:[],
                //初始化选择框
                checked1:false,
                checked2:false,
                checked3:false,
                checked4:false,
                checked5:false,
                checked6:false,
                checked7:false,
                checked8:false,

            }
        },
        methods: {
            handler ({BMap, map}) {
       /*         console.log(BMap, map);
                this.zoom = 20;
                 setInterval(()=>{
                 this.$axios.get('http://localhost:8080/getData')
                     .then(res=>{
                       console.log(res.data);
                       this.center.lng = res.data.latitude;
                       this.center.lat = res.data.longitude;
                       if(res.data.type==='a'){
                           this.position.lng = res.data.latitude;
                           this.position.lat = res.data.longitude;
                           let obj={};
                           obj.lng = res.data.latitude;
                           obj.lat = res.data.longitude;
                           this.polylinePath.push(obj);
                       }else{
                           this.position1.lng = res.data.latitude;
                           this.position1.lat = res.data.longitude;
                           let obj={};
                           obj.lng = res.data.latitude;
                           obj.lat = res.data.longitude;
                           this.polylinePath1.push(obj);
                       }
                     })
                     .catch(err=>{
                       console.log(err)
                     })
             },1000);*/
                this.center.lng = 116.4055;
                this.center.lat = 39.9155;
                this.position1.lng = 116.404;
                this.position1.lat = 39.915;
                this.position2.lng = 116.405;
                this.position2.lat = 39.915;
                this.position3.lng = 116.406;
                this.position3.lat = 39.915;
                this.position4.lng = 116.407;
                this.position4.lat = 39.915;
                this.position5.lng = 116.404;
                this.position5.lat = 39.916;
                this.position6.lng = 116.405;
                this.position6.lat = 39.916;
                this.position7.lng = 116.406;
                this.position7.lat = 39.916;
                this.position8.lng = 116.407;
                this.position8.lat = 39.916;
                this.polylinePath1.push(
                    {lng: 116.404, lat: 39.915},
                    {lng: 116.404, lat: 39.914});
                this.polylinePath2.push(
                    {lng: 116.405, lat: 39.915},
                    {lng: 116.405, lat: 39.914});
                this.polylinePath3.push(
                    {lng: 116.406, lat: 39.915},
                    {lng: 116.406, lat: 39.914});
                this.polylinePath4.push(
                    {lng: 116.407, lat: 39.915},
                    {lng: 116.407, lat: 39.914});
                this.polylinePath5.push(
                    {lng: 116.404, lat: 39.916},
                    {lng: 116.404, lat: 39.917});
                this.polylinePath6.push(
                    {lng: 116.405, lat: 39.916},
                    {lng: 116.405, lat: 39.917});
                this.polylinePath7.push(
                    {lng: 116.406, lat: 39.916},
                    {lng: 116.406, lat: 39.917});
                this.polylinePath8.push(
                    {lng: 116.407, lat: 39.916},
                    {lng: 116.407, lat: 39.917});



            },
            updatePolylinePath(e){

            }

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 650px;
    }
    .text {
        font-size: 15px;
        position: relative;
    }

    .item {
        margin-bottom: 12px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 200px;
        position: fixed;
        right: 0;
        top: 43%;
        opacity:0.9;
        background-color: #f0fcff;
    }
    img{
        width: 25px;
        height: 25px;
        position: absolute;

    }
</style>
