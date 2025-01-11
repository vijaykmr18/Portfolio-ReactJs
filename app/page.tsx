import Introduction from './components/introduction'
import Education from './components/education'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Certifications from './components/certifications'
import Contact from './components/contact'

export default function Home() {
  return (
    <div className="space-y-16">
      <Introduction />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}

