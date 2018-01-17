<template>
    <div id="InvoiceDetailArea">
        <div id="InvoiceDetailTopArea">
            <div>开票状态：申请成功</div>
            <div>发票已经寄出，顺丰单号：294444444444444</div>
        </div>
        <div id="InvoiceDetailmaithosn">
            <div class="InvoiceDetailmaithosn_line">
                <img src="../../../../static/obj_img/accout_img/invoice_order_icon.png">
                <div class="InvoiceDetailmaithosn_DIV">
                    <div>发票金额：￥89</div>
                    <div>发票类型：增值税专用发票</div>
                </div>
            </div>
            <div class="InvoiceDetailmaithosn_line">
                <img src="../../../../static/obj_img/accout_img/invoice_time_icon.png">
                <div class="InvoiceDetailmaithosn_DIV">
                    <div>开票时间：2017-06-05</div>
                </div>
            </div>
            <div class="InvoiceDetailmaithosn_line">
                <img src="../../../../static/obj_img/accout_img/invoice_invoice_icon.png">
                <div class="InvoiceDetailmaithosn_DIV">
                    <div>发票抬头：一袋信息科技有限公司</div>
                    <div>税号：949300393991X</div>
                    <div>注册地址：上海市闵行区55弄88号666室</div>
                    <div>开户银行名称：招商银行花木路支行</div>
                    <div>开户银行账号：9492 4949 2929 4494 233</div>
                </div>
            </div>
        </div>
        <div id="InvoiceDetailOrderList">
            <div id="InvoiceDetailOrderListButton">
                相关订单<img src="../../../../static/obj_img/list_more_xiala_icon.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
body {
    background-color: #f5f5f5;
}

#InvoiceDetailArea {
    float: left;
    width: 100%;
    color: #666666;
    font-size: 14px;
}

#InvoiceDetailTopArea {
    width: 93.4%;
    padding: 4.3% 3.3%;
    background-color: #ffffff;
    margin-bottom: 1.8%;
    float: left;
}

#InvoiceDetailmaithosn {
    float: left;
    width: 100%;
    margin-bottom: 1.8%;
}

#InvoiceDetailTopArea div:first-child {
    color: #ff604f;
}

#InvoiceDetailTopArea div:last-child {
    margin-top: 2%;
    font-size: 14px;
}

.InvoiceDetailmaithosn_line {
    float: left;
    width: 93.4%;
    padding: 3.3%;
    background-color: #ffffff;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
}

.InvoiceDetailmaithosn_line img {
    width: 30px;
    height: 30px;
    margin-right: 3.3%
}

.InvoiceDetailmaithosn_DIV {
    flex: 1;
    flex-direction: column;
}

.InvoiceDetailmaithosn_DIV div {
    line-height: 30px;
    width: 100%;
}

#InvoiceDetailOrderList {
    float: left;
    width: 100%;
}

#InvoiceDetailOrderListButton {
    float: left;
    width: 93.4%;
    padding: 3.3%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#InvoiceDetailOrderListButton img{
    height: 20px;
}
</style>
