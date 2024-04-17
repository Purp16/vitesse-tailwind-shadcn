<script setup lang="ts"></script>

<template>
  <div class="login">
    <!-- 左侧图片区域 -->
    <section class="pic"><img src="@/img/user/login_bg.jpg" alt="login_bg" /></section>

    <!-- 主要内容 -->
    <section class="main">
      <div class="main-content">
        <span>#LUNA</span>
        <h1>登录</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.login {
  @apply flex w-full h-full bg-slate-50;

  .pic {
    @apply h-full max-w-0 lg:max-w-xs xl:max-w-md w-full transition-all;

    img {
      @apply h-full w-full object-cover object-left pointer-events-none;
    }
  }

  .main {
    @apply h-full flex-grow flex flex-col gap-6 items-center justify-center pb-32 pt-8 px-8;

    .main-content {
      @apply flex flex-col gap-8 items-center max-w-lg w-full;

      span {
        @apply w-full text-lg tracking-wide font-light text-blue-400 -mb-7;
      }

      h1 {
        @apply w-full text-4xl font-semibold text-blue-700;
      }

      form {
        @apply w-full flex flex-col gap-8;

        input {
          @apply p-4 text-lg text-slate-900 bg-slate-200 rounded-lg;
        }

        button {
          @apply p-4 text-lg text-white bg-slate-900 rounded-lg;
        }
      }
    }
  }
}
</style>
