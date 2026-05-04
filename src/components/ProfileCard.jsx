import SkillCard from './SkillCard'
import AboutMeCard from './AboutMeCard';
import EducationCard from './EducationCard';
import { tools } from '../data/data';
import { education } from '../data/data';

export default function ProfileCard() {

  return (
    <section className="w-full mx-auto rounded-2xl border border-slate-500 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900">About Me</h3>
          <AboutMeCard />
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Skills & Education</h3>

          <div className="mb-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Technical Skills</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Education</p>
            <ul className="list-none ml-0 space-y-2">
              {education.map((degree) => (
                <EducationCard degree={degree} key={degree.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
