<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Header -->
    <header class="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="navbar-start">
          <NuxtLink to="/" class="btn btn-ghost text-xl md:text-2xl font-headings font-bold text-primary px-2">
            SquadCoders
          </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 space-x-1">
            <li><NuxtLink to="/" class="btn btn-ghost btn-sm xl:btn-md [&.router-link-exact-active]:btn-active [&.router-link-exact-active]:btn-primary">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="btn btn-ghost btn-sm xl:btn-md [&.router-link-exact-active]:btn-active [&.router-link-exact-active]:btn-primary">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="btn btn-ghost btn-sm xl:btn-md [&.router-link-exact-active]:btn-active [&.router-link-exact-active]:btn-primary">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="btn btn-ghost btn-sm xl:btn-md [&.router-link-exact-active]:btn-active [&.router-link-exact-active]:btn-primary">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/demo" class="btn btn-ghost btn-sm xl:btn-md [&.router-link-exact-active]:btn-active [&.router-link-exact-active]:btn-primary">Demo</NuxtLink></li>
          </ul>
        </div>
        <div class="navbar-end space-x-2">
          <UiThemeSwitcher />
          <NuxtLink to="/contact" class="btn btn-secondary btn-sm hidden lg:flex">Contact Us</NuxtLink>
          <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
              <Icon name="heroicons:bars-3-20-solid" class="h-5 w-5" />
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
              <li><NuxtLink to="/" class="[&.router-link-exact-active]:active [&.router-link-exact-active]:text-primary">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="[&.router-link-exact-active]:active [&.router-link-exact-active]:text-primary">About Us</NuxtLink></li>
              <li><NuxtLink to="/services" class="[&.router-link-exact-active]:active [&.router-link-exact-active]:text-primary">Services</NuxtLink></li>
              <li><NuxtLink to="/portfolio" class="[&.router-link-exact-active]:active [&.router-link-exact-active]:text-primary">Portfolio</NuxtLink></li>
              <li><NuxtLink to="/demo" class="[&.router-link-exact-active]:active [&.router-link-exact-active]:text-primary">Demo</NuxtLink></li>
              <li class="mt-2"><NuxtLink to="/contact" class="btn btn-secondary btn-sm w-full">Contact Us</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-neutral text-neutral-content">
      <aside class="space-y-2">
        <NuxtLink to="/" class="text-2xl md:text-3xl font-headings font-bold text-primary">
          SquadCoders
        </NuxtLink>
        <p class="font-semibold text-sm md:text-base">
          Crafting digital excellence, one line of code at a time.
        </p>
        <p class="text-xs md:text-sm">Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </aside>
      <nav class="mb-4">
        <div class="grid grid-flow-col gap-4 md:gap-6 text-sm">
          <NuxtLink to="/about" class="link link-hover hover:text-primary">About Us</NuxtLink>
          <NuxtLink to="/services" class="link link-hover hover:text-primary">Services</NuxtLink>
          <NuxtLink to="/portfolio" class="link link-hover hover:text-primary">Portfolio</NuxtLink>
          <NuxtLink to="/contact" class="link link-hover hover:text-primary">Contact</NuxtLink>
          <NuxtLink to="/terms" class="link link-hover hover:text-primary">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="link link-hover hover:text-primary">Privacy</NuxtLink>
        </div>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="SquadCoders on X/Twitter" class="hover:text-primary transition-colors">
            <Icon name="simple-icons:x" class="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="SquadCoders on YouTube" class="hover:text-primary transition-colors">
            <Icon name="simple-icons:youtube" class="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="SquadCoders on Facebook" class="hover:text-primary transition-colors">
            <Icon name="simple-icons:facebook" class="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="SquadCoders on LinkedIn" class="hover:text-primary transition-colors">
            <Icon name="simple-icons:linkedin" class="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup>
// No script needed for mobile menu toggle as DaisyUI handles dropdown behavior
</script>
