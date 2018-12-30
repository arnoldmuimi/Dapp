import {VueConstructor} from 'vue'
import {
  Container,
  Header,
  Main,
  Button,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Dialog,
  Alert,
  Input,
  Popover,
  Radio,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'element-ui'

import VueI18n from 'vue-i18n'

export default (Vue: VueConstructor) => {
  Vue.use(VueI18n)
  Vue.use(Header)
  Vue.use(Container)
  Vue.use(Main)
  Vue.use(Button)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(Dialog)
  Vue.use(Alert)
  Vue.use(Input)
  Vue.use(Popover)
  Vue.use(Radio)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
}
