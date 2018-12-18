<template>
    <div>
        <Head :title="title">
          <div slot="head-slot">
            <img class="switch-btn" src="@common/image/qiehuan.png">
            <span class="switch-text">自学<br>模式</span>
          </div>
        </Head>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell v-for="(item,index) in 10" :key="index" :title="'餐厅 ' + item" />
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="(item,index) in 10" :key="index" :title="'订单 ' + item" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="(item,index) in 10" :key="index" :title="'发现 ' + item" />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="(item,index) in 10" :key="index" :title="'我的 ' + item" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖" >
              <img slot="icon" src="">
              外卖
            </mt-tab-item>
            <mt-tab-item  id="订单">
              <img slot="icon" src="">
              订单
            </mt-tab-item>
            <mt-tab-item id="发现">
              <img slot="icon" src="">
              发现
            </mt-tab-item>
            <mt-tab-item id="我的">
              <img slot="icon" src="">
              我的
            </mt-tab-item>
        </mt-tabbar>
      <input type="text" id="ddd">
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
                title:"英汉互译",
                selected:'外卖'
            }
        },
        created() {

        },
        mounted() {
          document.getElementById("ddd").onclick=function(){
            this.focus();
          }
          document.getElementById("ddd").click();
        },
        methods: {


        }
    }
</script>

<style lang="stylus" scoped>
    @import "yyh.styl";
</style>
