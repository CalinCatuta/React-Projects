import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

// router
// use this to navigate between pages
import { Route, Routes, useLocation } from "react-router-dom";
// animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/OurWork" exact element={<OurWork />} />
          <Route path="/OurWork/:id" exact element={<MovieDetail />} />
          <Route path="/ContactUs" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
