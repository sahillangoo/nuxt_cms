export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    // Get saved theme preference or default to system
    const savedTheme = localStorage.getItem('theme-preference') || 'system'

    // Function to get system theme preference
    const getSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Function to apply theme
    const applyTheme = (theme: string) => {
      const htmlElement = document.documentElement

      if (theme === 'system') {
        const systemTheme = getSystemTheme()
        htmlElement.setAttribute('data-theme', systemTheme)
      } else {
        htmlElement.setAttribute('data-theme', theme)
      }
    }

    // Apply theme immediately to prevent flash
    applyTheme(savedTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      const currentTheme = localStorage.getItem('theme-preference') || 'system'
      if (currentTheme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
  }
})
