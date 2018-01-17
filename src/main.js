// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import
require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Router from 'vue-router'
import axios from 'axios'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
const VueAwesomeSwiper = require('vue-awesome-swiper')
// const wx = require('weixin-js-sdk')
// import wxsdk from 'weixin-js-sdk'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
Vue.prototype.$http = axios
import 'vue2-animate/dist/vue2-animate.min.css'
Vue.use(Router)
Vue.use(Toast)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
//import router from './router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Home from './Main.vue'
import Index from './components/index.vue'
import Ccity from './components/cityChange.vue'
import List from './components/ListShow.vue'; //进入则加载
import Detail from './components/DetailActive.vue'
import Accout from './components/Accout.vue'
import Cnectu from './components/ConnectUs.vue'
// import ADetail from './components/painterDetail.vue'
// import ADDetail from './components/addressDetail.vue'
import store from './store'

//懒则加载
const ADetail = resolve => require(['./components/painterDetail.vue'], resolve)
const ENIndex = resolve => require(['./components/EnIndex.vue'], resolve)
const ADDetail = resolve => require(['./components/addressDetail.vue'], resolve)
const CreateO = resolve => require(['./components/creatOrder.vue'], resolve)
const AmapiF = resolve => require(['./components/mapiFrame.vue'], resolve)
const PaySecc = resolve => require(['./components/paySuccess.vue'], resolve)
const AlticList = resolve => require(['./components/alticListShow.vue'], resolve)
const runBack = resolve => require(['./components/runBack.vue'], resolve)
const BlogDetail = resolve => require(['./components/alticDetail.vue'], resolve)
const ConectList = resolve => require(['./components/ForAccout/conectionList.vue'], resolve)
const Vouchers = resolve => require(['./components/vouchers.vue'], resolve)
const JoinMenber = resolve => require(['./components/ForDetail/joinMember.vue'], resolve);
const AddnewInfo = resolve => require(['./components/ForAccout/addConection.vue'], resolve)
const editInfo = resolve => require(['./components/ForAccout/editConection.vue'], resolve)
const OrderList = resolve => require(['./components/ForAccout/OrderListPage.vue'], resolve)
const OrderDetail = resolve => require(['./components/ForAccout/orderDetail.vue'], resolve)
const MyWallet = resolve => require(['./components/myWallet.vue'], resolve)
const BillList = resolve => require(['./components/ForAccout/billList.vue'], resolve)
const CustomMain = resolve => require(['./components/ForAccout/customMain.vue'], resolve)
const CustomCPR = resolve => require(['./components/ForAccout/customCPersonal.vue'], resolve)
const CustomCPU = resolve => require(['./components/ForAccout/customCPublic.vue'], resolve)
const Collection = resolve => require(['./components/ForAccout/collectionPage.vue'], resolve)
const GiftCard = resolve => require(['./components/ForAccout/giftCard.vue'], resolve)
const MorePage = resolve => require(['./components/MorePage.vue'], resolve)
const FeedBack = resolve => require(['./components/ForMore/FeedBack.vue'], resolve)
const AboutUs = resolve => require(['./components/ForMore/AboutUs.vue'], resolve)
const CalendarA = resolve => require(['./components/ForOther/CalendarMod.vue'], resolve)
const BandingView = resolve => require(['./components/ForOther/BandingView.vue'], resolve)
const CustRuleView = resolve => require(['./components/ForOther/ruleShowView.vue'], resolve)
const GiftCardList = resolve => require(['./components/ForGiftCard/GiftOrderList.vue'], resolve)
const GiftCardBuy = resolve => require(['./components/ForGiftCard/GiftBuyCard.vue'], resolve)
const GiftCardCharge = resolve => require(['./components/ForGiftCard/GiftCardCharge.vue'], resolve)
const GiftCardSet = resolve => require(['./components/ForGiftCard/GiftCardSet.vue'], resolve)
const GiftCardSend = resolve => require(['./components/ForGiftCard/GiftCardSend.vue'], resolve)
const ReceiceCard = resolve => require(['./components/ForOther/receiveCardPage.vue'], resolve)
const SettingsPage = resolve => require(['./components/ForAccout/settingsPage.vue'], resolve)
const JoinusCom = resolve => require(['./components/ForIndex/JoinUs.vue'], resolve)
//订单部分
const InvApply = resolve => require(['./components/ForAccout/ForInvoice/ApplyForInvoice.vue'], resolve)
const InvDetail = resolve => require(['./components/ForAccout/ForInvoice/InvoiceDetail.vue'], resolve)
const InvList = resolve => require(['./components/ForAccout/ForInvoice/InvoiceList.vue'], resolve)
const InvOrderList = resolve => require(['./components/ForAccout/ForInvoice/OrderToInvoiceList.vue'], resolve)
//import routes from './config/routes'
//Vue.config.productionTip = false
Vue.config.debug = true;
Vue.config.performance = true;
Vue.config.devtools = true;
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // {
  //   path: '*',
  //   component: Index,
  // },
  {
    path: '*',
    component: Index,
  },
  {
    path: '/list',
    meta: {
      title: '活动列表',
      scrollToTop: true
    },
    component: List
  },
  {
    path: '/cc',
    meta: {
      title: '城市选择',
      scrollToTop: true
    },
    component: Ccity
  },
  {
    path: '/dt',
    name: 'acinfo',
    meta: {
      title: '活动详情',
      scrollToTop: true
    },
    component: Detail
  }, {
    path: '/pt',
    name: 'ptinfo',
    meta: {
      title: '画师详情',
      scrollToTop: true
    },
    component: ADetail
  }, {
    path: '/at',
    name: 'atinfo',
    meta: {
      title: '地点详情',
      scrollToTop: true
    },
    component: ADDetail
  }, {
    path: '/pa',
    meta: {
      title: '创建订单',
      scrollToTop: true
    },
    component: CreateO
  }, {
    path: '/ps',
    name: 'payCop',
    meta: {
      title: '下单完成',
      scrollToTop: true
    },
    component: PaySecc
  }, {
    path: '/pd',
    name: 'blogD',
    meta: {
      title: 'blog',
      scrollToTop: true
    },
    component: BlogDetail
  }, {
    path: '/cl',
    name: 'cnec',
    meta: {
      title: '联系人详情',
      scrollToTop: true
    },
    component: ConectList
  }, {
    path: '/vc',
    name: 'vouc',
    meta: {
      title: '抵用券',
      scrollToTop: true
    },
    component: Vouchers
  }, {
    path: '/jm',
    name: 'jona',
    meta: {
      title: '一同参加',
      scrollToTop: true
    },
    component: JoinMenber
  }, {
    path: '/ac',
    meta: {
      title: '个人中心',
      scrollToTop: true
    },
    component: Accout
  }, {
    path: '/acv',
    name: 'adCo',
    meta: {
      title: '添加联系人',
      scrollToTop: true
    },
    component: AddnewInfo
  }, {
    path: '/ecv',
    name: 'etCo',
    meta: {
      title: '编辑联系人',
      scrollToTop: true
    },
    component: editInfo
  }, {
    path: '/ol',
    meta: {
      title: '订单列表',
      scrollToTop: true
    },
    component: OrderList
  }, {
    path: '/mw',
    meta: {
      title: '我的钱包',
      scrollToTop: true
    },
    component: MyWallet
  }, {
    path: '/od',
    name: 'ordt',
    meta: {
      title: '订单详情',
      scrollToTop: true
    },
    component: OrderDetail
  }, {
    path: '/bl',
    meta: {
      title: '消费明细',
      scrollToTop: true
    },
    component: BillList
  }, {
    path: '/ct',
    meta: {
      title: '活动定制首页',
      scrollToTop: true
    },
    component: CustomMain
  }, {
    path: '/cpr',
    meta: {
      title: '活动定制首页_私人',
      scrollToTop: true
    },
    component: CustomCPR
  }, {
    path: '/cpu',
    meta: {
      title: '活动定制首页——团建',
      scrollToTop: true
    },
    component: CustomCPU
  }, {
    path: '/ccp',
    meta: {
      title: '个人收藏',
      scrollToTop: true
    },
    component: Collection
  }, {
    path: '/gc',
    meta: {
      title: '礼品卡首页',
      scrollToTop: true
    },
    component: GiftCard
  }, {
    path: '/mp',
    meta: {
      title: '更多页面',
      scrollToTop: true
    },
    component: MorePage
  }, {
    path: '/fb',
    meta: {
      title: '反馈页面',
      scrollToTop: true
    },
    component: FeedBack
  }, {
    path: '/mif',
    name: 'amapif',
    meta: {
      title: '高德地图',
      scrollToTop: true
    },
    component: AmapiF
  }, {
    path: '/au',
    meta: {
      title: '关于我们',
      scrollToTop: true
    },
    component: AboutUs
  }, {
    path: '/clad',
    name: 'cladr',
    meta: {
      title: '日历选择',
      scrollToTop: true
    },
    component: CalendarA
  }, {
    path: '/bdv',
    meta: {
      title: '电话绑定',
      scrollToTop: true
    },
    component: BandingView
  }, {
    path: '/rbck',
    meta: {
      title: '回去',
      scrollToTop: true
    },
    component: runBack
  }, {
    path: '/crv',
    meta: {
      title: '活动规则',
      scrollToTop: true
    },
    component: CustRuleView
  }, {
    path: '/gcb',
    meta: {
      title: '礼品卡下单',
      scrollToTop: true
    },
    component: GiftCardBuy
  }, {
    path: '/gcc',
    meta: {
      title: '礼品卡金额',
      scrollToTop: true
    },
    component: GiftCardCharge
  }, {
    path: '/gcsd',
    meta: {
      title: '分享礼品卡',
      scrollToTop: true
    },
    component: GiftCardSend
  }, {
    path: '/gcst',
    meta: {
      title: '礼品卡样式',
      scrollToTop: true
    },
    component: GiftCardSet
  }, {
    path: '/gol',
    meta: {
      title: '礼品卡列表',
      scrollToTop: true
    },
    component: GiftCardList
  }, {
    path: '/rcp',
    meta: {
      title: '礼品卡接收',
      scrollToTop: true
    },
    component: ReceiceCard
  }, {
    path: '/stp',
    meta: {
      title: '设置页面',
      scrollToTop: true
    },
    component: SettingsPage
  }, {
    path: '/invApy',
    meta: {
      title: '申请发票',
      scrollToTop: true
    },
    component: InvApply
  }, {
    path: '/invDtl',
    meta: {
      title: '发票详情',
      scrollToTop: true
    },
    component: InvDetail
  }, {
    path: '/invLst',
    meta: {
      title: '发票列表',
      scrollToTop: true
    },
    component: InvList
  }, {
    path: '/invOLs',
    meta: {
      title: '可开具发票订单',
      scrollToTop: true
    },
    component: InvOrderList
  }, {
    path: '/ju',
    meta: {
      title: '加入我们',
      scrollToTop: true
    },
    component: JoinusCom
  }, {
    path: '/alt',
    meta: {
      title: '文章列表',
      scrollToTop: true
    },
    component: AlticList
  }, {
    path: '/la_en',
    meta: {
      title: '英文首页',
      scrollToTop: true
    },
    component: ENIndex
  }, {
    path: '/ccu',
    meta: {
      title: '联系我们',
      scrollToTop: true
    },
    component: Cnectu
  }

]
// scrollBehavior:ENIndexCnectu
// - only available in html5 history mode
// - defaults to no scroll behavior
// const InvApply 
// const InvDetail 
// const InvList
// const InvOrderList
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // new navigation.
    // scroll to anchor
    if (to.hash) {
      return {
        anchor: true
      }
    }
    // explicitly control scroll position
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return {
        x: 0,
        y: 0
      }
    }
  }
}
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes,
  base: __dirname,
  // （缩写）相当于 routes: routes
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })
// router.beforeEach((to, from, next) => {

// })
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
new Vue({
  el: '#app',
  router,
  store,
  components: {
    Vue
  },
  created() {
    //组件创建完后获取数据，
    // let r = location.href;
    // if (sessionStorage.getItem('path') != null) {
    //   sessionStorage.getItem('path').indexOf('/dt?actinfo=') >= 0 ? this.$router.push({
    //     name: 'acinfo',
    //     query: {
    //       actinfo: sessionStorage.getItem('path').split('=')[1].split('#/')[0]
    //     }
    //   }) : ''
    //   sessionStorage.getItem('path').indexOf('/at?addinfo=') >= 0 ? this.$router.push({
    //     name: 'atinfo',
    //     query: {
    //       addinfo: sessionStorage.getItem('path').split('=')[1].split('#/')[0]
    //     }
    //   }) : ''
    //   sessionStorage.getItem('path').indexOf('/pt?prtinfo=') >= 0 ? this.$router.push({
    //     name: 'ptinfo',
    //     query: {
    //       prtinfo: sessionStorage.getItem('path').split('=')[1].split('#/')[0]
    //     }
    //   }) : ''
    //   sessionStorage.getItem('path').indexOf('/list') >= 0 ? this.$router.push({
    //     path: sessionStorage.getItem('path')
    //   }) : ''
    //   sessionStorage.removeItem('path')
    // } else {
    //   r.split('/dt?actinfo=')[1] ? sessionStorage.setItem('path', '/dt?actinfo=' + decodeURIComponent(r.split('/dt?actinfo=')[1])) : ''
    //   r.split('/at?addinfo=')[1] ? sessionStorage.setItem('path', '/at?addinfo=' + r.split('/at?addinfo=')[1]) : ''
    //   r.split('/pt?prtinfo=')[1] ? sessionStorage.setItem('path', '/pt?prtinfo=' + r.split('/pt?prtinfo=')[1]) : ''
    //   r.indexOf('/list') >= 0 ? sessionStorage.setItem('path', '/list') : ''
    // }
    // try {
    //   r = r.split('/?')[1].split('&')[0].split('=')[1]
    //   this.getInfoByWXcode(r)
    // } catch (error) {
    //   sessionStorage.setItem('inWechat', true)
    //   location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb60b43aacf89c63e&redirect_uri=http%3a%2f%2fwx.17hua.me&response_type=code&scope=snsapi_userinfo&state=wxweb#wechat_redirect';
    // }
    this.getBaseInfo();
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      this.getWXbaseAPi();
    }
    // let codeFsd = {
    //   phone: 18116139078,
    //   password: 123
    // }
    // this.$store.commit('ConectionPara', codeFsd)
    // let getString = this.$store.state.getParamString;
    // let postString = getString.replace('?', '');
    // this.$http.get(this.$store.state.serverHost + '/yqhbsp/user/login' + getString).then(m => this.getInfoCaetae(m.data)).catch(r => console.log(r));
  },
  data() {
    return {
      goPage: 'animated fadeInRight',
      BackPage: 'animated fadeOutLeft',
      routerPath: [],
    }
  },
  methods: {
    getBaseInfo() {
      this.$store.commit('ConectionPara', {})
      let getString = this.$store.state.getParamString;
      let postString = getString.replace('?', '');
      this.$http.get(this.$store.state.serverHost + '/yqhbsp/config/getSystem' + getString).then(m => this.$store.commit('getBaseConfig', m.data.record)).catch(r => console.log(r));
    },
    getWXbaseAPi() {
      let w = {
        url: window.location.href
      }
      this.$store.commit('ConectionPara', w)
      let getString = this.$store.state.getParamString;
      let postString = getString.replace('?', '');
      this.$http.get(this.$store.state.serverHost + '/yqhbsp/config/getWXJSConfig' + getString).then(m => this.setWXbaseAPi(m.data)).catch(r => console.log(r));
    },
    setWXbaseAPi(data) {
      if (data.errcode == 200) {
        this.$store.commit('saveWXconfig', data.record)
      } else {
        this.$toast.center(data.errmsg)
      }
    },
    getInfoByWXcode(r) {
      if (r) {
        let codeFsd = {
          code: r || 0
        }
        this.$store.commit('ConectionPara', codeFsd)
        let getString = this.$store.state.getParamString;
        let postString = getString.replace('?', '');
        this.$http.get(this.$store.state.serverHost + '/yqhbsp/user/checkWXUser' + getString).then(m => this.getInfoCaetae(m.data)).catch(r => console.log(r));
      } else {
        if (this.$store.state.openID == '') {
          sessionStorage.setItem('inWechat', true)
          location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb60b43aacf89c63e&redirect_uri=http%3a%2f%2fwx.17hua.me&response_type=code&scope=snsapi_userinfo&state=wxweb#wechat_redirect'
        }
      }

    },
    getInfoCaetae(data) {
      if (data.errcode == 200) {
        // data.record.is_user != 1 ? this.$router.replace({
        //   path: '/bdv'
        // }) : ''
        this.$store.commit('saveOpenID', data.record.open_id)
        this.$store.commit('getBaseUsrInfo', data.record.login_user)
        this.getUsrConnection();
      } else {
        this.$toast.center(data.errmsg)
        sessionStorage.setItem('inWechat', true)
        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb60b43aacf89c63e&redirect_uri=http%3a%2f%2fwx.17hua.me&response_type=code&scope=snsapi_userinfo&state=wxweb#wechat_redirect'
      }
    },
    getUsrConnection() {
      let g = {
        access_token: this.$store.state.usrInfomation.access_token
      }
      this.$store.commit('ConectionPara', g)
      let getString = this.$store.state.getParamString;
      let postString = getString.replace('?', '');
      this.$http.get(this.$store.state.serverHost + '/yqhbsp/userinfo/indexContact' + getString).then(m => this.setFirstConnection(m.data)).catch(r => this.$toast.bottom('系统错误'));
    },
    setFirstConnection(data) {
      if (data.records.length == 0) {
        let m = {
          name: '',
          phone: '',
          email: ''
        }
        this.$store.commit('saveConnectionObj', m)
      } else {
        this.$store.commit('saveConnectionObj', data.records[0])
      }

    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path == from.path) {
        this.$router.push({
          path: '/rbck'
        })
      }
      // let inPathArray = (to.path.split('/')[1] || '0') + '-' + (from.path.split('/')[1] || '0');
      // let ouPathArray = (from.path.split('/')[1] || '0') + '-' + (to.path.split('/')[1] || '0');
      // if (this.$store.state.routerPath.indexOf(ouPathArray) < 0) {
      //   this.goPage = 'animated fadeInRight';
      //   this.BackPage = 'animated fadeOutLeft'
      //   this.$store.commit('PushINArr', inPathArray);
      // } else {
      //   this.goPage = 'animated fadeInLeft'
      //   this.BackPage = 'animated fadeOutRight'
      //   this.$store.commit('DeletINArr', ouPathArray);
      // }
      if(to.path.split('/')[1]=='au'){
        let share = {
          sharetitle: '关于一起画',
          sharelink: 'https://17hua.me/au',
          shareimgUrl: 'https://image.17hua.me/upload/image/201711/8cc2r9sxqi9za3pnfym37pymlyiala2k.jpg',
          shareDesc: '解锁你的创造力，创建独一无二的作品！| 一起画'
        }
        this.$store.commit('useShareFun', share)
      }else{
        let share = {
          sharetitle: '一起画官网',
          sharelink: 'https://17hua.me',
          shareimgUrl: 'https://image.17hua.me/upload/image/201711/8cc2r9sxqi9za3pnfym37pymlyiala2k.jpg',
          shareDesc: '解锁你的创造力，创建独一无二的作品！| 一起画'
        }
        this.$store.commit('useShareFun', share)
      }
      
    },
    // screenWidth(val) {
    //   if (!this.timer) {
    //     this.screenWidth = val
    //     this.timer = true
    //     let that = this
    //     setTimeout(function () {
    //       // that.screenWidth = that.$store.state.canvasWidth
    //       that.$store.commit('ChangeScreamWidth', that.screenWidth)
    //       // that.init()
    //       that.timer = false
    //     }, 400)
    //   }
    // }
  },
  mounted() {
    // this.$store.commit('ChangeScreamWidth',document.body.clientWidth)
    // this.getWXbaseAPi()
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //   })()
    // }
    // var this_mouted = this;
    // setTimeout(function () {
    //   let share = {
    //     sharetitle: '我喜欢这个绘画活动，你也去一起画吧',
    //     sharelink: 'wx.17hua.me',
    //     shareimgUrl: 'http://wx.17hua.me/static/obj_img/logo_for_share.png',
    //     shareDesc: '创建独一无二的作品！'
    //   }
    //   this_mouted.$store.commit('useShareFun', share)
    // }, 2000);
  }
})
