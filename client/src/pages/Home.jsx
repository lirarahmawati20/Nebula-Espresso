// import { useState } from "react";
import {ChevronsLeft, ChevronsRight } from "lucide-react";
import Carousel from "../components/Carousel";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {

    const date = new Date();

  return (
    <>
      {/* <Header /> */}
      <div className="flex justify-between items-center shadow-lg bg-white-500 ">
        <button className="button-pilih">
          <ChevronsLeft size={50} />
        </button>

        {date.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
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
              Here, every sip is a journey across an extraordinary galaxy of
              flavors. With each espresso touch, we take you on a mesmerizing
              sensory experience, where aroma and taste come together to form a
              symphony of delight. Welcome the morning with a deep coffee
              indulgence, or enjoy a peaceful evening with our captivating
              espresso touch. Together with Nebula Espresso, let s explore the
              endless world of coffee, where every sip is a new adventure in an
              unforgettable flavor story
            </p>
          </div>
        </div>

        <div className="carousell">
          <div id="item1">
            <img src="https://4.bp.blogspot.com/-ftlZkpL9N1s/V2zacBBLeoI/AAAAAAAAJw4/xsu6g6zab2E4tqUTMr6G3j2AF3Y2QHemQCLcB/s1600/coffe%2Blatte.jpg" />
            <p>
              Each sip of espresso is an adventure in its richness that awakens
              the soul. In every drop, there lies a power that invigorates the
              spirit, banishes drowsiness, and envelops you in its captivating
              aroma.
            </p>
          </div>

          <div id="item3">
            <img src="https://s3.scoopwhoop.com/anj/coffee-types-masthead/937244832.jpg" />
            <p>
              Espresso is a symphony of flavors crafted from carefully roasted
              coffee beans and expertly extracted. In each cup, there is a
              harmony of bitterness, smoothness, and pleasure that delights the
              palate.
            </p>
          </div>

          <div id="item1">
            <img src="https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg" />
            <p>
              As the espresso cup touches your lips, feel the intensity flowing
              into your body like a stream of vitality that rejuvenates your
              energy. It is a remedy for weariness and an upliftment for the
              soul yearning for warmth.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white-500 ">
        <button className="button-pilih">
          <ChevronsLeft size={50} />
        </button>

        <Link to="../productUser">
          <div className="button-pilih">
            <ChevronsRight size={50} />
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}
