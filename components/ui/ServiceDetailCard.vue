<template>
  <div
    :id="id"
    :class="cardClasses"
  >
    <figure v-if="!reversed" :class="figureClassesResolved">
      <NuxtImg
        :src="image"
        :alt="title"
        width="800"
        height="600"
        class="w-full h-full object-cover"
        format="webp"
        loading="lazy"
        :modifiers="{ quality: 85 }"
        sizes="sm:100vw md:50vw lg:400px"
      />
    </figure>

    <div :class="bodyClassesResolved" class="flex flex-col">
      <h3 :class="`card-title text-xl md:text-2xl font-headings ${titleColor}`">{{ title }}</h3>
      <p class="text-base-content/80 mt-2 mb-4 text-sm md:text-base leading-relaxed flex-grow">{{ description }}</p>

      <ul v-if="features && features.length" class="list-disc list-inside space-y-1.5 text-base-content/75 text-sm md:text-base mb-6">
        <li v-for="(feature, index) in features" :key="index">
          <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 inline-block mr-1 text-primary/70 relative -top-px" />
          {{ feature }}
        </li>
      </ul>

      <div class="card-actions justify-start mt-auto">
        <NuxtLink
          :to="buttonLink"
          :class="`btn ${buttonClass} hover:${buttonHover} group`"
        >
          {{ buttonText }}
          <Icon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>

    <figure v-if="reversed" :class="figureClassesResolved">
      <NuxtImg
        :src="image"
        :alt="title"
        width="800"
        height="600"
        class="w-full h-full object-cover"
        format="webp"
        loading="lazy"
        :modifiers="{ quality: 85 }"
        sizes="sm:100vw md:50vw lg:400px"
      />
    </figure>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
    description: "Unique ID for the section, used for deep linking (e.g., 'web-development')."
  },
  title: {
    type: String,
    required: true,
    description: "The main title of the service."
  },
  description: {
    type: String,
    required: true,
    description: "A detailed description of the service."
  },
  image: { // Recommended aspect ratio 4:3 or 16:9 for the space
    type: String,
    required: true,
    description: "URL of the image representing the service."
  },
  features: { // Array of strings
    type: Array,
    default: () => [],
    description: "List of key features or bullet points for the service."
  },
  buttonText: {
    type: String,
    required: true,
    description: "Text for the call-to-action button."
  },
  buttonLink: {
    type: String,
    required: true,
    description: "URL or path for the button's NuxtLink."
  },
  reversed: { // Image on right, text on left
    type: Boolean,
    default: false,
    description: "If true, reverses the order of image and text content."
  },
  titleColor: { // e.g. 'text-primary', 'text-secondary'
    type: String,
    default: 'text-primary',
    description: "Tailwind text color class for the title."
  },
  buttonClass: { // e.g. 'btn-primary', 'btn-outline btn-accent'
    type: String,
    default: 'btn-primary',
    description: "Base DaisyUI button classes."
  },
  buttonHover: { // e.g. 'hover:opacity-80', 'hover:bg-secondary'
    type: String,
    default: 'hover:opacity-80', // Modern DaisyUI v5 approach for button hover effects
    description: "Tailwind hover class for the button."
  },
  shadowColor: { // e.g. 'hover:shadow-primary/20'
    type: String,
    default: 'hover:shadow-lg', // Default to a slightly larger generic shadow
    description: "Tailwind class for the card's hover shadow effect."
  }
})

const cardClasses = computed(() =>
  `service-section card lg:card-side bg-base-100 shadow-lg mb-12 md:mb-16 ${props.shadowColor} transition-all duration-300 ease-in-out rounded-xl border border-base-300 overflow-hidden`
)

const figureClassesResolved = computed(() => {
  // Ensure figure takes up its space and image covers it. Min height helps prevent collapse.
  const baseClasses = 'lg:w-5/12 xl:w-4/12 min-h-[280px] md:min-h-[320px] lg:min-h-full relative';
  return props.reversed ? `${baseClasses} lg:order-last` : baseClasses;
})

const bodyClassesResolved = computed(() => {
  const baseClasses = 'card-body p-6 md:p-8 lg:p-10 lg:w-7/12 xl:w-8/12'; // Adjusted padding and width distribution
  return props.reversed ? `${baseClasses} lg:order-first` : baseClasses;
})
</script>
