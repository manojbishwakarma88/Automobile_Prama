import React from "react";
import "./auto.css";
import auto_data from "./auto_data.js";
import Card from "./Card";

const Auto = () => {
  return (
    <>
      <section className="AutoMob top" id="AutoMob">
        <div className="container">
          <div className="heading text-center ">
            <h4>Visit Our Automobile Shop</h4>
            <h1></h1>
          </div>

          <div className="content grid">
            {auto_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Auto;
