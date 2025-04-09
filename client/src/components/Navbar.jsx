import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        FixItList
      </Link>

      {/* Right-side button */}
      <Link
        to="/my-list"
        className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition duration-300"
      >
        My List
      </Link>
    </nav>
  );
}
