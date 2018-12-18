<template>
  <div>
    <Head :title="title">
    </Head>

      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ 'height': wrapperHeight + 'px' }">
        <mt-loadmore ref="loadmore" :auto-fill="false"
          :top-method="loadTop" @top-status-change="handleTopChange"
          :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"  :bottom-all-loaded="allLoaded"
        >
          <ul class="page-loadmore-list" :style="{ 'min-height': wrapperHeight + 'px' }"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10"
          >
            <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
          </ul>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>

  </div>
</template>

<script>
  import Head from '@components/Head/Head'
  export default {
    components: {
      Head
    },
    data() {
      return {
        title:"汉英互译",
        list: [],
        loading: false,
        allLoaded: false,
        topStatus: 'drop',
        bottomStatus: '',
        wrapperHeight: 0
      };
    },

    methods: {
      //下拉刷新
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      //上拉加载
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 400) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      //无限滚动
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  }
</script>

<style lang="stylus" scoped>
  @import "hyy.styl";
</style>
