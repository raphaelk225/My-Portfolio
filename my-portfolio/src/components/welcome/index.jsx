import React from "react";
import myImage from "../../../src/assets/my-picture.jpeg";

const Welcome = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold mt-4">
                MyPortfolio<span className="text-yellow-700">.</span>
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  I'm{" "}
                  <span className="text-yellow-700">
                    Otchoumou Raphael KOUAMELAN
                  </span>
                  <br />
                  <span className="text-4xl">
                    Développeur FullStack Junior
                  </span>
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="w-20 h-2 bg-yellow-700 my-4"
                ></div>
                <div data-aos="fade-up-right" className="relative inline-flex  group items-center justify-center bg-gradient-to-tr to-yellow-700 from-indigo-900 p-10 mt-8">
                  <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px  bg-gradient-to-tr to-yellow-700 from-indigo-900 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                  <p
                    data-aos="zoom-in"
                    className="text-xl text-white mb-10 relative inline-flex items-center justify-center px-8 py-4 font-boldtransition-all duration-200 font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Passionné par l’innovation, la recherche et la création de
                    projets web & mobiles. Je conçois des solutions numériques
                    modernes, efficaces et centrées sur l’utilisateur, en
                    combinant mes compétences en développement (frontend &
                    backend) avec une approche analytique des données. Curieux
                    de nature, j’aime transformer les idées en produits concrets
                    et utiles, en m’appuyant sur des technologies récentes et
                    des méthodes agiles.
                  </p>
                </div>
              </div>
            </header>
          </div>
        </div>
        <img
          data-aos="fade-left"
          src={myImage}
          alt="Leafs"
          class="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </section>
  );
};

export default Welcome;
