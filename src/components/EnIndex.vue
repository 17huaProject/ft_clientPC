<template>
  <div id="en_version_index">
      <div id="menuArea">
          <!-- <img id="menuAreaImg" src="../../static/obj_img/enversion_img/mune_17_logo.png"> -->
          <img id="menuAreaImg" src="//image.17hua.me/upload/image/201711/1511776526681625.png">
          <img  src="//image.17hua.me/upload/image/201711/1511776526696568.png">
          <div id="menuFlex1"></div>
          <div id="menuFunct" @click="$router.go(-1)">En / 中</div>
      </div>
      <div id="ShowTitleArea">
          <img id="TitleImgBk" src="../../static/obj_img/enversion_img/bj.png">
          <img id="TitleImgText" class="animated fadeInUp" src="../../static/obj_img/enversion_img/banner_word.png">
      </div>
      <div id="ShowSimpleLine">
          <div id="SimpleIntroduceLogoArea" :class="screenWidth>=900?'SIDLA2':'SIDLA1'">
              <div class="IntroduceLogoArea">
                  <img :class="screenWidth>=900?'ILA2':'ILA1'" src="../../static/obj_img/enversion_img/home_icon_socialize.png">
                  <div>SOCIALIZE</div>
              </div>
              <div class="IntroduceLogoArea">
                  <img :class="screenWidth>=900?'ILA2':'ILA1'" src="../../static/obj_img/enversion_img/home_icon_experience.png">
                  <div>EXPERIENCE</div>
              </div>
              <div class="IntroduceLogoArea">
                  <img :class="screenWidth>=900?'ILA2':'ILA1'" src="../../static/obj_img/enversion_img/home_icon_discover.png">
                  <div>DISCOVER</div>
              </div>
          </div>
          <div id="SimpleIntroduceText" :style="screenWidth>=900?'text-align: justify;padding:1% 0 5% 0':'justify;padding:20% 0'">
              We welcome art enthusiasts and newcomers who have no experience in painting with open arms. With many beautiful artworks to choose from, our professional artists will take you through step by step to help you paint the artwork you have selected. By the end of the session, you will leave with your own unique version of the painting.  
          </div>
      </div>
      <div id="AboutUsLine">
          <div :style="screenWidth>=900?'letter-spacing: 2px;':''">
              <p>ABOUT US</p>
              The idea for this project originated from a brief trip to Whistler, where we met a renowned wildlife Canadian artist who was holding a showcasing event. After almost one hour of speaking about the artist’s works and about the art industry, she offered our founder to teach her how to paint. Within one hour, she created her first-ever painting, and she opened her eyes to a whole new, colorful world. This helped her realize that she needs to bring this experience back home to Shanghai, and create a platform in which the rest of the Chinese public can also unlock their creativity and experience a new artistic lifestyle.
          </div>
      </div>
      <div id="AboutUsLineSec" >
          <div class="AboutByAreaSet" :class="screenWidth>=1000?'':'ABAS1'">
              <img src="../../static/obj_img/enversion_img/pic_01.png" :style="screenWidth>=1000?'margin-right:5%':''">
              <div>
                  After a few months of research and exploration, in June 2017, together with the painting (17) www.17hua.me quietly came to Shanghai. From a person's dream to nine new team, to create a new technology + creativity + painting platform.
              </div>
          </div>
          <div class="AboutByAreaSet" v-show="screenWidth>=1000">
              <div :style="screenWidth>=1000?'margin-right:5%':''">
                  Along with more than 20 art educators and businesses from Canada and the United States, we have developed a wide range of unique painting courses. The objective is to guide customers create an unique painting of their own in just two hours.
              </div>
              <img src="../../static/obj_img/enversion_img/pic_02.png">
          </div>
          <div class="AboutByAreaSet ABAS1" v-show="screenWidth<1000">
              <img src="../../static/obj_img/enversion_img/pic_02.png">
              <div :style="screenWidth>=1000?'margin-right:5%':''">
                  Along with more than 20 art educators and businesses from Canada and the United States, we have developed a wide range of unique painting courses. The objective is to guide customers create an unique painting of their own in just two hours.
              </div>
          </div>
          <div class="AboutByAreaSet" :class="screenWidth>=1000?'':'ABAS1'">
              <img src="../../static/obj_img/enversion_img/pic_03.png" :style="screenWidth/1000>=1?'margin-right:5%':''">
              <div>
                  With this business model, 17Hua hopes to reach 200 million people across China. Our objective is to help the Chinese public experience a new artistic lifestyle through one art measure, and allow them to unlock their creativity and their own unique senses of color. Our events are also a place for socialization for you and your friends, family and colleagues; a place in which you can eat, drink and socialize all the while honing a new artistic skill. 
              </div>
          </div>
      </div>
      <div id="AboutUsImgBackgroud">
          <img v-show="screenWidth>=1200" src="../../static/obj_img/enversion_img/home_bj_03.png">
          <div :class="screenWidth>=1200?'AUIBG2':'AUIBG1'">
              We put importance on space sharing. This allows us to partner with event-associated venues and provide beautiful (learning environment for our customers) spaces for our customers to learn to paint while enjoying delicious food and beverages. Furthermore, we also make effort to also help the less fortunate through various volunteer programs. Recently, we have involved ourselves in working with autistic children, helping them discover their artistic skills and find a brand new way of expression. We encourage our customers to donate their artworks to Autistic Children’s Centre to inspire them and increase their creativity.
          </div>
          <img src="../../static/obj_img/enversion_img/home_bj_04.png">
      </div>
      <div id="JoinUsArea">
          <div id="JoinUsTitle" :class="screenWidth>=800?'JUTE2':'JUTE1'">
              <img src="../../static/obj_img/enversion_img/home_icon_03.png" :style="screenWidth<800?'margin-right:0':''">
              <div>
                  Have Passion for Art?<br>
                  Looking for New Experience?<br>
                  Planning a Unique Night Out?<br>
                  Welcome.
              </div>
          </div>
          <div id="JoinUsInputForm" v-show="screenWidth>=800">
              <div class="JoinUs">
                  <span>Name:</span>
                   <input v-model="j_name" maxlength="20">
              </div>
              <div class="JoinUs">
                  <span>Tel:</span>
                  <input v-model="j_phone" maxlength="11">
              </div>
              <div class="JoinUs">
                  <span>E-mail:</span>
                  <input v-model="j_email" maxlength="30">
              </div>
              <div class="JoinUs">
                  <span>Evaluation:</span>
                  <textarea v-model="j_description" maxlength="120"></textarea>
              </div>
          </div>
          <div id="JoinUsInputForm_2" v-show="screenWidth<800">
              <div class="JoinUs_2">
                  <input placeholder="Name"  v-model="j_name" maxlength="20">
              </div>
              <div class="JoinUs_2">
                  <input placeholder="Tel" v-model="j_phone" maxlength="11">
              </div>
               <div class="JoinUs_2">
                  <input placeholder="E-mail" v-model="j_email" maxlength="30">
              </div>
              <div class="JoinUs_2">
                  <textarea placeholder="Evaluation" v-model="j_description" maxlength="120"></textarea>
              </div>
          </div>
          <div id="JoinUsbuttonA" @click="joinUsDP">Join Us</div>
      </div>
      <div id="EnVersionlastArea">
          <div id="BottomInfoMark" :class="screenWidth>=640?'BIM2':'BIM1'">
              <img src="../../static/obj_img/enversion_img/17hua2wm.png" :style="screenWidth>=640?'margin-right: 5.4%;':''">
              <img src="../../static/obj_img/enversion_img/contact_us.png" style="max-width:390px">
          </div>
          <div id="cardbyWebligel">
             Copyright © 2017 一袋信息科技 , 沪ICP备17027245号-1
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      j_name: "",
      j_phone: "",
      j_email: "",
      j_position: "EnJoin",
      j_description: ""
    };
  },
  methods: {
    joinUsDP() {
      if (
        this.j_name == "" ||
        this.j_phone.length < 11 ||
        this.j_email.length < 6 ||
        this.j_position == "" ||
        this.j_description.length < 20
      ) {
        this.$toast.center("请填写完整信息");
        return false;
      }
      let w = {
        name: this.j_name,
        phone: this.j_phone,
        email: this.j_email,
        position: this.j_position,
        description: this.j_description
      };
      this.$store.commit("ConectionPara", w);
      let getString = this.$store.state.getParamString;
      let postString = getString.replace("?", "");
      this.$http
        .get(this.$store.state.serverHost + "/yqhbsp/user/joinus" + getString)
        .then(m => this.getBack(m.data))
        .catch(r => console.log(r));
    },
    getBack(data) {
      if (data.errcode == 200) {
        this.$toast.center("提交成功，我们尽快联系你");
      } else {
        this.$toast.center(data.errmsg);
      }
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screenWidth = window.screenWidth = document.body.clientWidth;
      })();
    };
  }
};
</script>

<style>
body {
  background-color: #161616;
}
#en_version_index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#menuArea {
  background-color: #ffffff;
  width: 100%;
  max-width: 1280px;
  height: 72px;
  display: flex;
  align-items: center;
}
#menuAreaImg {
  margin-left: 3.2%;
}
#menuFlex1 {
  flex: 1;
}
#menuFunct {
  font-size: 18px;
  color: #161616;
  margin-right: 3.2%;
  cursor: pointer;
}
#menuFunct:hover {
  font-weight: bold;
}
#menuFunct img {
  height: 6px;
  margin-left: 10px;
}
#ShowTitleArea {
  width: 100%;
  max-width: 1280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#TitleImgBk {
  width: 100%;
}
#TitleImgText {
  position: absolute;
  width: 100%;
  max-width: 880px;
}
#ShowSimpleLine {
  background-color: #ffffff;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 5% 0; */
}
#SimpleIntroduceLogoArea {
  width: 90%;
  max-width: 902px;
}
.SIDLA2 {
  padding: 3% 0 0 0;
  display: flex;
  justify-content: space-between;
}
.SIDLA1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.IntroduceLogoArea {
  width: 190px;
  font-size: 36px;
  color: #444444;
  letter-spacing: 0;
  line-height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}
.ILA2 {
  height: 68px;
  padding: 20% 0;
}
.ILA1 {
  height: 68px;
  padding: 20% 0 5% 0;
}
#SimpleIntroduceText {
  font-family: "Microsoft YaHei UI", sans-serif;
  font-size: 16px;
  color: #444444;
  letter-spacing: 0;
  line-height: 28.8px;
  width: 90%;
  padding: 5% 0 0 0;
  max-width: 902px;
}
#AboutUsLine {
  background-color: #101010;
  background: url("../../static/obj_img/enversion_img/bj_02.png");
  width: 100%;
  max-width: 1280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 48px;
}
#AboutUsLine p {
  text-align: center;
  font-size: 48px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 48px;
  font-weight: bold;
}
#AboutUsLine div {
  width: 90%;
  max-width: 902px;
  font-size: 16px;
  color: #ffffff;

  line-height: 28.8px;
}
#AboutUsLineSec {
  width: 100%;
  max-width: 1280px;
  padding: 0 0 4.3% 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}
.AboutByAreaSet {
  width: 88.2%;
  padding: 5% 0 0 0;
  max-width: 1130px;
  display: flex;
  font-family: "Microsoft YaHei UI", sans-serif;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #333333;
  letter-spacing: 2.25px;
  line-height: 28.8px;
}
.ABAS1 {
  flex-direction: column;
  align-items: center;
}
.ABAS1 img {
  max-width: 576px;
  width: 100%;
}
.ABAS1 div {
  max-width: 576px;
  margin-top: 5%;
  letter-spacing: 0;
}
#AboutUsImgBackgroud {
  width: 100%;
  max-width: 1280px;
  position: relative;
}
.AUIBG2 {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10.4% 11.4%;
  max-width: 580px;
  width: 45.3%;
  font-size: 18px;
  font-family: "Microsoft YaHei UI", sans-serif;
  color: #ffffff;
  letter-spacing: 2.25px;
  line-height: 28.8px;
}
.AUIBG1 {
  position: relative;
  padding: 10.4% 5%;
  width: 90%;
  color: #ffffff;
  background-color: #161616;
  font-size: 18px;
  font-family: "Microsoft YaHei UI", sans-serif;
  line-height: 28.8px;
  max-width: 576px;
  margin: 0 auto;
}
#AboutUsImgBackgroud img {
  position: relative;
  float: left;
  width: 100%;
}
#JoinUsArea {
  width: 100%;
  max-width: 1280px;
  background-color: #ffffff;
  padding: 3.2% 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
#JoinUsTitle {
  width: 90%;
  max-width: 752px;
}
.JUTE2 {
  display: flex;
  align-items: center;
}
.JUTE1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#JoinUsTitle img {
  width: 50%;
  max-width: 258px;
  margin-right: 10.3%;
}
#JoinUsTitle div {
  flex: 1;
  font-size: 30px;
  color: #444444;
  letter-spacing: 0;
  line-height: 48px;
  font-family: "Microsoft YaHei UI", sans-serif;
}
#JoinUsInputForm {
  width: 100%;
  max-width: 679px;
}
#JoinUsInputForm_2 {
  width: 90%;
  max-width: 679px;
}
.JoinUs {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 3.8%;
}
.JoinUs_2 {
  width: 100%;
  margin-top: 3.8%;
  display: flex;
}
.JoinUs span {
  width: 174px;
  font-size: 30px;
  color: #444444;
  letter-spacing: 3.75px;
  line-height: 42px;
}
.JoinUs input {
  padding: 0;
  border: 0;
  border-radius: 4px;
  background-color: #ececec;
  flex: 1;
  height: 42px;
  line-height: 42px;
  margin-left: 7.6%;
  outline: none;
}
.JoinUs_2 input {
  padding: 0;
  border: 0;
  border-radius: 4px;
  background-color: #ececec;
  flex: 1;
  height: 42px;
  line-height: 42px;
  outline: none;
}
.JoinUs input:hover {
  background-color: #cccccc;
}
.JoinUs textarea {
  padding: 0;
  border: 0;
  border-radius: 4px;
  background-color: #ececec;
  flex: 1;
  height: 126px;
  line-height: 42px;
  margin-left: 7.6%;
  resize: none;
  outline: none;
}
.JoinUs_2 textarea {
  padding: 0;
  border: 0;
  border-radius: 4px;
  background-color: #ececec;
  flex: 1;
  height: 126px;
  line-height: 42px;
  resize: none;
  outline: none;
}
.JoinUs textarea:hover {
  background-color: #cccccc;
}
#JoinUsbuttonA {
  width: 31.1%;
  min-width: 280px;
  background-color: #ff3f5c;
  color: #ffffff;
  text-align: center;
  height: 64px;
  line-height: 64px;
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 3.75px;
  border-radius: 100px;
  margin: 6% 0 2.8% 0;
  cursor: pointer;
  font-family: "Microsoft YaHei UI", sans-serif;
}
#JoinUsbuttonA:hover {
  background-color: #ff604f;
}
#EnVersionlastArea {
  width: 100%;
  max-width: 1280px;
  background-color: #1c1515;
  display: flex;
  align-items: center;
  flex-direction: column;
}
#BottomInfoMark {
  max-width: 934px;
  width: 100%;
  padding: 4.3% 0;
  border-bottom: 1px solid #3b3b3b;
}
.BIM2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.BIM1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#cardbyWebligel {
  max-width: 934px;
  width: 100%;
  height: 55px;
  line-height: 55px;
  font-size: 12px;
  color: #999999;
  letter-spacing: 1.26px;
  text-align: center;
}
</style>
