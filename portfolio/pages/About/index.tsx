import ServiceCard from "@/Components/ServiceCard"
import ToolsSection from "@/Components/ToolsCard"
import Image from "next/image"
import Link from "next/link"

const About = () => {

    return(
        <main className="min-h-screen px-6 py-12 bg-white text-[#07153B]">
         {/* Hero / Intro */}
<div className="max-w-6xl mx-auto mb-16">
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    
    {/* Text */}
    <div className="flex-1 space-y-4 text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-[#07153B]">
        About Me
      </h2>

      <p className="text-lg md:text-xl text-[#657A97] leading-relaxed">
        Wizzy's Graphics is a creative studio led by Matthew Wisdom Efe, a Visual
        Identity Designer based in Warri, Nigeria. We specialize in branding,
        flyers, and logo design, ensuring that every pixel finds its purpose.
        Our goal is to help you design your next big move with clarity and impact.
      </p>
    </div>

    {/* Image */}
    <div className="flex-1 relative">
      <div className="absolute -top-4 -left-4 w-full h-full bg-blue-900 rounded-xl opacity-10"></div>
      
      <Image
        src="/assets/ProfilePic2.jpeg"
        alt="Wizzy's Profile"
        width={420}
        height={420}
        priority
        className="relative rounded-xl object-cover shadow-xl"
      />
    </div>

  </div>
</div>

         <ServiceCard/>
         <ToolsSection/>
         <div className="mx-auto flex justify-center items-center flex-col mt-8 shadow-md p-4">
            <p className="mt-12 text-[#657A97] max-w-3xl">
        Every design is approached with clarity, intention, and attention to detail —
        because strong visuals should speak clearly without saying too much.

       </p>

       <Link href="/Projects" >
       <button className="bg-[#07153B] text-white px-6 py-3 rounded-md hover:bg-[#657A97] transition cursor-pointer mt-4">
        View My Designs
       </button>
       </Link>
         </div>

        </main>
    )
}

export default About