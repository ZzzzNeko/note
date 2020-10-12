<template lang="pug">
  .tile-list
    .tile-item(
      v-for="(tile, index) in tiles"
      :key="index"
    ) {{ tile }}
</template>

<script>
export default {
  props: {
    tiles: Array,
  },
};
</script>

<style lang="scss" scoped>
.tile-list {
  display: flex;
  flex-wrap: wrap;

  .tile-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 33.33%;
    height: 100px;
  }
}
</style>
