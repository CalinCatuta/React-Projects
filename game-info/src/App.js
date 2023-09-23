// import pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game/:id" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
