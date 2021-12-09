import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI'
import router from '@/router/router'

const app = createApp(App)

components.forEach(component => {
   app.component(component.name, component)
});

app.use(router).use(store).mount('#app')
