<template>
  <div class="home">
    <div>
      <BaseNavBar :title="title" :isBack="isBack"> </BaseNavBar>
      这是模块1
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
    };
  },
  methods: {},
  created() {
    console.log("模块1");
  },
};
</script>

<style lang="less">
.home {
  width: auto;
  height: 100vh;
  background: url('../../assets/home/banner.png') no-repeat center top;
  background-size: 105% auto;
}
</style>
