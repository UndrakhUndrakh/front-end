import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      {/* Navbar */}
      <header className="bg-gray-800 shadow-md p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-indigo-500">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-lg text-gray-300 hover:text-indigo-400 transition-all">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-lg text-gray-300 hover:text-indigo-400 transition-all">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg text-gray-300 hover:text-indigo-400 transition-all">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-900 py-24 mt-20">
        <div className="container mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold mb-6">Welcome to My Portfolio!</h2>
          <p className="text-xl mb-12 text-gray-400">
            Explore different sections of my work by clicking the cards below. Each section provides insights into my various projects.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/API">
              <div className="bg-gray-800 rounded-lg shadow-md p-8 w-64 text-center cursor-pointer hover:bg-indigo-600 transition-all">
                <h2 className="text-2xl font-semibold">Mongolapi</h2>
                <p className="text-sm text-gray-400 mt-2">Dive into the Mongol API world.</p>
              </div>
            </Link>

            <Link href="/CV">
              <div className="bg-gray-800 rounded-lg shadow-md p-8 w-64 text-center cursor-pointer hover:bg-indigo-600 transition-all">
                <h2 className="text-2xl font-semibold">Cv</h2>
                <p className="text-sm text-gray-400 mt-2">Explore my professional journey.</p>
              </div>
            </Link>

            <Link href="/week1">
              <div className="bg-gray-800 rounded-lg shadow-md p-8 w-64 text-center cursor-pointer hover:bg-indigo-600 transition-all">
                <h2 className="text-2xl font-semibold">Resume</h2>
                <p className="text-sm text-gray-400 mt-2">Check out my detailed resume and skills.</p>
              </div>
            </Link>

            <Link href="/hicheel1">
              <div className="bg-gray-800 rounded-lg shadow-md p-8 w-64 text-center cursor-pointer hover:bg-indigo-600 transition-all">
                <h2 className="text-2xl font-semibold">First Task</h2>
                <p className="text-sm text-gray-400 mt-2">Explore the first task of the semester.</p>
              </div>
            </Link>

            <Link href="/timer">
              <div className="bg-gray-800 rounded-lg shadow-md p-8 w-64 text-center cursor-pointer hover:bg-indigo-600 transition-all">
                <h2 className="text-2xl font-semibold">Timer</h2>
                <p className="text-sm text-gray-400 mt-2">Track time for various tasks and activities.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
        <p className="text-lg text-gray-400">&copy; 2025 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
