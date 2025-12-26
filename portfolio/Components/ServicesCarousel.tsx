const services = [
  "DESIGN",
  "BRANDING",
  "DEVELOPMENT",
  "STRATEGY",
  "PRODUCT DESIGN",
  "MOTION GRAPHIC",
  "ART DIRECTION",
];

const ServicesCarousel = () => {
  return (

    <div className="hidden md:block relative overflow-hidden bg-[#07153B] py-6 mt-12 border-y border-[#657A97]/30">
      
      <div className="flex animate-marquee items-center gap-16 w-max will-change-transform">
        {[...services].map((service, index) => (
          <div key={index} className="flex items-center gap-16 shrink-0">
            <span className="text-white text-3xl font-bold tracking-tighter uppercase whitespace-nowrap">
              {service}
            </span>
            <span className="text-[#657A97] text-2xl">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;

