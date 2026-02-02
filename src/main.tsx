import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Swiper JS
// import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

import "./styles/style.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
