<template>
  <div class="container my-cert">
    <BaseNavBar :title="title"></BaseNavBar>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '我的认证',
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
