<script setup lang="ts">
const { t } = useI18n()
useHead({
  titleTemplate: '404 Not Found | %s',
})
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
