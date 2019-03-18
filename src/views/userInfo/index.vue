<template>
    <div class="userInfo caishen">
        <div class="main">
            <van-cell-group>
                <van-field
                    v-model="username"
                    label="姓名"/>
                <van-field
                    v-model="sex"
                    label="性别"
                    right-icon="arrow-down"
                    @click="handleSexClick"/>
                <van-field
                    v-model="birthday"
                    label="出生年月"
                    right-icon="arrow-down"
                    @click="handleBirthdayClick"/>
                <van-field
                    v-model="address"
                    label="出生地点"/>
            </van-cell-group>
            <p class="tips">提示：本应用来源于中国传统民俗文化，并非现代科学研究成果，仅供娱乐！</p>
        </div>
        <!--底部菜单-->
        <tab-bar/>
        <!--出生年月弹层-->
        <van-popup v-model="dateShow" :overlay="false" position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="handleDateConfirm"
                @cancel="handleDateCancel"/>
        </van-popup>
        <!--性别弹层-->
        <van-popup v-model="sexShow" :overlay="false" position="bottom" class="sex-popup">
            <van-picker :columns="columns" @change="onChange" />
        </van-popup>
    </div>
</template>
<script>
    import userInfo from "./index.js";
    export default userInfo
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<style>
    .userInfo .van-cell {
        padding: 15px 15px 0px;
        line-height: 35px;
        border-bottom: 1px solid #ebedf0;
        font-size: 15px;
        color: #494746;
    }
    .userInfo .van-cell:not(:last-child)::after {
        border: none;
    }
    .userInfo .van-cell .van-field__label {
        color: #c9ab1d;
        font-size: 12px;
    }
    .userInfo .van-popup.sex-popup {
        box-shadow: 0 0 10px #d2cccc;   
    }
</style>


