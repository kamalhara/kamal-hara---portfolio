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
        Kamal Hara -{" "}
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
      <div className="px-4 flex flex-row items-center my-10 justify-center py-2">
        <div className="border-2 w-full max-w-[320px] sm:max-w-[350px] md:w-[224px] px-3 h-28 flex items-center justify-between gap-2 border-(--border) transition-all overflow-hidden">
          {/* <FaHtml5
            size="100px"
            className="hover:text-red-400 transition-all hover:translate-y-[-4.5px] duration-300"
          /> */}
          {/* <FaCss3
            size="100px"
            className="hover:text-blue-400 transition-all hover:translate-y-[-4.5px] duration-300"
          /> */}
          <SiTailwindcss
            size="100px"
            className="hover:text-green-400 transition-all hover:translate-y-[-4.5px] duration-300"
          />

          <FaJs
            size="100px"
            className="hover:text-yellow-300 transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <FaReact
            size="100px"
            className="hover:text-blue-400 transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiNextdotjs
            size="100px"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <FaNode
            size="100px"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiExpress
            size="100px"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiMongodb
            size="100px"
            className="hover:text-green-600 transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiReact
            size="100px"
            className="hover:text-blue-400 transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiExpo
            size="100px"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          />
          <SiFirebase
            size="100px"
            className="hover:text-orange-400 transition-all hover:translate-y-[-4.5px] duration-300"
          />
          {/* <SiMongoose
            size="100px"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default MainSec;
