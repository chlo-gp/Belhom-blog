import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueTypedJs from 'vue-typed-js'


createApp(App).use(router).use(VueTypedJs).mount('#app')
