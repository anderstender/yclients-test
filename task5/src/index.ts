import Vue from 'vue';
import AppComponent from './components/app.vue';

class AppCore {
    private instance: Vue;
    constructor() {
        this.init();
    }
    private init() {
        this.instance = new Vue({
            el: '#app',
            render: (h) => h(AppComponent),
        });
    }
}

const appCore = new AppCore();
