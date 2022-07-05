import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "data/redux/redux.store";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "components/universalComponents/Page.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Page>
      <React.StrictMode>
        <Router basename="homepage">
          <App />
        </Router>
      </React.StrictMode>
    </Page>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
