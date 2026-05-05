import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";
import { projects } from '../data/data.js'

export default function Carousel() {
  

  const scrollRef = useRef(null);

  // start at middle. Could change in future.
  useEffect(() => {
    const element = scrollRef.current;
    const centerOffset = (element.scrollWidth - element.clientWidth) / 2;
    element.scrollTo({ left: centerOffset, behavior: "auto" });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Make more adaptive
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col">

      <div
        ref={scrollRef}
        className="flex flex-nowrap mt-4 sm:mt-6 gap-3 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 px-2 sm:px-0"
      > 
      
        {projects.map((project, index) => (
          <div key={index} className="snap-center w-[18rem] max-w-[calc(100vw-2rem)] sm:w-auto shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
  
      </div>

      <div className="flex gap-3 mb-4 sm:mb-6 justify-center mt-5 sm:mt-6">
        <button onClick={() => scroll('left')} className="rounded-full border border-slate-500 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-50">←</button>
        <button onClick={() => scroll('right')} className="rounded-full border border-slate-500 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-50">→</button>
      </div>

    </div>
    
  )
}
