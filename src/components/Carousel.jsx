import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";

export default function Carousel() {
  
  const projects = [
    { name: "QuickStyle" },
    { name: "Hockey-Insight" },
    { name: "Chat Application" },
  ];

  const scrollRef = useRef(null);

  // prevent default scolling
  useEffect(() => {
    const element = scrollRef.current;
    const preventDefault = (e) => e.preventDefault();

    const centerOffset = (element.scrollWidth - element.clientWidth) / 2;
    element.scrollTo({ left: centerOffset, behavior: "auto" });

    element.addEventListener('wheel', preventDefault, { passive: false });
    element.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      element.removeEventListener('wheel', preventDefault);
      element.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      
      const scrollAmount = 624; // Make more adaptive
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 mb-6">
        <button onClick={() => scroll('left')} className="bg-white shadow p-3 rounded-full hover:bg-gray-100">←</button>
        <button onClick={() => scroll('right')} className="bg-white shadow p-3 rounded-full hover:bg-gray-100">→</button>
      </div>
  
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar"
      >
        <div className="min-w-[calc(50%-312px)] shrink-0" />
        {projects.map((project, index) => (
          <div key={index} className="snap-x">
            <ProjectCard project={project} />
          </div>
        ))}
        <div className="min-w-[calc(50%-312px)] shrink-0" />
      </div>

    </div>
    
  )
}
