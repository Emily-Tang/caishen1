import TabBar from '@/components/TabBar/index.vue'
import LeftMenu from '@/components/LeftMenu/index.vue'
import { dateFtt } from '@/utils/common.js'

export default {
    data() {
        return {
            username: '陈浮生',
            sex: '男',
            birthday: '1991年10月20号',
            address: '杭州西湖',
            currentDate: new Date(),
            columns: ['男', '女'],
            dateShow: false,
            sexShow: false
        }
    },
    components: {
        TabBar,
        LeftMenu
    },
    methods: {
        //日期选择：取消按钮点击事件
        handleDateCancel() {
            this.dateShow = false
        },
        //日期选择：确定按钮点击事件
        handleDateConfirm(val) {
            this.dateShow = false
            this.birthday = dateFtt('yyyy年MM月dd号', new Date(val))
        },
        //出生年月日点击事件
        handleBirthdayClick() {
            this.dateShow = true
        },
        //性别选择点击事件
        handleSexClick() {
            this.sexShow = true
        },
        //性别选择器change事件
        onChange(picker, value, index) {
            this.sexShow = false
            this.sex = value
        }
    }
}