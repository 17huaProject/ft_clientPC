<template>
    <div id="GiftBuyCardArea">
        <div id="GiftCardBuyT">
            <img src="../../../static/obj_img/giftcard_img/gift_pay_photo.png">
        </div>
        <div id="GiftCardBuyChargeArea">
            <div id="GiftCardBuyChargeTitle">选择金额</div>
            <div id="GiftCardBuyChargeInfo">
                <div :key="'ma'+index" :class="OnselectThis(index)" v-for="index in chargeArray" @click="SelectThisBarC(index)">￥{{index}}</div>
                <input placeholder="自定义金额" v-model="OnselectThisBar" maxlength="10" type="tel">
            </div>
        </div>
        <div id="GiftCardBuyChargeRulesMss">我已阅读
            <span>礼品卡购买规则</span>
            <img src="../../../static/obj_img/pop_right_icon.png">
        </div>
        <div id="nextStep_GiftCardBuy" class="nextStep_GiftCardBuy_can" v-show="OnselectThisBar!=0" @click="ConfirmToPay">确认支付</div>
        <div id="nextStep_GiftCardBuy" class="nextStep_GiftCardBuy_cant" v-show="OnselectThisBar==0">确认支付</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chargeArray: [99, 199, 299, 399, 499, 599],
            OnselectThisBar: this.$store.state.GiftCardCustInfo.num || 0
        }
    },
    methods: {
        OnselectThis(num) {
            return this.OnselectThisBar === num ? 'GiftCardChargeSelectOn' : 'GiftCardChargeSelectNormal'
        },
        SelectThisBarC(index) {
            this.OnselectThisBar = index;
        },
        ConfirmToPay() {
            if (confirm('确认支付' + this.OnselectThisBar + '元么？')) {
                let mesSate = {};
                mesSate.page = this.$store.state.GiftCardCustInfo.page;
                mesSate.to = this.$store.state.GiftCardCustInfo.to;
                mesSate.context = this.$store.state.GiftCardCustInfo.context;
                mesSate.by = this.$store.state.GiftCardCustInfo.by;
                mesSate.num = this.OnselectThisBar;
                this.$store.commit('saveGiftCardStyleinfo', mesSate)
                this.$router.push({ path: '/gcsd' })
            } else {
                this.$toast.bottom('取消支付')
            }
        }
    }
}
</script>

<style>
#GiftBuyCardArea {
    width: 100%;
    float: left;
}

#GiftCardBuyT {
    width: 70%;
    padding: 10px 15%;
    float: left;
    background-color: #ffffff;
}

#GiftCardBuyT img {
    width: 100%;
    float: left;
}

#GiftCardBuyChargeArea {
    width: 90%;
    padding: 0 5% 10px 5%;
    float: left;
    background-color: #ffffff;
}

#GiftCardBuyChargeTitle {
    width: 100%;
    float: left;
    padding-bottom: 10px;
    background-color: #ffffff;
}

#GiftCardBuyChargeInfo {
    width: 90%;
    padding: 10px 5% 0 5%;
    float: left;
    /* display: flex;
    display: -webkit-flex; */
    /* flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    align-content: flex-start;
    -webkit-align-content: flex-start; */
}

#GiftCardBuyChargeInfo div {
    float: left;
    width: 21%;
    margin: 0 2% 5% 2%;
    line-height: 16px;
    height: 16px;
    text-align: center;
    padding: 2% 0;
    border-radius: 5px;
}

.GiftCardChargeSelectOn {
    box-shadow: 0 0 0 1px #ff604f;
    color: #ff604f;
}

.GiftCardChargeSelectNormal {
    box-shadow: 0 0 0 1px #cccccc;
    color: #666666;
}

#GiftCardBuyChargeInfo input {
    float: left;
    width: 40%;
    padding: 2%;
    line-height: 16px;
    height: 16px;
    margin: 0 2% 5% 2%;
    -webkit-appearance: none;
    border: 1px solid #cccccc;
    outline: none;
    border-radius: 5px;
    color: #666666;
    font-size: 16px;
}

#nextStep_GiftCardBuy {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
}

.nextStep_GiftCardBuy_can {
    color: #ffffff;
    background-color: #ff604f;
}

.nextStep_GiftCardBuy_cant {
    color: #666666;
    background-color: #eeeeee;
}

#GiftCardBuyChargeRulesMss {
    float: left;
    width: 90%;
    padding: 10px 5% 0 5%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}

#GiftCardBuyChargeRulesMss span {
    color: #ff604f;
}

#GiftCardBuyChargeRulesMss img {
    height: 16px;
    margin-left: 5px;
}
</style>
