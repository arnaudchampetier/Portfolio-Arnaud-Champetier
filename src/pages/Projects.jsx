import React from "react";
import nusret from "../assets/nusret.jpg";
import wot from "../assets/wotlogo.png";
import wave2 from "../assets/projects5.jpg";
import poste from "../assets/P3.png";
import maria from "../assets/logomaria2.png";

function Projects() {
  return (
    <div
      className=" h-screen w-screen bg-cover bg-center bg-no-repeat overflow-scroll"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <div className=" flex flex-col ">
        <section
          id="projects"
          className="mb-4 w-2/3 md:w-1/3  flex flex-col items-center mx-auto my-auto  justify-center my-custom-rounded "
        >
          <h2 className="text-3xl md:text-5xl animate-pulse text-center text-courier-new text-gray-800  my-custom-rounded  mt-24 font-bold mb-24  md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-110">
            Projets
          </h2>
          <div className="md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new  p-6 border rounded-2xl mx-8 w-full mr-2 mb-24 my-custom-rounded">
            <h3 className="text-xl text-yellow-500 font-bold mb-4">
              Projet freelance - Chez Maria <br></br>Epicerie ardéchoise à Lyon
            </h3>
            <img src={maria} alt="" className="w-16 h-16 mx-auto mb-4" />

            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className="underline font-bold text-2xl uppercase  ">
                Stack:
              </span>
            </p>
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className=" font-bold text-l   ">
                React/TailWind<br></br>
                <br></br>NodeJs{" "}
              </span>
            </p>

            <iframe
              className="w-full h-96 my-4"
              src="https://www.loom.com/embed/f74ba70b7c8c4ba591c5cb8e1a35a783"
              title="video Chez Maria version Desktop"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>

            <a
              href="https://chezmaria.vercel.app/"
              className="inline-block px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              En savoir plus
            </a>
            <a
              href="https://github.com/arnaudchampetier/chezmaria"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              GitHub du projet
            </a>
          </div>
          <div className="md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new  p-6 border rounded-2xl mx-8 w-full mr-2 mb-24 my-custom-rounded">
            <h3 className="text-xl text-yellow-500 font-bold mb-4">
              P3 - La Poste - Ligne Bleue <br></br>Rendre accessible le
              numérique par l'apprentissage.
            </h3>
            <img src={poste} alt="" className="w-16 h-16 mx-auto mb-4" />

            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className="underline font-bold text-2xl uppercase  ">
                Stack:
              </span>
            </p>
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className=" font-bold text-l   ">
                React/TailWind<br></br>Express/MySql<br></br>NodeJs{" "}
              </span>
            </p>

            <iframe
              className="w-full h-96 my-4"
              src="https://www.loom.com/embed/9df13ebb3b97415aa8820c9612dc9e3f"
              title="video ligne bleue"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>

            <a
              href="https://laposte.lyon-2.wilders.dev/"
              className="inline-block px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              En savoir plus
            </a>
            <a
              href="https://github.com/WildCodeSchool/P3_La-Poste_Lyon_React_Sept_2022"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              GitHub du projet
            </a>
          </div>
          <div className="md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 bg-gray-700/70 md:hover:bg-gray-900/80 text-center  text-lg text-courier-new shadow p-6 border rounded-2xl mx-8 w-full mr-2 mb-12 my-custom-rounded">
            <h3 className="text-xl text-yellow-500 font-bold mb-4">
              {" "}
              P2 - Wild On Track <br></br> Service de création de carnet de
              voyage avec les vols, hôtels, restaurants et activités d'un
              séjour.
            </h3>
            <img
              src={wot}
              alt=""
              className="w-16 h-16 mx-auto bg-white mb-4 rounded-xl"
            />
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className="underline font-bold text-2xl uppercase  ">
                Stack:
              </span>
            </p>
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className=" font-bold text-l   ">
                React/MaterialUi<br></br>ApiRest/NodeJs
              </span>
            </p>

            <iframe
              title="video wild on track"
              className="w-full h-96 my-4"
              src="https://www.loom.com/embed/99d0b6c469924bec9dfb79f2f343d5c5"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <a
              href="https://github.com/WildCodeSchool/P2_Wild-On-Track_Lyon-React-Sept-2022"
              className="inline-block px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80  animate-pulse "
            >
              En savoir plus
            </a>
            <a
              href="https://github.com/WildCodeSchool/P2_Wild-On-Track_Lyon-React-Sept-2022"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-xl md:hover:bg-green-500/80 animate-pulse"
            >
              GitHub du projet
            </a>
          </div>
          <div className="md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new  p-6 border rounded-2xl mx-8 w-full mr-2 mb-12 my-custom-rounded">
            <h3 className="text-xl text-courier-new font-bold mb-4 text-yellow-500">
              P1 - FFK Premier projet en équipe
            </h3>
            <p className="text-courier-new text-gray-200 mb-4 md:hover:text-white"></p>
            <img
              src={nusret}
              alt=""
              className="w-16 h-16 mx-auto mb-4 rounded-xl "
            />
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className="underline font-bold text-2xl uppercase  ">
                Stack:
              </span>
            </p>
            <p className="text-gray-200 mb-4 md:hover:text-white">
              <span className=" font-bold text-l   ">Html/CSS/JavaScript</span>
            </p>
            <a
              href="https://musical-ganache-813abc.netlify.app/"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              En savoir plus
            </a>
            <a
              href="https://github.com/ChaiDaryl/Project_Samourai"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
            >
              GitHub du projet
            </a>
          </div>{" "}
          <div className="md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new  p-6 border rounded-2xl mx-8 w-full mr-2 mb-12 my-custom-rounded">
            <h3 className="text-xl text-courier-new font-bold mb-4 text-yellow-500">
              Autres réalisations et apprentissage{" "}
            </h3>
            <p className="text-courier-new text-gray-200 mb-4 md:hover:text-white">
              Participation à deux hackathons <br></br>Veille technologique{" "}
              <br></br>
              Ateliers, Dojos, Standups quotidiens <br></br> Bonnes pratiques,
              clean code, POO ...
            </p>
          </div>{" "}
        </section>
      </div>
    </div>
  );
}

export default Projects;

/* import React from "react";
import nusret from "../assets/nusret.jpg";
import wot from "../assets/wotlogo.png";
import wave2 from "../assets/modernbg2.png";
import poste from "../assets/P3.png";

function Projects() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${wave2})` }}
    >
      <div className="h-screen w-screen">
        <section
          id="projects"
          className="mb-4 w-full h-full flex flex-col items-center mx-auto my-auto  justify-center my-custom-rounded"
        >
          <h2 className="text-5xl text-center text-courier-new text-white  my-custom-rounded  mt-4 font-bold mb-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-110 ">
            Projets
          </h2>
          <div className=" scale-90 transition duration-1000 ease-in-out transform hover:scale-105 shadow-md bg-blue-500/70 hover:bg-blue-800/50 text-center text-3xl text-courier-new  p-6 border rounded-2xl mx-8 w-1/2 mr-2 mb-4 my-custom-rounded">
            <h3 className="text-3xl text-courier-new font-bold mb-4">FFK </h3>
            <p className="text-courier-new text-gray-900 mb-4 hover:text-white">
              Premier projet réalisé en équipe, avec Html Css et JavaScript.
            </p>
            <img src={nusret} alt="" className="w-24 h-24 mx-auto " />
            <a
              href="https://musical-ganache-813abc.netlify.app/"
              className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-900 rounded-full hover:bg-gray-200"
            >
              En savoir plus
            </a>
          </div>{" "}
          <div className="scale-90 transition duration-1000 ease-in-out transform hover:scale-105 bg-blue-500/70 hover:bg-blue-800/50 text-center  text-3xl text-courier-new shadow p-6 border rounded-2xl mx-8 w-1/2 mr-2 mb-4 my-custom-rounded">
            <h3 className="text-3xl font-bold mb-4"> Wild On Track</h3>
            <p className="text-gray-900 mb-4 hover:text-white">
              Projet réalisé en équipe. Service de création de carnet de voyage
              comprenant les vols, hôtels, restaurants et activités d'un séjour.
              Stack technique : ReactJs, Material UI. Utilisation de 3 API.
            </p>

            <img src={wot} alt="" className="w-24 h-24 mx-auto bg-white " />

            <a
              href="https://github.com/"
              className="inline-block px-4 py-2 font-semibold text-gray-800 rounded-full hover:bg-gray-200 "
            >
              En savoir plus
            </a>
          </div>
          <div className="scale-90 transition duration-1000 ease-in-out transform hover:scale-105 bg-blue-500/70 hover:bg-blue-800/50 text-center text-3xl text-courier-new shadow p-6 border rounded-2xl mx-8 w-1/2 mr-2 mb-4 my-custom-rounded">
            <h3 className="text-3xl font-bold mb-4">La Poste - Ligne Bleue</h3>
            <p className="text-gray-900 mb-4 hover:text-white">
              Projet réalisé en équipe avec La Poste en client final.
              Application web destinée aux personnes isolées du numérique. Série
              de tutoriels pour la prise en main des outils digitaux. Stack
              technique : ReactJs, Tailwind CSS, Express, NodeJs et WorkBench
              pour modéliser et implémenter la base de données et les différents
              niveaux d'utilisateurs.
            </p>
            <img src={poste} alt="" className="w-24 h-24 mx-auto " />

            <a
              href="https://github.com/"
              className="inline-block px-4 py-2 font-semibold text-gray-800 rounded-full hover:bg-gray-200"
            >
              En savoir plus
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects; */
