/* eslint-disable @next/next/no-img-element */
"use client";

const projects = [
  {
    title: "The Wild Oasis",
    description:
      "A modern hotel management web app built with Next.js 14, Supabase, and Tailwind CSS — designed to manage cabins, bookings, and guest data seamlessly with an elegant, minimal UI.",

    img: "/wild-oasis.png",
    code: "https://github.com/kamalhara/the-wild-oasis",
    live: "https://the-wild-oasis-virid-theta.vercel.app/",
  },
  {
    title: "Nexcent",
    description:
      "A modern, responsive Login Page built using Next.js and Tailwind CSS.This page is part of the Nexcent project, providing a clean and accessible authentication interface.",
    img: "/nexcent.png",
    code: "https://github.com/kamalhara/nexcent",
    live: "https://nexcent-six-chi.vercel.app/",
  },
  {
    title: "World Wise",
    description:
      "A modern, responsive web application built with Vite + React, designed to showcase global destinations, experiences, or creative work with style and performance in mind.",
    img: "/worldwise.png",
    code: "https://github.com/kamalhara/wordwise",
    live: "https://wordwise-kappa.vercel.app/",
  },
  {
    title: "Kamal hara",
    description:
      "Kamal Hara is my personal portfolio website where I showcase my work and share my journey as a Front-end developer.",
    img: "/project.png",
    code: "https://github.com/kamalhara/kamal-hara---portfolio",
    live: "#",
  },
  {
    title: "The Wild Oasis - Owner Dashboard",
    description:
      "The Wild Oasis Dashboard is the internal admin panel of The Wild Oasis ecosystem. It empowers hotel owners and staff to efficiently manage cabins, guests, and bookings, monitor sales performance, and visualize occupancy insights",
    img: "/wild-oasis-staff.png",
    code: "https://github.com/kamalhara/the-wild-oasis-staff",
    live: "the-wild-oasis-staff-mauve.vercel.app",
  },
  {
    title: "Bankist",
    description:
      "A modern, minimalist banking website built with HTML, CSS, and JavaScript. This project showcases smooth scrolling, lazy-loaded images, tabbed components, a feedback slider, sticky navigation, and modal windows.",
    img: "/bankist.png",
    code: "https://github.com/kamalhara/Bankist-app",
    live: "https://kamalhara.github.io/Bankist-app/",
  },
  {
    title: "Use Popcorn",
    description:
      "A simple React app to search, view, and track movies using the OMDb API. Users can search for movies, see details, add them to a watched list, and rate them.",
    img: "/usepopcorn.png",
    code: "https://github.com/kamalhara/usePopcorn",
    live: "https://kamalhara.github.io/usePopcorn",
  },
  {
    title: "Pizza menu",
    description:
      "The Pizza Menu App is a simple ReactJS project that displays a list of pizzas with their details (name, description, and availability).It was built to practice React fundamentals like components, props, and conditional rendering.s",

    img: "/pizza-menu.png",
    code: "https://github.com/kamalhara/Pizza-menu",
    live: "https://kamalhara.github.io/Pizza-menu/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 bg-(--background) text-(--primary) font-(--font-poppins) md:mt-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-16">
        <div className="flex flex-col  gap-4 w-full font-semibold">
          <h2 className="text-3xl font-mono text-white relative inline-block whitespace-nowrap mx-5">
            <span className="text-(--purple)">/</span>my projects
          </h2>
          <p className="md:text-xl text-(--white) text-lg font-mono ml-5">
            {" "}
            List of My projects
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex items-center gap-4 w-full font-semibold">
          <h2 className="text-3xl font-mono text-white relative inline-block whitespace-nowrap">
            <span className="text-(--purple)">#</span>projects
          </h2>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 sm:px-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-(--background) border-3 border-(--border)  p-4 flex flex-col justify-between transition-colors duration-300"
          >
            {/* Project Image */}
            <div className="w-full h-40 sm:h-48 overflow-hidden border-b-3 border-(--border)">
              <img
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover  hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="mt-4 flex-1">
              <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-2">
                {project.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-(--purple) text-(--white) px-3 py-1 sm:px-4 sm:py-3 text-md sm:text-xl transition-colors cursor-pointer hover:border-(--white) hover:bg-(--purple) hover:text-(--white)"
              >
                Code ↗
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-(--border) text-(--white) px-3 py-1 sm:px-4 sm:py-3 text-md sm:text-xl transition-colors cursor-pointer hover:border-(--white) hover:bg-gray-400 hover:text-(--white)"
              >
                Live ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
