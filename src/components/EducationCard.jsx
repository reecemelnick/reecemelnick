export default function EducationCard({ degree }) {

  return (
    <li className="rounded-xl border border-slate-500 bg-slate-50 px-4 py-3 text-slate-700 shadow-sm transition-shadow hover:shadow-md">
      <p className="leading-snug">
        {degree.name}
      </p>
    </li>
  )
}
