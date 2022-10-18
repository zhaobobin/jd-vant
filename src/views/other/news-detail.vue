<template>
  <div class="container news-detail">
    <BaseNavBar :title="title"></BaseNavBar>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '详情',
      id: null,
    };
  },
  mounted() {
    if (this.$route.params.title) {
      this.title = this.$route.params.title;
      this.id = this.$route.params.id;
    }
  },
};
</script>

<style lang="less">
.news-detail {
  
}
</style>
