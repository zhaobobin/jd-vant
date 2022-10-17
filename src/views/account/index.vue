<template>
  <div class="account">
    <BaseNavBar :title="title" :isBack="false"> </BaseNavBar>

    <div class="header">
      <span class="user-avatar">
        <img :src="userInfo.avatar" alt="avatar">
      </span>
      <div class="user-info">
        <p class="name">
          <span>{{userInfo.name}}</span>
          <van-button size="small" icon="arrow" icon-position="right" color="#428FFC" plain>
            我的基本信息
          </van-button>
        </p>
        <p class="company">
          <span>{{userInfo.company}}</span>
          <van-button size="small" icon="arrow" icon-position="right" color="#428FFC" plain>
            切换机构
          </van-button>
        </p>
      </div>
    </div>

    <van-cell-group>
      <van-cell 
        v-for="menu in menus"
        :key="menu.key"
        :icon="menu.icon"
        :title="menu.name"
        is-link
        center
        size="large"
        @click="clickMenu(menu)"
      />
    </van-cell-group>
    <!-- <ul>
      <li 
        v-for="menu in menus"
        :key="menu.path"
         class="menu-item-wrapper"
      >
        <div class="menu-item">
          <span class="img"><img :src="menu.icon" :alt="menu.name"></span>
          <span class="name">{{menu.name}}</span>
          <van-icon name="arrow" size="20px" color="#b8c0cd" />
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "个人中心",
      userInfo: {
        avatar: require('@/assets/account/user_avatar.png'),
        name: '张三',
        company: '中心管理机构',
      },
      menus: [
        { name: '管理中心', key: 'ManageCenter', icon: require('@/assets/account/menu_icon01.png') },
        { name: '我的证书', key: 'MyCert', icon: require('@/assets/account/menu_icon02.png') },
        { name: '我的发布', key: 'MyPublish', icon: require('@/assets/account/menu_icon03.png') },
        { name: '我的点单', key: 'MyOrder', icon: require('@/assets/account/menu_icon04.png') },
        { name: '我的揭榜', key: 'MyRecruited', icon: require('@/assets/account/menu_icon05.png') },
        { name: '我的培训', key: 'MyTrain', icon: require('@/assets/account/menu_icon06.png') },
        { name: '入驻申请', key: 'Apply', icon: require('@/assets/account/menu_icon07.png') },
      ]
    };
  },
  created() {
    
  },
  methods: {
    clickMenu(menu) {
      this.$router.push({ name: menu.key, params: { title: menu.name } });
    }
  },
  
};
</script>

<style lang="less">
.account {
  width: auto;

  .header {
    display: flex;
    align-items: center;
    padding: 18px 16px;
    margin-bottom: 10px;
    background: #fff;

    .user-avatar {
      display: flex;
      width: 66px;
      height: 66px;
      align-items: center;
      margin-right: 12px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .user-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      height: 66px;
      p {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &.name {
          margin-bottom: 8px;
          font-size: 18px;
        }
        &.company {
          font-size: 14px;
          color: #B3B5B9;
        }
        .van-button {
          border: none;
        }
      }
    }
  }

  .van-cell {
    height: 58px;
    &::after {
      left: 58px;
      right: 0;
    }
    .van-cell__left-icon {
      height: 30px;
      margin-right: 12px;
      img {
        width: 30px;
        height: auto;
      }
    }
    .van-cell__title {
      font-size: 16px;
    }
  }

  // .menu-item-wrapper:last-child .menu-item::after {
  //   background: none;
  // }

  // .menu-item {
  //   display: flex;
  //   align-items: center;
  //   height: 58px;
  //   background: #fff;
  //   position: relative;

  //   &::after {
  //     content: '';
  //     display: block;
  //     height: 1px;
  //     background: #EDEDED;
  //     position: absolute;
  //     left: 58px;
  //     bottom: 0;
  //     right: 0;
  //   }

  //   .img {
  //     width: 58px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     img {
  //       width: 30px;
  //       height: auto;
  //     }
  //   }
  //   .name {
  //     flex: 1;
  //     font-size: 22px;
  //   }
  //   .van-icon {
  //     position: absolute;
  //     right: 10px;
  //     top: 50%;
  //     margin-top: -10px;
  //   }
  // }
}
</style>
