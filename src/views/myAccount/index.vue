<template>
    <div class="account caishen">
        <div class="user">
            <img src="../../assets/images/portrait.png"/>
            <p class="ml10">昵称：林深见鹿</p>
        </div>
        <div class="yuanbao">
            <p class="title">总元宝：</p>
            <p class="total">1680.00</p>
            <div class="yuanbao-wrap">
                <div class="yuanbao-item">
                    <div class="subTitle">
                        <span>可用元宝</span>
                        <van-icon name="play"/>
                    </div>
                    <p>100</p>
                </div>
                <div class="yuanbao-item">
                    <div class="subTitle">
                        <span>冻结元宝</span>
                        <van-icon name="play"/>
                    </div>
                    <p>1650</p>
                </div>
                <div class="yuanbao-item">
                    <div class="subTitle">
                        <span>体现元宝</span>
                        <van-icon name="play"/>
                    </div>
                    <p>20</p>
                </div>
            </div>
            <div class="proportion">元宝与人民币比例为1:1</div>
        </div>
        <div class="btn-wrap">
            <van-button type="danger">充值</van-button>
            <van-button type="info" class="fr">提现</van-button>
            <p class="notice">注意：充值提现金额为100的整数倍，冻结元宝不能提现。解冻规则请关注官方公告。</p>
        </div>
        <div class="list">
            <p>账单记录</p>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num">-20</p>
                </div>
            </div>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num red">+80</p>
                </div>
            </div>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num">-20</p>
                </div>
            </div>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num red">+80</p>
                </div>
            </div>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num">-20</p>
                </div>
            </div>
            <div class="list-item">
                <img src="../../assets/images/caifu-icon.png"/>
                <div class="item-left">
                    <div>
                        <p>财神敬香费用2019年3月10号 </p>
                        <p>今天 07:37</p>
                    </div>
                    <p class="num red">+80</p>
                </div>
            </div>
        </div>
        <!--底部菜单-->
        <!-- <tab-bar/> -->
        <left-menu/>
    </div>
</template>
<script>
    import myAccount from './index.js'
    export default myAccount
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>
    .caishen .van-icon {
        font-size: 12px;
    }
</style>



