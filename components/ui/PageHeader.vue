<template>
  <section class="py-10 md:py-14 bg-base-200 rounded-lg shadow">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-headings text-primary">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-3 sm:mt-4 text-base sm:text-lg text-base-content/75 max-w-2xl mx-auto">
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
