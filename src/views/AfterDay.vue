<script setup lang="ts">
import { useRoute } from "vue-router";
import NavbarSlider from "../components/NavbarSlider.vue";
import HeroHeader from "../components/HeroHeader.vue";
import HeroSessions from "../components/HeroSessions.vue";
import { ref, watch, watchEffect } from "vue";
const comments = ref("");
const route = useRoute();

fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then((response) => response.json())
  .then((json) => (comments.value = json));

watch(
  route,
  async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => (comments.value = json));
  },
  { deep: true }
);
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div
      class="w-full mx-auto max-w-[1240px] dark dark:text-white transition-colors duration-700 py-5 px-8"
    >
      <HeroHeader />
      <div class="mt-12 sm:hidden block">
        <NavbarSlider :per="3"></NavbarSlider>
      </div>

      <div class="mt-12 lg:hidden sm:block hidden">
        <NavbarSlider :per="5"></NavbarSlider>
      </div>
      <div class="mt-12 lg:block hidden">
        <NavbarSlider :per="7"></NavbarSlider>
      </div>
      <pre>

       {{ comments }}
          </pre
      >
      <div class="mt-10">
        <HeroSessions />
      </div>
    </div>
  </main>
</template>
