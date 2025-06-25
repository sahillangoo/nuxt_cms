<template>
  <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <figure class="px-10 pt-10 h-56">
      <NuxtImg
        :src="image"
        :alt="title"
        width="400"
        height="220"
        class="rounded-xl h-full w-full object-cover"
      />
    </figure>
    <div class="card-body">
      <h3 class="card-title font-headings text-xl text-base-content">{{ title }}</h3>
      <p class="text-base-content/70">{{ description }}</p>
      <div class="card-actions justify-end mt-4">
        <NuxtLink
          :to="link"
          class="btn btn-sm btn-primary btn-outline hover:bg-primary hover:text-primary-content"
        >
          {{ buttonText || 'Learn More' }}
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
    default: 'Learn More'
  }
})
</script>
