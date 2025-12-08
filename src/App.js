import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import OnlineStores from "./pages/OnlineStores";
import Landings from "./pages/Landings";
import CorporativeSites from "./pages/CorporativeSites";
import Design from "./pages/Design";
import Marketing from "./pages/Marketing";
import Content from "./pages/Content";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contacts from "./pages/Contacts";
import ScrollTracker from "./components/ScrollTracker";

const METRIKA_ID = 105637380; // <-- подставь сюда настоящий ID

function MetrikaTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.ym) {
      window.ym(METRIKA_ID, "hit", location.pathname + location.search);
      console.log("YM HIT:", location.pathname);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        {/* трекинг должен быть внутри Router */}
        <MetrikaTracker />
        <ScrollTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/online-stores" element={<OnlineStores />} />
          <Route path="/landings" element={<Landings />} />
          <Route path="/corporative-sites" element={<CorporativeSites />} />
          <Route path="/design" element={<Design />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
