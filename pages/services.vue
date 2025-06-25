<template>
  <div>
    <Head>
      <Title>Our Services</Title>
      <Meta name="description" content="Discover the comprehensive web development, UI/UX design, SEO, and digital strategy services offered by SquadCoders to elevate your business." />
    </Head>

    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold font-headings text-primary sm:text-5xl">
          Our Services
        </h1>
        <p class="mt-4 text-lg text-squad-medium-gray sm:text-xl max-w-2xl mx-auto">
          We provide a wide array of digital services designed to help your business thrive in the online world.
        </p>
      </div>
    </section>

    <!-- Services Overview/Introduction -->
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold font-headings text-neutral">What We <span class="text-secondary">Offer</span></h2>
            <p class="mt-4 text-lg text-squad-medium-gray max-w-3xl mx-auto">
                At SquadCoders, we're equipped to handle all your digital needs. From initial concept and design through to development, launch, and ongoing optimization, our squad is here to deliver excellence.
            </p>
        </div>

        <!-- Service: Custom Web Development -->
        <div id="web-development" class="service-section card lg:card-side bg-base-200 shadow-xl mb-12 md:mb-16">
          <figure class="lg:w-1/3 min-h-[250px] md:min-h-[300px] lg:min-h-full">
            <NuxtImg src="https://source.unsplash.com/800x600/?coding,programming,web,development" alt="Custom Web Development - Lines of code on a screen" width="800" height="600" class="w-full h-full object-cover"/>
          </figure>
          <div class="card-body lg:w-2/3">
            <h3 class="card-title text-2xl font-headings text-primary">Custom Web Development</h3>
            <p class="text-squad-dark-gray mt-2 mb-4">
              We specialize in creating bespoke websites and web applications that are not only visually stunning but also robust, scalable, and perfectly aligned with your business objectives. Whether you need a dynamic corporate site, a complex e-commerce platform, or a custom web tool, our developers use the latest technologies to deliver high-performance solutions.
            </p>
            <ul class="list-disc list-inside space-y-1 text-squad-medium-gray mb-6">
              <li>Front-end Development (Vue.js, React, Angular)</li>
              <li>Back-end Development (Node.js, Python, PHP)</li>
              <li>Full-Stack Solutions & API Development</li>
              <li>Content Management Systems (CMS)</li>
              <li>E-commerce & Online Store Development</li>
            </ul>
            <div class="card-actions justify-start">
              <NuxtLink to="/contact?service=web-development" class="btn btn-primary">Discuss Your Project</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service: UI/UX Design -->
        <div id="ui-ux-design" class="service-section card lg:card-side bg-base-200 shadow-xl mb-12 md:mb-16">
          <div class="card-body lg:w-2/3 lg:order-last">
            <h3 class="card-title text-2xl font-headings text-secondary">UI/UX Design</h3>
            <p class="text-squad-dark-gray mt-2 mb-4">
              User experience is at the heart of everything we design. Our UI/UX experts craft intuitive, engaging, and aesthetically pleasing interfaces that captivate your audience and make interactions seamless. We follow a user-centered design process, from research and wireframing to prototyping and user testing.
            </p>
            <ul class="list-disc list-inside space-y-1 text-squad-medium-gray mb-6">
              <li>User Research & Persona Development</li>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Web Design</li>
              <li>Mobile App Design (iOS & Android)</li>
              <li>Branding & Visual Identity</li>
            </ul>
            <div class="card-actions justify-start">
              <NuxtLink to="/contact?service=ui-ux-design" class="btn btn-secondary">Enhance Your UX</NuxtLink>
            </div>
          </div>
          <figure class="lg:w-1/3 lg:order-first min-h-[250px] md:min-h-[300px] lg:min-h-full">
            <NuxtImg src="https://source.unsplash.com/800x600/?ui,ux,interface,design,wireframe" alt="UI/UX Design - Wireframes and design process" width="800" height="600" class="w-full h-full object-cover"/>
          </figure>
        </div>

        <!-- Service: SEO & Digital Strategy -->
        <div id="seo" class="service-section card lg:card-side bg-base-200 shadow-xl mb-12 md:mb-16">
          <figure class="lg:w-1/3 min-h-[250px] md:min-h-[300px] lg:min-h-full">
            <NuxtImg src="https://source.unsplash.com/800x600/?seo,analytics,digital,strategy,charts" alt="SEO & Digital Strategy - Analytics dashboard" width="800" height="600" class="w-full h-full object-cover"/>
          </figure>
          <div class="card-body lg:w-2/3">
            <h3 class="card-title text-2xl font-headings text-accent">SEO & Digital Strategy</h3>
            <p class="text-squad-dark-gray mt-2 mb-4">
              A great website needs to be discoverable. Our SEO and digital strategy services are designed to increase your online visibility, attract qualified organic traffic, and improve your search engine rankings. We develop comprehensive strategies tailored to your industry and audience.
            </p>
            <ul class="list-disc list-inside space-y-1 text-squad-medium-gray mb-6">
              <li>Search Engine Optimization (On-page, Off-page, Technical)</li>
              <li>Keyword Research & Analysis</li>
              <li>Content Marketing Strategy</li>
              <li>Pay-Per-Click (PPC) Campaign Management</li>
              <li>Analytics & Performance Tracking</li>
            </ul>
            <div class="card-actions justify-start">
              <NuxtLink to="/contact?service=seo" class="btn btn-accent">Boost Your Visibility</NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Our Process (Optional) -->
    <section class="py-16 md:py-24 bg-base-200">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold font-headings text-neutral">Our Approach to <span class="text-primary">Excellence</span></h2>
                <p class="mt-4 text-lg text-squad-medium-gray max-w-2xl mx-auto">
                    We follow a structured yet flexible process to ensure project success and client satisfaction.
                </p>
            </div>
            <div class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                  <time class="font-mono italic text-squad-medium-gray">Phase 1</time>
                  <div class="text-lg font-black font-headings text-primary">Discovery & Planning</div>
                  Understanding your goals, audience, and project requirements. We define scope, strategy, and create a detailed project roadmap.
                </div>
                <hr class="bg-primary"/>
              </li>
              <li>
                <hr class="bg-primary"/>
                <div class="timeline-middle">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic text-squad-medium-gray">Phase 2</time>
                  <div class="text-lg font-black font-headings text-secondary">Design & Prototyping</div>
                  Crafting user-centric designs and interactive prototypes. We iterate based on your feedback to ensure the vision is perfectly captured.
                </div>
                <hr class="bg-secondary"/>
              </li>
              <li>
                <hr class="bg-secondary"/>
                <div class="timeline-middle">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-accent"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                  <time class="font-mono italic text-squad-medium-gray">Phase 3</time>
                  <div class="text-lg font-black font-headings text-accent">Development & Testing</div>
                  Bringing designs to life with clean, efficient code. Rigorous testing is conducted to ensure quality, performance, and reliability.
                </div>
                <hr class="bg-accent"/>
              </li>
              <li>
                <hr class="bg-accent"/>
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic text-squad-medium-gray">Phase 4</time>
                  <div class="text-lg font-black font-headings text-primary">Deployment & Launch</div>
                  Seamlessly deploying your project to live servers. We manage the launch process to ensure a smooth transition.
                </div>
                 <hr class="bg-primary"/>
              </li>
               <li>
                <hr class="bg-primary"/>
                <div class="timeline-middle">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end">
                  <time class="font-mono italic text-squad-medium-gray">Phase 5</time>
                  <div class="text-lg font-black font-headings text-secondary">Support & Growth</div>
                  Providing ongoing support, maintenance, and strategic advice to help your digital presence evolve and grow.
                </div>
              </li>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-accent to-secondary text-neutral-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings text-white">Ready to Elevate Your Digital Presence?</h2>
        <p class="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          Let's discuss your specific needs and how our services can help you achieve your business goals.
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none">
            Request a Consultation
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Page-specific logic can go here
</script>

<style scoped>
.service-section:target {
  /* Optional: Add a style for when an #anchor link targets a section */
  /* For example, a subtle animation or border */
  /* animation: highlight 1s ease-out; */
}

/* @keyframes highlight {
  from { background-color: var(--fallback-s, oklch(var(--s) / 0.2)); }
  to { background-color: transparent; }
} */

/* Ensure images in cards don't break layout on smaller screens */
.service-section figure img {
  max-height: 400px; /* Adjust as needed */
}
@media (min-width: 1024px) { /* lg breakpoint */
  .service-section figure img {
    max-height: none; /* Allow full height on larger screens where side-by-side layout is active */
  }
}

/* Style for the timeline hr */
.timeline li hr {
  height: calc(100% - 2.5rem); /* Adjust based on spacing */
  margin-top: 1.25rem; /* Adjust based on spacing */
  margin-bottom: 1.25rem; /* Adjust based on spacing */
}
.timeline li:last-child hr {
  display: none;
}
</style>
