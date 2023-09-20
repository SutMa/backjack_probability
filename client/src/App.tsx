import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./views/introPage";
import Welcome from "./views/welcome";
import Navbar from "./components/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/introPage" element={<IntroPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
