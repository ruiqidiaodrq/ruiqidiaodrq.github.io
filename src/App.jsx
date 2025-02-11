// import { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import './App.css'
import uluru from "./assets/uluru.jpg";
import marcus from "./assets/marcus.jpg";
import lucy from "./assets/lucy.jpg";
import city from "./assets/city.jpg";
import suitcase from "./assets/suitcase_sunshine.jpg";

FadeSection.propTypes = {
  image: PropTypes.string.isRequired,
};
function FadeSection({ image }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.95 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: "100vh",
      }}
    ></motion.div>
  );
}

function App() {
  const images = [marcus, city, uluru, lucy, suitcase];

  return (
    <div className="container">
       {images.map((image, index) => (
        <FadeSection key={index} image={image} />
      ))}
    </div>
  );
}

export default App
