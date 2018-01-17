<template>
    <div id="InvoiceListArea">
        <div class="InvoiceAreaBox" @click="routerGo('/invDtl')">
            <div class="InvoiceTimeStatue">
                <div>2017-06-05</div>
                <div>申请成功</div>
            </div>
            <div class="InvoiceContent">
                <div>发票类型：增值税专用发票</div>
                <div>抬头：一袋信息科技有限公司</div>
                <div>发票号：2948334233X</div>
                <div>价税合计：89元</div>
            </div>
            <div class="InvoiceButton">
                <div>发票详情</div>
            </div>
        </div>
        <div class="InvoiceAreaBox">
            <div class="InvoiceTimeStatue">
                <div>2017-06-15</div>
                <div>申请成功</div>
            </div>
            <div class="InvoiceContent">
                <div>发票类型：增值税专用发票</div>
                <div>抬头：一袋信息科技有限公司</div>
                <div>发票号：2948334233X</div>
                <div>价税合计：89元</div>
            </div>
            <div class="InvoiceButton">
                <div>发票详情</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        routerGo: function (paths) {
            this.$router.push({ path: paths })
        },
    }
}
</script>

<style>
body {
    background-color: #f5f5f5;
}

#InvoiceListArea {
    width: 100%;
    float: left;
    font-size: 14px;
}

.InvoiceAreaBox {
    width: 100%;
    float: left;
    color: #666666;
    margin-bottom: 1.8%;
}

.InvoiceTimeStatue {
    float: left;
    width: 93.4%;
    padding: 3.3%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1px;
}

.InvoiceTimeStatue div:last-child {
    color: #ff604f;
}

.InvoiceContent {
    float: left;
    width: 93.4%;
    padding: 3.3%;
    background-color: #ffffff;
    margin-bottom: 1px;
}

.InvoiceContent div {
    line-height: 30px;
    height: 30px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.InvoiceButton {
    float: left;
    width: 100%;
    background-color: #ffffff;
}

.InvoiceButton div {
    border: 1px solid #eeeeee;
    padding: 3px 5px;
    margin: 3.3%;
    float: right;
    border-radius: 2px;
    font-size: 14px;
}
</style>
