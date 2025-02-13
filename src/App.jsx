import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import uluru from "./assets/uluru.jpg";
import marcus from "./assets/marcus.jpg";
import lucy from "./assets/lucy.jpg";
import city from "./assets/city.jpg";
import suitcase from "./assets/suitcase_sunshine.jpg";

FadeSection.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

function FadeSection({ image, text }) {
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content-box">{text}</div>
    </motion.div>
  );
}

function App() {
  const sections = [
    {
      image: marcus,
      text: (
        <div>
          <h1>Passenger 🧳 Ruiqi Diao</h1>
          <p>
            A student at UNSW studying Advanced Mathematics and Computer Science, with the unique birthday of 2002-02-02.<br></br>
            I come from Shenzhen and can speak both Chinese and English. Nice to meet you all!<br></br>
            Passionate about exploring new things and contributing to the community.
          </p>
        </div>
      ),
    },
    {
      image: city,
      text: (
        <div>
          <h2>Boarding Pass ✈️ Contact</h2>
          <p>Email: ruiqi.richie.diao2020@gmail.com</p>
          <a href="https://github.com/ruiqidiaodrq" target="_blank" rel="noopener noreferrer" className="link-button">
            🔗 GitHub Profile
          </a>
        </div>
      ),
    },
    {
      image: uluru,
      text: (
        <div>
          <h2>Travel Essentials 🎒 Hobbies</h2>
          <p>🎸 Ukulele, 🎮 Rhythm Games, 🎬 Watching Movies</p>
          <p>Currently playing: Reverse:1999</p>
        </div>
      ),
    },
    {
      image: lucy,
      text: (
        <div>
          <h2>Postcards from Moments 📬 Social Media</h2>
          <a href="https://www.facebook.com/profile.php?id=100026847710455" target="_blank" rel="noopener noreferrer" className="link-button">
            📘 Facebook
          </a>
          <a href="https://www.instagram.com/ruiqidiao3/" target="_blank" rel="noopener noreferrer" className="link-button">
            📷 Instagram
          </a>
          <a href="https://www.linkedin.com/in/ruiqi-diao-8a604a243/" target="_blank" rel="noopener noreferrer" className="link-button">
            💼 LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: suitcase,
      text: (
        <div>
          <h2>Travel Logs 🌍 Projects</h2>
          <a href="https://math-3411.vercel.app/" target="_blank" rel="noopener noreferrer" className="link-button">
            🧮 MATH3411 Calculator
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      {sections.map((section, index) => (
        <FadeSection key={index} image={section.image} text={section.text} />
      ))}
    </div>
  );
}

export default App;
