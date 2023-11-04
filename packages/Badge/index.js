import rBadge from './index.vue'

rBadge.install = (app) => {
  app.component(rBadge.name, rBadge)
}

export default rBadge
