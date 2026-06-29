import { useState } from 'react'
import { Sparkles, Smile, CheckCircle, Microscope, Building2, Armchair, Beaker, Stethoscope, Activity, Syringe, HeartPulse, UserCircle2, UserCheck, Users, Search } from 'lucide-react'

const categories = ['All', 'Before & After', 'Clinic', 'Procedures', 'Team']

const items = [
  { id: 1, cat: 'Before & After', icon: <Sparkles strokeWidth={1} />, label: 'Teeth Whitening — 3 Shades Lighter', desc: 'Patient: Mrs. Ayesha' },
  { id: 2, cat: 'Before & After', icon: <Smile strokeWidth={1} />, label: 'Dental Veneer Transformation', desc: 'Patient: Mr. Usman' },
  { id: 3, cat: 'Before & After', icon: <CheckCircle strokeWidth={1} />, label: 'Orthodontic Treatment — 18 Months', desc: 'Patient: Zara A.' },
  { id: 4, cat: 'Before & After', icon: <Microscope strokeWidth={1} />, label: 'Implant Restoration', desc: 'Patient: Mr. Salman' },
  { id: 5, cat: 'Clinic', icon: <Building2 strokeWidth={1} />, label: 'Reception & Waiting Area', desc: 'Ground Floor' },
  { id: 6, cat: 'Clinic', icon: <Armchair strokeWidth={1} />, label: 'Patient Consultation Room', desc: 'Room A' },
  { id: 7, cat: 'Clinic', icon: <Beaker strokeWidth={1} />, label: 'State-of-the-Art Treatment Room', desc: 'Room B' },
  { id: 8, cat: 'Clinic', icon: <Search strokeWidth={1} />, label: 'Digital X-Ray Suite', desc: 'Diagnostic Wing' },
  { id: 9, cat: 'Procedures', icon: <Activity strokeWidth={1} />, label: 'Professional Scaling Session', desc: 'Preventive Care' },
  { id: 10, cat: 'Procedures', icon: <Syringe strokeWidth={1} />, label: 'Implant Placement Procedure', desc: 'Surgical Bay' },
  { id: 11, cat: 'Procedures', icon: <HeartPulse strokeWidth={1} />, label: 'Veneer Bonding Process', desc: 'Cosmetic Suite' },
  { id: 12, cat: 'Team', icon: <UserCircle2 strokeWidth={1} />, label: 'Dr. Ahmed Siddiqui', desc: 'Chief Dentist' },
  { id: 13, cat: 'Team', icon: <UserCheck strokeWidth={1} />, label: 'Dr. Sadia Khan', desc: 'Orthodontist' },
  { id: 14, cat: 'Team', icon: <Users strokeWidth={1} />, label: 'Team DentaCare', desc: 'Annual Gathering 2024' },
  { id: 15, cat: 'Before & After', icon: <Smile strokeWidth={1} />, label: 'Complete Smile Makeover', desc: 'Patient: Hina M.' },
  { id: 16, cat: 'Clinic', icon: <Stethoscope strokeWidth={1} />, label: 'Patient Lounge', desc: 'Premium Waiting Area' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <main>
      <section className="bg-gradient-to-br from-navy to-navy-light pt-40 pb-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Visual Tour</p>
          <h1 className="text-[clamp(40px,5vw,60px)] text-white mb-5 font-medium">Our Gallery</h1>
          <p className="text-lg text-white/65 leading-[1.7]">
            See the transformations, our clinic, and meet the team that makes it all happen.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-navy/5 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                onClick={() => setSelected(item)}
              >
                <div className="h-[220px] bg-gradient-to-br from-[#E8F0FA] to-[#D4E3F5] flex items-center justify-center border-b border-navy/5 transition-colors duration-300 group-hover:from-gold/20 group-hover:to-gold/10">
                  <div className="w-16 h-16 text-navy/40 transition-transform duration-300 group-hover:scale-110 *:w-full *:h-full">
                    {item.icon}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[15px] font-medium text-navy mb-1.5 leading-[1.4]">{item.label}</p>
                  <span className="text-xs text-text-medium">{item.cat} · {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div 
          className="fixed inset-0 bg-navy/90 z-[9999] flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease]" 
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-white rounded-xl w-full max-w-[600px] overflow-hidden shadow-2xl relative flex flex-col" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full border border-navy/10 text-navy font-semibold text-lg flex items-center justify-center cursor-pointer transition-all hover:bg-navy hover:text-white z-10" 
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <div className="h-[300px] sm:h-[400px] bg-gradient-to-br from-[#E8F0FA] to-[#D4E3F5] flex items-center justify-center">
              <div className="w-[100px] h-[100px] text-navy/40 *:w-full *:h-full">
                {selected.icon}
              </div>
            </div>
            <div className="p-8 text-center bg-white relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[1.5px] uppercase text-gold bg-navy px-3 py-1.5 rounded-[3px] shadow-sm">{selected.cat}</span>
              <h3 className="text-2xl text-navy mb-2 mt-4 font-medium">{selected.label}</h3>
              <p className="text-[15px] text-text-medium">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </main>
  )
}
