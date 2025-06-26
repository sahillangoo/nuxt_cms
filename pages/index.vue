<template>
  <div>
    <Head>
      <Title>Home | SquadCoders</Title>
      <Meta name="description" content="SquadCoders: Expert web development, UI/UX design, and digital solutions. Let's build your vision." />
    </Head>

    <!-- Hero Section -->
    <SectionsHeroSection
      title="Crafting Digital Excellence, <br />One Line of Code at a Time."
      subtitle="SquadCoders is your dedicated partner for innovative web development, intuitive UI/UX design, and impactful digital solutions. Let's build your vision."
      background-image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80"
      :primary-button="{ text: 'Get a Free Quote', link: '/contact', icon: 'heroicons:envelope-open-20-solid' }"
      :secondary-button="{ text: 'Our Services', link: '/services', icon: 'heroicons:briefcase-20-solid' }"
      :overlay-opacity="0.7"
    />

    <!-- Why Choose Us / Core Values -->
    <UiSectionContainer
      title="Why Partner with <span class='text-primary'>SquadCoders</span>?"
      description="We're not just coders; we're architects of digital experiences. We blend creativity with technology to deliver solutions that drive results."
      background-color="bg-base-100"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <UiFeatureCard
          title="Innovative Solutions"
          description="We leverage the latest technologies to build cutting-edge web applications tailored to your unique needs."
          icon-name="heroicons:light-bulb-20-solid"
        />
        <UiFeatureCard
          title="User-Centric Design"
          description="Our designs prioritize user experience, ensuring your audience is engaged and delighted."
          icon-name="heroicons:users-20-solid"
        />
        <UiFeatureCard
          title="Collaborative Approach"
          description="We work closely with you at every step, ensuring transparency and alignment with your goals."
          icon-name="heroicons:code-bracket-square-20-solid"
        />
      </div>
    </UiSectionContainer>

    <!-- Services Overview -->
    <UiSectionContainer
      title="Our Core <span class='text-secondary'>Services</span>"
      description="From concept to launch, we offer a comprehensive suite of services to bring your digital ideas to life."
      background-color="bg-base-200"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiServiceCard
          title="Custom Web Development"
          description="Building robust, scalable, and high-performance websites and web applications tailored to your business."
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=220"
          link="/services#web-development"
        />
        <UiServiceCard
          title="UI/UX Design"
          description="Creating intuitive, engaging, and aesthetically pleasing user interfaces that enhance user experience."
          image="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=220"
          link="/services#ui-ux-design"
        />
        <UiServiceCard
          title="SEO & Digital Strategy"
          description="Optimizing your online presence to rank higher, attract more traffic, and convert visitors into customers."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=220"
          link="/services#seo"
        />
      </div>
      <div class="text-center mt-12">
        <NuxtLink to="/services" class="btn btn-primary group">
          View All Services
          <Icon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </UiSectionContainer>

    <!-- Portfolio Sneak Peek -->
    <UiSectionContainer
      title="Our Recent <span class='text-primary'>Work</span>"
      description="We take pride in our work. Here are a few examples of how we've helped our clients succeed."
      background-color="bg-base-100"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <PortfolioItem
          title="Project Alpha"
          description="E-commerce platform development for a growing online retailer."
          image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-alpha"
          button-class="btn-primary"
        />
        <PortfolioItem
          title="Project Beta"
          description="Full corporate website redesign focusing on UX and brand identity."
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-beta"
          button-class="btn-secondary"
        />
        <PortfolioItem
          title="Project Gamma"
          description="Intuitive mobile app UI/UX design for a new startup."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-gamma"
          button-class="btn-accent"
        />
      </div>
      <div class="text-center mt-12">
        <NuxtLink to="/portfolio" class="btn btn-primary group">
          Explore Full Portfolio
          <Icon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </UiSectionContainer>

    <!-- Call to Action Section -->
    <SectionsCallToAction
      title="Ready to Start Your Project?"
      description="Let's discuss how SquadCoders can help you achieve your digital goals. We're excited to hear about your ideas!"
      button-text="Let's Talk"
      button-link="/contact"
      button-style="btn-secondary hover:opacity-90"
    />

  </div>
</template>

<script setup>
// No specific script needed for this page yet.
// Could add NuxtIcon component later if needed.
// import { Icon } from '@iconify/vue'; // Example for iconify, if you choose to use it
</script>
