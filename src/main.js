import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'
 
Vue.use(VueTypedJs)

createApp(App).use(router).mount('#app')
