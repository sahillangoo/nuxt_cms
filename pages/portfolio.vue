<template>
  <div>
    <Head>
      <Title>Our Portfolio</Title>
      <Meta name="description" content="Explore a selection of our finest projects at SquadCoders. See how we've helped businesses achieve their digital goals with innovative web solutions." />
    </Head>

    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold font-headings text-primary sm:text-5xl">
          Our Portfolio
        </h1>
        <p class="mt-4 text-lg text-squad-medium-gray sm:text-xl max-w-2xl mx-auto">
          A showcase of our passion, creativity, and commitment to delivering outstanding digital experiences.
        </p>
      </div>
    </section>

    <!-- Portfolio Introduction & Filters (Placeholder) -->
    <section class="py-8 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-squad-dark-gray mb-6">
          Browse through some of our selected projects. We've had the privilege of working with diverse clients across various industries.
        </p>
        <!-- Placeholder for filter buttons -->
        <div class="tabs tabs-boxed inline-block mb-8 md:mb-12">
          <a class="tab tab-active">All Projects</a>
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
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/00A99D/FFFFFF?text=Project+Alpha" alt="Project Alpha" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Alpha</h3>
              <p class="text-gray-300 text-sm mb-4">E-commerce Platform Development</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-alpha" class="btn btn-sm btn-primary">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 2 -->
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/FF6F00/FFFFFF?text=Project+Beta" alt="Project Beta" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Beta</h3>
              <p class="text-gray-300 text-sm mb-4">Corporate Website Redesign</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-beta" class="btn btn-sm btn-secondary">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 3 -->
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/6A0DAD/FFFFFF?text=Project+Gamma" alt="Project Gamma" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Gamma</h3>
              <p class="text-gray-300 text-sm mb-4">Mobile App UI/UX</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-gamma" class="btn btn-sm btn-accent text-white">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 4 -->
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/007BFF/FFFFFF?text=Project+Delta" alt="Project Delta" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Delta</h3>
              <p class="text-gray-300 text-sm mb-4">SaaS Platform Branding</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-delta" class="btn btn-sm btn-primary">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 5 -->
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/28A745/FFFFFF?text=Project+Epsilon" alt="Project Epsilon" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Epsilon</h3>
              <p class="text-gray-300 text-sm mb-4">Non-profit Organization Website</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-epsilon" class="btn btn-sm btn-secondary">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 6 -->
          <div class="card bg-base-200 shadow-xl image-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure><img src="https://via.placeholder.com/600x400/DC3545/FFFFFF?text=Project+Zeta" alt="Project Zeta" class="w-full h-full object-cover" /></figure>
            <div class="card-body items-center justify-center text-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300">
              <h3 class="card-title text-2xl font-headings text-white mb-2">Project Zeta</h3>
              <p class="text-gray-300 text-sm mb-4">Interactive Web Application</p>
              <div class="card-actions">
                <NuxtLink to="/portfolio/project-zeta" class="btn btn-sm btn-accent text-white">View Case Study</NuxtLink>
              </div>
            </div>
          </div>

        </div>
        <!-- Pagination Placeholder -->
        <div class="text-center mt-12 md:mt-16">
            <div class="join">
                <button class="join-item btn">«</button>
                <button class="join-item btn btn-primary">Page 1</button>
                <button class="join-item btn">Page 2</button>
                <button class="join-item btn">Page 3</button>
                <button class="join-item btn">»</button>
            </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-neutral-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings text-white">Have a Project in Mind?</h2>
        <p class="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          Let's collaborate to bring your vision to life. Our squad is ready for the next challenge!
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none">
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
</script>

<style scoped>
/* Scoped styles for portfolio page if needed */
.image-full figure img {
  transition: transform 0.5s ease; /* Smooth zoom for image itself if desired */
}
.group:hover .image-full figure img {
  /* transform: scale(1.1); */ /* Example: Slight zoom on image on card hover */
}
</style>
