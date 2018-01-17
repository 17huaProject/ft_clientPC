<template>
  <div id="IndexArea">
    <div id="TopMenuArea">
      <logo :PageFrom='"list"'></logo>
      <indexmenu :SCWidth='screenWidth' :seOnC='"index"'></indexmenu>
    </div>
    <div id="TopBannerArae" :class="screenWidth>=800?'tbabkAs':''">
      <img v-show="screenWidth<800" src="//image.17hua.me/upload/image/201711/1510724651042160.png">
      <!-- <video autoplay id="lifestyle-lapse" loop="" mute="">
        <source src="http://image.17hua.me/upload/video/201709/1506411772545584.mp4" type="video/mp4">
      </video> -->
      <!-- <img id="slogen_img" src="../../static/obj_img/webDte_img/slog-min.png"> -->
      <!-- <div id="textInput_index" :class="setSise(screenWidth)">
        <el-autocomplete class="inline-input" size="large" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
        <img src="../../static/obj_img/webDte_img/home_search_icon_01.png" @click="runAndSearch()">
      </div> -->
      <!-- <search v-bind:conditionStyle="true"></search> -->
      <div id="TopBannerText_index_1" style="position:absolute;" :class="fontSize1(screenWidth)">解锁 你的 创造力</div>
      <!-- <div id="TopBannerText_about_2" style="position:absolute" :class="fontSize2(screenWidth)">一起画<br>帮助你体验绘画的乐趣<br>发现全新的自己</div> -->
      <!-- <img id="TopBannerImg_about_1" style="position:absolute" src="http://image.17hua.me/upload/image/201709/1505371268775678.png"> -->
    </div>
    <indexs :SCWidth='screenWidth' :SCHight='screenHight'></indexs>
    <indext :SCWidth='screenWidth'></indext>
    <img id="IndexBottomImg" src="//image.17hua.me/upload/image/201709/1506601704878228.png"> 
    <!-- v-if="PageFrom!='list'" -->
    <indexf :SCWidth='screenWidth'></indexf>
    <indexb></indexb>
    <loginbox :SCWidth='screenWidth'></loginbox>
    <!-- <detailInfobox></detailInfobox> -->
  </div>
</template>

<script>
var video;
var canvas;
import Search_ from './ForIndex/SearchConditions.vue'
import ISV1 from './ForIndex/IndexSecoend.vue'
import ISV2 from './ForIndex/IndexThird.vue'
import ISV3 from './ForIndex/IndexFouth.vue'
import ISBD from './ForIndex/IndexBottom.vue'
import logo from './ForIndex/Indexlogo.vue'
import login from './ForIndex/loginBox.vue'
import menu from './ForIndex/IndexMenu.vue'
import detailInfobox from './ForList/ListNet.vue'
export default {
  data() {
    return {
      restaurants: [],
      state1: '',
      state2: '',
      screenWidth: document.body.clientWidth,
      screenHight: document.documentElement.clientHeight,
      setBackgroundColor: '',
    };
  },
  methods: {
     fontSize1(wd) {
      if (wd > 600) {
        return 'fs48'
      } else {
        return 'fs24'
      }
    },
    fontSize2(wd) {
      if (wd > 600) {
        return 'fs22'
      } else {
        return 'fs14'
      }
    },
    setSise(wd) {
      if (wd > 1200) {
        return 'textInput_indexA_500'
      } else if (wd < 660) {
        return 'textInput_indexA_100'
      } else {
        return 'textInput_indexA_300'
      }
    },
    runAndSearch() {
      this.$store.commit('saveListKeyWord', this.state2)
      this.$router.push({ path: '/list' })
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "遇见花海中小屋", "address": "12" },
        { "value": "当憨豆遇见火烈鸟", "address": "" },
        { "value": "巴洛斯油画", "address": "" },
        { "value": "小小艺术家", "address": "" },
        { "value": "油画梦", "address": "" },
        { "value": "星空", "address": "" },
        { "value": "蝴蝶", "address": "" },
        { "value": "秋", "address": "" },
        { "value": "All pink - - 我来到你的城市", "address": "" },
        { "value": "生命之火", "address": "" },
      ];
    },
    handleSelect(item) {
      // console.log(item);
    },
    startPlayback() {
      if (!video) {
        video = document.createElement('video');
        video.src = '//image.17hua.me/upload/video/201709/1506411772545584.mp4';
        video.loop = true;
        video.addEventListener('playing', this.paintVideo);
      }
      video.play();
    },
    paintVideo() {
      if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        document.getElementById('TopBannerArae').appendChild(canvas);
      }
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      if (!video.paused) {
        requestAnimationFrame(this.paintVideo);
      }
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function() {
          //that.screenWidth = that.screenWidth
          // console.log(window.screenHight)
          // that.$store.commit('ChangeScreamWidth', that.screenWidth)
          // that.init()
          that.timer = false
        }, 400)
      }
    },
    screenHight(val) {
      if (!this.timerr) {
        this.screenHight = val
        this.timerr = true
        let that = this
        setTimeout(function() {
          that.timerr = false
        }, 400)
      }
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    const that = this
    this.startPlayback()
    window.onresize = () => {
      return (() => {
        //that.startPlayback()
        that.screenWidth = window.screenWidth = document.body.clientWidth
        that.screenHight = window.screenHight = document.documentElement.clientHeight+60
      })()
    }
    window.addEventListener('scroll', function() {
      that.setBackgroundColor = window.scrollY > (that.screenHight - 50) ? 'setBk' : 'rmoveBk';
    });
    // window.addEventListener('scroll', function() {
    //   window.scrollY > 700 ? _this.dpButtom = false : _this.dpButtom = true;
    // });
  },
  components: {
    search: Search_,
    indexs: ISV1,
    indext: ISV2,
    indexf:ISV3,
    indexb: ISBD,
    logo: logo,
    indexmenu: menu,
    loginbox: login,
    detailInfobox: detailInfobox
  },
}
</script>

<style>
#TopBannerText_index_1 {
  padding: 2%;
  text-align: center;
  color: #ffffff;
  letter-spacing: 5px;
  word-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 2px #666
}

#TopBannerText_about_2 {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  letter-spacing: 5px;
  word-spacing: 5px;
}
#TopMenuArea {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  padding:10px 2%;
  width: 96%;
  display: flex;
  align-self: center;
  background: #ffffff;
  border-bottom:1px solid #f1f1f1
}

#lifestyle-lapse {
  z-index: 0;
  position: absolute;
  width: 100%;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.setBk {
  background: rgba(0, 0, 0, 0.8);
  animation: 'beblack' 1s;
}

@keyframes beblack {
  from {
    background: rgba(0, 0, 0, 0)
  }
  to {
    background: rgba(0, 0, 0, 0.8);
  }
}

.rmoveBk {
  background: transparent;
  animation: 'reblack' 0.5s;
}

@keyframes reblack {
  from {
    background: rgba(0, 0, 0, 0.8)
  }
  to {
    background: rgba(0, 0, 0, 0);
  }
}


.fs48 {
  font-size: 48px;
}

.fs24 {
  font-size: 32px;
}

.fs22 {
  font-size: 32px;
  line-height: 50px;
}

.fs14 {
  font-size: 24px;
  line-height: 30px;
}



/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */

#slogen_img {
  max-width: 270px;
  margin-bottom: 2.5%;
  width: 50%;
  padding: 0 5%;
  margin-left: -25%;
}

#IndexArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#TopBannerArae {
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#TopBannerArae img{
  padding-top: 50px;
  width: 100%;
}
.tbabkAs{
  height: 100vh;
  background: url('//image.17hua.me/upload/image/201711/1510724651042160.png') no-repeat center;
  background-size: cover;
}
#textInput_index {
  width: 90%;
  margin: 0 5%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
}

.textInput_indexA_500 input {
  flex: 1;
  padding: 0 20px;
  width: 600px;
  border-radius: 0;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

.textInput_indexA_300 input {
  flex: 1;
  padding: 0 20px;
  border-radius: 0;
  width: 400px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

.textInput_indexA_100 input {
  flex: 1;
  padding: 0 20px;
  border-radius: 0;
  width: 200px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

#textInput_index img {
  height: 32px;
  width: 32px;
  padding: 5px 30px 5.5px 20px;
  
  background-color: #ff605f;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
  position: relative;
}

#textInput_index img:hover {
  background-color: #ff745d;
}
</style>
