"use client"

import { useState } from "react"
import { BookOpen, Menu, X, Heart, Zap, MessageSquare, Rocket } from "lucide-react"

export default function Navigation({ isLoaded }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
      } ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-[#6C63FF]" />
            Books<span className="text-[#6C63FF]">WithVansh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("final-cta")}
              className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("final-cta")}
                className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white w-fit px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
