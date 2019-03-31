
export default {
    data() {
        return {
            memberShow: false  //会员中心是否展示
        }
    },
    methods: {
        //左侧展开按钮点击事件，展开会员中心
        handleArrowClick() {
            this.memberShow = true
        },
        //会员中心收起按钮，隐藏会员中心
        handleRightArrowClick() {
            this.memberShow = false
        },
        //会员中心：常用地址按钮点击事件
        checkAddress() {
            this.$router.push('/address')
        },
        //会员中心：我的账户按钮点击事件
        checkMyAccount() {
            this.$router.push('/myAccount')
        },
        //会员中心：个人信息按钮点击事件
        checkUserInfo() {
            this.$router.push('/userInfo')
        },
        //关闭按钮点击事件
        handleCloseClick(name) {
            this[name] = false
        },
        
        //会员中心：平台公告点击事件
        checkNotice() {
            this.$router.push('/notice')
        },
        //会员中心: 分享有礼点击事件
        checkShare() {
            this.$router.push('/share')
        }
    }
}