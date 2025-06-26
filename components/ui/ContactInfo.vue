<template>
  <div class="flex items-start space-x-4 p-1 group">
    <div class="flex-shrink-0">
      <div :class="`p-3 ${bgColorResolved} ${textColorResolved} rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`">
        <Icon :name="iconName" class="w-6 h-6" />
      </div>
    </div>
    <div class="pt-0.5">
      <h3 class="text-md sm:text-lg font-semibold font-headings text-base-content group-hover:text-primary transition-colors duration-300">{{ title }}</h3>
      <div v-for="(item, index) in items" :key="index" class="text-sm sm:text-base">
        <p v-if="!item.link" class="text-base-content/75">{{ item.text }}</p>
        <a v-else :href="item.link" class="text-base-content/75 hover:text-secondary hover:underline transition-colors duration-300">
          {{ item.text }}
        </a>
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
  items: { // Array of objects like { text: 'string', link?: 'string' }
    type: Array,
    required: true
  },
  iconName: { // e.g., 'heroicons:phone'
    type: String,
    required: true
  },
  bgColor: { // e.g., 'bg-primary', 'bg-secondary', 'bg-accent'
    type: String,
    default: 'bg-primary'
  },
  textColor: { // e.g., 'text-primary-content'
    type: String,
    default: '' // Will be derived if not set
  }
})

const bgColorResolved = computed(() => props.bgColor || 'bg-primary');

const textColorResolved = computed(() => {
  if (props.textColor) return props.textColor;
  if (props.bgColor.includes('primary')) return 'text-primary-content';
  if (props.bgColor.includes('secondary')) return 'text-secondary-content';
  if (props.bgColor.includes('accent')) return 'text-accent-content';
  if (props.bgColor.includes('neutral')) return 'text-neutral-content';
  // Fallback for other bg colors if needed, or default to a sensible one
  return 'text-base-content'; // Or a specific light/dark text based on theme
});

</script>
