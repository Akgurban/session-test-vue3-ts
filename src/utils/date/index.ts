const months: any = {
  ar: [
    "سبتمبر",
    "شهر فبراير",
    "يمشي",
    "أبريل",
    "يمكن",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "نعم",
    "شهر نوفمبر",
    "ديسمبر",
  ],
  ru: [
    "January",
    "February",
    "March",
    "April",
    "May ",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ],
};
const weeks: any = {
  ar: [
    "الاثنين",
    "يوم الثلاثاء",
    "يوم الخميس",
    "الأربعاء",
    "جمعة",
    "يونيو",
    "السبت",
  ],
  ru: [
    "Monday",
    "Tuesday",
    "Thursday",
    "Wednesday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

export function formatDate(lang: string) {
  const date = new Date();
  const day = date.getDate();
  const week = weeks[lang][date.getDay() - 1];
  const year = date.getFullYear();
  const month = months[lang][date.getMonth()];
  return `${week}, ${month} ${day}, ${year}`;
}

export function formatFixDate(lang: string, add: number) {
  const date = new Date();
  if (
    date.getMonth() == 1 ||
    date.getDate() == 3 ||
    date.getMonth() == 5 ||
    date.getMonth() == 7 ||
    date.getMonth() == 9 ||
    date.getMonth() == 11
  ) {
    var day = (date.getDate() + add) % 31;
  } else {
    var day = (date.getDate() + add) % 30;
    day == 0 ? (day = 30) : (day = day);
  }
  const week = weeks[lang][(date.getDay() - 1 + add) % 7];
  const year = date.getFullYear();
  const month = months[lang][date.getMonth()];
  return `${week}, ${month} ${day}, ${year}`;
}

export function getDay(lang: string, add: number) {
  const date = new Date();
  if (
    date.getMonth() == 1 ||
    date.getDate() == 3 ||
    date.getMonth() == 5 ||
    date.getMonth() == 7 ||
    date.getMonth() == 9 ||
    date.getMonth() == 11
  ) {
    var day = (date.getDate() + add) % 31;
  } else {
    var day = (date.getDate() + add) % 30;
    day == 0 ? (day = 30) : (day = day);
  }
  const month = months[lang][date.getMonth()];
  return day;
}

export function getWeek(lang: string, add: number) {
  const date = new Date();
  const week = weeks[lang][(date.getDay() - 1 + add) % 7];
  return week;
}
