// import { useState, useEffect } from 'react'
import './App.css'
import uluru from "./assets/uluru.jpg";
import marcus from "./assets/marcus.jpg";
import lucy from "./assets/lucy.jpg";
import city from "./assets/city.jpg";
import suitcase from "./assets/suitcase_sunshine.jpg";

// function App() {

//   // return (<div>
//   //   <div className="bg-image img1"></div>
//   //   <div className="bg-image img2"></div>
//   //   <div className="bg-image img3"></div>
//   //   <div className="bg-image img4"></div>
//   //   <div className="bg-image img5"></div>

//   //   <div className="bg-text">TEXT</div>
//   // </div>);

//   // // const backgrounds = [suitcase, uluru, marcus, lucy, city]; // List of backgrounds
//   // // const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

//   // // useEffect(() => {
//   // //   const handleScroll = () => {
//   // //     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//   // //     const scrollPosition = window.scrollY; // Current scroll position
//   // //     const section = Math.floor((scrollPosition / scrollHeight) * backgrounds.length);

//   // //     setCurrentBackground(backgrounds[section] || backgrounds[backgrounds.length - 1]);
//   // //   };

//   // //   window.addEventListener("scroll", handleScroll);
//   // //   return () => window.removeEventListener("scroll", handleScroll);
//   // // }, []);

//   // // return (
//   // //   <div className="container" style={{ backgroundImage: `url(${currentBackground})` }}>
//   // //     <div className="content">
//   // //       <div className="spacer"></div>
//   // //     </div>
//   // //   </div>
//   // // );

//   const images = [city, suitcase, lucy, uluru, marcus]; // List of background images
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY; // Current scroll position
//       const sectionHeight = window.innerHeight; // Each section is one full viewport height
//       const index = Math.floor(scrollPosition / sectionHeight);
//       setBgIndex(index < images.length ? index : images.length - 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="container" style={{ backgroundImage: `url(${images[bgIndex]})` }}>
//       <div className="spacer"></div>
//     </div>
//   );
// }

function App() {
  const images = [marcus, city, suitcase, lucy, uluru];
  // const images = [lucy, marcus];

  return (
    <div className="container">
      {images.map((image, index) => (
        <div
          key={index}
          className="section"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <div className="bg-text"></div> */}
        </div>
      ))}
    </div>
  );
}

export default App
