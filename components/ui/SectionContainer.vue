<template>
  <section :class="sectionClasses">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title || description" :class="titleContainerClass">
        <h2 v-if="title" :class="titleClass" v-html="title"></h2>
        <p v-if="description" :class="descriptionClass">{{ description }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  backgroundColor: { // e.g., 'bg-base-100', 'bg-base-200'
    type: String,
    default: 'bg-base-100'
  },
  paddingY: { // Vertical padding, e.g., 'py-12 md:py-16'
    type: String,
    default: 'py-12 md:py-16' // Reduced default padding slightly
  },
  titleAlignment: { // 'center', 'left', 'right'
    type: String,
    default: 'center'
  },
  titleSize: { // Tailwind text size class, e.g., 'text-2xl md:text-3xl'
    type: String,
    default: 'text-2xl md:text-3xl lg:text-4xl' // Adjusted default title size
  },
  descriptionSize: { // Tailwind text size class
    type: String,
    default: 'text-base sm:text-lg'
  },
  descriptionOpacity: { // Tailwind opacity class part, e.g., 75 for text-base-content/75
    type: [String, Number],
    default: '75'
  },
  titleBottomMargin: { // e.g., 'mb-10 md:mb-12'
    type: String,
    default: 'mb-10 md:mb-12' // Reduced default margin slightly
  }
})

const sectionClasses = computed(() => `${props.paddingY} ${props.backgroundColor}`)

const titleContainerClass = computed(() => {
  let alignClass = 'text-center';
  if (props.titleAlignment === 'left') alignClass = 'text-left';
  if (props.titleAlignment === 'right') alignClass = 'text-right';
  return `${props.titleBottomMargin} ${alignClass}`;
})

const titleClass = computed(() =>
  `${props.titleSize} font-bold font-headings text-base-content` // text-base-content will adapt to light/dark theme
)

const descriptionClass = computed(() => {
  const maxWClass = props.titleAlignment === 'center' ? 'max-w-2xl mx-auto' : 'max-w-none';
  return `mt-3 md:mt-4 ${props.descriptionSize} text-base-content/${props.descriptionOpacity} ${maxWClass}`;
})
</script>
