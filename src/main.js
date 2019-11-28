// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';

import App from './App';
import router from '../src/router/index.js'
import { Button,Menu,Drawer,Radio,Layout,Icon,Table,Modal,Form,Input,Select} from 'ant-design-vue';
// import store from '../src/store/index.js'

Vue.use(router)
Vue.use(Drawer)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Radio)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Table)
Vue.use(Modal)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)




// Vue.use(VueAxios, axios)



Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
    router,
    // store,
    render: h => h(App),
}).$mount('#app');
