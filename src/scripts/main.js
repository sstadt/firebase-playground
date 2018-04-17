import Vue from 'vue'
import Forge from 'forge-ui'

import App from './components/App.vue'

import Login from './components/Login.vue'
import Chat from './components/Chat.vue'

Vue.component('login', Login);
Vue.component('chat', Chat);

Vue.use(Forge)

new Vue({
  el: '#app',
  render: h => h(App)
})
