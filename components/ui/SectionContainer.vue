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
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: 'bg-base-100'
  },
  padding: {
    type: String,
    default: 'py-16 md:py-24'
  },
  titleAlignment: {
    type: String,
    default: 'center'
  },
  titleSize: {
    type: String,
    default: 'text-3xl md:text-4xl'
  }
})

const sectionClasses = computed(() => `${props.padding} ${props.backgroundColor}`)

const titleContainerClass = computed(() => {
  const baseClass = 'mb-12 md:mb-16'
  return props.titleAlignment === 'center' ? `${baseClass} text-center` : baseClass
})

const titleClass = computed(() =>
  `${props.titleSize} font-bold font-headings text-base-content`
)

const descriptionClass = computed(() => {
  const baseClass = 'mt-4 text-lg text-base-content/70'
  return props.titleAlignment === 'center' ? `${baseClass} max-w-2xl mx-auto` : baseClass
})
</script>
