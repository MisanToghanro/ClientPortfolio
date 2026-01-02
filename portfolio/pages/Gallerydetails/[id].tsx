import { useRouter } from "next/router";
import projects from "../../data/projects";
import GalleryDetail from "@/Components/Gallery/GalleryDetail";
import Link from "next/link";

const GalleryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <p className="text-center mt-20">Project not found</p>;
  }

  return (
  <div className="min-h-screen">
<Link 
  href="/Projects"
  className="inline-flex items-center gap-2 px-4 py-2 mt-8 ml-4 md:ml-8 rounded-md font-medium text-[#07153B] 
             bg-white border border-[#657A97]/20 shadow-sm transition-all duration-300 
             hover:shadow-md hover:bg-[#07153B] hover:text-white group"
> 
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-5 h-5 transition-transform group-hover:-translate-x-1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>

  <span className="text-sm md:text-base">Back to Gallery</span>
</Link>
<GalleryDetail project={project} />;
  </div>
  )

  
};

export default GalleryDetailPage;
