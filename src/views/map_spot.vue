<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map" :scroll-wheel-zoom="true">
        <!--    右上角缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!--    左上角地图类型控件-->
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <!--    右下角定位控件-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--    标记点控件-->
        <bm-marker :position="position"></bm-marker>
    </baidu-map>
</template>
<script>
    export default {
        data(){
            return{
                center: {lng: 0, lat: 0},
                zoom: 3,
                position:{lng: 0, lat: 0}
            }
        },
        methods:{
            handler ({BMap, map}) {
                console.log(BMap, map);
                this.zoom = 15;
                 setInterval(()=>{
                     this.$axios.get('http://localhost:8080/getData')
                         .then(res=>{
                           console.log(res.data);
                           this.center.lng = res.data.longitude;
                           this.center.lat = res.data.latitude;
                           this.position.lng = res.data.longitude;
                           this.position.lat = res.data.latitude;
                         })
                         .catch(err=>{
                           console.log(err)
                         })
                 },1000);

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
</style>
