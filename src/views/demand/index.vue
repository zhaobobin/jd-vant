<template>
  <div class="demand">
    <BaseNavBar :title="title" :isBack="false"> </BaseNavBar>
    需求大厅
    <div class="button" @click="onClick">按钮</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "需求大厅",
    };
  },
  methods: {
    onClick() {
      console.log("点击按钮");
      this.$router.push({ name: "List", params: { setid: 111222 } });
    },
    created() {
      console.log("模块2");
    },
  },
};
</script>

<style lang="less">
.demand {
  width: auto;
}
.button {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background: palevioletred;
}
</style>
