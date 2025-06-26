<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-700">Login or Sign Up</h2>

      <div v-if="authError" class="p-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
        {{ authError }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="••••••••"
          >
        </div>

        <div>
          <button
            type="submit"
            :disabled="status === 'loading' || loading"
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
          >
            <span v-if="status === 'loading' || loading">Processing...</span>
            <span v-else>Sign In / Sign Up</span>
          </button>
        </div>
      </form>
      <p class="text-xs text-center text-gray-500">
        If you don't have an account, one will be created for you with the provided credentials.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true, // Redirect to dashboard if already authenticated
    navigateAuthenticatedTo: '/admin/dashboard', // Where to redirect if authenticated
  }
});

const { signIn, status, data } = useAuth();
const router = useRouter();

const email = ref('');
const password = ref('');
const authError = ref<string | null>(null);
const loading = ref(false); // Local loading state for the form submission

const handleLogin = async () => {
  authError.value = null;
  loading.value = true;
  try {
    // The callbackUrl will be handled by the global middleware or default behavior of signIn
    // which usually redirects to the page the user was trying to access or a default one.
    // We specify /admin/dashboard as a fallback.
    const result = await signIn('credentials', {
      email: email.value,
      password: password.value,
      redirect: false // Important to handle redirect manually or check result
    });

    if (result?.error) {
      authError.value = 'Login failed. Please check your credentials. Error: ' + result.error;
      if (result.error === 'CredentialsSignin') {
        authError.value = 'Invalid email or password.';
      } else {
        authError.value = 'An unknown error occurred during sign-in.';
      }
    } else if (result?.ok && !result.error) {
      // Successful sign-in, router.push or rely on watcher/global middleware
      // Since globalAppMiddleware is on, it should redirect to the intended page or /admin/dashboard
      await router.push(router.currentRoute.value.query.callbackUrl?.toString() || '/admin/dashboard');
    }
  } catch (error) {
    console.error('Login error:', error);
    authError.value = 'An unexpected error occurred.';
  } finally {
    loading.value = false;
  }
};

// Watch for authenticated status to redirect if the user logs in on this page
// (e.g. if redirect:false was used and then status changes)
watch(status, (newStatus) => {
  if (newStatus === 'authenticated') {
    const callbackUrl = router.currentRoute.value.query.callbackUrl?.toString() || '/admin/dashboard';
    router.push(callbackUrl);
  }
}, { immediate: true });

</script>
