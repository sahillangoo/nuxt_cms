<template>
  <div>
    <Head>
      <Title>Terms of Service | SquadCoders</Title>
      <Meta name="description" content="Terms of Service for SquadCoders - Professional web development services" />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Terms of Service"
      description="Please read these terms carefully before using our services"
    />

    <!-- Terms Content -->
    <UiSectionContainer background-color="bg-base-100">
      <div class="prose prose-lg max-w-4xl mx-auto">
        <p class="text-gray-500 mb-8">
          <strong>Last updated:</strong> {{ lastUpdated }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
          <p class="text-gray-600 mb-4">
            By accessing and using SquadCoders' services, you accept and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">2. Services Description</h2>
          <p class="text-gray-600 mb-4">
            SquadCoders provides professional web development, design, and digital consulting services. Our services include but are not limited to:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Custom web application development</li>
            <li>Website design and user interface creation</li>
            <li>Component library development</li>
            <li>Technical consulting and architecture planning</li>
            <li>Maintenance and support services</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">3. Payment Terms</h2>
          <p class="text-gray-600 mb-4">
            Payment terms will be outlined in individual project agreements. Generally:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Projects require a deposit before work begins</li>
            <li>Payment schedules are based on project milestones</li>
            <li>Final payment is due before project delivery</li>
            <li>Late payments may incur additional charges</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">4. Intellectual Property</h2>
          <p class="text-gray-600 mb-4">
            Upon full payment, clients receive ownership of the custom code and designs created specifically for their project.
            However, SquadCoders retains the right to:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Use general methodologies and techniques</li>
            <li>Include projects in our portfolio (with client permission)</li>
            <li>Reuse non-proprietary code components and frameworks</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">5. Project Timelines</h2>
          <p class="text-gray-600 mb-4">
            While we strive to meet all agreed-upon deadlines, project timelines may be affected by:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Changes in project scope or requirements</li>
            <li>Delays in client feedback or content provision</li>
            <li>Third-party service dependencies</li>
            <li>Unforeseen technical challenges</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
          <p class="text-gray-600 mb-4">
            SquadCoders shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">7. Termination</h2>
          <p class="text-gray-600 mb-4">
            Either party may terminate services with written notice. Upon termination:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Client is responsible for payment of completed work</li>
            <li>Work-in-progress will be delivered in its current state</li>
            <li>All project materials will be returned to the client</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">8. Changes to Terms</h2>
          <p class="text-gray-600 mb-4">
            SquadCoders reserves the right to modify these terms at any time.
            Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary">9. Contact Information</h2>
          <p class="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div class="bg-base-200 p-6 rounded-lg">
            <p class="text-gray-600">
              <strong>Email:</strong> legal@squadcoders.com<br>
              <strong>Address:</strong> 123 Developer Street, Code City, CC 12345
            </p>
          </div>
        </section>
      </div>
    </UiSectionContainer>

    <!-- Call to Action -->
    <SectionsCallToAction
      title="Questions About Our Terms?"
      description="Our team is here to help clarify any questions you may have about our terms of service."
      button-text="Contact Us"
      button-link="/contact"
    />
  </div>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>

<style scoped>
/* Minimal styles - DaisyUI provides theme-based colors */
</style>
