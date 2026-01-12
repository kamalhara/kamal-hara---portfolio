import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "World Wise",
    description:
      "A responsive web application for showcasing global destinations. Features include interactive maps, user authentication, content management, and API integration.",
    technologies: "Vite · React · APIs · Firebase Auth",
    img: "/worldwise.png",
    code: "https://github.com/kamalhara/wordwise",
    live: "https://wordwise-kappa.vercel.app/",
  },
  {
    title: "Natours Backend API",
    description:
      "REST API for a tour booking system. Includes user authentication, tour management, payment processing, and database integration with MySQL and MongoDB.",
    technologies: "Node.js · Express · REST APIs · MySQL · MongoDB · JWT",
    img: null,
    code: "https://github.com/kamalhara/natours-backend",
  },

  {
    title: "Dine time app",
    description:
      "A cross-platform mobile app for tracking personal expenses. Features include category management, data visualization, cloud sync with Firebase, and real-time updates.",
    technologies: "React Native · Expo · Firebase · NativeWind",
    img: "/app.png",
    code: "https://github.com/kamalhara/dine-time",
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
            {project.img && (
              <div
                className={`w-full overflow-hidden border-b-3 border-(--border) ${
                  project.title === "Dine time app"
                    ? "h-64 sm:h-72 flex justify-center items-center bg-black p-2 rounded-lg"
                    : "h-40 sm:h-48"
                }`}
              >
                <div
                  className={
                    project.title === "Dine time app"
                      ? "w-32 h-full bg-gray-800 rounded-md overflow-hidden border-2 border-gray-600"
                      : "w-full h-full"
                  }
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={project.title === "Dine time app" ? 128 : 375}
                    height={project.title === "Dine time app" ? 256 : 667}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className={`${project.img ? "mt-4" : ""} flex-1`}>
              <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                {project.title}
              </h3>
              {project.technologies && (
                <p className="text-(--purple) text-sm sm:text-base md:text-lg mt-1 mb-2">
                  {project.technologies}
                </p>
              )}
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-(--border) text-(--white) px-3 py-1 sm:px-4 sm:py-3 text-md sm:text-xl transition-colors cursor-pointer hover:border-(--white) hover:bg-gray-400 hover:text-(--white)"
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
