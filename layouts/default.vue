<template>
  <div data-theme="squadcoderslight" class="min-h-screen flex flex-col font-sans">
    <!-- Header -->
    <header class="bg-base-100 shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-headings font-bold text-primary">
              SquadCoders
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
              <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
              <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-secondary btn-sm">Contact Us</NuxtLink>
            </div>
          </div>
          <div class="md:hidden flex items-center">
            <!-- Mobile menu button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-3.75 5.25h-9.75" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="mobileMenuOpen" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink to="/" class="nav-link-mobile" @click="mobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link-mobile" @click="mobileMenuOpen = false">About Us</NuxtLink>
          <NuxtLink to="/services" class="nav-link-mobile" @click="mobileMenuOpen = false">Services</NuxtLink>
          <NuxtLink to="/portfolio" class="nav-link-mobile" @click="mobileMenuOpen = false">Portfolio</NuxtLink>
          <NuxtLink to="/contact" class="block w-full text-left px-3 py-2 mt-1 rounded-md text-base font-medium btn btn-secondary btn-sm" @click="mobileMenuOpen = false">Contact Us</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-neutral text-neutral-content p-10">
      <div class="container mx-auto text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 class="font-headings font-bold text-lg mb-2 text-primary">SquadCoders</h5>
            <p class="text-sm text-base-300">Crafting digital excellence, one line of code at a time.</p>
          </div>
          <div>
            <h5 class="font-headings font-bold text-lg mb-2">Quick Links</h5>
            <ul class="space-y-1">
              <li><NuxtLink to="/about" class="link link-hover text-sm">About Us</NuxtLink></li>
              <li><NuxtLink to="/services" class="link link-hover text-sm">Services</NuxtLink></li>
              <li><NuxtLink to="/portfolio" class="link link-hover text-sm">Portfolio</NuxtLink></li>
              <li><NuxtLink to="/contact" class="link link-hover text-sm">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h5 class="font-headings font-bold text-lg mb-2">Connect</h5>
            <p class="text-sm">123 Coding Lane, Dev City, TX 75001</p>
            <p class="text-sm">contact@squadcoders.dev</p>
            {/* Add social media icons here later if needed */}
          </div>
        </div>
        <div class="border-t border-base-300 pt-8">
          <p class="text-sm">&copy; {{ new Date().getFullYear() }} SquadCoders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-md text-sm font-medium text-neutral hover:text-primary hover:bg-base-200 transition-colors;
}
.nav-link.router-link-exact-active {
  @apply text-primary font-semibold;
}

.nav-link-mobile {
  @apply block px-3 py-2 rounded-md text-base font-medium text-neutral hover:text-primary hover:bg-base-200 transition-colors;
}
.nav-link-mobile.router-link-exact-active {
  @apply text-primary bg-base-200;
}
</style>
