<template>
  <div class="city-search">
    <div class="back">
      <span v-if="isBack" @click="onClickLeft"><van-icon name="arrow-left" /></span>
    </div>
    <van-search 
      v-model="keyword" 
      placeholder="请输入关键字" 
      background="none" 
      shape="round" 
      :clearable="false"
      @search="search(keyword)"
    />
  </div>
</template>

<script>
export default {
  props: {
    isBack: Boolean,
    search: Function,
  },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    clearSearchInput() {
      this.keyword = '';
    },
  },
};
</script>

<style lang="less">
.city-search {
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  padding-top: env(safe-area-inset-top);
  background: #428FFC;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  .back {
    width: 66px;
    height: 100%;
    span {
      display: flex;
      width: 50px;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .van-icon {
      font-size: 18px;
      color: #fff;
    }
  }

  .van-search {
    padding: 0;
    width: 240px;
    .van-cell {
      padding: 4px 8px 4px 0;
    }
    .van-search__content {
      background: rgba(255,255,255,0.6);
    }
    .van-field__control::placeholder {
      color: #7D8EA3;
    }
  }
}
</style>
