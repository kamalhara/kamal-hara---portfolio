import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  function handleReactOut() {
    <a href="mailto:kamalhara7@gmail.com" className="hover:underline">
      kamalhara7@gmail.com
    </a>;
  }
  return (
    <section
      id="contact"
      className="w-full  py-20 text-(--primary) bg-(--background) font-(--font-poppins) flex flex-col items-center mx-5"
    >
      <div className="max-w-6xl w-full sm:mb-16 flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-mono text-(--white) relative inline-block whitespace-nowrap font-semibold">
          <span className="text-(--purple)">#</span>contact
        </h2>
        <div className="flex-1 h-[2px] bg-(--purple) mr-10"></div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-12 px-4 md:px-0">
        <div className="flex-1 font-mono">
          <p className="md:text-xl text-lg leading-relaxed mb-6">
            I&apos;m interested in working on ambitious projects with positive
            people and goal-oriented companies.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            However, if you have other request or question, don&apos;t hesitate
            to contact me.
          </p>
          <a
            href="mailto:Kamalhara7@gmail.com?subject=Let's%20Connect&body=Hi%20Kamal,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
            className="border border-(--purple) px-6 py-3 hover:bg-(--purple) hover:text-(--white) transition mb-5 inline-block"
          >
            Reach out →
          </a>
        </div>

        {/* Right side card */}
        <div className="border border-(--border) p-6 md:w-1/3 w-full space-y-4 mt-0 md:mt-0">
          <h3 className="text-xl font-mono mb-4 border-b-2 border-(--border)">
            Message me
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-(--purple)">✉️</span>
            <a href="mailto:kamalhara7@gmail.com" className="hover:underline">
              kamalhara7@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 ">
            <span className="text-(--purple)">📞</span>
            <a href="tel:+917814650362" className="hover:underline">
              +917814650362
            </a>
          </div>

          <div className="flex items-center gap-3 hover:underline">
            <span className="text-(--primary)">
              <FaLinkedin size={20} />
            </span>
            <a
              href="https://www.linkedin.com/in/kamalveer-sigh-bb7250335/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @Kamalveer Singh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
