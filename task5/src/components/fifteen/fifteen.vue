<template>
    <div>
        <div class="fifteen" >
            <div v-for="i in [0,1,2,3]">
                <div v-for="j in [0,1,2,3]">
                    <tile :num="tiles[j*4 + i]" @click-tile="tileClick"></tile>
                </div>
            </div>

        </div>
        <div v-if="ready" class="ready-block">Головоломка решена!</div>
    </div>
</template>

<script lang="ts" src="./fifteen.ts"></script>
<style scoped src="./fifteen.styl"></style>