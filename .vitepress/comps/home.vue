<template>
  <Loading v-show="loading" />
  <div class="toc-trees">
    <TocTree class="toc-tree" :render-data="tree1" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree2" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree3" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree4" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree5" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree6" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree7" @click-leaf="routerTo" />
    <TocTree class="toc-tree" :render-data="tree8" @click-leaf="routerTo" />
  </div>
</template>

<script lang='ts' setup>
import { defineAsyncComponent, ref } from 'vue'
import { tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8 } from '../sidebar'
import { useRouter, useData, withBase } from 'vitepress'
import Loading from './loading.vue'

const loading = ref(true)
const TocTree = defineAsyncComponent({
  loader: async () => {
    const comp = await import('./tree/Tree')
    setTimeout(() => {
      loading.value = false
    }, 0);
    return comp
  },
  suspensible: false
})
const router = useRouter()
const routerTo = (link: string) => router.go(withBase(link))
</script>

<style scoped>
.toc-trees {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  background-color: #fff;
}
.toc-tree {
  min-width: 360px;
  width: calc(25% - 10px);
  margin: 4px;
  box-shadow: 2px 2px 4px 2px rgba(208, 191, 255, 0.6);
}
</style>