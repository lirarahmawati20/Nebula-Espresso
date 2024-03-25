import Carousel from "../components/Carousel";
// import Texs from "../pages/texs";

export default function Home() {
  return (
    <>
      <Carousel />
      <div>
        <div className="text">
          <h1> Welcome </h1>
          <p>To Nebula Espresso !!!</p>
          <div>
            We warmly welcome you to our place filled with warmth and flavors.
            <p>
              Enjoy a special culinary experience with delicious dishes from our
              kitchen, as well as friendly and professional service from our
              team. Every d Espresso
            </p>
          </div>

        </div>

        <div className="carousell">
          <div id="item1">
            <img src="https://4.bp.blogspot.com/-ftlZkpL9N1s/V2zacBBLeoI/AAAAAAAAJw4/xsu6g6zab2E4tqUTMr6G3j2AF3Y2QHemQCLcB/s1600/coffe%2Blatte.jpg" />
            <p>
              <p> Savor Haven</p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              accusamus, commodi dicta tenetur a nulla quae rem ad optio,
              numquam totam modi quod itaque dignissimos ducimus omnis molestias
              accusantium corporis?
            </p>
          </div>

          <div id="item3">
            <img src="https://s3.scoopwhoop.com/anj/coffee-types-masthead/937244832.jpg" />
            <p>
              <p>Tempura Sushi Rolls</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              harum perspiciatis deserunt nemo quam, voluptatibus consectetur
              excepturi vero nulla, laboriosam repellendus tempora in animi. Id
              quam delectus impedit unde accusamus?
            </p>
          </div>

          <div id="item1">
            <img src="https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg" />
            <p>
              <p>Special Oxtail Soup</p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              doloribus possimus facilis minus at. Quo obcaecati esse rerum
              tempore laboriosam. Quaerat tempora delectus incidunt in nulla
              quasi qui odit! Magni?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
