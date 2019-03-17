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
        }
    }
}