<template>
    <div class="boxArea">
        <div class="mencCles" v-if="message.event_status=='FINISH'">
            <div>已结束</div>
        </div>
        <div class="mencCles" v-else-if="message.event_status=='SOLDOUT'">
            <div>已售完</div>
        </div>
        <div class="img_top_area" @click="GoDetail">
            <img :src="imgChange(message.event_img)">
        </div>
        <div class="title_active">《{{message.event_name}}》</div>
        <!-- <div class="LineInfo" v-if="message.event_status=='SOLDOUT'">
                    <div>已卖完</div>
                </div>
                <div class="LineInfo" v-else-if="message.event_status=='FINISH'">
                    <div>已结束</div>
                </div>
                <div class="LineInfo" v-else-if="message.event_status=='PRESALE'">
                    <div>预售</div>
                </div>
                <div class="LineInfo" v-else>
                    <img src="../../../static/obj_img/list_img/list_location_icon.png">
                    <div>距离{{limit}}</div>
                    <img src="../../../static/obj_img/list_img/list_ticket_icon.png">
                    <div>余票{{message.left_num}}张</div>
                </div> -->
        <div class="Active_info_area" @click="GoDetail" v-if="false">
            <div class="title_active">《{{message.event_name}}》</div>
            <div class="address_active" >{{message.event_time}}</div>
            <div class="address_active" >
                <div>{{message.venue_name}}</div>
                <!--<img src="../../../static/obj_img/list_img/list_seratch_icon_2.png">-->
            </div>
        </div>
        <div class="Active_penterArea" @click="GoDetail" v-if="false">
            <img class="penterArea_img" :src="message.artist_avatar.indexOf('http')<0?this.$store.state.SyetemBaseConfig.image_prefix+message.artist_avatar:''+message.artist_avatar.replace(/\http:/g,'')">
            <div class="penterArea_info">
                <div>{{message.artist_name}}</div>
                <div>
                    <img class="star_af" :src="tipsLevel(message.artist_level, 0)">
                    <img class="star_af" :src="tipsLevel(message.artist_level, 1)">
                    <img class="star_af" :src="tipsLevel(message.artist_level, 2)">
                    <img class="star_af" :src="tipsLevel(message.artist_level, 3)">
                    <img class="star_af" :src="tipsLevel(message.artist_level, 4)">
                </div>
            </div>
        </div>
        <div id="mainSshow_area" class="animate fadeIn" v-show="cuse" @click="cuse = false">
            <vue-qr :text="textA" class="animate fadeInDown" size="160" dotScale="1" logoSrc="//image.17hua.me/upload/image/201709/1505371271440500.png" logoCornerRadius="1"></vue-qr>
            <div class="animate fadeInUp">微信扫描二维码即可查看活动哦</div>
        </div>
    </div>
</template>

<script>
import VueQr from 'vue-qr'
//import VueQrcode from 'vue-qrcode'
export default {
    data() {
        return {
            Like: true,
            address_mess: '',
            limit: this.setFarlimit(this.message.score),
            cuse: false,
            textA: document.location.protocol +'//wx.17hua.me/#/dt?actinfo=' + this.message.id
        }
    },
    methods: {
        LikeThisActivity(like) {
            this.Like = like
        },
        GoDetail() {
            //TDAPP.onEvent('活动列表点击', '列表进入', '活动id' + this.message.id)
            document.body.clientWidth < 600 ? this.$router.push({ name: 'acinfo', query: { actinfo: this.message.id } }) : this.cuse = true
        },
        GoADetail() {
            this.$router.push({ name: 'ptinfo', query: { prtinfo: this.message.artist_id } })
            // this.$router.push({ path: '/pt' })
        },
        GoADDetail() {
            this.$router.push({ name: 'atinfo', query: { addinfo: this.message.venue_id } })
        },
        imgChange(add) {
            return add.indexOf('http') < 0 ? this.$store.state.SyetemBaseConfig.image_prefix + add : '' + add.replace(/\http:/g,'')
        },
        setFarlimit(data) {
            if (data > 50) {
                return 'far'
            } else if (data > 1 && data <= 50) {
                return parseInt(data) + 'km'
            } else if (data < 1 && data * 1000 > 10) {
                return parseInt(data * 1000) + 'm'
            } else {
                return 'near'
            }
        },
        getTime(time, index) {
            time = time.replace('-', '/').replace('-', '/')
            let t = new Date(time)
            const weekName = ['日', '一', '二', '三', '四', '五', '六'];
            return index == 0 ? (1 + t.getMonth()) + '月' + t.getDate() + '日' : '周' + weekName[t.getDay()] + ' ' + (t.getHours() < 10 ? '0' + t.getHours() : t.getHours()) + '：' + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes())
        },
        tipsLevel(num, ad) {
            if (num - ad >= 1) {
                return '../../../static/obj_img/list_img/list_Star_icon_1.png'
            } else if (num - ad > 0 && num - ad < 1) {
                return '../../../static/obj_img/list_img/list_Star_icon_2.png'
            } else {
                return '../../../static/obj_img/list_img/list_Star_icon_3.png'
            }
        },
    },
    props: ["message"],
    components: {
        VueQr
    }
}
</script>

<style>
.boxArea {
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    position: relative;
    float: left;
    flex: 1;
    width: 300px;
    height: 300px;
    margin: 10px;
    display: flex;
    display: -webkit-flex;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    overflow: hidden;
    flex-direction: column;
    -webkit-flex-direction: column;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 3px 1px #E7E7E7;
    justify-content: center;
    align-items: center;
}



/* .boxArea:hover {
    -webkit-animation: bts 0.5s;
    box-shadow: 0 0 5px 2px #aaaaaa
} */

@-webkit-keyframes bts {
    from {
        box-shadow: 0 0 5px 2px #ffffff
    }
    to {
        box-shadow: 0 0 5px 2px #aaaaaa
    }
}

#mainSshow_area {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#mainSshow_area div {
    margin-top: 5px;
    font-size: 14px;
    color: #ffffff;
}







/*背景图部分*/

.img_top_area {
    float: left;
    width: 240px;
    height: 240px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img_top_area img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 3px;
}

.Like_cover {
    float: right;
    margin-left: -15.8%;
    width: 7.7%;
    padding: 4.1% 3.5%;
    margin-bottom: -2%;
}














/*信息栏*/

.LineInfo {
    float: left;
    width: 92%;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    font-size: 12px;
    color: #ffffff;
    height: 30px;
    margin-top: -30px;
    padding: 0 4%
}

.LineInfo img {
    width: 3.3%;
    margin-right: 1.1%
}

.LineInfo div {
    margin-top: -1px;
    margin-right: 3.2%
}








/*活动内容部分*/

.Active_info_area {
    float: left;
    width: 100%;
}

.title_active {
    float: left;
    margin-top: -30px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    width: 100%;
    color: #333333;
}

.address_active {
    width: 100%;
    height: 12px;
    float: left;
    color: #666666;
    font-size: 12px;
    padding-top: 10px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}

.address_active div {
    flex: 1;
    -webkit-flex: 1;
    height: 20px;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.address_active img {
    margin-top: 2px;
    float: right;
    height: 12px;
}




















/*画师部分*/

.Active_penterArea {
    width: 92%;
    background-color: #ffffff;
    padding: 0 4%;
    padding: 10px 4%;
    display: flex;
    display: -webkit-flex;
}

.penterArea_img {
    -webkit-border-radius: 20px;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    margin-right: 3.3%;
}

.penterArea_info {
    flex: 1;
    -webkit-flex: 1;
    /*display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;*/
}

.penterArea_info div {
    font-size: 12px;
    height: 14px;
    line-height: 14px;
    color: #666666;
    margin-bottom: 5px;
}

.penterArea_info div img {
    height: 14px;
    margin: 0 2px 0 0;
}

.star_af {
    width: 14px;
    margin: 8px 4px 0 0;
}

.this_acTime_floatTop {
    float: left;
    padding: 0 8px;
    background-color: #ff7d54;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    line-height: 23px;
    height: 46px;
    position: relative;
    margin: 0 0 -46px 5%;
}

.mencCles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    /* background-image: -webkit-linear-gradient(top,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8)); */
    justify-content: center;
    align-items: center;
}

.mencCles div {
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #fff;
    border-radius: 80px;
    color: #000;
    font-size: 20px;
    border: 3px;
    
}








/* 内容部分 */
</style>
