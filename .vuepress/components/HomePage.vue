<template lang="pug">
.page
  router-link(:to="defaultLink") {{ $site ? $site.title : '' }}
</template>

<script>
export default {
  computed: {
    defaultLink() {
      return this.$site ? Object.keys(this.$site.themeConfig.sidebar)[0] : "";
    },
  },
};
</script>