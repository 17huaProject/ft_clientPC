<template>
    <div class="ListMain">
        <!--<div class="top_fun_ara" style="z-index:4;margin-top:-50px;" v-show="!vTopShow">
                                <div class="top_func">
                                    <city v-bind:cityModel="false"></city>
                                    <input placeholder="输入城市/拼音查询" v-model="SearchBar" @keyup.13="saveKeyword">
                                    <img class="search_img" src="../../static/obj_img/home_icon_search.png" @click="saveKeyword">
                                </div>
                                <div class="top_func_2">
                                    <search v-bind:conditionStyle="false"></search>
                                </div>
                            </div>-->
        <div id="TopMenuArea_list">
            <logo :PageFrom='"list"'></logo>
            <indexmenu :SCWidth='screenWidth' :PageFrom='"list"' :seOnC='"clist"'></indexmenu>
        </div>
        <div id="TopBannerArae_list">
            <div id="textInput" :class="setSise(screenWidth)">
                <el-autocomplete class="inline-input" size="large" v-model="SearchBar" :fetch-suggestions="querySearch" placeholder="输入城市/拼音查询" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
                <img src="../../static/obj_img/webDte_img/home_search_icon_01.png" @click="saveKeyword">
            </div>
            <search :conditionStyle="false" v-if="false"></search>
        </div>
        <div id="ContentInsideBox">
            <div id="ContentInsideBox_Area" :class="setSiseList(screenWidth)">
                <areabox :key="listArr[index].id" v-if="item.event_status=='ONSALE'||item.event_status=='SOLDOUT'" v-for="(item, index) in listArr" :message='listArr[index]'></areabox>
            </div>
            <div id="ContentInsideBox_Area_o" :class="setSiseList(screenWidth)">
                <areabox :key="listArr[index].id" v-if="item.event_status!='ONSALE'&&item.event_status!='SOLDOUT'" v-for="(item, index) in listArrR" :message='listArrR[index]'></areabox>
            </div>
            <div id="List_more" @click="ListConfig.page_no++" v-show="isMore">更多</div>
        </div>
        <indexb :PageFrom='"list"'></indexb>
        <loginbox></loginbox>
        <!--<div :class="changeUpOrDown(vTopShow)">
                                <div class="top_func">
                                    <city v-bind:cityModel="false"></city>
                                    <input placeholder="输入城市/拼音查询" v-model="SearchBar" @keyup.13="saveKeyword">
                                    <img class="search_img" src="../../static/obj_img/home_icon_search.png" @click="saveKeyword">
                                </div>
                                <div class="top_func_2">
                                    <search v-bind:conditionStyle="false"></search>
                                </div>
                            </div>
                            <div class="ListArea_inbox">
                                <areabox :key="listArr[index].id" v-for="(item, index) in listArr" :message='listArr[index]'></areabox>
                            </div>
                            <div v-show="false">没有找到活动哦，不过我们会尽快赶来</div>
                            <div class="slTime_inbox">
                                <articalbox :key="DialtArr[index].id" v-for="(item, index) in DialtArr" :message='DialtArr[index]'></articalbox>
                            </div>
                            <div id="listBtom_bk"></div>
                            <div id="listBottom">
                                <div v-show="AtTop">
                                    <img src="../../static/obj_img/tab_list_selected_icon.png">
                                    <div style="color:#ff604f">活动</div>
                                </div>
                                <div v-show="!AtTop" @click="getTop()">
                                    <img src="../../static/obj_img/tab_top_icon.png">
                                    <div style="color:#ff604f">回到顶部</div>
                                </div>
                                <div @click="routerGo('/ac')">
                                    <img src="../../static/obj_img/tab_more_nomal_icon.png">
                                    <div>我的</div>
                                </div>
                                <div @click="routerGo('/mp')">
                                    <img src="../../static/obj_img/tab_more_normal_icon.png">
                                    <div>更多</div>
                                </div>
                            </div>-->
    </div>
</template>

<script>
import City_ from "./ForIndex/city.vue";
import ActiveBox from "./ForList/ListBarStyle_1.vue";
import ActOveBox from "./ForList/ListBarStyle_2.vue";
import ArtialBox from "./ForList/ListBarStyle_3.vue";
import Search_ from "./ForIndex/SearchConditions.vue";
import ISBD from "./ForIndex/IndexBottom.vue";
import logo from "./ForIndex/Indexlogo.vue";
import login from "./ForIndex/loginBox.vue";
import menu from "./ForIndex/IndexMenu.vue";
export default {
  data() {
    return {
      restaurants: [],
      data: "",
      state1: "",
      listArrR:[],
      isMore: true,
      SearchBar: this.$store.state.SearchKeyWord || "",
      ListConfig: {
        city_code: this.$store.state.SelectCityCode,
        p:
          this.$store.state.locationIN.latitude +
          "," +
          this.$store.state.locationIN.longitude,
        d:
          parseInt(
            this.$store.state.SelectNearSortCount[0].arrList[
              this.$store.state.SelectNearSortCount[0].sOn
            ]
          ) || 200,
        stext: this.$store.state.SearchKeyWord,
        start: this.YYYYMMdd(
          this.$store.state.ChangeCalendar.startTime || new Date()
        ),
        end: this.YYYYMMdd(
          this.$store.state.ChangeCalendar.endTime ||
            new Date(new Date().getTime() + parseInt(7 * 24 * 60 * 60 * 1000))
        ),
        num:
          this.$store.state.SelectNearSortCount[2].arrList[
            this.$store.state.SelectNearSortCount[2].sOn
          ] == "more"
            ? 10
            : this.$store.state.SelectNearSortCount[2].arrList[
                this.$store.state.SelectNearSortCount[2].sOn
              ],
        page_no: 1,
        page_size: 20,
        sort:
          this.$store.state.SelectNearSortCount[1].sOn == 1
            ? "closing_time|0"
            : "distance|0"
      },
      listArr: [],
      DialtArr: [],
      pageRoll: true,
      vTopShow: true,
      rollScrollCan: true,
      AtTop: window.scrollY < 50,
      screenWidth: document.body.clientWidth
    };
  },
  created() {
    this.getListMaster();
    //this.getListDialog();
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return restaurant.value.indexOf(queryString.toLowerCase()) === 0;
      };
    },
   
    loadAll() {
      return [
        { value: "遇见花海中小屋", address: "" },
        { value: "当憨豆遇见火烈鸟", address: "" },
        { value: "巴洛斯油画", address: "" },
        { value: "小小艺术家", address: "" },
        { value: "油画梦", address: "" },
        { value: "星空", address: "" },
        { value: "蝴蝶", address: "" },
        { value: "秋", address: "" },
        { value: "All pink - - 我来到你的城市", address: "" },
        { value: "生命之火", address: "" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    setSise(wd) {
      if (wd > 1200) {
        return "textInputA_500";
      } else if (wd < 660) {
        return "textInputA_100";
      } else {
        return "textInputA_300";
      }
    },
    setSiseList(wd) {
      if (wd > 1200) {
        return "ContentInsideBox_Area_1000";
      } else if (wd <= 1200 && wd > 980) {
        return "ContentInsideBox_Area_800";
      } else if (wd <= 980 && wd > 700) {
        return "ContentInsideBox_Area_600";
      } else {
        return "ContentInsideBox_Area_400";
      }
    },
    changeUpOrDown(state) {
      return state
        ? "top_fun_ara animated fadeInDown"
        : "top_fun_ara animated fadeOutUp";
    },
    getListMaster(statue) {
      this.$store.commit("ConectionPara", this.ListConfig);
      let getString = this.$store.state.getParamString;
      let postString = getString.replace("?", "");
      this.$http
        .get(this.$store.state.serverHost + "/yqhbsp/event/search" + getString)
        .then(
          statue
            ? m => this.setPaberList_b(m.data)
            : m => this.setPaberList_a(m.data)
        )
        .catch(r => console.log(r));
    },
    getTop() {
      window.scrollTo(0, 0);
    },
    getListDialog() {
      let dialogList = {
        cat_id: 2,
        page_no: 1,
        page_size: 20
      };
      this.$store.commit("ConectionPara", dialogList);
      let getString = this.$store.state.getParamString;
      let postString = getString.replace("?", "");
      this.$http
        .get(this.$store.state.serverHost + "/yqhbsp/article/index" + getString)
        .then(m => this.setDialogList_a(m.data))
        .catch(r => console.log(r));
    },
    YYYYMMdd(data) {
      let ed = new Date(data);
      var yyyy = ed.getFullYear().toString();
      var MM = this.pad(ed.getMonth() + 1, 2);
      var dd = this.pad(ed.getDate(), 2);
      return yyyy + "-" + MM + "-" + dd;
    },
    pad(number, length) {
      var str = "" + number;
      while (str.length < length) {
        str = "0" + str;
      }
      return str;
    },
    setPaberList_a(data) {
      if (data.errcode === 200) {
        this.listArr = this.listArr.concat(data.records);
        this.listArrR = this.listArrR.concat(data.records.reverse())
      } else {
        this.$toast.bottom(data.errmsg);
      }
    },
    setPaberList_b(data) {
      if (data.errcode === 200) {
        this.listArr = data.records;
        //this.listArr = this.pageRoll ? data.records : this.listArr.concat(data.records);
        data.total > 5 ? (this.pageRoll = true) : "";
      } else {
        this.$toast.bottom(data.errmsg);
      }
    },
    setDialogList_a(data) {
      if (data.errcode === 200) {
        this.isMore = data.records.length == 10;
        this.DialtArr = this.DialtArr.concat(data.records);
      } else {
        this.$toast.bottom(data.errmsg);
      }
    },
    routerGo: function(paths) {
      this.$router.push({ path: paths });
    },
    routerGoBack() {
      this.$router.go(-1);
    },
    saveKeyword() {
      this.ListConfig.stext = this.SearchBar;
      this.$store.commit("saveListKeyWord", this.SearchBar);
    }
  },
  computed: {
    getConfigForList() {
      let newListConfig = {
        city_code: this.$store.state.SelectCityCode,
        p:
          this.$store.state.locationIN.latitude +
          "," +
          this.$store.state.locationIN.longitude,
        d:
          parseInt(
            this.$store.state.SelectNearSortCount[0].arrList[
              this.$store.state.SelectNearSortCount[0].sOn
            ]
          ) || 200,
        stext: this.$store.state.SearchKeyWord,
        start: this.YYYYMMdd(
          this.$store.state.ChangeCalendar.startTime || new Date()
        ),
        end: this.YYYYMMdd(
          this.$store.state.ChangeCalendar.endTime ||
            new Date(new Date().getTime() + parseInt(7 * 24 * 60 * 60 * 1000))
        ),
        num:
          this.$store.state.SelectNearSortCount[2].arrList[
            this.$store.state.SelectNearSortCount[2].sOn
          ] == "more"
            ? 10
            : this.$store.state.SelectNearSortCount[2].arrList[
                this.$store.state.SelectNearSortCount[2].sOn
              ],
        page_no: 1,
        page_size: 20,
        sort:
          this.$store.state.SelectNearSortCount[1].sOn == 1
            ? "closing_time|0"
            : "distance|0"
      };
      return newListConfig;
    }
  },
  watch: {
    getConfigForList(val) {
      this.ListConfig = val;
    },
    ListConfig: {
      handler: function(val, oldVal) {
        val.page_no == 1 ? window.scrollTo(0, 0) : "";
        this.getListMaster(val.page_no == 1);
      },
      deep: true
    },
    rollScrollCan: {
      handler: function(val, oldVal) {
        if (this.rollScrollCan == false) {
          let _this = this;
          setTimeout(function() {
            _this.rollScrollCan = true;
          }, 300);
        }
      },
      deep: true
    },
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          //that.screenWidth = that.screenWidth
          // console.log(window.screenHight)
          // that.$store.commit('ChangeScreamWidth', that.screenWidth)
          // that.init()
          that.timer = false;
        }, 400);
      }
    }
  },
  components: {
    city: City_,
    search: Search_,
    areabox: ActiveBox,
    articalbox: ArtialBox,
    actovlbox: ActOveBox,
    indexb: ISBD,
    logo: logo,
    indexmenu: menu,
    loginbox: login
  },
  mounted() {
    this.restaurants = this.loadAll();
    let _this = this;
    let _scroll = 0;
    let _runCan = true;
    let runArray = [];
    // 设置一个开关来避免重负请求数据
    window.addEventListener("scroll", function() {
      if (
        document.body.scrollTop + window.innerHeight >=
        document.body.offsetHeight
      ) {
        if (_this.pageRoll == true) {
          // 将开关关闭
          _this.pageRoll = false;
          _this.ListConfig.page_no++;
        }
      }
      (window.scrollY - _scroll > 10 || window.scrollY - _scroll < -10) &&
      _this.rollScrollCan
        ? runArray.push(window.scrollY - _scroll)
        : "";
      runArray.length > 3 ? runArray.shift() : "";
      if (runArray[0] > 0 && runArray[1] > 0 && runArray[2] > 0) {
        _this.vTopShow = false;
        _this.rollScrollCan = false;
      }
      if (runArray[0] < 0 && runArray[1] < 0 && runArray[2] < 0) {
        _this.vTopShow = true;
        _this.rollScrollCan = false;
      }
      _this.AtTop = window.scrollY < 50;
      window.scrollY == 0 && _this.rollScrollCan ? (_this.vTopShow = true) : "";
      _scroll = window.scrollY;
    });
    // let share = {
    //     sharetitle: '我喜欢这个绘画活动，你也去一起画吧',
    //     sharelink: 'wx.17hua.me/list',
    //     shareimgUrl: 'http://wx.17hua.me/static/obj_img/logo_for_share.png',
    //     shareDesc: '创建独一无二的作品！'
    // }
    // this.$store.commit('useShareFun', share)
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screenWidth = window.screenWidth = document.body.clientWidth;
        that.screenHight = window.screenHight =
          document.documentElement.clientHeight;
      })();
    };
    // window.addEventListener('scroll', function() {
    //     that.setBackgroundColor = window.scrollY > (that.screenHight - 50) ? 'setBk' : 'rmoveBk';
    // });
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
  text-decoration: none;
}

#TopMenuArea_list {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 10px 2%;
  width: 96%;
  display: flex;
  align-self: center;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}

#List_more {
  padding: 10px 50px;
  margin: 2% 0;
  border-radius: 50px;
  background-color: #ff605f;
  color: #ffffff;
  cursor: pointer;
}

#List_more:hover {
  background-color: #ff745d;
}

#TopBannerArae_list {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("//image.17hua.me/upload/image/201709/1505371271302397.png");
  background-size: cover;
}

#textInput {
  width: 100%;
  padding: 2% 0;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.textInputA_500 input {
  flex: 1;
  padding: 0 20px;
  width: 600px;
  border-radius: 0;
  background-color: #f5f5f5;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

.textInputA_300 input {
  flex: 1;
  padding: 0 15px;
  border-radius: 0;
  width: 400px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

.textInputA_100 input {
  flex: 1;
  padding: 0 10px;
  border-radius: 0;
  width: 200px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 0;
  outline: none;
}

#textInput img {
  height: 32px;
  width: 32px;
  padding: 5px 30px 5.5px 20px;
  background-color: #ff605f;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
}

#textInput img:hover {
  background-color: #ff745d;
}

#ContentInsideBox {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 20px 5%;
}

#ContentInsideBox_Area {
  max-width: 1282px;
  width: 100%;
  column-gap: 0;
}
#ContentInsideBox_Area_o {
  max-width: 1282px;
  width: 100%;
  column-gap: 0;
}
.ContentInsideBox_Area_1000 {
  column-count: 4;
}

.ContentInsideBox_Area_800 {
  column-count: 3;
}

.ContentInsideBox_Area_600 {
  column-count: 2;
}

.ContentInsideBox_Area_400 {
  column-count: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ListMain {
  width: 100%;
  float: left;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*

.ListArea_inbox {
    margin-top: 91px;
}

.ListMain {
    margin-bottom: 60px;
}

.slTime_inbox {
    -webkit-column-count: 2;
    column-count: 2;
    width: 94.2%;
    padding: 2.9%;
}

.top_fun_ara {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
    background-color: #ffffff;
    border-bottom: 1px solid #f5f5f5;
}

.top_func {
    float: left;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    width: 94.2%;
    padding: 0 2.9%;
    height: 50px;
    background-color: #ffffff;
}

.top_func_2 {
    float: left;
    border-top: 1px solid #eeeeee;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
}

.top_func input {
    flex: 1;
    -webkit-flex: 1;
    -webkit-border-top-left-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    font-size: 16px;
    border: 0;
    margin: 0 -1px 0 0;
    padding: 0 0 0 3.4%;
    background-color: #f2f2f2;
    height: 30px;
    line-height: 30px;
    outline: none;
}

.search_img {
    -webkit-border-top-right-radius: 50px;
    -webkit-border-bottom-right-radius: 50px;
    font-size: 16px;
    border: 0;
    background-color: #f2f2f2;
    width: 20px;
    height: 20px;
    padding: 5px 3.4%;
}

#listBtom_bk {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 45px;
    z-index: 1;
    background: hsla(0, 0%, 100%, .3);
    -webkit-filter: blur(2px);
    filter: blur(2px);
    background: rgba(255, 255, 255, .7);
    width: 100%;
    z-index: 100;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

#listBottom {
    position: fixed;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    background: hsla(0, 0%, 100%, .9);
    z-index: 100;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

#listBottom div {
    padding: 5px 5% 0 5%;
    width: 50px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
}

#listBottom div div {
    -webkit-transform: scale(0.8);
    font-size: 12px;
}

#listBottom img {
    width: 24px;
    height: 24px;
    margin-bottom: -5px;
}*/
</style>
