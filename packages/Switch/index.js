import rSwitch from './index.vue'

rSwitch.install = (app) => {
  app.component(rSwitch.name, rSwitch)
}

export default rSwitch
