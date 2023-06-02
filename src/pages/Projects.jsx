import React from "react";
import nusret from "../assets/nusret.jpg";
import wot from "../assets/wotlogo.png";
import wave2 from "../assets/projects5.jpg";
import poste from "../assets/P3.png";
import maria from "../assets/logomaria2.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet freelance - Chez Maria Epicerie ardéchoise à Lyon",
      image: maria,
      stack: "React/TailWind, NodeJs",
      videoUrl: "https://www.loom.com/embed/f74ba70b7c8c4ba591c5cb8e1a35a783",
      websiteUrl: "https://chezmaria.vercel.app/",
      githubUrl: "https://github.com/arnaudchampetier/chezmaria",
    },
    {
      id: 2,
      title:
        "P3 - La Poste - Ligne Bleue Rendre accessible le numérique par l'apprentissage.",
      image: poste,
      stack: "React/TailWind, Express/MySql, NodeJs",
      videoUrl: "https://www.loom.com/embed/9df13ebb3b97415aa8820c9612dc9e3f",
      websiteUrl: "https://laposte.lyon-2.wilders.dev/",
      githubUrl:
        "https://github.com/WildCodeSchool/P3_La-Poste_Lyon_React_Sept_2022",
    },
    {
      id: 3,
      title:
        "P2 - Wild On Track Service de création de carnet de voyage avec les vols, hôtels, restaurants et activités d'un séjour.",
      image: wot,
      stack: "React/MaterialUi, ApiRest/NodeJs",
      videoUrl: "https://www.loom.com/embed/99d0b6c469924bec9dfb79f2f343d5c5",
      websiteUrl: "https://wildontrack.netlify.app/",
      githubUrl:
        "https://github.com/WildCodeSchool/P2_Wild-On-Track_Lyon-React-Sept-2022",
    },
    {
      id: 4,
      title: "P1 - FFK Premier projet en équipe",
      image: nusret,
      stack: "Html/CSS/JavaScript",
      videoUrl: "https://www.youtube.com/embed/xxxxx",
      websiteUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  return (
    <div>
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-scroll"
        style={{ backgroundImage: `url(${wave2})` }}
      >
        <h2 className="text-3xl md:text-5xl animate-pulse text-center text-courier-new text-gray-800  my-custom-rounded  mt-24 font-bold mb-24  md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-110">
          Projets
        </h2>
        <section className="flex flex-col items-center justify-center mx-auto w-3/4 lg:w-screen">
          {projects.map((project) => (
            <div
              key={project.id}
              className="md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3 md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new p-6 border rounded-2xl mx-8 w-full mr-2 mb-24 my-custom-rounded"
            >
              <h3 className="text-xl text-yellow-500 font-bold mb-4">
                {project.title}
              </h3>
              <img
                src={project.image}
                alt=""
                className="w-16 h-16 mx-auto mb-4"
              />

              <p className="text-gray-200 mb-4 md:hover:text-white">
                <span className="underline font-bold text-2xl uppercase">
                  Stack:
                </span>
              </p>
              <p className="text-gray-200 mb-4 md:hover:text-white">
                <span className="font-bold text-l">
                  {project.stack.split("<br></br>").map((item, index) => (
                    <React.Fragment key={index}>
                      {item}
                      <br></br>
                    </React.Fragment>
                  ))}
                </span>
              </p>

              <iframe
                className="w-full h-96 my-4"
                src={project.videoUrl}
                title={`video ${project.title}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <a
                href={project.websiteUrl}
                className="inline-block px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
              >
                En savoir plus
              </a>
              <a
                href={project.githubUrl}
                className="inline-block text-courier-new px-4 py-2 font-semibold text-gray-200 rounded-full md:hover:bg-green-500/80 animate-pulse"
              >
                GitHub du projet
              </a>
            </div>
          ))}
          <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3 md:scale-90 md:transition md:duration-1000 md:ease-in-out md:transform md:hover:scale-105 shadow-md bg-gray-700/70 md:hover:bg-gray-900/80 text-center text-lg text-courier-new  p-6 border rounded-2xl mx-8  mr-2 mb-24 my-custom-rounded">
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
