// src/App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import router from "./app/index";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
