import './assets/main.css'

import ContactForm from "./components/ContactForm.vue";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

// register contact form globally as it is on every page
app.component(
    'ContactForm', ContactForm
)

app.use(createPinia())
app.use(router)

app.mount('#app')
