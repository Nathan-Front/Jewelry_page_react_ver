import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation.jsx";
import MobileNav from "./pages/navigation/mobileNav.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
