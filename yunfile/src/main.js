// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import uploader from 'vue-simple-uploader'

import '@/perimition'
import filestable from './components/module/filestable'
import allfile from './components/module/allfile'
import share from './components/module/share'
import collect from './components/module/collect'
import tags from './components/module/tags'

axios.defaults.withCredentials=true;//携带cookie
Vue.component('filestable',filestable)
Vue.component('allfile',allfile)
Vue.component('share',share)
Vue.component('collect',collect)
Vue.component('tags',tags)

Vue.use(uploader)
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
