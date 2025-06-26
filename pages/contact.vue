<template>
  <div>
    <Head>
      <Title>Contact Us | SquadCoders</Title>
      <Meta name="description" content="Get in touch with SquadCoders. We're ready to discuss your project ideas, answer your questions, or explore collaboration opportunities." />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Get In Touch"
      description="We're excited to hear from you! Whether you have a project in mind, a question about our services, or just want to say hello, reach out to us."
    />

    <!-- Contact Details & Form Section -->
    <UiSectionContainer
      padding-y="py-12 md:py-16"
      background-color="bg-base-100"
      title-alignment="left"
    >
      <div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-bold font-headings text-base-content mb-3">Contact <span class="text-primary">SquadCoders</span></h2>
            <p class="text-base-content/75 text-sm sm:text-base">
              Our team is available to assist you. Please feel free to contact us through any of the methods below, or use the form to send us a direct message.
            </p>
          </div>

          <UiContactInfo
            title="Our Office"
            :items="[
              { text: '123 Coding Lane, Dev City, TX 75001' },
              { text: 'United States' }
            ]"
            icon-name="heroicons:map-pin-20-solid"
            bg-color="bg-primary"
          />

          <UiContactInfo
            title="Email Us"
            :items="[
              { text: 'contact@squadcoders.dev', link: 'mailto:contact@squadcoders.dev' },
              { text: 'support@squadcoders.dev', link: 'mailto:support@squadcoders.dev' }
            ]"
            icon-name="heroicons:envelope-20-solid"
            bg-color="bg-secondary"
          />

          <UiContactInfo
            title="Call Us"
            :items="[
              { text: '(555) 123-4567 (Sales)' },
              { text: '(555) 987-6543 (Support)' }
            ]"
            icon-name="heroicons:phone-20-solid"
            bg-color="bg-accent"
          />

          <div class="pt-4">
              <h3 class="text-lg font-semibold font-headings text-base-content mb-3">Find Us Here</h3>
              <div class="aspect-video bg-base-300 rounded-xl shadow-lg overflow-hidden border border-base-300">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.666958489812!2d-96.79685568481797!3d32.77666418097565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992935297d6b%3A0x1e1f7b0c6b6b0f6!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2suk!4v1628596029673!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
          </div>
        </div>

        <!-- Contact Form -->
        <FormsContactForm @submit="handleFormSubmit" class="md:mt-0 -mt-4 sm:mt-0" />
        <!-- Negative margin on small screens to pull it up slightly if desired, or remove if not needed -->
      </div>
    </UiSectionContainer>
  </div>
</template>

<script setup>
const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData);
  // Here you would typically send the data to your backend API
  // Example: await $fetch('/api/contact', { method: 'POST', body: formData })
}
</script>

<style scoped>
/* Scoped styles for contact page if needed */
</style>
