<template>
    <div id="OrdertoinvoicelistArea">
        <div class="LisSpas_topBot">
            <div >开票金额说明</div>
            <div  @click="routerGo('/invLst')">开票历史</div>
        </div>
        <div class="LisSpas_otoi">
            <div class="Lis_month_area">2017-06</div>
            <div class="Lis_ThisMonthOrder">
                <!-- :key="'l_tmo'+index" v-for="(item,index) in ListInfo" -->
                <img class="order_select_invoice" v-show="false" src="../../../../static/obj_img/copy_img/buy_contacts_icon_1.png">
                <img class="order_select_invoice" src="../../../../static/obj_img/copy_img/buy_contacts_icon_2.png">
                <div class="order_invoice_statue" style="background-color:#ff7d54">可使用</div>
                <!-- <div class="tips_img_onImg" v-show="item.order_status=='SUCCESS'" style="background-color:#ff7d54">可使用</div> -->
                <!-- <div class="tips_img_onImg" v-show="item.order_status=='UNPAID'" style="background-color:#FDA649">未支付</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='PENDING'" style="background-color:#C29B70">已使用</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='REFUND'" style="background-color:#C29B70">已退款</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='CLOSED'" style="background-color:#C29B70">已关闭</div> -->
                <!-- <div :style="{background: 'url(\''+this.$store.state.SyetemBaseConfig.image_prefix+item.order_img+'\')'+ 'center center',backgroundSize:'auto 100%'}" ></div> -->
                <div class="order_invoice_img" style="background:url(../../../../static/obj_img/accout_img/my_collect_activity.png);background-size:100% 100%}"></div>
                <div class="order_invoice_context">
                    <div class="oic_ac_name">活动名称</div>
                    <div class="oic_ac_creatTime">创建时间：2017-06-10 10：00</div>
                    <div class="oic_spc_line"></div>
                    <div class="oic_number">发票金额：
                        <span>￥89</span>
                    </div>
                </div>
            </div>
            <div class="Lis_ThisMonthOrder">
                <!-- :key="'l_tmo'+index" v-for="(item,index) in ListInfo" -->
                <img class="order_select_invoice" src="../../../../static/obj_img/copy_img/buy_contacts_icon_1.png">
                <img class="order_select_invoice" v-show="false" src="../../../../static/obj_img/copy_img/buy_contacts_icon_2.png">
                <div class="order_invoice_statue" style="background-color:#ff7d54">可使用</div>
                <!-- <div class="tips_img_onImg" v-show="item.order_status=='SUCCESS'" style="background-color:#ff7d54">可使用</div> -->
                <!-- <div class="tips_img_onImg" v-show="item.order_status=='UNPAID'" style="background-color:#FDA649">未支付</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='PENDING'" style="background-color:#C29B70">已使用</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='REFUND'" style="background-color:#C29B70">已退款</div>
                                    <div class="tips_img_onImg" v-show="item.order_status=='CLOSED'" style="background-color:#C29B70">已关闭</div> -->
                <!-- <div :style="{background: 'url(\''+this.$store.state.SyetemBaseConfig.image_prefix+item.order_img+'\')'+ 'center center',backgroundSize:'auto 100%'}" ></div> -->
                <div class="order_invoice_img" style="background:url(../../../../static/obj_img/accout_img/my_collect_activity.png);background-size:contain}"></div>
                <div class="order_invoice_context">
                    <div class="oic_ac_name">活动名称</div>
                    <div class="oic_ac_creatTime">创建时间：2017-06-10 10：00</div>
                    <div class="oic_spc_line"></div>
                    <div class="oic_number">发票金额：
                        <span>￥89</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="OrderTOInvoiceBottom">
            <div id="otib_content">
                <div>
                    <img class="order_select_invoice" src="../../../../static/obj_img/copy_img/buy_contacts_icon_2.png">全选</div>
                <div>
                    <span>1</span>个订单 共
                    <span>89</span>元</div>
            </div>
            <div id="otiv_button"  @click="routerGo('/invApy')">下一步</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ListInfo: [],
            page_no: 1,
            page_has: 0,
            pageRoll: true
        }
    },
    created() {
        // this.readList()
    },
    methods: {
        readList() {
            let r = {
                order_status: 'ALL',
                start_time: '',
                end_time: '',
                page_no: this.page_no,
                page_size: 10,
                access_token: this.$store.state.usrInfomation.access_token
            }
            this.$store.commit('ConectionPara', r)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/order/index' + getString).then(m => this.putInfotoList(m.data)).catch(r => console.log(r));
        },
        putInfotoList(data) {
            if (data.errcode === 200) {
                this.pageRoll = true;
                this.page_has = data.records.length;
                this.ListInfo = this.ListInfo.concat(data.records)
            } else {
                this.$toast.center(data.errmsg)
            }

        },
        routerGo: function (paths) {
            this.$router.push({ path: paths })
        },
    },
    mounted() {
        let _this = this;
        // 设置一个开关来避免重负请求数据  
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                if (_this.pageRoll && _this.page_has == 10) {
                    _this.pageRoll = false
                    _this.page_no++
                    _this.readList()
                }
            }
        });
    }
}
</script>

<style>
body {
    background-color: #f5f5f5;
}

#OrdertoinvoicelistArea,
.LisSpas_otoi {
    width: 100%;
    float: left;
}

.Lis_month_area {
    width: 93.4%;
    padding: 3.3%
}

.Lis_ThisMonthOrder {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 5% 0;
    width: 100%;
    margin-bottom: 1.8%;
}

.order_select_invoice {
    width: 30px;
    height: 30px;
    padding: 5% 2%;
}

.order_invoice_statue {
    align-self: flex-start;
    height: 24px;
    width: 56px;
    margin-right: -56px;
    line-height: 24px;
    text-align: center;
    background-color: #ff7869;
    color: #ffffff;
    font-size: 12px;
    position: relative;
    z-index: 2;
}

.order_invoice_img {
    width: 26.7%;
    padding-top: 26.7%;
    margin-right: 3.3%;
}

.order_invoice_context {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 3.3%;
}

.oic_ac_name,
.oic_ac_creatTime {
    font-size: 12px;
    margin-bottom: 3%;
    color: #666666;
}

.oic_spc_line {
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
    margin-top: 3%;
    margin-bottom: 6%;
}

.oic_number {
    margin-bottom: 3%;
    color: #333333;
    text-align: right;
}

.oic_number span {
    color: #ff604f
}

#OrderTOInvoiceBottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#otiv_button {
    width: 120px;
    height: 50px;
    line-height: 50px;
    background-color: #ff604f;
    color: #ffffff;
    text-align: center;
    margin-right: 10px;
    border-radius: 3px;
}

#otib_content {
    flex: 1;
    height: 60px;
    margin-left: 10px;
    color: #666666;
}

#otib_content div:first-child {
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 38px;
}

#otib_content div:first-child img {
    width: 30px;
    height: 30px;
}

#otib_content div:last-child {
    font-size: 12px;
    height: 22px;
    line-height: 22px;
}

#otib_content div:last-child span {
    color: #ff604f;
}

.LisSpas_topBot {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
}

.LisSpas_topBot div:first-child {
    border-right: 1px solid #eeeeee;
}

.LisSpas_topBot div {
    margin: 2.3% 0;
    padding: 1% 3.3%;
}
</style>
