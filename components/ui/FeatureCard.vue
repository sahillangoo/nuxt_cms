<template>
  <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div class="card-body items-center text-center">
      <div class="p-4 bg-primary text-primary-content rounded-full inline-block mb-4">
        <Icon :name="iconName" class="w-8 h-8" />
      </div>
      <h3 class="card-title font-headings text-xl text-base-content">{{ title }}</h3>
      <p class="text-base-content/70">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    required: true
  }
})
</script>
