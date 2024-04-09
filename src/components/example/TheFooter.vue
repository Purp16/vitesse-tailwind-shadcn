<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '@/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav class="flex justify-center gap-4 mt-6 text-xl">
    <RouterLink class="icon-btn" to="/" :title="t('button.home')">
      <div class="icon-[carbon--campsite]" />
    </RouterLink>

    <button class="icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div class="icon-[carbon--sun] dark:icon-[carbon--moon]" />
    </button>

    <span>{{ $t('button.test') }}</span>

    <a class="icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div class="icon-[carbon--language]" />
    </a>

    <RouterLink class="icon-btn" to="/about" :title="t('button.about')" data-test-id="about">
      <div class="icon-[carbon--dicom-overlay]" />
    </RouterLink>

    <a class="icon-btn" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div class="icon-[carbon--logo-github]" />
    </a>
  </nav>
</template>
