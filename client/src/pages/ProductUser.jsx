/* eslint-disable no-unused-vars */
import { ChevronsLeft, ChevronsRight, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductUser() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/listProduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [images, setImages] = useState([
    "https://3.bp.blogspot.com/-T2gZcEou7m4/WaFTCQuQmQI/AAAAAAAAN2E/ZWArQ9R5ekEGyfrppT1Xb48-Olp1ZWWFwCLcBGAs/s1600/all-you-need-love-and-coffee-quote.jpg", 
    "https://wallpapercave.com/wp/wp2205378.jpg", 
    "https://s3.scoopwhoop.com/anj/Coffee/622920715.jpg", 
  ]);
  
  const getImage = (imageName) =>
    process.env.VITE_API_BASE_URL`/public/images/${imageName}`;
  const [itemCount, setItemCount] = useState(0);
  const handleAddToCart = () => {
    //  menambah produk ke keranjang
    setItemCount(itemCount + 1);
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [cartItems, setCartItems] = useState([]);

  // menambahkan produk ke keranjang belanja
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    handleAddToCart(product);
  };

  return (
    <>
      <div className="flex justify-between items-center shadow-lg bg-white-500 ">
        <Link to="../home">
          <button className="button-pilih">
            <ChevronsLeft size={50} />
          </button>
        </Link>

        <p className=".button-pilih">geser ke kanan untuk memesan</p>

        <Link to="../home">
          <div className="button-pilih">
            <ChevronsRight size={50} />
          </div>
        </Link>
      </div>

      <div className="carousel">
        <div id="item2">
          <img src={images[index]} alt={`Image ${index + 1}`} />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 garis">
        <div className="flex items-center space-x-4">
          <p> Our Product</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="../card" className="m-6 p-2 justify-center relative card">
            <ShoppingCart size={30} />
            <div className="absolute -top-0 -right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
              {itemCount}
            </div>
          </Link>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="container">
            <img className="images" src={product.image} alt="" />
            <h3 className="m-1">{product.product_name}</h3>
            <h3>Rp.{product.price}</h3>
            <button
              onClick={() => addToCart(product)}
              className="keranjang flex gap-5 m-2"
            >
              <ShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
