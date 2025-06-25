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
    lang: 'en'
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

<style>
/* Global styles can go here if necessary, but prefer Tailwind utilities and component styles. */
/* The base body background and text color are handled by DaisyUI's theme system (data-theme attribute and base config). */
</style>
