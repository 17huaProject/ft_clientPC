<template>
  <div id="just_show">
    <div id="TopMenuArea">
      <logo :PageFrom='"list"'></logo>
      <indexmenu :SCWidth='screenWidth' :seOnC='"about"'></indexmenu>
    </div>
    <div id="TopBannerArae_about">
      <div id="TopBannerText_about_1" :class="fontSize1(screenWidth)">我们是中文第一家</div>
      <div id="TopBannerText_about_2" :class="fontSize2(screenWidth)">绘画创造力平台<br>2小时 1幅画<br>15分钟 共享空间</div>
      <img id="TopBannerImg_about_1" src="//image.17hua.me/upload/image/201709/1505371268775678.png">
    </div>
    <abus :SCWidth='screenWidth' :SCHight='screenHight'></abus>
    <div id="TopBannerArae_join">
      <div id="TopBannerText_join_1" :class="fontSize1(screenWidth)">加入我们</div>
      <div id="TopBannerText_join_2" :class="fontSize2(screenWidth)">你也是充满快乐和激情的人？<br>你也对艺术充满热爱？<br>你也想加入？<br>欢迎</div>
      <div id="JoinButtom_text" @click="$router.push({path:'/ju'})">加入我们</div>
    </div>
    <!-- <abut :SCWidth='screenWidth' :SCHight='screenHight'></abut> -->
    <aboutb :PageFrom='"list"'></aboutb>
  </div>
</template>

<script>
import menu from './../ForIndex/IndexMenu.vue'
import logo from './../ForIndex/Indexlogo.vue'
import abus from './../ForIndex/AboutSecoend.vue'
import abut from './../ForIndex/AboutThird.vue'
import ISBD from './../ForIndex/IndexBottom.vue'
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
    setSise(wd) {
      if (wd > 1200) {
        return 'textInput_indexA_500'
      } else if (wd < 660) {
        return 'textInput_indexA_100'
      } else {
        return 'textInput_indexA_300'
      }
    },
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
    handleSelect(item) {
      console.log(item);
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
    // this.restaurants = this.loadAll();
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenWidth = window.screenWidth = document.body.clientWidth
        that.screenHight = window.screenHight = document.documentElement.clientHeight
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
    indexmenu: menu,
    logo: logo,
    abus: abus,
    abut: abut,
    aboutb: ISBD,
  },
}
</script>

<style>
#just_show {
  width: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#TopBannerArae_about {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background: url('//image.17hua.me/upload/image/201709/1506675929430897.png') no-repeat center;
  background-size: cover;
  align-items: center;
  justify-content: center;
}

#TopBannerText_about_1 {
  width: 100%;
  text-align: center;
  color: #ffffff;
  letter-spacing: 10px;
   font-weight: bold;
  word-spacing: 5px;
  text-shadow: 0 0 2px #666
}

#TopBannerText_about_2 {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: #ffffff;
   font-weight: bold;
  letter-spacing: 5px;
  word-spacing: 5px;
  text-shadow: 0 0 2px #666
}

#TopBannerArae_join {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background: url('//image.17hua.me/upload/image/201709/1famtcrralofwa3dr8qpdcvzn29s0h4c.png');
  background-size: cover;
  align-items: center;
  justify-content: center;
}

#TopBannerText_join_1 {
  width: 100%;
  text-align: center;
  color: #ffffff;
  letter-spacing: 10px;
  word-spacing: 5px;
}

#TopBannerText_join_2 {
  margin-top: 5%;
  width: 100%;
  text-align: center;
  color: #ffffff;
  letter-spacing: 5px;
  word-spacing: 5px;
}
#JoinButtom_text{
  width: 120px;
  height: 40px;
  background-color: #ff605f;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  border-radius: 50px;
  margin: 5% 0 0 0;
  cursor: pointer;
}
#JoinButtom_text:hover{
  background-color: #ff7d54;
}
.fs48 {
  font-size: 48px;
}

.fs24 {
  font-size: 36px;
}

.fs22 {
  font-size: 32px;
  line-height: 50px;
}

.fs14 {
  font-size: 24px;
  line-height: 30px;
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
  border-bottom:1px solid #f1f1f1;
  background-color: #fff;
}

#TopBannerImg_about_1 {
  position: absolute;
  bottom: 10px;
  right: 10px;
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
</style>
