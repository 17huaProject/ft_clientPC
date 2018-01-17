<template>
    <div id="ApplyForInvoiceArea">
        <div id="ApplyForInvoiceTitle">
            <img src="../../../../static/obj_img/accout_img/invoice_invoice_icon.png">
            <div>
                <div>发票金额：
                    <span>￥89</span>
                </div>
                <div>发票类型：普通增值税专用发票</div>
            </div>
        </div>
        <div id="ApplyForInvoiceContent">
            <div id="AFIC_tapChange">
                <div class="AFIC_T_S">公司</div>
                <div class="AFIC_T_O">个人</div>
            </div>
            <div class="AFIC_incon_line">抬头：
                <input placeholder="请输入发票抬头">
            </div>
            <div class="AFIC_incon_line">税号：
                <input placeholder="请输入税号">
            </div>
            <div class="AFIC_incon_line">注册地址：
                <input placeholder="请输入注册地址">
            </div>
            <div class="AFIC_incon_line">开户银行名称：
                <input placeholder="请输入开户银行名称">
            </div>
            <div class="AFIC_incon_line">开户银行账号：
                <input placeholder="请输入开户银行账号">
            </div>
        </div>
        <div id="ApplyForInvoiceGetWay">
            <div class="AFIGW_T_O">现场领取</div>
            <div class="AFIGW_T_S">快递邮寄</div>
        </div>
        <div class="ApplyForInvoiceGetWay_local" v-show="false">现场领取：发票将由工作人员在活动当天带往现场，请自行领取。</div>
        <div class="ApplyForInvoiceGetWay_mails">
            <div id="AFIGW_Title">
                收件信息
            </div>
            <div class="AFIC_incon_line">收件人：
                <input placeholder="填写收件人">
            </div>
            <div class="AFIC_incon_line">联系电话：
                <input placeholder="填写联系电话">
            </div>
            <div class="AFIC_incon_line">收件地址：
                <input placeholder="请输入详细收件地址">
            </div>
            <div class="ApplyForInvoiceGetWay_mails_text">快递邮寄：货到付款，
                <span>你需要支付本次快递费用</span>。一起画不承担所有发票快递费用。</div>
        </div>
        <div id="UpdataApplyForInvoice">提交申请</div>
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

#ApplyForInvoiceArea {
    width: 100%;
    float: left;
    color: #666666;
    position: relative;
    padding-bottom: 66px;
    font-size: 14px;
}

#ApplyForInvoiceTitle {
    padding: 2% 3.3%;
    width: 93.4%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    margin-bottom: 1.8%;
}

#ApplyForInvoiceTitle img {
    width: 30px;
    height: 30px;
    margin-right: 3.3%;
}

#ApplyForInvoiceTitle div {
    flex: 1;
}

#ApplyForInvoiceTitle span {
    color: #ff604f;
}

#ApplyForInvoiceTitle div div {
    line-height: 30px;
    height: 30px;
}

#ApplyForInvoiceContent {
    width: 100%;
    float: left;
    margin-bottom: 1.8%;
}

#AFIC_tapChange {
    width: 100%;
    display: flex;
}

#ApplyForInvoiceGetWay {
    width: 100%;
    float: left;
    display: flex;
}

.AFIC_T_S {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid #eeeeee;
    background-color: #ffffff;
    color: #ff604f;
}

.AFIC_T_O {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid #eeeeee;
    background-color: #eeeeee;
}

.AFIGW_T_S {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid #ff604f;
    background-color: #ffffff;
    color: #ff604f;
}

.AFIGW_T_O {
    text-align: center;
    padding: 10px 20px;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid #ffffff;
    background-color: #ffffff;
}

.AFIC_incon_line {
    padding: 3.3%;
    width: 93.4%;
    display: flex;
    align-items: center;
    line-height: 20px;
    height: 20px;
    background-color: #ffffff;
    margin-bottom: 1px;
}

.AFIC_incon_line input {
    flex: 1;
    border: 0;
    outline: none;
    padding: 0 0 0 3%;
    color: #666666;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
}

::-webkit-input-placeholder {
    color: #cccccc;
}

.ApplyForInvoiceGetWay_local {
    padding: 3.3%;
    width: 93.4%;
    float: left;
    line-height: 20px;
    font-size: 14px;
}

.ApplyForInvoiceGetWay_mails {
    width: 100%;
    float: left;
}

#AFIGW_Title,
.ApplyForInvoiceGetWay_mails_text {
    padding: 3.3%;
    width: 93.4%;
    float: left;
    line-height: 20px;
    font-size: 14px;
}

.ApplyForInvoiceGetWay_mails_text span {
    color: #ff604f;
}

#UpdataApplyForInvoice {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 16px;
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
    background-color: #ff604f;
    color: #ffffff;
    float: left;
}
</style>
