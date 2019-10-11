<template>
    <div id="app">
        <el-container v-if="$route.meta.keepAlive" direction="vertical">
            <keep-alive>
                <el-menu
                        :default-active="this.$route.path"
                        router
                        class="el-menu-demo"
                        mode="horizontal"

                        theme="dark">
                    <el-menu-item
                            v-for="(item,i) in navList"
                            :key="i"
                            :index="item.name">
                        {{item.navItem}}
                    </el-menu-item>
                </el-menu>
            </keep-alive>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/map_spot',navItem:'坐标点'},
                    {name:'/map_line',navItem:'轨迹'},

                ]
            };
        },
        methods: {

        }
    }
</script>

<style>

</style>
