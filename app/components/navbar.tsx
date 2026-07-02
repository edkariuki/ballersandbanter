export default function Navbar() {
  return (
    <nav className="p-4 z-50 top-2 fixed flex justify-center gap-x-10 w-full">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          <a href="/tournaments" className="text-gray-300 hover:text-white">Tournaments</a>
          <a href="/community" className="text-gray-300 hover:text-white">Community</a> 
    </nav>
  );
}