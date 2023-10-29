import rLink from './index.vue'

rLink.install = (app) => {
  app.component(rLink.name, rLink)
}

export default rLink
