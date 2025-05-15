import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-md w-screen">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-end space-x-6">
        <Link to="/" className="font-semibold text-blue-400 hover:text-blue-600">Home</Link>
        <Link to="/about" className="font-semibold text-blue-400 hover:text-blue-600">About</Link>
        <Link to="/contactus" className="font-semibold text-blue-400 hover:text-blue-600">Contact Us</Link>
      </nav>
    </header>
  )
}
export default Navbar