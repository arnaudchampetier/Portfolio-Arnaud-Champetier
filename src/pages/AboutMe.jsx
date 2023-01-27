import React from "react";
import wave2 from "../assets/blueplane.jpg";
import pic from "../assets/avatarprofilpic.png";

function AboutMe() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center overflow-scroll md:bg-no-repeat md:flex-row md:items-stretch md:justify-center"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <h1 className="scale-90 transition duration-1000 ease-in-out transform hover:scale-105 md:text-4xl text-3xl font-bold text-gray-300 text-center mt-8 md:mt-16 md:mb-8 md:text-center md:absolute md:top-0 md:w-full">
        Qui suis-je?
      </h1>
      <h1 className="scale-90 animate-pulse transition duration-1000 ease-in-out transform hover:scale-105 mb-2 mt-2 md:text-2xl text-xl font-bold text-gray-100 text-center md:mt-32 md:text-center md:absolute md:top-0 md:w-full">
        Mieux me connaître{" "}
      </h1>
      <img
        src={pic}
        alt="Mapic"
        className="scale-90 md:min-w-fit relative bg-white transition duration-1000 ease-in-out transform hover:scale-110 md:rotate-12 mt-6 hover:transform-none md:transform md:my-custom-rounded md:rotate-15 md:mt-48 md:hover:transform-none md:transition-transform md:duration-1000 mx-auto rounded-full my-custom-rounded w-2/5 md:w-1/5 h-1/2 object-cover mb-8 md:float-left md:mx-auto md:my-0 md:mr-16"
        //className="transform my-custom-rounded rotate-15 hover:transform-none rounded-lg w-full object-cover h-full transition-transform duration-1000"
      />
      <section className="w-2/3 flex flex-col items-center p-6 text-center md:w-1/2 md:float-right md:mx-auto md:my-0 md:ml-16">
        <div className="w-full">
          <div className="bg-gray-700 md:min-w-fit animate-pulse md:mt-48 md:mx-auto  md:w-1/4 rounded-xl md:my-custom-rounded p-4 hover:bg-gray-800/40 w-full scale-90 transition duration-1000 ease-in-out transform hover:scale-110">
            <ul className="list-none p-0">
              <li className="py-2 text-xl text-gray-300 hover:text-white">
                {" "}
                <img
                  src={require("../assets/quality.png")}
                  alt="quality icon"
                  className="md:w-12 md:h-12 w-1/5 h-1/5 "
                />
                Qualités :{" "}
              </li>
              <li className="py-2 px-4 md:text-xl text-gray-300 hover:text-white">
                Autonome{" "}
              </li>{" "}
              <li className="py-2 md:text-xl text-gray-300 hover:text-white">
                Passionné{" "}
              </li>
              <li className="py-2 md:text-xl text-gray-300 hover:text-white">
                Curieux{" "}
              </li>
              <li className="py-2 md:text-xl text-gray-300 hover:text-white">
                Communicatif{" "}
              </li>
              <li className="py-2 md:text-xl text-gray-300 hover:text-white">
                Adaptable{" "}
              </li>
            </ul>
          </div>

          <p className="py-6 text-center mb-24 md:text-xl text-gray-300 w-full mt-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-110">
            Je suis une personne passionnée et motivée, toujours à la recherche
            de nouvelles expériences et de défis à relever. J'aime travailler en
            équipe et apporter ma contribution à la réalisation de projets
            ambitieux. En dehors du travail, je suis un passionné de sport et de
            voyages, et j'aime passer du temps dans la nature. J'aime également
            la littérature, la cuisine et le cinéma.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;

/* import React from "react";
import "../App.css";
import wave2 from "../assets/wave2.jpg";
import pic from "../assets/tofprofil.jpg";

function AboutMe() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <h1 className="md:text-5xl font-bold text-gray-300 text-center mt-32 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
        Qui suis-je?
      </h1>
      <h1 className="md:text-3xl font-bold text-gray-100 text-center mt-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
        Mieux me connaître{" "}
      </h1>

      <section
        id="about-me"
        className="h-full w-full flex flex-row items-center justify-center p-6 text-center"
      >
        <div className="w-1/4 ">
          <div className="bg-blue-500 mx-48 rounded-full my-custom-rounded overflow-visible w-1/5 absolute inset-0 left-0 ml-96 mt-72 mb-72">
            <img
              src={pic}
              alt="Mapic"
              className="transform my-custom-rounded rotate-15 hover:transform-none rounded-lg w-full object-cover h-full transition-transform duration-1000"
            />
          </div>
        </div>

        <section className="flex flex-col items-center justify-center w-1/2 ml-96 mb-96 ">
          <div className="bg-blue-500 rounded-lg my-custom-rounded p-4 hover:bg-blue-800/80 w-1/3 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
            <ul className="list-none p-0">
              <li className="py-2 text-2xl text-gray-800 hover:text-white">
                {" "}
                <img
                  src={require("../assets/quality.png")}
                  alt="quality icon"
                  className="w-12 h-12 ml-82 "
                />
                Qualités :{" "}
              </li>
              <li className="py-2 text-xl text-gray-800 hover:text-white">
                Autonome{" "}
              </li>

              <li className="py-2 text-xl text-gray-800 hover:text-white">
                Passioné{" "}
              </li>
              <li className="py-2 text-xl text-gray-800 hover:text-white">
                Curieux{" "}
              </li>
              <li className="py-2 text-xl text-gray-800 hover:text-white">
                Communicatif{" "}
              </li>
              <li className="py-2 text-xl text-gray-800 hover:text-white">
                Adaptable{" "}
              </li>
            </ul>
          </div>
          <p className="py-6 text-center text-3xl text-gray-400 w-1/2 scale-90 transition duration-1000 ease-in-out transform hover:scale-110">
            Je suis une personne passionnée et motivée , toujours à la recherche
            de nouvelles expériences et de défis à relever. J'aime travailler en
            équipe et apporter ma contribution à la réalisation de projets
            ambitieux. En dehors du travail, je suis un passionné de sport et de
            voyages, et j'aime passer du temps en nature.
          </p>
          <button
            type="submit"
            className="bg-yellow-700 flex-wrap text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-24 md:w-38 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
          >
            Consulter mon CV
          </button>
        </section>
      </section>
    </div>
  );
}

export default AboutMe; */
