<template>
  <div id="CUV_area">
      <img src="//image.17hua.me/upload/image/201712/1512106191347755.png">
      <img src="//image.17hua.me/upload/image/201712/15121061913861097.png">
      <img src="//image.17hua.me/upload/image/201712/1512711053595299.png">
      <!-- <img src="//image.17hua.me/upload/image/201712/1512106528258793.png"> -->
      <!-- <img src="//image.17hua.me/upload/image/201712/1512106528340917.png"> -->
      <img src="//image.17hua.me/upload/image/201712/1512106528002231.png">
      <img src="//image.17hua.me/upload/image/201712/15121067491061093.png">
      <img src="//image.17hua.me/upload/image/201712/15121067490851077.png">
      <img src="//image.17hua.me/upload/image/201712/1512711053946343.png">
      <img src="//image.17hua.me/upload/image/201712/1512711053956528.png"  v-show="!signAreaShow" @click="signAreaShow=true">
      <div class="JoinUsMagssArea animated fadeInUp" v-show="signAreaShow"> 
        <div class="JoinUsMagssArea_title">申请信息</div>
        <div class="JoinUsMagssArea_line">姓名：<input maxlength="30" v-model="j_name"></div>
        <div class="JoinUsMagssArea_line">电话：<input maxlength="11" v-model="j_phone"></div>
        <div class="JoinUsMagssArea_line">邮箱：<input maxlength="50" v-model="j_email" autocomplete="true" type="mail"></div>
        <div class="JoinUsMagssArea_line">职位：<input maxlength="50" v-model="j_position"></div>
        <div class="JoinUsMagssArea_line" style="border:0">自我描述：</div>
        <div class="JoinUsMagssArea_line" style="margin-top:0;border:0"><textarea placeholder="请在这里进行自我描述" maxlength="200" v-model="j_description"></textarea></div>
        <div class="JoinUsMagssArea_sign" @click="joinUsDP()">{{logText}}</div>
      </div>
      <img src="//image.17hua.me/upload/image/201712/1512106749264354.png" v-show="!signAreaShow">
  </div>
</template>

<script>
export default {
    data(){
        return{
            signAreaShow:false,
            j_name: '',
            j_phone: '',
            j_email: '',
            j_position: '',
            j_description: '',
            logText:'提交申请'
        }
    },
    methods: {
        joinUsDP() {
            if(this.j_name==''||this.j_phone.length<11||this.j_email.length<6||this.j_position==''||this.j_description.length<20){
                this.$toast.center('请填写完整信息');
                return false
            }
            let w = {
                name: this.j_name,
                phone: this.j_phone,
                email: this.j_email,
                position: this.j_position,
                description: this.j_description
            }
            this.$store.commit('ConectionPara', w)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/user/joinus' + getString).then(m => this.getBack(m.data)).catch(r => console.log(r));
        },
        getBack(data) {
            if (data.errcode == 200) {
                this.signAreaShow = false;
                this.logText = '修改信息并重新提交';
                this.$toast.center('提交成功，我们尽快联系你')
            } else {
                this.$toast.center(data.errmsg)
            }
        }
    },
};
</script>

<style>
#CUV_area,
.JoinUsMagssArea {
  width: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
#CUV_area img {
  width: 100%;
  float: left;
}
.MagssJoinUs {
  float: left;
  width: 180px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  background-color: #ff3f5c;
  border-radius: 50px;
  margin-top: -60px;
  margin-bottom: 28px;
}
.JoinUsMagssArea_title{
    padding: 10px 0;
    font-size: 20px;
}
.JoinUsMagssArea_line{
    margin: 20px 5% 0 5%;
    padding: 0 0 10px 0;
    width: 90%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    font-size: 16px;
}
.JoinUsMagssArea_line input{
    flex: 1;
    outline: none;
    border: 0;
    padding: 0;
    font-size: 16px;
}
.JoinUsMagssArea_line textarea{
    flex: 1;
    outline: none;
    border: 0;
    padding: 0 1.6%;
    font-size: 16px;
    height: 120px;
    line-height: 30px;
    resize: none;
    background-color: #eeeeee;
}
.JoinUsMagssArea_sign{
    height: 46px;
    line-height: 46px;
    margin-top: 20px;
    background-color: #ff3f5c;
    color: #ffffff;
    width: 100%;
    text-align: center;
}
</style>

