import App from './App'
import Vue from 'vue'
Vue.config.productionTip = false

import store from './store/index.js'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import mixin from "./common/mixin.js"
Vue.use(mixin)

import navbar from './components/navbar/index.vue'
Vue.component('navbar', navbar)

App.mpType = 'app'
const app = new Vue({
    ...App,
		store
})
app.$mount()