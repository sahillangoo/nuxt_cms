<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <div :class="`p-3 ${bgColor} ${textColor} rounded-full`">
        <Icon :name="iconName" class="w-6 h-6" />
      </div>
    </div>
    <div>
      <h3 class="text-lg font-semibold font-headings text-base-content">{{ title }}</h3>
      <div v-for="(item, index) in items" :key="index">
        <p v-if="!item.link" class="text-base-content/70">{{ item.text }}</p>
        <p v-else class="text-base-content/70 hover:text-secondary transition-colors">
          <a :href="item.link">{{ item.text }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  iconName: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-primary'
  },
  textColor: {
    type: String,
    default: 'text-primary-content'
  }
})
</script>
