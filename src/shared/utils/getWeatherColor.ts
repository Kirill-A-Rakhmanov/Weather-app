export const getWeatherColor = (icon: string) => {
  const words = icon.split("-");

  const day: string[] = ["day"];
  const night: string[] = ["night"];
  const rain: string[] = [
    "rain",
    "snow",
    "showers",
    "fog",
    "wind",
    "cloudy",
    "thunder",
  ];

  if (night.some((i) => words.includes(i))) {
    return "night";
  } else if (rain.some((i) => words.includes(i))) {
    return "rain";
  } else if (day.some((i) => words.includes(i))) {
    return "day";
  }
};
