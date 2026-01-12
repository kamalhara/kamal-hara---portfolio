"use client";
import Link from "next/link";
import { FaBars, FaCode } from "react-icons/fa";
import SocialSidebar from "./SocialSidebar";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <div>
      <SocialSidebar />
      <nav className="text-(--white) fixed top-0 left-0 w-full z-50 bg-(--background) shadow-md flex justify-between px-4 sm:px-8 md:px-20 lg:px-32 py-4 md:py-6">
        <Link
          href={isHome ? "#home" : "/#home"}
          className="font-mono text-l font-semibold sm:text-xl"
        >
          <p className="flex gap-3.5 items-center justify-center">
            <FaCode className="text-(--purple)" />
            KamalHara
          </p>
        </Link>
        <div className="text-lg md:text-xl sm:flex sm:gap-6 hidden text-(--primary) transition-all">
          <Link
            className="hover:border-b-2 hover:border-(--purple) hover:text-(--white) hover:-translate-y-1 cursor-pointer duration-300"
            href={isHome ? "#home" : "/#home"}
          >
            <span className="text-(--purple)">#</span>home
          </Link>{" "}
          <Link
            className="hover:border-b-2 hover:border-(--purple) hover:text-(--white) hover:-translate-y-1 cursor-pointer duration-300"
            href="/projects"
          >
            <span className="text-(--purple)">#</span>work
          </Link>{" "}
          <Link
            className="hover:border-b-2 hover:border-(--purple) hover:text-(--white) hover:-translate-y-1 cursor-pointer duration-300"
            href={isHome ? "#about" : "/#about"}
          >
            <span className="text-(--purple)">#</span>about-me
          </Link>{" "}
          <Link
            className="hover:border-b-2 hover:border-(--purple) hover:text-(--white) hover:-translate-y-1 cursor-pointer duration-300"
            href={isHome ? "#contact" : "/#contact"}
          >
            <span className="text-(--purple)">#</span>contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
