<template>
    <div id="IndexSecoendArea">
        <div id="ISA_line">
            <div class="ISA_line_s"></div>
            <h1>绘画·遇见·体验
                <!-- <div>painting·meeting·experience</div> -->
            </h1>
            <div class="ISA_line_s"></div>
        </div>
        <div id="ISA_selogen">
            如果你从来没有画过一幅作品，那么你将会有一个全新的体验<br> 
           2小时1幅画<br> 
           解锁你的的创造力，而存在<br> 
           “你创作的才是艺术”<br> 
        </div>
        <div id="ISA_content">
            <div :class="recodMass(SCWidth)">
                <img src="//image.17hua.me/upload/image/201711/1510724651232414.png">
                <div class="ISA_content_text">
                    <div :class="ats.am_1">PAINTING</div>·
                    <div :class="ats.am_2">MEETING</div>·
                    <div :class="ats.am_3">EXPERIENCE</div>
                </div>
            </div>
            <div :class="recodMass(SCWidth)">
                <img src="//image.17hua.me/upload/image/201711/1510724651402335.png">
                <div class="ISA_content_text2">
                    <div :class="ats.rm_1">MEETS THE</div>
                    <div :class="ats.rm_2">MOST</div>
                    <div :class="ats.rm_3">BEAUTIFUL</div>
                    <div :class="ats.rm_4">SELF</div>
                    <div class="ISA_content_text3" :class="ats.rm_5">只为更懂你</div>
                </div>
            </div>
            <div :class="recodMass(SCWidth)"><img src="//image.17hua.me/upload/image/201711/1510724651425663.png"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ats: {
                am_1: '',
                am_2: '',
                am_3: '',
                rm_1: '',
                rm_2: '',
                rm_3: '',
                rm_4: '',
                rm_5: '',
            }
        }
    },
    methods: {
        recodMass(width) {
            return width > 800 ? 'ISA_content_box50' : 'ISA_content_box100'
        }
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', function() {
            if (window.scrollY > (10 / 9 * that.SCHight)) {
                that.ats.am_1 = 'animated fadeInUp'
                that.ats.rm_1 = 'animated fadeInLeft'
                setTimeout(function() {
                    that.ats.am_2 = 'animated fadeInUp'
                    that.ats.rm_2 = 'animated fadeInRight'
                    setTimeout(function() {
                        that.ats.rm_3 = 'animated fadeInLeft'
                        that.ats.am_3 = 'animated fadeInUp'
                        setTimeout(function() {
                            that.ats.rm_4 = 'animated fadeInRight'
                            setTimeout(function() {
                                that.ats.rm_5 = 'animated fadeInUp'
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            } else {
                that.ats.am_1 = 'animated fadeOutDown'
                that.ats.am_2 = 'animated fadeOutDown'
                that.ats.am_3 = 'animated fadeOutDown'
                that.ats.rm_1 = 'animated fadeOutRight'
                that.ats.rm_2 = 'animated fadeOutLeft'
                that.ats.rm_3 = 'animated fadeOutRight'
                that.ats.rm_4 = 'animated fadeOutLeft'
                that.ats.rm_5 = 'animated fadeOutDown'
            }
        });
    },
    props: ['SCWidth', 'SCHight']
}
</script>

<style>
#IndexSecoendArea {
    width: 90%;
    padding: 5%;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    color: #666666;
}

#ISA_line h1 {
    width: 300px;
    text-align: center;
    font-size: 40px;
    color: #333333;
}

#ISA_line h1 div {
    font-size: 12px;
    letter-spacing: 4px;
    word-spacing: 5px;
    margin-top: 10px;
}

#ISA_line {
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;
}

.ISA_line_s {
    flex: 0.2;
    height: 2px;
    background-color: #eeeeee;
}

#ISA_selogen {
    text-align: center;
    letter-spacing: 2px;
    word-spacing: 2px;
}

#ISA_content {
    position: relative;
    max-width: 900px;
    padding: 5% 0 0 0;
    float: left;
}

.ISA_content_box {
    width: 50%;
    position: relative;
    float: left;
}

.ISA_content_box50 {
    width: 50%;
    position: relative;
    float: left;
}

.ISA_content_box100 {
    width: 100%;
    position: relative;
    float: left;
}

.ISA_content_box img {
    width: 100%;
    float: left;
}

.ISA_content_box50 img {
    width: 100%;
    float: left;
}

.ISA_content_box100 img {
    width: 100%;
    float: left;
}

.ISA_content_text {
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

.ISA_content_text2 {
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

.ISA_content_text3 {
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
</style>
