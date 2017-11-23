import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';
import NumboxComponent from './numbox.vue';

export default {
    install(Vue) {
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer',FooterComponent);
        Vue.component('app-numbox',NumboxComponent);
    }
}