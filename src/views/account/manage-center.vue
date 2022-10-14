<template>
  <div>
    <BaseNavBar :title="title"></BaseNavBar>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '管理中心',
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
