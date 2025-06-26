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
      padding-y="py-12 md:py-16"
    >
      <!-- Service: Custom Web Development -->
      <UiServiceDetailCard
        id="web-development"
        title="Custom Web Development"
        description="We specialize in creating bespoke websites and web applications that are not only visually stunning but also robust, scalable, and perfectly aligned with your business objectives. Whether you need a dynamic corporate site, a complex e-commerce platform, or a custom web tool, our developers use the latest technologies to deliver high-performance solutions."
        image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=85"
        :features="[
          'Front-end Development (Vue.js, React, Angular)',
          'Back-end Development (Node.js, Python, PHP)',
          'Full-Stack Solutions & API Development',
          'Content Management Systems (CMS)',
          'E-commerce & Online Store Development'
        ]"
        button-text="Discuss Your Web Project"
        button-link="/contact?service=web-development"
        title-color="text-primary"
        button-class="btn-primary"
        shadow-color="hover:shadow-primary/20"
      />

      <!-- Service: UI/UX Design -->
      <UiServiceDetailCard
        id="ui-ux-design"
        title="UI/UX Design"
        description="User experience is at the heart of everything we design. Our UI/UX experts craft intuitive, engaging, and aesthetically pleasing interfaces that captivate your audience and make interactions seamless. We follow a user-centered design process, from research and wireframing to prototyping and user testing."
        image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=85"
        :features="[
          'User Research & Persona Development',
          'Wireframing & Prototyping',
          'Responsive Web Design',
          'Mobile App Design (iOS & Android)',
          'Branding & Visual Identity'
        ]"
        button-text="Enhance Your UX Design"
        button-link="/contact?service=ui-ux-design"
        title-color="text-secondary"
        button-class="btn-secondary"
        shadow-color="hover:shadow-secondary/20"
        :reversed="true"
      />

      <!-- Service: SEO & Digital Strategy -->
      <UiServiceDetailCard
        id="seo"
        title="SEO & Digital Strategy"
        description="A great website needs to be discoverable. Our SEO and digital strategy services are designed to increase your online visibility, attract qualified organic traffic, and improve your search engine rankings. We develop comprehensive strategies tailored to your industry and audience."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=85"
        :features="[
          'Search Engine Optimization (On-page, Off-page, Technical)',
          'Keyword Research & Analysis',
          'Content Marketing Strategy',
          'Pay-Per-Click (PPC) Campaign Management',
          'Analytics & Performance Tracking'
        ]"
        button-text="Boost Your Online Visibility"
        button-link="/contact?service=seo"
        title-color="text-accent"
        button-class="btn-accent"
        shadow-color="hover:shadow-accent/20"
      />
    </UiSectionContainer>

    <!-- Our Process -->
     <UiSectionContainer
      title="Our Approach to <span class='text-primary'>Excellence</span>"
      description="We follow a structured yet flexible process to ensure project success and client satisfaction."
      background-color="bg-base-200"
      padding-y="py-12 md:py-16"
    >
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <Icon name="heroicons:magnifying-glass-circle-20-solid" class="w-6 h-6 text-primary" />
          </div>
          <div class="timeline-start md:text-end mb-10 p-6 bg-base-100 rounded-xl shadow-lg border border-base-300">
            <time class="font-mono italic text-xs text-base-content/60">Phase 1</time>
            <div class="text-lg font-bold font-headings text-primary">Discovery & Planning</div>
            <p class="text-sm text-base-content/75 mt-1">Understanding your goals, audience, and project requirements. We define scope, strategy, and create a detailed project roadmap.</p>
          </div>
          <hr class="!bg-primary/50"/>
        </li>
        <li>
          <hr class="!bg-primary/50"/>
          <div class="timeline-middle">
            <Icon name="heroicons:pencil-square-20-solid" class="w-6 h-6 text-secondary" />
          </div>
          <div class="timeline-end mb-10 p-6 bg-base-100 rounded-xl shadow-lg border border-base-300">
            <time class="font-mono italic text-xs text-base-content/60">Phase 2</time>
            <div class="text-lg font-bold font-headings text-secondary">Design & Prototyping</div>
            <p class="text-sm text-base-content/75 mt-1">Crafting user-centric designs and interactive prototypes. We iterate based on your feedback to ensure the vision is perfectly captured.</p>
          </div>
          <hr class="!bg-secondary/50"/>
        </li>
        <li>
          <hr class="!bg-secondary/50"/>
          <div class="timeline-middle">
            <Icon name="heroicons:code-bracket-square-20-solid" class="w-6 h-6 text-accent" />
          </div>
          <div class="timeline-start md:text-end mb-10 p-6 bg-base-100 rounded-xl shadow-lg border border-base-300">
            <time class="font-mono italic text-xs text-base-content/60">Phase 3</time>
            <div class="text-lg font-bold font-headings text-accent">Development & Testing</div>
            <p class="text-sm text-base-content/75 mt-1">Bringing designs to life with clean, efficient code. Rigorous testing is conducted to ensure quality, performance, and reliability.</p>
          </div>
          <hr class="!bg-accent/50"/>
        </li>
        <li>
          <hr class="!bg-accent/50"/>
          <div class="timeline-middle">
            <Icon name="heroicons:rocket-launch-20-solid" class="w-6 h-6 text-primary" />
          </div>
          <div class="timeline-end mb-10 p-6 bg-base-100 rounded-xl shadow-lg border border-base-300">
            <time class="font-mono italic text-xs text-base-content/60">Phase 4</time>
            <div class="text-lg font-bold font-headings text-primary">Deployment & Launch</div>
            <p class="text-sm text-base-content/75 mt-1">Seamlessly deploying your project to live servers. We manage the launch process to ensure a smooth transition.</p>
          </div>
          <hr class="!bg-primary/50"/>
        </li>
          <li>
          <hr class="!bg-primary/50"/>
          <div class="timeline-middle">
            <Icon name="heroicons:arrow-trending-up-20-solid" class="w-6 h-6 text-secondary" />
          </div>
          <div class="timeline-start md:text-end p-6 bg-base-100 rounded-xl shadow-lg border border-base-300">
            <time class="font-mono italic text-xs text-base-content/60">Phase 5</time>
            <div class="text-lg font-bold font-headings text-secondary">Support & Growth</div>
            <p class="text-sm text-base-content/75 mt-1">Providing ongoing support, maintenance, and strategic advice to help your digital presence evolve and grow.</p>
          </div>
        </li>
      </ul>
    </UiSectionContainer>

    <!-- CTA Section -->
    <SectionsCallToAction
      title="Ready to Elevate Your Digital Presence?"
      description="Let's discuss your specific needs and how our services can help you achieve your business goals."
      button-text="Request a Consultation"
      button-link="/contact"
      button-style="btn-secondary hover:opacity-90"
      background-color="bg-gradient-to-br from-accent to-secondary"
      text-color="text-accent-content"
    />
  </div>
</template>

<script setup>
// Page-specific logic can go here
</script>

<style scoped>

</style>
