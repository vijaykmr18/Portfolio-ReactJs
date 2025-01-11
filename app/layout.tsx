import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import VideoBackground from './components/video-background'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vijaykumar Guggari - Innovative CS Engineering Student',
  description: 'Portfolio of Vijaykumar Guggari, a Computer Science Engineering student with expertise in full-stack development, cloud computing, and automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoBackground />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}

