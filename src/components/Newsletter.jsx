import { Mail } from "lucide-react"

export default function Newsletter({ isLoaded }) {
  return (
    <section className="px-4 py-16">
      <div
        className={`container mx-auto max-w-2xl text-center transition-all duration-1000 delay-100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Ahead in Book Marketing</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join 500+ readers getting weekly book marketing tips and free resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-lg focus:border-[#6C63FF] focus:ring-[#6C63FF] focus:outline-none transition-all duration-300"
          />
          <button className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-8 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center whitespace-nowrap">
            <Mail className="w-4 h-4" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
