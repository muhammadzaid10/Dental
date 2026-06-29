import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-navy to-navy-light pt-40 pb-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Get In Touch</p>
          <h1 className="text-[clamp(40px,5vw,60px)] text-white mb-5 font-medium">Contact Us</h1>
          <p className="text-lg text-white/65 leading-[1.7]">
            Reach out to us or ask us anything — our team responds within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[100px] bg-off-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[72px] items-start">
          {/* Info */}
          <div>
            <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">Visit Us</p>
            <h2 className="text-[32px] text-navy mb-5">We'd Love to See You</h2>
            <p className="text-[15px] text-text-medium leading-[1.7] mb-9">
              Walk-ins welcome. Our friendly staff will make you feel at home from the moment you arrive.
            </p>

            <div className="flex flex-col gap-6 mb-9">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[13px] font-semibold text-navy tracking-[0.5px] uppercase mb-1">Address</strong>
                  <p className="text-[14px] text-text-medium leading-[1.6]">123 Clifton, Block 5<br />Karachi, Sindh, Pakistan</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[13px] font-semibold text-navy tracking-[0.5px] uppercase mb-1">Phone</strong>
                  <p className="text-[14px] text-text-medium leading-[1.6]">+92 300 1234567<br />+92 21 3456789</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy shrink-0"><Mail className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[13px] font-semibold text-navy tracking-[0.5px] uppercase mb-1">Email</strong>
                  <p className="text-[14px] text-text-medium leading-[1.6]">info@dentacare.pk<br />support@dentacare.pk</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy shrink-0"><Clock className="w-5 h-5" /></div>
                <div>
                  <strong className="block text-[13px] font-semibold text-navy tracking-[0.5px] uppercase mb-1">Working Hours</strong>
                  <p className="text-[14px] text-text-medium leading-[1.6]">Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: 10:00 AM – 3:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567?text=Hi%20DentaCare!"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 rounded font-semibold text-sm transition-all hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-7 md:p-11 border border-navy/5 shadow-sm">
            {submitted ? (
              <div className="text-center py-5 flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-5" />
                <h3 className="text-2xl text-navy mb-3">Message Received!</h3>
                <p className="text-[15px] text-text-medium leading-[1.7] mb-7">Thank you, {form.name}. Our team will get back to you within 2 hours.</p>
                <button 
                  className="inline-flex items-center gap-2 bg-gold text-white px-9 py-4 rounded-full font-medium text-[15px] uppercase tracking-[1px] transition-all hover:bg-navy hover:-translate-y-0.5 hover:shadow-lg" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl text-navy mb-7">Send a Message</h3>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-[0.5px] uppercase text-navy">Full Name *</label>
                      <input
                        className="px-4 py-3 border border-navy/10 rounded font-body text-sm text-text-dark bg-off-white transition-all outline-none focus:border-navy focus:bg-white focus:ring-[3px] focus:ring-navy/5 placeholder-gray-400"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-[0.5px] uppercase text-navy">Phone Number *</label>
                      <input
                        className="px-4 py-3 border border-navy/10 rounded font-body text-sm text-text-dark bg-off-white transition-all outline-none focus:border-navy focus:bg-white focus:ring-[3px] focus:ring-navy/5 placeholder-gray-400"
                        type="tel"
                        name="phone"
                        placeholder="+92 300 0000000"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.5px] uppercase text-navy">Email Address</label>
                    <input
                      className="px-4 py-3 border border-navy/10 rounded font-body text-sm text-text-dark bg-off-white transition-all outline-none focus:border-navy focus:bg-white focus:ring-[3px] focus:ring-navy/5 placeholder-gray-400"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.5px] uppercase text-navy">Service Required</label>
                    <select 
                      className="px-4 py-3 border border-navy/10 rounded font-body text-sm text-text-dark bg-off-white transition-all outline-none focus:border-navy focus:bg-white focus:ring-[3px] focus:ring-navy/5"
                      name="service" 
                      value={form.service} 
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Orthodontics / Braces</option>
                      <option>Veneers</option>
                      <option>Root Canal</option>
                      <option>Scaling & Cleaning</option>
                      <option>Dental Checkup</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.5px] uppercase text-navy">Message / Special Concern</label>
                    <textarea
                      className="px-4 py-3 border border-navy/10 rounded font-body text-sm text-text-dark bg-off-white transition-all outline-none focus:border-navy focus:bg-white focus:ring-[3px] focus:ring-navy/5 placeholder-gray-400 resize-y"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your dental concern..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full justify-center inline-flex items-center gap-2 bg-gold text-white px-9 py-4 rounded-full font-medium text-[15px] uppercase tracking-[1px] transition-all hover:bg-navy hover:-translate-y-0.5 hover:shadow-lg mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
