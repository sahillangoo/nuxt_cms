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
    <section class="py-16 md:py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold font-headings text-base-content mb-4">Contact <span class="text-primary">SquadCoders</span></h2>
              <p class="text-base-content/70 mb-6">
                Our team is available to assist you. Please feel free to contact us through any of the methods below, or use the form to send us a direct message.
              </p>
            </div>

            <UiContactInfo
              title="Our Office"
              :items="[
                { text: '123 Coding Lane, Dev City, TX 75001' },
                { text: 'United States' }
              ]"
              icon-name="heroicons:map-pin"
              bg-color="bg-primary"
              text-color="text-primary-content"
            />

            <UiContactInfo
              title="Email Us"
              :items="[
                { text: 'contact@squadcoders.dev', link: 'mailto:contact@squadcoders.dev' },
                { text: 'support@squadcoders.dev', link: 'mailto:support@squadcoders.dev' }
              ]"
              icon-name="heroicons:envelope"
              bg-color="bg-secondary"
              text-color="text-secondary-content"
            />

            <UiContactInfo
              title="Call Us"
              :items="[
                { text: '(555) 123-4567 (Sales)' },
                { text: '(555) 987-6543 (Support)' }
              ]"
              icon-name="heroicons:phone"
              bg-color="bg-accent"
              text-color="text-accent-content"
            />

            <div class="pt-6">
                <h3 class="text-lg font-semibold font-headings text-base-content mb-2">Find Us Here</h3>
                <div class="aspect-w-16 aspect-h-9 bg-base-300 rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.666958489812!2d-96.79685568481797!3d32.77666418097565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992935297d6b%3A0x1e1f7b0c6b6b0f6!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2suk!4v1628596029673!5m2!1sen!2suk"
                        width="100%"
                        height="300"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        class="rounded-lg"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
          </div>

          <!-- Contact Form -->
          <FormsContactForm @submit="handleFormSubmit" />

        </div>
      </div>
    </section>

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
