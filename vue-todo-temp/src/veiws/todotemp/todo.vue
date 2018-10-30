<template>
  <div>
    <input type="text" 
      class="toDoInput"
      placeholder="接下来做什么？"
      autofocus="autofocus"
      @keyup.enter='addTodo'
    >
    <div>
      <ul class="toDoList">
        <li class="toDoItem" v-for="(item,index) in filterItems" :key='index'>
          <input type="checkbox" v-model="item.completed">
          <label>{{item.content}}</label>
          <button @click="deleteItem(item.id)">X</button>
        </li>
      </ul>
    </div>
    <div class="tabs">
      <ul>
        <li v-for="(tab,index) in tabs" 
        :key="index"
        :class="{active:index==num}"
        @click="toggleIndex(index)"
        >
        {{tab}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Item from './item'
let id=0
export default {
  components:{
    Item
  },
  data(){
    return {
      num:0,
      items:[],
      tabs:['all','active','completed']
    }
  },
  computed: {
    filterItems() {
      if (this.num === 0) {
        return this.items
      }else if(this.num === 1){
        return this.items.filter(item=>item.completed==false)
      }else{
        return this.items.filter(item=>item.completed==true)
      }
      // const completed = this.filter === 'completed'
      // return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods:{
    addTodo(e){
      this.items.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value=""
      this.filterItems=this.items
    },
    deleteItem(id){
      this.items.splice(this.items.findIndex(item=>item.id==id),1)
    },
    toggleIndex(index){
      this.num=index
    }
  }
}
</script>
<style lang="stylus" scoped>
.toDoInput
  width:100%
  height:80px
  font-size:40px
  line-height:80px  
.toDoList
  .toDoItem
    padding:10px
    input
      margin-top:5px
    label
      color:#000
    button
      float:right
      border:none
      outline:none
      background:red
      border-radius:50%     
.tabs
  ul
    padding:30px
    display:flex
    justify-content:space-around
    li
      font-size:20px
      color:#000
.active
  border:1px solid red
  color:red      
</style> 