import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
    
//   <BrowserRouter>
    <App />
//   {/* </BrowserRouter> */}
);
