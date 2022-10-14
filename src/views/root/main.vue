<template>
  <div class="bg">
    <BaseNavBar :title="title" :isBack="isBack" :isPlaceholder="true">
      <!-- <van-icon name="cross" size="18" slot="left" />
      <van-icon name="circle" size="18" slot="right" /> -->
    </BaseNavBar>
    <router-view></router-view>
    <!-- <transition :name="isGoNext">
      <router-view></router-view>
    </transition> -->
    <BaseTabBar
      :selected="selected"
      :tabBars="tabBars"
      @onChange="onChange"
    ></BaseTabBar>
  </div>
</template>

<script>
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseTabBar from "@/components/BaseTabBar.vue";
export default {
  components: {
    BaseNavBar,
    BaseTabBar,
  },
  data() {
    return {
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

<style></style>
