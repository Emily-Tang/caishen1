<template>
    <div :class="'home caishen '+bgClass">
        <!--底部菜单-->
        <tab-bar/>
        <!--左侧菜单-->
        <left-menu/>
        <!--右侧按钮-->
        <div class="right-wrap">
            <div class="right-btn" @click="handleKaiguangClick">開光</div>
            <div class="right-btn mt15" @click="handleJingxiangClick">敬香</div>
            <div class="right-btn mt15" @click="handleGongpinClick">貢品</div>
            <div class="right-btn mt15" @click="handleYunshiClick">運勢</div>
            <div class="right-btn mt15" @click="handleChongqianClick">抽簽</div>
        </div>
        <!--拜一拜弹出层-->
        <van-popup v-model="bybShow" class="byb">
            <div class="byb-wrap">
                <van-icon name="cross" class="close-btn" @click="handleCloseClick('bybShow')"></van-icon>
                <img src="../../assets/images/baiyibai.png" class="img"/>
                <img src="../../assets/images/baiyibai-btn.png" class="btn mt15"/>
            </div>
        </van-popup>
        <!--抽签弹出层-->
        <van-popup v-model="chouqianShow" class="chouqian">
            <img src="../../assets/images/qiantong.png"/>
            <img src="../../assets/images/chouqian-btn.png" @click="handleChouqian" class="btn"/>
        </van-popup>
        <!--抽签结果弹出层-->
        <van-popup v-model="cqResultShow" class="cqResult">
            <div class="cqResult-wrap">
                <p class="title">你抽到了第十六签</p>
                <p class="subTitle">孔子在陈绝粮 己卯</p>
                <div class="content">
                    <p>财运易卦占卜联合紫微斗数及易经卦象推断现状与未来的吉凶，全面预知你财运上的风险和机会，让你赚钱致富不再投路无门！</p>
                    <p class="pt20">【签文】</p>
                    <p>汉室地基要造成，无疑阻滞不通亨，回思勤苦劳心处，六出祁山寿世崩</p>
                    <p>【解签】</p>
                    <p>米力仙注：成事在天，谋事在人，不计得失，埋首向前</p>
                </div>
                <div class="scroll-btn" @click="handleCloseClick('cqResultShow')">上上签</div>
            </div>
        </van-popup>
        <!--贡品弹出层-->
        <van-popup v-model="gongpinShow" class="gongpin">
            <div class="gongpin-wrap scroll-wrap">
                <van-icon name="cross" class="close-btn" @click="handleCloseClick('gongpinShow')"></van-icon>
                <div class="img-group">
                    <img src="../../assets/images/gongpin.png"/>
                    <img src="../../assets/images/gongpin.png" class="ml35"/>
                </div>
                <div class="content">
                    <p class="title">贡品</p>
                    <p class="text">每人限奉请一套，开光正品，改变新一年的运气，从此刻开始!</p>
                    <p class="money">1680.00元</p>
                </div>
                <div class="scroll-btn">微信支付</div>
            </div>
        </van-popup>
        <!--敬香弹出层-->
        <van-popup v-model="jingxiangShow" class="jingxiang">
            <div class="jingxiang-wrap scroll-wrap">
                <van-icon name="cross" class="close-btn" @click="handleCloseClick('jingxiangShow')"></van-icon>
                <div class="img-group">
                    <img src="../../assets/images/xianglu.png" class="xianglu"/>
                </div>
                <div class="content">
                    <p class="title">敬香</p>
                    <p class="text">每人限奉请一套，开光正品，改变新一年的运气，从此刻开始!</p>
                    <p class="money">1680.00元</p>
                </div>
                <div class="scroll-btn">微信支付</div>
            </div>
        </van-popup>
        <!--开光-->
        <van-popup v-model="kaiguangShow" class="kaiguang">
            <div class="kaiguang-wrap scroll-wrap">
                <van-icon name="cross" class="close-btn" @click="handleCloseClick('kaiguangShow')"></van-icon>
                <div class="content">
                    <p class="title">开光</p>
                    <p class="text">每人限奉请一套,开光正品,改变新一年的运气，从此刻开始!</p>
                    <p class="money">1680.00元</p>
                </div>
                <div class="scroll-btn" @click="handleWechatPay">微信支付</div>
            </div>
        </van-popup>
        <!-- <div class="kaiguang" v-if="kaiguangShow">
            <div class="kaiguang-wrap">
                <div class="content">
                    <p class="title">开光</p>
                    <p class="text">每人限奉请一套,开光正品,改变新一年的运气，从此刻开始!</p>
                    <p class="money">1680.00元</p>
                </div>
                <div class="scroll-btn" @click="handleWechatPay">微信支付</div>
            </div>
        </div> -->
        <!--开光成功-->
        <transition name="bounce">
            <div class="kgSuccess" v-if="kgSuccessShow">
                <img src="../../assets/images/yuanbao.png"/>
            </div>
        </transition>
    </div>
</template>
<script>
    import home from './index.js'
    export default home
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>
    .home .left-common .left-wrap .text{
        display: block !important;
    }
    .caishen .van-popup.member-center {
        left: 0;
        transform: translate3d(0, -50%, 0);
    }
    .caishen .van-popup {
        background: none;
    }
    .caishen .van-icon {
        font-size: 25px;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>


