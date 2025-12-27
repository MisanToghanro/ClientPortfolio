import { useEffect, useState } from "react";
import GalleryCard from "@/Components/Gallery/GalleryCard";
import { ProjectProps } from "@/interfaces";

const Projects = () => {

    const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

    return(
        <main className="min-h-screen p-8">
            {/* Process Section */}
<div className="max-w-7xl mx-auto mt-10">
  <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">
    My Design Process
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        step: "01",
        title: "Discovery",
        text: "Understanding your brand, goals, and audience.",
      },
      {
        step: "02",
        title: "Concept",
        text: "Exploring ideas, visual direction, and strategy.",
      },
      {
        step: "03",
        title: "Design",
        text: "Crafting polished visuals with purpose and clarity.",
      },
      {
        step: "04",
        title: "Delivery",
        text: "Final assets delivered, ready for real-world use.",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="border border-[#657A97]/30 rounded-lg p-6 hover:shadow-md transition"
      >
        <span className="text-[#657A97] font-semibold">{item.step}</span>
        <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
        <p className="text-sm text-[#657A97] mt-2">{item.text}</p>
      </div>
    ))}
  </div>
</div>

<div className="max-w-7xl mx-auto mt-16 px-4">
  {/* Section Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-[#07153B] mb-4 text-center md:text-left">
    Gallery
  </h2>

  {/* Intro Text */}
  <p className="text-[#657A97] text-left mb-10">
    Here’s a selection of my design work — from branding to social media campaigns. Each project showcases my approach to creating visuals with impact and clarity.
  </p>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {projects.map((project) => (
      <GalleryCard
        key={project.id}
        project={project}
      />
    ))}
  </div>
</div>



{/* CTA */}
<div className="mt-24 text-center">
  <h3 className="text-2xl font-semibold mb-4">
    Ready to build a strong visual identity?
  </h3>
  <p className="text-[#657A97] mb-6">
    Let’s collaborate and bring your ideas to life.
  </p>
  <a
    href="/Contact"
    className="inline-block bg-[#07153B] text-white px-8 py-3 rounded-lg hover:bg-[#657A97] transition">
    Contact Me
  </a>
</div>
        </main>
    )
}

export default Projects