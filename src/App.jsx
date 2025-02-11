// import { useState, useEffect } from 'react'
import './App.css'
import uluru from "./assets/uluru.jpg";
import marcus from "./assets/marcus.jpg";
import lucy from "./assets/lucy.jpg";
import city from "./assets/city.jpg";
import suitcase from "./assets/suitcase_sunshine.jpg";

function App() {
  const images = [marcus, city, suitcase, lucy, uluru];
  // const images = [lucy, marcus];

  return (
    <div className="container">
      {images.map((image, index) => (
        <div
          key={index}
          className="section"
          style={{ 
            backgroundImage: `url(${image})`,
            minHeight: '100vh' 
          }}
        >
          {/* <div className="bg-text"></div> */}
        </div>
      ))}
    </div>
  );
}

export default App
