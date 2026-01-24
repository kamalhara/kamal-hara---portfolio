"use client";
import Link from "next/link";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import SocialSidebar from "./SocialSidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: isHome ? "#home" : "/#home", label: "home" },
    { href: "/projects", label: "work" },
    { href: isHome ? "#about" : "/#about", label: "about-me" },
    { href: isHome ? "#contact" : "/#contact", label: "contact" },
  ];

  return (
    <div>
      <SocialSidebar />
      <nav className="text-(--white) fixed top-0 left-0 w-full z-50 bg-(--background) shadow-md flex justify-between items-center px-4 sm:px-8 md:px-20 lg:px-32 py-4 md:py-6">
        <Link
          href={isHome ? "#home" : "/#home"}
          className="font-mono text-l font-semibold sm:text-xl"
        >
          <p className="flex gap-3.5 items-center justify-center">
            <FaCode className="text-(--purple)" />
            Kamalveer Singh
          </p>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="text-lg md:text-xl sm:flex sm:gap-6 hidden text-(--primary) transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="hover:border-b-2 hover:border-(--purple) hover:text-(--white) hover:-translate-y-1 cursor-pointer duration-300"
              href={link.href}
            >
              <span className="text-(--purple)">#</span>{link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-(--white) text-2xl p-2 hover:text-(--purple) transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden menu-backdrop ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-(--background) z-50 sm:hidden mobile-menu ${isMenuOpen ? "open" : ""} shadow-2xl`}
      >
        <div className="pt-20 px-6">
          <div className="flex flex-col gap-6 text-lg font-mono">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="text-(--primary) hover:text-(--white) hover:translate-x-2 transition-all duration-300 py-2 border-b border-(--border)"
                href={link.href}
                onClick={closeMenu}
              >
                <span className="text-(--purple)">#</span>{link.label}
              </Link>
            ))}
          </div>
          
          {/* Social links in mobile menu */}
          <div className="mt-10 pt-6 border-t border-(--border)">
            <p className="text-(--primary) text-sm mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kamalhara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--primary) hover:text-(--purple) transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kamalveer-sigh-bb7250335/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--primary) hover:text-(--purple) transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
