import React from "react";
import "./Projects.css";

import anima from "./anima.png"; 
import pera from "./pera.png"; 
import EasyFaceRec from "./EasyFaceRec.png";
import ScoreQuest from "./ScoreQuest.png";

import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <section className="text-gray-900 bg-gray-200">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="text-center mb-20">
          <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl font-mova">
            What i did ?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This is what i did !
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="container mx-auto my-10">
          <ProjectCard
            imageUrl={anima}
            title="Anima Planet"
            description="Anima Planet is a website developed for a private veterinary clinic. It features a 
            comprehensive dashboard designed to help visualize sales data and manage clients, products and more."
            techs={["React", "Node.js","Tailwind","MongoDB"]}
            flipped
          />
          <ProjectCard
            imageUrl={pera}
            title="Perachute: Walking Scenarios for Fall Prevention"
            description="Perachute is a mixed reality application designed to help prevent falls among the elderly. By using simulated walking scenarios, Perachute provides an immersive experience that allows users to safely practice various movement situations."
            techs={["Unity", "C#", "Extended Reality (XR)"]}
          />
          <ProjectCard
            imageUrl={EasyFaceRec}
            title="Easy faceRec"
            description="EasyFaceRec is a simple and user-friendly face recognition application developed using Python and the face_recognition library. It allows users to perform real-time face detection and recognition from images with just a few clicks."
            techs={["Python", "OpenCV"]}
            flipped
          />
            <ProjectCard
            imageUrl={ScoreQuest}
            title="ScoreQuest"
            description="ScoreQuest is a simple and user-friendly face recognition application developed using Python and the face_recognition library. It allows users to perform real-time face detection and recognition from images with just a few clicks."
            techs={["Php", "JavaScript", "Bootstrap", "MySql"]}
            
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
