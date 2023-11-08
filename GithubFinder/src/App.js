import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
// context
import { GithubProvider } from "./context/github/GithubContext";
function App() {
  return (
    <GithubProvider>
      <Router>
        <nav className="flex flex-col justify-between h-screen">
          <Nav />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </nav>
      </Router>
    </GithubProvider>
  );
}

export default App;
