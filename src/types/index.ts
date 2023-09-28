import type tm from "../locales/tm.json";

export interface SessionItem {
  id: number;
  title: {
    [locale: string]: string;
  };
  subTitle: {
    [locale: string]: string;
  };
  timeFrom: string;
  timeTo: string;
  img: string;
}

export type MessageSchema = typeof tm;
