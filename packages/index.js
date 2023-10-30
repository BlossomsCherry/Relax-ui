//导入所有组件
import rIcon from './Icon/index'
import rButton from './Button/index'
import rInput from './Input/index'
import rSpace from './Space/index'
import rRate from './Rate/index'
import rLink from './Link/index'
import rDropdown from './Dropdown/index'
import rRow from './rRow'
import rCol from './rCol'
import rSwitch from './Switch'
import Loading from './Loading/index'
import Message from './Message/index'

const components = [rButton, rInput, rSpace, rRate, rLink, rDropdown, rIcon, rRow, rCol, rSwitch]

const install = (App) => {
  components.forEach((item) => {
    App.use(item)
  })
  App.config.globalProperties.$message = Message
  App.config.globalProperties.$loading = Loading
}

const RelaxUi = {
  install
}
export {
  install,
  rButton,
  rInput,
  rSpace,
  rRate,
  rLink,
  rDropdown,
  rIcon,
  rRow,
  rCol,
  rSwitch,
  Message,
  Loading
}
export default RelaxUi
