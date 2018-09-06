import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB'
import ComponentC from '@/components/ComponentC'
import Loader from '@/components/Loader.vue'

Vue.component('component-a', ComponentA)
Vue.component('component-b', ComponentB)
Vue.component('component-c', ComponentC)
Vue.component('loader', Loader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
