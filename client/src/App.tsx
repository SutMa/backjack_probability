import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Navbar from "./components/Header";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Charts from "./views/Charts";
import Terms from "./views/Terms";
import Game from "./views/Game";
import Customize from "./views/Customize";
import * as ROUTES from "./data/routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Welcome />}/>
        <Route path={ROUTES.ABOUT_US} element={<About />}/>
        <Route path={ROUTES.CHARTS} element={<Charts />}/>
        <Route path={ROUTES.TERMS} element={<Terms />}/>
        <Route path={ROUTES.GAME} element={<Game />}/>
        <Route path={ROUTES.CUSTOMIZE} element={<Customize />}/>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
