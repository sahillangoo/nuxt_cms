<template>
  <div>
    <Head>
      <Title>Component Demo | SquadCoders</Title>
      <Meta name="description" content="Demonstration of the new component architecture" />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Component Demo"
      description="This page demonstrates all the reusable components we've created"
    />

    <!-- Hero Section Demo -->
    <SectionsHeroSection
      title="Welcome to Our <br />Component Library"
      subtitle="See how we've broken down the UI into reusable, maintainable components that can be used across the entire website."
      background-image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80"
      :primary-button="{ text: 'View Components', link: '#components', icon: 'heroicons:squares-2x2-20-solid' }"
      :secondary-button="{ text: 'Go Home', link: '/', icon: 'heroicons:home-20-solid' }"
      overlay-opacity="0.75"
    />

    <!-- Feature Cards Demo -->
    <UiSectionContainer
      id="components"
      title="Feature Cards <span class='text-primary'>Demo</span>"
      description="These feature cards can be reused throughout the site to highlight key benefits."
      background-color="bg-base-100"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <UiFeatureCard
          title="Reusable Components"
          description="Build once, use everywhere. Components ensure consistency and reduce development time."
          icon-name="heroicons:light-bulb-20-solid"
        />
        <UiFeatureCard
          title="User-Friendly"
          description="Components are designed with the end user in mind, ensuring great experiences."
          icon-name="heroicons:users-20-solid"
        />
        <UiFeatureCard
          title="Clean Code"
          description="Well-structured components make the codebase more maintainable and scalable."
          icon-name="heroicons:code-bracket-square-20-solid"
        />
      </div>
    </UiSectionContainer>

    <!-- Service Cards Demo -->
    <UiSectionContainer
      title="Service Cards <span class='text-secondary'>Demo</span>"
      description="Service cards showcase our offerings with images and clear call-to-actions."
      background-color="bg-base-200"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <UiServiceCard
          title="Component Architecture"
          description="Breaking down complex UIs into manageable, reusable pieces that work together seamlessly."
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=75"
          link="/services"
          button-text="Learn More"
        />
        <UiServiceCard
          title="Design Systems"
          description="Creating consistent design patterns that ensure brand coherence across all touchpoints."
          image="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=75"
          link="/services"
          button-text="Explore"
        />
        <UiServiceCard
          title="Scalable Solutions"
          description="Building systems that grow with your business and adapt to changing requirements."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=75"
          link="/services"
          button-text="Discover"
        />
      </div>
    </UiSectionContainer>

    <!-- Portfolio Items Demo -->
    <UiSectionContainer
      title="Portfolio Items <span class='text-accent'>Demo</span>"
      description="Portfolio components showcase our work with engaging image overlays."
      background-color="bg-base-100"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <PortfolioPortfolioItem
          title="Component Library"
          description="Reusable UI component system for consistency and speed."
          image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio"
          button-text="View Project"
          button-class="btn-primary"
        />
        <PortfolioPortfolioItem
          title="Design System"
          description="Comprehensive design standards for a unified brand experience."
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio"
          button-text="Case Study"
          button-class="btn-secondary"
        />
        <PortfolioPortfolioItem
          title="Architecture Refactor"
          description="Modern, scalable codebase for future growth and maintainability."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio"
          button-text="Details"
          button-class="btn-accent"
        />
      </div>
    </UiSectionContainer>

    <!-- Call to Action -->
    <SectionsCallToAction
      title="Ready to Use These Components?"
      description="This component library makes it easy to build consistent, beautiful pages quickly and efficiently."
      button-text="Get Started"
      button-link="/contact"
    />

  </div>
</template>

<script setup>
// This page demonstrates the component architecture
// No additional logic needed - components handle their own state
</script>
