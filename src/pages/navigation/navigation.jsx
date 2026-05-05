function Navigation() {
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
              <li className="links">
                <a href="index.html">HOME</a>
              </li>
              <li className="links">
                <a href="shop.html">SHOP</a>
              </li>
              <li className="links">
                <a href="about.html">ABOUT</a>
              </li>
              <li className="links">
                <a href="contact.html">CONTACT</a>
              </li>
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
