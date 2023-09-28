<script setup lang="ts">
import { watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
