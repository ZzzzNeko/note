<template>
  <Suspense>
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
    <template #fallback>
      <div class="loading-wrap">
        <Loading>加载中...</Loading>
      </div>
    </template>
  </Suspense>
</template>

<script lang='ts' setup>
import { defineAsyncComponent } from 'vue'
import Loading from './loading.vue'
// import Graph from './tree/Tree'
const Graph = defineAsyncComponent(() => import('./tree/Tree'))
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
.loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>