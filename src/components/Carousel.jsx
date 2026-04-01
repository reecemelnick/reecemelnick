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
        className="flex flex-nowrap mt-6 gap-6 overflow-x-auto no-scrollbar snap-x"
      > 
      
        {projects.map((project, index) => (
          <div key={index} className="snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
  
      </div>

      <div className="flex gap-4 mb-6 justify-center mt-6">
        <button onClick={() => scroll('left')} className="bg-white rounded-md outline-2 shadow p-3 hover:bg-gray-100">←</button>
        <button onClick={() => scroll('right')} className="bg-white rounded-md outline-2 shadow p-3 hover:bg-gray-100">→</button>
      </div>

    </div>
    
  )
}
