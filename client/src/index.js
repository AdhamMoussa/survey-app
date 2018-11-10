import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./store/configureStore";
import "./main.scss";

import axios from "axios";
window.axios = axios;

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(jsx, document.getElementById("root"));
