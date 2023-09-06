// // UseEffect

// // useEffect is a hook in React that allows you to perform side effects in your functional components. Side effects typically include data fetching, manual DOM manipulations, or subscribing to external data sources. useEffect is essential for managing these side effects in a React application. //

//============================================================================================================================================//

// // more detaild in ./component/UseEffect.jsx

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
