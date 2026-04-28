import { useEffect, useState } from 'react';
import SkillCard from './SkillCard'
import AboutMeCard from './AboutMeCard';
import { getGradient } from '../util/GradientPicker';
import { tools } from '../data/data';

export default function ProfileCard() {

    const skills = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "Node.js" },
  ];

  const education = [
    { name: "BCIT CST" },
    { name: "BCIT Bachelor of Science" },
  ];

  const [gradient, setGradient] = useState("");
  
  useEffect(() => {
    let g = getGradient();
    setGradient(g);
  },[]);

  return (
    <div className={`w-full h-full p-4 sm:p-6 flex flex-col justify-start sm:justify-center items-center border rounded-lg shadow-xl bg-linear-to-r ${gradient}`}>

      <div className="flex flex-col items-center w-full">
      <h3 className="self-start font-mono text-lg">
        About Me
      </h3>
      <AboutMeCard />
    </div>

      <div className="flex flex-col items-center w-full">
          <h3 className='self-start font-mono text-lg'>My Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 m-4 w-full">
            {tools.map((skill, index) => (
              <div className="w-full sm:w-auto" key={index}>
                <SkillCard skill={skill} />
              </div>
        ))}
      </div>
        </div>
    </div>
  )
}
