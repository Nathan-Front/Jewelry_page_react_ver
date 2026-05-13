import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Navigation({ setIsCart, isCartCount }) {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      setShowNav(currentScrollY < lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={showNav ? "nav-main-wrapper show" : "nav-main-wrapper hide"}
      >
        <ul className="nav-list-wrapper">
          <li className="logo">
            <img
              src="./images/navigation/logo.webp"
              alt="webpage logo"
              loading="lazy"
            />
          </li>
          <li className="nav-links-group">
            <ul className="nav-links-group-wrap">
              {navLinks.map((links, index) => (
                <li className="links" key={index}>
                  <Link to={links.path}>{links.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className="nav-policy-cart-wrap">
              <li>
                <Link to="/policy">
                  <img
                    src="./images/navigation/return-box-cycle-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="tooltip-box">Refund policy</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="cart-button"
                  id="show-cart"
                  onClick={() => setIsCart(true)}
                >
                  <img
                    src="./images/navigation/icon-cart-white.svg"
                    alt="cart"
                  />
                  <span className="tooltip-cart">Cart</span>
                  <span>{isCartCount}</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
