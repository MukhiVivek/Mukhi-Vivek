import './App.css'
import Project from './components/Project/Project'
import Home from './components/Home/Homesection'
import LifeStoryTimeline from './components/LifeStory'

function App() {

  return (
    <div className=" dark:text-white min-h-screen mb-12">
      <Home/>
      <Project />
      <LifeStoryTimeline />
    </div>
  )
}

export default App
