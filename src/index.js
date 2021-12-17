import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Pokemon from "./pages/Pokemon";
import About from "./pages/About";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="pokemon" element={<Pokemon />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);