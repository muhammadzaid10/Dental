import { Link } from 'react-router-dom'
import { Smile, Microscope, Stethoscope, Sparkles, HeartPulse, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '8,000+', label: 'Happy Patients' },
  { number: '12', label: 'Expert Doctors' },
  { number: '98%', label: 'Success Rate' },
]

const services = [
  { icon: <Smile strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Teeth Whitening', desc: 'Professional-grade whitening for a radiant, confident smile.' },
  { icon: <Microscope strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth.' },
  { icon: <Stethoscope strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Orthodontics', desc: 'Invisible aligners and braces tailored to your lifestyle.' },
  { icon: <Sparkles strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and smile makeovers by expert hands.' },
  { icon: <HeartPulse strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Root Canal', desc: 'Pain-free root canal therapy using modern techniques.' },
  { icon: <ShieldCheck strokeWidth={1.5} className="w-10 h-10 text-navy" />, title: 'Preventive Care', desc: 'Deep cleaning, checkups and X-rays to protect your teeth.' },
]

const testimonials = [
  {
    name: 'Ayesha Siddiqui',
    role: 'Marketing Manager',
    text: 'The team at DentaCare transformed my smile completely. The entire experience was seamless and virtually painless.',
    rating: 5,
  },
  {
    name: 'Hassan Raza',
    role: 'Software Engineer',
    text: 'I was terrified of dentists before visiting DentaCare. Dr. Ahmed changed my life. Highly recommend to everyone.',
    rating: 5,
  },
  {
    name: 'Sana Malik',
    role: 'Teacher',
    text: 'Best dental clinic in Karachi by far. The facility is immaculate and the staff is incredibly professional and caring.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#0f2d4a]">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[140px] md:pt-[100px] pb-20">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Welcome to DentaCare</p>
          <h1 className="text-[clamp(36px,8vw,72px)] text-white mb-6 leading-[1.15] font-medium">Your Smile Deserves<br />Expert Hands</h1>
          <p className="text-lg text-white/70 max-w-[540px] leading-[1.7] mb-10">
            Premium dental care combining advanced technology with a warm, personal touch.
            Trusted by thousands of patients across Karachi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-white px-9 py-4 rounded-full font-medium text-[15px] uppercase tracking-[1px] transition-all hover:bg-navy hover:-translate-y-0.5 hover:shadow-lg">
              Get In Touch
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-9 py-[15px] rounded-full font-medium text-[15px] uppercase tracking-[1px] border-[1.5px] border-white/60 transition-all hover:bg-white hover:text-navy hover:border-white">
              Our Services
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-[1px] h-[50px] bg-gradient-to-b from-white/50 to-transparent overflow-hidden">
            <div className="w-full h-full bg-white origin-top animate-[scrollLine_1.8s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-white/5">
            {stats.map((s) => (
              <div key={s.label} className="py-8 md:py-10 px-4 md:px-8 border-r border-b md:border-b-0 border-white/5 flex flex-col items-center text-center gap-1.5">
                <span className="font-display text-3xl md:text-[42px] font-semibold text-gold leading-none">{s.number}</span>
                <span className="text-xs md:text-[13px] text-white/55 tracking-[0.5px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">What We Offer</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy mb-5">Comprehensive Dental Services</h2>
            <p className="text-[17px] text-text-medium leading-[1.7] max-w-[560px] mx-auto">
              From routine cleanings to complete smile makeovers — we have the expertise to care for every patient.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-xl p-8 md:p-10 border border-navy/5 relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-xl text-navy mb-2.5 font-medium">{s.title}</h3>
                <p className="text-[14px] text-text-medium leading-[1.7] mb-6">{s.desc}</p>
                <Link to="/services" className="text-[13px] font-semibold text-gold tracking-[0.3px] transition-all group-hover:tracking-[1px]">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E8F0FA] to-[#D4E3F5] rounded-xl h-[360px] md:h-[460px] flex flex-col items-center justify-center gap-4 border border-navy/10">
              <Building2 strokeWidth={1} className="w-20 h-20 text-navy/40" />
              <p className="text-base text-navy/70 font-medium">State-of-the-art Clinic</p>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-navy text-white rounded-xl p-6 text-center border-4 border-white shadow-lg">
              <strong className="block font-display text-4xl text-gold leading-none mb-1">15+</strong>
              <span className="text-xs text-white/65 leading-[1.4]">Years of<br />Excellence</span>
            </div>
          </div>
          <div>
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">About Us</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy mb-5">Dental Care You Can Trust</h2>
            <p className="text-[17px] text-text-medium leading-[1.7] mb-7">
              DentaCare was founded with a single vision — to make world-class dental treatment accessible, comfortable, and affordable in Karachi.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Board-certified, internationally trained dentists',
                'State-of-the-art equipment and sterilization',
                'Flexible payment plans and insurance support',
                'Comfortable, anxiety-free environment'
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-[15px] text-text-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center justify-center gap-2 bg-gold text-white px-9 py-4 rounded-full font-medium text-[15px] uppercase tracking-[1px] transition-all hover:bg-navy hover:-translate-y-0.5 hover:shadow-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Patient Stories</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy mb-5">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-8 md:p-10 border border-navy/5 shadow-sm transition-all duration-400 hover:shadow-xl">
                <div className="text-gold text-lg tracking-[2px] mb-4">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-[15px] text-text-medium leading-[1.75] italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-navy text-gold font-display text-lg font-semibold flex items-center justify-center shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="block text-[15px] text-navy font-medium">{t.name}</strong>
                    <span className="text-[13px] text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(32px,4vw,40px)] text-white mb-4">Ready for Your Best Smile?</h2>
          <p className="text-[17px] text-white/65 mb-9">Book a free consultation today. No pressure, just expert advice.</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-white px-9 py-4 rounded-full font-medium text-[15px] uppercase tracking-[1px] transition-all hover:bg-white hover:text-navy hover:-translate-y-0.5 hover:shadow-lg">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}} />
    </main>
  )
}
