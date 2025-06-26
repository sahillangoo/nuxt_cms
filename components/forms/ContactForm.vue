<template>
  <div class="bg-base-200 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-base-300">
    <h2 class="text-xl sm:text-2xl font-bold font-headings text-base-content mb-6">
      Send Us a <span class="text-secondary">Message</span>
    </h2>
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div>
        <label for="name" class="label py-1">
          <span class="label-text text-base-content/80 text-sm font-medium">Full Name</span>
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="e.g. John Doe"
          class="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary/50"
          required
        />
      </div>

      <div>
        <label for="email" class="label py-1">
          <span class="label-text text-base-content/80 text-sm font-medium">Email Address</span>
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="e.g. john@example.com"
          class="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary/50"
          required
        />
      </div>

      <div>
        <label for="subject" class="label py-1">
          <span class="label-text text-base-content/80 text-sm font-medium">Subject</span>
        </label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          placeholder="e.g. Project Inquiry"
          class="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary/50"
          required
        />
      </div>

      <div>
        <label for="service" class="label py-1">
          <span class="label-text text-base-content/80 text-sm font-medium">Service of Interest</span>
        </label>
        <select
          id="service"
          v-model="form.service"
          class="select select-bordered select-primary w-full focus:ring-2 focus:ring-primary/50"
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
        <label for="message" class="label py-1">
          <span class="label-text text-base-content/80 text-sm font-medium">Message</span>
        </label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Tell us about your project or question..."
          class="textarea textarea-bordered textarea-primary w-full h-32 focus:ring-2 focus:ring-primary/50 resize-vertical min-h-[8rem]"
          required
        ></textarea>
      </div>

      <div class="form-control pt-2">
        <label class="label cursor-pointer justify-start items-start space-x-3">
          <input
            type="checkbox"
            v-model="form.consent"
            class="checkbox checkbox-primary checkbox-sm mt-1"
            required
          />
          <span class="label-text text-xs sm:text-sm text-base-content/75">
            I agree to be contacted regarding my inquiry and understand that my information will be handled according to the <NuxtLink to="/privacy" class="link link-primary hover:link-secondary">privacy policy</NuxtLink>.
          </span>
        </label>
      </div>

      <button
        type="submit"
        class="btn btn-primary btn-block group"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="loading loading-spinner loading-sm"></span>
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        <Icon v-if="!isSubmitting" name="heroicons:paper-airplane-20-solid" class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
