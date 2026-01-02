import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import Testimonials from "@/Components/TestimonialCards";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen">
      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <div className="w-full max-w-4xl mx-auto mt-12 text-center space-y-12 mb-12 px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#07153B] ">
          Get in Touch
        </h1>
        <p className="text-[#657A97] text-sm md:text-base leading-relaxed mb-6">
          Have a project in mind or just want to say hello? You can reach out to me via WhatsApp, Instagram, or Email.  
          I’ll get back to you as soon as possible!
        </p>

        {/* Contact Links with Icons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href="https://wa.me/message/QLW72SGNP75VL1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-[#07153B] text-white font-medium hover:bg-[#657A97] hover:scale-105 transition transform"
          >
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/wizzys_graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-[#07153B] text-white font-medium hover:bg-[#657A97] hover:scale-105 transition transform"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" /> Instagram
          </a>
          <a
            href="mailto:wgraphics001@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-[#07153B] text-white font-medium hover:bg-[#657A97] hover:scale-105 transition transform"
          >
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;



