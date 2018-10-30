// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import App from './App'
import router from './router'
import filters from './filters'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@common/stylus/index.styl'

/* 引入mint-ui */
Vue.use(Mint);

/* 自定义过滤器，挂载到全局*/
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
