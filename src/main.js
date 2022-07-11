import { createApp } from 'vue'

import App from './App.vue'

import AddInput from './components/AddInputs.vue'
import ShowItem from'./components/ShowItems.vue'


const app = createApp(App)


app.component('add-input',AddInput)
app.component('show-item',ShowItem)



app.mount('#app')
