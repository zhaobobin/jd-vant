<template>
  <div class="container cpertaor-manage">
    <BaseNavBar :title="title"></BaseNavBar>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '操作员管理',
    };
  },
  mounted() {
    if (this.$route.params.title) {
      this.title = this.$route.params.title;
    }
  },
};
</script>

<style lang="less"></style>
