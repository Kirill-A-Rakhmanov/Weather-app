import React from "react";

export const useDatetime = (tzoffset: number) => {
  const localDate = new Date();
  const localOffset = localDate.getTimezoneOffset() / 60;
  const targetDate = new Date(
    localDate.getTime() + (localOffset + tzoffset) * 60 * 60 * 1000
  );

  const [date, setDate] = React.useState(targetDate);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const localDate = new Date();
      const localOffset = localDate.getTimezoneOffset() / 60;
      const targetDate = new Date(
        localDate.getTime() + (localOffset + tzoffset) * 60 * 60 * 1000
      );
      setDate(targetDate);
    }, 15 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [tzoffset]);

  return {
    date: date.getDate().toString().padStart(2, "0"),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    year: date.getFullYear().toString(),
    hour: date.getHours().toString().padStart(2, "0"),
    minutes: date.getMinutes().toString().padStart(2, "0"),
  };
};
