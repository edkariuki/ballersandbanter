export default function Navbar() {
  return (
    <nav className="fixed top-2 z-50 flex w-full justify-center">
      <div className="flex items-center gap-x-10 rounded-full border border-white/10 bg-gray-900/60 px-8 py-3 backdrop-blur-md">
        <a href="/" className="text-gray-300 transition hover:text-white">
          Home
        </a>
        <a href="/about" className="text-gray-300 transition hover:text-white">
          About
        </a>
        <a href="/contact" className="text-gray-300 transition hover:text-white">
          Contact
        </a>
        <a href="/tournaments" className="text-gray-300 transition hover:text-white">
          Tournaments
        </a>
        <a href="/community" className="text-gray-300 transition hover:text-white">
          Community
        </a>
      </div>
    </nav>
  );
}