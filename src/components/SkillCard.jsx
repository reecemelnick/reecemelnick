export default function SkillCard({skill}) {

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
      {skill.icon ? <img src={skill.icon} alt="" className="h-5 w-5 rounded"/> : null}
      <span>{skill.name}</span>
    </div>
  )
}
