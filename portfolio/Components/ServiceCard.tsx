
const ServiceCard = () => {

    const services = [
  {
    title: "Visual Identity Design",
    description:
      "Building complete brand systems that communicate clarity, consistency, and purpose across all platforms.",
  },
  {
    title: "Logo Design",
    description:
      "Strategic logo design developed through research, ideation, and thoughtful execution.",
  },
  {
    title: "Brand Strategy & Concept Development",
    description:
      "Defining brand direction, positioning, and visual concepts before design execution.",
  },
  {
    title: "Brand Guidelines",
    description:
      "Creating clear brand manuals to ensure consistency in usage across digital and print media.",
  },
  {
    title: "Marketing & Promotional Design",
    description:
      "Designing flyers, posters, banners, and advertising visuals that support brand goals.",
  },
  {
    title: "Social Media Design",
    description:
      "Branded social media graphics and content layouts for consistent online presence.",
  },
  {
    title: "Print Design",
    description:
      "Business cards, brochures, letterheads, and other professional print materials.",
  },
];

    return(
        <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">What i can do?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-[#657A97]/30 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-[#657A97] text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        </div>
    )
}
export default ServiceCard