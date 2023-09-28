import type { SessionItem } from "../types/index";

import { defineStore } from "pinia";

export const useIndex = defineStore({
  id: "index",
  state: () => ({
    sessions: [
      {
        id: 1,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/1.png",
      },
      {
        id: 1,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/2.svg",
      },
      {
        id: 1,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/1.png",
      },
      {
        id: 1,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/2.svg",
      },
      {
        id: 1,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/1.png",
      },
      {
        id: 1,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/2.svg",
      },
      {
        id: 1,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/1.png",
      },
      {
        id: 1,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/2.svg",
      },
      {
        id: 1,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/3.svg",
      },
      {
        id: 1,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/4.svg",
      },
      {
        id: 3,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },

        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/2.svg",
      },
      {
        id: 3,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/4.svg",
      },
      {
        id: 5,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/4.svg",
      },
      {
        id: 5,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/4.svg",
      },
      {
        id: 5,
        title: {
          ru: "Memorisely",
          ar: "عن ظهر قلب",
        },
        subTitle: {
          ru: "E-Learning.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/4.svg",
      },
    ] as SessionItem[],
    isDark: true,
  }),
  actions: {
    getExistSession(day: number) {
      let sessionExist: SessionItem[] = [];
      this.sessions.map((item) => {
        item.id === day ? sessionExist.push(item) : null;
      });
      return sessionExist;
    },
    changeStatusDark() {
      this.isDark = !this.isDark;
    },
    addOneItem(id: number) {
      this.sessions.push({
        id: id,
        title: {
          ru: "Baraka (YC S21)",
          ar: "بركة (YC S21)",
        },
        subTitle: {
          ru: "Investing. Empowered.",
          ar: "الاستثمار. تمكين.",
        },
        timeFrom: "11:00 AM",
        timeTo: "11:30 AM",
        img: "/1.png",
      });
    },
  },
  getters: {
    getSessions(): SessionItem[] {
      return this.sessions;
    },
    getDark(): boolean | null {
      return this.isDark;
    },
  },
});
