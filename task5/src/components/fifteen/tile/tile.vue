<template>
    <div class="tile" :class="zeroClass(num)" @click="clickTile(num)">
        {{num}}
    </div>
</template>
<script lang="ts" src="./tile.ts"> </script>
<style scoped src="./tile.styl"></style>