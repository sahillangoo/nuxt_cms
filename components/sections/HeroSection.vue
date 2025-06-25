<template>
  <section
    class="hero min-h-[70vh] bg-gradient-to-br from-primary to-accent"
    :style="backgroundImage ? `background-image: url(${backgroundImage});` : ''"
  >
    <div class="hero-overlay bg-opacity-70"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-2xl">
        <h1 class="mb-5 text-5xl font-bold font-headings text-base-100">
          {{ title }}
        </h1>
        <p class="mb-8 text-lg text-base-200">
          {{ subtitle }}
        </p>
        <div class="space-x-4">
          <NuxtLink
            v-if="primaryButton"
            :to="primaryButton.link"
            class="btn btn-secondary btn-lg hover:btn-primary-focus"
          >
            {{ primaryButton.text }}
          </NuxtLink>
          <NuxtLink
            v-if="secondaryButton"
            :to="secondaryButton.link"
            class="btn btn-outline btn-lg ml-4 text-base-100 border-base-100 hover:bg-base-100 hover:text-primary-content"
          >
            {{ secondaryButton.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  primaryButton: {
    type: Object,
    default: null
  },
  secondaryButton: {
    type: Object,
    default: null
  }
})
</script>
