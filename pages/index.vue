<template>
  <div>
    <Head>
      <Title>Home</Title>
      <Meta name="description" content="SquadCoders: Expert web development, UI/UX design, and digital solutions. Let's build your vision." />
    </Head>

    <!-- Hero Section -->
    <section class="hero min-h-[70vh] bg-gradient-to-br from-primary to-accent">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-5xl font-bold font-headings text-white">
            Crafting Digital Excellence, <br />One Line of Code at a Time.
          </h1>
          <p class="mb-8 text-lg text-gray-200">
            SquadCoders is your dedicated partner for innovative web development, intuitive UI/UX design, and impactful digital solutions. Let's build your vision.
          </p>
          <NuxtLink to="/contact" class="btn btn-secondary btn-lg hover:btn-primary">Get a Free Quote</NuxtLink>
          <NuxtLink to="/services" class="btn btn-outline btn-lg ml-4 text-white border-white hover:bg-white hover:text-primary">Our Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us / Core Values -->
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-neutral">Why Partner with <span class="text-primary">SquadCoders</span>?</h2>
          <p class="mt-4 text-lg text-squad-medium-gray max-w-2xl mx-auto">
            We're not just coders; we're architects of digital experiences. We blend creativity with technology to deliver solutions that drive results.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="card-body items-center text-center">
              <!-- Placeholder for NuxtIcon -->
              <div class="p-4 bg-primary rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 12h9.75m-9.75 6h9.75M3.75 6H7.5m3 12V6.75M3.75 12h3.75m-3.75 6h3.75m0-6v6m0-12V6" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-neutral">Innovative Solutions</h3>
              <p class="text-squad-medium-gray">We leverage the latest technologies to build cutting-edge web applications tailored to your unique needs.</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="card-body items-center text-center">
              <div class="p-4 bg-primary rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.696v4.992h4.992v-4.993M2.985 19.644l-2.47-2.471A8.25 8.25 0 0 1 5.454 5.454L7.925 3m11.050 2.454 2.47 2.471a8.25 8.25 0 0 1-5.454 14.141l-2.47-2.471m0 0a4.5 4.5 0 0 1-6.364 0l-2.47-2.471" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-neutral">User-Centric Design</h3>
              <p class="text-squad-medium-gray">Our designs prioritize user experience, ensuring your audience is engaged and delighted.</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="card-body items-center text-center">
              <div class="p-4 bg-primary rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-neutral">Collaborative Approach</h3>
              <p class="text-squad-medium-gray">We work closely with you at every step, ensuring transparency and alignment with your goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 md:py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-neutral">Our Core <span class="text-secondary">Services</span></h2>
          <p class="mt-4 text-lg text-squad-medium-gray max-w-2xl mx-auto">
            From concept to launch, we offer a comprehensive suite of services to bring your digital ideas to life.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card bg-base-100 shadow-lg">
            <figure class="px-10 pt-10">
              <!-- Placeholder image -->
              <img src="https://via.placeholder.com/400x200/00A99D/FFFFFF?text=Web+Development" alt="Web Development" class="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-neutral">Custom Web Development</h3>
              <p class="text-squad-medium-gray">Building robust, scalable, and high-performance websites and web applications tailored to your business.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#web-development" class="btn btn-sm btn-primary btn-outline">Learn More</NuxtLink>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg">
            <figure class="px-10 pt-10">
              <img src="https://via.placeholder.com/400x200/FF6F00/FFFFFF?text=UI/UX+Design" alt="UI/UX Design" class="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-neutral">UI/UX Design</h3>
              <p class="text-squad-medium-gray">Creating intuitive, engaging, and aesthetically pleasing user interfaces that enhance user experience.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#ui-ux-design" class="btn btn-sm btn-primary btn-outline">Learn More</NuxtLink>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg md:col-span-2 lg:col-span-1">
             <figure class="px-10 pt-10">
              <img src="https://via.placeholder.com/400x200/6A0DAD/FFFFFF?text=SEO+Optimization" alt="SEO Optimization" class="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-neutral">SEO & Digital Strategy</h3>
              <p class="text-squad-medium-gray">Optimizing your online presence to rank higher, attract more traffic, and convert visitors into customers.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#seo" class="btn btn-sm btn-primary btn-outline">Learn More</NuxtLink>
              </div>
            </div>
          </div>
        </div>
         <div class="text-center mt-12">
            <NuxtLink to="/services" class="btn btn-primary">View All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Portfolio Sneak Peek -->
    <section class="py-16 md:py-24 bg-base-100">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold font-headings text-neutral">Our Recent <span class="text-primary">Work</span></h2>
                <p class="mt-4 text-lg text-squad-medium-gray max-w-2xl mx-auto">
                    We take pride in our work. Here are a few examples of how we've helped our clients succeed.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card card-compact bg-base-200 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="https://via.placeholder.com/600x400/00A99D/FFFFFF?text=Project+Alpha" alt="Project Alpha" /></figure>
                    <div class="card-body justify-end">
                        <h3 class="card-title text-white font-headings">Project Alpha</h3>
                        <p class="text-gray-300 text-sm">E-commerce platform development.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-alpha" class="btn btn-xs btn-secondary">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="https://via.placeholder.com/600x400/FF6F00/FFFFFF?text=Project+Beta" alt="Project Beta" /></figure>
                    <div class="card-body justify-end">
                        <h3 class="card-title text-white font-headings">Project Beta</h3>
                        <p class="text-gray-300 text-sm">Corporate website redesign.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-beta" class="btn btn-xs btn-secondary">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="https://via.placeholder.com/600x400/6A0DAD/FFFFFF?text=Project+Gamma" alt="Project Gamma" /></figure>
                    <div class="card-body justify-end">
                        <h3 class="card-title text-white font-headings">Project Gamma</h3>
                        <p class="text-gray-300 text-sm">Mobile app UI/UX design.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-gamma" class="btn btn-xs btn-secondary">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <NuxtLink to="/portfolio" class="btn btn-primary">Explore Full Portfolio</NuxtLink>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-accent to-secondary text-neutral-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings text-white">Ready to Start Your Project?</h2>
        <p class="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          Let's discuss how SquadCoders can help you achieve your digital goals. We're excited to hear about your ideas!
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none">
            Let's Talk
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// No specific script needed for this page yet.
// Could add NuxtIcon component later if needed.
// import { NuxtIcon } from '#components' // If using @nuxt/icon for inline SVGs
</script>

<style scoped>
/* Scoped styles for homepage if needed */
.hero {
    background-size: cover;
    background-position: center;
}
</style>
