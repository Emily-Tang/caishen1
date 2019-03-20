const fanli = require('@/assets/images/fanli.png'),
      fanli2 = require('@/assets/images/fanli2.png'),
      guanyu = require('@/assets/images/guanyu.png'),
      guanyu2 = require('@/assets/images/guanyu2.png'),
      zhaominggong = require('@/assets/images/zhaominggong.png'),
      zhaominggong2 = require('@/assets/images/zhaominggong2.png'),
      bigan = require('@/assets/images/bigan.png'),
      bigan2 = require('@/assets/images/bigan2.png'),
      liguizu = require('@/assets/images/liguizu.png'),
      liguizu2 = require('@/assets/images/liguizu2.png')

export default {
    data() {
        return {
            bgClass: 'caishen3',
            active: 2,
            icon: [{
                normal: fanli,
                active: fanli2
            }, {
                normal: guanyu,
                active: guanyu2
            }, {
                normal: zhaominggong,
                active: zhaominggong2
            }, {
                normal: bigan,
                active: bigan2
            }, {
                normal: liguizu,
                active: liguizu2
            }],
            memberShow: false,   //会员中心是否展示
            bybShow: false,    //拜一拜是否展示
            chouqianShow: false,   //抽签弹出层是否显示
            cqResultShow: false,   //抽签结果弹出层是否显示
            gongpinShow: false,    //贡品弹出层是否显示
            jingxiangShow: false,   //敬香弹出层是否显示
            kaiguangShow: false,   //开光弹框是否显示
            kgSuccessShow: false,   //开光成功弹框是否显示
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
        //敬香按钮点击事件
        handleJingxiangClick() {
            this.jingxiangShow = true
        },
        //关闭按钮点击事件
        handleCloseClick(name) {
            this[name] = false
        },
        //抽签按钮点击事件
        handleChongqianClick() {
            this.chouqianShow = true
        },
        //抽签弹出层: 点击抽签按钮点击事件
        handleChouqian() {
            this.chouqianShow = false
            this.$router.push('/chouqianResult')
        },
        //贡品按钮点击事件
        handleGongpinClick() {
            this.gongpinShow = true
        },
        //运势按钮点击事件
        handleYunshiClick() {
            this.$router.push('/yunshi')
        },
        //会员中心：平台公告点击事件
        checkNotice() {
            this.$router.push('/notice')
        },
        //会员中心: 分享有礼点击事件
        checkShare() {
            this.$router.push('/share')
        },
        //右侧开光按钮点击事件
        handleKaiguangClick() {
            this.kaiguangShow = true
        },
        //开光：微信支付按钮点击事件
        handleWechatPay() {
            this.kaiguangShow = false
            this.kgSuccessShow = true
        }
    },
    watch: {
        active: {
            handler(val) {
                val++
                this.bgClass = 'caishen' + val
            }
        }
    }
}