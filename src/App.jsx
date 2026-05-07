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

  const [isCartCount, setIsCartCount] = useState(0);
  return (
    <HashRouter>
      <Navigation setIsCart={setIsCart} isCartCount={isCartCount} />
      <MobileNav />
      <Cart isCart={isCart} setIsCart={setIsCart} isCartCount={isCartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop setIsCartCount={setIsCartCount} />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
