import Carousel from './components/Carousel'
import ProfileCard from './components/ProfileCard'
import './App.css'
import resume_reece_melnick from './assets/resume_reece_melnick.pdf'

function App() {
  
  return (
    <>
      <div className='min-h-screen overflow-x-hidden px-2 py-6 text-slate-900 sm:px-6 sm:py-10 lg:px-8'>
        <div className='mx-auto flex w-full max-w-6xl flex-col gap-10 sm:gap-16'>
          <header className='max-w-3xl text-left'>
            <p className='text-slate-600'>Hello, my name is</p>
            <h1 className="mt-1 text-3xl font-semibold font-mono tracking-tight text-slate-900 sm:text-5xl">
              Reece Melnick
            </h1>
            <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>
              I am a software developer from Vancouver, BC.
            </p>
            <a
              href={resume_reece_melnick}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-6 inline-flex items-center justify-center rounded-full border border-slate-400 bg-white px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-200 sm:w-auto'
            >
              Checkout my resume
            </a>
          </header>

          <section className="flex flex-col gap-4 w-full">
            <h3 className='text-lg font-semibold uppercase tracking-[0.2em] pb-4 font-mono text-orange-500'>Profile</h3>
            <div className="w-full overflow-hidden">
              <ProfileCard/>
            </div>
          </section>

          <section className="flex flex-col gap-4 w-full">
            <h3 className='text-lg font-semibold uppercase tracking-[0.2em] font-mono text-orange-500'>My Projects</h3>
            <div className="w-full overflow-hidden">
              <Carousel />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
