

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp,FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07153B] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col justify-between">
        {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/assets/Logo.jpeg"
    alt="portfolio logo"
    width={90}
    height={30}
    priority
    className="
      rounded-sm object-contain
      transition-all duration-300 ease-out
      hover:scale-105 hover:opacity-90
    "
  />
</Link>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl mt-4 text-center justify-center">

          <a
            href="https://wa.me/message/QLW72SGNP75VL1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#657A97] transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/wizzys_graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#657A97] transition"
          >
            <FaInstagram />
          </a>
                        <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#657A97] transition"
                      >
                        <FaEnvelope />
                      </a>
        </div>

        </div>



        {/* Navigation Links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          <Link href="/" className="hover:text-[#657A97] transition">Home</Link>
          <Link href="/About" className="hover:text-[#657A97] transition">About Me</Link>
          <Link href="/Projects" className="hover:text-[#657A97] transition">My Designs</Link>
          <Link href="/Contact" className="hover:text-[#657A97] transition">Contact</Link>
        </nav>
         
         


        {/* Social / Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Wizzy's Graphics. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
