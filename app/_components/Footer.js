import { FaCode, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="mt-16 border-t-2 md:h-50 h-40 border-(--border) pt-6 flex flex-col  md:flex-row justify-between mx-5 text-sm md:mx-72">
      <div className="md:flex md:flex-col gap-2 md:text-xl font-mono">
        <div className="flex gap-2">
          <p className="flex gap-3.5 items-center justify-center font-semibold text-(--white) ">
            <FaCode className="text-(--purple)" />
            Kamalveer Singh
          </p>

          <a href="mailto:kamalhara@gmail.com">
            <span className="text-(--primary)">kamalhara7@gmail.com</span>
          </a>
        </div>
        <p className="text-(--white)  md:text-xl ml-2">Fullstack developer</p>
      </div>

      <div className=" gap-4 mt-3 mr-20 mb-10 ">
        <h2 className="md:mt-0 my-3 text-xl md:text-2xl font-semibold text-(--white) ">
          Media
        </h2>
        <div className="flex flex-row gap-2 md:gap-3 text-lg md:text-3xl">
          <a
            href="https://github.com/kamalhara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kamalveer-sigh-bb7250335/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/hara_kamal56547"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.instagram.com/kamal__hara/#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--white) transition-all hover:translate-y-[-4.5px] duration-300"
          >
            <FaInstagram />
          </a>
        </div>{" "}
      </div>
    </footer>
  );
}

export default Footer;
