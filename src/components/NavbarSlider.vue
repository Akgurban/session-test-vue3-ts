<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { formatDate, formatFixDate, getWeek, getDay } from "@/utils/date";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useIndex } from "@/stores/sessions";
const { t, locale } = useI18n();
const sessions = useIndex();

const theme = localStorage.getItem("theme");

const props = defineProps<{
  per?: number;
}>();
const widgetClass = (number: number, numberRoute: number) => {
  if (number == numberRoute && !sessions.getDark) {
    return "border-2 border-[#9484F7]";
  } else if (number == numberRoute && sessions.getDark) {
    return "border-2 border-[#fff] bg-[#282C41] ";
  } else if (number !== numberRoute && sessions.getDark) {
    return "border-2 border-[#9297b73d] bg-[#111a2b02] text-[#9297B7]";
  } else {
    return "border-2 border-[#9297b73d]";
  }
};
</script>
<template>
  <swiper
    :spaceBetween="40"
    :slidesPerView="props.per"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    class="pb-3 mx-12 px-12"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="[Pagination, Navigation]"
  >
    <swiper-slide
      v-for="(item, index) in 7"
      :key="item"
      @click="$router.push(`/after-day/${index}`)"
      class="group cursor-pointer mb-3 mt-3 hover:shadow-none md:hover:shadow-hero transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
    >
      <div
        :class="widgetClass(index, +$route.params.id)"
        class="md:w-full w-full aspect-square h-auto md:p-6 md:gap-7 p-2 transition-colors duration-300 flex flex-col rounded-xl items-center justify-between"
      >
        <div
          :class="
            index == +$route.params.id && theme == 'light'
              ? ' text-[#9484F7] '
              : index == +$route.params.id && theme == 'dark'
              ? ' text-[#9484F7]'
              : index !== +$route.params.id && theme == 'dark'
              ? ' text-[#9297B7]'
              : ' text-[#5B628A]'
          "
          class="font-medium md:text-4xl text-base md:leading-7 leading-5 transition-colors duration-300"
        >
          {{ index == 0 ? t("today") : getWeek(locale, index)?.slice(0, 3) }}
        </div>
        <div
          :class="
            index == +$route.params.id && theme == 'light'
              ? 'bg-[#9484F7] text-[#fff] '
              : index == +$route.params.id && theme == 'dark'
              ? 'bg-[#9484F7] text-[#fff] dark:text-[#fff]'
              : 'bg-[#9ca1c029] text-[#5B628A]'
          "
          class="rounded-lg p-2 md:text-4xl font-medium transition-colors duration-300 text-base w-full text-center"
        >
          {{ getDay("ru", index) }}
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
  padding: 0 40px;
}

.swiper-slide {
  text-align: start;
  background: #111a2b02;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev:after {
  color: #000 !important;
  content: url("@/assets/images/chevron-left.svg") !important;
  transform: scale(3.5);
  padding-bottom: 10px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  /* background-image: url("@/assets/chevron.svg"); */
}

.swiper-button-next:after {
  color: #000 !important;
  content: url("@/assets/images/chevron-right.svg") !important;
  padding-bottom: 10px;
  padding-left: 5px;
  transform: scale(3.5);
  display: flex;
  align-items: center;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0.4 !important;
  cursor: auto;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

.product_item {
  height: fit-content !important;
  user-select: none !important;
  border-radius: 12px !important;
}
</style>
