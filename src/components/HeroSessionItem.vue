<script setup lang="ts">
import type { SessionItem } from "../types/index";
import { useI18n } from "vue-i18n";

defineProps<{
  session?: SessionItem;
}>();

const { t, locale } = useI18n();
</script>
<template>
  <div
    class="flex flex-col gap-[10px] cursor-pointer p-2.5 md:p-4 border-2 border-[rgba(16, 24, 40, 0.04)] rounded-2xl"
  >
    <div class="flex items-center gap-2.5">
      <img :src="session?.img" alt="" />
      <div>
        <p class="font-bold text-2xl">
          {{ session?.title[locale] }}
        </p>
        <p class="text-xl">
          {{ session?.subTitle[locale] }}
        </p>
      </div>
    </div>
    <div
      class="flex text-lg md:text-base text-[#9297B7] dark:text-[#5B628A] gap-2"
    >
      <p>→</p>
      <p>{{ session?.timeFrom }} to {{ session?.timeTo }}</p>
    </div>
  </div>
</template>

<style scoped></style>
