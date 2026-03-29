export default function EducationCard({education}) {

  return (
    <div className="w-220 h-20 p-4 mt-4 border rounded-lg shadow flex items-center">
      {education.name}
    </div>
  )
}
