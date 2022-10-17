<template>
  <div class="home">
    <div>
      <BaseNavBar :title="title" :isBack="isBack"> </BaseNavBar>
      <img src="../../assets/home/banner.png" alt="banner" class="banner">

      <div class="section basic-info">
        <ul>
          <li>
            <p class="label">技能人才</p>
            <p class="num">1000</p>
            <van-button>看人才</van-button>
          </li>
          <li>
            <p class="label">大师工作室</p>
            <p class="num">38</p>
            <van-button>看大师</van-button>
          </li>
          <li>
            <p class="label">志愿团</p>
            <p class="num">6</p>
            <van-button>看志愿团</van-button>
          </li>
        </ul>
      </div>

      <div class="section notice">
        <img src="../../assets/home/notice01.png" alt="notice">
        <label for="">资讯快报</label>
        <span>即时享上线啦！</span>
      </div>

      <div class="section important">
        <h2>重要场景</h2>
        <van-grid :border="false" icon-size="36">
          <van-grid-item 
            v-for="menu in menus"
            :key="menu.key" 
            :icon="menu.icon" 
            :text="menu.name" 
            @click="clickMenu(menu)"
          />
        </van-grid>
      </div>

      <div class="section news">
        <h2>资讯&通知</h2>
        <van-cell-group>
          <van-cell 
            v-for="item in news"
            :key="item.id"
            :icon="require('@/assets/home/notice02.png')"
            :title="item.title"
            :label="item.date"
            is-link
            center
            size="large"
            @click="clickNews(item)"
          />
        </van-cell-group>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "建德即时享",
      isBack: false,
      menus: [
        { name: '技能培训', key: 'Important01', icon: require('@/assets/home/menu_icon01.png') },
        { name: '助企解困', key: 'Important02', icon: require('@/assets/home/menu_icon02.png') },
        { name: '助推产业', key: 'Important03', icon: require('@/assets/home/menu_icon03.png') },
        { name: '乡镇科创', key: 'Important04', icon: require('@/assets/home/menu_icon04.png') },
        { name: '党建宣讲', key: 'Important05', icon: require('@/assets/home/menu_icon05.png') },
        { name: '大师传承', key: 'Important06', icon: require('@/assets/home/menu_icon06.png') },
        { name: '社区服务', key: 'Important07', icon: require('@/assets/home/menu_icon07.png') },
        { name: '第二课堂', key: 'Important08', icon: require('@/assets/home/menu_icon08.png') },
        { name: '生活便民', key: 'Important09', icon: require('@/assets/home/menu_icon09.png') },
      ],
      news: [
        { id: '1', title: '建德技时享即将上线', date: '2022-09-08' },
        { id: '2', title: '建德技时享即将上线', date: '2022-09-08' },
      ]
    };
  },
  created() {
    
  },
  methods: {
    clickMenu(menu) {
      console.log(menu)
      // this.$router.push({ name: menu.key, params: { title: menu.name } });
    },
    clickNews(item) {
      this.$router.push({ name: 'NewsDetail', params: { id: item.id, title: item.title } });
    }
  },
};
</script>

<style lang="less">
.home {
  width: auto;
  .banner {
    width: 100%;
    height: auto;
  }

  .section {
    margin: 0 16px 14px;
    margin-bottom: 14px;
    background: #fff;
    box-shadow: 0px 0px 8px 2px rgba(119,119,119,0.13);
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    h2 {
      padding: 12px 16px;
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
    }
  }
  .basic-info {
    margin-top: -30px;
    padding: 14px 20px 16px;
    ul {
      li {
        display: inline-block;
        width: 33.33%;
        text-align: center;
        .label {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #B3B5B9;
          line-height: 30px;
        }
        .num {
          margin: 0;
          font-size: 34px;
          font-family: DINCondensed-Bold, DINCondensed;
          font-weight: bold;
          color: #363A44;
          line-height: 40px;
        }
        .van-button {
          width: 74px;
          height: 30px;
          padding: 0;
          background: linear-gradient(90deg, #98D0FF 0%, #428FFC 100%);
          border-radius: 16px;
          font-size: 14px;
          font-weight: 500;
          color: #FFFFFF;
        }
      }
    }
  }

  .notice {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    background: url('../../assets/home/notice_bg.png') no-repeat left center #fff;
    background-size: auto 100%;
    img {
      width: 14px;
      height: auto;
    }
    label {
      margin-left: 3px;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
    span {
      margin-left: 30px;
      font-size: 14px;
      color: #333;
    }
  }

  .important {
    padding-bottom: 10px;
    .van-grid-item__content {
      padding: 0 8px;
      margin-bottom: 15px;
    }
    .van-grid-item__text {
      margin-top: 5px;
      color: #363A44;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .news {
    .van-cell__left-icon {
      margin-right: 12px;
      height: 44px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
  
}
</style>
