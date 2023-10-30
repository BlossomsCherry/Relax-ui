import rTree from './index.vue'

rTree.install = (app) => {
  app.component(rTree.name, rTree)
}

export default rTree
