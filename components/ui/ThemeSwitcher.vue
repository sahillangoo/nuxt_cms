<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle" aria-label="Choose theme">
      <!-- Theme icon -->
      <Icon
        :name="currentThemeIcon"
        class="w-5 h-5"
      />
    </label>
    <ul tabindex="0" class="dropdown-content z-[10] menu menu-sm p-2 shadow-xl bg-base-100 rounded-box w-48 border border-base-300">
      <li class="menu-title px-4 py-2 text-xs">
        <span>Theme</span>
      </li>
      <li>
        <button
          @click="setTheme('light')"
          class="flex items-center gap-2 w-full text-left"
          :class="{ 'bg-primary text-primary-content focus:bg-primary focus:text-primary-content': effectiveTheme === 'light' }"
        >
          <Icon name="heroicons:sun-20-solid" class="w-4 h-4" />
          Light
          <Icon
            v-if="effectiveTheme === 'light'"
            name="heroicons:check-20-solid"
            class="w-4 h-4 ml-auto"
          />
        </button>
      </li>
      <li>
        <button
          @click="setTheme('dark')"
          class="flex items-center gap-2 w-full text-left"
          :class="{ 'bg-primary text-primary-content focus:bg-primary focus:text-primary-content': effectiveTheme === 'dark' }"
        >
          <Icon name="heroicons:moon-20-solid" class="w-4 h-4" />
          Dark
          <Icon
            v-if="effectiveTheme === 'dark'"
            name="heroicons:check-20-solid"
            class="w-4 h-4 ml-auto"
          />
        </button>
      </li>
      <li>
        <button
          @click="setTheme('system')"
          class="flex items-center gap-2 w-full text-left"
          :class="{ 'bg-primary text-primary-content focus:bg-primary focus:text-primary-content': userPreference === 'system' }"
        >
          <Icon name="heroicons:computer-desktop-20-solid" class="w-4 h-4" />
          System
          <Icon
            v-if="userPreference === 'system'"
            name="heroicons:check-20-solid"
            class="w-4 h-4 ml-auto"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const userPreference = ref('system') // 'light', 'dark', or 'system'
const systemTheme = ref('light') // 'light' or 'dark' based on OS

// The actual theme being applied (light or dark)
const effectiveTheme = computed(() => {
  if (userPreference.value === 'system') {
    return systemTheme.value
  }
  return userPreference.value
})

const currentThemeIcon = computed(() => {
  if (userPreference.value === 'light') return 'heroicons:sun-20-solid'
  if (userPreference.value === 'dark') return 'heroicons:moon-20-solid'
  // System preference icon changes based on current system theme
  return systemTheme.value === 'dark' ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid';
})

const updateSystemTheme = () => {
  if (typeof window !== 'undefined') {
    systemTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
}

const applyHtmlTheme = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', effectiveTheme.value)
  }
}

const setTheme = (themeChoice) => {
  userPreference.value = themeChoice
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme-preference', themeChoice)
  }
  applyHtmlTheme()
}

let mediaQueryListener = null

onMounted(() => {
  updateSystemTheme() // Initial check
  const savedPref = typeof localStorage !== 'undefined' ? localStorage.getItem('theme-preference') : null
  userPreference.value = savedPref || 'system'
  applyHtmlTheme()

  if (typeof window !== 'undefined') {
    mediaQueryListener = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      updateSystemTheme()
      if (userPreference.value === 'system') {
        applyHtmlTheme()
      }
    }
    mediaQueryListener.addEventListener('change', handleChange)
    onUnmounted(() => {
      mediaQueryListener.removeEventListener('change', handleChange)
    })
  }
})

// No SSR data-theme needed here as it's client-preference driven
</script>
