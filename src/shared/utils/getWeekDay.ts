export const getWeekDay = (date: string) => {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dateArr: string[] = date.split("-");
  const d = new Date(
    Number(dateArr[0]),
    Number(dateArr[1]) - 1,
    Number(dateArr[2])
  );

  return days[d.getDay()];
};
