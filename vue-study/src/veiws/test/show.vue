<template>
      <div>
          <h2>vue form表单</h2>
          <!-- 复选框 -->
          <input type="checkbox" id="dis" v-model="dis">
          <p>{{dis}}</p>


          <!-- 多个复选框，绑定到同一个数组上 -->
          <!-- 作用，可以将选中的放在同一个数组中，再做逻辑操作 -->
          <input type="checkbox" id="gary" value="Gary" v-model="checkd">
          <label for="gary">Gary</label>
          <input type="checkbox" id="hello" value="Hello" v-model="checkd">
          <label for="hello">Hello</label>
          <p>{{checkd}}</p>


          <!-- 单选按钮 -->
          <input type="radio" id="one" value="One" v-model="checkdRadio">
          <label for="one">单选按钮1</label>
          <input type="radio" id="two" value="Two" v-model="checkdRadio">
          <label for="two">单选按钮2</label>
          <p>单选:{{checkdRadio}}</p>


          <!-- 单选列表 -->
          <div>
              <select v-model="selected">
                  <option value="china" selected="true">中国</option>
                  <option value="france" disabled>美国</option>
                  <option value="germany">英国</option>
              </select>
              <p>选中:{{selected}}</p>
          </div>

          <!-- 修饰符 -->
          <!-- .trim ：去除前后的空格 v-model.trim="text"-->
          <!-- lazy 变为在 change 事件中同步  <input type="text" v-model="text" lazy>-->

  <!-- .number number类型 -->
          <input type="text" v-model.number="text">
          <p>-{{text}}-</p>
      </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
              dis: false,
              checkd: '',
              checkdRadio: '',
              selected: 'france', //设china为默认值
              text: null
            }
        },
        created() {
        },
        watch:{
            checkd(val){
                console.log(val);
            },
            selected(val){
              console.log(val);
            },
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="stylus" scoped>
</style>
