import ShopFirstSection from "./shopFirstSection.jsx";
import ShopSecondSection from "./shopSecondSection.jsx";
import ShopThirdSection from "./shopThirdSection.jsx";
import ShopFourthSection from "./shopFourthSection.jsx";
import ShopFifthSection from "./shopFifthSection.jsx";
import ShopSixthSection from "./shopSixthSection.jsx";
import ShopSeventhSection from "./shopSeventhSection.jsx";
import ShopEigthSection from "./shopEigthSection.jsx";
import ShopNinthSection from "./shopNinthSection.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Suspense } from "react";
function Shop() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <ShopFirstSection />
      <ShopSecondSection />
      <ShopThirdSection />
      <ShopFourthSection />
      <ShopFifthSection />
      <ShopSixthSection />
      <ShopSeventhSection />
      <ShopEigthSection />
      <ShopNinthSection />
    </Suspense>
  );
}

export default Shop;
