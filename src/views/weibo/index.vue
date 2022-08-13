<template>
  <div class="weibo-container">
    <div class="main">
      <div class="bg">
        <el-image
          :src="require('@/assets/weibo.jpeg')"
          fit="fit"
        />
      </div>
      <!-- tab栏 -->
      <div class="tab_nav">
        <ul>
          <li class="select">热搜榜</li>
          <li>娱乐榜</li>
          <li>要闻榜</li>
          <li>同城榜</li>
        </ul>
        <div class="line" />
      </div>
      <div class="middle_msg">实时热点,每分钟更新一次</div>
      <!-- 热搜榜 -->
      <ul class="weibo_list">
        <!-- 置顶 -->
        <li>
          <div class="left">
            <div class="num top"><i class="iconfont icon-zhiding" /></div>
            <div class="text">100秒一百年</div>
            <div class="hot" />
          </div>
          <div class="right hot-degree">
            热
          </div>
        </li>

        <li v-for="(item,index) in list" :key="index">
          <div class="left">
            <div :class="preNum(Number(index+1))" class="num">{{ index+1 }}</div>
            <div class="text">{{ item.text }}</div>
            <div class="hot">{{ item.hot }}</div>
          </div>
          <div :class="whichDegree(item.degree)" class="right">
            {{ item.degree }}
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { text: '中国解放军出兵台北', hot: '8829255', degree: '沸' },
        { text: '中国解放军出兵台北', hot: '2178033', degree: '沸' },
        { text: '如何两周赚到十几万', hot: '3935833 😍', degree: '荐' },
        { text: '聂教授预测:科大讯飞即将涨停', hot: '2594837 ', degree: '热' },
        { text: '武大教授聂春被校方处分', hot: '8929255', degree: '新' },
        { text: '北京警方通报🍔滑板事件', hot: '1334182', degree: '热' },
        { text: '凯宝谈杭州毕业生租房现状', hot: '1324155 🤔', degree: '热' },
        { text: '杭州的天空太蓝了', hot: '1224155', degree: '新' },
        { text: '进宝:王思聪就敌不到🍔滴些', hot: 1249127, degree: '热' },
        { text: '干干杭州访问取消', hot: 1203499, degree: '热' }
      ]
    }
  },
  methods: {
    whichDegree(degree) {
      switch (degree) {
        case '热' :
          return 'hot-degree'
        case '爆':
          return 'bao-degree'
        case '新':
          return 'new-degree'
        case '荐':
          return 'new-degree'
        case '沸':
          return 'boil-degree'
      }
    },
    preNum(num) {
      if (num >= 1 && num <= 3) {
        switch (num) {
          case 1:
            return 'rankNum1'
          case 2:
            return 'rankNum2'
          case 3:
            return 'rankNum3'
        }
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.weibo-container {
  height: 100%;
  overflow-y: auto;
}
.main {
  width: 600px;
  margin: 0 auto;
  .bg {
  }
  .tab_nav {
    position: relative;
    ul {
      display: flex;
      width: 260px;
      margin: 0 auto;
      padding: 10px 0;
      justify-content: space-between;
      li {
        font-size: 14px;
        color: #989999;
        &.select {
          font-weight: bold;
          color: #323333;
        }
      }
    }
    .line {
      position: absolute;
      transform: translateX(180px);
      bottom: 0;
      width: 20px;
      height: 2px;
      background-color: #FD8B05;
    }
  }
  .middle_msg {
    color: #828283;
    font-size: 12px;
    background-color: #EEEEEE;
    padding: 2px 10px;
  }
  .weibo_list {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #EBEBEB;
      padding: 20px 15px;
      .left {
        display: flex;
        .num {
          margin-right: 15px;
          color: #FF8200;
          font-size: 14px;
          &.top {
            font-weight: bold;
            .iconfont {
              vertical-align: middle;
            }
          }
          &.rankNum1 {
            font-weight: bold;
            color: #F26D5F;
            font-size: 18px;
          }
          &.rankNum2 {
            font-weight: bold;
            color: #F16D60;
            font-size: 18px;
          }
          &.rankNum3 {
            font-weight: bold;
            color: #F16D60;
            font-size: 18px;
          }
        }
        .text {
          margin-right: 15px;
          color: #4C4C4C;
        }
        .hot {
          color: #969797;
        }
      }
      .right {
        padding: 2px 4px;
        color: #fff;
        font-size: 12px;
        &.hot-degree {
          // background-color: #FFB020;
          background-image: linear-gradient(to bottom right, #FFBC3B, #FF8D22);
        }
        &.bao-degree {
          background-color: #C11902;
        }
        &.new-degree {
          background-color: #FF6A88;
        }
        &.boil-degree {
          background-image: linear-gradient(to bottom right, #FF8902, #FF5602);
        }
      }
    }
  }
}

</style>
