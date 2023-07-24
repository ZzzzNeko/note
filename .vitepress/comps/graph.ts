import { TreeGraph } from '@antv/g6'

export function renderGraph(container: HTMLElement) {
  const graph = new TreeGraph({
    container,
    width: container.scrollWidth || window.innerWidth,
    height: container.scrollHeight || window.innerHeight - 64,
    fitViewPadding: [30, 10],
    defaultEdge: {
      type: 'cubic-horizontal'
    },
    layout: {
      type: 'compactBox',
      direction: 'LR',
      getWidth() { return 20 },
      getHeight() { return 20 },
      getVGap() { return 5 },
      getHGap() { return 50 }
    },
    modes: {
      default: ['collapse-expand']
    }
  })
  graph.node(node => {
    return ({
      type: 'rect',
      size: [60, 0],
      style: {
        stroke: '#91a7ff'
      },
      // anchorPoints: [
      //   [0, 0.5],
      //   [1, 0.5],
      // ],
      label: node.text || node.id,
      labelCfg: {
        position: 'top',
        style: {
          x: -25,
          textAlign: 'left',
          cursor: node.children?.length ? '' : 'pointer',
        }
      },
    })
  })
  graph.edge(edge => ({
    style: {
      stroke: '#dbe4ff'
    }
  }))
  return graph
}