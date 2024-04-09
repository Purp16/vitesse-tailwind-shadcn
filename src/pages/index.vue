<script setup lang="ts">
import Home from './home.md'

defineOptions({
  name: 'IndexPage',
})
useHead({
  titleTemplate: 'Home | %s',
})
</script>

<template>
  <Home />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
