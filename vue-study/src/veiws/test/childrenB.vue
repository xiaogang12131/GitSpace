<template>
  <div>
    <span style="font-size: 50px;">B</span>
    <hr>
    <span>{{share}}</span>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {

    },
    computed: {
      share(){
        return this.$store.state.share
      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus" scoped>
</style>
