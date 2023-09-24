import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./views/IntroPage";
import Welcome from "./views/Welcome";
import Navbar from "./components/Header";
import About from "./views/About";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/introPage" element={<IntroPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
