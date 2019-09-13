import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    props: {
        num: null,
    },
})
export default class  Tile extends Vue {
    public count: number = 0;
    public clickTile(num: number) {
        this.$emit('click-tile', num);
    }

    public zeroClass(num: number): string {
        return num === 0 ? 'zero' : '';
    }
}
