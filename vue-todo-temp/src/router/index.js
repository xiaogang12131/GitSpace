import Vue from 'vue'
import Router from 'vue-router'
import index from '@veiws/index/index'
import login from '@veiws/login/login'
import yyh from '@veiws/yyh/yyh'
import tab from '@veiws/test/tab'
import computeOwatch from '@veiws/test/computeOwatch'
import parent from '@veiws/test/parent'
import childrenA from '@veiws/test/childrenA'
import childrenB from '@veiws/test/childrenB'
import hyy from '@veiws/hyy/hyy'
import head from '@components/Head/Head'
import todo from '@veiws/todotemp/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta:{
        title:'登录页'
      }
    },
    {
      name:'login',
      path: '/login',
      component: login,
      meta:{
        title:'登录页'
      }
    },
    {
      name:'index',
      path:'/index',
      component:index,
      meta:{
        title:'首页'
      }
    },
    {
      name:'yyh',
      path:'/yyh',
      component:yyh,
      meta:{
        title:'英汉互译'
      }
    },
    {
      name:'tab',
      path:'/tab',
      component:tab,
      meta:{
        title:'tab切换'
      }
    },
    {
      name:'computeOwatch',
      path:'/computeOwatch',
      component:computeOwatch,
      meta:{
        title:'计算属性和监听'
      }
    },
    {
      name:'parent',
      path:'/parent',
      component:parent,
      meta:{
        title:'父子组件传值'
      }
    },
    {
      name:'childrenA',
      path:'/childrenA',
      component:childrenA,
      meta:{
        title:'父子组件传值'
      }
    },
    {
      name:'todo',
      path:'/todo',
      component:todo,
      meta:{
        title:'todo应用'
      }
    }

  ]
})
