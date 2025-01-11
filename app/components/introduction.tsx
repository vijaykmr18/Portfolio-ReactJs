"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ResumePreview from "./resume-preview"
import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import { motion } from "framer-motion"

export default function Introduction() {
  const handleGithubClick = () => window.open('https://github.com/vijaykmr18', '_blank')
  const handleLinkedinClick = () => window.open('https://www.linkedin.com/in/vijay-guggari', '_blank')
  const handleEmailClick = () => window.location.href = 'mailto:guggarivijay016@gmail.com'

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-12 max-w-4xl px-4"
      >
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
              Vijaykumar
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
              Guggari
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl text-muted-foreground font-light"
          >
            Computer Science Engineering Student
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <ResumePreview />
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
            onClick={handleGithubClick}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
            onClick={handleLinkedinClick}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
            onClick={handleEmailClick}
          >
            <Mail className="w-4 h-4" />
            Email
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pt-8"
        >
          <Card className="bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors">
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground">
                Passionate about building innovative solutions and exploring new technologies.
                Skilled in full-stack development, cloud computing, and automation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

