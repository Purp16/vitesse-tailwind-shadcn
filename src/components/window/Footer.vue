<script setup lang="ts"></script>

<template>
  <footer>
    <section class="content">
      <span>Vitesse</span>
      <span>Tailwind</span>
      <span>Shadcn</span>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply flex justify-center  bg-[#eee] text-[#444];

  section {
    @apply flex justify-start border-white border-opacity-5  text-[#222] flex-wrap w-full gap-4 p-6 text-base gap-y-2;

    .span {
      @apply flex flex-wrap w-full gap-6 p-6 text-sm gap-y-2;
    }
  }
}
</style>
