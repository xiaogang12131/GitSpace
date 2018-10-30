<template>
    <div>
       <div class="header">
          <span></span>
          <p><img src="@common/image/default.png" alt=""></p>
       </div>
       <div class="section">
         <div class="section-title">
           <img src="@common/image/hand.png">
           <p>请选择练习范围</p>
         </div>
         <div class="section-content">
            <ul class="section-list clear">
              <router-link :to="{path:item.url}" v-for="(item,index) in sectionList"  :key="item"  class="section-item" tag="li">
                <img :src="item.src" alt="">
                <p>{{item.des}}</p>
              </router-link>
            </ul>
         </div>
       </div>
       <div class="footer">
         <img src="@common/image/bottom-bg.png" alt="">
       </div>
    </div>
</template>

<script>
    import {getQuestion, getErrorWord, login} from '@http/api'
    export default {
        components: {

        },
        data() {
            return {
              username:"",
              sectionList:[
                {
                  src:'static/yyh.png',
                  url:'yyh',
                  des:'英汉互译'
                },
                {
                  src:'static/yyh.png',
                  url:'hyy',
                  des:'汉英互译'
                },
                {
                  src:'static/dctx.png',
                  url:'dctx',
                  des:'单词听写'
                },
                {
                  src:'static/yhlx.png',
                  url:'yhlx',
                  des:'英汉练习'
                },
                {
                  src:'static/pxlx.png',
                  url:'pxlx',
                  des:'拼写练习'
                },
                {
                  src:'static/xjxxl.png',
                  url:'xjxxl',
                  des:'相近消消乐'
                },
                {
                  src:'static/pxmf.png',
                  url:'pxmf',
                  des:'拼写魔方'
                },
                {
                  src:'static/dcfx.png',
                  url:'dcfx',
                  des:'单词复习'
                },
                {
                  src:'static/yxbs.png',
                  url:'yxbs',
                  des:'游戏比赛'
                }
              ]
            }
        },
        created() {
            this.username=this.$route.params.username;
            console.log(this.username);
            getErrorWord().then(
                res => {
                    console.log(res)
                },
                error => {
                    console.log(error)
                }
            )
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    @import "index.styl";
</style>
