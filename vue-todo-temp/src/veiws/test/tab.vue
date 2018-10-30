<template>
    <div class="tab">
        <ul class="clear">
          <li v-for="(item,index) in 3" :class="{active:index == num}" @click="tab(index)">标题{{item}}&emsp;{{index}}</li>
        </ul>
        <div>
            {{tabContent}}
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
               num:0,
               tabContent:''
            }
        },
        created() {
        },
        mounted() {
            this.tab(0);
        },
        methods: {
          tab(index){
            this.num=index;
            this.tabContent='内容'+index
          }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "test.styl";
</style>
