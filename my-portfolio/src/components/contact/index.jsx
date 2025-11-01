import React from "react";

const ContactMe = () => {
  return (
    <>
      <section>
        <div class="my-6 ">
          <div class="grid sm:grid-cols-2 items-center gap-16 p-8 m-10 max-w-full bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
            <div>
              <h1 class="text-3xl font-extrabold">Let's Talk</h1>
              <div className="w-20 h-2 bg-yellow-700 my-4"></div>
              <p class="text-sm text-gray-400 mt-3">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
              <div class="mt-12">
                <h2 class="text-lg font-extrabold">Email</h2>
                <ul class="mt-3">
                  <li class="flex items-center">
                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <a
                      target="blank"
                      href=""
                      class="text-yellow-700 text-sm ml-3"
                    >
                      <small class="block">Mail</small>
                      <strong>raphael.kouamelan@epitech.eu</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12">
                <h2 class="text-lg font-extrabold">Socials</h2>
                <ul class="flex mt-3 space-x-4">
                  <li class=" h-10 w-10 rounded-full flex items-center justify-center shrink-0 duration-300 transform hover:scale-105">
                    <a href="javascript:void(0)">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                        alt="Facebook"
                        class="w-12 h-12 mb-2"
                      />
                    </a>
                  </li>
                  <li class=" h-10 w-10 rounded-full flex items-center justify-center shrink-0 duration-300 transform hover:scale-105">
                    <a
                      href="http://www.linkedin.com/in/raphael-kouamelan-9b337733a"
                      target="blank"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="Linkedin"
                        class="w-12 h-12 mb-2"
                      />
                    </a>
                  </li>
                  <li class=" h-10 w-10 rounded-full flex items-center justify-center shrink-0 duration-300 transform hover:scale-105">
                    <a
                      href="http://www.linkedin.com/in/raphael-kouamelan-9b337733a"
                      target="blank"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="github"
                        class="w-12 h-12 mb-2"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form class="ml-auo space-y-4">
              <input
                type="text"
                placeholder="Name"
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-700"
              />
              <input
                type="email"
                placeholder="Email"
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-700"
              />
              <input
                type="text"
                placeholder="Subject"
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-700"
              />
              <textarea
                placeholder="Message"
                rows="6"
                class="w-full rounded-md px-4 border text-sm pt-2.5 outline-yellow-700"
              ></textarea>
              <button
                type="button"
                class="text-white bg-yellow-700 hover:bg-yellow-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="bg-zinc-50 overflow-hidden">
        <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto  lg:py-24 space-y-24  flex flex-col justify-center">
          <div class="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactMe;
