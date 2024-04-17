
import { useState } from "react";
import { BookmarkX } from "lucide-react";
import BokingMeja from "../components/BokingMeja";
export default function Card({ cartItems, countsCard, showCard, showCartDetails }) {
  const countsTamp = Object.entries(countsCard).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});


  const [counts, setCounts] = useState(countsTamp);

  // Ubah state products menjadi array dari cartItems
  const productsTamp = Object.values(cartItems);

  const [products, setProducts] = useState(productsTamp);
  const [showBok, setShowBok] = useState(false);

  const increment = (productId) => {
    setCounts({
      ...counts,
      [productId]: (counts[productId] || 0) + 1,
    });
  };

  const decrement = (productId) => {
    if (counts[productId] && counts[productId] > 0) {
      setCounts({
        ...counts,
        [productId]: counts[productId] - 1,
      });
    }
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const calculateTotalHarga = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * (counts[product.id] || 0);
    });
    return total;
  };

  const showBoking = () => {
    setShowBok(!showBok);
  };

  return (
    <>
      {showCard && (
        <>
          {showBok ? (
            <BokingMeja products={products} counts={counts} showBok={showBok} />
          ) : (
            <div>
              <div className="carousel">
                <div id="item2"></div>
              </div>

              <div className="flex items-center justify-between p-4 garis">
                <p> Keranjang</p>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => showCartDetails({})}
                    className="m-6 p-2 justify-center relative card"
                  >
                    <BookmarkX size={50} />
                  </button>
                </div>
              </div>

              <div className="product-list">
                {products && products.length > 0 ? (
                  // Periksa apakah cartItems tidak kosong sebelum melakukan map
                  products.map((item) => (
                    <div key={item.id} className="container1">
                      <BookmarkX
                        size={30}
                        className="close"
                        onClick={() => handleDelete(item.id)}
                      />
                      <img className="images" src={item.image} alt="" />
                      <h3 className="m-1">{item.product_name}</h3>
                      <h3>Rp.{item.price}</h3>
                      <div className="counter-container">
                        <button
                          className="decrement-btn"
                          onClick={() => decrement(item.id)}
                        >
                          -
                        </button>
                        <span className="count">{counts[item.id] || 0}</span>
                        <button
                          className="increment-btn"
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  // Tampilkan pesan jika cartItems kosong
                  <p>Keranjang Anda kosong</p>
                )}
              </div>

              <div className="total-harga">
                <h4>Total Harga: Rp.{calculateTotalHarga()}</h4>

                <button className="btn-checkout" onClick={showBoking}>
                  Checkout
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
