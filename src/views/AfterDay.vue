<script setup lang="ts">
import { useRoute } from "vue-router";
import NavbarSlider from "../components/NavbarSlider.vue";
import HeroHeader from "../components/HeroHeader.vue";
import HeroSessions from "../components/HeroSessions.vue";
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
      <div class="mt-10">
        <HeroSessions />
      </div>
    </div>
  </main>
</template>
