// /* eslint-disable no-unused-vars */
// import { BookmarkX, ChevronsLeft, ChevronsRight } from "lucide-react";
// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function Card(cartItems) {


//   console.log(cartItems);
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       nama: "Italian Roast",
//       harga: 25000,
//       gambar: "gambar1.png",
//     },
//     {
//       id: 2,
//       nama: "Breakfast Blend +",
//       harga: 30000,
//       gambar: "gambar2.png",
//     },
//     {
//       id: 3,
//       nama: "Chocolate Hazelnut",
//       harga: 20000,
//       gambar: "gambar12.png",
//     },
//     {
//       id: 4,
//       nama: "French Roast",
//       harga: 35000,
//       gambar: "gambar25.png",
//     },
//     {
//       id: 5,
//       nama: "Mexican Chocolate",
//       harga: 38000,
//       gambar: "gambar14.png",
//     },
//     {
//       id: 6,
//       nama: "Mocha",
//       harga: 27000,
//       gambar: "gambar28.png",
//     },
//     {
//       id: 7,
//       nama: "French Vanilla",
//       harga: 39000,
//       gambar: "gambar26.png",
//     },
//     {
//       id: 8,
//       nama: "Caramel",
//       harga: 23000,
//       gambar: "gambar13.png",
//     },
//   ]);

//   const getImage = (imageName) => `./images/${imageName}`;

//   const [counts, setCounts] = useState({});

//   const increment = (productId) => {
//     setCounts({
//       ...counts,
//       [productId]: (counts[productId] || 0) + 1,
//     });
//   };

//   const decrement = (productId) => {
//     if (counts[productId] && counts[productId] > 0) {
//       setCounts({
//         ...counts,
//         [productId]: counts[productId] - 1,
//       });
//     }
//   };

//   const handleDelete = (productId) => {
//     setProducts(products.filter((product) => product.id !== productId));
//   };

//   const calculateTotalHarga = () => {
//     let total = 0;
//     products.forEach((product) => {
//       total += (counts[product.id] || 0) * product.harga;
//     });
//     return total;
//   };
//   const handleCheckout = () => {
//     alert(`pesanana ada tersimpan`);
//   };

//   return (
//     <>
//       <div className="carousel">
//         <div id="item2"></div>
//       </div>

//       <div className="flex items-center justify-between p-4 garis">
//         <p> Keranjang</p>

//         <div className="flex items-center space-x-4">
//           <Link
//             to="../productUser"
//             className="m-6 p-2 justify-center relative card"
//           >
//             <BookmarkX size={50} />
//           </Link>
//         </div>
//       </div>

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="container1">
//             <BookmarkX
//               size={30}
//               className="close"
//               onClick={() => handleDelete(product.id)}
//             />
//             <img className="images" src={getImage(product.gambar)} alt="" />
//             <h3 className="m-1">{product.nama}</h3>
//             <h3>Rp.{product.harga}</h3>
//             <div className="counter-container">
//               <button
//                 className="increment-btn"
//                 onClick={() => increment(product.id)}
//               >
//                 +
//               </button>
//               <span className="count">{counts[product.id] || 0}</span>
//               <button
//                 className="decrement-btn"
//                 onClick={() => decrement(product.id)}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="total-harga">
//         <h4>Total Harga: Rp.{calculateTotalHarga()}</h4>

//         <button className="btn-checkout">
//           <Link to="/bokingMeja"> Checkout</Link>
//         </button>
//       </div>
//     </>
//   );
// }


// Card.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { BookmarkX } from "lucide-react";

// export default function Card({ cartItems, showCard }) {
//   const handleDelete = (productId) => {
//     // Hapus item dari keranjang
//   };

//   const calculateTotalHarga = () => {
//     // Hitung total harga dari semua item di keranjang
//   };

//   return (
//     <div>
//       { showCard && (
//       <div className="carousel">
//         <div id="item2"></div>
//       </div>

//       <div className="flex items-center justify-between p-4 garis">
//         <p> Keranjang</p>

//         <div className="flex items-center space-x-4">
//           <Link
//             to="../productUser"
//             className="m-6 p-2 justify-center relative card"
//           >
//             <BookmarkX size={50} />
//           </Link>
//         </div>
//       </div>

//       <div className="product-list">
//         {cartItems && cartItems.length > 0 ? (
//           // Periksa apakah cartItems tidak kosong sebelum melakukan map
//           cartItems.map((item) => (
//             <div key={item.id} className="container1">
//               <BookmarkX
//                 size={30}
//                 className="close"
//                 onClick={() => handleDelete(item.id)}
//               />
//               <img className="images" src={item.image} alt="" />
//               <h3 className="m-1">{item.product_name}</h3>
//               <h3>Rp.{item.price}</h3>
//               {/* Tambahkan logika untuk menampilkan jumlah item */}
//             </div>
//           ))
//         ) : (
//           // Tampilkan pesan jika cartItems kosong
//           <p>Keranjang Anda kosong</p>
//         )}
//       </div>

//       <div className="total-harga">
//         <h4>Total Harga: Rp.{calculateTotalHarga()}</h4>

//         <button className="btn-checkout">
//           <Link to="/bokingMeja"> Checkout</Link>
//         </button>
            
//       </div>
//       )}
       
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BookmarkX } from "lucide-react";

// export default function Card({ cartItems, showCard, showCartDetails }) {
//   const [counts, setCounts] = useState({});
  
//   const [products, setProducts] = useState({cartItems});

//     const increment = (productId) => {
//       setCounts({
//         ...counts,
//         [productId]: (counts[productId] || 0) + 1,
//       });
//     };

//     const decrement = (productId) => {
//       if (counts[productId] && counts[productId] > 0) {
//         setCounts({
//           ...counts,
//           [productId]: counts[productId] - 1,
//         });
//       }
//     };

//     const handleDelete = (productId) => {
//       setProducts(products.filter((product) => product.id !== productId));
//     };

//     const calculateTotalHarga = () => {
//       let total = 0;
//       products.forEach((product) => {
//         total += product.price;
//       });
//       return total;
//     };

//   return (
//     <>
//       {showCard && (
//         <div>
//           <div className="carousel">
//             <div id="item2"></div>
//           </div>

//           <div className="flex items-center justify-between p-4 garis">
//             <p> Keranjang</p>

//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => showCartDetails({})}
//                 className="m-6 p-2 justify-center relative card"
//               >
//                 <BookmarkX size={50} />
//               </button>
//             </div>
//           </div>

//           <div className="product-list">
//             {products && products.length > 0 ? (
//               // Periksa apakah cartItems tidak kosong sebelum melakukan map
//               products.map((item) => (
//                 <div key={item.id} className="container1">
//                   <BookmarkX
//                     size={30}
//                     className="close"
//                     onClick={() => handleDelete(item.id)}
//                   />
//                   <img className="images" src={item.image} alt="" />
//                   <h3 className="m-1">{item.product_name}</h3>
//                   <h3>Rp.{item.price}</h3>
//                   {/* Tambahkan logika untuk menampilkan jumlah item */}
//                 </div>
//               ))
//             ) : (
//               // Tampilkan pesan jika cartItems kosong
//               <p>Keranjang Anda kosong</p>
//             )}
//           </div>

//           <div className="total-harga">
//             <h4>Total Harga: Rp.{calculateTotalHarga()}</h4>

//             <button className="btn-checkout">
//               <Link to="/bokingMeja"> Checkout</Link>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


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
