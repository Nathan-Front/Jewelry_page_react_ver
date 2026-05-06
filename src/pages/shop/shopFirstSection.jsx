import { radioBtns, filterBtns } from "./scripts/shopFirstSection.js";
import React from "react";

function ShopFirstSection({ isRadio, setIsRadio, isFilter, setIsFilter }) {
  return (
    <>
      <section className="shop-first-section">
        <h1>OUR COLLECTIONS</h1>
        <div className="select-category">
          <fieldset>
            <legend>Select category</legend>
            {radioBtns.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="category"
                  value={item.value}
                  id={item.id}
                  onChange={(e) => setIsRadio(e.target.value)}
                  checked={isRadio === item.value}
                />
                <span className={isRadio ? "checkmark" : ""}></span>
                {item.title}
              </label>
            ))}
          </fieldset>
          <ul className="filter-category">
            {filterBtns.map((item, index) => (
              <React.Fragment key={index}>
                {item.mainTitle && (
                  <li>
                    <p>{item.mainTitle}</p>
                  </li>
                )}
                {item.buttons.map((btn, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className="filter-buttons"
                      id={btn.id}
                      onClick={() => setIsFilter(btn.id)}
                      className={isFilter === btn.id ? "activeSortBtn" : ""}
                    >
                      {btn.title}
                    </button>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ShopFirstSection;
