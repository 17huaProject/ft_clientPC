<template>
    <div id="AboutSecoendArea">
        <div class="ASA_line" :class="rcodeWass(SCWidth)">
            <div class="ASA_line_s"></div>
            <h1>关于我们
                <div>ABOUT US</div>
            </h1>
            <div class="ASA_line_s"></div>
        </div>
        <div class="ASA_selogen" :class="rcodeWass(SCWidth)">
            一起画项目创意的灵感来源于一次短暂的旅行：加拿大惠斯勒小镇。创始人遇见了一位著名女艺术家，与她一起完成了一副人生第一幅作品。在那次体验之后，开启了另一扇大门，把绘画作品简单化、标准化，让99%的零基础绘画人群开启自己的艺术之旅。建立起简单、创新、共享的理念。<br><br> 
            经过长达几个月的研究和探索，2017年6月，一起画（17画）www.17hua.me 悄悄的来到上海。从一个人的梦想到9个人的新创团队，打造全新的科技+创造力+绘画平台。 <br><br>
            一起画联合加拿大、美国等北美地区超过20位艺术、教育家们，开发全系列的绘画课程。打造2小时1幅画的体验活动（2小时完成一幅独一无二、属于自己的作品）。 <br><br>
            一起画承载2亿人的艺术使命。我们希望能帮助2亿中国人，关注、发现自己，去体验、遇见自己的特长。在同事之间、朋友之间、亲子之间建立起紧密的联系。通过一种新的社交方式，边吃、边喝、边画，让绘画艺术伴随着我们的工作、生活、家庭。<br><br>
            共享与公益是我们所有员工的方向：我们使用共享／闲置的空间并在空间内打造高品质的艺术生活。在梦想与发展的道路上，我们自己就是所有用户最好的榜样。我们鼓励用户参与捐赠自己的作品去帮助自闭症儿童中心的小朋友发现更多的颜色，让创作走向未来。<br><br>
           
        </div>
        <!-- <div id="ASA_LostAra" :class="recodMass(SCWidth)">
            <div class="ASA_textAbor">
                <img src="http://image.17hua.me/upload/image/201709/1505371269094403.png">
                <h3>优秀的画师团队</h3>
                <div>我们的画师均毕业于全国知名的美术大学，一起画对于画师的匹配有自己的一套标准，画师们不光要具备专业的绘画能力，还要富有对艺术的热情，性格开朗，在绘画体验的同时，可以给你带来丰富的艺术指导。</div>
            </div>
            <div class="ASA_textSpace" v-show="SCWidth>900"></div>
            <div class="ASA_textAbor">
                <img src="http://image.17hua.me/upload/image/201709/1505371269533301.png">
                <h3>资深策划团队</h3>
                <div>策划是一起画很重要的一个环节，主要负责对活动的安排与策划。一起画可以为你定制私人活动和团建活动，由资深的绘画团队为你策划活动和时间地点，为你匹配最合适的指导画师，一定能给你一个独特的艺术体验。</div>
            </div>
            <div class="ASA_textSpace" v-show="SCWidth>900"></div>
            <div class="ASA_textAbor">
                <img src="http://image.17hua.me/upload/image/201709/1505371269532511.png">
                <h3>专业研发团队</h3>
                <div>一起画是一个互联网O2O零基础绘画平台，自然少不了默默在幕后工作的研发团队，我们的线上研发团队，拥有丰富的研发经验，以提高用户体验和视觉体验为目标，致力于打造一个在国内独一无二的绘画社交平台。</div>
            </div>
        </div> -->
        <!-- <img id="ASA_imgBottom" src="http://image.17hua.me/upload/image/201709/1505371269878685.png">
        <div class="ASA_line" v-show="false" :class="rcodeWass(SCWidth)">
            <div class="ASA_line_s"></div>
            <h1>公司愿景
                <div>Company Vision</div>
            </h1>
            <div class="ASA_line_s"></div>
        </div>
        <div class="ASA_selogen" v-show="false" :class="rcodeWass(SCWidth)">
            一起画灵感来源于：加拿大惠斯勒小镇，2017年的6月，一起画悄悄的来到你的城市，期待着与你的相遇，我们的团队新颖而富有热情，热爱绘画，生活。<br><br> 我们联合加拿大、美国、等.....超过20位艺术教育家们，为你带来更多的创意。
            <br><br> 在未来的日子里，我们希望能帮助更多的人去体验、发现自己的特长，体验一种新的亲子生活方式，同事之间，朋友之间，亲子之间建立起紧密的联系，2小时完成一幅独一无二的作品，通过一种新的社交方式，边吃、边喝、边画，让绘画艺术伴随着我们的工作、生活、家庭......这就是我们的理念，我们是一起画，快来和我们一起画。
            <br>
        </div> -->
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
            return width > 900 ? 'ASA_LostAra_flex_w' : 'ASA_LostAra_flex_s'
        },
        rcodeWass(width) {
            return width > 900 ? 'ASA_LostAra_w' : 'ASA_LostAra_s'
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
#AboutSecoendArea {
    width: 100%;
    padding: 5% 0;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #666666;
}

.ASA_line h1 {
    min-width: 200px;
    padding: 0 5%;
    text-align: center;
    font-size: 40px;
    letter-spacing: 4px;
    word-spacing: 5px;
    color: #333333;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0.67em;
}

.ASA_line h1 div {
    font-size: 12px;
    margin-top: 10px;
    color: #333333;
}

.ASA_line {
    display: flex;
    float: left;
    align-items: center;
}

#ASA_LostAra {
    display: flex;
}

.ASA_LostAra_flex_w {
    width: 60%;
    padding: 0 20%;
    justify-content: space-around;
}

.ASA_LostAra_flex_s {
    width: 80%;
    padding: 0 10%;
    flex-direction: column;
    align-items: center;
}

.ASA_LostAra_w {
    width: 60%;
    padding: 0 20%;
}

.ASA_LostAra_s {
    width: 80%;
    padding: 0 10%;
}

.ASA_textAbor {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5% 0 0 0;
    word-spacing: 1px;
    text-align: justify
}

.ASA_textAbor img {
    width: 30%;
    max-width: 64px;
}

.ASA_textSpace {
    width: 10%;
}

.ASA_line_s {
    flex: 1;
    height: 2px;
    background-color: #eeeeee;
}

.ASA_selogen {
    text-align: justify
}

#ASA_content {
    position: relative;
    max-width: 900px;
    padding: 5% 0 0 0;
    float: left;
}

.ASA_content_box {
    width: 50%;
    position: relative;
    float: left;
}

.ASA_content_box50 {
    width: 50%;
    position: relative;
    float: left;
}

.ASA_content_box100 {
    width: 100%;
    position: relative;
    float: left;
}

.ASA_content_box img {
    width: 100%;
    float: left;
}

.ASA_content_box50 img {
    width: 100%;
    float: left;
}

.ASA_content_box100 img {
    width: 100%;
    float: left;
}

.ASA_content_text {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 15% 5%;
    display: flex;
    flex-direction: column;
    color: #000000;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 2px;
    word-spacing: 2px;
    line-height: 20px;
    text-shadow: 0 0 1px #000
}

.ASA_content_text2 {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 10% 5%;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 4px;
    word-spacing: 4px;
    text-shadow: 0 0 1px #ffffff
}

.ASA_content_text3 {
    font-size: 14px;
    color: #666666;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5% 8px 5% 16px;
    margin: 5% 0;
    letter-spacing: 8px;
    text-align: center;
    word-spacing: 8px;
    font-weight: normal;
}

#ASA_imgBottom {
    width: 100%;
    padding: 5% 0;
}
</style>
