<template>
    <div id="orderpills">
        <div id="orderTitle">活动名字</div>
        <div id="mainOrderinfo" @click="goPath">
            <div id="leftImg">
                <div>待支付</div>
            </div>
            <div id="rightInfo">
                <div>2017年6月9日 18：00</div>
                <div>地址：上海市喜马拉雅芳甸路118号B1</div>
                <div>1人券 总价￥99</div>
            </div>
        </div>
        <div id="endButton">
            <div>去支付</div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        goPath: function () {
            this.$router.push({ path: '/od' })
        }
    }
}
</script>

<style>
#orderpills {
    width: 93.4%;
    padding: 3.3%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    flex-direction: column;
    -webkit-flex-direction: column;
    background-color: #ffffff;
    margin-top: 1%;
}

#orderTitle {
    width: 100%;
    flex: 1;
    -webkit-flex: 1;
    margin-bottom: 3.3%;
}

#mainOrderinfo {
    width: 100%;
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    margin-bottom: 3.3%;
}

#leftImg {
    width: 28.3%;
    padding-bottom: 28.3%;
    margin-right: 3.3%;
    background: url('../../../../static/obj_img/accout_img/my_collect_activity.png');
    background-size: contain
}

#leftImg div {
    height: 24px;
    width: 56px;
    line-height: 24px;
    margin-bottom: -24px;
    text-align: center;
    background-color: #fda649;
    color: #ffffff;
    font-size: 12px;
}

#rightInfo {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
}

#rightInfo div:nth-child(2) {
    flex: 1;
    -webkit-flex: 1;
    padding: 6% 0;
}

#endButton {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    width: 100%;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
}

#endButton div {
    font-size: 16px;
    width: 70px;
    text-align: center;
    padding: 3px 5px;
    color: #ff604f;
    border: 1px solid #ff604f;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
</style>