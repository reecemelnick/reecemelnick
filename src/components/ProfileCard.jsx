import { useEffect, useState } from 'react';
import SkillCard from './SkillCard'
import EducationCard from './EducationCard'
import { getGradient } from '../util/GradientPicker';

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
    <div className={`w-full h-100 p-4 flex flex-col items-start border rounded-lg shadow-xl bg-linear-to-r ${gradient}`}>
      <div className="flex flex-col items-center w-full">
          <h3 className='self-start font-mono'>My Skills</h3>
          <div className='flex justify-center gap-4 mt-4'>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
            <h3 className='self-start font-mono'>Education</h3>
            <div className='justify-center gap-4 mt-4'>
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        </div>
    </div>
  )
}
