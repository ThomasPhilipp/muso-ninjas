import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global style
import './assets/main.css'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})