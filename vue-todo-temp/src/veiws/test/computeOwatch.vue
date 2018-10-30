<template>
  <div>
    {{firstName}}
    <br>
    {{lastName}}
    <br>
    {{fullName}}
    <br>
    <input type="text" v-model="firstName">
    <br>
    <input type="text" v-model="lastName">
    <br>
    <input type="text" v-model="fullName">
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        firstName: 'cao',
        lastName: 'gang',
        fullName:''
      }
    },
    created() {
    },
    mounted() {

    },
    /*computed: {
      fullName(){
        return this.firstName + " " + this.lastName;
      },
      content(){
        return '一段文字'
      }
    },*/
    watch:{
       firstName(newVal,oldVal){
         this.fullName = newVal + ' ' + this.lastName
       }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  @import "test.styl";
</style>
