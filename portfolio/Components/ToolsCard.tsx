const tools = [
  { name: "Canva", logo: "https://assets.emailinspire.com/brands/2zmxtnhatot.jpg" },
  { name: "Affinity Designer", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKoIJ2gf7xmavvA2DbEhRszvTINRH5ou9DQ&s" },
];

const ToolsSection = () => {
  return (
    <div className="max-w-5xl mx-auto mt-15 flex justify-center items-center flex-col ">
      <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">Tools I Use</h3>
      <div className="flex gap-8 justify-center md:justify-start cursor-pointer">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-[#657A97]/30 rounded-lg p-4 hover:shadow-lg transition"
          >
            <img src={tool.logo} alt={tool.name} className="w-20 h-20 object-contain mb-2" />
            <p className="text-[#07153B] font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
      <p className="text-center md:text-left mt-4 text-[#657A97]">
        Expertly leveraging Canva and Affinity Designer to craft clean, impactful, and professional designs.
      </p>
    </div>
  );
};

export default ToolsSection;
