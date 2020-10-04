<template lang="pug">
  .mermaid(ref="chart")
</template>

<script>
import mermaid from "mermaid/dist/mermaid";

export default {
  name: "Mermaid",
  data() {
    return {
      chartDom: null,
      markdown: "",
    };
  },
  methods: {
    render() {
      const markdown = this.$slots.default[0].text;
      if (this.markdown.trim() != markdown.trim()) {
        this.chartDom.innerHTML = markdown;
        this.chartDom.removeAttribute("data-processed");
        mermaid.init(".mermaid");
      }
    },
  },
  mounted() {
    this.chartDom = this.$refs.chart;
    this.render();
  },
  updated() {
    this.render();
  },
};
</script>
