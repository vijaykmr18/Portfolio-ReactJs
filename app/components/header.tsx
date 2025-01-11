"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            VG
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm md:hidden">
              <div className="p-4 space-y-4">
                <NavLinks />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="#introduction" className="hover:text-primary">
        Home
      </Link>
      <Link href="#education" className="hover:text-primary">
        Education
      </Link>
      <Link href="#experience" className="hover:text-primary">
        Experience
      </Link>
      <Link href="#projects" className="hover:text-primary">
        Projects
      </Link>
      <Link href="#skills" className="hover:text-primary">
        Skills
      </Link>
      <Link href="#certifications" className="hover:text-primary">
        Certifications
      </Link>
      <Link href="#contact" className="hover:text-primary">
        Contact
      </Link>
    </>
  );
}
