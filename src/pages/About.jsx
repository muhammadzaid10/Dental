import { Target, Heart, FlaskConical, ShieldCheck, SmilePlus } from 'lucide-react'

const team = [
  { name: 'Dr. Ahmed Siddiqui', role: 'Chief Dentist & Founder', exp: '18 yrs', specialty: 'Implants & Cosmetic' },
  { name: 'Dr. Sadia Khan', role: 'Orthodontist', exp: '12 yrs', specialty: 'Braces & Aligners' },
  { name: 'Dr. Bilal Raza', role: 'Endodontist', exp: '10 yrs', specialty: 'Root Canal Therapy' },
  { name: 'Dr. Nida Hussain', role: 'Pediatric Dentist', exp: '8 yrs', specialty: 'Children\'s Dentistry' },
]

const values = [
  { icon: <Target className="w-10 h-10 text-gold" strokeWidth={1.5} />, title: 'Precision', desc: 'Every procedure is performed with meticulous attention to detail.' },
  { icon: <Heart className="w-10 h-10 text-gold" strokeWidth={1.5} />, title: 'Compassion', desc: 'We treat each patient with genuine care and understanding.' },
  { icon: <FlaskConical className="w-10 h-10 text-gold" strokeWidth={1.5} />, title: 'Innovation', desc: 'Latest technology for superior outcomes and comfort.' },
  { icon: <ShieldCheck className="w-10 h-10 text-gold" strokeWidth={1.5} />, title: 'Integrity', desc: 'Honest advice, transparent pricing, no unnecessary procedures.' },
]

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light pt-40 pb-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Our Story</p>
          <h1 className="text-[clamp(40px,5vw,60px)] text-white mb-5 font-medium">About DentaCare</h1>
          <p className="text-lg text-white/65 leading-[1.7]">
            Founded in 2008 by Dr. Ahmed Siddiqui, DentaCare has grown into Karachi's most trusted premium dental clinic — built on expertise, compassion, and results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Our Mission</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy mb-5">Dentistry That Puts People First</h2>
            <p className="text-[17px] text-text-medium leading-[1.7] mb-5">
              We believe dental care should never be intimidating. Our mission is to create an environment where every patient — from children to seniors — feels heard, respected, and cared for.
            </p>
            <p className="text-[15px] text-text-medium leading-[1.75]">
              With over 8,000 treated patients and 15 years of excellence, our multidisciplinary team brings together specialists in every field of dentistry under one roof. We invest in the best technology so your treatment is faster, more comfortable, and longer lasting.
            </p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-[#E8F0FA] to-[#D4E3F5] rounded-xl h-[420px] flex flex-col items-center justify-center gap-4 border border-navy/10 shadow-sm">
              <SmilePlus className="w-20 h-20 text-navy/40" strokeWidth={1} />
              <p className="text-[15px] text-navy/70 font-medium">Committed to Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">What Drives Us</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-9 md:px-6 text-center border border-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl text-navy mb-2.5 font-medium">{v.title}</h3>
                <p className="text-[14px] text-text-medium leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Meet the Experts</p>
            <h2 className="text-[clamp(32px,4vw,48px)] text-navy mb-4">Our Doctors</h2>
            <p className="text-[17px] text-text-medium max-w-2xl mx-auto">
              Internationally trained specialists dedicated to transforming smiles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc) => (
              <div key={doc.name} className="bg-off-white rounded-xl p-9 md:px-6 text-center border border-navy/5 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1">
                <div className="w-[72px] h-[72px] rounded-full bg-navy text-gold font-display text-2xl font-semibold flex items-center justify-center mx-auto mb-5">
                  {doc.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-[17px] text-navy mb-1.5 font-medium">{doc.name}</h3>
                <p className="text-[13px] text-gold font-medium mb-4">{doc.role}</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="bg-navy/5 text-text-medium text-[11px] font-medium px-2.5 py-1 rounded-[3px] tracking-[0.3px]">{doc.exp}</span>
                  <span className="bg-navy/5 text-text-medium text-[11px] font-medium px-2.5 py-1 rounded-[3px] tracking-[0.3px]">{doc.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
