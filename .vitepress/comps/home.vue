<template>
<div class="home">
  <Graph class="graph-tree" :render-data="tree1" />
  <Graph class="graph-tree" :render-data="tree2" />
  <Graph class="graph-tree" :render-data="tree3" />
  <Graph class="graph-tree" :render-data="tree4" />
  <Graph class="graph-tree" :render-data="tree5" />
  <Graph class="graph-tree" :render-data="tree6" />
  <Graph class="graph-tree" :render-data="tree7" />
  <Graph class="graph-tree" :render-data="tree8" />
</div>
</template>

<script lang='ts' setup>
import { ref, shallowRef, reactive, computed, watch, watchEffect, onMounted } from 'vue'
import Graph from './graph.vue'
import { tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8 } from '../sidebar'

</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  background-color: #fff;
}
.graph-tree {
  min-width: 400px;
  width: 24%;
  margin: 4px;
  box-shadow: 2px 2px 4px 2px rgba(208, 191, 255, 0.6);
}
</style>