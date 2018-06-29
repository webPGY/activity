// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import 'muse-ui/lib/styles/base.less';
// import {DataTable} from 'muse-ui';
// import 'muse-ui/lib/styles/theme.less';
// Vue.use(DataTable);


import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

import App from './App'
import router from './router'

import _ from "lodash"




import $ from 'jquery'
import clipboard from 'clipboard';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;


// import "~public/style/_common.scss"

Vue.use(_)


Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

