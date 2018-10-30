<template>
    <div class="head-common">
      <input type="text" value="" id="dddd">
      <router-link to="index"><img src="@common/image/fanhui.png"></router-link>
      <h4 class="head-common-title">{{titleText}}</h4>
      <slot name="head-slot"></slot>

    </div>
</template>

<script>
    export default {
        components: {
        },
        props:["title"],
        data() {
            return {
              titleText:""
            }
        },
        created() {
          this.titleText = this.title;
        },
        mounted(){
        },
        methods: {

        }
    }
</script>

<style lang="stylus" scoped>
    @import "Head.styl";
</style>
