import React from "react";

import { CurrentWeather, Footer, Header } from "@/components/components";

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
