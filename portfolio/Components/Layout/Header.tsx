import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/About" },
    { label: "My Designs", href: "/Projects" },
    { label: "Contact Me", href: "/Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#657A97]/30">
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Logo2.jpeg"
            alt="portfolio logo"
            width={90}
            height={30}
            priority
            className="rounded-sm object-contain transition-all duration-300 ease-out hover:scale-105 hover:opacity-90 bg-white"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="flex gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenu(false)}
              className="relative font-medium text-[#07153B] hover:text-[#657A97] group transition duration-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#657A97] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

      </div>

      {/* Mobile Navigation */}
      <div className="flex flex-col md:hidden">
        {/*  logo + hamburger */}
        <div className="flex justify-between items-center px-5 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Logo2.jpeg"
              alt="portfolio logo"
              width={90}
              height={30}
              className="object-contain rounded-sm transition-all duration-300 ease-out hover:scale-105 hover:opacity-90"
              priority
            />
          </Link>

          {/* Hamburger Button */}
          <button onClick={() => setMenu(!menu)} className="text-[#07153B]">
            <svg
              className={`w-7 h-7 transition-transform duration-300 ${
                menu ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            menu ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <nav className="flex flex-col gap-6 px-6 pb-6 pt-2">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenu(false)}
                className="font-medium text-[#07153B] hover:text-[#657A97] transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
