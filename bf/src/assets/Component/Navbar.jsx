import logo from "../image/logo.png"
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 dark:bg-gray-950 dark:text-gray-100">
        <div className="container flex justify-between h-[70px]">
          <a href="#" className="flex">
            <img className="w-44 h-16" src={logo} alt="Logo" />
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex gap-9 mr-10">
            <li className="flex">
              <Link className="cursor-pointer mt-6" to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="flex">
              <Link className="cursor-pointer mt-6" to="product" smooth={true} duration={500}>
                Product
              </Link>
            </li>
            <li className="flex">
              <Link className="cursor-pointer mt-6" to="business" smooth={true} duration={500}>
                Ourbusines
              </Link>
            </li>
            <li className="flex">
              <Link className="cursor-pointer mt-6" to="aboutus" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar
