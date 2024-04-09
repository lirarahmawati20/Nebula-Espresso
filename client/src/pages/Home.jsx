// import { useState } from "react";
import {ChevronsLeft, ChevronsRight } from "lucide-react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  // const [products] = useState([
  //   {
  //     id: 1,
  //     nama: "Infinix Note 12",
  //     harga: 1999000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 2,
  //     nama: "Iphone 12 pro",
  //     harga: 5976000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 3,
  //     nama: "Samsung Galaxy A13",
  //     harga: 2499000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 4,
  //     nama: "vivo Y21",
  //     harga: 2421000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 5,
  //     nama: "Samsung Galaxy A03",
  //     harga: 2191000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 6,
  //     nama: "Realmi 8i",
  //     harga: 2707000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 7,
  //     nama: "Oppo Reno7 z 5G",
  //     harga: 5269000,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  //   {
  //     id: 8,
  //     nama: "vivo Y20s",
  //     harga: 3228500,
  //     gambar:
  //       "coffee_bag_blank_new_label_revised_k1r4on_95cc03a4-3e94-4e1c-bd33-6dd396601b93_360x.webp",
  //   },
  // ]);
  //  const date = new Date();

  // const [itemCount, setItemCount] = useState(0);

  // const getImage = (imageName) => `.//${imageName}`;

  // const handleAddToCart = () => {
  //   setItemCount(itemCount + 1);
  // };

    const date = new Date();

  return (
    <>
      {/* <Header /> */}
      <div className="flex justify-between items-center shadow-lg bg-white-500 ">
        <button className="button-pilih">
          <ChevronsLeft size={50} />
        </button>

        {/* <p className=".button-pilih"> */}
        {date.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        {/* jeser ke kanan untuk memesan */}
        {/* </p> */}

        <Link to="../productUser">
          <div className="button-pilih">
            <ChevronsRight size={50} />
          </div>
        </Link>
      </div>

      <Carousel />
      <div>
        <div className="text mt-700">
          <h1> Welcome </h1>
          <p>To Nebula Espresso !!!</p>
          <div>
            We warmly welcome you to our place filled with warmth and flavors.
            <p>
              Here, every
              sip is a journey across an extraordinary galaxy of flavors. With
              each espresso touch, we take you on a mesmerizing sensory
              experience, where aroma and taste come together to form a symphony
              of delight. Welcome the morning with a deep coffee indulgence, or
              enjoy a peaceful evening with our captivating espresso touch.
              Together with Nebula Espresso, let s explore the endless world of
              coffee, where every sip is a new adventure in an unforgettable
              flavor story
            </p>
          </div>
        </div>

        <div className="carousell">
          <div id="item1">
            <img src="https://4.bp.blogspot.com/-ftlZkpL9N1s/V2zacBBLeoI/AAAAAAAAJw4/xsu6g6zab2E4tqUTMr6G3j2AF3Y2QHemQCLcB/s1600/coffe%2Blatte.jpg" />
            <p>
              {/* <p> Savor Haven</p> */}
              Each sip of espresso is an adventure in its richness that awakens
              the soul. In every drop, there lies a power that invigorates the
              spirit, banishes drowsiness, and envelops you in its captivating
              aroma.
            </p>
          </div>

          <div id="item3">
            <img src="https://s3.scoopwhoop.com/anj/coffee-types-masthead/937244832.jpg" />
            <p>
              {/* <p>Tempura Sushi Rolls</p> */}
              Espresso is a symphony of flavors crafted from carefully roasted
              coffee beans and expertly extracted. In each cup, there is a
              harmony of bitterness, smoothness, and pleasure that delights the
              palate.
            </p>
          </div>

          <div id="item1">
            <img src="https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg" />
            <p>
              {/* <p>Special Oxtail Soup</p> */}
              As the espresso cup touches your lips, feel the intensity flowing
              into your body like a stream of vitality that rejuvenates your
              energy. It is a remedy for weariness and an upliftment for the
              soul yearning for warmth.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between p-4 garis">
        <div className="flex items-center space-x-4">
          <button className="m-3 p-2 justify-center">
            <MessageSquarePlus size={50} />
          </button>
          <input
            placeholder="Cari"
            className="flex-grow p-2 border border-gray-500 rounded "
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="m-6 p-2 justify-center relative">
            <ShoppingCart size={30} />
            <div className="absolute -top-0 -right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ">
              {itemCount}
            </div>
          </button>
        </div>
      </div> */}
      {/* data peroduct */}
      {/* <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="container">
            <img className="images" src={getImage(product.gambar)} alt="" />
            <h3 className="m-2">{product.nama}</h3>
            <h3>Harga Rp.{product.harga}</h3>
            <div className="flex gap-5 m-3">
              <ShoppingCart onClick={handleAddToCart} />
            </div>
          </div>
        ))}
      </div> */}
      <Footer />
    </>
  );
}
