<template>
    <div class="boxArea_2" @click="GoDetail" >
        <img class="img_top_area_2" :src="message.header_img.replace('http:','')">
        <!-- <div class="LineInfo_2">
            <img src="../../../static/obj_img/list_img/list_ticket_icon.png">
            <div>已售完</div>
            <div class="poAler"></div>
            <img src="../../../static/obj_img/list_img/list_read_icon_1.png">
            <div>660</div>
        </div> -->
        <div class="Active_info_area_2">
            <div class="title_active_2">{{message.title}}</div>
            <div class="address_active_2">地址:{{message.introduce}}</div>
        </div>
        <!-- <div class="Active_penterArea_2" @click="GoADDetail">
            <img class="penterArea_img_2" src="../../../static/obj_img/temple_img/activity_paiter_photo.png">
            <div class="penterArea_info_2">
                <div>更多></div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            address_mess: '上海市喜马拉雅芳甸路1188号B1'
        }
    },
    methods: {
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
        GoDetail: function () {
            this.$router.push({ name: 'blogD' ,query: { bloInfo: this.message.article_id }})
        },
    },
    props: ["message"]
}
</script>

<style>
.boxArea_2 {
    -webkit-column-break-inside: avoid;
    width: 96%;
    padding: 2%;
    display: flex;
    display: -webkit-flex;
    overflow: hidden;
    flex-direction: column;
    -webkit-flex-direction: column;
    background-color: #ffffff;
    cursor: pointer;
}
.boxArea_2:hover{
    box-shadow: 0 0 5px 5px #f5f5f5
}









/*背景图部分*/

.img_top_area_2 {
    float: left;
    width: 100%;
}

.Like_cover_2 {
    float: right;
    width: 7.7%;
    padding: 4.1% 3.5%;
}










/*信息栏*/

.LineInfo_2 {
    float: left;
    width: 92%;
    background: rgba(0, 0, 0, 0.5);
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

.poAler {
    flex: 1;
    -webkit-flex: 1;
}

.LineInfo_2 img {
    width: 8%;
    margin-right: 2.4%
}

.LineInfo_2 div {
    margin-top: -1px;
}










/*活动内容部分*/

.Active_info_area_2 {
    float: left;
    background-color: #ffffff;
}

.title_active_2 {
    width: 100%;
    float: left;
    font-size: 14px;
    font-weight: bold;
    padding-top: 20px;
    height: 20px;
    text-overflow: ellipsis;
    line-height: 20px;
    color: #333333;
    overflow: hidden;
    text-align: justify
}

.address_active_2 {
    width: 100%;
    float: left;
    color: #666666;
    font-size: 14px;
    padding-top: 20px;
    line-height: 20px;
    height: 80px;
    overflow: hidden;
    text-align: justify
}

.address_active_2 img {
    margin-top: 2px;
    float: right;
    height: 16px;
}









/*画师部分*/

.Active_penterArea_2 {
    width: 92%;
    background-color: #ffffff;
    margin: 0 4%;
    padding: 10px 0;
    display: flex;
    display: -webkit-flex;
}

.penterArea_img_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin-right: 3.3%;
}

.penterArea_info_2 {
    flex: 1;
    -webkit-flex: 1;
    flex-direction: column;
    -webkit-flex-direction: column;
    text-align: right;
    line-height: 20px;
    font-size: 12px;
}
.penterArea_info_2:hover{
    cursor: pointer;
    text-decoration: underline
}
</style>
