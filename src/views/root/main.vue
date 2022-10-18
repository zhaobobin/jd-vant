<template>
  <div class="root">
    <transition :name="isGoNext">
      <router-view></router-view>
    </transition>
    <BaseTabBar
      :selected="selected"
      :tabBars="tabBars"
      @onChange="onChange"
    />
  </div>
</template>

<script>
import BaseTabBar from "@/components/BaseTabBar.vue";
export default {
  components: {
    BaseTabBar,
  },
  data() {
    return {
      viewMeta : 0,
      isGoNext : 'loan-go',
      title: "标题",
      isBack: false,
      selected: 1,
      isPlaceholder: true,
      tabBars: [
        {
          name: "/home",
          isShowRedDot: false,
          badge: "",
          text: "主页",
          iconPath: require("@assets/tab/tab1.png"),
          selectedIconPath: require("@assets/tab/tab1_select.png"),
        },
        {
          name: "/demand",
          isShowRedDot: false,
          badge: "",
          text: "需求大厅",
          iconPath: require("@assets/tab/tab2.png"),
          selectedIconPath: require("@assets/tab/tab2_select.png"),
        },
        {
          name: "/account",
          isShowRedDot: false,
          badge: "",
          text: "个人中心",
          iconPath: require("@assets/tab/tab3.png"),
          selectedIconPath: require("@assets/tab/tab3_select.png"),
        },
      ],
    };
  },
  watch: {
    '$route.matched': function (newVal, oldVal) {
      const newMeta = newVal[0].meta.viewMeta;
      const oldMeta = oldVal[0].meta.viewMeta;
      this.viewMeta = newMeta;
      if (newMeta === oldMeta) {
        this.isGoNext = '';
      } else {
        this.isGoNext = newMeta > oldMeta ? 'loan-go' : 'loan-back';
        
      }
    }
  },
  mounted(){
    this.viewMeta = 1
  },
  methods: {
    onChange(index) {
      // console.log("外部-切换到tabbar：" + index);
      this.tabBars[index].isShowRedDot = this.tabBars[index].isShowRedDot
        ? false
        : false;
    },
  },
  created() {},
};
</script>

<style lang="less">
.root {
  height: 100vh;
  .container {
    padding-top: 46px;
  }
}
</style>
