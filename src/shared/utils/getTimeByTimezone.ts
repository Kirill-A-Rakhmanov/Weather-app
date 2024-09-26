export const getTimeByTimezone = (tzoffset: number) => {
  const d = new Date();
  return {
    hour: d.getUTCHours() + tzoffset,
    minutes: d.getUTCMinutes(),
  };
};
