<template>
    <div class="detail_info">
        <div id="TopMenuArea">
            <logo :PageFrom='"list"'></logo>
            <indexmenu :SCWidth='screenWidth' :seOnC='"index"'></indexmenu>
        </div>
       
        <!-- <img class="Like_cover_3" v-show="Like" @click="LikeThisActivity(false)" src="../../static/obj_img/list_Collect_icon_.png">
                <img class="Like_cover_3" v-show="!Like" @click="LikeThisActivity(true)" src="../../static/obj_img/list_Collected_icon.png"> -->
        <div class="img_Title">
            <div id="img_topSidle"><span @click="$router.push({ path: 'alt' })">画媒体 ></span>{{this.blogInfo.title}}</div>
            <img :src="this.blogInfo.header_img.replace('http:','')">
        </div>
        <div class="MainTitle_bar">
            <div class="blog_altic">
                <!-- <img class="blog_altic_img" src="../../static/obj_img/temple_img/list_.writer_photo.png"> -->
                <div class="blogInfo_title">{{this.blogInfo.title}}</div>
                <div class="blog_altic_name">{{this.blogInfo.author}} {{this.blogInfo.create_time}}
                    <div style="flex:1"></div>
                    <img src="../../static/obj_img/webDte_img/home_share_KJ.png" @click="openChildWindow(st1)">
                    <img src="../../static/obj_img/webDte_img/home_share_RR.png" @click="openChildWindow(st3)">
                    <img src="../../static/obj_img/webDte_img/home_share_XLWB.png" @click="openChildWindow(st2)">
                </div>
            </div>
            <!-- <div class="altic_painter painter_s" v-html="blogInfo.introduce">
                </div> -->
            <div class="painter_s" v-html="this.unescape(this.blogInfo.content)">

            </div>
        </div>
        <div class="Introduce_Like_altic">
            <div class="May_Like_altic">最近发生</div>
            <div class="May_List_altic">
                <div :key="'DT'+index" v-for="(item,index) in DialtArr" v-if="item.article_id!=$route.query.bloInfo" @click="GoDetail(item.article_id)">{{item.title}}</div>
            </div>
        </div>
        <indexb></indexb>
    </div>
</template>

<script>
// import ActiveBox from './ForList/ListBarStyle_2.vue'
import ISBD from './ForIndex/IndexBottom.vue'
import logo from './ForIndex/Indexlogo.vue'
import login from './ForIndex/loginBox.vue'
import menu from './ForIndex/IndexMenu.vue'
export default {
    data() {
        return {
            Like: true,
            money: 99,
            JoinNum: 20,
            CD_day: 2,
            CD_hour: '06',
            DialtArr:'',
            screenWidth: document.body.clientWidth,
            CD_mini: 14,
            ac_ad: '上海市浦东新区芳甸路333号喜马拉雅中心B1',
            blogInfo: {},
            st1:'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&title=一起画|Blog Time&pics=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&summary=零基础创意绘画体验with一起画&desc=边吃边喝边画画，人人都是艺术家',
            st2:'http://service.weibo.com/share/share.php?appkey=583395093&title=%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%88%9B%E6%84%8F%E7%BB%98%E7%94%BB%E4%BD%93%E9%AA%8Cwit%E4%B8%80%E8%B5%B7%E7%94%BB&url=http%3A%2F%2Fwww.17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&source=bshare&retcode=0&ralateUid=#_loginLayer_1505282975501',
            st3:'http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2F17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&srcUrl=http%3A%2F%2F17hua.me&title=一起画&images=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&description=零基础创意绘画体验with一起画|Blog Time'
            // st1:'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.17hua.me&title=一起画&pics=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&summary=零基础创意绘画体验with一起画&desc=边吃边喝边画画，人人都是艺术家',
            // st2:'http://service.weibo.com/share/share.php?appkey=583395093&title=%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%88%9B%E6%84%8F%E7%BB%98%E7%94%BB%E4%BD%93%E9%AA%8Cwit%E4%B8%80%E8%B5%B7%E7%94%BB&url=http%3A%2F%2Fwww.17hua.me&source=bshare&retcode=0&ralateUid=#_loginLayer_1505282975501',
            // st3:'http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2F17hua.me&srcUrl=http%3A%2F%2F17hua.me&title=一起画&images=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&description=零基础创意绘画体验@一起画'
        }
    },
    created() {
        this.getBDetailMaster()
        this.getListDialog();
    },
    methods: {
        GoDetail: function (addd) {
            this.$router.push({ name: 'blogD' ,query: { bloInfo: addd}})
        },
        getBDetailMaster() {
            let idmas = {
                id: parseInt(this.$route.query.bloInfo) || 0,
            }
            this.$store.commit('ConectionPara', idmas)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/article/show' + getString).then(m => this.setBlog(m.data)).catch(r => console.log(r));
        },
        openChildWindow(url){
            window.open(url,'name1')
        },
        getListDialog() {
            let dialogList = {
                cat_id: 2,
                page_no: 1,
                page_size: 4
            }
            this.$store.commit('ConectionPara', dialogList)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/article/index' + getString).then(m => this.setDialogList_a(m.data)).catch(r => console.log(r));
        },
        unescape(html) {
            html = this.$store.state.PROTOCOL?html.replace(/\http/g,'https'):html
            try {
                return html
                    .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, "\"")
                    .replace(/&#39;/g, "\'")
                    .replace(/&mdash;/g, "-")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&ldquo;/g, "“")
                    .replace(/&rdquo;/g, "”")
            } catch (error) {

            }
        },
        setDialogList_a(data) {
            if (data.errcode === 200) {
                this.DialtArr = data.records
            } else {
                this.$toast.bottom(data.errmsg)
            }
        },
        setBlog(data) {
            if (data.errcode === 200) {
                data.record.is_faverate == 1 ? this.likeId = data.record.faverate.id : '';
                this.blogInfo = data.record;
            } else {
                this.$toast.center(data.errmsg)
            }
        },

    },
    components: {
        // areabox: ActiveBox,
    },
    components: {
        indexb: ISBD,
        logo: logo,
        indexmenu: menu,
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function() {
                    that.timer = false
                }, 400)
            }
        }
    },
    mounted() {
        const that = this
        //this.startPlayback()
        window.onresize = () => {
            return (() => {
                //that.startPlayback()
                that.screenWidth = window.screenWidth = document.body.clientWidth
            })()
        }
    }
}
</script>

<style>
body {
    background-color: #f5f5f5
}

#TopMenuArea {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    padding: 10px 2%;
    width: 96%;
    display: flex;
    align-self: center;
    background: #ffffff;
    border-bottom: 1px solid #f1f1f1
}

.blog_altic_name {
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    color: #999;
    padding: 20px 0;
}

.blog_altic_name img {
    height: 30px;
    border-radius: 30px;
    margin-left: 10px;
    cursor: pointer;
}

.blog_altic_name img:hover {
    box-shadow: 0 0 5px 5px #f5f5f5
}

.blog_altic_eye {
    height: 16px;
}

.altic_painter {
    padding: 3.7% 0;
    margin-top: 3.7%;
}

.altic_painter img {
    width: 100%;
    margin: 2.1% 0;
}

.Pay_bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
}

.detail_info,
.img_Title,
.charge_,
.Free_sent,
.Active_address,
.altic_painter,
.Introduce_Like_altic {
    float: left;
    width: 100%;
}
.Introduce_Like_altic{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.detail_info {
    display: flex;
    align-items: center;
    flex-direction: column;
}



.img_Title,
.charge_,
.MainTitle_bar,
.Free_sent,
.Active_address,
.Member_Join,
.Content_info,
.altic_painter {
    background-color: #ffffff;
}

.charge_,
.Free_sent,
.Active_address,
.Member_Join {
    display: flex;
    display: -webkit-flex;
}

.MainTitle_bar,
.img_Title {
    float: left;
    width: 94.2%;
    max-width: 960px;
    padding: 20px 2.9%;
}

.img_Title {
    margin-top: 71px;
}


.Member_Join {
    float: left;
    width: 94.2%;
    padding: 2.1% 2.9%;
    margin-bottom: 1.4%;
}

.blog_altic {
    float: left;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.Active_address,
.Free_sent {
    float: left;
    width: 94.2%;
    padding: 3.3% 2.9%;
    margin-bottom: 1.4%;
}

.Content_info {
    float: left;
    width: 94.2%;
    padding: 2.1% 2.9% 4.1% 2.9%;
    border-bottom: 1px solid #f2f2f2;
}

.img_Title img {
    float: left;
    width: 100%;
}

.Tib_bar {
    float: left;
    width: 92%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    font-size: 12px;
    color: #ffffff;
    margin-top: -40px;
    padding: 0 4%
}

.Tib_bar div {
    flex: 1;
    -webkit-flex: 1
}

.blogInfo_title {
    font-size: 20px;
    padding-bottom: 40px;
    border-bottom: 1px dashed #f5f5f5;
}








/*标题栏*/

.Like_cover_3 {
    position: absolute;
    right: 0;
    top: 0;
    width: 7.2%;
    margin: 3.8% 3.2%;
}

.address_title {
    border-top: 1px solid #f2f2f2;
    float: left;
    width: 100%;
    font-weight: bold;
    padding-top: 2.7%;
    font-size: 18px;
    color: #333333;
}

.address_info {
    float: left;
    width: 100%;
    color: #333333;
    padding-top: 3%;
    font-size: 14px;
}


.end_anonce {
    width: 100%;
    text-align: right;
    font-size: 12px;
    margin-top: -5px;
    color: #666666
}

.Money_ {
    font-size: 24px;
    color: #ff7d54;
    font-weight: bold;
}

.Join_ {
    font-size: 12px;
    color: #666666;
    margin-left: 2%;
    line-height: 38px
}

.count_down_box {
    display: flex;
    display: -webkit-flex;
    flex: 1;
    -webkit-flex: 1;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    line-height: 38px;
    font-size: 12px;
    color: #666666;
    align-items: center;
    -webkit-align-items: center;
}

.count_down_box div {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #000000;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 0 5px;
    font-size: 16px;
    color: #ffffff
}









/*免费服务*/

.Free_sent {
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}









/*举办地*/

.Active_address {
    font-size: 14px;
    font-weight: bold;
    color: #333333
}

.Active_address div {
    flex: 1;
    -webkit-flex: 1;
}

.Active_address img {
    float: right;
    height: 14px;
    margin: 3px 0 0 5px;
}









/*参加朋友*/

.Member_Join {
    flex-direction: column;
    -webkit-flex-direction: column;
}

.jo_text {
    float: left;
    flex: 1;
    -webkit-flex: 1;
    font-size: 14px;
    color: #333333
}

.jo_img {
    margin: 2.7% 0;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

.jo_img img {
    -webkit-border-radius: 100px;
    border-radius: 100px;
    width: 16%;
}









/*活动内容*/

.Content_title {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    flex: 1;
    -webkit-flex: 1;
    font-weight: bold;
    font-size: 18px;
    padding: 3.3% 0 2.7% 0;
}

.Content_title b {
    font-size: 24px;
    margin: 0 10px;
}

.Content_info_box,
.painter_s {
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 2px;
    word-spacing: 4px;
    color: #666666;
    width: 100%;
}

.painter_s img {
    width: 100%;
}

.painter_s p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}

.Content_info_box img {
    width: 100%;
    margin: 10px 0;
}









/*列表内容*/

.May_Like_altic {
    width: 94.2%;
    padding:20px 2.9%;
    max-width: 960px;
    font-weight: bold;
    font-size: 22px;
    background-color: #fff;
}

.May_List_altic {
     width: 94.2%;
    padding:20px 2.9%;
    background-color: #fff;
    max-width: 960px;
    float: left;
}
.May_List_altic div{
    padding:10px 0;
    cursor: pointer;
}
.May_List_altic div:hover{
    text-decoration: underline
}






/*购买按钮部分*/

.Buy_botton {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 67.6%;
    text-align: center;
    background-color: #ff604f;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 11px 0;
    z-index: 10;
}

.triangle-topright {
    width: 0;
    height: 0;
    border-top: 41px solid rgba(200, 0, 0, 0.5);
    border-left: 4px solid transparent;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 67.6%;
    z-index: 9
}

.Charge_info {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-right: 67.6%;
    width: 33.4%;
    background-color: rgba(255, 255, 255, 0.9);
    height: 49px;
    z-index: 8;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    flex-direction: column;
    -webkit-flex-direction: column;
}

.Charge_info div:first-child {
    text-align: center;
    font-size: 18px;
    color: #ff7d54;
    font-weight: bold;
    line-height: 18px;
}

.Charge_info div:last-child {
    text-align: center;
    font-size: 12px;
    color: #999999;
    line-height: 14px;
}
#img_topSidle{
    padding:0 0 20px 0;
    color: #999;
    font-size: 14px;
    
}
#img_topSidle span{
    cursor: pointer;
    margin-right: 5px;
}
#img_topSidle span:hover{
    text-decoration: underline
}
</style>
