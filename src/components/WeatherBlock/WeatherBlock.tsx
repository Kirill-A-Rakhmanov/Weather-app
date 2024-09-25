import React from "react";

import styles from "./WeatherBlock.module.scss";
import {
  Container,
  getWeatherFull,
  mapResponseData,
  WeatherFull,
  WeatherState,
} from "@/shared/shared";
import {
  selectSearch,
  setSearchValue,
  useAppDispatch,
  useAppSelector,
} from "@/redux/redux";
import Weather from "../Weather/Weather";
import NoWeather from "../NoWeather/NoWeather";

export const WeatherBlock = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(selectSearch);
  const [weather, setWeather] = React.useState<WeatherState<WeatherFull>>({
    data: null,
    loading: false,
  });

  React.useEffect(() => {
    if (value) {
      setWeather({ loading: true, data: null });
      getWeatherFull(value)
        .then((data) =>
          setWeather({ loading: false, data: mapResponseData(data) })
        )
        .catch(() => {
          dispatch(setSearchValue(""));
          setWeather({
            loading: false,
            data: null,
          });
          window.alert("Cannot find the city");
        });
    }
  }, [value]);

  console.log(weather);

  return (
    <section className={styles.weather}>
      <Container>
        <div className={styles.content}>
          {!weather.loading && !weather.data ? (
            <NoWeather />
          ) : (
            <Weather data={weather.data} loading={weather.loading} />
          )}
        </div>
      </Container>
    </section>
  );
};
