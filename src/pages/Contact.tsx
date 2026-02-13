import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white selection:bg-accent selection:text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300 uppercase mb-6 w-auto">
              Contact Us
            </p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl mb-6" style={{ lineHeight: 1.1 }}>
              Let's start a <span className="text-gradient-accent">conversation.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
              Reach out to discuss your cybersecurity needs. We're here to
              help you build a stronger, more resilient security posture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background relative z-10">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16 rounded-3xl border border-slate-800 bg-slate-900/50 p-12"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500 ring-1 ring-inset ring-green-500/20">
                <CheckCircle className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Message Sent!
              </h2>
              <p className="text-lg text-slate-400">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-12 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <motion.div variants={fadeUp} custom={0}>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="John"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp} custom={1}>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} custom={2}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                </motion.div>

                <motion.div variants={fadeUp} custom={3}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="How can we help?"
                  />
                </motion.div>

                <motion.div variants={fadeUp} custom={4}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-accent focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </motion.div>

                <motion.div variants={fadeUp} custom={5}>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
