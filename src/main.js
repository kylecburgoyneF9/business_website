import './assets/main.css'

import ContactForm from "./components/ContactForm.vue";
import BackgroundVideo from './components/BackgroundVideo.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

// register contact form + backgroundVideo globally as they're on every page
app.component('ContactForm', ContactForm)
    .component('BackgroundVideo', BackgroundVideo)


app.use(createPinia())
app.use(router)

app.mount('#app')
