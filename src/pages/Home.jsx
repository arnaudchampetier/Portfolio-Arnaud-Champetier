import React from "react";
import { NavLink } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import cv from "../assets/cv.png";
import Arrow from "../assets/next1.png";
import sunset from "../assets/salty.jpg";

import "../App.css";

function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: `url(${sunset})` }}
      >
        <main className="container mx-auto flex items-center justify-center flex-col text-center text-gray-500">
          <h1 className="text-5xl md:text-5xl mb-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
            Arnaud Champetier
          </h1>
          <p className="text-xl mb-8 md:text-3xl mt-8 scale-90 transition duration-1000 ease-in-out transform text-gray-700 hover:scale-105">
            Hello! Je suis développeur Web et mobile full stack
          </p>
          <div className=" flex justify-center">
            <a href="https://drive.google.com/file/d/1e30kpjx0CCchR0gkSBb4ultW7Tiu9wXu/view?usp=sharing">
              <img src={cv} alt="CV" className="mb-4 m-8 w-8 h-8" />
            </a>

            <a href="https://www.linkedin.com/in/arnaud-champetier-030b0797/">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="mb-24 m-8 w-8 h-8"
              />
            </a>
          </div>

          <NavLink to="/aboutme">
            <img
              src={Arrow}
              alt="Scroll to about section"
              className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse my-8"
            />
          </NavLink>
        </main>
      </div>
    </div>
  );
}

export default Home;

/*<img
              src={Arrow}
              alt="Scroll to about section"
              className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse my-8"
              onClick={() => scroller.scrollTo("aboutme", { smooth: true })}*/
