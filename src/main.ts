import { createApp } from 'vue'
import { App } from './App'
import router from './router'

const app = createApp(App)
// 分环境处理
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
        // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
        (<any>window).__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
}

app.use(router).mount('#app')
