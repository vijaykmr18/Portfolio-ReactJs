import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Professional Experience</h2>
      <div className="space-y-8">
        <Card className="bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Web Development Intern</CardTitle>
                <CardDescription>HireXBot | June 2024 – August 2024</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed and optimized responsive web applications using React, Node.js, and JavaScript, reducing load times by 20%.</li>
              <li>Streamlined CI/CD pipelines using Terraform and Ansible automation, reducing deployment errors by 30%.</li>
              <li>Enhanced system reliability and user retention by implementing new features in an Agile environment, boosting engagement by 30%.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Software Developer (Final Year Project)</CardTitle>
                <CardDescription>Presidency University | 2024</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed and implemented a machine learning-based Crop Management System, assisting farmers in Tamil Nadu with precise harvesting decisions to reduce crop loss.</li>
              <li>Automated data analysis and backend tasks using Bash/Shell scripting, improving efficiency and accuracy.</li>
              <li>Collaborated in an Agile team, ensuring timely project delivery and seamless integration of backend and frontend services.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

