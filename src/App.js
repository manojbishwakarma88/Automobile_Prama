import React from "react";
import Header from "./Component/Head/Header.js";

import Home from "./Component/Home/Home.js";
import Services from "./Component/Services/Services.js";
import Auto from "./Component/Autos/auto.js";
import Contact from "./Component/Contact/Contact.js";
import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Auto></Auto>
      <Contact></Contact>
    </>
  );
};

export default App;
