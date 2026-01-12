import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed text-l top-40 left-2 sm:left-6 md:left-10 -translate-y-1/2 md:flex hidden mt-5 flex-col items-center space-y-6 text-gray-400">
      {/* Dotted vertical line */}
      <div className="absolute w-[2px] h-64 bg-gradient-to-b from-transparent via-gray-700 to-transparent -z-10"></div>

      {/* GitHub */}
      <a
        href="https://github.com/kamalhara"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-(--purple) transition-all duration-300 hover:translate-x-1.5"
      >
        <FaGithub size={30} className="md:size-[34px]" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kamalveer-sigh-bb7250335/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-(--purple) transition-all duration-300 hover:translate-x-1.5"
      >
        <FaLinkedin size={30} className="md:size-[34px]" />
      </a>

      {/* Email */}
      <a
        href="mailto:kamalhara@gmail.com"
        className="hover:text-(--purple) transition-all duration-300 hover:translate-x-1.5"
      >
        <FaEnvelope size={30} className="md:size-[34px]" />
      </a>
    </div>
  );
}
