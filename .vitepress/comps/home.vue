<template>
<div class="home">
  <Graph class="graph-tree" :render-data="tree1" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree2" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree3" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree4" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree5" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree6" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree7" @click-leaf="routerTo" />
  <Graph class="graph-tree" :render-data="tree8" @click-leaf="routerTo" />
</div>
</template>

<script lang='ts' setup>
import { ref, shallowRef, reactive, computed, watch, watchEffect, onMounted } from 'vue'
import Graph from './tree/Tree'
import { tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8 } from '../sidebar'
import { useRouter, useData, withBase } from 'vitepress'
// const siteData = useData()
// const base = siteData.site.value.base
const router = useRouter()
const routerTo = (link: string) => router.go(withBase(link))
// const routerTo = (link: string) => router.go((base.endsWith('/') ? base.slice(0, base.length - 1) : base) + link)
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  background-color: #fff;
}
.graph-tree {
  min-width: 360px;
  width: calc(25% - 10px);
  margin: 4px;
  box-shadow: 2px 2px 4px 2px rgba(208, 191, 255, 0.6);
}
</style>