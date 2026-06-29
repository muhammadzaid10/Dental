import { Link } from 'react-router-dom'
import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/75 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 text-white font-display text-2xl font-semibold tracking-wide mb-5">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>DentaCare</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/60">
              Providing exceptional dental care with advanced technology and a gentle touch. Your smile is our top priority.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/60 transition-all hover:border-gold hover:text-gold">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/60 transition-all hover:border-gold hover:text-gold">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/60 transition-all hover:border-gold hover:text-gold">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[2.5px] uppercase text-gold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-sm text-white/60 transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-white/60 transition-colors hover:text-white">Our Services</Link></li>
              <li><Link to="/gallery" className="text-sm text-white/60 transition-colors hover:text-white">Smile Gallery</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[2.5px] uppercase text-gold mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-sm text-white/60 transition-colors hover:text-white">Teeth Whitening</Link></li>
              <li><Link to="/services" className="text-sm text-white/60 transition-colors hover:text-white">Dental Implants</Link></li>
              <li><Link to="/services" className="text-sm text-white/60 transition-colors hover:text-white">Orthodontics</Link></li>
              <li><Link to="/services" className="text-sm text-white/60 transition-colors hover:text-white">Root Canal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-[2.5px] uppercase text-gold mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start text-sm text-white/60">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>123 Clifton, Block 5<br/>Karachi, Pakistan</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-white/60">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+92 300 1234567<br/>+92 21 3456789</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-white/60">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@dentacare.pk</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/35 gap-2 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} DentaCare Clinic. All rights reserved.</p>
          <p>Designed for Premium Dental Care</p>
        </div>
      </div>
    </footer>
  )
}
