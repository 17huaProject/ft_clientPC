<template>
    <div id="joinUsArea">
        <div id="joinUsArea_list">
            <logo :PageFrom='"list"'></logo>
            <indexmenu :SCWidth='screenWidth' :seOnC='"joinu"'></indexmenu>
        </div>
        <div id="joinus_box">
            <h1>加入我们</h1>
            <div>姓名：</div>
            <input v-model="j_name" maxlength="20">
            <div>电话：</div>
            <input v-model="j_phone" maxlength="11">
            <div>邮箱：</div>
            <input v-model="j_email" maxlength="30">
            <div>职位：</div>
            <input v-model="j_position" maxlength="10">
            <div>自我描述：</div>
            <textarea v-model="j_description" maxlength="120"></textarea>
            <p @click="joinUsDP()">提交</p>
        </div>
    </div>
</template>

<script>
import logo from './../ForIndex/Indexlogo.vue'
import menu from './../ForIndex/IndexMenu.vue'
export default {
    data() {
        return {
            screenWidth: document.body.clientWidth,
            j_name: '',
            j_phone: '',
            j_email: '',
            j_position: '',
            j_description: ''
        }
    },
    components: {
        indexmenu: menu,
        logo: logo
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
                this.$toast.center('提交成功，我们尽快联系你')
            } else {
                this.$toast.center(data.errmsg)
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
    },
    mounted() {
        let _this = this;
        let _scroll = 0;
        let _runCan = true;
        let runArray = [];
        // 设置一个开关来避免重负请求数据  
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                if (_this.pageRoll == true) {
                    // 将开关关闭  
                    _this.pageRoll = false
                    _this.ListConfig.page_no++;
                }
            }
            ((window.scrollY - _scroll) > 10 || (window.scrollY - _scroll) < -10) && _this.rollScrollCan ? runArray.push(window.scrollY - _scroll) : '';
            runArray.length > 3 ? runArray.shift() : ''
            if (runArray[0] > 0 && runArray[1] > 0 && runArray[2] > 0) {
                _this.vTopShow = false
                _this.rollScrollCan = false;
            }
            if (runArray[0] < 0 && runArray[1] < 0 && runArray[2] < 0) {
                _this.vTopShow = true
                _this.rollScrollCan = false;
            }
            _this.AtTop = window.scrollY < 50;
            window.scrollY == 0 && _this.rollScrollCan ? _this.vTopShow = true : '';
            _scroll = window.scrollY
        });

        const that = this
        window.onresize = () => {
            return (() => {
                that.screenWidth = window.screenWidth = document.body.clientWidth
                that.screenHight = window.screenHight = document.documentElement.clientHeight
            })()
        }
        // window.addEventListener('scroll', function() {
        //     that.setBackgroundColor = window.scrollY > (that.screenHight - 50) ? 'setBk' : 'rmoveBk';
        // });
    }
}
</script>

<style>
#joinUsArea_list {
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

#joinUsArea {
    width: 100%;
    float: left;
    background: url('//image.17hua.me/upload/image/201709/1506675929515944.png');
    background-size: cover;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
}

#joinus_box {
    width: 100%;
    margin: 48px 0;
    max-width: 594px;
    background: rgba(0, 0, 0, 0.8)
}

#joinus_box h1 {
    padding: 7.4% 0 0 0;
    letter-spacing: 10px;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
}

#joinus_box div {
    margin-bottom: 2.6%;
    padding: 0 8.7%;
    color: #ffffff;
    font-size: 16px;
}

#joinus_box input {
    width: 79.4%;
    margin: 0 8.7% 4.7% 8.7%;
    height: 30px;
    line-height: 30px;
    outline: none;
    padding: 0 1.6%;
    font-size: 16px;
    color: #999999;
    border: 0;
    border-radius: 2px;
}

#joinus_box textarea {
    width: 79.4%;
    margin: 0 8.7% 4.7% 8.7%;
    height: 120px;
    line-height: 30px;
    font-size: 16px;
    outline: none;
    padding: 0 1.6%;
    color: #999999;
    resize: none;
    border: 0;
    border-radius: 2px;
}

#joinus_box p {
    width: 140px;
    height: 34px;
    background-color: #ff604f;
    text-align: center;
    margin: 0 auto;
    line-height: 34px;
    font-size: 16px;
    outline: none;
    color: #ffffff;
    resize: none;
    border-radius: 50px;
    margin-top: 2%;
    margin-bottom: 8.7%;
    cursor: pointer;
}

#joinus_box p:hover {
    background-color: #ff7d54;
}
</style>
