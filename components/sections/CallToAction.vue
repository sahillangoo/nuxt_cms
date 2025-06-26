<template>
  <section :class="sectionClasses" class="overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-[1]">
      <h2 class="text-3xl md:text-4xl font-bold font-headings drop-shadow-sm">{{ title }}</h2>
      <p class="mt-4 text-lg opacity-90 max-w-xl mx-auto drop-shadow-sm">
        {{ description }}
      </p>
      <div class="mt-8 md:mt-10">
        <NuxtLink
          :to="buttonLink"
          :class="buttonClassesResolved"
          class="group"
        >
          {{ buttonText }}
          <Icon name="heroicons:arrow-right-circle-20-solid" class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>
    <!-- Optional: decorative elements if desired for "high quality" feel -->
    <!-- Example: <div class="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div> -->
  </section>
</template>

<script setup>
import { computed } from 'vue';

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
  secondaryButton: { // Optional secondary button: { text: String, link: String, style?: String (e.g. 'btn-outline'), icon?: String }
    type: Object,
    default: null
  },
  backgroundColor: {
    type: String,
    default: 'bg-gradient-to-br from-primary to-accent' // Default gradient
  },
  textColor: {
    type: String,
    default: 'text-primary-content' // Default text for primary/accent backgrounds
  },
  buttonStyle: { // Can be 'btn-neutral', 'btn-primary', 'btn-secondary', 'btn-accent', or outline versions
    type: String,
    default: 'btn-neutral hover:bg-opacity-80'
  }
})

const sectionClasses = computed(() =>
  `py-16 md:py-20 relative ${props.backgroundColor} ${props.textColor}`
)

const mainButtonClasses = computed(() => {
  let classes = `btn btn-lg group ${props.buttonStyle}`;
  if (!props.buttonStyle.includes('border-') && !props.buttonStyle.includes('btn-ghost')) { // Add border-none if not an outline or ghost
      classes += ' border-none';
  }
  // Text color logic (simplified, relies more on DaisyUI defaults or explicit style prop)
  if (props.buttonStyle.includes('btn-primary') && !props.buttonStyle.includes('text-')) classes += ' text-primary-content';
  else if (props.buttonStyle.includes('btn-secondary') && !props.buttonStyle.includes('text-')) classes += ' text-secondary-content';
  else if (props.buttonStyle.includes('btn-accent') && !props.buttonStyle.includes('text-')) classes += ' text-accent-content';
  else if (props.buttonStyle.includes('btn-neutral') && !props.buttonStyle.includes('text-')) classes += ' text-neutral-content';
  else if (props.buttonStyle.includes('btn-outline') && props.textColor && !props.buttonStyle.includes('text-')) {
    // For outline buttons on colored backgrounds, use the section's text color for the button's text and border
    classes += ` ${props.textColor} border-current`;
  }
  return classes;
})

const secondaryButtonClasses = computed(() => {
  if (!props.secondaryButton || !props.secondaryButton.style) return 'btn btn-lg btn-outline group'; // Default outline
  let classes = `btn btn-lg group ${props.secondaryButton.style}`;
   if (!props.secondaryButton.style.includes('border-') && !props.secondaryButton.style.includes('btn-ghost')) {
      classes += ' border-none';
  }
  // Text color for secondary button, especially if outline on colored background
  if (props.secondaryButton.style.includes('btn-outline') && props.textColor && !props.secondaryButton.style.includes('text-')) {
    classes += ` ${props.textColor} border-current`;
  }
  return classes;
})

</script>
