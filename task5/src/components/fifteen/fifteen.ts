import Vue from 'vue';
import Component from 'vue-class-component';
import Tile from './tile/tile.vue';

@Component({
    components: {
        tile: Tile,
    },
    mounted() {
        if (this.isSorted()) {
            this.ready = true;
        }
    },
})
export default class Fifteen extends Vue {
    public count: number = 0;
    public ready: boolean = false;

    public tiles: any[] =
        [
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 15, 14, 0,
        ];

    public tileClick(num: number) {
        this.trySwap(num);
    }
    public trySwap(num: number): any {
        if (this.ready) {
            return;
        }

        const zeroIndex = this.tiles.findIndex((n) => !n);
        const zeroPosition = [Math.floor(zeroIndex / 4 ), zeroIndex % 4];

        const currentIndex = this.tiles.findIndex((n) => num === n);
        const currentPosition = [Math.floor(currentIndex / 4), currentIndex % 4];

        if (this.dist(zeroPosition, currentPosition) === 1) {
            const buff = this.tiles[zeroIndex];
            this.tiles[zeroIndex] = this.tiles[currentIndex];
            this.tiles[currentIndex] = buff;
            this.$forceUpdate();
            if (this.isSorted()) {
                this.ready = true;
            }
        }
    }

    public isSorted() {
        for (let i = 0; i < this.tiles.length - 1; i++) {
            if (this.tiles[i] > this.tiles[i + 1]) {
                return false;
            }
        }
        return true;
    }

    public dist(position1: number[], position2: number[]) {
        return Math.abs(position1[0] - position2[0]) + Math.abs(position1[1] - position2[1]);
    }
}
