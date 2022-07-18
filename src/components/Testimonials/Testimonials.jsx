import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import "./Testimonials.css";

function Testimonials() {
  const [selectedTest, setSelectedTest] = useState(0);

  const testimonialsLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  function previousTestimonial() {
    if (selectedTest === 0) {
      setSelectedTest(testimonialsLength - 1);
    } else {
      setSelectedTest((prevTest) => prevTest - 1);
    }
  }

  function nextTestimonial() {
    if (selectedTest === testimonialsLength - 1) {
      setSelectedTest(0);
    } else {
      setSelectedTest((prevTest) => prevTest + 1);
    }
  }

  return (
    <div className="testimonials">
      <div className="test-left">
        <span>Testimonials</span>
        <span className="stroke-text">what they say</span>
        <span>about us</span>

        <motion.span
          key={selectedTest}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selectedTest].review}
        </motion.span>
        <span>
          <span>{testimonialsData[selectedTest].name}</span>
          <span> - {testimonialsData[selectedTest].status}</span>
        </span>
      </div>

      <div className="test-right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selectedTest}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          src={testimonialsData[selectedTest].image}
          alt="testimonial-img"
        />

        <div className="arrows">
          <img src={leftArrow} alt="left-arrow" onClick={previousTestimonial} />
          <img src={rightArrow} alt="right-arrow" onClick={nextTestimonial} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
