<template>
  <div>
    <Head>
      <Title>Our Portfolio | SquadCoders</Title>
      <Meta name="description" content="Explore a selection of our finest projects at SquadCoders. See how we've helped businesses achieve their digital goals with innovative web solutions." />
    </Head>

    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold font-headings text-primary sm:text-5xl">
          Our Portfolio
        </h1>
        <p class="mt-4 text-lg text-base-content/70 sm:text-xl max-w-2xl mx-auto">
          A showcase of our passion, creativity, and commitment to delivering outstanding digital experiences.
        </p>
      </div>
    </section>

    <!-- Portfolio Introduction & Filters -->
    <section class="py-8 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-base-content/80 mb-6">
          Browse through some of our selected projects. We've had the privilege of working with diverse clients across various industries.
        </p>
        <div class="tabs tabs-boxed inline-block mb-8 md:mb-12">
          <a class="tab tab-active [--tab-bg:var(--fallback-p,oklch(var(--p)/1))] [--tab-text-color:var(--fallback-pc,oklch(var(--pc)/1))]">All Projects</a>
          <a class="tab">Web Development</a>
          <a class="tab">UI/UX Design</a>
          <a class="tab">Branding</a>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="pb-16 md:pb-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          <!-- Portfolio Item 1 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?modern,website,design,clean" alt="Project Alpha - E-commerce Platform Development" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Alpha</h3>
              <p class="text-base-300 text-sm mb-4">E-commerce Platform Development</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-alpha" class="btn btn-sm btn-primary hover:btn-primary-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 2 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?mobile,application,interface" alt="Project Beta - Corporate Website Redesign" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Beta</h3>
              <p class="text-base-300 text-sm mb-4">Corporate Website Redesign</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-beta" class="btn btn-sm btn-secondary hover:btn-secondary-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 3 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?tech,startup,dashboard" alt="Project Gamma - Mobile App UI/UX" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Gamma</h3>
              <p class="text-base-300 text-sm mb-4">Mobile App UI/UX</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-gamma" class="btn btn-sm btn-accent text-accent-content hover:btn-accent-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 4 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?ecommerce,product,online,store" alt="Project Delta - SaaS Platform Branding" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Delta</h3>
              <p class="text-base-300 text-sm mb-4">SaaS Platform Branding</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-delta" class="btn btn-sm btn-primary hover:btn-primary-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 5 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?data,visualization,graph,charts" alt="Project Epsilon - Non-profit Organization Website" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Epsilon</h3>
              <p class="text-base-300 text-sm mb-4">Non-profit Organization Website</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-epsilon" class="btn btn-sm btn-secondary hover:btn-secondary-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 6 -->
          <div class="card h-80 bg-base-300 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><NuxtImg src="https://source.unsplash.com/600x400/?creative,agency,branding,design" alt="Project Zeta - Interactive Web Application" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-base-100 mb-2">Project Zeta</h3>
              <p class="text-base-300 text-sm mb-4">Interactive Web Application</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-zeta" class="btn btn-sm btn-accent text-accent-content hover:btn-accent-focus">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

        </div>
        <!-- Pagination -->
        <div class="text-center mt-12 md:mt-16">
            <div class="join">
                <button class="join-item btn btn-outline">«</button>
                <button class="join-item btn btn-primary">Page 1</button>
                <button class="join-item btn btn-outline">Page 2</button>
                <button class="join-item btn btn-outline">Page 3</button>
                <button class="join-item btn btn-outline">»</button>
            </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings">Have a Project in Mind?</h2>
        <p class="mt-4 text-lg text-primary-content/80 max-w-xl mx-auto">
          Let's collaborate to bring your vision to life. Our squad is ready for the next challenge!
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg btn-neutral hover:btn-neutral-focus">
            Discuss Your Project
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Page-specific logic can go here
// For example, fetching portfolio items from an API or Nuxt Content
// For now, items are hardcoded.
// import { ref } from 'vue';
// const activeTab = ref('All Projects');
// const setActiveTab = (tabName) => activeTab.value = tabName;
</script>

<style scoped>
/* Scoped styles for portfolio page if needed */
/* The .image-full figure img transition is nice, but DaisyUI's card already has transitions.
   If more specific image zoom is needed, it can be added here.
   For now, focusing on DaisyUI classes.
*/
</style>
