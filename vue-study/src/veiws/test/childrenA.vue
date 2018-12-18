<template>
  <div>
    <span style="font-size: 50px;">A</span>
    <hr>
    <button @click="toParent">点击传值</button>
    <span>{{parentMsg}}</span>
  </div>
</template>

<script>
  export default {
    props:['parentMsg'],
    components: {},
    data() {
      return {
          childrenMsg:'zi'
      }
    },
    created() {
    },
    mounted() {

    },
    computed: {},
    methods: {
        toParent(){
          this.$store.commit('stateModify','已经修改了状态')
          this.$emit('childrenEvent',this.childrenMsg);
          this.$router.push({
            path:'/login',
            query:{'name':'A'}
          })
          this.$router.push({
            name:'login',
            params:{'name':'A'}
          })
        }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
