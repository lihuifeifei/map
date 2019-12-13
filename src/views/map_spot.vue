<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map" :scroll-wheel-zoom="true">
        <!--    右上角缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!--    左上角地图类型控件-->
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <!--    右下角定位控件-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--    标记点1控件-->
        <div v-if="checked1">
            <bm-marker
                    :position="position1"
                    :icon="{url: require('../assets/images/location_red.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点2控件-->
        <div v-if="checked2">
            <bm-marker
                    :position="position2"
                    :icon="{url: require('../assets/images/location_blue.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点3控件-->
        <div v-if="checked3">
            <bm-marker
                    :position="position3"
                    :icon="{url: require('../assets/images/location_purple.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点4控件-->
        <div v-if="checked4">
            <bm-marker
                    :position="position4"
                    :icon="{url: require('../assets/images/location_gray.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点5控件-->
        <div v-if="checked5">
            <bm-marker
                    :position="position5"
                    :icon="{url: require('../assets/images/location_pink.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点6控件-->
        <div v-if="checked6">
            <bm-marker
                    :position="position6"
                    :icon="{url: require('../assets/images/location_brown.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点7控件-->
        <div v-if="checked7">
            <bm-marker
                    :position="position7"
                    :icon="{url: require('../assets/images/location_green.svg'), size: {width: 40, height: 40}}"
            ></bm-marker>
        </div>
        <!--    标记点8控件-->
        <div v-if="checked8">
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
        data(){
            return{
                center: {lng: 0, lat: 0},
                zoom: 20,
                position1:{lng: 0, lat: 0},
                position2:{lng:0,lat:0},
                position3:{lng:0,lat:0},
                position4:{lng:0,lat:0},
                position5:{lng:0,lat:0},
                position6:{lng:0,lat:0},
                position7:{lng:0,lat:0},
                position8:{lng:0,lat:0},
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
        methods:{
            handler ({BMap, map}) {
                console.log(BMap, map);
                this.zoom = 20;
            /*     setInterval(()=>{
                     this.$axios.get('http://localhost:8080/getData')
                         .then(res=>{
                           console.log(res.data);
                           this.center.lng = res.data.latitude;
                           this.center.lat = res.data.longitude;
                           if(res.data.type==='a'){
                               this.position.lng = res.data.latitude;
                               this.position.lat = res.data.longitude;
                           }else {
                               this.position1.lng = res.data.latitude;
                               this.position1.lat = res.data.longitude;
                           }
                         })
                         .catch(err=>{
                           console.log(err)
                         })
                 },1000);*/
                this.center.lng = 116.405;
                this.center.lat = 39.915;
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
        background-color: #f3f9f1;
    }
    img{
        width: 25px;
        height: 25px;
        position: absolute;

    }
</style>
