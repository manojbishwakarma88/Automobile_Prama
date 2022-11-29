import React, { useState } from "react";
import "./Services.css";

const Card = (props) => {
  return (
    <div>
      <div className="box btn_shadow">
        <img src={props.image} alt="No picture" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
