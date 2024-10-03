import React from "react";
import styles from "./WeatherFavorite.module.scss";
import {
  FavoriteWeather,
  getWeatherColor,
  getWeatherShort,
  WeatherIcon,
  WeatherShort,
  WeatherState,
} from "@/shared/shared";
import { ThreeDots } from "react-loader-spinner";
import clsx from "clsx";
import { useAppDispatch } from "@/redux/hooks";
import { removeFromFavorite, setSearchValue } from "@/redux/redux";
import TrashIcon from "@/assets/icons/trash.svg";

interface Props {
  info: FavoriteWeather;
}

export const WeatherFavorite = ({ info }: Props) => {
  const dispatch = useAppDispatch();
  const [weather, setWeather] = React.useState<WeatherState<WeatherShort>>({
    data: null,
    loading: false,
  });

  React.useEffect(() => {
    setWeather({
      data: null,
      loading: true,
    });
    getWeatherShort(info.resolvedAddress).then((res) =>
      setWeather({
        loading: false,
        data: res,
      })
    );
  }, []);

  const handleClick = () => {
    if (weather.data) dispatch(setSearchValue(weather.data.resolvedAddress));
  };

  const handleTrash = () => {
    dispatch(removeFromFavorite(info.id));
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        weather.data &&
          styles[getWeatherColor(weather.data.currentConditions.icon)!]
      )}
    >
      {weather.data ? (
        <>
          <div className={styles.content}>
            <WeatherIcon
              icon={weather.data.currentConditions.icon}
              className={styles.icon}
            />
            <div onClick={() => handleClick()} className={styles.info}>
              <h3 className={styles.city}>{info.name}</h3>
              <p className={styles.conditions}>
                {weather.data.currentConditions.conditions}
              </p>
            </div>
            <div className={styles.temp}>
              {Math.round(weather.data.currentConditions.temp)}°C
            </div>
            <TrashIcon onClick={() => handleTrash()} className={styles.trash} />
          </div>
        </>
      ) : (
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#010303"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass={styles.spinner}
        />
      )}
    </div>
  );
};
