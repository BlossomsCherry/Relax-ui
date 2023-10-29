import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import RelaxUi from '../packages/index'
// import 'relaxing-ui/dist/style.css'
// import RelaxUi from 'relaxing-ui'

const app = createApp(App)

app.use(router)
app.use(RelaxUi)

app.mount('#app')
