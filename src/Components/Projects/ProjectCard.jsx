import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faEnvira,
  faNodeJs,
  faUnity,
  faPython,
  faJs,
  faBootstrap,
  faPhp,
  faDatabase,
} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ imageUrl, title, description, techs, flipped }) => {
  const cardClass = `flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md mb-3 ${
    flipped ? "flex-row-reverse" : ""
  }`;
  const iconMap = {
    React: faReact,
    Node: faNode,
    HTML: faHtml5,
    Tailwind: faCss3Alt,
    MongoDB: faEnvira,
    "Node.js": faNodeJs,
    Unity : faUnity,
    Python: faPython,
    CSS: faCss3Alt,
    JavaScript: faJs,
    Bootstrap: faBootstrap,
    Php: faPhp,
  };

  const colorMap = {
    React: "bg-sky-200 text-sky-400",
    "Node.js": "bg-green-200 text-[#3c873a]",
    Tailwind: "bg-blue-200 text-blue-500",
    MongoDB: "bg-green-200 text-green-700",
    Unity: "bg-black text-white",
    "C#": "bg-violet-300 text-violet-700",
    Python: "bg-yellow-200 text-yellow-700",
    OpenCV: "bg-gray-200 text-gray-700",
    HTML: "bg-red-200 text-red-700",
    CSS: "bg-blue-200 text-blue-700", 
    JavaScript: "bg-yellow-200 text-yellow-700",
    Bootstrap: "bg-purple-200 text-purple-700",
    Php: "bg-blue-200 text-blue-700",
    MySql: "bg-orange-200 text-orange-700",
    
  };

  return (
    <div className={cardClass}>
      <div className="flex-1 px-8 ">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex mt-6 ">
          {techs.map((tech) => (
            <span
              key={tech}
              className={`flex items-center  bg-gray-300 px-2 py-1 rounded-lg text-sm font-semibold m-1 ${colorMap[tech]}`}
            >
              <FontAwesomeIcon
                icon={iconMap[tech]}
                size="lg"
                className="mr-2"
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex mt-6 justify-center m-4">
            <div className="w-1 h-24 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
      <img src={imageUrl} alt={title} className="border-stone-300 border-4 w-1/2 h-auto rounded-lg max-h-96" />
    </div>
  );
};

export default ProjectCard;
