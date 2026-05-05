import { Link } from "react-router-dom";
function Navigation() {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <>
      <nav className="nav-main-wrapper">
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
                <a href="policy.html">
                  <img
                    src="./images/navigation/return-box-cycle-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="tooltip-box">Refund policy</span>
                </a>
              </li>
              <li>
                <button type="button" className="cart-button" id="show-cart">
                  <img
                    src="./images/navigation/icon-cart-white.svg"
                    alt="cart"
                  />
                  <span className="tooltip-cart">Cart</span>
                  <span id="cart-count">0</span>
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
