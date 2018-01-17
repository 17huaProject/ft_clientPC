<template>
    <div id="alticList_Area">
        <div id="TopMenuArea">
            <logo :PageFrom='"list"'></logo>
            <indexmenu :SCWidth='screenWidth' :seOnC='"altpg"'></indexmenu>
        </div>
        <div id="alticListAreaBox">
            <div class="infoBoxForAltic" :style="screenWidth>860?'':'flex-direction: column;align-items: flex-start'" v-for="(item,index) in DialtArr" :key="'DA'+index">
                <img :class="changeImgSide(screenWidth)" :src="item.header_img.replace('http:','')" @click="GoDetail(item.article_id)">
                <div class="AlticAreaInfo">
                    <div class="AlticTitle" @click="GoDetail(item.article_id)">{{item.title}}</div>
                    <div class="AlticAuthor">编辑时间：{{item.create_time}}</div>
                    <div class="AlticContent">{{item.introduce}}</div>
                </div>
            </div>
        </div>
        <indexb></indexb>
    </div>
</template>

<script>
// import ActiveBox from './ForList/ListBarStyle_2.vue'
import ISBD from './ForIndex/IndexBottom.vue'
import logo from './ForIndex/Indexlogo.vue'
import login from './ForIndex/loginBox.vue'
import menu from './ForIndex/IndexMenu.vue'
export default {
    data() {
        return {
            screenWidth: document.body.clientWidth,
            DialtArr: '',
            dialogList: {
                cat_id: 2,
                page_no: 1,
                page_size: 4
            },
            pageRoll:true
        }
    },
    created() {
        this.getListDialog();
    },
    methods: {
        GoDetail: function(addd) {
            this.$router.push({ name: 'blogD', query: { bloInfo: addd } })
        },
        changeImgSide(screenWidth) {
            return screenWidth > 860 ? 'AlticAreaImg' : 'AlticAreaImg_top'
        },
        getListDialog() {
            this.$store.commit('ConectionPara', this.dialogList)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/article/index' + getString).then(m => this.setDialogList_a(m.data)).catch(r => console.log(r));
        },
        getListDialogAdd() {
            this.$store.commit('ConectionPara', this.dialogList)
            let getString = this.$store.state.getParamString;
            let postString = getString.replace('?', '');
            this.$http.get(this.$store.state.serverHost + '/yqhbsp/article/index' + getString).then(m => this.setDialogList_b(m.data)).catch(r => console.log(r));
        },
        unescape(html) {
            return html
                .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, "\"")
                .replace(/&#39;/g, "\'")
                .replace(/&mdash;/g, "-")
                .replace(/&nbsp;/g, " ")
        },
        setDialogList_a(data) {
            if (data.errcode === 200) {
                this.pageRoll = (data.records.length == 4)
                this.DialtArr = data.records
            } else {
                this.$toast.bottom(data.errmsg)
            }
        },
        setDialogList_b(data) {
            if (data.errcode === 200) {
                this.pageRoll = (data.records.length == 4)
                this.DialtArr = this.DialtArr.concat(data.records)
            } else {
                this.$toast.bottom(data.errmsg)
            }
        },
    },
    components: {
        // areabox: ActiveBox,
    },
    components: {
        indexb: ISBD,
        logo: logo,
        indexmenu: menu,
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function() {
                    that.timer = false
                }, 400)
            }
        },
        dialogList: {
            handler: function(val, oldVal) {
                this.getListDialogAdd()
            },
            deep: true
        },
    },
    
    mounted() {
        const that = this
        //this.startPlayback()
        window.onresize = () => {
            return (() => {
                //that.startPlayback()
                that.screenWidth = window.screenWidth = document.body.clientWidth
            })()
        }
        // 设置一个开关来避免重负请求数据  
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                if (that.pageRoll == true) {
                    // 将开关关闭  
                    that.pageRoll = false
                    that.dialogList.page_no++;
                    console.log(that.dialogList.page_no)
                }
            }
        });
    }
}
</script>

<style>
body {
    background-color: #f5f5f5
}

#alticList_Area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 71px;
    float: left;
}

#TopMenuArea {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    padding: 10px 2%;
    width: 96%;
    display: flex;
    align-self: center;
    background: #ffffff;
    border-bottom: 1px solid #f1f1f1
}

#alticListAreaBox {
    float: left;
    width: 94.2%;
    max-width: 960px;
    padding: 0 2.9%;
    background-color: #fff;
}

.infoBoxForAltic {
    padding: 40px 0;
    width: 100%;
    float: left;
    position: relative;
    text-align: justify;
    border-bottom: 1px dashed #999999;
    display: flex;
    align-items: center;
}

.AlticAreaImg {
    width: 30%;
    margin-right: 20px;
    position: relative;
    float: left;
    cursor: pointer;
}

.AlticAreaImg_top {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    float: left;
    cursor: pointer;
}

.AlticAreainfo {
    position: relative;
    float: right;
    flex: 1;
    color: #333333;
    height: 100%;
    align-self: flex-start;
}

.AlticTitle {
    font-size: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}

.AlticAuthor {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
}

.AlticContent {
    flex: 1;
    color: #666;
}
</style>
