function ShopFirstSection() {
  return (
    <>
      <section className="shop-first-section">
        <h1>OUR COLLECTIONS</h1>
        <div className="select-category">
          <fieldset>
            <legend>Select category</legend>
            <label>
              <input
                type="radio"
                name="category"
                value="all-section"
                id="all-item"
                checked
              />
              <span className="checkmark"></span>
              All
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="earrings-section"
                id="earring"
              />
              <span className="checkmark"></span>
              Earrings
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="necklaces-section"
                id="necklace"
              />
              <span className="checkmark"></span>
              Necklaces
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="bracelets-section"
                id="bracelet"
              />
              <span className="checkmark"></span>
              Bracelets
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="ring-section"
                id="ring-section"
              />
              <span className="checkmark"></span>
              Rings
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="bangles-section"
                id="bangle"
              />
              <span className="checkmark"></span>
              Bangles
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="tiara-section"
                id="tiara-section"
              />
              <span className="checkmark"></span>
              Tiaras
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="anklet-section"
                id="anklets-section"
              />
              <span className="checkmark"></span>
              Anklets
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="other-section"
                id="others-section"
              />
              <span className="checkmark"></span>
              Others
            </label>
          </fieldset>
          <ul className="filter-category">
            <li>
              <p>Sort by:</p>
            </li>
            <li>
              <button type="button" className="filter-buttons" id="reset-sort">
                Reset
              </button>
            </li>
            <li>
              <button
                type="button"
                className="filter-buttons"
                id="popular-to-least-popular"
              >
                Most popular
              </button>
            </li>
            <li>
              <button type="button" className="filter-buttons" id="low-to-high">
                Cheapest to expensive
              </button>
            </li>
            <li>
              <button
                type="button"
                className="filter-buttons"
                id="latest-to-oldest"
              >
                Latest to oldest
              </button>
            </li>
            <li>
              <button type="button" className="filter-buttons" id="new-release">
                New release
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ShopFirstSection;
