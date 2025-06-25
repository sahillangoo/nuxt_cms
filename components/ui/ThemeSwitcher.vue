<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <!-- Theme icon -->
      <Icon
        :name="currentThemeIcon"
        class="w-5 h-5"
      />
    </label>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300">
      <li class="menu-title">
        <span>Choose Theme</span>
      </li>
      <li>
        <a
          @click="setTheme('light')"
          class="flex items-center gap-2"
          :class="{ 'active': currentTheme === 'light' }"
        >
          <Icon name="heroicons:sun" class="w-4 h-4" />
          Light
          <Icon
            v-if="currentTheme === 'light'"
            name="heroicons:check"
            class="w-4 h-4 ml-auto text-primary"
          />
        </a>
      </li>
      <li>
        <a
          @click="setTheme('dark')"
          class="flex items-center gap-2"
          :class="{ 'active': currentTheme === 'dark' }"
        >
          <Icon name="heroicons:moon" class="w-4 h-4" />
          Dark
          <Icon
            v-if="currentTheme === 'dark'"
            name="heroicons:check"
            class="w-4 h-4 ml-auto text-primary"
          />
        </a>
      </li>
      <li>
        <a
          @click="setTheme('system')"
          class="flex items-center gap-2"
          :class="{ 'active': currentTheme === 'system' }"
        >
          <Icon name="heroicons:computer-desktop" class="w-4 h-4" />
          System
          <Icon
            v-if="currentTheme === 'system'"
            name="heroicons:check"
            class="w-4 h-4 ml-auto text-primary"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const currentTheme = ref('system')
const isDarkMode = ref(false)

// Computed property for the current theme icon
const currentThemeIcon = computed(() => {
  if (currentTheme.value === 'light') return 'heroicons:sun'
  if (currentTheme.value === 'dark') return 'heroicons:moon'
  return 'heroicons:computer-desktop'
})

// Function to detect system preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Function to apply theme to HTML element
const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    const htmlElement = document.documentElement

    // Remove existing theme attributes
    htmlElement.removeAttribute('data-theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark')
      isDarkMode.value = true
    } else if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'light')
      isDarkMode.value = false
    } else {
      // System theme
      const systemTheme = getSystemTheme()
      htmlElement.setAttribute('data-theme', systemTheme)
      isDarkMode.value = systemTheme === 'dark'
    }
  }
}

// Function to set theme
const setTheme = (theme) => {
  currentTheme.value = theme
  applyTheme(theme)

  // Save to localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme-preference', theme)
  }
}

// Initialize theme on component mount
onMounted(() => {
  // Get saved preference or default to system
  let savedTheme = 'system'
  if (typeof localStorage !== 'undefined') {
    savedTheme = localStorage.getItem('theme-preference') || 'system'
  }

  currentTheme.value = savedTheme
  applyTheme(savedTheme)

  // Listen for system theme changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (currentTheme.value === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    // Cleanup listener on component unmount
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }
})

// Apply theme on server side (for SSR)
if (typeof document !== 'undefined') {
  // This runs on client side
  const savedTheme = localStorage.getItem('theme-preference') || 'system'
  applyTheme(savedTheme)
}
</script>

<style scoped>
/* Additional styling if needed */
.dropdown-content {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
