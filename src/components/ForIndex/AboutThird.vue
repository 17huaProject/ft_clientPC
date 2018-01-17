<template>
    <div id="AboutThirdArea">
        <div class="ATA_line">
            <div class="ATA_line_s"></div>
            <h1>联系我们
                <div>CONTACT US</div>
            </h1>
            <div class="ATA_line_s"></div>
        </div>
        <div id="ATA_info" :class="SCWidth<900?'o_ATA_w':''">
            <div class="ATAinfo_a">
                <div style="width:100%;padding-top:100%;background-color:#eeeeee"></div>
            </div>
            <div class="ATAinfo_a" style="padding-left:5%">
                <h3>上海一袋信息科技有限公司</h3>
                <div style="font-size:14px;">上海市浦东新区芳甸路1188弄1-4号证大喜马拉雅中心B1优客工厂RB105室</div>
                <div style="display:flex;align-items:center;padding:5% 0">
                    <img src="../../../static/obj_img/about_2wm.png">
                    <div style="margin-left:5px;">
                        <div style="height:30px;line-height:30px;"><img width="20" style="margin-right:5px;margin-bottom:-3px" src="../../../static/obj_img/about_icon_contaci 2.png">021-67991260</div>
                        <div>更多资讯请关注"sh17hua"微信公众号</div>
                        <div>邮箱：creator@17hua.me</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ats: {

            }
        }
    },
    methods: {
        recodMass(width) {
            return width > 900 ? 'ATA_LostAra_flex_w' : 'ATA_LostAra_flex_s'
        }
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', function() {

        });
    },
    props: ['SCWidth', 'SCHight']
}
</script>

<style>
#AboutThirdArea {
    width: 90%;
    padding: 5%;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 900px;
    color: #666666;
}

.ATA_line h1 {
    width: 200px;
    padding: 0 5%;
    text-align: center;
    font-size: 40px;
    letter-spacing: 4px;
    word-spacing: 5px;
    color: #333333;
}

.ATA_line h1 div {
    font-size: 12px;
    margin-top: 10px;
    color: #333333;
}

.ATA_line {
    width: 80%;
    padding: 0 10%;
    display: flex;
    float: left;
    align-items: center;
}


.ATA_line_s {
    flex: 1;
    height: 2px;
    background-color: #eeeeee;
}

#ATA_info{
    width: 90%;
    padding:5%;
    max-width: 900px;
    display: flex;
}
.o_ATA_w{
    flex-direction: column;
}
.ATAinfo_a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
</style>
