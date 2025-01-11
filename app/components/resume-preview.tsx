"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, X, ExternalLink } from 'lucide-react'

export default function ResumePreview() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Vijaykumar_Guggari_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open('/resume.pdf', '_blank')
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-primary/90 hover:bg-primary transition-colors"
      >
        <FileText className="w-4 h-4" />
        View Resume
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="container max-w-6xl relative">
            <Card className="w-full h-[85vh] bg-background/95">
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDownload}
                  title="Download Resume"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleOpenInNewTab}
                  title="Open in New Tab"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleClose}
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-0 h-full">
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  className="w-full h-full rounded-lg"
                >
                  <div className="flex items-center justify-center h-full">
                    <p>Unable to display PDF. <a href="/resume.pdf" target="_blank" className="text-primary hover:underline">Click here to open</a></p>
                  </div>
                </object>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
} 