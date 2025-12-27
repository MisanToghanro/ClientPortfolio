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
      className="font-medium text-md shadow-md shadow-[#9bf0e6] rounded-md px-4 py-2 m-4 hover:scale-105"> 
      go back</Link>
<GalleryDetail project={project} />;
  </div>
  )

  
};

export default GalleryDetailPage;
