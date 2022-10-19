<template>
  <div class="container my-order">
    <SearchBar isBack :search="search" />
    <van-tabs 
      ref="tabs"
      v-model="activeTab" 
      sticky
      color="#428FFC" 
      title-active-color="#428FFC"
      title-inactive-color="#363A44"
    >
      <van-tab title="待确认" name="1">
        <van-empty description="暂无数据" v-if="!list1.length" />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            class="list"
            v-if="list1.length"
            :loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div 
              class="item"
              v-for="item in list1"
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
                <div class="secondParty">
                  <p>乙方信息：</p>
                  <p>{{item.secondParty}}</p>
                </div>
                <div class="btns">
                  <van-button type="primary" plain @click="clickShare(item)">
                    <img :src="require('@/assets/demand/back.png')" alt="back">
                    <span>撤销本单</span>
                  </van-button>
                  <van-button type="primary" @click="clickRecruited(item)">
                    <img :src="require('@/assets/demand/ok.png')" alt="ok">
                    <span>确认完成</span>
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
      </van-tab>
      <van-tab title="待完成" name="2">
        <van-empty description="暂无数据" v-if="!list2.length" />
      </van-tab>
      <van-tab title="已完成" name="3">
        <van-empty description="暂无数据" v-if="!list3.length" />
      </van-tab>
    </van-tabs>
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
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三',
    secondParty: '罗志明 13778987867',
  },
  {
    id: '2',
    type: '需要',
    positionName: '一级电工',
    number: 10,
    status: '已发布',
    description: [
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三',
    secondParty: '罗志明 13778987867',
  },
  {
    id: '3',
    type: '需要',
    positionName: '一级电工',
    number: 10,
    status: '已发布',
    description: [
      { label: '待确认', content: '0' },
      { label: '待完成', content: '0' },
      { label: '已完成', content: '0' },
    ],
    publishDate: '2022-09-09 16:09:09',
    company: '建德树林职业技术培训学校有限公司',
    demandCategory: '技术支持',
    owner: '张三',
    secondParty: '罗志明 13778987867',
  },
];
export default {
  components: {},
  data() {
    return {
      title: "我的点单",
      activeTab: '1',
      loading: false,
      finished: false,
      refreshing: false,
      list1: DATA,
      list2: [],
      list3: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    search(keyword) {
      console.log(keyword);
    },
    onLoad() {
      this.loading = false;
      this.list1 = this.list1.concat(DATA).map((item, index) => ({ ...item, id: index }));
      console.log(this.list1)
      if (this.list1.length >= 10) {
        this.finished = true;
      }
    },
    onRefresh() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.finished = false;
        this.refreshing = false;
        this.list1 = DATA;
      }, 1000);
    },
  },
};
</script>

<style lang="less">
.my-order {
  .van-tabs {
    z-index: 10;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 46px;
  }
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

        .secondParty {
          margin: 10px 2px 20px;
          padding: 6px 8px;
          font-size: 14px;
          font-weight: 600;
          color: #5CBDD7;
          line-height: 26px;
          background: rgba(92, 189, 215, .1);
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
