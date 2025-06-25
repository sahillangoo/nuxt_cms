<template>
  <div>
    <Head>
      <Title>Home | SquadCoders</Title>
      <Meta name="description" content="SquadCoders: Expert web development, UI/UX design, and digital solutions. Let's build your vision." />
    </Head>

    <!-- Hero Section -->
    <section class="hero min-h-[70vh] bg-gradient-to-br from-primary to-accent" style="background-image: url(https://source.unsplash.com/1600x900/?technology,abstract,code);">
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-5xl font-bold font-headings text-base-100">
            Crafting Digital Excellence, <br />One Line of Code at a Time.
          </h1>
          <p class="mb-8 text-lg text-base-200">
            SquadCoders is your dedicated partner for innovative web development, intuitive UI/UX design, and impactful digital solutions. Let's build your vision.
          </p>
          <NuxtLink to="/contact" class="btn btn-secondary btn-lg hover:btn-primary-focus">Get a Free Quote</NuxtLink>
          <NuxtLink to="/services" class="btn btn-outline btn-lg ml-4 text-base-100 border-base-100 hover:bg-base-100 hover:text-primary-content">Our Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us / Core Values -->
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Why Partner with <span class="text-primary">SquadCoders</span>?</h2>
          <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            We're not just coders; we're architects of digital experiences. We blend creativity with technology to deliver solutions that drive results.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div class="card-body items-center text-center">
              <div class="p-4 bg-primary text-primary-content rounded-full inline-block mb-4">
                <!-- Using Heroicon: Light Bulb for Innovative Solutions -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75v-.75m0 0A7.5 7.5 0 0112 15m0 0A7.5 7.5 0 0118 18v.75m0 0A2.25 2.25 0 0015.75 21H8.25a2.25 2.25 0 00-2.25-2.25h.008c.294 0 .556-.1-.762-.274a2.12 2.12 0 01-.81-.633A7.5 7.5 0 0112 15z" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-base-content">Innovative Solutions</h3>
              <p class="text-base-content/70">We leverage the latest technologies to build cutting-edge web applications tailored to your unique needs.</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div class="card-body items-center text-center">
              <div class="p-4 bg-primary text-primary-content rounded-full inline-block mb-4">
                <!-- Using Heroicon: Users for User-Centric Design -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-base-content">User-Centric Design</h3>
              <p class="text-base-content/70">Our designs prioritize user experience, ensuring your audience is engaged and delighted.</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div class="card-body items-center text-center">
              <div class="p-4 bg-primary text-primary-content rounded-full inline-block mb-4">
                 <!-- Using Heroicon: Code Bracket for Collaborative Approach -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 class="card-title font-headings text-xl text-base-content">Collaborative Approach</h3>
              <p class="text-base-content/70">We work closely with you at every step, ensuring transparency and alignment with your goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 md:py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Our Core <span class="text-secondary">Services</span></h2>
          <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            From concept to launch, we offer a comprehensive suite of services to bring your digital ideas to life.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <figure class="px-10 pt-10 h-56">
              <NuxtImg src="https://source.unsplash.com/400x220/?web,development,coding" alt="Custom Web Development" width="400" height="220" class="rounded-xl h-full w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-base-content">Custom Web Development</h3>
              <p class="text-base-content/70">Building robust, scalable, and high-performance websites and web applications tailored to your business.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#web-development" class="btn btn-sm btn-primary btn-outline hover:bg-primary hover:text-primary-content">Learn More</NuxtLink>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <figure class="px-10 pt-10 h-56">
              <NuxtImg src="https://source.unsplash.com/400x220/?ui,ux,design,interface" alt="UI/UX Design" width="400" height="220" class="rounded-xl h-full w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-base-content">UI/UX Design</h3>
              <p class="text-base-content/70">Creating intuitive, engaging, and aesthetically pleasing user interfaces that enhance user experience.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#ui-ux-design" class="btn btn-sm btn-primary btn-outline hover:bg-primary hover:text-primary-content">Learn More</NuxtLink>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg md:col-span-2 lg:col-span-1 hover:shadow-xl transition-shadow duration-300 ease-in-out">
             <figure class="px-10 pt-10 h-56">
              <NuxtImg src="https://source.unsplash.com/400x220/?seo,digital,strategy,analytics" alt="SEO & Digital Strategy" width="400" height="220" class="rounded-xl h-full w-full object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title font-headings text-xl text-base-content">SEO & Digital Strategy</h3>
              <p class="text-base-content/70">Optimizing your online presence to rank higher, attract more traffic, and convert visitors into customers.</p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/services#seo" class="btn btn-sm btn-primary btn-outline hover:bg-primary hover:text-primary-content">Learn More</NuxtLink>
              </div>
            </div>
          </div>
        </div>
         <div class="text-center mt-12">
            <NuxtLink to="/services" class="btn btn-primary hover:btn-primary-focus">View All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Portfolio Sneak Peek -->
    <section class="py-16 md:py-24 bg-base-100">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Our Recent <span class="text-primary">Work</span></h2>
                <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
                    We take pride in our work. Here are a few examples of how we've helped our clients succeed.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card card-compact bg-base-300 shadow-xl image-full transform hover:scale-105 transition-transform duration-300 ease-in-out h-64 md:h-72 group">
                    <figure><NuxtImg src="https://source.unsplash.com/600x400/?website,project,interface" alt="Project Alpha - E-commerce Platform" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300" /></figure>
                    <div class="card-body justify-end bg-gradient-to-t from-black/70 to-transparent">
                        <h3 class="card-title text-base-100 font-headings">Project Alpha</h3>
                        <p class="text-base-300 text-sm">E-commerce platform development.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-alpha" class="btn btn-xs btn-secondary hover:btn-primary-focus">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-300 shadow-xl image-full transform hover:scale-105 transition-transform duration-300 ease-in-out h-64 md:h-72 group">
                    <figure><NuxtImg src="https://source.unsplash.com/600x400/?mobile,app,design" alt="Project Beta - Corporate Website Redesign" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300" /></figure>
                    <div class="card-body justify-end bg-gradient-to-t from-black/70 to-transparent">
                        <h3 class="card-title text-base-100 font-headings">Project Beta</h3>
                        <p class="text-base-300 text-sm">Corporate website redesign.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-beta" class="btn btn-xs btn-secondary hover:btn-primary-focus">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-300 shadow-xl image-full transform hover:scale-105 transition-transform duration-300 ease-in-out h-64 md:h-72 group">
                    <figure><NuxtImg src="https://source.unsplash.com/600x400/?tech,solution,graph" alt="Project Gamma - Mobile App UI/UX Design" width="600" height="400" class="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300" /></figure>
                    <div class="card-body justify-end bg-gradient-to-t from-black/70 to-transparent">
                        <h3 class="card-title text-base-100 font-headings">Project Gamma</h3>
                        <p class="text-base-300 text-sm">Mobile app UI/UX design.</p>
                        <div class="card-actions justify-end">
                            <NuxtLink to="/portfolio/project-gamma" class="btn btn-xs btn-secondary hover:btn-primary-focus">View Details</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <NuxtLink to="/portfolio" class="btn btn-primary hover:btn-primary-focus">Explore Full Portfolio</NuxtLink>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-accent to-secondary text-accent-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings">Ready to Start Your Project?</h2>
        <p class="mt-4 text-lg text-base-200/80 max-w-xl mx-auto">
          Let's discuss how SquadCoders can help you achieve your digital goals. We're excited to hear about your ideas!
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg btn-neutral text-neutral-content hover:bg-neutral-focus border-none">
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
// import { Icon } from '@iconify/vue'; // Example for iconify, if you choose to use it
</script>

<style scoped>
/* Scoped styles for homepage if needed */
.hero {
    background-size: cover; /* This is already a Tailwind class: bg-cover */
    background-position: center; /* This is already a Tailwind class: bg-center */
}
/* Consider removing this style block if all styles are handled by Tailwind/DaisyUI utilities */
</style>
