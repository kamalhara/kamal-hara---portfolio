import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "The Wild Oasis - Owner Dashboard",
    description:
      "The Wild Oasis Dashboard is the internal admin panel of The Wild Oasis ecosystem. It empowers hotel owners and staff to efficiently manage cabins, guests, and bookings, monitor sales performance, and visualize occupancy insights",
    img: "/wild-oasis-staff.png",
    code: "https://github.com/kamalhara/the-wild-oasis-staff",
    live: "the-wild-oasis-staff-mauve.vercel.app",
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
    title: "Nexcent",
    description:
      "A modern, responsive Login Page built using Next.js and Tailwind CSS.This page is part of the Nexcent project, providing a clean and accessible authentication interface.",
    img: "/nexcent.png",
    code: "https://github.com/kamalhara/nexcent",
    live: "https://nexcent-six-chi.vercel.app/",
  },
];

function ProjectCard() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-(--background) py-24 px-6 w-full"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-4xl flex  md:flex-row justify-between items-center mb-12 px-4 md:px-0">
        <div className="flex items-center gap-4 w-full font-semibold">
          <h2 className="text-3xl font-mono text-white relative inline-block whitespace-nowrap">
            <span className="text-(--purple)">#</span>projects
          </h2>
          <div className="flex-1 h-[2px] bg-(--purple)"></div>
        </div>
        <Link
          href="/projects"
          className="text-[20px] text-gray-300 hover:text-(--purple) hover:border-b hover:border-(--purple) transition-colors ml-5"
        >
          View all ⟶
        </Link>
      </div>

      {/* Project Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:w-7xl font-mono px-2 sm:px-0">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-(--background) border-3 border-(--border)  p-4 flex flex-col justify-between transition-colors duration-300"
          >
            {/* Project Image */}
            <div className="w-full h-40 sm:h-48 overflow-hidden border-b-3 border-(--border)">
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full  hover:scale-105 transition-transform duration-500"
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

export default ProjectCard;
