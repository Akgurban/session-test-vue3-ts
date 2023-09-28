<script setup lang="ts">
import HeroSessionItem from "./HeroSessionItem.vue";
import { watch, ref } from "vue";
import { useIndex } from "@/stores/sessions";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();
const sessions = useIndex();
const isDark = ref(false);
const theme = () => {
  return localStorage.getItem("theme") == "dark";
};
watch(
  () => localStorage.getItem("theme"),
  () => {
    if (localStorage.getItem("theme") == "dark") {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  }
);
</script>
<template>
  <div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-7">
      <div
        v-for="(item, index) in sessions.getExistSession(+$route.params.id + 1)"
        :key="index"
        class=""
      >
        <HeroSessionItem :session="item" />
      </div>
    </div>
    <div
      v-if="sessions.getExistSession(+$route.params.id + 1).length === 0"
      class="text-center"
    >
      <img
        class="w-3/4 md:1/2 text-center mx-auto"
        src="/no-session.svg"
        alt=""
      />

      <div
        v-if="sessions.getDark"
        class="text-lg text-[#282C41] dark:text-white md:text-3xl md:w-1/2 w-3/4 mx-auto mt-5 mb-8"
        v-html="$t('no-session')"
      ></div>
      <div
        v-else
        class="text-lg text-white md:text-3xl md:w-1/2 w-3/4 mx-auto mt-5 mb-8"
        v-html="$t('no-session')"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
