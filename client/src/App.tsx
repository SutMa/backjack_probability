import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./views/IntroPage";
import Welcome from "./views/Welcome";
import Navbar from "./components/Header";
import About from "./views/About";

const App = () => {
  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/introPage" element={<IntroPage />}/>
      </Routes>
    </div>
  );
};

export default App;
