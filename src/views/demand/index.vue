<template>
  <div class="container demand">
    <SearchBar :search="search" />
    <h1>需求大厅</h1>
    <div class="button" @click="onClick">按钮</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "需求大厅",
      list: [
        
      ]
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: "MyOrder", params: { setid: 111222 } });
    },
    search(keyword) {
      console.log(keyword);
    },
  },
};
</script>

<style lang="less">
.demand {
  
  .button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    background: palevioletred;
  }
}
</style>
