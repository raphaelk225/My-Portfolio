import React from "react";
import myImage from "../../../src/assets/my-picture.jpeg";

const Welcome = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                MyPortfolio<span className="text-yellow-700">.</span>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  I'm <span className="text-yellow-700">Raphael Kouamelan</span>{" "}
                  <span className="text-4xl">
                    Développeur FullStack Junior{" "}
                  </span>
                </h1>
                <div className="w-20 h-2 bg-yellow-700 my-4"></div>
                <p className="text-xl mb-10">
                  Passionné par l’innovation, la
                  recherche et la création de projets web & mobiles. Je conçois
                  des solutions numériques modernes, efficaces et centrées sur
                  l’utilisateur, en combinant mes compétences en développement
                  (frontend & backend) avec une approche analytique des données.
                  Curieux de nature, j’aime transformer les idées en produits
                  concrets et utiles, en m’appuyant sur des technologies
                  récentes et des méthodes agiles.
                </p>
                <button className="bg-yellow-800 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src={myImage}
          alt="Leafs"
          class="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </section>
  );
};

export default Welcome;
