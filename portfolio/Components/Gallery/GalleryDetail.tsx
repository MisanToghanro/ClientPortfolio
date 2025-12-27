
import { ProjectProps } from "@/interfaces";

import Image from "next/image";
import React from "react";

interface ProjectDetailProps{
    project:ProjectProps
}
const GalleryDetail: React.FC<ProjectDetailProps> = ({project}) => {

    return(
          <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {project.title}
      </h1>

      <p className="text-gray-500 mb-8">{project.category}</p>

      {/* Media */}
      <div className="mb-12">
        {Array.isArray(project.media) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.media.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg"
              />
            ))}
          </div>
        ) : project.mediaType === "video" ? (
          <video
            src={project.media}
            controls
            className="rounded-lg w-full"
          />
        ) : (
          <Image
            src={project.media}
            alt={project.title}
            width={900}
            height={600}
            className="rounded-lg"
          />
        )}
      </div>

      {/* Challenge */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The Challenge</h2>
        <p className="text-gray-700">{project.challenge}</p>
      </section>

      {/* Solution */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The Solution</h2>
        <p className="text-gray-700">{project.solution}</p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Services Provided</h2>
        <ul className="flex flex-wrap gap-3">
          {project.services.map((service, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>
    </div>
    )
}

export default GalleryDetail;
