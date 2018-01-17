<template>
  <div class="co_main">
    <div class="ma_pay_info">
      <div class="co_moution_box fs16 mb1x mtb42" @click="ConectList" v-show="custName!=''&&GetPhon!=''">
        <div class="co_moution_box_div co_moution_box_div_between">报名人信息<span style="margin-right:8px;">{{custName}} ({{GetPhon}}) </span></div>
        <img class="pa_right" src="../../static/obj_img/list_icon_arrRight.png">
      </div>
      <div class="co_moution_box fs16 mb1x mtb42" @click="ConectList" v-show="custName==''||GetPhon==''">
        <div class="co_moution_box_div">请添加联系人</div>
        <img class="pa_right" src="../../static/obj_img/list_icon_arrRight.png">
      </div>
      <div class="anouncement_alert">请准确填写联系人手机，以便接收票务信息。</div>
      <!-- <div class="co_moution_box fs18">
        
      </div> -->
      <div class="co_info">
        <img class="co_info_img" :src="$store.state.commInfo.OrderInfo.img_title">
        <div class="co_info_div">
          <div>{{$store.state.commInfo.OrderInfo.event_name}}</div>
          <div>举办地：{{$store.state.commInfo.OrderInfo.venue_name}}</div>
          <div>时间：{{$store.state.commInfo.OrderInfo.event_time}}</div>
        </div>
      </div>
      <div class="co_moution_box fs16 mb1x co_moution_box_div_between">
        单价：
        <span>￥{{$store.state.commInfo.OrderInfo.price}}</span>
      </div>
      <div class="co_moution_box fs16 mb1p mtb42" v-show="false">
        手机号：
        <input class="co_moution_box_input" v-model="GetPhon" type="tel">
        <img class="pa_right bkb" src="../../static/obj_img/pays_img/pay_tel_icon.png">
      </div>
      <div class="co_moution_box fs16 mb1p mtb42">
        购票数：
        <div class="toDndend co_moution_box_div" v-show="!repay">
          <div id="mu" :class="[canOn_mu]" @click="ChPaNm(false)">-</div>
          <input id="sh" v-model="contNum" maxlength="2" v-on:blur="ChesNum" type="tel">
          <div id="ad" :class="[canOn_ad]" @click="ChPaNm(true)">+</div>
        </div>
        <div class="toDndend co_moution_box_div" v-show="repay">
          {{this.$store.state.commInfo.OrderInfo.number}}
        </div>
      </div>
      <div class="co_moution_box fs16 mb1p mtb54" @click="vouchersList">
        <div class="co_moution_box_div">使用优惠券</div>
        <div class="co_moution_cheap_div" v-show="couponID">( {{$store.state.useConpon.num}}元 )</div>
        <img class="pa_right" src="../../static/obj_img/list_icon_arrRight.png">
      </div>
      <div class="co_moution_box fs16 mb1p mtb54" v-show="false">
        <div class="co_moution_box_div" v-show="$store.state.commInfo.OrderInfo.coupon_amount!=0">已使用优惠券</div>
        <div class="co_moution_box_div" v-show="$store.state.commInfo.OrderInfo.coupon_amount==0">未使用优惠券</div>
      </div>
      <div class="co_moution_box fs16 mb1p mtb42">
        <div class="co_moution_box_div">账户余额：{{GifCard}}</div>
        <div :class="[eosButton_ck]" @click="eosButton">
          <div :class="[eosButton_div]"></div>
        </div>
      </div>
      <div class="frieWork_e">
        <div class="co_moution_box_div">实际付款：</div>
        <div class="co_moution_box_Money fs18">￥{{SumPrice}}</div>
      </div>
    </div>
    <div class="pay_button" @click="PayOrder">立即支付
      <span v-show="repay">{{rocallTime}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      beginTime: new Date(),
      couponID: this.$store.state.useConpon.id || false,
      activeAddress: '',
      custemail: this.$store.state.connectionObj.email || '',
      singlePrice: this.$store.state.commInfo.OrderInfo.price,
      custName: this.$store.state.connectionObj.name || '',
      contNum: this.$store.state.buyNumber,
      GetPhon: this.$store.state.connectionObj.phone || '',
      canOn_mu: this.$store.state.buyNumber == 1 ? 'disSideColor' : 'onSideColor',
      canOn_ad: this.$store.state.buyNumber == 99 ? 'disSideColor' : 'onSideColor',
      GifCard: 0,
      eosButton_ck: 'eosButton',
      eosButton_div: 'eosButton_div',
      eosNumber: 0,
      repay: false,
      rocallTime: 0,
      getVoucher: false
    }
  },
  created() {
    if (this.$store.state.commInfo.OrderInfo.order_amount) {
      this.getTimeInfo();
      this.repay = true;
    } else {
      this.repay = false;
    }
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
      }
    } else {
      this.onBridgeReady();
    }
    let a = {
      access_token: this.$store.state.usrInfomation.access_token
    }
    this.$store.commit('ConectionPara', a)
    let getString = this.$store.state.getParamString;
    let postString = getString.replace('?', '');
    this.$http.get(this.$store.state.serverHost + '/yqhbsp/account/show' + getString).then(m => this.getUsrWalletInfo(m.data)).catch(r => console.log(r));
  },
  methods: {
    ChesNum: function () {
      (this.contNum.length == 0 || !parseInt(this.contNum)) || this.contNum == 0 ? this.contNum = 1 : '';
    },
    ChPaNm: function (statue) {
      statue && this.contNum < 99 ? this.contNum++ : '';
      !statue && this.contNum > 1 ? this.contNum-- : '';
    },
    eosButton: function () {
      this.eosButton_ck = this.eosNumber % 2 === 0 ? 'eosButton_on' : 'eosButton_do';
      this.eosButton_div = this.eosNumber % 2 === 0 ? 'eosButton_div eosButton_div_runR' : 'eosButton_div eosButton_div_runL';
      this.eosNumber++
    },
    PayOrder: function () {
      this.CreatOrderInfo();
    },
    ConectList: function () {
      this.$router.push({ name: 'cnec', query: { choose: true } })
    },
    vouchersList: function () {
      this.getVoucher?this.$router.push({ name: 'vouc', query: { amount: this.SumPrice } }):this.$toast.bottom('无优惠券可用')
      
    },
    getTimeInfo() {
      this.$store.commit('ConectionPara', {})
      let getString = this.$store.state.getParamString;
      let postString = getString.replace('?', '');
      this.$http.get(this.$store.state.serverHost + '/yqhbsp/config/getSystem' + getString).then(m => this.ComputetTime(m.data.record)).catch(r => console.log(r));
    },
    ComputetTime(data) {
      let st = data.sys_time.replace(/\-/g, '/'), ct = this.$store.state.commInfo.OrderInfo.cmTime.replace(/\-/g, '/')
      let ts = new Date(st).getTime(), tc = new Date(ct).getTime()
      let cm = (15 * 60 * 1000) - (ts - tc)
      cm > 60000 ? this.rocallTime = '00:' + (new Date(cm).getMinutes() < 10 ? '0' + new Date(cm).getMinutes() : new Date(cm).getMinutes()) + ':' + (new Date(cm).getSeconds() < 10 ? '0' + new Date(cm).getSeconds() : new Date(cm).getSeconds()) : this.rocallTime = '00:00:' + (new Date(cm).getSeconds() < 10 ? '0' + new Date(cm).getSeconds() : new Date(cm).getSeconds())
      this.runBack(cm)
    },
    runBack(cm) {
      if (cm > 0) {
        cm > 60000 ? this.rocallTime = '00:' + (new Date(cm).getMinutes() < 10 ? '0' + new Date(cm).getMinutes() : new Date(cm).getMinutes()) + ':' + (new Date(cm).getSeconds() < 10 ? '0' + new Date(cm).getSeconds() : new Date(cm).getSeconds()) : this.rocallTime = '00:00:' + (new Date(cm).getSeconds() < 10 ? '0' + new Date(cm).getSeconds() : new Date(cm).getSeconds())
        let _msThis = this;
        setTimeout(function () {
          cm -= 1000
          _msThis.runBack(cm)
        }, 1000);
      } else {
        this.$router.go(-1)
      }
    },
    getCouponList() {
      let v = {
        access_token: this.$store.state.usrInfomation.access_token
      }
      this.$store.commit('ConectionPara', v)
      let getString = this.$store.state.getParamString;
      let postString = getString.replace('?', '');
      this.$http.get(this.$store.state.serverHost + '/yqhbsp/coupon/index' + getString).then(m => this.getThisTimeCouponList(m.data)).catch(r => this.$toast.bottom(r));
    },
    getThisTimeCouponList(data) {
      data.records.length != 0 ? this.getVoucher = true : '';
    },
    CreatOrderInfo() {
      if (this.repay) {
        let cr = {
          order_id: this.$store.state.commInfo.Event_id,
          pay_channel: 'WXPAY',
          order_amount: this.$store.state.commInfo.OrderInfo.order_amount,
          is_balance: this.$store.state.commInfo.OrderInfo.balance_amount,
          coupon_id: '',
          access_token: this.$store.state.usrInfomation.access_token
        }
        this.$store.commit('ConectionPara', cr)
        let getString = this.$store.state.getParamString;
        let postString = getString.replace('?', '');
        this.$http.get(this.$store.state.serverHost + '/yqhbsp/order/payAgain' + getString).then(m => this.onBridgeReady(m.data)).catch(r => this.$toast.bottom(r));
      } else {
        if (this.custName == '' || this.phone == '') {
          this.$toast.bottom('请输入联系人信息')
          return false
        }
        let cr = {
          event_id: this.$store.state.commInfo.Event_id,
          order_name: this.$store.state.commInfo.OrderInfo.event_name,
          order_amount: this.$store.state.commInfo.OrderInfo.price * this.contNum,
          number: this.contNum,
          pay_channel: 'WXPAY',
          email: this.custemail,
          realname: this.custName,
          use_phone: this.GetPhon,
          is_balance: '0',
          coupon_id: this.$store.state.useConpon.id || '',
          access_token: this.$store.state.usrInfomation.access_token
        }
        this.$store.commit('ConectionPara', cr)
        let getString = this.$store.state.getParamString;
        let postString = getString.replace('?', '');
        this.$http.get(this.$store.state.serverHost + '/yqhbsp/order/wxPayRequest' + getString).then(m => this.onBridgeReady(m.data)).catch(r => this.$toast.bottom(r));
      }
    },
    onBridgeReady(arr) {
      var _this = this;
      if (arr.errcode == 400) {
        this.$toast.center(arr.errmsg)
        return false
      }
      let Pi = {
        order_id: arr.record.order_id,
        paid_amount: arr.record.paid_amount,
        pay_time: arr.record.pay_time
      }
      this.$store.commit('savePayOrderInfo', Pi)
      if (arr.errcode == 200) {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', arr.record.pay_info,
          function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
              _this.$router.replace({ name: 'payCop', query: { s: 's' } })
            } else {
              _this.$router.replace({ name: 'ordt', query: { orderID: arr.record.order_id } })
            }
          }
        );
      } else {
        _this.$router.replace({ name: 'payCop', query: { s: 'f' } })
        this.$toast.center(arr.errmsg)
      }
    },
    getUsrWalletInfo(data) {
      if (data.errcode === 200) {
        this.GifCard = data.record.balance || 0;
      } else {
        this.$toast.center(data.errmsg)
        this.GifCard = 0;
      }
    }
  },
  watch: {
    contNum: function () {
      this.canOn_ad = this.contNum == 99 ? 'disSideColor' : 'onSideColor'
      this.canOn_mu = this.contNum == 1 || this.contNum.length == 0 || this.contNum == 0 ? 'disSideColor' : 'onSideColor'
      // this.SumPrice = this.eosNumber % 2 != 0 ? parseInt(this.singlePrice * (this.contNum || 1) - this.GifCard) : parseInt(this.singlePrice * (this.contNum || 1));
    }
  },
  computed: {
    SumPrice: function () {
      if (!this.repay) {
        //!parseInt(this.contNum)?this.contNum = 1:this.contNum = parseInt(this.contNum)
        this.$store.commit('savebuyNumber', this.contNum)
        let chag = this.eosNumber % 2 != 0 ? parseInt(this.singlePrice * (this.contNum || 1) - this.GifCard) - (this.$store.state.useConpon.num || 0) : parseInt(this.singlePrice * (this.contNum || 1)) - (this.$store.state.useConpon.num || 0);
        return chag < 0 || !parseInt(chag) ? this.singlePrice : chag
      } else {
        return this.$store.state.commInfo.OrderInfo.order_amount
      }
    }
  },
  mounted() {
    this.getCouponList() 
  }
}

</script>

<style>
body {
  background-color: #f5f5f5
}

.mb1p {
  margin-bottom: 1%;
}

.mb1x {
  margin-bottom: 1px;
}

.toDndend {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  align-items: center;
  -webkit-align-items: center;
}

.co_main {
  min-height: 100vh;
}

.co_main,
.ma_pay_info {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  float: left;
  width: 100%;
}

.pa_right {
  float: right;
  height: 16px;
}

.fs18 {
  font-size: 18px;
}

.fs16 {
  font-size: 16px;
}

.co_moution_box {
  float: left;
  width: 92.4%;
  padding: 3.8%;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  color: #333333;
}

.co_moution_box_div {
  float: left;
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}
.co_moution_box_div_between{
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.co_moution_cheap_div {
  margin-right: 5%;
  font-size: 12px;
  color: #666666;
}

.co_moution_box_input {
  float: left;
  flex: 1;
  -webkit-flex: 1;
  height: 32px;
  border: 0;
  font-size: 16px;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0 0 0 2%;
  margin: 0;
  background-color: #f2f2f2;
  outline: none
}

.bkb {
  background-color: #f2f2f2;
  -webkit-border-top-right-radius: 3px;
  -webkit-border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 8px;
  margin-left: -3px;
}

.mtb42 {
  padding: 3.6% 3.8%;
}

.mtb66 {
  padding: 5.6% 3.8%;
}

.mtb54 {
  padding: 4.5% 3.8%;
}

.co_info {
  float: left;
  width: 100%;
  /* padding: 3.8%; */
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  color: #333333;
  background-color: #ffffff;
  margin-bottom: 1%;
}

.co_info_img {
  width: 35%;
  margin: 3.8% 0 3.8% 3.8%
}

.co_info_div {
  flex: 1;
  -webkit-flex: 1;
  margin-left: 6.2%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 2%;
  margin: 1.8% 0 1.8% 3.8%;
}

.co_info_div div {
  flex: 1;
  -webkit-flex: 1;
  font-size: 12px;
}
.co_info_div div:first-child {
  font-size: 16px;

}
.co_info_div div:last-child {
  color: #ff7d54
}

.co_info_div div:nth-child(2) {
  margin: 4% 0;
}

#mu {
  border: 1px solid;
  width: 30px;
  height: 30px;
  line-height: 29.1px;
  text-align: center;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-size: 18px;
}

#sh {
  border: 1px solid #a9a9a9;
  width: 60px;
  height: 38px;
  line-height: 38px;
  margin: 0 10px;
  padding: 0;
  font-size: 16px;
  text-align: center;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  outline: none;
}

#ad {
  border: 1px solid;
  width: 30px;
  height: 30px;
  line-height: 29.1px;
  text-align: center;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-size: 18px;
}

.onSideColor {
  color: #ff604f;
  border-color: #ff604f;
}

.onSideColor:active {
  color: #ffffff;
  background-color: #ff604f;
  border-color: #ff604f;
}

.disSideColor {
  color: #a9a9a9;
  border-color: #a9a9a9;
}

.frieWork_e {
  float: left;
  width: 92.4%;
  padding: 3.8%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  color: #333333;
  font-weight: bold
}

.co_moution_box_Money {
  color: #ff604f;
  font-size: 24px
}

.eosButton {
  width: 56px;
  background-color: #ededed;
  height: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}

.eosButton_on {
  width: 56px;
  background-color: #4BD48D;
  height: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  -webkit-animation: selectOnpay 0.5s;
}

@-webkit-keyframes selectOnpay {
  from {
    background-color: #ededed
  }
  to {
    background-color: #4BD48D
  }
}

.eosButton_do {
  width: 56px;
  background-color: #ededed;
  height: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  -webkit-animation: selectDopay 0.5s;
}

@-webkit-keyframes selectDopay {
  from {
    background-color: #4BD48D
  }
  to {
    background-color: #ededed
  }
}

.eosButton_div {
  width: 26px;
  margin: 2px;
  background-color: #ffffff;
  height: 26px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  box-shadow: 0 1px 2px 1px #aaaaaa
}

.eosButton_div_runR {
  margin-left: 28px;
  box-shadow: 0 1px 1px 1px #5ae57e;
  -webkit-animation: RunOnpay 0.3s;
}

@-webkit-keyframes RunOnpay {
  from {
    margin-left: 0
  }
  to {
    margin-left: 26px
  }
}

.eosButton_div_runL {
  box-shadow: 0 1px 1px 1px #aaaaaa;
  -webkit-animation: RunDopay 0.3s;
}

@-webkit-keyframes RunDopay {
  from {
    margin-left: 26px
  }
  to {
    margin-left: 0
  }
}

.ma_pay_info {
  flex: 1;
  -webkit-flex: 1;
}

.pay_button {
  float: left;
  width: 100%;
  height: 46px;
  line-height: 46px;
  background-color: #ff604f;
  color: #ffffff;
  text-align: center
}

.pay_button span {
  margin-left: 5px;
}

.anouncement_alert {
  width: 92.4%;
  padding: 1% 3.8%;
  font-size: 12px;
  color: #999999
}
</style>
