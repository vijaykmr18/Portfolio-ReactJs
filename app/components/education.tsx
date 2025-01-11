import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>B. Tech in Computer Science and Engineering</CardTitle>
                <CardDescription>Presidency University, Bengaluru</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg">CGPA: 7.54</p>
            <p className="text-lg">Expected Graduation: 2025</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Diploma in Mechanical Engineering</CardTitle>
                <CardDescription>CIM Munavalli Polytechnic</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Percentage: 87%</p>
            <p className="text-lg">Completed: 2022</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

