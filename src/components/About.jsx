export default function About({ isLoaded }) {
  const features = [
    {
      title: "Industry Expertise",
      image: "/icons/industry-expertise.jpg",
      description:
        "With years of experience in the publishing industry, we have deep knowledge of market trends, reader behavior, and what makes books successful. We stay updated on the latest marketing strategies and platform algorithms to ensure your book gets maximum visibility.",
      delay: 300,
    },
    {
      title: "Personalized Approach",
      image: "/icons/personalized-approach.jpg",
      description:
        "Every campaign is uniquely tailored to your book's genre, target audience, and your specific goals as an author. We take time to understand your vision and create customized strategies that resonate with your ideal readers and maximize your book's potential.",
      delay: 500,
    },
    {
      title: "Proven Results",
      image: "/icons/proven-results.jpg",
      description:
        "Our strategies have helped hundreds of authors increase their visibility, build engaged reader communities, and achieve their publishing goals. We track metrics and continuously optimize campaigns to deliver measurable results and real impact for your book.",
      delay: 700,
    },
  ]

  return (
    <section id="about" className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About BooksWithVansh</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            We're a dedicated team of book marketing specialists who understand that every author's journey is unique.
            Our mission is to create personalized marketing strategies that connect your book with its ideal audience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
