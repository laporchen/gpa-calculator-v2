import { createApp } from 'vue'
import NaiveUI from "naive-ui"
import App from './App.vue'
import "./axios"
import "virtual:windi.css"

createApp(App).use(NaiveUI).mount('#app')
