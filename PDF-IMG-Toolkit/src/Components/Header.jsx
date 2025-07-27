import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.png'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-white/80 shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logo2}
                alt="PDF IMG Toolkit" 
                className="h-12 w-auto sm:h-16 lg:h-20 max-w-none object-contain transition-transform duration-200 group-hover:scale-105"
              />
              {/* <span className="hidden sm:block text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                PDF IMG Toolkit
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } group`
              }
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </NavLink>
            
            <NavLink 
              to="/download" 
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } group`
              }
            >
              Download
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } group`
              }
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </NavLink>

            {/* CTA Button */}
            <Link
              to="/download"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm lg:text-base font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Download
            </NavLink>
            
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* <Link
              to="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-3 mt-4 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Get Started
            </Link> */}

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header