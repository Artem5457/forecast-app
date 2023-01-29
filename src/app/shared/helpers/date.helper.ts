import {DAYS_OF_WEEK, MONTHS} from "../shared.constants";

export const getCurrentDate = (): string => {
  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();

  return `${getDayOfWeek(day)}, ${date} ${getMonth(month)}`;
}

export const getDayOfWeek = (dayOfWeek: number): DAYS_OF_WEEK => {
  switch (dayOfWeek) {
    case 1:
      return DAYS_OF_WEEK.MON;
    case 2:
      return DAYS_OF_WEEK.TUE;
    case 3:
      return DAYS_OF_WEEK.WED;
    case 4:
      return DAYS_OF_WEEK.THR;
    case 5:
      return DAYS_OF_WEEK.FRI;
    case 6:
      return DAYS_OF_WEEK.SAT;
    default:
      return DAYS_OF_WEEK.SUN;
  }
};

export const getMonth = (month: number): MONTHS => {
  switch (month) {
    case 0:
      return MONTHS.JAN;
    case 1:
      return MONTHS.FEB;
    case 2:
      return MONTHS.MAR;
    case 3:
      return MONTHS.APR;
    case 4:
      return MONTHS.MAY;
    case 5:
      return MONTHS.JUN;
    case 6:
      return MONTHS.JUL;
    case 7:
      return MONTHS.AUG;
    case 8:
      return MONTHS.SEP;
    case 9:
      return MONTHS.OCT;
    case 10:
      return MONTHS.NOV;
    default:
      return MONTHS.DEC;
  }
};
