import rTable from './index.vue'

rTable.install = (app) => {
  app.component(rTable.name, rTable)
}

export default rTable
