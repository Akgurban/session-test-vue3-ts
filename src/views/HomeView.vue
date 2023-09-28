<script setup lang="ts">
import NavbarSlider from "../components/NavbarSlider.vue";
import HeroHeader from "../components/HeroHeader.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div
      class="w-full mx-auto max-w-[1240px] dark dark:text-white transition-colors duration-700 py-5 px-3"
    >
      <HeroHeader />

      <NavbarSlider class="mt-12"></NavbarSlider>
    </div>
  </main>
</template>
