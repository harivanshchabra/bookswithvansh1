import { Rocket } from "lucide-react"

export default function Hero({ isLoaded }) {
  return (
    <section id="hero" className="px-4 py-16 md:py-24 lg:py-32 pt-24 md:pt-32">
      <div className="container mx-auto max-w-4xl text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Helping Authors Get the Right Readers
        </h1>
        <p
          className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We connect your book with readers who will love it through strategic, personalized marketing campaigns
        </p>
        <a
          href="https://calendly.com/bookswithvansh/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Rocket className="w-5 h-5" />
          Book A Free Call Now
        </a>
      </div>
    </section>
  )
}
