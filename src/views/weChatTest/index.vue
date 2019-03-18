<template>
    <div class="wechatTest caishen">
        <!--底部菜单-->
        <tab-bar/>
        <!--微信号测试-->
        <div class="content" v-if="!result"> 
            <div class="portrait">
                <img src="../../assets/images/portrait.png"/>
            </div>
            <p class="title">野猪佩琦</p>
            <p class="cont">您的网名蕴含着秘密哦！赶紧进来探询您网名的吉凶玄机与秘密吧？ 网名测吉凶的测算方法来自网络，仅供娱乐，请勿当真！</p>
            <div class="btn">微信昵称财富查询</div>
        </div>
        <!--测试结果-->
        <div class="result" v-if="result">
            <p class="title">野猪佩琦</p>
            <div class="cont">
                <p>您测算的昵称：野猪佩琦</p>
                <p>数值：56</p>
                <p>吉凶：凶</p>
                <div class="explain">
                    <div class="label">解释：</div>
                    <div>事与愿违，终难成功，欲速不达，有始有终</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import weChatTest from './index.js'
    export default weChatTest
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>

