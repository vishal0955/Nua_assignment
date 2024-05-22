import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Reducer/index.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toast";

const store = configureStore({
  reducer: RootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer delay={3000}/>
    </Provider>
  </React.StrictMode>
);
