import TabBar from '@/components/TabBar/index.vue'
import { dateFtt } from '@/utils/common.js'

export default {
    data() {
        return {
            ysFormData: {
                username: '',
                sex: '1',
                birthday: '',
                type: '1'
            },
            dateShow: false,
            yunshiResultShow: false
        }
    },
    components: {
        TabBar
    },
    methods: {
        //生日选择框点击事件
        handleBirthdayClick() {
            this.dateShow = true
        },
        //生日：日期confirm事件
        handleDateConfirm(val) {
            this.ysFormData.birthday = dateFtt('yyyy-MM-dd hh:mm:ss', new Date(val))
            this.dateShow = false
        },
        //生日：日期cancel事件
        handleDateCancel() {
            this.dateShow = false
        }, 
        //运势弹出层：开始占卜按钮点击事件
        handleZhanbuClick() {
            this.yunshiResultShow = true
        },
    }   
}