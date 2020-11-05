<template lang="pug">
svg.tree-chart(width="100%", :height="treeHeight")
  g
    g
      path.node-link(v-for="(link, index) in links", :key="link", :d="link")
    g
      g.tree-node(
        v-for="(node, index) in nodes",
        :key="node.data.translate",
        :transform="node.data.translate"
      )
        circle.node-dot(
          :class="{ '-leaf': node.data.isLeaf, '-closed': node._children }",
          :r="nodeSize",
          @click="toggleState(node)"
        )
        text.node-text.-fill(
          :dy="isVertical ? (node.data.isLeaf ? 30 : -15) : 5",
          :x="isVertical ? 0 : node.data.isLeaf ? 12 : -12",
          :text-anchor="isVertical ? 'middle' : node.data.isLeaf ? 'start' : 'end'"
        ) {{ node.data.title }}
        text.node-text(
          :dy="isVertical ? (node.data.isLeaf ? 30 : -15) : 5",
          :x="isVertical ? 0 : node.data.isLeaf ? 12 : -12",
          :text-anchor="isVertical ? 'middle' : node.data.isLeaf ? 'start' : 'end'",
          @click="routerTo(node)"
        ) {{ node.data.title }}
</template>

<script>
import { linkHorizontal, linkVertical } from "d3-shape";
import {
  hierarchy,
  tree as convertToTree,
  cluster as convertToCluster,
} from "d3-hierarchy";
import common from "../utils/common";

/**
 * $page.headers 信息转树
 * type Header = { level: number, title: string }
 * type Headers = Header[]
 */
// function convertPageToNode(page) {
//   const { title = "无标题", headers, path } = page;
//   const root = { title, level: 1, children: [], path };
//   const getLastItem = (array) => array[array.length - 1];
//   if (!headers) return root;
//   for (var i = 0; i < headers.length; i++) {
//     const header = headers[i];
//     const item = {
//       title: header.title,
//       level: header.level,
//       path: `${path}#${header.slug}`,
//       children: [],
//     };
//     let parent = root;
//     while (parent.level < item.level - 1) {
//       const lastChild = getLastItem(parent.children);
//       if (lastChild) parent = lastChild;
//     }
//     parent.children.push(item);
//   }
//   return root;
// }

function getDiffTail(str1, str2) {
  const minLen = Math.min(str1.length, str2.length);
  for (let i = 0; i < minLen; i++) {
    if (str1[i] != str2[i]) {
      return [str1.slice(i), str2.slice(i)];
    }
  }
  return ["", ""];
}

function convertPageToRoot(oriPages) {
  const pages = common.copy(oriPages);
  const paths = pages.map((page) => page.path);

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const parentIndex = paths.findIndex((path) => {
      // page.path 为 path 的子孙层级
      if (page.path !== path && page.path.includes(path)) {
        const [empty, tail] = getDiffTail(path, page.path);
        // 子层级
        if (empty == "" && !tail.includes("/")) {
          return true;
        }
      }
    });
    const parent = pages[parentIndex];
    if (parent) {
      if (parent.children) {
        parent.children.push(page);
      } else {
        parent.children = [page];
      }
    }
  }

  const root = pages.find((page) => page.path == "/");
  const queue = [...root.children];

  while (queue.length) {
    const node = queue.shift();
    if (node.children) {
      queue.push(...node.children);
    } else {
      // 叶子节点
      node.children = node.headers
        .map((header) => {
          return header.level > 2
            ? null
            : {
                title: header.title,
                level: header.level,
                path: `${node.path}#${header.slug}`,
              };
        })
        .filter((item) => item != null);
    }
  }

  return root;
}

export default {
  props: {
    nodeSize: {
      type: Number,
      default: 6,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    convertType: {
      type: String,
      default: "tree",
      validate: (v) => /^tree|cluster$/.test(v),
    },
  },
  data() {
    return {
      treeWidth: 720,
      treeNode: null,
      rate: 30,
      links: [], // string[]
      nodes: [], // { translate, text }
    };
  },
  computed: {
    treeHeight() {
      if (!this.treeNode) return 0;
      return this.isVertical
        ? this.treeNode.height * this.rate
        : this.treeNode.leaves().length * this.rate;
    },
    convertFn() {
      if (this.convertType === "tree") return convertToTree();
      if (this.convertType === "cluster") return convertToCluster();
    },
    generateLink() {
      return linkHorizontal()
        .x((d) => (this.isVertical ? d.x : d.y) * this.treeWidth)
        .y((d) => (this.isVertical ? d.y : d.x) * this.treeWidth);
    },
  },
  methods: {
    renderTree(treeNode) {
      // window.treeNode = treeNode;
      this.links = treeNode.links().map(this.generateLink);
      this.nodes = treeNode.descendants().map((node) => {
        const x = (this.isVertical ? node.x : node.y) * this.treeWidth;
        const y = (this.isVertical ? node.y : node.x) * this.treeWidth;
        node.data.translate = `translate(${x}, ${y})`;
        node.data.isLeaf = !node.children;
        return node;
      });
    },
    toggleState(node) {
      window.node = node;
      if (node.data.isLeaf && !node._children) return;
      if (node._children) {
        node.children = node._children;
        delete node._children;
      } else {
        node._children = node.children;
        delete node.children;
      }
      this.renderTree(this.treeNode);
    },
    routerTo(node) {
      if (this.$route.path == node.data.path) {
      } else {
        this.$router.push(node.data.path);
      }
    },
  },
  mounted() {
    const { title, pages } = this.$site;
    const rootData = convertPageToRoot(pages);
    rootData.title = title;
    const treeNode = this.convertFn(hierarchy(rootData));
    this.treeNode = treeNode;
    this.renderTree(treeNode);
  },
};
</script>

<style lang="scss" scoped>
.tree-chart {
  padding: 30px 0;
  overflow: visible;
}
.node-link {
  fill: none;
  stroke: #333;
  stroke-width: 1;
  stroke-opacity: 0.5;
}
.tree-node {
  transition: all 300ms;
  .node-dot {
    stroke: #ff5e00;
    stroke-width: 2;
    fill: #fff;
    cursor: pointer;

    &.-leaf {
      stroke: none;
      fill: grey;
      cursor: auto;
      &.-closed {
        cursor: pointer;
        fill: #ff5e00;
      }
    }

    &.-closed {
      &:hover {
        stroke: red;
      }
    }
  }
  .node-text {
    cursor: pointer;
    fill: #222;
    &.-fill {
      stroke-width: 5;
      stroke: #fff;
    }
    &:hover {
      fill: red;
    }
  }
}
</style>
