import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import Cookies from 'js-cookie'

// elementUI
import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // 全局csss
import 'normalize.css/normalize.css'



import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log


if (process.env.NODE_ENV === 'production') {

}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
