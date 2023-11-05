import rDrawer from './index.vue'

rDrawer.install = (app) => {
  app.component(rDrawer.name, rDrawer)
}

export default rDrawer
