import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';

export default {
    install(Vue) {
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer',FooterComponent);
    }
}