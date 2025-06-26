<template>
  <div>
    <Head>
      <Title>About Us | SquadCoders</Title>
      <Meta name="description" content="Learn about SquadCoders: our mission, values, and the passionate team dedicated to building exceptional digital experiences." />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="About SquadCoders"
      description="We are a collective of passionate developers, designers, and strategists committed to building the future of the web."
    />

    <!-- Our Story / Mission -->
    <UiSectionContainer background-color="bg-base-100" title-alignment="left" title-size="text-2xl md:text-3xl" padding-y="py-12 md:py-16">
      <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="prose prose-lg max-w-none text-base-content/80">
          <h2 class="text-3xl font-bold font-headings text-base-content mb-6">
            Our <span class="text-primary">Mission</span> & Story
          </h2>
          <p class="lead">
            Founded on the principle of collaborative innovation, SquadCoders was born from a shared desire to create meaningful and impactful digital solutions. We saw a need for a web agency that not only delivers technically excellent products but also fosters true partnerships with its clients.
          </p>
          <p>
            Our mission is to empower businesses by transforming their digital visions into reality. We strive to be more than just a service provider; we aim to be an extension of your team, dedicated to your success.
          </p>
          <p>
            Every line of code we write, every pixel we place, and every strategy we devise is driven by our commitment to quality, creativity, and achieving outstanding results for those we serve.
          </p>
        </div>
        <div class="h-full min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden shadow-xl">
          <NuxtImg
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450&q=75"
            alt="Our Mission and Story at SquadCoders - A collaborative workspace"
            width="600" height="450"
            class="w-full h-full object-cover"
            sizes="sm:100vw md:50vw lg:600px"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </UiSectionContainer>

    <!-- Our Core Values -->
    <UiSectionContainer
      title="Our Core <span class='text-secondary'>Values</span>"
      description="These principles guide our work, our collaborations, and our commitment to excellence."
      background-color="bg-base-200"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div class="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out rounded-xl border border-base-300 hover:border-primary/30 group text-center p-6">
          <div class="avatar placeholder mb-4 mx-auto">
            <div class="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
              <Icon name="heroicons:light-bulb-20-solid" class="w-8 h-8" />
            </div>
          </div>
          <h3 class="text-xl font-headings font-semibold text-base-content mb-2 group-hover:text-primary transition-colors">Innovation</h3>
          <p class="text-base-content/75 text-sm">We embrace creativity and continuously explore new technologies to deliver forward-thinking solutions.</p>
        </div>
        <div class="card bg-base-100 shadow-lg hover:shadow-secondary/20 transition-all duration-300 ease-in-out rounded-xl border border-base-300 hover:border-secondary/30 group text-center p-6">
           <div class="avatar placeholder mb-4 mx-auto">
            <div class="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
              <Icon name="heroicons:users-20-solid" class="w-8 h-8" />
            </div>
          </div>
          <h3 class="text-xl font-headings font-semibold text-base-content mb-2 group-hover:text-secondary transition-colors">Collaboration</h3>
          <p class="text-base-content/75 text-sm">We believe in the power of teamwork, both within our squad and with our clients, to achieve shared goals.</p>
        </div>
        <div class="card bg-base-100 shadow-lg hover:shadow-accent/20 transition-all duration-300 ease-in-out rounded-xl border border-base-300 hover:border-accent/30 group text-center p-6 sm:col-span-2 lg:col-span-1">
          <div class="avatar placeholder mb-4 mx-auto">
            <div class="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
              <Icon name="heroicons:check-badge-20-solid" class="w-8 h-8" />
            </div>
          </div>
          <h3 class="text-xl font-headings font-semibold text-base-content mb-2 group-hover:text-accent transition-colors">Quality & Integrity</h3>
          <p class="text-base-content/75 text-sm">We are committed to delivering high-quality work and conducting our business with honesty and transparency.</p>
        </div>
      </div>
    </UiSectionContainer>

    <!-- Meet the Team (Placeholder) -->
    <UiSectionContainer
      title="Meet Our <span class='text-primary'>Squad</span>"
      description="The talented individuals who make SquadCoders a hub of creativity and expertise."
      background-color="bg-base-100"
      padding-y="py-12 md:py-16"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Team Member Placeholder 1 -->
        <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden group">
          <figure class="aspect-[4/3]">
            <NuxtImg
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=75"
              alt="Alex Doe - Lead Developer" width="400" height="300"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:50vw lg:300px" format="webp" loading="lazy"
            />
          </figure>
          <div class="card-body items-center text-center p-4 md:p-6">
            <h3 class="card-title font-headings text-lg text-base-content">Alex Doe</h3>
            <p class="text-sm text-secondary font-semibold">Lead Developer</p>
            <p class="text-xs text-base-content/70 mt-1">Expert in turning complex problems into elegant solutions.</p>
          </div>
        </div>
        <!-- Team Member Placeholder 2 -->
        <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden group">
          <figure class="aspect-[4/3]">
            <NuxtImg
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=75"
              alt="Jamie Smith - UI/UX Lead" width="400" height="300"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:50vw lg:300px" format="webp" loading="lazy"
            />
          </figure>
          <div class="card-body items-center text-center p-4 md:p-6">
            <h3 class="card-title font-headings text-lg text-base-content">Jamie Smith</h3>
            <p class="text-sm text-secondary font-semibold">UI/UX Lead</p>
            <p class="text-xs text-base-content/70 mt-1">Passionate about crafting intuitive and beautiful user experiences.</p>
          </div>
        </div>
        <!-- Team Member Placeholder 3 -->
        <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl overflow-hidden group">
          <figure class="aspect-[4/3]">
            <NuxtImg
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=75"
              alt="Casey Lee - Project Manager" width="400" height="300"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:50vw lg:300px" format="webp" loading="lazy"
            />
          </figure>
          <div class="card-body items-center text-center p-4 md:p-6">
            <h3 class="card-title font-headings text-lg text-base-content">Casey Lee</h3>
            <p class="text-sm text-secondary font-semibold">Project Manager</p>
            <p class="text-xs text-base-content/70 mt-1">Ensuring projects are delivered on time and exceed expectations.</p>
          </div>
        </div>
      </div>
      <p class="text-center mt-10 text-base-content/70">
        ...and many more talented individuals!
      </p>
    </UiSectionContainer>

    <!-- CTA / Join Us -->
    <SectionsCallToAction
      title="Want to Join Our Squad or Start a Project?"
      description="Whether you're looking to build your next big idea or seeking a dynamic team to grow with, we'd love to connect."
      button-text="Get In Touch"
      button-link="/contact"
      button-style="btn-neutral hover:bg-opacity-80"
      :secondary-button="{ text: 'View Careers', link: '#', style: 'btn-outline', icon: 'heroicons:briefcase-20-solid' }"
      background-color="bg-gradient-to-r from-primary to-accent"
      text-color="text-primary-content"
    />
  </div>
</template>

<script setup>
// Page-specific logic can go here
</script>

<style scoped>
/* Scoped styles for about page if needed */
</style>
