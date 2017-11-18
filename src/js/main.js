import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';

// 启用插件
Vue.use(MintUi);
Vue.use(Common);

// 导入根组件
import AppComponent from '../component/App.vue';

new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    }
});