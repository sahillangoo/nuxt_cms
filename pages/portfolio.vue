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
    <UiSectionContainer
      padding-y="py-8 md:py-10"
      background-color="bg-base-100"
      title-alignment="center"
    >
        <p class="text-base-content/80 mb-6 max-w-xl mx-auto">
          Browse through some of our selected projects. We've had the privilege of working with diverse clients across various industries.
        </p>
        <div class="tabs tabs-boxed inline-block mb-8 md:mb-12">
          <a class="tab tab-active !bg-primary !text-primary-content">All Projects</a>
          <a class="tab">Web Development</a>
          <a class="tab">UI/UX Design</a>
          <a class="tab">Branding</a>
        </div>
    </UiSectionContainer>

    <!-- Portfolio Grid -->
    <UiSectionContainer
      background-color="bg-base-100"
      padding-y="pt-0 pb-12 md:pb-16"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <PortfolioPortfolioItem
          title="Project Alpha"
          description="E-commerce Platform Development for a leading online retailer."
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-alpha"
          button-text="View Case Study"
          button-class="btn-primary"
        />

        <PortfolioPortfolioItem
          title="Project Beta"
          description="Full corporate website redesign with a focus on modern UI/UX."
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-beta"
          button-text="View Case Study"
          button-class="btn-secondary"
        />

        <PortfolioPortfolioItem
          title="Project Gamma"
          description="Intuitive mobile application UI/UX for a disruptive tech startup."
          image="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-gamma"
          button-text="View Case Study"
          button-class="btn-accent"
        />

        <PortfolioPortfolioItem
          title="Project Delta"
          description="Comprehensive SaaS platform branding and interface design."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-delta"
          button-text="View Case Study"
          button-class="btn-primary"
        />

        <PortfolioPortfolioItem
          title="Project Epsilon"
          description="Engaging website for a non-profit organization to boost donations."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-epsilon"
          button-text="View Case Study"
          button-class="btn-secondary"
        />

        <PortfolioPortfolioItem
          title="Project Zeta"
          description="Cutting-edge tech startup website with interactive elements."
          image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=75"
          link="/portfolio/project-zeta"
          button-text="View Case Study"
          button-class="btn-accent"
        />
      </div>

      <!-- Pagination -->
      <div class="text-center mt-12 md:mt-16">
          <div class="join rounded-lg">
              <button class="join-item btn btn-outline btn-sm md:btn-md">«</button>
              <button class="join-item btn btn-primary btn-sm md:btn-md">1</button>
              <button class="join-item btn btn-outline btn-sm md:btn-md">2</button>
              <button class="join-item btn btn-outline btn-sm md:btn-md">3</button>
              <button class="join-item btn btn-outline btn-sm md:btn-md">»</button>
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
