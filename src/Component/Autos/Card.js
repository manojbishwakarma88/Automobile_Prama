import React, { useState } from "react";
import "./auto.css";

const Card = (props) => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModel} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModel}> {props.category} </span>
          {/* <label>
            <i className="far fa-hearts">{props.totalLike}</i>
          </label> */}
        </div>
        <div className="title">
          <h2 onClick={toggleModel}>{props.title} </h2>
          <a href="#popup" className="arrow" onClick={toggleModel}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* /popup modal */}

      {model && (
        <div className="modal">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Our -Design</span>
              <h1>{props.title}</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                adipisci voluptatem exercitationem laudantium itaque commodi
                libero tenetur maxime non? Molestias provident dolorum obcaecati
                dignissimos voluptates fugit cupiditate tempora neque non!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit iusto molestiae beatae quaerat ex. Ratione
                reprehenderit voluptatem et officia facilis. Fugiat similique
                ullam, adipisci alias ea veniam perspiciatis eum atque?
              </p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  LIKE THIS <i className="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  View Features <i className="fas fa-chevron-right"></i>
                </button>
                <button
                  className="close-modal btn_shadow"
                  onClick={toggleModel}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
