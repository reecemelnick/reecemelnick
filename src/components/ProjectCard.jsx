import { useEffect, useState } from 'react';
import { getGradient } from '../util/GradientPicker';

export default function ProjectCard({project}) {

  const [gradient, setGradient] = useState("");

  useEffect(() => {
    let g = getGradient();
    setGradient(g);
  },[]);

  return (
    <div className={`w-150 h-120 p-4 flex flex-col items-start border rounded-lg shadow-xl bg-linear-to-r ${gradient}`}>
      <h2 className="font-mono font-black">{project.name}</h2>
      <p className="font-mono text-left mt-4 mb-4">{project.description}</p>

      {project.image ? 
        <div className='w-120 h-80 border rounded-lg shadow-xl overflow-hidden mt-2 mb-2'>
          <img className='w-full h-full object-cover object-left' src={project.image} alt="" />
        </div> :
      null}
    
      <div className='flex w-full gap-2 self-end'>
        {project.toolsUsed.map((tool) =>
          <div className='' key={tool.id}> 
            <img className='w-10' src={tool.icon} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}
