import React, { useState, useEffect } from "react";
import "./Clients.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const query = '*[_type == "clients"]';

    client.fetch(query).then((data) => {
      setClients(data);
    });
  }, []);

  return (
    <div className="app__clients-mainDiv">
      <div className="app__clients-heading">
        <h1>Our Clients</h1>
      </div>
      <div className="grid-container">
        {clients.map((client, index) => (
          <motion.div className="grid-item">
            <img
              className="grid-item-img"
              src={urlFor(client.imgurl)}
              alt={client.name}
            />
            <a>{client.name}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Clients, "app__clients"), "clients", "");
