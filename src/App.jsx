"use client"

import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Navigation isLoaded={isLoaded} />
      <Hero isLoaded={isLoaded} />
      <About isLoaded={isLoaded} />
      <Services isLoaded={isLoaded} />
      <Testimonials isLoaded={isLoaded} />
      <Newsletter isLoaded={isLoaded} />
      <FinalCTA isLoaded={isLoaded} />
      <Footer />
    </div>
  )
}
