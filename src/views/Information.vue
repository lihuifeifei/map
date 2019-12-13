<template>
    <div class="main">
<!--        将八个队员分成上下两行-->
        <div class="top">
<!--            队员1-->
            <div class="number1">
                <div class="table-header">
                    <div class="table-title">队员1</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object1">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                     <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员2-->
            <div class="number2">
                <div class="table-header">
                    <div class="table-title">队员2</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object2">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员3-->
            <div class="number3">
                <div class="table-header">
                    <div class="table-title">队员3</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object3">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员4-->
            <div class="number4">
                <div class="table-header">
                    <div class="table-title">队员4</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object4">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
        </div>
        <div class="bottom">
            <!--            队员5-->
            <div class="number5">
                <div class="table-header">
                    <div class="table-title">队员5</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object5">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员6-->
            <div class="number6">
                <div class="table-header">
                    <div class="table-title">队员6</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object6">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员7-->
            <div class="number7">
                <div class="table-header">
                    <div class="table-title">队员7</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object7">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
            <!--            队员8-->
            <div class="number8">
                <div class="table-header">
                    <div class="table-title">队员8</div>
                </div>
                <div class="table-content-holder">
                    <ul>
                        <li v-for="(value,name) in object8">
                            {{name}}:<span style="color: black;font-weight: normal">{{value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="playback">
                    <el-button type="success" round>轨迹回放</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information.vue",
        data(){
            return{
                object1:{'id':'2010','姿态':'站立','生命安全':'正常','所在楼层':'1楼'},
                object2:{'id':'2011','姿态':'趴下','生命安全':'不正常','所在楼层':'2楼'},
                object3:{'id':'2012','姿态':'站立','生命安全':'正常','所在楼层':'3楼'},
                object4:{'id':'2013','姿态':'趴下','生命安全':'正常','所在楼层':'4楼'},
                object5:{'id':'2014','姿态':'趴下','生命安全':'正常','所在楼层':'5楼'},
                object6:{'id':'2015','姿态':'趴下','生命安全':'正常','所在楼层':'6楼'},
                object7:{'id':'2016','姿态':'趴下','生命安全':'正常','所在楼层':'7楼'},
                object8:{'id':'2017','姿态':'趴下','生命安全':'正常','所在楼层':'8楼'},
            }
        }
    }
</script>

<style scoped>
    .main{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #177cb0;
        overflow: scroll;
    }
    .top,.bottom{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .number1, .number2,.number3,.number4,.number5,.number6,.number7,.number8{
        width: 23%;
        border-radius: 15px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0px 0px 10px 3px #ede9f3;
        z-index: 100;
    }


    .table-header{
        height: 36px;
        width: 100%;
        position: relative;
        background-color: #bbc0ce;
    }
    .table-title{
        position: absolute;
        width: 100%;
        height: 34px;
        font-size:24px;
        text-align: center;
        line-height: 44px;
    }
    .table-content-holder{
        padding: 0 5%;
        margin-bottom: 15px;
    }
    .number1 ul,.number2 ul,.number3 ul,.number4 ul,
    .number5 ul,.number6 ul,.number7 ul,.number8 ul
    {
        padding: 0;
        list-style: none;
        margin-top: 22px;
    }
    .number1 ul li,.number2 ul li,.number3 ul li,.number4 ul li,
    .number5 ul li,.number6 ul li,.number7 ul li,.number8 ul li
    {
        border-bottom: 2px solid #ede9f3;
        padding: 8px 0;
        font-weight: bold;
        font-size: 16px;
        color: #055198;
        /*text-align: center;*/
        /*
            强制不换行
        */
        /*   white-space:nowrap;
           overflow:hidden;
           text-overflow: ellipsis;*/
    }
    .playback{
        text-align: center;
    }
</style>
