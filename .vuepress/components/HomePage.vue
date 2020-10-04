<template lang="pug">
.page
  router-link(:to="defaultLink") {{ $site ? $site.title : '' }}
</template>

<script>
export default {
  computed: {
    defaultLink() {
      return this.$site ? this.$site.themeConfig.nav[0].link : "";
    },
  },
};
</script>
