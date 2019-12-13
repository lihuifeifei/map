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
               object1:{'姿态':'跑','生命体征':'安全'},
               object2:{'姿态':'走','生命体征':'危险'},
               object3:null,
               object4:null,
               object5:null,
               object6:null,
               object7:null,
               object8:null,
            }
        },
        mounted() {
            this.$axios.get('/getDetails')
                .then(res => {
                    //先将对象转换成字符串，再全局替换字符串
                    console.log(res.data);
                    let str = JSON.stringify(res.data);
                    let str1 = str.replace(/attitude/g,'姿态');
                    let str2 = str1.replace(/idName/g,'姓名');
                    let str3 = str2.replace(/isSafety/g,'生命安全');
                    let str4 = str3.replace(/floor/g,'楼层');
                    let str5 = str4.replace(/walk/g,'走');
                    let str6 = str5.replace(/run/g,'跑');
                    let str7 = str6.replace(/static/g,'静止');
                    let str8 = str7.replace(/safe/g,'正常');
                    let str9 = str8.replace(/danger/g,'危险');
                    //将替换之后的字符串转换成JSON对象
                    let obj = JSON.parse(str9);
                    this.object1 = obj.a;
                    this.object2 = obj.b;
                    this.object3 = obj.c;
                    this.object4 = obj.d;
                    this.object5 = obj.e;
                    this.object6 = obj.f;
                    this.object7 = obj.g;
                    this.object8 = obj.h;
                })
                .catch(err => {
                    console.log(err);
                });
            setInterval(()=>{
                this.$axios.get('/getDetails')
                    .then(res => {
                        //先将对象转换成字符串，再全局替换字符串
                        console.log(res.data);
                        let str = JSON.stringify(res.data);
                        let str1 = str.replace(/attitude/g,'姿态');
                        let str2 = str1.replace(/idName/g,'姓名');
                        let str3 = str2.replace(/isSafety/g,'生命安全');
                        let str4 = str3.replace(/floor/g,'楼层');
                        let str5 = str4.replace(/walk/g,'走');
                        let str6 = str5.replace(/run/g,'跑');
                        let str7 = str6.replace(/static/g,'静止');
                        let str8 = str7.replace(/safe/g,'正常');
                        let str9 = str8.replace(/danger/g,'危险');
                        //将替换之后的字符串转换成JSON对象
                        let obj = JSON.parse(str9);
                        this.object1 = obj.a;
                        this.object2 = obj.b;
                        this.object3 = obj.c;
                        this.object4 = obj.d;
                        this.object5 = obj.e;
                        this.object6 = obj.f;
                        this.object7 = obj.g;
                        this.object8 = obj.h;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },10000);

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
