<template>
  <view-layout />
</template>

<script setup lang="ts">
import ViewLayout from './layout/ViewLayout.vue'
</script>

<style>
html {
  --ofs-menu-bg-color: #000000;
  --ofs-menu-text-color: rgb(192, 196, 204);
  --ofs-menu-active-bg-color: #409eff;
  --ofs-menu-active-text-color: #ffffff;
  --ofs-menu-hover-bg-color: #434343;
  --ofs-menu-hover-text-color: #ffffff;
}

html.dark {
  --ofs-menu-bg-color: #212121;
  --ofs-menu-text-color: rgb(192, 196, 204);
  --ofs-menu-active-bg-color: #003a8c;
  --ofs-menu-active-text-color: #ffffff;
  --ofs-menu-hover-bg-color: #434343;
  --ofs-menu-hover-text-color: #ffffff;
}
</style>

<style scoped lang="scss"></style>
