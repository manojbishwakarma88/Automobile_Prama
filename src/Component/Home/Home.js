import React from "react";
import "./Home.css";
// import hero from "../../pics/home.jpg";
// import skill1 from "../pic/skill1.png";
// import skill2 from "../pic/skill2.png";
// import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3> Welcome to</h3>
            <h1>
              <span>Prama Technology</span>
            </h1>
            <h2>
              the
              <span>
                <Typewriter
                  words={[" Leading Automobile Company."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              We established this company to provide different services of
              Modern Automobiles for our clients. Tikapur city is still behind
              in Automobile technology compared to other cities of Nepal, so we
              are here to modernize this city and your business.Make youself
              comfortable to buy out Automobiles and get the chance to buy the
              best Automobiles in Nepal.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND US IN</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.twitter.com" />
                    <FaTwitter />
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.facebook.com/P.Tech2020" />
                    <FaFacebookF />
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com" />
                    <FaLinkedin />
                  </button>
                </div>
              </div>
              <div className="col_1">
                {/* <h4>BEST SKILL ON</h4> */}
                {/* <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button> */}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">{/* <img src={hero} alt="" /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
