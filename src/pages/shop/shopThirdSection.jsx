function ShopThirdSection({ filterHandler, setIsModal }) {
  const necklace = filterHandler.filter(
    (item) => item.category === "necklaces",
  );
  return (
    <>
      <section className="shop-item-section" id="necklaces-section">
        <article>
          <h2>Necklace</h2>
          <ul className="shop-item-list-wrap">
            {necklace.length === 0 ? (
              <li className="no-release-msg">
                No new releases in the last 30 days.
              </li>
            ) : (
              necklace.map((item, index) => (
                <li key={index}>
                  <div className="item-wrap">
                    <img
                      src={item.src}
                      alt={item.article + "-image"}
                      loading="lazy"
                    />
                    <h3>{item.article}</h3>
                    <p>price: ${item.price}</p>
                  </div>
                  <div className="button-wrap">
                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="buy-now-btn"
                      onClick={() => setIsModal(item)}
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

export default ShopThirdSection;
