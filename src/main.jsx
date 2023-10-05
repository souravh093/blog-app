import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserAuthListener from "./components/UserAuthListener/UserAuthListener";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <UserAuthListener />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
