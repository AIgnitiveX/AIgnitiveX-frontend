import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-mainDiv">
        <motion.div
          className="app__header-mainDiv-div1"
          initial={{ x: "-15vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: "70",
          }}
        >
          <div className="app__header-mainDiv-div1-div1"></div>
        </motion.div>
        <h1>AIgnitiveX</h1>
        <h3>where artificial intelligence meets human ingenuity</h3>
        <p>
          A cutting-edge startup that offers technical assistance to startups by
          harnessing the power of artificial intelligence. Our mission is to
          simplify the challenging task of decision-making for businesses and
          organizations by leveraging AI technologies to analyze data, detect
          patterns, and provide informed recommendations.
        </p>
      </div>
      <div className="app__header-logo-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img className="app__header-logo" src={images.logo2} alt="logo2" />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Header, "app__header"), "home", "");
