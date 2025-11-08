export default function Footer() {
  return (
    <footer className="px-4 py-8 border-t border-gray-200">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-gray-600 mb-2">
          Contact us:{" "}
          <a
            href="mailto:bookswithvansh@gmail.com"
            className="text-[#6C63FF] hover:underline transition-colors duration-200"
          >
            bookswithvansh@gmail.com
          </a>
        </p>
        <p className="text-gray-600">© {new Date().getFullYear()} BooksWithVansh. All rights reserved.</p>
      </div>
    </footer>
  )
}
