<template>
  <div>
    <Head>
      <Title>Our Services | SquadCoders</Title>
      <Meta name="description" content="Discover the comprehensive web development, UI/UX design, SEO, and digital strategy services offered by SquadCoders to elevate your business." />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Our Services"
      description="We provide a wide array of digital services designed to help your business thrive in the online world."
    />

    <!-- Services Overview/Introduction -->
    <UiSectionContainer
      title="What We <span class='text-secondary'>Offer</span>"
      description="At SquadCoders, we're equipped to handle all your digital needs. From initial concept and design through to development, launch, and ongoing optimization, our squad is here to deliver excellence."
      background-color="bg-base-100"
    >
      <!-- Service: Custom Web Development -->
      <UiServiceDetailCard
        id="web-development"
        title="Custom Web Development"
        description="We specialize in creating bespoke websites and web applications that are not only visually stunning but also robust, scalable, and perfectly aligned with your business objectives. Whether you need a dynamic corporate site, a complex e-commerce platform, or a custom web tool, our developers use the latest technologies to deliver high-performance solutions."
        image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        :features="[
          'Front-end Development (Vue.js, React, Angular)',
          'Back-end Development (Node.js, Python, PHP)',
          'Full-Stack Solutions & API Development',
          'Content Management Systems (CMS)',
          'E-commerce & Online Store Development'
        ]"
        button-text="Discuss Your Project"
        button-link="/contact?service=web-development"
        title-color="text-primary"
        button-class="btn-primary"
        button-hover="btn-primary-focus"
        shadow-color="hover:shadow-primary/20"
      />

      <!-- Service: UI/UX Design -->
      <UiServiceDetailCard
        id="ui-ux-design"
        title="UI/UX Design"
        description="User experience is at the heart of everything we design. Our UI/UX experts craft intuitive, engaging, and aesthetically pleasing interfaces that captivate your audience and make interactions seamless. We follow a user-centered design process, from research and wireframing to prototyping and user testing."
        image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        :features="[
          'User Research & Persona Development',
          'Wireframing & Prototyping',
          'Responsive Web Design',
          'Mobile App Design (iOS & Android)',
          'Branding & Visual Identity'
        ]"
        button-text="Enhance Your UX"
        button-link="/contact?service=ui-ux-design"
        title-color="text-secondary"
        button-class="btn-secondary"
        button-hover="btn-secondary-focus"
        shadow-color="hover:shadow-secondary/20"
        :reversed="true"
      />

      <!-- Service: SEO & Digital Strategy -->
      <UiServiceDetailCard
        id="seo"
        title="SEO & Digital Strategy"
        description="A great website needs to be discoverable. Our SEO and digital strategy services are designed to increase your online visibility, attract qualified organic traffic, and improve your search engine rankings. We develop comprehensive strategies tailored to your industry and audience."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        :features="[
          'Search Engine Optimization (On-page, Off-page, Technical)',
          'Keyword Research & Analysis',
          'Content Marketing Strategy',
          'Pay-Per-Click (PPC) Campaign Management',
          'Analytics & Performance Tracking'
        ]"
        button-text="Boost Your Visibility"
        button-link="/contact?service=seo"
        title-color="text-accent"
        button-class="btn-accent"
        button-hover="btn-accent-focus"
        shadow-color="hover:shadow-accent/20"
      />
    </UiSectionContainer>

    <!-- Our Process -->
    <section class="py-16 md:py-24 bg-base-200">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Our Approach to <span class="text-primary">Excellence</span></h2>
                <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
                    We follow a structured yet flexible process to ensure project success and client satisfaction.
                </p>
            </div>
            <!-- DaisyUI Timeline uses ::before for line, so HRs are not strictly needed for the line itself unless for color control. -->
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10 p-4 bg-base-100 rounded-lg shadow-md">
                  <time class="font-mono italic text-xs text-base-content/60">Phase 1</time>
                  <div class="text-lg font-black font-headings text-primary">Discovery & Planning</div>
                  <p class="text-sm text-base-content/70">Understanding your goals, audience, and project requirements. We define scope, strategy, and create a detailed project roadmap.</p>
                </div>
                <hr class="!bg-primary"/>
              </li>
              <li>
                <hr class="!bg-primary"/>
                <div class="timeline-middle">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10 p-4 bg-base-100 rounded-lg shadow-md">
                  <time class="font-mono italic text-xs text-base-content/60">Phase 2</time>
                  <div class="text-lg font-black font-headings text-secondary">Design & Prototyping</div>
                  <p class="text-sm text-base-content/70">Crafting user-centric designs and interactive prototypes. We iterate based on your feedback to ensure the vision is perfectly captured.</p>
                </div>
                <hr class="!bg-secondary"/>
              </li>
              <li>
                <hr class="!bg-secondary"/>
                <div class="timeline-middle">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-accent"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10 p-4 bg-base-100 rounded-lg shadow-md">
                  <time class="font-mono italic text-xs text-base-content/60">Phase 3</time>
                  <div class="text-lg font-black font-headings text-accent">Development & Testing</div>
                  <p class="text-sm text-base-content/70">Bringing designs to life with clean, efficient code. Rigorous testing is conducted to ensure quality, performance, and reliability.</p>
                </div>
                <hr class="!bg-accent"/>
              </li>
              <li>
                <hr class="!bg-accent"/>
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10 p-4 bg-base-100 rounded-lg shadow-md">
                  <time class="font-mono italic text-xs text-base-content/60">Phase 4</time>
                  <div class="text-lg font-black font-headings text-primary">Deployment & Launch</div>
                  <p class="text-sm text-base-content/70">Seamlessly deploying your project to live servers. We manage the launch process to ensure a smooth transition.</p>
                </div>
                 <hr class="!bg-primary"/>
              </li>
               <li>
                <hr class="!bg-primary"/>
                <div class="timeline-middle">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end p-4 bg-base-100 rounded-lg shadow-md">
                  <time class="font-mono italic text-xs text-base-content/60">Phase 5</time>
                  <div class="text-lg font-black font-headings text-secondary">Support & Growth</div>
                  <p class="text-sm text-base-content/70">Providing ongoing support, maintenance, and strategic advice to help your digital presence evolve and grow.</p>
                </div>
              </li>
            </ul>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-accent to-secondary text-accent-content">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-headings">Ready to Elevate Your Digital Presence?</h2>
        <p class="mt-4 text-lg text-accent-content/80 max-w-xl mx-auto">
          Let's discuss your specific needs and how our services can help you achieve your business goals.
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="btn btn-lg btn-neutral hover:btn-neutral-focus">
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

</style>
