<template>
  <div>
    <Head>
      <Title>About Us | SquadCoders</Title>
      <Meta name="description" content="Learn about SquadCoders: our mission, values, and the passionate team dedicated to building exceptional digital experiences." />
    </Head>

    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold font-headings text-primary sm:text-5xl">
          About SquadCoders
        </h1>
        <p class="mt-4 text-lg text-base-content/70 sm:text-xl max-w-2xl mx-auto">
          We are a collective of passionate developers, designers, and strategists committed to building the future of the web.
        </p>
      </div>
    </section>

    <!-- Our Story / Mission -->
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold font-headings text-base-content mb-6">
              Our <span class="text-primary">Mission</span> & Story
            </h2>
            <p class="text-lg text-base-content/90 mb-4">
              Founded on the principle of collaborative innovation, SquadCoders was born from a shared desire to create meaningful and impactful digital solutions. We saw a need for a web agency that not only delivers technically excellent products but also fosters true partnerships with its clients.
            </p>
            <p class="text-base-content/70 mb-4">
              Our mission is to empower businesses by transforming their digital visions into reality. We strive to be more than just a service provider; we aim to be an extension of your team, dedicated to your success.
            </p>
            <p class="text-base-content/70">
              Every line of code we write, every pixel we place, and every strategy we devise is driven by our commitment to quality, creativity, and achieving outstanding results for those we serve.
            </p>
          </div>
          <div class="h-full">
            <NuxtImg src="https://source.unsplash.com/600x450/?team,collaboration,office,startup" alt="Our Mission and Story at SquadCoders - A collaborative workspace" width="600" height="450" class="rounded-lg shadow-xl w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Core Values -->
    <section class="py-16 md:py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Our Core <span class="text-secondary">Values</span></h2>
          <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            These principles guide our work, our collaborations, and our commitment to excellence.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card bg-base-100 shadow-lg text-center p-6 hover:shadow-primary/30 transition-shadow duration-300 ease-in-out">
            <div class="avatar placeholder mb-4 mx-auto">
              <div class="bg-primary text-primary-content rounded-full w-16 h-16">
                <!-- Heroicon: Light Bulb -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75v-.75m0 0A7.5 7.5 0 0112 15m0 0A7.5 7.5 0 0118 18v.75m0 0A2.25 2.25 0 0015.75 21H8.25a2.25 2.25 0 00-2.25-2.25h.008c.294 0 .556-.1-.762-.274a2.12 2.12 0 01-.81-.633A7.5 7.5 0 0112 15z" /></svg>
              </div>
            </div>
            <h3 class="text-xl font-headings font-semibold text-base-content mb-2">Innovation</h3>
            <p class="text-base-content/70 text-sm">We embrace creativity and continuously explore new technologies to deliver forward-thinking solutions.</p>
          </div>
          <div class="card bg-base-100 shadow-lg text-center p-6 hover:shadow-secondary/30 transition-shadow duration-300 ease-in-out">
             <div class="avatar placeholder mb-4 mx-auto">
              <div class="bg-secondary text-secondary-content rounded-full w-16 h-16">
                <!-- Heroicon: Users -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.94-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.06 2.772m10.12 0L12 12.75m0 0l-.001-.03a5.995 5.995 0 00-5.06 2.772m5.061 2.772a5.971 5.971 0 00-.94-3.197M12 12.75a5.995 5.995 0 00-5.06 2.772m0 0a6.062 6.062 0 01-5.963-1.584m0 0L12 3.75l.001.03a5.995 5.995 0 005.06 2.772M3 18.72v-3.364c0-.939.368-1.824 1.03-2.486l.001-.001a5.995 5.995 0 015.06-2.772M3 18.72C3 19.99 4.01 21 5.25 21h1.5c.121 0 .238-.013.35-.038M3 18.72V9.75A6.375 6.375 0 019.375 3.375h5.25A6.375 6.375 0 0121 9.75v3.364c0 .939-.368 1.824-1.03 2.486M21 18.72c0 1.27-.01 2.527-.038 3.772M21 18.72h-1.5a5.25 5.25 0 00-5.25-5.25H9.375a5.25 5.25 0 00-5.25 5.25H1.5" /></svg>
              </div>
            </div>
            <h3 class="text-xl font-headings font-semibold text-base-content mb-2">Collaboration</h3>
            <p class="text-base-content/70 text-sm">We believe in the power of teamwork, both within our squad and with our clients, to achieve shared goals.</p>
          </div>
          <div class="card bg-base-100 shadow-lg text-center p-6 hover:shadow-accent/30 transition-shadow duration-300 ease-in-out sm:col-span-2 lg:col-span-1">
            <div class="avatar placeholder mb-4 mx-auto">
              <div class="bg-accent text-accent-content rounded-full w-16 h-16">
                <!-- Heroicon: Check Badge -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>
            <h3 class="text-xl font-headings font-semibold text-base-content mb-2">Quality & Integrity</h3>
            <p class="text-base-content/70 text-sm">We are committed to delivering high-quality work and conducting our business with honesty and transparency.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team (Placeholder) -->
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-headings text-base-content">Meet Our <span class="text-primary">Squad</span></h2>
          <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            The talented individuals who make SquadCoders a hub of creativity and expertise.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <!-- Team Member Placeholder 1 -->
          <div class="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <figure class="px-6 pt-6 h-64">
              <NuxtImg src="https://source.unsplash.com/300x300/?professional,headshot,abstract,male" alt="Alex Doe - Lead Developer" width="300" height="300" class="rounded-xl w-full h-full object-cover" />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title font-headings text-lg text-base-content">Alex Doe</h3>
              <p class="text-sm text-secondary font-semibold">Lead Developer</p>
              <p class="text-xs text-base-content/70 mt-1">Expert in turning complex problems into elegant solutions.</p>
            </div>
          </div>
          <!-- Team Member Placeholder 2 -->
          <div class="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <figure class="px-6 pt-6 h-64">
              <NuxtImg src="https://source.unsplash.com/300x300/?professional,headshot,abstract,female" alt="Jamie Smith - UI/UX Lead" width="300" height="300" class="rounded-xl w-full h-full object-cover" />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title font-headings text-lg text-base-content">Jamie Smith</h3>
              <p class="text-sm text-secondary font-semibold">UI/UX Lead</p>
              <p class="text-xs text-base-content/70 mt-1">Passionate about crafting intuitive and beautiful user experiences.</p>
            </div>
          </div>
          <!-- Team Member Placeholder 3 -->
          <div class="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <figure class="px-6 pt-6 h-64">
              <NuxtImg src="https://source.unsplash.com/300x300/?project,manager,profile,tech" alt="Casey Lee - Project Manager" width="300" height="300" class="rounded-xl w-full h-full object-cover" />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title font-headings text-lg text-base-content">Casey Lee</h3>
              <p class="text-sm text-secondary font-semibold">Project Manager</p>
              <p class="text-xs text-base-content/70 mt-1">Ensuring projects are delivered on time and exceed expectations.</p>
            </div>
          </div>
        </div>
        <p class="text-center mt-10 text-base-content/70">
          ...and many more talented individuals!
        </p>
      </div>
    </section>

    <!-- CTA / Join Us -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-content">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold font-headings">Want to Join Our Squad or Start a Project?</h2>
            <p class="mt-4 text-lg text-primary-content/80 max-w-xl mx-auto">
                Whether you're looking to build your next big idea or seeking a dynamic team to grow with, we'd love to connect.
            </p>
            <div class="mt-8 space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
                <NuxtLink to="/contact" class="btn btn-lg btn-neutral hover:btn-neutral-focus">
                    Get In Touch
                </NuxtLink>
                <NuxtLink to="/careers" class="btn btn-lg btn-outline text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-neutral ml-0 sm:ml-4">
                    View Careers (Placeholder)
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
/* Scoped styles for about page if needed */
</style>
