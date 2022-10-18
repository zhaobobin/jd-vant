<template>
  <div class="container manage-center">
    <BaseNavBar :title="title"></BaseNavBar>
    <div class="manage-center-content">
      <div class="section">
        <h2>基础管理</h2>
        <van-grid column-num="2" direction="horizontal" :border="false">
          <van-grid-item 
            v-for="menu in menus[0]"
            :key="menu.key" 
            :icon="menu.icon" 
            :text="menu.name" 
            @click="clickMenu(menu)"
          />
        </van-grid>
      </div>
      <div class="section">
        <h2>培训机构管理</h2>
        <van-grid column-num="2" direction="horizontal" :border="false">
          <van-grid-item 
            v-for="menu in menus[1]"
            :key="menu.key" 
            :icon="menu.icon" 
            :text="menu.name" 
            @click="clickMenu(menu)"
          />
        </van-grid>
      </div>
      <div class="section">
        <h2>志愿团管理</h2>
        <van-grid column-num="2" direction="horizontal" :border="false">
          <van-grid-item 
            v-for="menu in menus[2]"
            :key="menu.key" 
            :icon="menu.icon" 
            :text="menu.name" 
            @click="clickMenu(menu)"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '管理中心',
      menus: [
        [
          { name: '操作员管理', key: 'CperatorManage', icon: require('@/assets/account/manage/manage_icon01.png') },
          { name: '班级评价', key: 'ClassEvaluate', icon: require('@/assets/account/manage/manage_icon02.png') },
        ],
        [
          { name: '班级新增', key: 'ClassAdd', icon: require('@/assets/account/manage/manage_icon03.png') },
          { name: '课程管理', key: 'CourseManage', icon: require('@/assets/account/manage/manage_icon04.png') },
          { name: '设备管理', key: 'EquipmentManage', icon: require('@/assets/account/manage/manage_icon05.png') },
          { name: '学员管理', key: 'StudentManage', icon: require('@/assets/account/manage/manage_icon06.png') },
        ],
        [
          { name: '分团申请', key: 'DivisionApplication', icon: require('@/assets/account/manage/manage_icon07.png') },
          { name: '分团长维护', key: 'DivisionHead', icon: require('@/assets/account/manage/manage_icon08.png') },
          { name: '副团长维护', key: 'DeputyRegimental', icon: require('@/assets/account/manage/manage_icon09.png') },
          { name: '入团审核', key: 'JoiningReview', icon: require('@/assets/account/manage/manage_icon10.png') },
          { name: '移除团员', key: 'RemoveMember', icon: require('@/assets/account/manage/manage_icon11.png') },
          { name: '邀请团员', key: 'InviteMember', icon: require('@/assets/account/manage/manage_icon12.png') },
        ],
      ]
    };
  },
  mounted() {
    if (this.$route.params.title) {
      this.title = this.$route.params.title;
    }
  },
  methods: {
    clickMenu(menu) {
      // console.log(menu)
      this.$router.push({ name: menu.key, params: { title: menu.name } });
    }
  },
};
</script>

<style lang="less">
.manage-center {
  .manage-center-content {
    padding: 14px 16px;
  }
  .section {
    padding: 12px 0 3px;
    margin-bottom: 14px;
    background: #fff;
    box-shadow: 0px 0px 8px 2px rgba(119,119,119,0.13);
    border-radius: 4px;
    overflow: hidden;

    h2 {
      padding: 0 14px;
      margin: 0 0 12px;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
    }
    .van-grid-item {
      margin-bottom: 12px;
      &:nth-child(2n) {
        border-left: 1px solid #ECEEF2;
      }
    }
    .van-grid-item__content--center {
      padding: 0 14px;
      justify-content: left;
    }
    .van-grid-item__text {
      color: #363A44;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>
