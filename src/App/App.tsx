import { WeatherBlock, Footer, Header } from "@/components/components";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <WeatherBlock />
      </main>
      <Footer />
    </div>
  );
};
