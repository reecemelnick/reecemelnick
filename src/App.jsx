import { useState } from 'react'
import SkillCard from './components/SkillCard'
import EducationCard from './components/EducationCard'
import Carousel from './components/Carousel'
import './App.css'

function App() {
  
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

  return (
    <>
      <div className='flex flex-col items-center gap-4 min-h-screen overflow-x-hidden'>
        <div className='flex flex-col self-start items-start'>
          <p>Hello, my name is</p>
          <h1 className="text-3xl font-bold">
          Reece Melnick
          </h1>
          <p>I am a software developer from Vancouver, BC</p>
          <button className='bg-red-200 rounded'>Checkout my resume</button>
        </div>
        <div className="flex flex-col items-center w-full">
          <h3 className='self-start'>--My Projects--</h3>
          <div className="w-full overflow-hidden">
            <Carousel />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <h3 className='self-start'>--My Skills--</h3>
          <div className='flex justify-center gap-4 mt-4'>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
            <h3 className='self-start'>--Education--</h3>
            <div className='justify-center gap-4 mt-4'>
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
