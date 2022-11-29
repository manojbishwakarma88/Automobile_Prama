import React from "react";
import "./Services.css";
import Card from "./Card.js";
import data from "./ServicesApi";
const Services = () => {
  return (
    <section>
      <div className="services top" id="services">
        <div className="heading">
          <h4>Our Services</h4>
          <h1>What we Do?</h1>
        </div>
        <div className="content grid">
          {data.map((val, index) => {
            return (
              <Card
                key={index}
                image={val.image}
                title={val.title}
                desc={val.desc}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
