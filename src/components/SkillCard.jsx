export default function SkillCard({skill}) {

  return (
    <div className="w-full h-10 px-4 border rounded-lg shadow flex items-center bg-white">
      {skill.name}
      {/* <img className="h-full max-h-6" src={skill.icon} alt="" /> */}
    </div>
  )
}
