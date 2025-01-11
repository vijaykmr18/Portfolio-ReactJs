import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu } from 'lucide-react'

const skills = {
  "Programming Languages": ["Python", "Java", "Bash/Shell Scripting", "JavaScript", "C", "C++"],
  "Web Development": ["React", "Node.js", "HTML", "CSS", "TypeScript", "Angular"],
  "Automation": ["Terraform", "Ansible"],
  "DevOps": ["Continuous Delivery (CD)", "Continuous Integration (CI)", "Docker", "Kubernetes"],
  "Version Control": ["Git", "GitHub"],
  "Cloud Platforms": ["AWS", "Google Cloud Platform", "Azure"],
  "Databases": ["SQL", "MySQL", "MongoDB", "SQLite"],
  "Others": ["REST APIs", "GraphQL", "Bootstrap", "Tailwind CSS", "Data Structures", "Algorithms", "Pandas", "NumPy", "SciKit-Learn", "Matplotlib", "Seaborn"]
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Technical Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="bg-secondary/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Cpu className="w-8 h-8 text-primary" />
                <CardTitle>{category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

