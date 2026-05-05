export default function EducationCard({ degree }) {

  return (
    <li className="rounded-xl border border-slate-500 bg-slate-50 px-4 py-3 text-slate-700 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        {degree.icon && (
          <img src={degree.icon} alt="" className="h-8 w-8 shrink-0" />
        )}
        <p className="leading-snug">
          {degree.name}
        </p>
      </div>
    </li>
  )
}
