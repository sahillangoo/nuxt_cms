<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// You can add global setup logic here if needed in the future.
// For example, setting up global SEO metadata:
useHead({
  htmlAttrs: {
    lang: 'en',
    // 'data-theme': 'light' // Default theme for SSR - Removed to let ThemeSwitcher plugin manage this
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - SquadCoders` : 'SquadCoders - Web Agency';
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'SquadCoders: Crafting digital excellence. We are a web agency specializing in web development, UI/UX design, and SEO optimization.' }
  ],
  link: [
    // You can add favicon links or other global links here
    // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
