import rDialog from './index.vue'

rDialog.install = (app) => {
  app.component(rDialog.name, rDialog)
}

export default rDialog
