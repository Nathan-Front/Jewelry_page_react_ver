import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./pages/navigation/navigation.jsx";
import MobileNav from "./pages/navigation/mobileNav.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop.jsx";
import Cart from "./pages/cart/cart.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
function App() {
  //counter for popup modal
  const [isCount, setIsCount] = useState(1);

  //cart modal
  const [isCart, setIsCart] = useState(false);

  //cart content count (total item added)
  const [isCartCount, setIsCartCount] = useState(() => {
    //Persistent method for react
    const savedCart = sessionStorage.getItem("cartItem");
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      return cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    return 0;
  });

  //cart render added item
  const [cartContent, setCartContent] = useState(() => {
    const savedCart = sessionStorage.getItem("cartItem");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  //cart count updater
  const quantityHandler = (itemName, direction) => {
    const updateQty = cartContent.map((item) => {
      if (item.name === itemName) {
        const newQuantity =
          direction === "plus"
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
          subTotal: Number(item.price) * newQuantity,
        };
      }
      return item;
    });
    setCartContent(updateQty);
    sessionStorage.setItem("cartItem", JSON.stringify(updateQty));
  };

  return (
    <HashRouter>
      <Navigation setIsCart={setIsCart} isCartCount={isCartCount} />
      <MobileNav />
      <Cart
        isCart={isCart}
        setIsCart={setIsCart}
        isCartCount={isCartCount}
        cartContent={cartContent}
        quantityHandler={quantityHandler}
        setIsCartCount={setIsCartCount}
        setCartContent={setCartContent}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              isCount={isCount}
              setIsCount={setIsCount}
              setIsCartCount={setIsCartCount}
              setCartContent={setCartContent}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartContent={cartContent} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
