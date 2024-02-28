import './assets/main.css'
import './assets/main-consulting.css'
import './assets/main-coaching.css'
import '../node_modules/boxicons'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
