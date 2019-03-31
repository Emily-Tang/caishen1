<template>
    <div class="notice caishen">
        <!--顶部导航栏-->
        <van-nav-bar
            title="平台公告"/>
        <!--列表-->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <!-- <van-cell
                v-for="item in list"
                :key="item"
                :title="item"/> -->
            <div
                v-for="(item, index) in list"
                :key="index"
                class="notice-item">
                <p class="title">{{ item.title }}</p>
                <div class="content">{{ item.content }}</div>
                <p class="time">{{ item.date }}</p>
            </div>
        </van-list>
    </div>
</template>
<script>
    import notice from './index.js'
    export default notice
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>
    .notice .van-nav-bar__title {
        color: #282828;
        font-size: 15px;
    }
    .notice .van-hairline--bottom::after {
        border: none;
    }
</style>



