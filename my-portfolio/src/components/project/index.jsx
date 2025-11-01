import React from "react";

const Projects = () => {
  return (
    <>
      <section class="mb-20 animate-fade-in-up m-10">
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          Projects
        </h3>
        <div className="w-full h-2 bg-yellow-700 my-4"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 ">
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 1"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">Freeads</h3>
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
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-105 ">
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 2"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">Post-it</h3>
            <p class="mb-4">
              Le projet “Post-it” consistait à afficher les posts depuis l’API,
              en créer, les modifier, les supprimer, et voir les détails de
              chaque post — en gros, un bon vieux CRUD{" "}
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 ">
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 3"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">TWP</h3>
            <p class="mb-4">
              Le projet TWP était basé sur Trello. L’objectif était de
              reproduire Trello en version web, avec un système de List CRUD,
              Card CRUD et Comments CRUD, tout en utilisant l’API de WordPress
              pour gérer le backend. Le projet TWP était basé sur Trello.
              L’objectif était de reproduire Trello en version web, avec un
              système de List CRUD, Card CRUD et Comments CRUD, tout en
              utilisant l’API de WordPress pour gérer le backend.
            </p>
            <a
              href="#"
              class="text-yellow-800 dark:text-primary-dark hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg  duration-300 transform hover:scale-105 ">
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 4"
                class="h-full w-full object-cover opacity-100 hover:opacity-50 transition-opacity duration-300"
              />
            </div>
            <h3 class="text-xl text-yellow-800 font-semibold mb-2 mt-2">Yowl</h3>
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
        </div>

        
      </section>
    </>
  );
};
export default Projects;
