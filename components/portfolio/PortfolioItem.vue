<template>
  <div class="card card-compact bg-base-300 shadow-xl image-full transform hover:scale-105 transition-transform duration-300 ease-in-out h-64 md:h-72 group">
    <figure>
      <NuxtImg
        :src="image"
        :alt="title"
        width="600"
        height="400"
        class="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
      />
    </figure>
    <div class="card-body justify-end bg-gradient-to-t from-black/70 to-transparent">
      <h3 class="card-title text-base-100 font-headings">{{ title }}</h3>
      <p class="text-base-300 text-sm">{{ description }}</p>
      <div class="card-actions justify-end">
        <NuxtLink
          :to="link"
          :class="`btn btn-xs ${buttonClass} hover:btn-primary-focus`"
        >
          {{ buttonText || 'View Details' }}
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
    default: 'View Details'
  },
  buttonClass: {
    type: String,
    default: 'btn-secondary'
  }
})
</script>
