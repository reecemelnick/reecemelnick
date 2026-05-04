export default function ProjectCard({project}) {

  return (
    <article className="w-[20rem] sm:w-[24rem] md:w-[28rem] h-full overflow-hidden rounded-2xl border border-slate-500 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="border-b border-slate-500 bg-slate-100 px-5 py-4">
        <h2 className="mt-1 text-xl font-semibold text-slate-900">{project.name}</h2>
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-slate-600 text-left">
          {project.description}
        </p>

        {project.image ? (
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-500 bg-slate-50 shadow-sm">
            <img className="h-56 w-full object-cover object-center" src={project.image} alt={project.name} />
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.toolsUsed.map((tool) => (
            <div
              key={tool.id}
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              <img className="h-4 w-4" src={tool.icon} alt="" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
