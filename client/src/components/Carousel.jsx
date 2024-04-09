// export default function Carousel() {
//   return (
//     <div className="carousel">
//       <div id="item2">
//         <img src="http://s1.picswalls.com/wallpapers/2014/07/24/coffee-backgrounds_112615726_81.jpg" />
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";

// export default function Carousel() {
//   const [images, setImages] = useState([
//     "http://s1.picswalls.com/wallpapers/2014/07/24/coffee-backgrounds_112615726_81.jpg", // Ganti dengan URL gambar online
//     "https://tse4.mm.bing.net/th?id=OIP.-2kwvHrEmkJRaYWXmUoozAHaEo&pid=Api&P=0&h=220", // Ganti dengan URL gambar online
//     "https://png.pngtree.com/background/20220726/original/pngtree-coffee-with-background-doodle-picture-image_1821262.jpg", // Ganti dengan URL gambar online
//   ]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Ganti angka 3000 dengan interval perpindahan gambar (dalam milidetik)
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="carousel">
//       <div id="item2">
//         <img src={images[index]} alt={`Image ${index + 1}`} />
//       </div>
//     </div>
//   );


export default function Carousel() {
  return (
    <div id="video-background">
      <video autoPlay muted loop id="my-video">
        <source
          src="Coffee reels - macro videos.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}


