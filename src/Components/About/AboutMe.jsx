import React, { useRef } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPhp,
  faFigma,
  faGit,
  faJira,
  faSymfony,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
const AboutMe = () => {
  return (
    <div>
      <section className="text-gray-200 bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 py-24 ">
          <div className="text-center mb-20">
            <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl font-mova">
              What can i do ?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The world of computer science is vast, and new technologies emerge
              all the time. I am committed to staying ahead of the curve to meet
              my clients' needs and assist fellow developers. Here's what I
              specialize in:
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow ">
                    <h2 className="text-xl title-font font-medium mb-3 font-mova">
                      Webdesign
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      I bring your websites to life, making them visually
                      stunning and appealing. Even as a child, I was captivated
                      by color and design, making this a natural fit for me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3 font-mova">
                      Front-End Development
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      I specialize in React.js, crafting user-friendly and
                      responsive front-end experiences that effectively engage
                      your audience and enhance their interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3 font-mova">
                      Back-end Development
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      With expertise in frameworks like Express.js and Symfony,
                      I create dynamic and efficient websites that seamlessly
                      interact with your database.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>








          <div className="text-center mb-10  mt-10">
            <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl font-mova ">
              What technologies?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The world of computer science is vast, and new technologies emerge
              all the time. I am committed to staying ahead of the curve to meet
              my clients' needs and assist fellow developers. Here's what I
              specialize in:
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around">
            <div className="w-1/4 p-4">
              <h2 className="text-2xl title-font font-medium font-mova mb-10 text-center">
                Programming Languages
              </h2>

              <p className="leading-relaxed text-sm text-justify">
                <FontAwesomeIcon icon={faHtml5} size="lg" transform="grow-2 left-6"/> <FontAwesomeIcon icon={faCss3Alt} size="lg"  transform=" grow-2 left-6"/>
                <span className="pl-1">HTML / CSS</span>
              </p>
              <div className="progress">
                <div className="progress-value-html"></div>
              </div>

              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faJs} size="lg" transform="grow-2 left-6" />JavaScript
              </p>
              <div className="progress">
                <div className="progress-value-js"></div>
              </div>

              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faJava} size="lg"  transform="grow-2 left-6" />Java
              </p>
              <div className="progress">
                <div className="progress-value-java"></div>
              </div>

              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faPhp} size="lg" transform=" grow-2 left-6"  /> PHP
              </p>
              <div className="progress">
                <div className="progress-value-php"></div>
              </div>

            </div>
            <div className="w-1/4 p-4">
              <h2 className="text-2xl title-font font-medium font-mova mb-10 text-center">
                Frameworks
              </h2>
              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faReact} size="lg" transform="grow-2 left-4"  /> React.js
              </p>
              <div className="progress">
                <div className="progress-value-react"></div>
              </div>

              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faNodeJs} size="lg" transform="grow-2 left-4"/> Node.js
              </p>
              <div className="progress">
                <div className="progress-value-express"></div>
              </div>
              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faSymfony} size="lg" transform="grow-2 left-6" /> Symfony
              </p>
              <div className="progress">
                <div className="progress-value-symfony"></div>
              </div>
            </div>
            <div className="w-1/4 p-4">
              <h2 className="text-2xl title-font font-medium font-mova mb-10 text-center">
                Tools
              </h2>
              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faFigma} size="lg" transform="grow-2 left-6"/> Figma
              </p>
              <div className="progress">
                <div className="progress-value-figma"></div>
              </div>
              <p className="leading-relaxed text-sm text-justify mb-3 ">
                <FontAwesomeIcon icon={faGit} size="lg" transform="grow-2 left-6" /> Git
              </p>
              <div className="progress">
                <div className="progress-value-git"></div>
              </div>
              <p className="leading-relaxed text-sm text-justify mb-3">
                <FontAwesomeIcon icon={faJira} size="lg" transform="grow-2 left-6" /> Jira
              </p>
              <div className="progress">
                <div className="progress-value-jira"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
