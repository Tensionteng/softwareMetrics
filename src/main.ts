import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'


const pinia = createPinia()
createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
