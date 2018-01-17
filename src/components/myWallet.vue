<template>
    <div id="mainArea">
        <div id="detail_s" @click="routerGo('/bl')" v-show="false">明细</div>
        <div id="topArea">
            <div>可用余额（元）</div>
            <div>￥{{Winfo.balance}}</div>
        </div>
        <div class="lineFirst" v-show="false">
            为资金安全，请立即实名认证
            <img src="../../static/obj_img/accout_img/my_purse_icon.png">
        </div>
        <div class="lineSecound" @click="toVcPage">
            <img src="../../static/obj_img/accout_img/my_purse_Coupon.png">
            <div>我的优惠券</div>
            <img src="../../static/obj_img/accout_img/my_purse_icon.png">
        </div>
        <div class="lineSecound" @click="toGiftCard" v-if="false">
            <img src="../../static/obj_img/accout_img/my_giftcard_icon.png">
            <div>购买Gift卡</div>
            <img src="../../static/obj_img/accout_img/my_purse_icon.png">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Winfo: {}
        }
    },
    methods: {
        routerGo: function (paths) {
            this.$router.push({ path: paths })
        },
        toVcPage() {
            if (this.Winfo.coupon_num > 0) {
               this.$router.push({ name: 'vouc', query: { order: true} })
            } else {
                this.$toast.center('你没有优惠券哦')
            }
        },
        toGiftCard() {
            this.$toast.center('敬请期待')
        },
        getUsrWalletInfo(data) {
            if (data.errcode === 200) {
                this.Winfo = data.record
            } else {
                this.$toast.center(data.errmsg)
            }
        }
    },
    created() {
        let a = {
            access_token: this.$store.state.usrInfomation.access_token
        }
        this.$store.commit('ConectionPara', a)
        let getString = this.$store.state.getParamString;
        let postString = getString.replace('?', '');
        this.$http.get(this.$store.state.serverHost + '/yqhbsp/account/show' + getString).then(m => this.getUsrWalletInfo(m.data)).catch(r => console.log(r));
    }
}
</script>

<style>
body {
    background-color: #f5f5f5;
}

#mainArea {
    width: 100%;
}

#detail_s {
    position: absolute;
    right: 0;
    top: 0;
    padding: 3.3%;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}

#topArea {
    width: 93.4%;
    padding: 3.3%;
    display: flex;
    display: -webkit-flex;
    background-color: #ff7d54;
    color: #ffffff;
    flex-direction: column;
    -webkit-flex-direction: column;
    overflow: hidden;
}

#topArea div:first-child {
    font-size: 16px;
}

#topArea div:last-child {
    margin: 13.5% 0 18.3% 0;
    font-size: 60px;
    font-weight: bold;
}

.lineFirst {
    width: 93.4%;
    padding: 3.3%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    background-color: #fffbfa;
    color: #ff604f;
}

.lineFirst img {
    margin-top: 1px;
    height: 16px;
}

.lineSecound {
    width: 93.4%;
    padding: 4.7% 3.3%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    background-color: #ffffff;
    color: #333333;
    margin-top: 1.5%;
}

.lineSecound img {
    margin-top: 1px;
    height: 16px;
}

.lineSecound img:first-child {
    margin-top: 1px;
    height: 20px;
    margin-right: 3.3%;
}

.lineSecound div {
    flex: 1;
    -webkit-flex: 1;
    color: #333333;
}
</style>
