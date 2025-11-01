import React from "react";

const Skills = () => {
  return (
    <section>
      <div class="w-full p-6 ">
        <h2 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          My Skills
        </h2>
        <div className="w-full h-2 bg-yellow-700 my-4"></div>
        <section
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="Backend"
        >
          <div>
            <h2 class="text-2xl text-yellow-800  tracking-tight font-extrabold text-center  md:text-2xl dark:text-white mt-10 mb-10">
              BACKEND
            </h2>
          </div>

          <div class="grid grid-cols-2 items-center /sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">NodeJS</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  70%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-green-500 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* PHP */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">PHP</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  70%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-blue-500 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* LARAVEL */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                  alt="Laravel"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-yellow-800  font-semibold">
                  Laravel
                </span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  80%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-500 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* NEXTJS */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="NextJS"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">NextJS</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  80%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-gray-900 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* NestJS */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                  alt="NestJS"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">NestJS</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  70%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-600 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Python */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="python"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">Python</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  60%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-yellow-400 h-full rounded-sm"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* flask */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                  alt="flask"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">Flask</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  60%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-gray-400 h-full rounded-sm"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="Frontend mt-10"
        >
          <div>
            <h2 class="text-2xl text-yellow-800 tracking-tight font-extrabold text-center  md:text-2xl dark:text-white mt-10 mb-10">
              FRONTEND
            </h2>
          </div>

          <div class="grid grid-cols-2 items-center /sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="VueJs"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">VueJs</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  80%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-green-600 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* ReactJS */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="ReactJS"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">ReactJS</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  70%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-blue-300 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* javascript */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">javascript</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  80%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-500 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Javascript */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="bootstrap"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">bootstrap</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  80%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-500 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* tailwind */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="tailwind"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">tailwind</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  85%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-500 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="Base de Donnees mt-10 "
        >
          <div>
            <h2 class="text-2xl tracking-tight font-extrabold text-center text-yellow-900 md:text-2xl dark:text-white mt-10 mb-10">
              BASE DE DONNÉES
            </h2>
          </div>

          <div class="grid grid-cols-2 items-center /sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="mysql"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">mysql</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  85%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-green-600 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* MongoDB */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">MongoDB</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  75%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-blue-300 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* sqlite */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                  alt="sqlite"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">sqlite</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  65%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-red-500 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="Base de Donnees mt-10 "
        >
          <div>
            <h2 class="text-2xl tracking-tight font-extrabold text-center text-yellow-900 md:text-2xl dark:text-white mt-10 mb-10">
              OUTILS
            </h2>
          </div>

          <div class="grid grid-cols-2 items-center /sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="github"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">github</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  85%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-green-600 h-full rounded-sm"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* trello */}
            <div class=" bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg"
                  alt="trello"
                  class="w-12 h-12 mb-2"
                />
                <span class="text-xl text-black font-semibold">trello</span>
              </div>

              <div>
                <span class="text-2xl flex justify-center items-center font-bold">
                  90%
                </span>
                {/* <div class="relative">
                  <div class="w-full bg-gray-200 rounded-sm h-8">
                    <div
                      class="bg-blue-300 h-full rounded-sm"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* sqlite */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
