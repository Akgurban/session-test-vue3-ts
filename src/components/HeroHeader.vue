<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { formatDate, formatFixDate } from "@/utils/date";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import IconPlus from "./icons/IconPlus.vue";
import { useIndex } from "@/stores/sessions";

const sessions = useIndex();

const theme = () => {
  return localStorage.getItem("theme") == "dark";
};
const { t, locale } = useI18n();
const isDark = ref(false);
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
localStorage.theme === "dark" ? (isDark.value = true) : (isDark.value = false);
if (!localStorage?.getItem("theme")) {
  localStorage.setItem("theme", "light");
}
const toggleDark = (e: boolean) => {
  if (isDark.value) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }
  isDark.value = !isDark.value;
  sessions.changeStatusDark();
};

const SetLocale = (e: string) => {
  locale.value = e;
};
</script>
<template>
  <div class="flex w-full justify-between items-center">
    <div>
      <div
        class="text-xl md:text-3xl font-bold transition duration-300"
        :class="isDark ? 'text-[#fff]' : 'text-[#282C41] '"
      >
        {{ t("title") }}
      </div>
      <div class="text-sm md:text-xl">{{ formatDate(locale) }}</div>
    </div>
    <div class="flex gap-5 items-center">
      <div>
        <button @click="toggleDark(isDark)">
          <div class="mt-2">
            <Transition name="opacity" mode="out-in">
              <img
                v-if="isDark"
                class="w-10"
                src="@/assets/images/dark.svg"
                alt=""
              />
              <img v-else class="w-10" src="@/assets/images/light.png" alt="" />
            </Transition>
          </div>
        </button>
      </div>
      <div
        class="flex gap-6 border-gray-200 dark:bg-black bg-gray-300 rounded-xl"
      >
        <img
          class="cursor-pointer w-15 lg:w-18 sm:w-16 px-3 rounded-l-xl transition-colors duration-200"
          :class="locale == 'ar' ? 'bg-sky-500' : ''"
          src="@/assets/images/arab.png"
          alt=""
          @click="SetLocale('ar')"
        />
        <img
          class="cursor-pointer w-15 lg:w-18 sm:w-16 px-3 rounded-r-xl transition-colors duration-200"
          :class="locale == 'ru' ? 'bg-sky-500' : ''"
          src="@/assets/images/usa.png"
          alt=""
          @click="SetLocale('ru')"
        />
      </div>

      <IconPlus
        v-if="!sessions.getDark"
        class="w-7 h-7 cursor-pointer text-white"
        @click="sessions.addOneItem(+$route.params.id + 1)"
        src="@/assets/images/add.svg"
        alt=""
      />
      <IconPlus
        v-else
        class="w-7 h-7 cursor-pointer text-black"
        @click="sessions.addOneItem(+$route.params.id + 1)"
        src="@/assets/images/add.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
