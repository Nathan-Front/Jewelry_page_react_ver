import ShopFirstSection from "./shopFirstSection.jsx";
import ShopSecondSection from "./shopSecondSection.jsx";
import ShopThirdSection from "./shopThirdSection.jsx";
import ShopFourthSection from "./shopFourthSection.jsx";
import ShopFifthSection from "./shopFifthSection.jsx";
import ShopSixthSection from "./shopSixthSection.jsx";
import ShopSeventhSection from "./shopSeventhSection.jsx";
import ShopEigthSection from "./shopEigthSection.jsx";
import ShopNinthSection from "./shopNinthSection.jsx";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import { itemData } from "./scripts/shopData.js";
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
  const [isRadio, setIsRadio] = useState("all-section");

  const [isFilter, setIsFilter] = useState("reset-sort");

  const filterHandler = useMemo(() => {
    let result = [...itemData];

    if (isFilter === "low-to-high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (isFilter === "latest-to-oldest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (isFilter === "popular-to-least-popular") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    } else if (isFilter === "new-release") {
      const today = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setDate(today.getDate() - 30);
      result = result.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= oneMonthAgo && itemDate <= today;
      });
    }
    return result;
  }, [isFilter]);

  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <ShopFirstSection
        isRadio={isRadio}
        setIsRadio={setIsRadio}
        isFilter={isFilter}
        setIsFilter={setIsFilter}
      />
      {(isRadio === "all-section" || isRadio === "earrings-section") && (
        <ShopSecondSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "necklaces-section") && (
        <ShopThirdSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "bracelets-section") && (
        <ShopFourthSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "rings-section") && (
        <ShopFifthSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "bangles-section") && (
        <ShopSixthSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "tiaras-section") && (
        <ShopSeventhSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "anklets-section") && (
        <ShopEigthSection filterHandler={filterHandler} />
      )}
      {(isRadio === "all-section" || isRadio === "others-section") && (
        <ShopNinthSection filterHandler={filterHandler} />
      )}
    </Suspense>
  );
}

export default Shop;
