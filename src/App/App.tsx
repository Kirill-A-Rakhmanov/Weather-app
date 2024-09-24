import { Footer, Header } from "@/components/components";
import { Home } from "@/pages/pages";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};
