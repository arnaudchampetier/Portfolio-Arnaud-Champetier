import React from "react";
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
            Développeur Web formé à la Wild Code School à Lyon, je crée des
            applications web et mobiles modernes Fullstack React.js/ Node.js/
            Express.
          </p>
          <div className="">
            <a href="https://drive.google.com/file/d/1e30kpjx0CCchR0gkSBb4ultW7Tiu9wXu/view?usp=sharing">
              <button
                type="submit"
                className="bg-blue-800/60 text-white mb-4 m-12 py-2 px-4 rounded-xl mt-4 animate-pulse"
              >
                Voir mon CV
              </button>
            </a>
            <a href="https://www.linkedin.com/in/arnaud-champetier-030b0797/">
              <button
                type="submit"
                className="bg-blue-800/60 text-white mb-24 m-3 py-2 px-4 rounded-xl mt-4 animate-pulse"
              >
                Linkedin{" "}
              </button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
