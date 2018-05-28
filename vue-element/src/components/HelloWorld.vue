<template>
  <div class="hello">
    <el-tree
      :props="props1"
      :load="loadNode1"
      lazy
      show-checkbox>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      props1: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
    };
  },
  methods: {
    loadNode1(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region' }]);
      }
      if (node.level > 1) return resolve([]);
      debugger;
      setTimeout(() => {
        const data = [{
          name: 'leaf',
          leaf: true
        }, {
          name: 'zone'
        }];

        resolve(data);
      }, 500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
