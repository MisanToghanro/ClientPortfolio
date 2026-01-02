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
     <Link href={`/Projects`}
      className="font-medium text-md shadow-md rounded-md px-4 py-2  hover:scale-105"> 
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

      </span>
      Back to gallery
      </Link>
<GalleryDetail project={project} />;
  </div>
  )

  
};

export default GalleryDetailPage;
