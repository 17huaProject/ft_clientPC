<template>
    <div id="ListNeTArea">
        <div id="mainDetailInfo_active">
            <div id="left_side_area">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="right_side_area">
                <div id="name_active_inRight">宿</div>
                <div id="data_active_inRight">7月22日 18：00</div>
                <div id="hardlevel_active_inRight">难度
                    <img src="../../../static/obj_img/webDte_img/act_star_icon_01.png">
                    <img src="../../../static/obj_img/webDte_img/act_star_icon_01.png">
                    <img src="../../../static/obj_img/webDte_img/act_star_icon_01.png">
                    <img src="../../../static/obj_img/webDte_img/act_star_icon_01.png">
                    <img src="../../../static/obj_img/webDte_img/act_star_icon_01.png">
                </div>
                <div class="Free_sent_dl" v-show="acti.is_refund==1||acti.free_service!=''">
                    <div class="Free_Pade_del" v-show="acti.is_refund==1">
                        <img src="../../../static/obj_img/acti_img/act_tui_icon.png">48小时退
                    </div>
                    <div class="Free_Pade_del" v-show="this.ServiceOnFree('SNACK')">
                        <img src="../../../static/obj_img/acti_img/act_food_icon.png">精美零食
                    </div>
                    <div class="Free_Pade_del" v-show="this.ServiceOnFree('DRINK')">
                        <img src="../../../static/obj_img/acti_img/act_wine_icon.png">饮料酒水
                    </div>
                    <div class="Free_Pade_del" v-show="this.ServiceOnFree('WIFI')">
                        <img src="../../../static/obj_img/acti_img/activity_wifi_icon.png">免费WiFi
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            acti:{
                is_refund:1
            }
        }
    },
    methods:{
        ServiceOnFree(){
            return true
        }
    }
}
</script>

<style>
#ListNeTArea {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

#mainDetailInfo_active {
    width: 96%;
    padding: 2%;
    max-width: 900px;
    display: flex;
}

#left_side_area {
    flex: 1;
    overflow-y: scroll;
}
.Free_Pade_del {
    padding: 2.9% 8% 2.9% 0;
    float: left;
    display: flex;
    display: -webkit-flex;
    font-size: 12px;
    line-height: 14px;
    height: 14px;
    justify-content: center;
    -webkit-justify-content: center;
    color: #666666;
}

.Free_Pade_del img {
    height: 14px;
    margin-right: 2px;
}
#left_side_area div {
    width: 100%;
    height: 400px;
    background: #f5f5f5;
    margin-bottom: 1%;
}

#right_side_area {
    width: 240px;
    height: 600px;
    background-color: #fff;
}
</style>
