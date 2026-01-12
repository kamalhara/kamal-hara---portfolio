import { FaCode } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className=" bg-(--backgorund) py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl w-full sm:mb-16 flex items-center gap-4">
        <h2 className="text-3xl font-mono text-(--white) relative inline-block whitespace-nowrap font-semibold">
          <span className="text-(--purple)">#</span>skills
        </h2>
        <div className="flex-1 h-[2px] bg-(--purple)"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-row gap-20 items-center justify-between ">
        {/* Left — decorative group */}
        <div className="relative hidden w-full lg:w-1/2 h-[420px] sm:flex justify-center items-center gap-10 left-[-100px]">
          {/* Gear icon */}
          <div className="text-(--purple) text-[140px] opacity-90 z-10 m-10 hidden sm:block">
            <FaCode />
          </div>

          {/* Top-left dotted grid */}
          <div className="absolute top-8 left-10 grid grid-cols-4 gap-[8px] opacity-50">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-[5px] h-[5px] bg-(--purple) rounded-full hidden sm:block"
              ></div>
            ))}
          </div>

          {/* Center dotted grid */}
          <div className="absolute top-[160px] left-[150px] grid grid-cols-4 gap-[8px] opacity-50">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-[5px] h-[5px] bg-(--purple) rounded-full hidden sm:block"
              ></div>
            ))}
          </div>

          {/* Two outlined squares */}
          <div className="absolute border hidden sm:block border-gray-600 w-[90px] h-[90px] top-[110px] right-[140px]"></div>
          <div className="absolute border hidden sm:block border-gray-600 w-[70px] h-[70px] bottom-[40px] right-[180px]"></div>
        </div>

        {/* Right — skill boxes */}
        <div className="max-w-xl grid sm:grid-cols-2 mt-10 grid-cols-2 gap-6 text-(--white) font-mono items-center">
          <div className="border border-(--border) p-4  sm:w-60">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Languages
            </h3>
            <p className="text-(--primary) text-sm sm:text-xl leading-relaxed">
              JavaScript
              <br />
              HTML
              <br />
              CSS
              <br />
              Tailwind CSS
              <br />
            </p>
          </div>

          <div className="border border-(--border) p-4 sm:w-70 m-5 ">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Frontend
            </h3>
            <p className="text-(--primary) text-sm leading-relaxed sm:text-xl ">
              React.js
              <br />
              Next.js
              <br />
              Redux
              <br />
              React-Hook-Form
              <br />
            </p>
          </div>

          <div className="border border-(--border) p-4 ">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Mobile
            </h3>
            <p className="text-(--primary) text-sm leading-relaxed sm:text-xl ">
              React Native
              <br />
              Expo
              <br />
              Android Studio
              <br />
              XCode
              <br />
              Firebase
              <br />
              Supabase
              <br />
              FCM
              <br />
            </p>
          </div>

          <div className="border border-(--border) p-4 ">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Backend
            </h3>
            <p className="text-(--primary) text-sm leading-relaxed sm:text-xl ">
              Node.js
              <br />
              Express.js
              <br />
              REST APIs
              <br />
              Socket.io
              <br />
              Authentication
              <br />
              MySQL
              <br />
              MongoDB
              <br />
            </p>
          </div>

          <div className="border border-(--border) p-4 ">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Cloud & Tools
            </h3>
            <p className="text-(--primary) text-sm leading-relaxed sm:text-xl ">
              AWS
              <br />
              ESLint
              <br />
              Husky
              <br />
              Jest
              <br />
              Git
              <br />
              VSCode
              <br />
            </p>
          </div>

          <div className="border border-(--border) p-4  sm:col-span-2 sm:60">
            <h3 className="sm:text-xl  text-(--purple) mb-3 font-semibold border-b-2 border-(--border)">
              Others
            </h3>
            <p className="text-(--primary) text-sm leading-relaxed sm:text-xl ">
              API Development
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
