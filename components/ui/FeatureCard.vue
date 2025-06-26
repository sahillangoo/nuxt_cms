<template>
  <div class="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out rounded-xl border border-base-300 hover:border-primary/30 group">
    <div class="card-body items-center text-center p-6 md:p-8">
      <div class="p-3 sm:p-4 bg-primary text-primary-content rounded-full inline-block mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg">
        <Icon :name="iconName" class="w-7 h-7 sm:w-8 sm:h-8" />
      </div>
      <h3 class="card-title font-headings text-lg sm:text-xl text-base-content group-hover:text-primary transition-colors duration-300">{{ title }}</h3>
      <p class="text-base-content/75 text-sm sm:text-base">{{ description }}</p>
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
  iconName: { // e.g. heroicons:light-bulb-20-solid
    type: String,
    required: true
  }
})
</script>
