import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import { AlertProvider } from "./AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AlertProvider>
          <App />
        </AlertProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
