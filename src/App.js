import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricePage from "./pages/PricePage";
import ServicePage from "./pages/ServicePage";
import "./assets/tailwind/index.css";

function App() {
  return (
    <div className="App bg-body">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/price" element={<PricePage />}></Route>
        <Route path="/services" element={<ServicePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
