//整个包的入口
import '../assets/main.css'
import Button from './Button/Button.vue'
import Container from './Container/src/container.vue'
import Header from './Container/src/header.vue'
import Footer from './Container/src/footer.vue'
import Main from './Container/src/main.vue'
import Aside from './Container/src/aside.vue'

export { Button, Container, Header, Footer, Main, Aside }

const components = [Button, Container, Header, Footer, Main, Aside]

const install = (App) => {
  // 使用 App 参数而不是 app
  components.forEach((item) => {
    App.component(item.name, item)
  })
}

export default install
