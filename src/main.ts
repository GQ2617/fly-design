import { createApp } from 'vue'
import App from './App.vue'
import flyd from '../lib/components'
const app = createApp(App)

app.use(flyd)
app.mount('#app')
