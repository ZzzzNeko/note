import { TreeGraph, Graph } from '@antv/g6'
import sidebar from '../sidebar'

function convertTree () {
  function mapTreeField (tree) {
    tree.id = tree.text
    console.log(tree, !tree.items?.length)
    if(!tree.items?.length) return tree
    tree.children = tree.items
      ? tree.items.map(item => mapTreeField(item))
      : []
    return tree
  }
  const trees = Object.entries(sidebar).reduce((acc, cur) => {
    const [key, val] = cur
    acc.push({ id: key, text: key, children: val })
    return acc
  }, [])
  return {
    id: '程序',
    text: '程序',
    children: trees
  }
}

export function renderGraph(container: HTMLElement) {
  const data = convertTree()

  const graph = new TreeGraph({
    container,
    width: container.scrollWidth || window.innerWidth,
    height: container.scrollHeight || window.innerHeight - 64,
    fitViewPadding: [30, 10],
    // fitViewPadding: [50, 80, 80],
    defaultEdge: {
      type: 'cubic-horizontal'
    },
    layout: {
      // type: 'indented',
      type: 'compactBox',
      direction: 'LR',
      // direction: 'H',
      getWidth() { return 20 },
      getHeight() { return 20 },
      getVGap() { return 5 },
      getHGap() { return 50 }
    },
    modes: {
      default: ['collapse-expand']
      // default: ['drag-canvas', 'zoom-canvas', 'collapse-expand']
    }
  })
  graph.node(node => {
    return ({
      type: 'rect',
      size: [60, 0],
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
      label: node.text || node.id,
      labelCfg: {
        position: 'top'
      },
      style: {
        cursor: 'pointer'
      }
      // labelCfg: {
      //   offset: 5,
      //   position: node.children?.length
      //     ? (node.x < 0 ? 'right' : 'left')
      //     : (node.x > 0 ? 'right' : 'left'),
      // },
      // style: {
      //   stroke: '#b197fc',
      //   fill: '#f3f0ff'
      // }
    })
  })
  return graph
}