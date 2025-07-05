import './App.css'
import Project from './components/Project/Project'
import Home from './components/Home/Homesection'
import Skill from './components/Skill/skill'
import ContactSection from './components/ContactSection/ContactSection'

function App() {

  return (
    <div className=" dark:text-white min-h-screen mb-12">
      <Home />
      <Skill />
      <Project />
      <ContactSection />
    </div>
  )
}

export default App
