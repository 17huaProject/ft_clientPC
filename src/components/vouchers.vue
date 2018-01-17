<template>
    <div class="mainTips">
        <div class="eachTips" v-bind:key="item.id" v-for="(item, index) in connect" @click="useCoupon(index)">
            <div class="top_bar">
                <div class="left_tseTips_area">
                    <div>{{item.coupon_name}}</div>
                    <div>有效期至{{item.end_time.split(' ')[0]}}</div>
                </div>
                <div class="right_tseTips_area">
                    <div :class="canuse(item.limit_amount)">{{item.coupon_amount}}元</div>
                </div>
            </div>
            <div class="middle_line">
                <div class="triangle-right"></div>
                <div class="linboder"></div>
                <div class="triangle-left"></div>
            </div>
            <div class="bottom_buttuon">
                限本帐户消费满{{item.limit_amount}}元使用
                <img v-show="!getOrderFrom&&$store.state.useConpon.id==item.id" src="../../static/obj_img/copy_img/buy_contacts_icon_1.png">
                <img v-show="!getOrderFrom&&$store.state.useConpon.id!=item.id" src="../../static/obj_img/copy_img/buy_contacts_icon_2.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getNumber: this.$route.query.amount || 0,
            getOrderFrom: this.$route.query.order || false,
            canuse: function (statue) {
                // if (this.getOrderFrom) {
                //     return 'useNum_y'
                // } else {
                //     return statue <= this.getNumber ? 'useNum_y' : 'useNum_n'
                // }
                return 'useNum_y'
            },
            connect: []
        }
    },
    created() {
        this.getCouponList()
    },
    methods: {
        getCouponList() {
            let v = {
                access_token: this.$store.state.usrInfomation.access_token
            }
            this.$store.commit('ConectionPara', v)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/coupon/index' + getString).then(m => this.setCoupon(m.data)).catch(r => this.$toast.bottom(r));
        },
        setCoupon(data) {
            if (data.errcode === 200) {
                this.connect = data.records
                if (data.records.length === 0) {
                    this.$toast.bottom('暂无抵用券')
                    this.$router.go(-1);
                }
            }else{
                 this.$toast.bottom(data.errmsg)
            }
        },
        useCoupon(index) {
            if (!this.getOrderFrom) {
                if (this.connect[index].id == this.$store.state.useConpon.id) {
                    this.$store.commit('saveCouponInfo', {})
                    this.$router.go(-1)
                } else {
                    let c = {
                        num: this.connect[index].coupon_amount,
                        id: this.connect[index].id
                    }
                    this.$store.commit('saveCouponInfo', c)
                    this.$router.go(-1)
                }
                // if (this.connect[index].limit_amount <= this.getNumber) {

                // } else {
                //     this.$toast.bottom('无法使用该券')
                // }
            }
        }
    }
}
</script>

<style>
body {
    background-color: #f5f5f5
}

.mainTips {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    width: 100%
}

.eachTips {
    flex: 1;
    -webkit-flex: 1;
    margin: 2.5% 1.9% 0 1.9%;
    background-color: #ffffff;
}



.useNum_y {
    font-size: 24px;
    font-weight: bold;
    color: #ff604f;
}

.useNum_n {
    font-size: 24px;
    font-weight: bold;
    color: #999999;
}

.cantUs {
    font-size: 12px;
    color: #999999;
    margin-left: 3%;
}

.middle_line {
    display: flex;
    display: -webkit-flex;
}

.triangle-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 12px solid #f5f5f5;
    border-bottom: 8px solid transparent;
}

.linboder {
    flex: 1;
    -webkit-flex: 1;
    border-bottom: 2px dashed #f5f5f5;
    margin: -5px 0 7px 0;
}

.triangle-left {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 12px solid #f5f5f5;
    border-bottom: 8px solid transparent;
    margin-right: -1px;
}

.bottom_buttuon {
    margin-top: -6px;
    display: flex;
    display: -webkit-flex;
    padding: 5%;
    color: #666666;
    font-size: 12px;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

.bottom_buttuon img {
    height: 18px;
}

.top_bar {
    padding: 7.5% 5% 5% 5%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    margin-bottom: -6px;
}

.left_tseTips_area {
    flex: 1;
    -webkit-flex: 1;
    font-size: 14px;
    color: #666666;
}

.left_tseTips_area div:first-child {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4%;
    color: #333333;
}

.mj_sre_area {
    font-size: 12px;
    margin-top: 5%;
    color: #999999;
    text-align: center;
}

.right_tseTips_area {
    padding: 0 0 0 5%
}

.right_tseTips_area div:first-child {
    font-size: 26px;
}
</style>
