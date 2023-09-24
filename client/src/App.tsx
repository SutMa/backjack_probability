import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Navbar from "./components/Header";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Charts from "./views/Charts";
import Settings from "./views/Settings";
import Calculator from "./views/Calculator";
import Game from "./views/Game";
import Customize from "./views/Customize";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/charts" element={<Charts />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/customize" element={<Customize />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
