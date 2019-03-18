<template>
    <div class="address caishen">
        <div class="header">
            <div class="left-wrap">
                <img src="../../assets/images/portrait.png"/>
                <span class="ml10">昵称：林深见鹿</span>
            </div>
            <a>管理</a>
        </div>
        <div class="list">
            <div class="list-item">
                <div>
                    <span class="name">陈林俊</span>
                    <span class="phone">15836523456</span>
                </div>
                <div class="full-address">浙江省杭州市拱墅区金价度祥云路134号3撞438</div>
                <van-tag plain type="primary" class="tag">默认地址</van-tag>
            </div>
            <div class="list-item">
                <div>
                    <span class="name">陈林俊</span>
                    <span class="phone">15836523456</span>
                </div>
                <div class="full-address">浙江省杭州市拱墅区金价度祥云路134号3撞438</div>
            </div>
            <div class="list-item">
                <div>
                    <span class="name">陈林俊</span>
                    <span class="phone">15836523456</span>
                </div>
                <div class="full-address">浙江省杭州市拱墅区金价度祥云路134号3撞438</div>
            </div>
        </div>
        <van-button type="info" class="addBtn">新增地址</van-button>
        <!--底部菜单-->
        <tab-bar/>
    </div>
</template>
<script>
    import address from './index.js'
    export default address
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>


