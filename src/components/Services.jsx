export default function Services({ isLoaded }) {
  const services = [
    {
      title: "Book Influencer Campaigns",
      image: "/icons/influencer-campaigns.jpg",
      description:
        "Connect with book bloggers, bookstagrammers, and BookTok creators who align with your genre and audience",
      delay: 300,
    },
    {
      title: "Social Media Promotions",
      image: "/icons/social-media-promotions.jpg",
      description: "Strategic social media campaigns across platforms to build your author brand and engage readers",
      delay: 500,
    },
    {
      title: "Website Development",
      image: "/icons/launch-strategies.jpg",
      description:
        "Professional author websites and landing pages designed to showcase your books and convert readers into fans",
      delay: 700,
    },
    {
      title: "Social Media Management",
      image: "/icons/social-media-management.jpg",
      description:
        "Complete social media management including content creation, scheduling, and community engagement across all platforms",
      delay: 900,
    },
  ]

  return (
    <section id="services" className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 rounded-lg ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="p-8 text-center">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
