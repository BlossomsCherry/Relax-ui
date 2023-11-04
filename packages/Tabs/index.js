import rTabs from './index.vue'
import rPane from './tab-pane.vue'

rTabs.install = (app) => {
  app.component(rTabs.name, rTabs)
  app.component(rPane.name, rPane)
}

export default rTabs
