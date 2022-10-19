<template>
  <div class="container demand">
    <SearchBar :search="search" />
    <van-empty description="暂无数据" v-if="!list.length" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        class="list"
        v-if="list.length"
        :loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div 
          class="item"
          v-for="item in list"
          :key="item.id"
        >
          <div class="header">
            <div class="title">
              <span class="type">{{item.type}}</span>
              <span class="name">{{item.positionName}}</span>
              <span class="number">{{item.number}}名</span>
            </div>
            <span class="status">{{item.status}}</span>
          </div>
          <div class="detail">
            <van-row gutter="10">
              <van-col 
                span="12"
                v-for="desc in item.description"
                :key="desc.label"
              >
                <label>{{desc.label}}</label>
                <span>{{desc.content}}</span>
              </van-col>
            </van-row>
            <div class="btns">
              <van-button type="primary" plain @click="clickShare(item)">
                <img :src="require('@/assets/demand/heart01.png')" alt="heart">
                <span>分享</span>
              </van-button>
              <van-button type="primary" @click="clickRecruited(item)">
                <img :src="require('@/assets/demand/heart02.png')" alt="heart">
                <span>揭榜</span>
              </van-button>
            </div>
          </div>
          <div class="footer">
            <p>发布时间：<span>{{item.publishDate}}</span></p>
            <p>发布单位：<span>{{item.company}}</span></p>
            <p class="p3">
              <img :src="require('@/assets/demand/friend.png')" alt="friend">
              <span class="owner">{{item.owner}}·揭榜</span>
              <span class="category">需求隶属：{{item.demandCategory}}</span>
            </p>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
const DATA = [
  {
    id: '1',
    type: '需要',
    positionName: '一级电工',
    number: 10,
    status: '已发布',
    description: [
      { label: '所需技能点', content: '面议' },
      { label: '支持方式', content: '线下' },
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三'
  },
  {
    id: '2',
    type: '需要',
    positionName: '一级电工',
    number: 10,
    status: '已发布',
    description: [
      { label: '需求工种', content: '电工' },
      { label: '工种等级', content: '高级工' },
      { label: '待遇', content: '3000' },
      { label: '工作地点', content: '企业' },
      { label: '需求人数', content: '10' },
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三'
  },
  {
    id: '3',
    type: '需要',
    positionName: '一级电工',
    number: 10,
    status: '已发布',
    description: [
      { label: '需求工种', content: '电工' },
      { label: '工种等级', content: '高级工' },
      { label: '待遇', content: '3000' },
      { label: '工作地点', content: '企业' },
      { label: '需求人数', content: '10' },
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三'
  },
];
export default {
  components: {},
  data() {
    return {
      title: "需求大厅",
      loading: false,
      finished: false,
      refreshing: false,
      list: DATA
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: "MyOrder", params: { setid: 111222 } });
    },
    search(keyword) {
      console.log(keyword);
    },
    onLoad() {
      this.loading = false;
      this.list = this.list.concat(DATA).map((item, index) => ({ ...item, id: index }));
      if (this.list.length >= 10) {
        this.finished = true;
      }
    },
    onRefresh() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.finished = false;
        this.refreshing = false;
        this.list = DATA;
      }, 1000);
    },
    clickShare(item) {
      this.$router.push({ name: "MyOrder", params: { id: item.id } });
    },
    clickRecruited(item) {
      this.$router.push({ name: "MyOrder", params: { id: item.id } });
    }
  },
};
</script>

<style lang="less">
.demand {
  .list {
    padding: 14px 16px;
    .item {
      margin-bottom: 20px;
      padding: 12px 0 3px;
      background: #fff;
      box-shadow: 0px 0px 8px 2px rgba(119,119,119,0.13);
      border-radius: 4px;
      
      .header {
        position: relative;
        .title {
          display: inline-block;
          padding: 3px 10px;
          color: #fff;
          background: #5CBDD7;
          border-radius: 0 14px 14px 0;
          span {
            display: inline-block;
            margin-right: 8px;
            vertical-align: middle;
            &.type {
              font-size: 12px;
            }
            &.name, &.number {
              font-size: 15px;
              font-weight: 600;
            }
          }
        }
        .status {
          font-size: 16px;
          font-weight: 500;
          color: #5CBDD7;
          position: absolute;
          right: 18px;
          top: 3px;
        }
      }

      .detail {
        padding: 14px 0 20px 0;
        margin: 0 10px;
        line-height: 28px;
        border-bottom: 1px solid #EDEDED;
        label {
          display: inline-block;
          width: 90px;
          color: #7D8EA3;
          &::after {
            content: ':'
          }
        }
        span {
          margin-left: 4spx;
        }

        .btns {
          margin-top: 15px;
          text-align: center;
          .van-button {
            margin: 0 14px;
            width: 130px;
            height: 36px;
            border-radius: 18px;
            img {
              margin-right: 6px;
              width: auto;
              height: 14px;
              position: relative;
              top: 2px;
            }
          }
        }
      }
      .footer {
        padding: 12px;
        font-size: 12px;
        color: #B3B5B9;
        line-height: 18px;
        .p3 {
          display: flex;
          height: 20px;
          align-items: center;
          // justify-content: space-between;
          margin-top: 2px;
          img {
            width: 12px;
            height: auto;
            margin-right: 5px;
          }
          .owner {
            flex: 1;
          }
          .category {
            width: 120px;
            text-align: right;
          }
        }
      }
      
    }
  }
}
</style>
