import { useEffect, useState } from 'react';
import testImage from '../assets/placeholder.png';

export default function ProjectCard({project}) {

  const colors = [
    "from-yellow-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-cyan-500"
  ];

  const toColors = [
    "to-yellow-500",
    "to-blue-500",
    "to-green-500",
    "to-red-500",
    "to-cyan-500"
  ];

  const [gradient, setGradient] = useState("");

  useEffect(() => {
    let colour1 = Math.floor(Math.random() * colors.length);
    let colour2 = Math.floor(Math.random() * toColors.length);

    while (colour2 === colour1) {
      colour2 = Math.floor(Math.random() * toColors.length);
    }

    console.log(colour1 + " " + colour2);

    setGradient(`${colors[colour1]} ${toColors[colour2]}`);

  },[]);

  return (
    <div className={`w-150 h-120 p-4 flex flex-col items-start border rounded-lg shadow-xl bg-linear-to-r ${gradient}`}>
      <h2 className="font-mono font-black">{project.name}</h2>
      <p className="font-mono text-left mt-4 mb-4">{project.description}</p>

      <div className='w-120 h-50 border rounded-lg shadow-xl overflow-hidden mt-2 mb-2'>
        <img className='w-full h-full object-cover' src={testImage} alt="" />
      </div>

      <div className='flex w-full justify-start gap-2 m-auto'>
        {project.toolsUsed.map((tool) =>
          <div className='' key={tool.id}> 
            {/* <p>{tool.name}</p> */}
            <img className='w-10' src={tool.icon} alt="" />
          </div>
        )}
      </div>
        
    </div>
  )
}
