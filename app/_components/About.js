export default function About() {
  return (
    <section
      id="about"
      className="py-20 text-(--primary) bg-(--background) font-(--font-poppins)"
    >
      {/* Section Heading */}
      <div className="max-w-6xl -mx-4 md:mx-auto text-4xl flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-0">
        <div className="flex items-center gap-4 w-full font-semibold">
          <h2 className="text-3xl font-mono text-white relative inline-block whitespace-nowrap mx-5">
            <span className="text-(--purple)">#</span>about-me
          </h2>
          <div className="flex-1 h-[2px] bg-(--purple) mr-5"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
        {/* Left Text Side */}
        <div className="md:w-2/3 w-full font-mono space-y-6 text-center md:text-left">
          <p className="text-xl">Hello, I&apos;m Kamal Hara!</p>

          <p className="text-md md:text-xl leading-relaxed">
            I&apos;m a Front-End Developer located in Punjab, India. I have a
            strong passion for UI creation, effects, animations, and dynamic
            user experiences.
          </p>

          <p className="text-lg leading-relaxed">
            I always keep up with security and best practices and am constantly
            exploring new technologies and creative opportunities to grow.
          </p>
        </div>

        {/* Right Image and Status */}
        <div className="relative md:w-1/3 w-full mt-10 md:mt-0 flex flex-col items-center md:p-3">
          {/* Profile / Decorative Image */}
          <div className="relative flex justify-center">
            <img
              src="/hero.webp"
              alt="Kamal profile illustration"
              className="w-48 h-48 md:w-68 md:h-68 object-contain mx-auto"
            />
          </div>

          {/* Working Status Box */}
          <div className="mt-6 border border-(--border) text-sm py-2 px-4 font-mono flex items-center gap-2">
            <span className="w-3 h-3 bg-(--purple) inline-block"></span>
            <p className="flex gap-3">
              Currentlylearning
              <span className="text-(--purple) font-semibold">Backend dev</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
