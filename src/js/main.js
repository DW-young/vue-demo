import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// import MUi from 'mui';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import Common from '../component/common';
import VueRouter from 'vue-router';
import Filter from '../filter';
import '../less/index.less';
import VuePP from 'vue-picture-preview';
import Vuex from 'vuex';

// 启用插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);
Vue.use(Filter);
Vue.use(VuePP);
Vue.use(Vuex);


// 导入路由
import RouterConfig from '../router/router.js';
// 导入根组件
import AppComponent from '../component/App.vue';

import axios from 'axios';
import ApiConfig from '../router/api_config.js';
import Store from '../vuex';

Vue.prototype.axios = axios;
Vue.prototype.api = ApiConfig;

new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    },
    router: new VueRouter(RouterConfig),
    store: new Vuex.Store(Store),
});