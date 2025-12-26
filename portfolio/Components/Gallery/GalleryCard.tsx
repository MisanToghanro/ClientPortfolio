import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/interfaces";
import { PlayCircle } from "lucide-react";
import React from "react";

interface GalleryCardProps {
  project: ProjectProps;
}

const GalleryCard :React.FC<GalleryCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Media */}
      <div className="relative aspect-4/5 bg-gray-100 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Video indicator */}
        {project.mediaType === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <PlayCircle className="w-12 h-12 text-white opacity-90" />
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-semibold text-[#07153B] group-hover:text-blue-600 transition">
          {project.title}
        </h3>
        <p className="text-xs text-[#657A97]">
          {project.category}
        </p>
      </div>
    </Link>
  );
};

export default GalleryCard;
