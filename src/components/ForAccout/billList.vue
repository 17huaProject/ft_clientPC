<template>
    <div id="tpa">
        <div class="Tline" :key="item" v-for="(item, index) in billList">
            <div class="maLst">
                <div>{{item.objName}}</div>
                <div>{{item.rmTime}}</div>
            </div>
            <div>{{reAd(item.add)}}{{item.myNum}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            billList: [
                { objName: '花花送钱3', rmTime: '2012-07-02', add: true, myNum: 99 },
                { objName: '花4花消费', rmTime: '2017-07-02', add: false, myNum: 100 },
                { objName: '花花消费1', rmTime: '2017-07-02', add: false, myNum: 99 },
                { objName: '花花送钱1', rmTime: '2017-07-02', add: true, myNum: 202 }
            ]
        }
    },
    methods: {
        reAd: function (statue) {
            return statue ? '+' : '-'
        }
    }
}
</script>

<style>
body {
    background-color: #f5f5f5;
}

#tpa {
    width: 100%;
    float: left;
}

.Tline {
    width: 93.4%;
    padding: 3.3%;
    float: left;
    background-color: #ffffff;
    margin-bottom: 1%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    color: #333333;
    font-size: 16px;
}

.maLst {
    flex: 1;
    -webkit-flex: 1;
}

.maLst div:last-child {
    color: #999999;
    margin-top: 3.3%;
}
</style>
