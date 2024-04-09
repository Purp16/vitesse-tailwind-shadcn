<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSeparator :class=" cn('-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800', props.class)" v-bind="forwardedProps" />
</template>
