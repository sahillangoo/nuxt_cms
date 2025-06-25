<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Header -->
    <header class="navbar bg-base-100 shadow-md sticky top-0 z-50 container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="navbar-start">
        <NuxtLink to="/" class="btn btn-ghost text-2xl font-headings font-bold text-primary">
          SquadCoders
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/" class="btn btn-ghost [&.router-link-exact-active]:btn-active">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="btn btn-ghost [&.router-link-exact-active]:btn-active">About Us</NuxtLink></li>
          <li><NuxtLink to="/services" class="btn btn-ghost [&.router-link-exact-active]:btn-active">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="btn btn-ghost [&.router-link-exact-active]:btn-active">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/demo" class="btn btn-ghost [&.router-link-exact-active]:btn-active">Demo</NuxtLink></li>
        </ul>
      </div>
      <div class="navbar-end">
        <UiThemeSwitcher class="mr-2" />
        <NuxtLink to="/contact" class="btn btn-secondary btn-sm hidden lg:flex">Contact Us</NuxtLink>
        <div class="dropdown dropdown-end lg:hidden">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/" class="[&.router-link-exact-active]:active">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="[&.router-link-exact-active]:active">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="[&.router-link-exact-active]:active">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="[&.router-link-exact-active]:active">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/demo" class="[&.router-link-exact-active]:active">Demo</NuxtLink></li>
            <li><NuxtLink to="/contact" class="btn btn-secondary btn-sm w-full mt-2">Contact Us</NuxtLink></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-neutral text-neutral-content">
      <aside>
        <NuxtLink to="/" class="text-2xl font-headings font-bold text-primary">
          SquadCoders
        </NuxtLink>
        <p class="font-bold">
          Crafting digital excellence, one line of code at a time.
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <NuxtLink to="/about" class="link link-hover">About Us</NuxtLink>
          <NuxtLink to="/services" class="link link-hover">Services</NuxtLink>
          <NuxtLink to="/portfolio" class="link link-hover">Portfolio</NuxtLink>
          <NuxtLink to="/contact" class="link link-hover">Contact</NuxtLink>
          <NuxtLink to="/terms" class="link link-hover">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="link link-hover">Privacy</NuxtLink>
        </div>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.455 0 1.613.823 3.043 2.074 3.863-.766-.024-1.483-.233-2.11-.583v.06c0 2.256 1.606 4.136 3.738 4.564-.39.107-.803.164-1.227.164-.3 0-.592-.028-.875-.083.593 1.85 2.307 3.199 4.34 3.236-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.572 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.603.91-.658 1.7-1.475 2.323-2.408z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup>
// No script needed for mobile menu toggle as DaisyUI handles dropdown behavior
</script>
