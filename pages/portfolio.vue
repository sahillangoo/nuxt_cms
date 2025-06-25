<template>
  <div>
    <Head>
      <Title>Our Portfolio | SquadCoders</Title>
      <Meta name="description" content="Explore a selection of our finest projects at SquadCoders. See how we've helped businesses achieve their digital goals with innovative web solutions." />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Our Portfolio"
      description="A showcase of our passion, creativity, and commitment to delivering outstanding digital experiences."
    />

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
    <UiSectionContainer
      background-color="bg-base-100"
      padding="pb-16 md:pb-24"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <PortfolioPortfolioItem
          title="Project Alpha"
          description="E-commerce Platform Development"
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-alpha"
          button-text="View Case Study"
          button-class="btn-primary"
        />

        <PortfolioPortfolioItem
          title="Project Beta"
          description="Corporate Website Redesign"
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-beta"
          button-text="View Case Study"
          button-class="btn-secondary"
        />

        <PortfolioPortfolioItem
          title="Project Gamma"
          description="Mobile App UI/UX"
          image="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-gamma"
          button-text="View Case Study"
          button-class="btn-accent"
        />

        <PortfolioPortfolioItem
          title="Project Delta"
          description="SaaS Platform Branding"
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-delta"
          button-text="View Case Study"
          button-class="btn-primary"
        />

        <PortfolioPortfolioItem
          title="Project Epsilon"
          description="Non-profit Organization Website"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-epsilon"
          button-text="View Case Study"
          button-class="btn-secondary"
        />

        <PortfolioPortfolioItem
          title="Project Zeta"
          description="Tech Startup Website"
          image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
          link="/portfolio/project-zeta"
          button-text="View Case Study"
          button-class="btn-accent"
        />
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
    </UiSectionContainer>

    <!-- CTA Section -->
    <SectionsCallToAction
      title="Have a Project in Mind?"
      description="Let's collaborate to bring your vision to life. Our squad is ready for the next challenge!"
      button-text="Discuss Your Project"
      button-link="/contact"
      background-color="bg-gradient-to-r from-primary to-accent"
      text-color="text-primary-content"
    />

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
