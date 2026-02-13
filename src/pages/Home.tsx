import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Scale, AlertTriangle, Lock } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const services = [
  {
    icon: ShieldCheck,
    title: 'vCISO',
    description:
      "Pathway Security's Virtual CISO (vCISO) service allows your organization to utilize our pool of experts to perform most of the tasks typically assigned to your in-house Chief Information Security Officer.",
    href: '/vciso',
  },
  {
    icon: Scale,
    title: 'Compliance',
    description:
      "In today's regulatory environment it is sometimes difficult to know what your regulatory obligations are or even where to begin your efforts to become compliant. Pathway has experienced professionals that will work with you to develop a customized approach to identify and address your compliance risks.",
    href: '/compliance',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Management',
    description:
      'What would your organization do if their information systems crashed? What would they do if they could not be recovered for a week, a month, or possibly ever? How would your business respond to a fire, a flood, or an explosion caused by a gas leak?',
    href: '/risk-management',
  },
  {
    icon: Lock,
    title: 'Information Security',
    description:
      'Information security is the sum of the efforts taken to protect the confidentiality, integrity, and availability of data. So what does that mean to you and your business? Do you know where all of your sensitive data is?',
    href: '/information-security',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background text-foreground selection:bg-accent selection:text-white">
        {/* Ambient Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-blob" />
          <div className="absolute top-[-10%] right-[-20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-blob animation-delay-2000" />
           <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40 animate-blob animation-delay-4000" />
        </div>

        {/* Grid Pattern Overlay */}
         <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-48 lg:pb-36">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300 uppercase mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Cybersecurity Consultants
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl mb-8"
              style={{ lineHeight: 1.05 }}
            >
              <span className="text-white">Protecting what matters</span>{' '}
              <span className="bg-gradient-to-r from-accent-400 to-indigo-400 bg-clip-text text-transparent">
                most.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed font-light"
            >
              Expert cybersecurity consulting to safeguard your organization's
              critical assets, ensure compliance, and build resilient security
              postures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-5"
            >
              <Link
                to="/contact-us"
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] active:scale-95"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 active:scale-95"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background relative z-10">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-24 text-center md:text-left"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Comprehensive <span className="text-gradient-accent">Security Solutions</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  to={service.href}
                  className="group relative block h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <service.icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-200">
                      {service.description}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-70 group-hover:opacity-100 group-hover:text-accent-300 transition-all duration-200 group-hover:translate-x-1">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-slate-950 text-white border-t border-white/5 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Contact Pathway Security Today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-slate-400 max-w-lg"
            >
              Let us help you identify risks, achieve compliance, and strengthen
              your organization's security posture.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
