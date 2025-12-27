import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import ServicesCarousel from "@/Components/ServicesCarousel";
const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center p-8 bg-white">
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center  mx-auto gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 space-y-6">
          <p className="text-[#657A97] font-medium">Hello there,</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#07153B]">
            Welcome to Wizzy's Graphics
          </h1>
          <p className="text-[#07153B] text-lg md:text-xl">
            I’m a graphic designer and visual identity specialist creating meaningful brand experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href="/About">
              <button className="bg-[#07153B] text-white px-6 py-3 rounded-md hover:bg-[#657A97] transition cursor-pointer">
                More about me
              </button>
            </Link>
            <Link href="/Contact">
              <button className="border border-[#07153B] text-[#07153B] px-6 py-3 rounded-md hover:bg-[#657A97] hover:text-white transition cursor-pointer">
                Got a project? Let’s talk.
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl text-[#07153B]">
            <a
              href="https://wa.me/message/QLW72SGNP75VL1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#657A97] transition "
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
              href="mailto:wgraphics001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#657A97] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Column: Profile / Hero Image */}
               {/* Image */}
      
               <div className="flex-1 relative">
                 <div className="absolute -top-4 -left-4 w-full h-full bg-blue-900 rounded-xl opacity-10"></div>
                 
                 <Image
                   src="/assets/ProfilePic3.jpeg"
                   alt="Wizzy's Profile"
                   width={420}
                   height={420}
                   priority
                   className="relative rounded-xl object-cover shadow-xl"
                 />
               </div>
           
             
      </div>

      {/* Services / Skills Section */}
       <ServicesCarousel/>

    </main>
  );
};

export default Home;

