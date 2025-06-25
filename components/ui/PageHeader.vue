<template>
  <section class="py-12 md:py-16 bg-base-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold font-headings text-primary sm:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-base-content/70 sm:text-xl max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
