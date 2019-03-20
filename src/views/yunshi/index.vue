<template>
    <div class="yunshi caishen">
        <div class="yunshi-wrap">
            <p class="title">请输入测算资料</p>
            <div class="content">
                <!-- <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="姓名"
                        placeholder="请输入姓名"/>
                </van-cell-group> -->
                <div class="form-field">
                    <label>姓名：</label>
                    <input type="text" v-model="ysFormData.username" class="input-field"/>
                </div>
                <div class="form-field">
                    <label>性别：</label>
                    <van-radio-group v-model="ysFormData.sex">
                        <van-radio name="1" checked-color="#ff0000" class="ml20">男</van-radio>
                        <van-radio name="2" checked-color="#ff0000" class="ml20">女</van-radio>
                    </van-radio-group>
                </div>
                <div class="form-field">
                    <label>生日：</label>
                    <input type="text" v-model="ysFormData.birthday" @click="handleBirthdayClick" class="input-field"/>
                </div>
                <div class="form-field column">
                    <label class="label1">测试方向：</label>
                    <div class="radio-group">
                        <van-radio-group v-model="ysFormData.type">
                            <van-radio name="1" checked-color="#ff0000">偏财运旺衰趋势</van-radio>
                            <van-radio name="2" checked-color="#ff0000">近期财运吉凶如何</van-radio>
                            <van-radio name="3" checked-color="#ff0000">生意经营旺衰预测</van-radio>
                            <van-radio name="4" checked-color="#ff0000">合伙求财是否有钱赚</van-radio>
                            <van-radio name="5" checked-color="#ff0000">创业经商前景预测</van-radio>
                            <van-radio name="6" checked-color="#ff0000">投资时机与方向选择</van-radio>
                            <van-radio name="7" checked-color="#ff0000">投资理财盈亏预测</van-radio>
                            <van-radio name="8" checked-color="#ff0000">买房置业时机与选择</van-radio>
                        </van-radio-group>
                    </div>
                </div>
            </div>
            <div class="scroll-btn" @click="handleZhanbuClick">开始占卜</div>
        </div>
         <!--生日选择：日期弹出层-->
        <van-popup v-model="dateShow" :overlay="false" position="bottom" class="birthday">
            <van-datetime-picker
                type="datetime"
                @confirm="handleDateConfirm"
                @cancel="handleDateCancel"/>
        </van-popup>
        <!--运势结果-->
        <div class="yunshi-result" v-if="yunshiResultShow">
            <div class="yunshi-wrap">
                <div class="title">第四十四卦：天风姤</div>
                <p>针对您所提问的问题：是否宜合伙求财</p>
                <p>您所取到的卦象如下：《易经》第四十四卦:</p>
                <p>【卦名】天风姤</p>
                <p>【卦文】姤：女壮，勿用取女。</p>
                <p>
                    《彖》曰：姤，遇也，柔遇刚也。“勿用取女”，不可与长也。
                    天地相遇，品物咸章也。刚遇中正，天下大行也。姤之时义大
                    矣哉。
                </p>
                <p>《象》曰：天下有风，姤；后以施命诰四方。</p>
                <div class="title pd">卦象解析</div>
                <p>【解卦】</p>
                <p>
                    姤，相遇也。上乾下巽，天下有风，一阴五阳，有色难、诱
                    惑。代表容易发生预期外的事，偶事件易引发心性、行为之改
                    变。
                </p>
                <p>【近况分析】</p>
                <p>小凶，对方对于合作事宜心存迷惘，有拖延倾向，容易受到外界的诱惑，不利急于合伙求财。</p>
            </div>
        </div>
        <!--底部菜单-->
        <tab-bar/>
    </div>
</template>
<script>
    import yunshi from './index.js'
    export default yunshi
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>
    /*运势弹出层样式*/
    .yunshi .van-radio-group {
        display: flex;
    }
    .yunshi .van-radio__icon .van-icon {
        background: #fff;
    }
    .yunshi .radio-group .van-radio-group {
        flex-wrap: wrap;
    }
    .yunshi .van-radio {
        transform: scale(0.75);
    }
    .yunshi .radio-group .van-radio {
        width: 140px;
        font-size: 9px;
        /* transform: scale(0.75); */
    }
</style>
