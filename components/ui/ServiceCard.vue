<template>
  <div class="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out rounded-xl border border-base-300 hover:border-primary/30 group overflow-hidden flex flex-col h-full">
    <figure class="aspect-video overflow-hidden">
      <NuxtImg
        :src="image"
        :alt="title"
        width="400"
        height="225"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="sm:350px md:400px"
        format="webp"
        loading="lazy"
        :modifiers="{ quality: 80 }"
      />
    </figure>
    <div class="card-body p-5 md:p-6 flex flex-col flex-grow">
      <h3 class="card-title font-headings text-lg md:text-xl text-base-content group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
        {{ title }}
      </h3>
      <p class="text-base-content/75 text-sm flex-grow mt-1 mb-3 line-clamp-3 sm:line-clamp-4">
        {{ description }}
      </p>
      <div class="card-actions justify-start mt-auto pt-2">
        <NuxtLink
          :to="link"
          class="btn btn-sm btn-primary group-hover:btn-secondary"
        >
          {{ buttonText || 'Learn More' }}
          <Icon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: { // Keep it concise, around 2-3 lines for best visual
    type: String,
    required: true
  },
  image: { // Recommended aspect ratio 16:9
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Learn More'
  }
})
</script>
