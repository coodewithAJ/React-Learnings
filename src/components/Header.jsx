import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black border-b border-gray-800 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Navigation */}
        <nav className="flex items-center gap-5">
          <Link
            to="/stopwatch"
            className="rounded-xl border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
          >
            Stopwatch
          </Link>

          <Link
            to="/timer"
            className="rounded-xl border border-purple-500 px-5 py-2 text-sm font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
          >
            Timer
          </Link>
          <Link
            to="/counter"
            className="rounded-xl border border-purple-500 px-5 py-2 text-sm font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
          >
            Counter
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
