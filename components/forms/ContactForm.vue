<template>
  <div class="bg-base-200 p-8 md:p-10 rounded-lg shadow-xl">
    <h2 class="text-2xl font-bold font-headings text-base-content mb-6">
      Send Us a <span class="text-secondary">Message</span>
    </h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="label">
          <span class="label-text text-base-content/80">Full Name</span>
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="e.g. John Doe"
          class="input input-bordered w-full focus:input-primary"
          required
        />
      </div>

      <div>
        <label for="email" class="label">
          <span class="label-text text-base-content/80">Email Address</span>
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="e.g. john@example.com"
          class="input input-bordered w-full focus:input-primary"
          required
        />
      </div>

      <div>
        <label for="subject" class="label">
          <span class="label-text text-base-content/80">Subject</span>
        </label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          placeholder="e.g. Project Inquiry"
          class="input input-bordered w-full focus:input-primary"
          required
        />
      </div>

      <div>
        <label for="service" class="label">
          <span class="label-text text-base-content/80">Service of Interest</span>
        </label>
        <select
          id="service"
          v-model="form.service"
          class="select select-bordered w-full focus:select-primary"
        >
          <option disabled value="">Please select a service</option>
          <option value="web-development">Custom Web Development</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="seo">SEO & Digital Strategy</option>
          <option value="consulting">General Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label for="message" class="label">
          <span class="label-text text-base-content/80">Message</span>
        </label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Tell us about your project or question..."
          class="textarea textarea-bordered w-full h-32 focus:textarea-primary resize-none"
          required
        ></textarea>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer justify-start space-x-2">
          <input
            type="checkbox"
            v-model="form.consent"
            class="checkbox checkbox-primary"
            required
          />
          <span class="label-text text-sm text-base-content/70">
            I agree to be contacted regarding my inquiry and understand that my information will be handled according to the privacy policy.
          </span>
        </label>
      </div>

      <button
        type="submit"
        class="btn btn-primary btn-lg w-full hover:btn-primary-focus"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="loading loading-spinner"></span>
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  service: '',
  message: '',
  consent: false
})

const isSubmitting = ref(false)

const emit = defineEmits(['submit'])

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Emit the form data to the parent component
    emit('submit', form.value)

    // Reset form after successful submission
    Object.keys(form.value).forEach(key => {
      if (typeof form.value[key] === 'boolean') {
        form.value[key] = false
      } else {
        form.value[key] = ''
      }
    })

    // Show success message (you can customize this)
    alert('Thank you for your message! We\'ll get back to you soon.')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Pre-populate service field if provided via query parameter
onMounted(() => {
  const route = useRoute()
  if (route.query.service) {
    form.value.service = route.query.service
  }
})
</script>
