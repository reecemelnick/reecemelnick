import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import githubLogo from '../assets/githubLogo.png';
import awardLogo from '../assets/awardLogo.png';
import liveLogo from '../assets/liveLogo.png';

export default function ProjectCard({project}) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const openImage = () => {
    if (project.image) {
      setIsImageExpanded(true);
    }
  };

  const closeImage = () => {
    setIsImageExpanded(false);
  };

  useEffect(() => {
    if (!isImageExpanded) return;

    const onKey = (e) => {
      if (e.key === 'Escape') closeImage();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isImageExpanded]);

  return (
    <article className="w-full sm:max-w-none sm:w-[24rem] md:w-[28rem] h-auto sm:h-[34rem] md:h-[36rem] overflow-hidden rounded-2xl border border-slate-500 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col">
      <div className="border-b border-slate-500 bg-slate-100 px-4 py-4 sm:px-5">
        <h2 className="mt-1 text-xl font-semibold text-slate-900">{project.name}</h2>
      </div>

      <div className="p-3 sm:p-5 flex-1 min-h-0 flex flex-col">
        <p className="text-sm leading-6 text-slate-600 text-left">
          {project.description}
        </p>

        <div className="mt-auto pt-4 space-y-4">
          {project.image ? (
            <button
              type="button"
              onClick={openImage}
              className="block w-full overflow-hidden rounded-xl border border-slate-500 bg-slate-50 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              title="Expand image"
            >
              <img className="h-40 sm:h-48 w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]" src={project.image} alt={project.name} />
            </button>
          ) : null}

          <div className="flex max-h-12 flex-wrap content-start gap-2 overflow-y-auto pr-1 sm:max-h-14">
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
      </div>

      <div className="flex min-h-14 items-center gap-3 border-t border-slate-500 bg-slate-50 px-4 py-3 sm:px-5">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            title="View on GitHub"
          >
            <img src={githubLogo} alt="GitHub" className="h-5 w-5" />
            <span className="text-xs font-medium">Code</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-md opacity-0 pointer-events-none select-none">
            <img src={githubLogo} alt="" className="h-5 w-5" />
            <span className="text-xs font-medium">Code</span>
          </span>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            title="View live project"
          >
            <img src={liveLogo} alt="Live" className="h-5 w-5" />
            <span>Live</span>
          </a>
        )}
        {project.award && (
          <a
            href={project.award}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            title="View award"
          >
            <img src={awardLogo} alt="Award" className="h-5 w-5" />
            <span>Award</span>
          </a>
        )}
      </div>

      {isImageExpanded && project.image ? createPortal(
        <div
          role="presentation"
          onClick={closeImage}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-6"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} preview`}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-white"
            >
              Close
            </button>
            <img
              src={project.image}
              alt={project.name}
              className="max-h-[90vh] w-full object-contain bg-slate-100"
            />
          </div>
        </div>, document.body) : null}
    </article>
  )
}
