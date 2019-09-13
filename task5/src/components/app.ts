import Vue from 'vue';
import Component from 'vue-class-component';

import Fifteen from './fifteen/fifteen.vue';

@Component({
    components: {
        fifteen : Fifteen,
    },
})
export default class AppComponent extends Vue {
    public test = 'test';
}
