<template>
    <div :class="'home caishen '+bgClass">
        <!--底部菜单-->
        <van-tabbar v-model="active">
            <van-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon[0].active : icon[0].normal"/>
            </van-tabbar-item>
            <van-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon[1].active : icon[1].normal"/>
            </van-tabbar-item>
            <van-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon[2].active : icon[2].normal"/>
            </van-tabbar-item>
            <van-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon[3].active : icon[3].normal"/>
            </van-tabbar-item>
            <van-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon[4].active : icon[4].normal"/>
            </van-tabbar-item>
        </van-tabbar>
        <!--左侧内容-->
        <div class="left-wrap">
            <div class="text">万两黄金贵一炉宝篆诚</div>
            <div class="left-arrow mt15" @click="handleArrowClick">
                <van-icon name="arrow"></van-icon>
            </div>
        </div>
        <!--右侧按钮-->
        <div class="right-wrap">
            <div class="right-btn">開光</div>
            <div class="right-btn mt15" @click="handleJingxiangClick">敬香</div>
            <div class="right-btn mt15" @click="handleGongpinClick">貢品</div>
            <div class="right-btn mt15" @click="handleYunshiClick">運勢</div>
            <div class="right-btn mt15" @click="handleChongqianClick">抽簽</div>
        </div>
        <!--会员中心-->
        <van-popup v-model="memberShow" class="member-center">
            <div class="member-wrap">
                <div class="member-module">会员中心</div>
                <div class="member-module">个人信息</div>
                <div class="member-module">我的账户</div>
                <div class="member-module">我的运势</div>
                <div class="member-module">我的抽签</div>
                <div class="member-module">常用地址</div>
                <div class="member-module">分享有礼</div>
                <div class="member-module none">平台公告</div>
            </div>
            <div class="right-arrow" @click="handleRightArrowClick">
                <van-icon name="arrow-left"></van-icon>
            </div>
        </van-popup>
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
                <div class="btn" @click="handleCloseClick('cqResultShow')">上上签</div>
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
                <div class="pay-btn">
                    微信支付
                </div>
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
                <div class="pay-btn">
                    微信支付
                </div>
            </div>
        </van-popup>
        <!--运势弹出层-->
        <van-popup v-model="yunshiShow" class="yunshi">
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
                        <input type="text" v-model="ysFormData.username" class="name"/>
                    </div>
                    <div class="form-field">
                        <label>性别：</label>
                        <!-- <van-radio-group v-model="ysFormData.sex">
                            <van-radio name="1">男</van-radio>
                            <van-radio name="2">女</van-radio>
                        </van-radio-group> -->
                        <input type="radio" name="sex" checked="ysFormData.sex == 1 ? true : false "/>男
                        <input type="radio" name="sex" checked="ysFormData.sex == 2 ? true : fakse "/>女
                    </div>
                </div>
            </div>
        </van-popup>
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
    .caishen .van-tabbar {
        height: 75px;
        background-color: rgba(0, 0, 0, .8)
    }
    .caishen .van-tabbar-item__icon img {
        height: 50px;
        margin-top: 5px;
    }
    .caishen .van-popup.member-center {
        left: 0;
        transform: translate3d(0, -50%,0);
    }
    .caishen .van-popup {
        background: none;
    }
    .caishen .van-icon {
        font-size: 25px;
    }
</style>


