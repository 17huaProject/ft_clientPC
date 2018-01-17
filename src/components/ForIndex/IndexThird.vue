<template>
    <div id="IndexThirdArea">
        <div id="ITA_line">
            <div class="ITA_line_s"></div>
            <h1>近期绘画活动
                <div>recent painting activities</div>
            </h1>
            <div class="ITA_line_s"></div>
        </div>
        <div id="ITA_content">
            <div :class="SetWidth(SCWidth)" :key="listIndexInfo[index].id" v-for="(item, index) in listIndexInfo">
                <areabox :message='listIndexInfo[index]'></areabox>
            </div>
            <!-- <div :class="this.SetWidth(this.SCWidth)">
                    <div class="ITA_acar">
                        <img class="ITA_acMainImg" src="../../../static/obj_img/webDte_img/act_pic_03.png">
                        <div class="ITA_acCoteArea">
                            <div class="mess_ITA"><img src="../../../static/obj_img/webDte_img/home_ticket_icon.png">余票10张</div>
                            <img class="ITA_acPaintImg" src="../../../static/obj_img/webDte_img/painter_pic.png">
                            <div class="mess_ITA"><img src="../../../static/obj_img/webDte_img/home_location_icon.png">距离200米</div>
                        </div>
                        <div class="ITA_acLevelStar">
                            <img src="../../../static/obj_img/webDte_img/home_star_icon_01.png">
                            <img src="../../../static/obj_img/webDte_img/home_star_icon_01.png">
                            <img src="../../../static/obj_img/webDte_img/home_star_icon_01.png">
                            <img src="../../../static/obj_img/webDte_img/home_star_icon_01.png">
                            <img src="../../../static/obj_img/webDte_img/home_star_icon_01.png">
                        </div>
                        <div class="ITA_acTextArea">
                            <div>《宿》</div>
                            <div>讲师：Min Zhao</div>
                            <div>时间：2017-08-24 18:00</div>
                            <div>地点：上海浦东新区证大喜马拉雅中心</div>
                        </div>
                    </div>
                </div> -->
        </div>
    </div>
</template>

<script>
import ActiveBox from './../ForList/ListBarStyle_1.vue'
export default {
    data() {
        return {
            screenWidth: '',
            listIndexInfo: ''
        }
    },
    created() {
        this.getListMaster()
    },
    methods: {
        SetWidth(num) {
            if (num > 1200) {
                return 'ITA_active_box_33'
            } else if (num < 660) {
                return 'ITA_active_box_100'
            } else {
                return 'ITA_active_box_50'
            }
        },
        getListMaster() {
            let m = {
                city_code: this.$store.state.SelectCityCode,
                p: '',
                d: 2000,
                stext: '',
                start: new Date(),
                end: this.YYYYMMdd(this.$store.state.ChangeCalendar.endTime || new Date(new Date().getTime() + parseInt(7 * 24 * 60 * 60 * 1000))),
                num: 1,
                page_no: 1,
                page_size: 6,
                sort: 'closing_time|0'
            }
            this.$store.commit('ConectionPara', m)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/event/search' + getString).then(m => this.setPaberList_b(m.data)).catch(r => console.log(r));
        },
        setPaberList_b(data) {
            if (data.errcode === 200) {
                this.listIndexInfo = data.records;
            } else {
                this.$toast.bottom(data.errmsg)
            }
        },
        YYYYMMdd(data) {
            let ed = new Date(data);
            var yyyy = ed.getFullYear().toString();
            var MM = this.pad(ed.getMonth() + 1, 2);
            var dd = this.pad(ed.getDate(), 2);
            return yyyy + '-' + MM + '-' + dd;
        },
        pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        },
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
#IndexThirdArea {
    width: 90%;
    padding: 4% 5% 5% 5%;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #333333;
    background-color: #f5f5f5
}

#ITA_line h1 {
    width: 300px;
    text-align: center;
    font-size: 40px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

#ITA_line h1 div {
    font-size: 12px;
    margin-top: 10px;
    letter-spacing: 4px;
    word-spacing: 5px;
}

#ITA_line {
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;
}

.ITA_line_s {
    flex: 0.2;
    height: 2px;
    background-color: #eeeeee;
}

#ITA_content {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}

.ITA_active_box {
    flex: 0 0 33%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.ITA_active_box_33 {
    flex: 0 0 32.9%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.ITA_active_box_50 {
    flex: 0 0 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.ITA_active_box_100 {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ITA_acar {
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

.ITA_acar:hover {
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

.ITA_acMainImg {
    width: 100%;
    max-width: 302px;
}

.ITA_acCoteArea {
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

.ITA_acPaintImg {
    width: 26%;
    max-width: 80px;
    border-radius: 50px;
    box-shadow: 0 0 0 2px #ffffff;
}

.ITA_acLevelStar {
    margin: 2% 0;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ITA_acLevelStar img {
    margin: 0 1%;
}

.ITA_acTextArea {
    width: 92%;
    padding: 0 4% 4% 4%;
    font-size: 14px;
    color: #333333;
}

.ITA_acTextArea div {
    margin-bottom: 2%;
}

.ITA_acTextArea div:first-child {
    color: #333333;
}
</style>
