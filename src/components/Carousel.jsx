import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";
import { projects } from '../data/data.js'

export default function Carousel() {
  

  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const centerOffset = (element.scrollWidth - element.clientWidth) / 2;
    element.scrollTo({ left: centerOffset, behavior: "auto" });
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll('.snap-center'));
    if (items.length === 0) return;

    // Calculate which item is currently in view center
    const scrollLeft = container.scrollLeft;
    const centerX = scrollLeft + container.clientWidth / 2;
    
    let currentIndex = 0;
    let minDistance = Infinity;
    
    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(itemCenter - centerX);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    // Calculate next index
    const nextIndex = direction === 'right' ? 
      Math.min(currentIndex + 1, items.length - 1) : 
      Math.max(currentIndex - 1, 0);
    
    // Scroll to the next item's center
    const nextItem = items[nextIndex];
    const nextItemCenter = nextItem.offsetLeft + nextItem.clientWidth / 2;
    const newScrollLeft = nextItemCenter - container.clientWidth / 2;
    
    // Ensure we stay within bounds
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const constrainedScroll = Math.max(0, Math.min(newScrollLeft, scrollWidth));
    
    container.scrollTo({
      left: constrainedScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col">

      <div
        ref={scrollRef}
        className="flex flex-nowrap mt-4 sm:mt-6 gap-0 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory overscroll-x-contain py-2"
      > 
      
        {projects.map((project, index) => (
          <div key={index} className="snap-center w-full sm:w-auto shrink-0 flex justify-center px-2 sm:px-0">
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
