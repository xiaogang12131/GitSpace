<template>
  <div>
    <span>子组件传过来的值:{{parentMsg}}</span>
    <ChildrenA style="margin-top: 50px" @childrenEvent="childrenToParent" :parentMsg="parentMsg"></ChildrenA>
    <ChildrenB style="margin-top: 50px"></ChildrenB>
  </div>
</template>

<script>
  import ChildrenA from '@veiws/test/childrenA'
  import ChildrenB from '@veiws/test/childrenB'
  export default {
    components: {
        ChildrenA,ChildrenB
    },
    data() {
      return {
        parentMsg:''
      }
    },
    created() {
    },
    mounted() {

    },
    computed: {},
    methods: {
        childrenToParent(data){
            this.parentMsg=data;
        }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
