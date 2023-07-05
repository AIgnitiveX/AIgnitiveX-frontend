import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  return (
    <div className="app__about">
      <div className="app__about-mainDiv">
        <motion.div
          className="app__about-mainDiv-div1"
          initial={{ x: "-15vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: "70",
          }}
        >
          <div className="app__about-mainDiv-div1-div1"></div>
        </motion.div>
        <h6>what we do</h6>
        <h2>
          offering technical assistance to startups by harnessing the power of
          artificial intelligence
        </h2>
        <p>
          Our mission is to simplify the challenging task of decision-making for
          businesses and organizations by leveraging AI technologies to analyze
          data, detect patterns, and provide informed recommendations.
        </p>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
