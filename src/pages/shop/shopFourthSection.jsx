function ShopFourthSection({ filterHandler }) {
  const bracelet = filterHandler.filter((item) => item.category === "bracelet");
  return (
    <>
      <section className="shop-item-section" id="bracelets-section">
        <article>
          <h2>Bracelet</h2>
          <ul className="shop-item-list-wrap">
            {bracelet.length === 0 ? (
              <li className="no-release-msg">
                No new releases in the last 30 days.
              </li>
            ) : (
              bracelet.map((item, index) => (
                <li key={index}>
                  <div className="item-wrap">
                    <img
                      src={item.src}
                      alt={item.article + "-image"}
                      loading="lazy"
                    />
                    <h3>{item.article}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div className="button-wrap">
                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="buy-now-btn"
                      data-item="bracelet"
                    >
                      Buy now
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </article>
      </section>
    </>
  );
}

export default ShopFourthSection;
