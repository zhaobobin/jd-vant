<template>
  <van-tabbar
    v-if="$route.meta.isShowTabBar"
    v-model="currentSelected"
    :inactive-color="color"
    :active-color="selectedColor"
    @change="onChange"
    route
    placeholder
    safe-area-inset-bottom
  >
    <template v-for="item in tabBars">
      <van-tabbar-item
        :key="item.name"
        :to="item.name"
        :badge="item.badge"
        :dot="item.isShowRedDot"
        replace
      >
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.selectedIconPath : item.iconPath" />
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  props: {
    // 选中tabbar
    selected: { type: Number, default: 0 },
    // 默认颜色
    color: { type: String, default: "#7d7e80" },
    // 选中颜色
    selectedColor: { type: String, default: "#428FFC" },
    //item数组
    tabBars: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      //是否选中
      active: 0,
      //当前选中
      currentSelected: this.selected,
    };
  },
  methods: {
    onChange(index) {
      // console.log("内部-切换到tabbar：" + index);
      this.$emit("onChange", index); //往外传值
    },
  },
  // 初始化页面选中状态
  created() {
    // if (this.$route.path === "/Main" && this.tabBars.length) {
    //   this.$router.push(this.tabBars[this.currentSelected].name);
    // }
  },
  mounted() {},
};
</script>

<style lang="less">
.van-tabbar {
  height: 56px;
}
.van-tabbar-item__icon img {
  height: 26px;
}
</style>
