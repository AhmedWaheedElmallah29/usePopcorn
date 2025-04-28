import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movie, setMovie] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" size="30px" onMovie={setMovie} />
//       <p>This movie was rated {movie} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={3}
      color="red"
      size="50px"
      defaultRating={1}
      messages={["bad", "good", "Amazing"]}
    />
    <Test /> */}
  </React.StrictMode>
);
