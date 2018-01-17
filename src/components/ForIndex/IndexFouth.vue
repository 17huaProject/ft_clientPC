<template>
    <div id="IndexFouthArea">
        <!-- <div id="IFA_line">
            <div class="IFA_line_s"></div>
            <h1>近期绘画活动
                <div>recent painting activities</div>
            </h1>
            <div class="IFA_line_s"></div>
        </div> -->
        
        <div id="IFA_content">
            <div :class="SetWidth(SCWidth)" :key="DialtArr[index].id" v-for="(item, index) in DialtArr">
                <areabox :message='DialtArr[index]'></areabox>
            </div>
        </div>
        <div id="IFA_more" @click="$router.push({ path: 'alt' })">更多>&nbsp;&nbsp;</div>
    </div>
</template>

<script>
import ActiveBox from './../ForList/ListBarStyle_2.vue'
export default {
    data() {
        return {
            screenWidth: '',
            DialtArr: ''
        }
    },
    created() {
        this.getListDialog()
    },
    methods: {
        SetWidth(num) {
            if (num > 1200) {
                return 'IFA_active_box_25'
            } else if (num < 660) {
                return 'IFA_active_box_100'
            } else {
                return 'IFA_active_box_50'
            }
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
        
        setDialogList_a(data) {
            if (data.errcode === 200) {
                this.DialtArr = data.records
            } else {
                this.$toast.bottom(data.errmsg)
            }
        }
    },
    components: {
        areabox: ActiveBox,
    },
    computed: {
        // screenWidth_() {
        //     this.SetWidth(this.SCWidth)
        // }
    },
    mounted() {
        // this.SetWidth(this.SCWidth)
        // console.log(this.SCWidth)
    },
    props: ['SCWidth']
}
</script>

<style>
#IndexFouthArea {
    width: 90%;
    padding:5%;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #333333;
    background-color: #ffffff
}

#IFA_line h1 {
    width: 300px;
    text-align: center;
    font-size: 40px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

#IFA_line h1 div {
    font-size: 12px;
    margin-top: 10px;
    letter-spacing: 4px;
    word-spacing: 5px;
}

#IFA_line {
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;
}

.IFA_line_s {
    flex: 0.2;
    height: 2px;
    background-color: #eeeeee;
}

#IFA_content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}

.IFA_active_box {
    flex: 0 0 33%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.IFA_active_box_25 {
    flex: 0 0 25%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.IFA_active_box_50 {
    flex: 0 0 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.IFA_active_box_100 {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.IFA_acar {
    box-shadow: 0 0 3px 1px #eeeeee;
    margin: 5%;
    width: 90%;
    border-radius: 5px;
    overflow: hidden;
    max-width: 302px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    animation: disselectOnthis 0.3s;
}

.IFA_acar:hover {
    animation: selectOnthis 0.3s;
    box-shadow: 0 0 10px 2px #999999;
}

@keyframes selectOnthis {
    from {
        box-shadow: 0 0 3px 1px #eeeeee;
    }
    to {
        box-shadow: 0 0 10px 2px #999999;
    }
}

@keyframes disselectOnthis {
    from {
        box-shadow: 0 0 10px 2px #999999;
    }
    to {
        box-shadow: 0 0 3px 1px #eeeeee;
    }
}

.IFA_acMainImg {
    width: 100%;
    max-width: 302px;
}

.IFA_acCoteArea {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: flex-start;
    margin: -19% 0 0 0;
    justify-content: space-between;
}

.mess_ITA {
    color: #ffffff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    flex: 1;
    align-self: center;
}

.mess_ITA img {
    height: 12px;
}

.IFA_acPaintImg {
    width: 26%;
    max-width: 80px;
    border-radius: 50px;
    box-shadow: 0 0 0 2px #ffffff;
}

.IFA_acLevelStar {
    margin: 2% 0;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.IFA_acLevelStar img {
    margin: 0 1%;
}

.IFA_acTextArea {
    width: 92%;
    padding: 0 4% 4% 4%;
    font-size: 14px;
    color: #333333;
}

.IFA_acTextArea div {
    margin-bottom: 2%;
}

.IFA_acTextArea div:first-child {
    color: #333333;
}
#IFA_more{
    width: 100%;
    text-align: right;
    max-width: 1200px;
    margin-top: 20px;
    cursor: pointer;
}
#IFA_more:hover{
    text-decoration: underline
}
</style>
