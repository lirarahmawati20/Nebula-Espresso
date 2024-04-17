import {
  BadgeDollarSign,
  Boxes,
  CircleUser,
  Clock9,
  Home,
  LogOut,
  NotebookPen,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Detail_transaction(transactionId) {
  const id = transactionId.transactionId;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [transactionDetails, setTransactionDetails] = useState([]);
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(
        "http://localhost:3000/api/v1/transactiondetail/"+id,
        config
      );
      setTransactionDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching Transaction:", error);
      if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        navigate("/login");
      }
    }
  };
  

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
      <header>
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className={`bar ${isSidebarOpen ? "rotate-up" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "hide" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "rotate-down" : ""}`}></div>
        </div>
      </header>

      <div className={`app ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidebar">
          <div className="logo-details">
            <span className="logo_name">
              <div className="flex w-1/2">
                <img
                  src="logo-removebg-preview.png"
                  alt="logo"
                  className="w-13 h-16 rounded-full top-4"
                />
                <h1 className="logo ">Espresso</h1>
              </div>
            </span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/home_admin" className="active">
                <Home size={25} />
                <span className="links_name">Dashboard</span>
              </Link>
            </li>

            {/* <li>
              <Link to="/product">
                <Boxes size={25} />
                <span className="links_name">Product</span>
              </Link>
            </li> */}

            <li>
              <Link to="/transaction" activeClassName="active">
                <Clock9 />
                <span className="links_name">Transaction</span>
              </Link>
            </li>

            <li>
              <Link to="/detail_transaction">
                <BadgeDollarSign size={25} />
                <span className="links_name">Detail Transaction</span>
              </Link>
            </li>
            {/* <li>
              <Link to="../../product">
                <NotebookPen size={25} />
                <span className="links_name">About </span>
              </Link>
            </li> */}
            <li>
              <Link to="/data_kasir">
                <CircleUser size={25} />
                <span className="links_name">Data Kasir</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <LogOut size={25} />
                <span className="links_name" id="logout">
                  logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="judul-header-ke2">
        <div className="tex-judul">Detail Transaction</div>
      </div>

      <table className="product-table-transaction">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gambar</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Transaction ID</th>
            <th>Created_at</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>
                <img
                  src={detail.image}
                  alt={detail.image}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{detail.product_name}</td>
              <td>${detail.product_price}</td>
              <td>{detail.amount}</td>
              <td>${detail.total_price}</td>
              <td>{detail.id_transaction}</td>
              <td>{detail.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// import { Trash2 } from "lucide-react";
// import Carousel from "../components/Carousel";
// import { useState } from "react";
// import { ShoppingCart, Pencil } from "lucide-react";
// import { MessageSquarePlus } from "lucide-react";
// import { BookmarkX } from "lucide-react";

// export default function Home() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       nama: "Infinix Note 12",
//       harga: 1999000,
//       gambar: "gambar11.png",
//     },
//     {
//       id: 2,
//       nama: "Iphone 12 pro",
//       harga: 5976000,
//       gambar: "gambar2.png",
//     },
//     {
//       id: 3,
//       nama: "Samsung Galaxy A13",
//       harga: 2499000,
//       gambar: "gambar3.png",
//     },
//     {
//       id: 4,
//       nama: "vivo Y21",
//       harga: 2421000,
//       gambar: "gambar4.png",
//     },
//     {
//       id: 5,
//       nama: "Samsung Galaxy A03",
//       harga: 2191000,
//       gambar: "gambar9.png",
//     },
//     {
//       id: 6,
//       nama: "Realmi 8i",
//       harga: 2707000,
//       gambar: "gambar6.png",
//     },
//     {
//       id: 7,
//       nama: "Oppo Reno7 z 5G",
//       harga: 5269000,
//       gambar: "gambar7.png",
//     },
//     {
//       id: 8,
//       nama: "vivo Y20s",
//       harga: 3228500,
//       gambar: "gambar8.png",
//     },
//   ]);

//   // gambar
//   const getImage = (imageName) => `./images/${imageName}`;

//   //--------- delet---------
//   const handleDelete = (productId) => {
//     const isConfirmed = window.confirm(
//       `Apakah Anda yakin ingin menghapus produk ${productId} ?`
//     );

//     if (isConfirmed) {
//       setProducts(products.filter((product) => product.nama !== productId));
//     }
//   };

//   //-------------- edit --------------
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showEditProductForm, setShowEditProductForm] = useState(false);
//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setShowEditProductForm(true);

//   };

//   const handleSave = (editedProduct) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === editedProduct.id ? editedProduct : product
//       )
//     );
//     setEditingProduct(null);
//   };
//   const handleCancelEdit = () => {
//     setEditingProduct(null);
//   };
//   const handleNewProductChange = (field, value) => {
//     setNewProduct({ ...newProduct, [field]: value });
//   };
//   //-------------------//

//   // -------- tambah -------
//   const [newProduct, setNewProduct] = useState({
//     nama: "",
//     harga: 0,
//     gambar: "",
//   });
//   const [showAddProductForm, setShowAddProductForm] = useState(false);
//   const handleAddProduct = () => {
//     if (newProduct.nama && newProduct.harga && newProduct.gambar) {
//       setProducts((prevProducts) => [
//         ...prevProducts,
//         { id: prevProducts.length + 1, ...newProduct },
//       ]);
//       resetNewProductForm(); // Fungsi untuk mereset formulir tambah produk
//     } else {
//       alert("Harap isi semua field");
//     }
//   };
//   const resetNewProductForm = () => {
//     setNewProduct({ nama: "", harga: 0, gambar: "" });
//     setShowAddProductForm(false); // Menyembunyikan formulir tambah produk
//   };

//   //---------------------

//   const [itemCount, setItemCount] = useState(0);
//   //--------------

//   const [orderedProducts, setOrderedProducts] = useState([]);
//   const [showOrderedProducts, setShowOrderedProducts] = useState(false);

//   // ... (kode lainnya)

//   const handleAddToCart = (product) => {
//     setOrderedProducts((prevOrderedProducts) => [
//       ...prevOrderedProducts,
//       product,
//     ]);
//     setItemCount(itemCount + 1);
//   };

//   const handleRemove = (productId) => {
//     setOrderedProducts((prevOrderedProducts) =>
//       prevOrderedProducts.filter((product) => product.id !== productId)
//     );
//     setItemCount(itemCount - 1);
//   };

//   const handleView = () => {
//     setShowOrderedProducts(true);
//   };

//   const handleClos = () => {
//     setShowOrderedProducts(false);
//   };

//   return (
//     <>
//       <Carousel />
//       <div className="flex items-center justify-between p-4 garis">
//         <div className="flex items-center space-x-4">
//           <button
//             className="m-3 p-2 justify-center"
//             onClick={() => setShowAddProductForm(true)}
//           >
//             <MessageSquarePlus size={50} />
//           </button>
//           <input
//             placeholder="Cari"
//             className="flex-grow p-2 border border-gray-500 rounded "
//           />
//         </div>
//         {/* keranjang  */}
//         <div className="flex items-center space-x-4">
//           <button
//             className="m-6 p-2 justify-center relative"
//             onClick={handleView}
//           >
//             <ShoppingCart size={30} />
//             <div className="absolute -top-0 -right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ">
//               {itemCount}
//             </div>
//           </button>
//         </div>
//       </div>

//       {showOrderedProducts && (
//         <div className="overlayy">
//           <div className="edit-formm">
//             <div className="flex justify-between">
//               <h1>Keranjang</h1>
//               <BookmarkX onClick={handleClos} size={40} />
//             </div>
//             <ul>
//               {orderedProducts.map((orderedProduct) => (
//                 <li key={orderedProduct.id} className="flex popuppro">
//                   <img
//                     src={`./images/${orderedProduct.gambar}`}
//                     alt={orderedProduct.nama}
//                     style={{
//                       width: "70px",
//                       height: "55px",
//                       marginRight: "2px",
//                     }}
//                   />
//                   {orderedProduct.nama} Harga Rp.{orderedProduct.harga}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Form untuk menambahkan produk baru */}
//       {showAddProductForm && (
//         <div className="overlay">
//           <div className="edit-form">
//             <h1>TAMBAH PRODUK </h1>
//             <label>
//               Nama
//               <input
//                 type="text"
//                 value={newProduct.nama}
//                 onChange={(e) => handleNewProductChange("nama", e.target.value)}
//               />
//             </label>
//             <label>
//               Harga
//               <input
//                 type="number"
//                 value={newProduct.harga}
//                 onChange={(e) =>
//                   handleNewProductChange("harga", parseInt(e.target.value))
//                 }
//               />
//             </label>
//             <label>
//               Gambar
//               <input
//                 type="text"
//                 value={newProduct.gambar}
//                 onChange={(e) =>
//                   handleNewProductChange("gambar", e.target.value)
//                 }
//               />
//             </label>
//             <button onClick={handleAddProduct}>Save</button>
//             <button onClick={resetNewProductForm}>Back</button>
//           </div>
//         </div>
//       )}

//       {/* data peroduct */}
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="container">
//             <img className="images" src={getImage(product.gambar)} alt="" />
//             <h3 className="m-2">{product.nama}</h3>
//             <h3>Harga Rp.{product.harga}</h3>
//             <div className="flex gap-5 m-3">
//               <ShoppingCart onClick={() => handleAddToCart(product)} />
//               {/* <ShoppingCart onClick={() => setItemCount(itemCount + 1)} /> */}
//               <Pencil onClick={() => handleEdit(product)} />
//               <Trash2 onClick={() => handleDelete(product.nama)} size={24} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* popup edit */}

//       {showEditProductForm && (
//         <div className="edit-form">
//           <h1>EDIT PRODUCT </h1>
//           <label>
//             Nama
//             <input
//               type="text"
//               value={editingProduct.nama}
//               onChange={(e) =>
//                 setEditingProduct({ ...editingProduct, nama: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Harga
//             <input
//               type="number"
//               value={editingProduct.harga}
//               onChange={(e) =>
//                 setEditingProduct({
//                   ...editingProduct,
//                   harga: parseInt(e.target.value),
//                 })
//               }
//             />
//           </label>

//           <label>
//             gambar
//             <input
//               type="text"
//               value={editingProduct.gambar}
//               onChange={(e) =>
//                 setEditingProduct({
//                   ...editingProduct,
//                   gambar: parseInt(e.target.value),
//                 })
//               }
//             />
//           </label>

//           <button onClick={() => handleSave(editingProduct)}>Save</button>
//           <button onClick={handleCancelEdit}>Back</button>
//         </div>
//       )}
//     </>
//   );
// }