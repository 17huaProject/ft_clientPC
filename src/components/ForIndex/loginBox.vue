<template>
    <div id="main_box" v-show="this.$store.state.loginShowStatue">
        <div id="backGround_login" @click="closeLogin()"></div>
        <div id="img_area" v-show="hideImg(SCWidth)">
            <img id="lo_bk" src="//image.17hua.me/upload/image/201709/15053712683741057.png
            ">
        </div>
        <div id="input_area" >
            <img id="QRlogin_img1" @click="pastype=true" src="../../../static/obj_img/webDte_img/login_icon_2wm.png">
            <div id="QRSetLogin" v-show="pastype">
                <img id="QRlogin_img2" @click="pastype=false" src="../../../static/obj_img/webDte_img/login_icon_account.png">
                <div id="QRArea_info">
                    <div><img src="../../../static/obj_img/webDte_img/login_icon_wx.png">微信扫一扫，快捷登陆</div>
                    <img src="../../../static/obj_img/webDte_img/2wm.png">
                    <div>其他登陆方式<img src="../../../static/obj_img/webDte_img/login_icon_qq.png"><img src="../../../static/obj_img/webDte_img/login_icon_wb.png"></div>
                </div>
            </div>
            <div class="input_line title_name">
                <div>登陆一起画</div>
            </div>
            <div class="input_line input_text">
                <div>用户名</div>
                <input id="login_usr_login" maxlength="30" v-model="usrname">
                <img id="lo_close_button" v-show="usrname!=''" @click="usrname=''" src="../../../static/obj_img/webDte_img/londin_del_icon.png">
            </div>
            <div class="input_line input_text marginTop20">
                <div>密码</div>
                <input id="login_psw_login" maxlength="30" type="password" v-show="pisplay" v-model="pasword">
                <input id="login_psw_login" maxlength="30" type="text" v-show="!pisplay" v-model="pasword">
                <img id="lo_show_button" v-show="pasword!=''&&pisplay" @click="changeShowInPsInput(false)" src="../../../static/obj_img/webDte_img/londin_display_icon.png">
                <img id="lo_hide_button" v-show="pasword!=''&&!pisplay" @click="changeShowInPsInput(true)" src="../../../static/obj_img/webDte_img/londin_hide_icon.png">
            </div>
            <div class="input_line remenber_me marginTop20">
                <div></div>
                <span>记住我</span>
            </div>
            <div class="input_line buttom_login marginTop20">
                <div>登录</div>
            </div>
            <div class="input_line buttom_login marginTop20">
                其他登陆方式
                <img class="loginOtherWayImg" src="../../../static/obj_img/webDte_img/login_icon_qq.png">
                <img class="loginOtherWayImg" src="../../../static/obj_img/webDte_img/login_icon_wb.png">
                <img class="loginOtherWayImg" src="../../../static/obj_img/webDte_img/login_icon_wx.png">
            </div>
        </div>
        <div id="bottom_area_contral">
            <div>忘记密码</div>
            <div>没有账号？去注册</div>
        </div>
    </div>
</template>

<script>
const inputtype = document.getElementById('login_psw_login');
export default {
    data() {
        return {
            usrname: '',
            pasword: '',
            pisplay: true,
            pastype: false
        }
    },
    methods: {
        changeShowInPsInput(statue) {
            this.pisplay = statue;
        },
        closeLogin() {
            this.$store.commit('ShowLoginStatue', false)
        },
        hideImg(SCWidth) {
            return SCWidth < 820 ?false : true
        }
    },
    watch: {
        // pisplay(val){
        //     console.log(val)
        //     inputtype.type = val?'password':'text'
        // }
    },
    props: ['SCWidth']
}
</script>

<style>
#main_box {
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 10;
}

#backGround_login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#QRlogin_img1 {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

#QRlogin_img2 {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

#img_area {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

#lo_lg {
    position: relative;
    margin: 10px 0 -60px 40px;
    width: 220px;
}

#input_area {
    position: relative;
    width: 450px;
    height: 490px;
    background-color: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.input_line {
    float: left;
    width: 60%;
    padding: 0 20%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.title_name {
    height: 100px;
    font-size: 18px;
}

.title_name div {
    width: 100%;
    margin-top: 30px;
    color: #333333;
}

.input_text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.input_text div {
    width: 98%;
    font-size: 14px;
    color: #666666;
    padding-left: 2%;
}

.input_text input {
    margin-top: 10px;
    width: 90%;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    color: #666666;
    outline: none;
    -webkit-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    padding: 0 5%;
    border: 0;
    box-shadow: 0 0 0 1px #999999;
}

.input_text img {
    margin-top: -33px;
    margin-bottom: 3px;
    margin-left: 88%;
    width: 20px;
    height: 20px;
    padding: 5px 0;
    cursor: pointer;
}

.remenber_me {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.remenber_me div {
    float: left;
    width: 16px;
    height: 16px;
    box-shadow: 0 0 0 1px #999999;
    margin-left: 2%;
}

.remenber_me span {
    float: left;
    margin-left: 10px;
    font-size: 12px;
    color: #666666;
}

.buttom_login div {
    background-color: #ff604f;
    color: #ffffff;
    float: left;
    width: 100%;
    line-height: 36px;
    height: 36px;
    -webkit-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
}

.marginTop20 {
    margin-top: 20px;
}

.marginTop40 {
    margin-top: 40px;
}

#bottom_area_contral {
    position: relative;
    width: 410px;
    padding: 0 20px;
    margin-left: -450px;
    margin-top: 450px;
    height: 40px;
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

#bottom_area_contral div:hover {
    text-decoration: underline;
    cursor: pointer;
}

.loginOtherWayImg {
    height: 40px;
    margin-left: 5%;
    cursor: pointer;
    border-radius: 100px;
}

.loginOtherWayImg:hover {
    box-shadow: 0 0 5px 1px #999999
}

#QRSetLogin {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
}

#QRArea_info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#QRArea_info div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#QRArea_info div img {
    height: 30px;
    margin: 5%;
    border-radius: 50px;
}

#QRArea_info div:last-child img:hover {
    box-shadow: 0 0 5px 1px #999999;
    cursor: pointer;
}
</style>
