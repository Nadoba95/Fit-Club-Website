import Header from "../Header/Header";
import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

function Hero() {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero" id="home">
      <div className="blur blur-hero"></div>
      <div className="hero__left">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero__text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            In here we will help you to shape and build body you will live your
            life to fullest.
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coach's</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero__buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="hero__right">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem", opacity: 0 }}
          whileInView={{ right: "4rem", opacity: 1 }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img className="hero-image" src={hero_image} alt="hero" />
        <motion.img
          initial={{ right: "11rem", opacity: 0 }}
          whileInView={{ right: "20rem", opacity: 1 }}
          transition={transition}
          className="hero-image-back"
          src={hero_image_back}
          alt="hero back"
        />

        <motion.div
          initial={{ right: "37rem", opacity: 0 }}
          whileInView={{ right: "28rem", opacity: 1 }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
