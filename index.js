import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxrating={10} /> */}
    <App />
    {/* <StarRating
      maxrating={5}
      messages={["bad", "okay", "good", "verygood", "amazing"]}
    /> */}
  </React.StrictMode>
);
