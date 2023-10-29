import rSpace from './index.vue'

rSpace.install = (app) => {
  app.component(rSpace.name, rSpace)
}

export default rSpace
