import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import index from './router'

import {
    Button,
    Message,
    Layout,
    Menu,
    Icon,
    Input,
    Dropdown,
    Avatar
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(VueRouter)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(Avatar)

Vue.prototype.$message = Message

new Vue({
    router: index,
  render: h => h(App)
}).$mount('#app')
