<template>
  <div>
    <Head>
      <Title>Privacy Policy | SquadCoders</Title>
      <Meta name="description" content="Privacy Policy for SquadCoders - How we protect and handle your personal information" />
    </Head>

    <!-- Page Header -->
    <UiPageHeader
      title="Privacy Policy"
      description="Your privacy is important to us. Learn how we collect, use, and protect your information."
    />

    <!-- Privacy Content -->
    <UiSectionContainer background-color="bg-base-100" padding-y="py-12 md:py-16">
      <div class="prose prose-primary max-w-4xl mx-auto">
        <p class="text-base-content/70 mb-8 text-sm">
          <!-- text-sm to make it less prominent -->
          <strong>Last updated:</strong> {{ lastUpdated }}
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you:
          </p>
          <ul>
            <li>Contact us through our website forms</li>
            <li>Subscribe to our newsletter or updates</li>
            <li>Request quotes or project consultations</li>
            <li>Communicate with us via email or phone</li>
          </ul>

          <h3>Types of Personal Information:</h3>
          <ul>
            <li>Name and contact information (email, phone, address)</li>
            <li>Company information and job title</li>
            <li>Project requirements and business needs</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Deliver our services and fulfill project requirements</li>
            <li>Send you updates about your projects</li>
            <li>Improve our services and user experience</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection</li>
            <li>Secure hosting and backup systems</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to:
          </p>
          <ul>
            <li>Provide our services and support</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain business records</li>
          </ul>
          <p>
            Generally, we retain client project data for 3-5 years after project completion.
          </p>
        </section>

        <section>
          <h2>6. Your Rights and Choices</h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>
        </section>

        <section>
          <h2>7. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to:
          </p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve user experience and functionality</li>
            <li>Provide personalized content and recommendations</li>
          </ul>
          <p>
            You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If we become aware that we have collected such information,
            we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by
            posting the new policy on our website and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div class="not-prose bg-base-200 p-6 rounded-xl shadow border border-base-300 text-base-content/90">
            <!-- Use not-prose to prevent prose styling conflicts inside this box -->
            <p><strong>Email:</strong> <a href="mailto:privacy@squadcoders.dev" class="link link-hover text-primary">privacy@squadcoders.dev</a></p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Developer Street, Code City, CC 12345</p>
          </div>
        </section>
      </div>
    </UiSectionContainer>

    <!-- Call to Action -->
    <SectionsCallToAction
      title="Questions About Your Privacy?"
      description="We're committed to transparency. Reach out if you have any questions about how we handle your data."
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
