<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map" :scroll-wheel-zoom="true">
        <!--    右上角缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!--    左上角地图类型控件-->
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <!--    右下角定位控件-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--        画折线-->
        <bm-polyline :path="polylinePath" stroke-color="black" :stroke-opacity="1" :stroke-weight="3"  @lineupdate="updatePolylinePath"></bm-polyline>
        <!--    标记点控件-->
        <bm-marker :position="position"></bm-marker>
    </baidu-map>
</template>

<script>
    export default {
        name: "map_line",
        data(){
            return{
                zoom: 20,
                center: {lng: 0, lat: 0},
                position:{lng: 0, lat: 0},
                polylinePath: []
            }
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map);
                this.zoom = 20;
                 setInterval(()=>{
                 this.$axios.get('http://localhost:8080/getData')
                     .then(res=>{
                       console.log(res.data);
                       this.center.lng = res.data.latitude;
                       this.center.lat = res.data.longitude;
                       this.position.lng = res.data.latitude;
                       this.position.lat = res.data.longitude;
                       let obj={};
                       obj.lng = res.data.latitude;
                       obj.lat = res.data.longitude;
                       this.polylinePath.push(obj);
                     })
                     .catch(err=>{
                       console.log(err)
                     })
             },1000);
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
</style>
