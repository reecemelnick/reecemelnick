export default function SkillCard({skill}) {

  return (
    <div className="w-30 h-10 p-4 border rounded-lg shadow flex items-center">
      {skill.name}
    </div>
  )
}
