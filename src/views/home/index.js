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
            ysFormData: {
                username: '',
                sex: '1'
            },
            memberShow: false,   //会员中心是否展示
            bybShow: false,    //拜一拜是否展示
            chouqianShow: false,   //抽签弹出层是否显示
            cqResultShow: false,   //抽签结果弹出层是否显示
            gongpinShow: false,    //贡品弹出层是否显示
            jingxiangShow: false,   //敬香弹出层是否显示
            yunshiShow: false,   //运势弹出框是否显示
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
            this.cqResultShow = true
        },
        //贡品按钮点击事件
        handleGongpinClick() {
            this.gongpinShow = true
        },
        //运势按钮点击事件
        handleYunshiClick() {
            this.yunshiShow = true
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