import { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "pages/App";
import { store } from "store/store";
import "./i18n/config";
import "./index.css";

const container = document.getElementById("root");

render(
  <BrowserRouter>
    <Provider {...{ store }}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>,
  container
);
