import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./app/App";

import { Provider } from "react-redux";
import { store } from "./redux/redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
