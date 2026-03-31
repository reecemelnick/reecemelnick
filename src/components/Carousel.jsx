import ProjectCard from "./ProjectCard";
import { useRef } from "react";

export default function Carousel() {
  
  const projects = [
    { name: "QuickStyle" },
    { name: "Hockey-Insight" },
    { name: "Chat Application" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    console.log("click")
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (


    <div className="flex flex-col">
      <button
        onClick={scrollLeft}
        className="bg-white shadow p-2"
      >
        ←
      </button>

      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth px-12"
      >
        {projects.map((project, index) => (
          <div key={index} className="min-w-[320px] shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

       <button
        onClick={scrollRight}
        className="bg-white shadow p-2"
      >
        →
      </button>
    </div>
    
  )
}
