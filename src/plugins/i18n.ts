import type { MessageSchema } from "@/types";
import { createI18n as _createI18n } from "vue-i18n";
import ru from "../locales/ru.json";
import ar from "../locales/ar.json";

export const SUPPORT_LOCALES = ["ar", "ru"];

export function createI18n() {
  return _createI18n<[MessageSchema], "ar" | "ru">({
    legacy: false,
    warnHtmlInMessage: "off",
    globalInjection: true,
    locale: localStorage.getItem("locale") ?? "ru",
    fallbackLocale: ["ar"],
    messages: {
      ar,
      ru,
    },
  });
}
