import { useState } from 'react'
import { Smile, Microscope, Stethoscope, Sparkles, ShieldCheck, Activity, ScrollText, Search, Baby } from 'lucide-react'

const categories = ['All', 'Cosmetic', 'Restorative', 'Preventive', 'Orthodontic']

const services = [
  { icon: <Smile className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Teeth Whitening', category: 'Cosmetic', price: 'From Rs. 8,000', duration: '60 min', desc: 'Professional-grade bleaching that removes deep stains and discoloration, giving you a noticeably brighter smile in a single session.', benefits: ['Safe & painless', 'Lasts 1–2 years', 'Same-day results'] },
  { icon: <Microscope className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Dental Implants', category: 'Restorative', price: 'From Rs. 45,000', duration: '2–3 sessions', desc: 'Permanent titanium implants that look, feel, and function exactly like your natural teeth. The gold standard for tooth replacement.', benefits: ['Lifetime solution', 'Natural look & feel', 'Bone preservation'] },
  { icon: <Stethoscope className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Orthodontics', category: 'Orthodontic', price: 'From Rs. 35,000', duration: '12–24 months', desc: 'Traditional metal braces or virtually invisible clear aligners — we tailor your orthodontic treatment to your lifestyle and goals.', benefits: ['Metal & clear options', 'For all ages', 'Discreet treatment'] },
  { icon: <Sparkles className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Veneers', category: 'Cosmetic', price: 'From Rs. 12,000/tooth', duration: '2 sessions', desc: 'Ultra-thin porcelain or composite shells bonded to the front of teeth to correct shape, color, and size instantly.', benefits: ['Instant smile makeover', 'Stain-resistant', 'Natural appearance'] },
  { icon: <ShieldCheck className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Root Canal', category: 'Restorative', price: 'From Rs. 6,000', duration: '90 min', desc: 'Pain-free root canal therapy using advanced rotary endodontics to save your tooth and eliminate infection completely.', benefits: ['Tooth-saving procedure', 'Pain relief', 'High success rate'] },
  { icon: <Activity className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Scaling & Cleaning', category: 'Preventive', price: 'From Rs. 2,500', duration: '45 min', desc: 'Professional deep cleaning that removes tartar, plaque buildup, and surface stains — preventing gum disease before it starts.', benefits: ['Prevents gum disease', 'Freshens breath', 'Twice yearly recommended'] },
  { icon: <ScrollText className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Tooth Extraction', category: 'Restorative', price: 'From Rs. 1,500', duration: '30 min', desc: 'Simple and surgical extractions performed with precision and care, including wisdom tooth removal under local anesthesia.', benefits: ['Minimal discomfort', 'Wisdom teeth specialist', 'Fast recovery'] },
  { icon: <Search className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Dental Checkup & X-Ray', category: 'Preventive', price: 'From Rs. 1,200', duration: '30 min', desc: 'Comprehensive oral exam with digital X-rays to detect issues early before they become expensive or complex problems.', benefits: ['Digital X-rays', 'Early detection', 'Comprehensive report'] },
  { icon: <Baby className="w-9 h-9 text-navy" strokeWidth={1.5} />, title: 'Children\'s Dentistry', category: 'Preventive', price: 'From Rs. 1,000', duration: '30 min', desc: 'Gentle, anxiety-free dental care designed specifically for children, making their first dental experiences positive and comfortable.', benefits: ['Child-friendly environment', 'Fun & gentle approach', 'Fluoride treatments'] },
]

export default function Services() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? services : services.filter(s => s.category === active)

  return (
    <main>
      <section className="bg-gradient-to-br from-navy to-navy-light pt-40 pb-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">What We Offer</p>
          <h1 className="text-[clamp(40px,5vw,60px)] text-white mb-5 font-medium">Our Services</h1>
          <p className="text-lg text-white/65 leading-[1.7]">
            Comprehensive dental care under one roof — from routine checkups to complete smile transformations.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                className={`bg-white border border-navy/10 px-5 py-2.5 rounded font-body text-[13px] font-medium cursor-pointer transition-all duration-250 hover:border-navy hover:text-navy ${
                  active === cat ? '!bg-navy !border-navy text-white' : 'text-text-medium'
                }`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 border border-navy/5 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <div>{s.icon}</div>
                  <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-[3px]">{s.category}</span>
                </div>
                <h3 className="text-xl text-navy mb-3 font-medium">{s.title}</h3>
                <p className="text-sm text-text-medium leading-[1.75] mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {s.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-[13px] text-text-medium">
                      <span className="text-gold text-[10px] shrink-0">✦</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-navy/5 pt-4 flex justify-between items-center mt-auto">
                  <span className="text-[15px] font-semibold text-navy">{s.price}</span>
                  <span className="text-xs text-text-medium">⏱ {s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
