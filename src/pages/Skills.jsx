import React from "react";
import wave2 from "../assets/deskwork1.jpg";
import { useState } from "react";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    {
      title: "Languages de programmation",
      list: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks & librairies",
      list: ["React", "Express", "Bootstrap", "TailWind", "Material UI"],
    },
    {
      title: "Bases de données",
      list: ["Workbench", "MySQL", "Postman"],
    },
    {
      title: "Outils de développement",
      list: ["Git", "GitHub", "Zenhub", "npm"],
    },
    {
      title: "Maquettage",
      list: ["Figma"],
    },
    {
      title: "En cours d'apprentissage",
      list: ["PHP", "Java", "VueJs", "TypeScript", "Angular", "..."],
    },
  ];

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 left-4 flex justify-center"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <button
                className="bg-gray-900 rounded-full p-4 text-white animate-pulse md:ml-96 font-bold hover:bg-green-500"
                onClick={() =>
                  currentIndex === 0
                    ? setCurrentIndex(skills.length - 1)
                    : setCurrentIndex(currentIndex - 1)
                }
              >
                {"◁"}
              </button>
            </div>
            <div
              className="absolute top-0 right-4 flex justify-center"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <button
                className="bg-gray-900 rounded-full p-4 font-bold text-white animate-pulse md:mr-96 hover:bg-green-500"
                onClick={() =>
                  currentIndex === skills.length - 1
                    ? setCurrentIndex(0)
                    : setCurrentIndex(currentIndex + 1)
                }
              >
                {"▷"}
              </button>
            </div>
            <div className="card rounded-3xl py-auto  h-1/2 w-2/3 md:h-1/2 md:w-1/4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105 mx-auto bg-gray-700/80">
              <h2 className=" md:py-12 py-2 text-2xl text-gray-100 animate-pulse scale-90 transition duration-1000 ease-in-out transform hover:scale-110 font-bold mt-44 mb-4 text-center">
                Compétences techniques :
              </h2>
              <div className="mb-4 mt-18 text-xl text-center text-white scale-90 transition duration-1000 ease-in-out transform hover:scale-110 animate-pulse ">
                <strong>{skills[currentIndex].title}</strong>
                <ul className="list-none mt-12">
                  {skills[currentIndex].list.map((skill) => (
                    <li className="mb-2">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

/* import React from "react";
import wave2 from "../assets/skills.jpg";

function Skills() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <div className="flex justify-center items-center h-full">
        <section
          id="skills"
          className="mb-8 bg-blue-900/90  hover:bg-blue-800/80 flex p-4 rounded-lg my-custom-rounded h-1/3 w-1/3 scale-90 transition duration-1000 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-4xl text-gray-300 text-courier-new mt-44 font-bold mb-4 text-center">
            Compétences techniques :
          </h2>
          <ul className="list-none mb-4  text-3xl text-courier-new text-center text-white">
            <li className="mb-2">
              <strong>Languages de programmation :</strong> <br></br>JavaScript,
              HTML, CSS,
            </li>
            <li className="mb-2">
              <strong>Frameworks & librairies :</strong>
              <br></br> React, Express, Bootstrap, TailWind, Material UI ...
            </li>
            <li className="mb-2">
              <strong>Bases de données :</strong>
              <br></br> Workbench, MySQL
            </li>
            <li className="mb-2">
              <strong>Outils de développement :</strong>
              <br></br> Git, GitHub, Zenhub, npm
            </li>
            <li className="mb-2">
              <strong>Maquettage :</strong>
              <br></br> Figma
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Skills; */
