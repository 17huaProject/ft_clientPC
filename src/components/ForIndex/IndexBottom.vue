<template>
    <div id="IndexBottomeArea">
        <!-- <img id="IndexBottomImg" src="//image.17hua.me/upload/image/201709/1506601704878228.png" v-if="PageFrom!='list'"> -->
        <div id="IndexQRcodeArea" v-if="PageFrom!='list'">
            <img id="QRImg_index" src="//image.17hua.me/upload/image/201709/1506601704774541.jpg">
            <div style="font-size:14px">更多咨询请关注“sh17hua”微信公众号</div>
            <div style="font-size:12px;color:#999999">Copyright © 2017 一袋信息科技 , 沪ICP备17027245号-1</div>
            <div v-if="false"><a href="tel:02167991260"><img src="../../../static/obj_img/webDte_img/home_phone_icon-min.png">021-67991260</a></div>
        </div>
        <div id="IndexQRcodeArea_1" v-else>
            <img id="QRImg_index_2" src="//image.17hua.me/upload/image/201709/1506601704774541.jpg">
            <div style="font-size:14px">更多咨询请关注“sh17hua”微信公众号</div>
            <div style="font-size:12px;color:#999999">Copyright © 2017 一袋信息科技 , 沪ICP备17027245号-1</div>
            <div v-if="false"><a href="tel:02167991260"><img src="../../../static/obj_img/webDte_img/home_phone_icon-min.png">021-67991260</a></div>
        </div>
        <div id="IndexBottomSteContent" v-if="false">
            <div class="b_bottom_button" @click="Gorouter('/ju')">加入我们</div>
            <div class="b_bottom_line"></div>
            <div class="b_bottom_button" @click="Gorouter('/au')">关于我们</div>
        </div>
        <div class="Btttt_bottom" v-if="false">
            <!--<div class="jiathis_style_32x32">
                    <a class="jiathis_button_qzone"></a>
                    <a class="jiathis_button_tsina"></a>
                    <a class="jiathis_button_tqq"></a>
                    <a class="jiathis_button_weixin"></a>
                    <a class="jiathis_button_renren"></a>
                </div>-->

            <div style="font-size:14px" v-if="false">
                分享到：
                <img src="../../../static/obj_img/webDte_img/home_share_KJ.png" @click="openChildWindow(st1)">
                <!-- <img src="../../../static/obj_img/webDte_img/home_share_QQ.png">
                <img src="../../../static/obj_img/webDte_img/home_share_QQWB.png"> -->
                <img src="../../../static/obj_img/webDte_img/home_share_RR.png" @click="openChildWindow(st3)">
                <img src="../../../static/obj_img/webDte_img/home_share_XLWB.png" @click="openChildWindow(st2)">
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            st1:'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.17hua.me&title=一起画&pics=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&summary=零基础创意绘画体验with一起画&desc=边吃边喝边画画，人人都是艺术家',
            st2:'http://service.weibo.com/share/share.php?appkey=583395093&title=%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%88%9B%E6%84%8F%E7%BB%98%E7%94%BB%E4%BD%93%E9%AA%8Cwit%E4%B8%80%E8%B5%B7%E7%94%BB&url=http%3A%2F%2Fwww.17hua.me&source=bshare&retcode=0&ralateUid=#_loginLayer_1505282975501',
            st3:'http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2F17hua.me&srcUrl=http%3A%2F%2F17hua.me&title=一起画&images=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&description=零基础创意绘画体验with一起画'
        }
    },
    mounted() {
        // this.init()
    },
    methods: {
        openChildWindow(url){
            window.open(url,'name1')
        },
         Gorouter(pa){
            this.$router.push({path:pa})
        }
        // init() {
        //     let url = 'http://v3.jiathis.com/code/jia.js'
        //     let script = document.createElement('script')
        //     script.setAttribute('src', url)
        //     document.getElementsByTagName('head')[0].appendChild(script);
        // }
    },
    props:['PageFrom','hideSide']
}
// setTimeout(function() {
//     var jiathis_config = {
//         url: "http://www.17hua.me/",
//         summary: "",
//         title: "体验遇见·一起画",
//         shortUrl: false,
//         hideMore: false
//     }
// }, 1000);
</script>

<style>
a {font-size:16px;}   
a:link {color: #ffffff; text-decoration:none;} 
a:active{color: #ffffff; } 
a:visited {color:ffffff;text-decoration:none;}
a:hover {color: ffffff; text-decoration:none;}
#IndexBottomeArea {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    flex-direction: column;
}

#IndexQRcodeArea{
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    /* background-image: -webkit-linear-gradient(top,rgba(0,0,0,0.0),rgba(0,0,0,1)); */
    /* background: url('http://image.17hua.me/upload/image/201709/1505371266975440.png');
    background-size: cover; */
    flex-direction: column;
    
}
#IndexQRcodeArea div{
    padding: 10px 0 0 0;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
}
#IndexQRcodeArea div a{
    width: 200px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
}
#IndexQRcodeArea div img{
    height: 40px;
}
#IndexQRcodeArea_1{
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    /* background: url('http://image.17hua.me/upload/image/201709/1505371266975440.png');
    background-size: cover; */
    flex-direction: column;
    
}
#IndexQRcodeArea_1 div{
    padding: 10px 0 0 0;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
}
#IndexQRcodeArea_1 div a{
    width: 200px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
}
#IndexQRcodeArea_1 div img{
    height: 40px;
}
#IndexBottomImg {
    width: 100%;
    background: url('//image.17hua.me/upload/image/201709/1506601704878228.png');
    background-size: cover
}

#IndexBottomSteContent {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    justify-content: center;
}

.b_bottom_button {
    padding: 20px 0;
    width: 100px;
    text-align: center;
    justify-content: center;
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 16px;
    cursor: pointer;
}
.b_bottom_button:hover{
    text-shadow: 0 0 3px #ffffff;
}
.b_bottom_button img {
    height: 20px;
    margin-right: 5px;
}

.b_bottom_line {
    height: 20px;
    width: 1px;
    background-color: #ffffff;
}

.Btttt_bottom {
    width: 100%;
    background-color: #000000;
    color: #ffffff;
}
.Btttt_bottom div{
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.Btttt_bottom div img{
    margin: 0 5px;
    cursor: pointer;
    width: 24px;
    border-radius: 100px;
}
#QRImg_index{
    width: 50%;
    max-width: 100px;
}
#QRImg_index_2{
    width: 50%;
    max-width: 100px;
}
.Btttt_bottom div img:hover{
    box-shadow: 0 0 5px 1px #999999
}
</style>
