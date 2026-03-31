export default function ProjectCard({project}) {

  return (
    <div className="w-150 h-80 p-4 snap-center border rounded-lg shadow">
      {project.name}
    </div>
  )
}
