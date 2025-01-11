import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code2 } from 'lucide-react'

const projects = [
  {
    title: "Ambulance Hiring System",
    description: "Built a high-uptime service system using Java, PHP, and MySQL, improving query speed by 35%."
  },
  {
    title: "Restaurant Website",
    description: "Developed a responsive site with HTML, CSS, and Bootstrap, reducing load time by 25%."
  },
  {
    title: "Attendance Tracker",
    description: "Designed a Python app with SQLite, reducing database processing time by 40%."
  },
  {
    title: "Stock Portfolio Tracker",
    description: "Created a real-time stock portfolio tracker with APIs and interactive dashboards."
  },
  {
    title: "Chatbot",
    description: "Built an AI-powered chatbot using Python and NLP, improving user engagement by 30%."
  },
  {
    title: "Hangman Game",
    description: "Developed an interactive Hangman game using JavaScript and HTML, enhancing algorithm and UI/UX design skills."
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-secondary/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Code2 className="w-8 h-8 text-primary" />
                <CardTitle>{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

