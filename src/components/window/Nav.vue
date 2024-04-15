<script setup lang="ts">
import { nav_routes } from '@/data/nav'
const rt = useRoute()
</script>

<template>
  <nav>
    <div class="container content">
      <RouterLink to="/" class="title">LUNA</RouterLink>

      <!-- 右侧 -->
      <section>
        <RouterLink v-for="(item, id) in nav_routes" :key="id" :to="item.route" class="item" :class="{ 'bg-[#cf885c]': rt.path === item.route }">
          <!-- 过滤首页：item.route !== '/' && rt.path.startsWith(item.route)   -->
          <span>{{ item.label }}</span>
        </RouterLink>
      </section>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  @apply z-30 flex items-center bg-gray-700 justify-center w-full gap-6 px-6 h-16 select-none text-white transition;

  .container {
    @apply flex flex-wrap items-center justify-center w-full h-full gap-6 transition-all min-w-[640px]; /* min-w-[640px] 为了暂时解决窄屏冲突 */
  }

  .title {
    @apply flex items-center justify-center h-full mr-auto text-2xl transition-all md:w-auto md:py-2;
  }

  // 右侧
  section {
    @apply flex flex-wrap gap-y-2 h-full font-semibold text-lg;

    // 菜单Item
    .item {
      @apply transition h-full px-4 my-auto flex items-center;
    }
  }
}
</style>
