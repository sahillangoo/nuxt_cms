<template>
  <div class="container mx-auto p-4">
    <div v-if="status === 'authenticated'" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p class="mb-2">Welcome, <span class="font-semibold">{{ data?.user?.email || 'User' }}</span>!</p>
      <p class="mb-4">You are successfully logged in.</p>
      <!-- We will add logout functionality later -->
      <button
        @click="handleSignOut"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Out
      </button>
    </div>
    <div v-else-if="status === 'loading'">
      <p>Loading session...</p>
    </div>
    <div v-else>
      <p>You are not authenticated. Redirecting to login...</p>
      <!-- Should be redirected by global middleware automatically -->
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // This is an example of how you could add middleware per-page
  // However, we've enabled globalAppMiddleware in nuxt.config.ts for auth,
  // so all pages are protected by default.
  // You can create more specific middleware if needed, e.g. for roles.
  // auth: true // This would use the default auth middleware if globalAppMiddleware was false
});

const { status, data, signOut } = useAuth();

const handleSignOut = async () => {
  await signOut({ callbackUrl: '/login' }); // Redirect to login after sign out
};

// Watch for unauthenticated status to redirect if necessary (though global middleware should handle this)
watch(status, (newStatus) => {
  if (newStatus === 'unauthenticated') {
    // Optionally navigate or rely on global middleware
    // useRouter().push('/login');
  }
}, { immediate: true });

</script>

<style scoped>
/* You can add page-specific styles here if needed */
</style>
