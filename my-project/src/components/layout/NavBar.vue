<template>
    <!-- Header-->
    <header class="fixed top-0 left-0 w-full">
        <nav class="bg-[rgba(15,23,42,0.9)] ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
                    <span class="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">NNS •
                        Data Insights</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

                        <button
                            class=" text-gray-300 text-sm rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</button>
                        <!-- <li>
                            <a href="#"
                                >Projects</a>
                        </li> -->
                        <!-- <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li> -->
                        <!-- <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li> -->
                        <!-- <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li> -->
                        <button @click="scrollToSection('projet')"
                            class="block text-sm text-gray-300  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</button>
                        <button @click="scrollToSection('skills')"
                            class="block text-sm text-gray-300  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">soft
                            skills</button>
                        <button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium 
           rounded-full bg-sky-500/20 text-white hover:bg-sky-500/30 
           shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition">
                            Contact
                        </button>

                        <!-- <button @click="scrollToSection('skills')" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">soft skilss</button> -->
                        <!-- <div class="px-3 py-2 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50">
                            <button
                                class="block text-sm text-white  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</button>
                        </div> -->

                        <!-- <button @click="scrollToSection('contact')">Contact</button> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- page d'acceuil -->
    <section>
        <div class="text-white p-[6%]">
            <div class="container mx-auto flex flex-col md:flex-row justify-between my-4 items-center">

                <!-- Colonne de gauche -->
                <div class="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
                    <h2 class="text-3xl md:text-5xl py-6 text-white tracking-loose">N'DRI NIKS SACHA</h2>
                    <!-- <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">DATA ANALYST</h2> -->
                    <p class="text-sm md:text-base text-gray-50 mb-4">
                        Data Analyste passionné par la transformation de données complexes en narrations actionnables.
                        J'aide les équipes à prioriser, aligner et piloter leurs décisions grâce à des insights clairs
                        et des visualisations immersives.
                    </p>
                    <div class="flex items-center gap-4">

                        <!-- <div class="px-3 py-2 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50">
                            <button @click="scrollToSection('contact')"
                                class="block text-sm text-white rounded-sm md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">
                                Contact Now
                            </button>
                        </div> -->



                        <button @click="scrollToSection('contact')" type="button" class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold 
                            rounded-full bg-sky-500/20 text-white shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition 
                          hover:bg-sky-500/30 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-sky-400/60">
                            contact now
                        </button>

                        <a href="" class="text-sky-700 text-sm md:text-base hover:text-white">
                            Voir toutes les coordonnées
                        </a>

                    </div>

                </div>

                <!-- Colonne de droite -->
                <div class="flex justify-center w-full md:w-1/2 ms-4">
                    <img class="rounded-3xl md:max-w-[95%] p-8 md:p-0"
                        src="C:\Users\HP\Pictures\Screenshots\portfolio.png">
                </div>

            </div>
        </div>

    </section>
    <!-- projet recent -->
    <section id="projet" class="w-full py-12 px-6">
        <div class="max-w-4xl mx-auto text-left">

            <p class="text-xs uppercase tracking-widest text-sky-300/50">
                Projets récents
            </p>


            <h3 class="text-xl md:text-3xl font-semibold text-white mb-2">
                Insights data prêts à l'action
            </h3>

            <p class="text-sm md:text-base text-gray-300 mb-8">
                Une sélection de réalisations récentes : dashboards, modèles prédictifs et stratégies data-<br>driven
                pour accélérer les décisions.
            </p>
            <!-- les cartes de projet -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

                <div
                    class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="block overflow-hidden">
                        <img class="rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
                    </a>
                    <div class="p-5">
                        <h5 class="text-sky-700 font-bold text-sm mb-2 dark:text-white">Projet 01</h5>
                        <h5 class="text-gray-900 font-bold text-xl mb-2 dark:text-white">Optimisation KPI e-commerce
                        </h5>
                        <p class="text-gray-700 text-sm mb-3 dark:text-gray-400">
                            Tableaux de bord dynamiques pour suivre le cycle de vie client et le ROI marketing.
                        </p>
                    </div>
                </div>

                <div
                    class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="block overflow-hidden">
                        <img class="rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
                    </a>
                    <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-xl mb-2 dark:text-white">Projet Data 2</h5>
                        <p class="text-gray-700 text-sm mb-3 dark:text-gray-400">
                            Description rapide du projet et des résultats obtenus.
                        </p>
                    </div>
                </div>

                <div
                    class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="block overflow-hidden">
                        <img class="rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
                    </a>
                    <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-xl mb-2 dark:text-white">Projet Data 3</h5>
                        <p class="text-gray-700 text-sm mb-3 dark:text-gray-400">
                            Description rapide du projet et des résultats obtenus.
                        </p>
                    </div>
                </div>

                <div
                    class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="block overflow-hidden">
                        <img class="rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
                    </a>
                    <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-xl mb-2 dark:text-white">Projet Data 4</h5>
                        <p class="text-gray-700 text-sm mb-3 dark:text-gray-400">
                            Description rapide du projet et des résultats obtenus.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Bouton voir plus-->
            <div class="flex justify-center">
                <button type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-full 
         bg-sky-400/20 px-6 py-2.5 text-sm font-semibold text-white 
         shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition 
         hover:bg-sky-400/30 
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400/60">
                    Voir plus
                </button>

            </div>

        </div>
    </section>
    <!-- soft skills -->
    <section id="skills" class="w-full py-12 px-6">
        <div class="max-w-4xl mx-auto text-left">
            <p class="text-xs uppercase tracking-widest text-sky-300/50">
                Soft Skills
            </p>

            <h3 class="text-xl md:text-3xl font-semibold text-white mb-2">
                Un partenaire data orienté impact
            </h3>

            <p class="text-sm md:text-base text-gray-300 mb-8">
                Collaboration fluide, restitution claire et leadership de conviction pour accompagner les <br> équipes à
                chaque étape.
            </p>
        </div>

        <div class="overflow-x-auto scrollbar-hide py-4 px-2 max-w-[65%] mx-auto">
            <div class="flex space-x-4">

                <div
                    class="flex-shrink-0 h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl transition">
                    <svg class="h-12 sm:h-14 md:h-16" viewBox="0 0 177 171">
                        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
                        </g>
                    </svg>
                    <span class="mt-4 text-xs sm:text-sm md:text-base leading-5 font-semibold text-center">
                        Frozen<br>Seafoods
                    </span>
                </div>

                <div
                    class="flex-shrink-0 h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl transition">
                    <svg class="h-12 sm:h-14 md:h-16" viewBox="0 0 177 171">
                        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
                        </g>
                    </svg>
                    <span class="mt-4 text-xs sm:text-sm md:text-base leading-5 font-semibold text-center">
                        Frozen<br>Seafoods
                    </span>
                </div>

                <div
                    class="flex-shrink-0 h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl transition">
                    <svg class="h-12 sm:h-14 md:h-16" viewBox="0 0 177 171">
                        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
                        </g>
                    </svg>
                    <span class="mt-4 text-xs sm:text-sm md:text-base leading-5 font-semibold text-center">
                        Frozen<br>Seafoods
                    </span>
                </div>

                <div
                    class="flex-shrink-0 h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl transition">
                    <svg class="h-12 sm:h-14 md:h-16" viewBox="0 0 177 171">
                        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
                        </g>
                    </svg>
                    <span class="mt-4 text-xs sm:text-sm md:text-base leading-5 font-semibold text-center">
                        Frozen<br>Seafoods
                    </span>
                </div>
                <div
                    class="flex-shrink-0 h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl transition">
                    <svg class="h-12 sm:h-14 md:h-16" viewBox="0 0 177 171">
                        <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
                        </g>
                    </svg>
                    <span class="mt-4 text-xs sm:text-sm md:text-base leading-5 font-semibold text-center">
                        Frozen<br>Seafoods
                    </span>
                </div>
            </div>
        </div>
    </section>
    <!-- contact -->
    <section id="contact" class="w-full py-12 px-6 ">
        <div class="max-w-4xl mx-auto text-left mb-12">
            <h2 class="text-xs uppercase tracking-widest text-sky-300/50">Contact</h2>
            <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
                Prêts à activer vos données ?
            </h3>
            <p class="text-sm md:text-base text-gray-300">
                Envoyez un message direct et explorons ensemble les pistes pour accélérer vos décisions.
            </p>
        </div>

        <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">

            <!-- Contact Form -->
            <div class="w-full md:w-1/2 flex-1 ">
                <form action="#" class="bg-slate-900/60 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
                    <h3 class="text-2xl font-semibold text-white">Laissez un message</h3>
                    <span class="text-xs text-white mb-4">
                        Vos informations restent confidentielles. Le bouton redirige vers WhatsApp avec votre message
                        prérempli.
                    </span>

                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col">
                            <label for="name" class="text-white mb-1">Name</label>
                            <input type="text" id="name" placeholder="Your Name"
                                class="px-4 py-2 bg-slate-900/75 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white" />
                        </div>

                        <div class="flex flex-col">
                            <label for="email" class="text-white mb-1">Email</label>
                            <input type="email" id="email" placeholder="you@example.com"
                                class="px-4 py-2 bg-slate-900/75 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white" />
                        </div>

                        <div class="flex flex-col">
                            <label for="message" class="text-white mb-1">Message</label>
                            <textarea id="message" rows="4" placeholder="Your message..."
                                class="px-4 py-2 bg-slate-900/75 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white resize-none"></textarea>
                        </div>
                    </div>
                    <button type="submit"
                        class="group inline-flex items-center justify-center gap-2 rounded-full bg-[rgba(56,189,248,0.18)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition hover:bg-[rgba(56,189,248,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(56,189,248,0.6)] w-full">
                        Envoyer via WhatsApp
                        <span class="-translate-y-[1px] transition group-hover:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                        </span>
                    </button>

                </form>
            </div>

            <!-- Social Media -->
            <div class="w-full md:w-1/2 flex-1">
                <!-- <div class="bg-[rgba(17,28,68,0.8)] border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
                    <h3 class="text-2xl font-semibold text-white mb-4">My Social Media</h3>
                    <div class="flex flex-col gap-3">
                        <a href="#"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                            Github
                        </a>
                        <a href="#"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                            Linkedin
                        </a>
                        <a href="#"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                            Youtube
                        </a>
                        <a href="#"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                            Facebook
                        </a>
                    </div>
                </div> -->
                <div class="rounded-3xl border border-slate-300/15 bg-slate-900/60 p-8">
                    <h3 class="text-lg font-semibold text-white uppercase tracking-[0.3em]">
                        Disponibilité actuelle
                    </h3>

                    <p class="mt-3 text-sm text-slate-200/70">
                        Missions freelance, accompagnement data-driven, formations ou keynotes sur la culture data.
                    </p>

                    <div class="mt-6 space-y-4">

                        <!-- Email -->
                        <a href="mailto:ndri.sacha@example.com" target="_blank" class="group flex items-center gap-3 rounded-2xl border border-slate-300/20 
              bg-slate-900/75 px-5 py-4 transition 
              hover:border-sky-400/50 hover:bg-sky-400/10">

                            <span class="flex h-10 w-10 items-center justify-center rounded-full 
                   bg-sky-400/20 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                            </span>

                            <span class="text-sm font-medium text-slate-100/85">Email</span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="ml-auto h-4 w-4 text-sky-300 opacity-0 transition group-hover:opacity-100"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>


                        <!-- WhatsApp -->
                        <a href="https://wa.me/2250700000000" target="_blank" class="group flex items-center gap-3 rounded-2xl border border-slate-300/20 
              bg-slate-900/75 px-5 py-4 transition 
              hover:border-sky-400/50 hover:bg-sky-400/10">

                            <span class="flex h-10 w-10 items-center justify-center rounded-full 
                   bg-sky-400/20 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                </svg>
                            </span>

                            <span class="text-sm font-medium text-slate-100/85">WhatsApp</span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="ml-auto h-4 w-4 text-sky-300 opacity-0 transition group-hover:opacity-100"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>


                        <!-- Linkedin -->
                        <a href="https://www.linkedin.com/in/ndri-niks-sacha" target="_blank" class="group flex items-center gap-3 rounded-2xl border border-slate-300/20 
              bg-slate-900/75 px-5 py-4 transition 
              hover:border-sky-400/50 hover:bg-sky-400/10">

                            <span class="flex h-10 w-10 items-center justify-center rounded-full 
                   bg-sky-400/20 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 
                   2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </span>

                            <span class="text-sm font-medium text-slate-100/85">LinkedIn</span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="ml-auto h-4 w-4 text-sky-300 opacity-0 transition group-hover:opacity-100"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>


                        <!-- GitHub -->
                        <a href="https://github.com/ndri-sacha" target="_blank" class="group flex items-center gap-3 rounded-2xl border border-slate-300/20 
              bg-slate-900/75 px-5 py-4 transition 
              hover:border-sky-400/50 hover:bg-sky-400/10">

                            <span class="flex h-10 w-10 items-center justify-center rounded-full 
                   bg-sky-400/20 text-sky-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5
                   .08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 
                   0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2
                   c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9
                   c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65
                   -.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </span>

                            <span class="text-sm font-medium text-slate-100/85">GitHub</span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="ml-auto h-4 w-4 text-sky-300 opacity-0 transition group-hover:opacity-100"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

        </div>
    </section>



    <footer class="w-full bg-[rgba(15,23,42,0.9)]  text-gray-300 py-6">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <!-- Texte copyright -->
            <p class="text-sm mb-4 md:mb-0">
                © 2025 N'dri Niks Sacha. Tous droits réservés.
            </p>

            <!-- Liens -->
            <div class="flex gap-6 text-sm">
                <a href="#portfolio" class="hover:text-white transition">Portfolio</a>
                <a href="#contact" class="hover:text-white transition">Contact</a>
            </div>
        </div>
    </footer>

</template>
<script setup>
function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

import { ref, onMounted, onUnmounted } from "vue";

const autoplayIntervalTime = ref(4000);
const slides = ref([
    {
        imgSrc:
            "https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-1.webp",
        // imgAlt:
        //     "Vibrant abstract painting with swirling blue and light pink hues on a canvas.",
        title: "Front end developers",
        description:
            "The architects of the digital world, constantly battling against their mortal enemy – browser compatibility.",
        classes: "absolute w-full h-full inset-0 object-cover bg-blue-400",
    },
    {
        imgSrc:
            "https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-2.webp",
        // imgAlt:
        //     "Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.",
        title: "Back end developers",
        description:
            "Because not all superheroes wear capes, some wear headphones and stare at terminal screens",
        classes: "absolute w-full h-full inset-0 object-cover bg-blue-400",
    },
    {
        imgSrc:
            "https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-3.webp",
        // imgAlt:
        //     "Vibrant abstract painting with swirling blue and purple hues on a canvas.",
        title: "Full stack developers",
        description:
            "Where “burnout” is just a fancy term for “Tuesday”.",
        classes: "absolute w-full h-full inset-0 object-cover bg-blue-400",

    },
]);

const currentSlideIndex = ref(1);
const isPaused = ref(false);
let autoplayInterval = null;

// Next slide
function next() {
    currentSlideIndex.value =
        currentSlideIndex.value < slides.value.length
            ? currentSlideIndex.value + 1
            : 1;
}

// Go to slide
function goTo(index) {
    currentSlideIndex.value = index;
    restartAutoplay();
}

// Pause / Play
function togglePause() {
    isPaused.value = !isPaused.value;
    restartAutoplay();
}

// Autoplay
function autoplay() {
    autoplayInterval = setInterval(() => {
        if (!isPaused.value) next();
    }, autoplayIntervalTime.value);
}

// Restart interval
function restartAutoplay() {
    clearInterval(autoplayInterval);
    autoplay();
}

onMounted(() => {
    autoplay();
});

onUnmounted(() => {
    clearInterval(autoplayInterval);
});
</script>