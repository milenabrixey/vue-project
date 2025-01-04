<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import SocialMedia from './components/SocialMedia.vue'
</script>

<template>
  <header>
    <img alt="Logo" class="logo" src="@/assets/images/logo.png" width="35%" height="35%" />

    <div class="wrapper">
      <HelloWorld msg="Software Developer" />

      <nav class="flex justify-center p-4">
        <div class="flex space-x-4 bg-white rounded-full shadow-md py-2 px-4 sm:px-6">
          <RouterLink
            to="/"
            class="text-gray-600 px-2 sm:px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-gray-600 px-2 sm:px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >About</RouterLink
          >
          <RouterLink
            to="/experience"
            class="text-gray-600 px-2 sm:px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >Experience</RouterLink
          >
          <RouterLink
            to="/skills"
            class="text-gray-600 px-2 sm:px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >Skills</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
  <!-- <SocialMedia /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text-active);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
