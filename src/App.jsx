import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./pages/navigation/navigation.jsx";
import MobileNav from "./pages/navigation/mobileNav.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop.jsx";
import Cart from "./pages/cart/cart.jsx";
function App() {
  const [isCart, setIsCart] = useState(false);
  return (
    <HashRouter>
      <Navigation setIsCart={setIsCart} />
      <MobileNav />
      <Cart isCart={isCart} setIsCart={setIsCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
