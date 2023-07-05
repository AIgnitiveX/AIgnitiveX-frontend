import React from "react";

import {
  About,
  Footer,
  Header,
  Services,
  Testimonial,
  Clients,
  Team,
} from "./containers";

import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="border-black border-2 bg-primary">
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Clients />

      {/* <Testimonial /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default App;
