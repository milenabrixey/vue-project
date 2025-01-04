import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faCalendarDays,
  faCalendarCheck,
  /* faHippo, */
  faPlane,
  faHome,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCalendarDays, faCalendarCheck, /*faHippo,*/ faPlane, faHome, faEnvelope, faPhone)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
