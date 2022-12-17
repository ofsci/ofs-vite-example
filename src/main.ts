import { createApp } from 'vue'
import OfsHorView from 'ofs-hor-views'
import 'ofs-hor-views/lib/style.css'
import 'ofs-hor-layout/lib/style.css'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './config/router'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register'

import App from './App.vue'

function bootstrap() {
  const app = createApp(App)
  app.use(OfsHorView)
  app.use(ElementPlus, {
    locale: zhCn,
  })
  app.use(router)
  app.mount('#app')
}

bootstrap()
