import Carousel from './components/Carousel'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  
  return (
    <>
      <div className='flex flex-col items-center gap-4 min-h-screen overflow-x-hidden'>
        <div className='flex flex-col self-start items-start font-mono'>
          <p>Hello, my name is</p>
          <h1 className="text-3xl font-bold font-mono">
          Reece Melnick
          </h1>
          <p className='font-mono'>I am a software developer from Vancouver, BC</p>
          <button className='bg-red-200 shadow p-3 hover:bg-red-400 outline-2 m-1 rounded font-mono'>Checkout my resume</button>
        </div>

        <div className="flex flex-col items-center w-full">
          <h3 className='self-start font-mono'>Profile</h3>
          <div className="w-full overflow-hidden">
            <ProfileCard/>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <h3 className='self-start font-mono'>My Projects</h3>
          <div className="w-full overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
