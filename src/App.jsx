import HomePage from "./Pages/HomePage/HomePage";
import LoadAllPage from "./Pages/LoadAllPage/LoadAllPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    // React routing
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/load-all" element={<LoadAllPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
