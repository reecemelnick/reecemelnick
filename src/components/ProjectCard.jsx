import { useEffect, useState } from 'react';

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
    <div className={`w-150 h-80 p-4 flex flex-col items-start border rounded-lg shadow-xl bg-linear-to-r ${gradient}`}>
      <h2 className="font-mono font-black">{project.name}</h2>
      <p className="font-mono text-left mt-4 mb-4">{project.description}</p>

      <h2>{project.toolsUsed.map((tool, index) => 
        <p key={index}>{tool}</p> // Should be tool card when that is made
      )}</h2>
    </div>
  )
}
