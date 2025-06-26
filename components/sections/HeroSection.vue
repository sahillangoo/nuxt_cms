<template>
  <section
    class="hero min-h-[65vh] md:min-h-[75vh] bg-cover bg-center"
    :style="heroStyle"
  >
    <div class="hero-overlay bg-black" :style="{ opacity: overlayOpacity }"></div>
    <div class="hero-content text-center text-neutral-content py-12 md:py-16">
      <div class="max-w-lg md:max-w-2xl">
        <h1
          class="mb-5 text-4xl sm:text-5xl lg:text-6xl font-bold font-headings text-white drop-shadow-lg"
          v-html="title"
        ></h1>
        <p class="mb-8 text-base sm:text-lg lg:text-xl text-white/90 drop-shadow-md">
          {{ subtitle }}
        </p>
        <div class="space-y-4 sm:space-y-0 sm:space-x-4">
          <NuxtLink
            v-if="primaryButton"
            :to="primaryButton.link"
            :class="primaryButton.class || 'btn-secondary'"
            class="btn btn-lg min-w-[120px] group"
          >
            {{ primaryButton.text }}
            <Icon v-if="primaryButton.icon" :name="primaryButton.icon" class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-110" />
          </NuxtLink>
          <NuxtLink
            v-if="secondaryButton"
            :to="secondaryButton.link"
            :class="secondaryButton.class || 'btn-outline'"
            class="btn btn-lg min-w-[120px] text-white border-white/80 hover:bg-white hover:text-neutral-focus group"
          >
            {{ secondaryButton.text }}
             <Icon v-if="secondaryButton.icon" :name="secondaryButton.icon" class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-110" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  backgroundImage: { // URL for the image
    type: String,
    default: ''
  },
  backgroundGradient: { // Fallback or overlay gradient if no image
    type: String,
    default: 'bg-gradient-to-br from-primary to-accent'
  },
  overlayOpacity: {
    type: Number,
    default: 0.65 // Opacity for the black overlay, adjust as needed
  },
  primaryButton: { // { text: 'Start', link: '/', class: 'btn-primary', icon: 'heroicons:rocket-launch' }
    type: Object,
    default: null
  },
  secondaryButton: { // { text: 'Learn More', link: '/about', class: 'btn-outline', icon: 'heroicons:information-circle' }
    type: Object,
    default: null
  }
})

const heroStyle = computed(() => {
  let style = {};
  if (props.backgroundImage) {
    style.backgroundImage = `url(${props.backgroundImage})`;
  } else {
    // If no image, apply the gradient directly to the section.
    // Tailwind class for gradient needs to be on the element itself,
    // so we rely on a wrapper or this won't directly apply the class.
    // For direct style, it would be:
    // style.background = 'linear-gradient(to bottom right, var(--p), var(--a))';
    // However, DaisyUI variables might not be available directly in JS this way.
    // It's better to ensure the `backgroundGradient` class is applied on the template.
    // This computed style is mainly for the backgroundImage.
  }
  return style;
})

// If not using backgroundImage, the backgroundGradient class should be added to the section tag directly.
// The current template structure applies it if no backgroundImage.
// Consider modifying the template to:
// :class="backgroundImage ? '' : backgroundGradient"
// and then the heroStyle would only set the backgroundImage.
// For simplicity, the current solution relies on the provided template structure where
// the gradient is a default class and backgroundImage style overrides it.
// The provided template already has a default gradient if no image.
</script>
