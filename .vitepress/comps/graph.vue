<template>
  <div ref="tree"></div>
</template>
  
<script lang='ts' setup>
import { ref, shallowRef, reactive, computed, watch, watchEffect, onMounted } from 'vue'
import { renderGraph } from './graph'
import { useRouter } from 'vitepress'

interface Props {
  renderData: any
}
const props = defineProps<Props>()
const tree = shallowRef()
const router = useRouter()

function handleTreeData(tree) {
  // tree.id = tree.text
  tree.children = tree.items
  tree.items?.forEach(item => handleTreeData(item))
  return tree 
}

onMounted(() => {
  const graph = renderGraph(tree.value)
  const data = handleTreeData(props.renderData)

  graph.data(data)
  graph.render()
  graph.fitCenter()
  graph.fitView()

  graph.on('text-shape:click', ev => {
    const model = ev.item?._cfg?.model
    if(!model) return
    if(model.items) return
    router.go(model.link as string)
  })
  // 鼠标滑过叶子节点高亮切换状态
  graph.on('node:mouseenter', ev => {
    const node = ev.item
    if(!node) return
    const nodeModel = node._cfg?.model
    if(nodeModel?.children) return
    node.setState('highlight', true)
  })
  graph.on('node:mouseleave', ev => {
    const node = ev.item
    if(!node) return
    const nodeModel = node._cfg?.model
    if(nodeModel?.children) return
    node.setState('highlight', false)
  })

  // window.onresize = () => {
  //   if (!graph || graph.get('destroyed')) return;
  //   if (!container || !container.scrollWidth || !container.scrollHeight) return;
  //   graph.changeSize(container.scrollWidth, container.scrollHeight);
  // };
})
</script>
  