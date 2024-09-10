import React from "react";
import { Footer, Header } from "../components/components";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <CurrentWeather />
      </main>
      <Footer />
    </div>
  );
};
