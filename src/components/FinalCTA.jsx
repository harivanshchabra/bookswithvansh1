import { Rocket } from "lucide-react"

export default function FinalCTA({ isLoaded }) {
  return (
    <section id="final-cta" className="px-4 py-16 bg-[#6C63FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#5B52E8]"></div>
      <div
        className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 delay-100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Connect with Your Ideal Readers?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create a personalized marketing strategy for your book
        </p>
        <a
          href="https://calendly.com/bookswithvansh/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#6C63FF] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Rocket className="w-5 h-5" />
          Book A Free Call Now
        </a>
      </div>
    </section>
  )
}
