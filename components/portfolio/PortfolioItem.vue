<template>
  <div class="card card-compact bg-base-200 shadow-lg hover:shadow-xl image-full transition-all duration-300 ease-in-out group h-72 md:h-80 focus-within:ring-4 focus-within:ring-primary/50 rounded-xl overflow-hidden">
    <figure class="h-full">
      <NuxtImg
        :src="image"
        :alt="title"
        width="600"
        height="400"
        class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
        sizes="sm:300px md:400px lg:500px"
        format="webp"
        loading="lazy"
        :modifiers="{
          quality: 75,
          brightness: -5 // Slightly darken image for better text contrast on gradient
        }"
      />
    </figure>
    <div class="card-body justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6">
      <h3 class="card-title text-base-100 font-headings text-lg lg:text-xl drop-shadow-md">{{ title }}</h3>
      <p class="text-base-300/90 text-xs md:text-sm drop-shadow-sm line-clamp-2">{{ description }}</p>
      <div class="card-actions justify-end mt-2">
        <NuxtLink
          :to="link"
          :class="`btn btn-sm whitespace-nowrap ${buttonClassResolved} hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50`"
        >
          {{ buttonText || 'View Details' }}
          <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </div>
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
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'View Details'
  },
  buttonClass: {
    type: String,
    default: 'btn-primary' // Defaulting to primary for consistency
  }
})

const buttonClassResolved = computed(() => {
  if (props.buttonClass.includes('btn-primary') || props.buttonClass.includes('btn-secondary') || props.buttonClass.includes('btn-accent')) {
    return props.buttonClass;
  }
  return 'btn-primary'; // Fallback to primary if no valid brand color btn class is passed
});
</script>
