import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <>
       <header className="navbarhere">
          <nav className="navbar bg-white px-4 py-10 w-screen">
              <div className="menu flex justify-end gap-5">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contactus">Contact Us</Link>
              </div>
          </nav>
           </header>
    </>
  )
}

export default Navbar