<template>
  <footer class="">
    <section class="content">
      <h2 class="font-semibold text-[#333]">LUNA水镜智能</h2>
      <p class="text-[#666]">© 2023 <span>大数据分析与应用安徽省重点实验室</span> · <span>认知智能全国重点实验室</span></p>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply py-8 px-4 bg-[#F4F6F7] flex items-center justify-center border-y border-zinc-200;

  section {
    @apply flex flex-col w-full gap-2 justify-start border-white border-opacity-5 text-[#333] flex-wrap text-base gap-y-2;

    .span {
      @apply flex flex-wrap w-full gap-6 p-6 text-sm gap-y-2;
    }
  }
}
</style>
