<script setup lang="ts">
defineProps<{
  name: string
  duty: string
  description: string
  avatar: string
}>()
</script>

<template>
  <div
    class="flex flex-col h-full gap-4 px-4 py-6 leading-7 transition duration-300 delay-75 bg-gray-200 border-b-2 border-transparent cursor-pointer bg-opacity-90 hover:border-brand"
  >
    <div class="flex gap-4">
      <img :src="ImageURL(avatar)" alt="Avatar" v-if="avatar" class="w-12 h-12 rounded-full" />
      <div class="flex flex-col items-start gap-2">
        <h2 class="text-xl font-bold">
          {{ name }}
        </h2>
        <p class="font-light text-brand">
          {{ duty }}
        </p>
      </div>
    </div>
    <p class="!text-left text-gray-500 font-light">
      {{ description }}
    </p>
  </div>
</template>
