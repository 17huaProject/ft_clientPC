<template>
    <div id="IndexMenuArea">
        <div id="IndexMenuArea_l"  v-show="this.reNodepoMosth(SCWidth,true)">
            <!--<div class="tmes_indexMenuArea">首页</div>-->
            <div :class="reternCssOnSelect_one('index')" @click="getRouter('/')">首页</div>
            <div :class="reternCssOnSelect_one('clist')" @click="getRouter('/list')">公开活动</div>
            <div :class="reternCssOnSelect_one('about')" @click="getRouter('/au')">关于我们</div>
            <div :class="reternCssOnSelect_one('joinu')" @click="getRouter('/ju')">加入我们</div>
            <div :class="reternCssOnSelect_one('altpg')" @click="getRouter('/alt')">画媒体</div>
            <!--<div class="tmes_line"></div>
                                                <div class="tmes_indexMenuArea">注册</div>-->
            <div style="flex:1"></div>
            <!-- <city :cityModel='false' :PageFrom='"list"'></city> -->
            <div class="EN_CN" @click="getRouter('/la_en')">中 / En</div>
            <!--<div class="tmel_indexMenuArea_s" @click="starLogin">登录</div>-->
        </div>
        <!-- <div id="IndexMenuArea_f" v-else v-show="this.reNodepoMosth(SCWidth,true)">
            
            <div :class="reternCssOnSelect('index')" @click="getRouter('/')">首页</div>
            <div :class="reternCssOnSelect('clist')" @click="getRouter('/list')">公开活动</div>
            <div :class="reternCssOnSelect('about')" @click="getRouter('/au')">关于我们</div>
            <div :class="reternCssOnSelect('joinu')" @click="getRouter('/ju')">加入我们</div>
        
            <div style="flex:1"></div>
            <city :cityModel='false'></city>
           
        </div> -->
        <div style="flex:1" v-show="this.reNodepoMosth(SCWidth,false)"></div>
        <!-- <i class="el-icon-more iconStyle_top_list" ></i> -->
        <img id="titleMenuAreaSide" @click="maMenu=true" v-show="this.reNodepoMosth(SCWidth,false)" src="//image.17hua.me/upload/image/201711/15113344010141089.png">
        <!-- <i class="el-icon-more iconStyle_top" v-else @click="maMenu=true" v-show="this.reNodepoMosth(SCWidth,false)&&!maMenu"></i> -->
        <div id="listShowMenuHad" v-show="maMenu" @click="maMenu=false">
            <div id="listNodboxMenu" class="animated fadeInDown">
                <div v-if="reternShowOnSelect_one('index')" @click="getRouter('/')">首页</div>
                <div v-if="reternShowOnSelect_one('clist')" @click="getRouter('/list')">公开活动</div>
                <div v-if="reternShowOnSelect_one('about')" @click="getRouter('/au')">关于我们</div>
                <div v-if="reternShowOnSelect_one('joinu')" @click="getRouter('/ju')">加入我们</div>
                <div v-if="reternShowOnSelect_one('altpg')" @click="getRouter('/alt')">画媒体</div>
                <div @click="getRouter('/la_en')">中 / En</div>
            </div>
        </div>
    </div>
</template>

<script>
import city from "./city.vue";
export default {
  data() {
    return {
      maMenu: false,
     
    };
  },
  components: {
    city: city
  },
  methods: {
    // reNodepoMosth(width, statue) {
    //     return width < 600 ? statue ? 'animated fadeOutUp' : 'animated fadeInDown' : statue ? 'animated fadeInDown' : 'animated fadeOutUp'
    // },
    reNodepoMosth(width, statue) {
      return width < 600 ? (statue ? false : true) : statue ? true : false;
    },
    starLogin() {
      this.$store.commit("ShowLoginStatue", true);
    },
    reternCssOnSelect(name) {
      return this.seOnC == name
        ? "tmes_indexMenuArea_hover"
        : "tmes_indexMenuArea";
    },
    reternCssOnSelect_one(name) {
      return this.seOnC == name
        ? "tmel_indexMenuArea_hover"
        : "tmel_indexMenuArea";
    },
    reternShowOnSelect_one(name) {
      return this.seOnC == name ? false : true;
    },
    getRouter(add) {
      this.$route.path != add ? this.$router.push({ path: add }) : "";
    }
  },
  props: ["SCWidth", "PageFrom", "seOnC"]
};
</script>

<style>
#IndexMenuArea {
  display: flex;
  flex: 1;
}

#IndexMenuArea_f {
  flex: 1;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
}

#IndexMenuArea_l {
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
}

.tmes_indexMenuArea {
  margin: 0 0 0 2%;
  color: #ffffff;
  cursor: pointer;
  padding-bottom: 0.5%;
  border-bottom: 3px solid transparent;
}

.tmes_indexMenuArea:hover {
  border-bottom: 3px solid #ffffff;
}

.tmes_indexMenuArea_hover {
  margin: 0 0 0 2%;
  color: #ffffff;
  cursor: pointer;
  padding-bottom: 0.5%;
  border-bottom: 3px solid #ffffff;
}

.tmes_indexMenuArea_s {
  margin: -0.3% 1%;
  padding: 0.3% 1.5%;
  width: 50px;
  text-align: center;
  border-radius: 20px;
  background-color: #ff604f;
  color: #ffffff;
  cursor: pointer;
}

.tmes_indexMenuArea_s:hover {
  background-color: #ff745d;
}

.tmel_indexMenuArea {
  margin: 0 0 -0.3% 2%;
  color: #666666;
  cursor: pointer;
  padding-bottom: 0.5%;
  font-weight: bold;
  /* border-bottom: 3px solid transparent; */
}

.tmel_indexMenuArea:hover {
  color: #000000;
  -webkit-animation: toColor 0.5s;
  /* border-bottom: 3px solid #ffffff; */
}
@-webkit-keyframes toColor {
  from {
    color: #666666;
  }
  to {
    color: #000000;
  }
}
.tmel_indexMenuArea_hover {
  margin: 0 0 -0.3% 2%;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  padding-bottom: 0.5%;
  /* border-bottom: 3px solid #ffffff; */
}

.tmel_indexMenuArea_s {
  margin: -0.3% 1%;
  padding: 0.3% 1.5%;
  width: 50px;
  text-align: center;
  border-radius: 20px;
  background-color: #ff604f;
  color: #ffffff;
  cursor: pointer;
}

.tmel_indexMenuArea_s:hover {
  background-color: #ff745d;
}

.tmes_line {
  width: 1px;
  height: 20px;
  margin: 0 1%;
  background-color: #fff;
}

.iconStyle_top {
  color: #fff;
  display: flex;
  float: right;
  font-size: 24px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.iconStyle_top:hover {
  text-shadow: 0 0 2px #ffffff;
}

.iconStyle_top_list {
  color: #333333;
  display: flex;
  float: right;
  font-size: 24px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.iconStyle_top_list:hover {
  text-shadow: 0 0 2px #999999;
}

#listShowMenuHad {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#listNodboxMenu {
  position: absolute;
  z-index: 0;
  width: 100%;
  top: 50px;
  background-color: #ffffff;
  border-top: 1px solid #f1f1f1
}
#listNodboxMenu div {
  color: #333333;
  padding: 12px 2%;
  font-size: 16px;
}
.EN_CN {
  cursor: pointer;
}
.EN_CN:hover {
  font-weight: bold;
}
#titleMenuAreaSide{
  width: 26px;
  height: 26px;
  padding: 2px 5px;
}
#titleMenuAreaSide:hover{
  background: #cccccc;
  border-radius: 2px
}
</style>
