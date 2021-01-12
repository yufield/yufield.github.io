import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './plugins/axios'

const app = createApp(App);
app.use(Antd);
app.use(router)
app.mount('#app')

// 分环境处理
if ((<any>window).process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
        // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
        (<any>window).__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
}