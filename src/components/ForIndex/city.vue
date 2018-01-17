<template>
    <div class="CityShow_area">
        <div class="CityShow"  v-if="modelNum">
            <div>{{this.$store.state.SelectCity}}</div>
            <!-- <img src="../../../static/obj_img/home_icon_ArrDown.png"> -->
        </div>
        <div class="CityShow_2" else>
            <div style="text-decoration: none;color:#333333" v-if="PageFrom=='list'">{{this.$store.state.SelectCity}}</div>
            <div style="text-decoration: none" v-else>{{this.$store.state.SelectCity}}</div>
            <!-- <img v-if="PageFrom=='list'" src="../../../static/obj_img/list_more_xiala_icon.png">
            <img v-else src="../../../static/obj_img/webDte_img/home_search_icon_02.png"> -->
        </div>
    </div>
</template>

<script>
// import CenterTrunk from '../../assets/eventBus'
export default {
    data() {
        return {
            modelNum: this.cityModel
        }
    },
    computed:{
        
    },
    methods: {
        toChangeCity() {
            this.$router.push({ path: '/cc' })
        }
    },
    mounted() {
        // var _self = this;
        // CenterTrunk.$on('isThisCity', function (name) {
        //     _self.Ccity = name;
        // });
    },
    props: ["cityModel",'PageFrom']
}
</script>

<style>
.CityShow_area {
    text-decoration: none;
    min-width: 60px;
}




/*首页*/

.CityShow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    font-size: 16px;
    width: 25%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    padding: 3.8% 0;
}

.CityShow div {
    margin-left: 15.2%;
}

.CityShow img {
    width: 24%;
    margin-left: 7.6%;
}




/*列表页*/

.CityShow_2 {
    width: 60px;
    height: 48px;
    line-height: 48px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    /* cursor: pointer; */
    z-index: 4;
}
.CityShow_2 div:first-child:hover{
    text-shadow: 0 0 2px #999999;
}
.CityShow_2 :hover{
    text-shadow: 0 0 2px #ffffff;
}
.CityShow_2 div {
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
}

.CityShow_2 img {
    width: 20px;
}
</style>
