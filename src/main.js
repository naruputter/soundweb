import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Home from './components/home'
import Example from './components/example'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/ex', component: Example},
  { path: '/home', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
