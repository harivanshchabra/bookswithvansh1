import { Star } from "lucide-react"

export default function Testimonials({ isLoaded }) {
  const testimonials = [
    {
      name: "Ketaki Pawar",
      book: "Author - The Emotional Reset",
      image: "/icons/testimonial-1.jpg",
      review:
        '"His review was incredibly thoughtful and insightful. He has a special talent for diving deep into the material and capturing the core essence of a book. Thank you for handling my work with such professionalism and care."',
      delay: 300,
    },
    {
      name: "Anonymous",
      book: "Fantasy Author",
      image: "/icons/testimonial-2.jpg",
      review:
        '"From launch strategy to ongoing promotion, they\'ve been incredible partners in building my author platform."',
      delay: 500,
    },
    {
      name: "Maria",
      book: "Author - Unbreakable Determination",
      image: "/icons/testimonial-3.jpg",
      review:
        "\"You did so good on the review I'm so happy with the outcome of your review, I'd love to work with you in the future with other books I will write. Thank You\"",
      delay: 700,
    },
  ]

  return (
    <section id="testimonials" className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Authors Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 rounded-lg ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <div className="p-8">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 mx-auto mb-4 rounded-full object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6C63FF] text-[#6C63FF] animate-in fade-in-0 duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">{testimonial.review}</p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.book}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
