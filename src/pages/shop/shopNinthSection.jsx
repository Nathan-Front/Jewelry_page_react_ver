function ShopNinthSection({ filterHandler, setIsModal }) {
  const other = filterHandler.filter((item) => item.category === "others");
  return (
    <>
      <section className="shop-item-section" id="other-section">
        <article>
          <h2>Others</h2>
          <ul className="shop-item-list-wrap">
            {other.length === 0 ? (
              <li className="no-release-msg">
                No new releases in the last 30 days.
              </li>
            ) : (
              other.map((item, index) => (
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

export default ShopNinthSection;
