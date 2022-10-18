<template>
  <div class="container my-order">
    <SearchBar isBack :search="search" />
    <van-tabs 
      ref="tabs"
      v-model="activeTab" 
      sticky
      color="#428FFC" 
      title-active-color="#428FFC"
      title-inactive-color="#363A44"
    >
      <van-tab title="待确认" name="1">
        <div class="list">
          1
        </div>
      </van-tab>
      <van-tab title="待完成" name="2">
        <div class="list">
          2
        </div>
      </van-tab>
      <van-tab title="已完成" name="3">
        <div class="list">
          3
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "我的点单",
      activeTab: '1'
    };
  },
  mounted() {
    // this.$refs.tabs[0].resize();
  },
  methods: {
    search(keyword) {
      console.log(keyword);
    },
  },
};
</script>

<style lang="less">
.my-order {
  .van-tabs {
    z-index: 10;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 46px;
  }
  .list {
    min-height: 1000px;
  }
}
</style>
