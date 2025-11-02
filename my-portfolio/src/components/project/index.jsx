import React from "react";
import YowlImage from "../../../src/assets/yowl.png";
import FreeadsImage from "../../../src/assets/freeads.jpeg";
import PostImage from "../../../src/assets/post-it.png";
import TrelloCloneImage from "../../../src/assets/Trello.png";
import DashboardImage from "../../../src/assets/dashboard.png";
import Rotten from "../../../src/assets/rotten.jpeg";
const Projects = () => {
  return (
    <>
      <section class="mb-20 animate-fade-in-up m-10">
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          Projets
        </h3>
        <div className="w-full h-2 bg-yellow-700 my-4"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="flip-left"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={FreeadsImage}
                alt="Project 1"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Freeads
            </h3>
            <p class="mb-4">
              Ça consistait à créer un site web gratuit de publication
              d’annonces, avec un système d’inscription et de connexion (y
              compris la vérification par mail), une interface utilisateur, un
              espace d’ajout d’articles, ainsi qu’un système de filtre et une
              barre de recherche.
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div
            data-aos="flip-right"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={PostImage}
                alt="Project 2"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Post-it
            </h3>
            <p class="mb-4">
              Le projet “Post-it” consistait à afficher les posts depuis l’API,
              en créer, les modifier, les supprimer, et voir les détails de
              chaque post — en gros, un bon vieux CRUD{" "}
            </p>
            <a
              href="https://post-it-todoproject.vercel.app/"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div
            data-aos="flip-right"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={YowlImage}
                alt="Project 4"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Yowl
            </h3>
            <p class="mb-4">
              Yowl, c’est une application web qui permet aux utilisateurs de
              commenter n’importe quel contenu trouvé sur Internet . L’idée,
              c’est de décentraliser les commentaires des réseaux sociaux et
              d’offrir une nouvelle façon d’interagir avec le web, en permettant
              à chacun d’ajouter un commentaire directement via une URL. Le but
              : rassembler des communautés autour des sites web et encourager
              une participation plus libre et ouverte{" "}
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div
            data-aos="flip-right"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={DashboardImage}
                alt="Project 4"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Dashboard
            </h3>
            <p class="mb-4">
              Dash — Application web développée avec React.js (frontend) et
              NestJS (backend), permettant à chaque utilisateur de créer un
              dashboard personnalisé. Les utilisateurs peuvent y ajouter
              librement des widgets selon leurs préférences : météo, films,
              médias, et bien plus{" "}
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div
            data-aos="flip-right"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={TrelloCloneImage}
                alt="Project 4"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Trello Clone "APP Mobile"
            </h3>
            <p class="mb-4">
              Application développée React Native en utilisant l’API officielle
              de Trello, permettant de se connecter à son compte via OAuth, de
              créer, modifier et supprimer des tableaux (CRUD complet), et de
              gérer ses workspaces et boards directement depuis l’application.{" "}
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div
            data-aos="flip-right"
            class="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 "
          >
            <div class="h-48 overflow-hidden">
              <img
                src={Rotten}
                alt="Project 4"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">
              Rotten Tomatoes
            </h3>
            <p class="mb-4">
              Rotten Tomatoes Clone — Site web inspirée du site Rotten Tomatoes,
              développée à l’aide de son API officielle pour afficher les films,
              consulter leurs notes et critiques, et permettre à l’utilisateur
              d’ajouter ses favoris ou sa liste de visionnage{" "}
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
