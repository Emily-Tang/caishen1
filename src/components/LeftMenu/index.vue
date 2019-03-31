<template>
    <div class="left-common">
        <!--左侧内容-->
        <div class="left-wrap">
            <div class="text">万两黄金贵一炉宝篆诚</div>
            <div class="left-arrow mt15" @click="handleArrowClick">
                <van-icon name="arrow"></van-icon>
            </div>
        </div>
        <!--会员中心-->
        <van-popup v-model="memberShow" class="member-center">
            <div class="member-wrap">
                <div class="member-module">会员中心</div>
                <div class="member-module" @click="checkUserInfo">个人信息</div>
                <div class="member-module" @click="checkMyAccount">我的账户</div>
                <div class="member-module">我的运势</div>
                <div class="member-module">我的抽签</div>
                <div class="member-module" @click="checkAddress">常用地址</div>
                <div class="member-module" @click="checkShare">分享有礼</div>
                <div class="member-module none" @click="checkNotice">平台公告</div>
            </div>
            <div class="right-arrow" @click="handleRightArrowClick">
                <van-icon name="arrow-left"></van-icon>
            </div>
        </van-popup>
    </div>
</template>
<script>
    import LeftMenu from './index.js'
    export default LeftMenu
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>

</style>


