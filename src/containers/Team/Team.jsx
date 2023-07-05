import React, { useState, useEffect } from "react";
import "./Team.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const query = '*[_type == "team"]';

    client.fetch(query).then((data) => {
      var first = [];
      var rest = [];
      data.map((person, ind) => {
        if (person.position === "Founder") {
          console.log("founder index == ", ind);
          first.push(person);
        } else if (person.position === "Co-Founder") {
          rest.push(person);
        }
      });
      var arrangedArray = first.concat(rest);
      // console.log(arrangedArray);
      setTeam(arrangedArray);
    });
  }, []);

  const divVariants = {
    rest: {
      scale: 1, // Initial scale
    },
    hover: {
      scale: 1.05, // Scale when hovered
      transition: {
        duration: 0.2, // Transition duration
        type: "spring", // Transition type
        stiffness: 200, // Transition stiffness
      },
    },
  };

  return (
    <div className="app__team">
      <div className="heading">
        <h1>The Team Behind AIgnitiveX</h1>
      </div>
      <div className="team-cards">
        {team?.map((item, index) => (
          <motion.div
            className="team-item"
            variants={divVariants}
            whileHover="hover"
          >
            <img
              src={urlFor(item.imgurl)}
              alt={item.name}
              className="team-img"
            />
            <h3>{item.name}</h3>
            <div class="team-info">
              <p>{item.position}</p>
            </div>
            {/* <p>{item.description}</p> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Team, "app__team"), "team", "app__whitebg");
