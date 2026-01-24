import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
function MainSec() {
  return (
    <div className="md:mt-36 mt-10 h-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mx-4 text-(--white) block md:mx-0 md:ml-[100px] md:mr-[200px]">
        Kamalveer Singh -{" "}
        <span className="text-(--purple)">
          Full-Stack & Mobile App Developer
        </span>
      </h1>
      <p className="font-mono text-(--primary) mx-4 text-base sm:text-lg md:text-xl my-10 md:ml-[100px] md:mr-[200px]">
        I develop web and mobile applications using JavaScript, React, Next.js,
        React Native, Expo, Node.js, Express, and cloud services like Firebase
        and AWS.
      </p>

      <a
        href="#contact"
        className="px-5 py-3 border-2 border-(--purple) text-(--white) text-lg sm:text-xl font-semibold ml-4 md:ml-[100px] md:mr-[200px] cursor-pointer hover:border-(--white) hover:bg-(--purple) hover:text-(--primary)"
      >
        Contact me !!
      </a>

      {/* Tech Stack Marquee */}
      <div className="w-full overflow-hidden my-12 md:my-16">
        <div className="flex animate-marquee" style={{ width: "fit-content" }}>
          {/* First set of icons */}
          <div className="flex items-center gap-8 md:gap-12 px-4">
            <SiTailwindcss
              size={48}
              className="text-(--primary) hover:text-cyan-400 transition-all duration-300 cursor-pointer"
            />
            <FaJs
              size={48}
              className="text-(--primary) hover:text-yellow-300 transition-all duration-300 cursor-pointer"
            />
            <FaReact
              size={48}
              className="text-(--primary) hover:text-blue-400 transition-all duration-300 cursor-pointer"
            />
            <SiNextdotjs
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <FaNode
              size={48}
              className="text-(--primary) hover:text-green-500 transition-all duration-300 cursor-pointer"
            />
            <SiExpress
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <SiMongodb
              size={48}
              className="text-(--primary) hover:text-green-600 transition-all duration-300 cursor-pointer"
            />
            <SiReact
              size={48}
              className="text-(--primary) hover:text-blue-400 transition-all duration-300 cursor-pointer"
            />
            <SiExpo
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <SiFirebase
              size={48}
              className="text-(--primary) hover:text-orange-400 transition-all duration-300 cursor-pointer"
            />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 md:gap-12 px-4">
            <SiTailwindcss
              size={48}
              className="text-(--primary) hover:text-cyan-400 transition-all duration-300 cursor-pointer"
            />
            <FaJs
              size={48}
              className="text-(--primary) hover:text-yellow-300 transition-all duration-300 cursor-pointer"
            />
            <FaReact
              size={48}
              className="text-(--primary) hover:text-blue-400 transition-all duration-300 cursor-pointer"
            />
            <SiNextdotjs
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <FaNode
              size={48}
              className="text-(--primary) hover:text-green-500 transition-all duration-300 cursor-pointer"
            />
            <SiExpress
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <SiMongodb
              size={48}
              className="text-(--primary) hover:text-green-600 transition-all duration-300 cursor-pointer"
            />
            <SiReact
              size={48}
              className="text-(--primary) hover:text-blue-400 transition-all duration-300 cursor-pointer"
            />
            <SiExpo
              size={48}
              className="text-(--primary) hover:text-(--white) transition-all duration-300 cursor-pointer"
            />
            <SiFirebase
              size={48}
              className="text-(--primary) hover:text-orange-400 transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSec;
