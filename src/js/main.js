
import Vue from 'Vue';
import App from '../component/App.vue';

new Vue({
    el: '#app',
    render: function (c) {
        return c(App);
    }
});