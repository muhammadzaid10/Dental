import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        scrolled ? 'bg-navy py-3.5 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2.5 text-white font-display text-2xl font-semibold tracking-wide shrink-0">
          <Sparkles className="w-5 h-5 text-gold" />
          <span>DentaCare</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 mx-auto">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative text-[14px] font-medium tracking-wide transition-colors duration-300 pb-1
                  ${location.pathname === link.to ? 'text-white' : 'text-white/80 hover:text-white'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-gold 
                  after:transition-transform after:duration-300 
                  ${location.pathname === link.to ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-1 z-50 relative text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-y-0 right-0 w-[280px] bg-navy shadow-2xl flex flex-col justify-center gap-7 p-10 transition-transform duration-400 ease-in-out md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-7">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.to ? 'text-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
