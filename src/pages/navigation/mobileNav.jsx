import { mobileContent } from "./scripts/mobileNav.js";
import { Link } from "react-router-dom";
function MobileNav() {
  return (
    <>
      <nav className="mobile-navigation-wrap">
        <ul>
          {mobileContent.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <img src={item.src} alt={item.alt + "-image"} loading="lazy" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
