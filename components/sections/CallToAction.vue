<template>
  <section :class="sectionClasses">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold font-headings">{{ title }}</h2>
      <p class="mt-4 text-lg text-base-200/80 max-w-xl mx-auto">
        {{ description }}
      </p>
      <div class="mt-8">
        <NuxtLink
          :to="buttonLink"
          :class="buttonClasses"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: 'bg-gradient-to-r from-accent to-secondary'
  },
  textColor: {
    type: String,
    default: 'text-accent-content'
  },
  buttonStyle: {
    type: String,
    default: 'btn-neutral'
  }
})

const sectionClasses = computed(() =>
  `py-16 md:py-24 ${props.backgroundColor} ${props.textColor}`
)

const buttonClasses = computed(() =>
  `btn btn-lg ${props.buttonStyle} text-neutral-content hover:bg-neutral-focus border-none`
)
</script>
