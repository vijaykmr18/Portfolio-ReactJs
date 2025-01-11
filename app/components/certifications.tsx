import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Award } from 'lucide-react'

const certifications = [
  "Python Masterclass - Micro Degree",
  "Google Cloud Skills Boost: Cloud Computing Essentials",
  "Terraform and Ansible Basics",
  "Machine Learning Algorithms: Supervised & Unsupervised Learning",
  "Power BI for Beginners – Data Visualization Techniques"
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Certifications & Courses</h2>
      <Card className="bg-secondary/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-primary" />
            <CardTitle>Completed Certifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="https://drive.google.com/drive/folders/your-folder-id" className="text-primary hover:underline">
              View Certificates on Google Drive
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

