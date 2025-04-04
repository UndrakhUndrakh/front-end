import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-300 font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md p-6 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-indigo-400 tracking-wide">
            Portfolio
          </h1>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-300 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-24 mt-20">
        <div className="container mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold mb-4 text-indigo-200 tracking-tight">
            Explore My Work
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Dive into various projects and experiences showcased below. Each
            section offers a unique glimpse into my skills and passions.
          </p>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link
              href="/API"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                MongolAPI
              </h3>
              <p className="text-sm text-gray-400">
                Discover the power of Mongol data.
              </p>
            </Link>

            <Link
              href="/CV"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">CV</h3>
              <p className="text-sm text-gray-400">
                My professional journey and skills.
              </p>
            </Link>

            <Link
              href="/weather"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                Weather App
              </h3>
              <p className="text-sm text-gray-400">
                Real-time weather information and forecasts.
              </p>
            </Link>

            <Link
              href="/hicheel1"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                First Task
              </h3>
              <p className="text-sm text-gray-400">
                My initial project and learning experience.
              </p>
            </Link>

            <Link
              href="/timer"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                Timer
              </h3>
              <p className="text-sm text-gray-400">
                Time management and tracking tools.
              </p>
            </Link>

            <Link
              href="/class"
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                Class project
              </h3>
              <p className="text-sm text-gray-400">
                Class Project using Next.js.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}