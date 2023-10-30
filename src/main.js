import { createApp } from 'vue'

import App from './App.vue'
import hljs from 'highlight.js'
import router from './router'
import 'highlight.js/styles/arduino-light.css'
import RelaxUi from '../packages/index'
// import '../dist/style.css'
// import RelaxUi from 'relaxing-ui'

const app = createApp(App)

app.use(router)
app.use(RelaxUi)
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    'javascript',
    'css',
    'python',
    'html',
    'bash',
    'java',
    'sql',
    'json',
    'http',
    'go',
    'c++',
    'c#',
    ''
  ]
})

//自定义指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

app.mount('#app')
