<template>
  <div
    :id="id"
    :class="cardClasses"
  >
    <figure v-if="!reversed" :class="figureClasses">
      <NuxtImg
        :src="image"
        :alt="title"
        width="800"
        height="600"
        class="w-full h-full object-cover"
      />
    </figure>

    <div :class="bodyClasses">
      <h3 :class="`card-title text-2xl font-headings ${titleColor}`">{{ title }}</h3>
      <p class="text-base-content/80 mt-2 mb-4">{{ description }}</p>

      <ul v-if="features && features.length" class="list-disc list-inside space-y-1 text-base-content/70 mb-6">
        <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
      </ul>

      <div class="card-actions justify-start">
        <NuxtLink
          :to="buttonLink"
          :class="`btn ${buttonClass} hover:${buttonHover}`"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>

    <figure v-if="reversed" :class="figureClasses">
      <NuxtImg
        :src="image"
        :alt="title"
        width="800"
        height="600"
        class="w-full h-full object-cover"
      />
    </figure>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  },
  reversed: {
    type: Boolean,
    default: false
  },
  titleColor: {
    type: String,
    default: 'text-primary'
  },
  buttonClass: {
    type: String,
    default: 'btn-primary'
  },
  buttonHover: {
    type: String,
    default: 'btn-primary-focus'
  },
  shadowColor: {
    type: String,
    default: 'hover:shadow-primary/20'
  }
})

const cardClasses = computed(() =>
  `service-section card lg:card-side bg-base-200 shadow-xl mb-12 md:mb-16 ${props.shadowColor} transition-shadow duration-300 ease-in-out`
)

const figureClasses = computed(() => {
  const baseClasses = 'lg:w-1/3 min-h-[250px] md:min-h-[300px] lg:min-h-full'
  return props.reversed ? `${baseClasses} lg:order-first` : baseClasses
})

const bodyClasses = computed(() => {
  const baseClasses = 'card-body lg:w-2/3'
  return props.reversed ? `${baseClasses} lg:order-last` : baseClasses
})
</script>
