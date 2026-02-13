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
    subtitle: 'Virtual Chief Information Security Officer',
    description:
      "Pathway Security's Virtual CISO (vCISO) service allows your organization to utilize our pool of experts to perform most of the tasks typically assigned to your in-house Chief Information Security Officer.",
    href: '/vciso',
  },
  {
    icon: Scale,
    title: 'Compliance',
    subtitle: 'Regulatory Compliance Solutions',
    description:
      "In today's regulatory environment it is sometimes difficult to know what your regulatory obligations are or even where to begin your efforts to become compliant. Pathway has experienced professionals that will work with you to develop a customized approach to identify and address your compliance risks.",
    href: '/compliance',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Management',
    subtitle: 'Business Continuity & Risk Assessment',
    description:
      'What would your organization do if their information systems crashed? What would they do if they could not be recovered for a week, a month, or possibly ever? How would your business respond to a fire, a flood, or an explosion caused by a gas leak?',
    href: '/risk-management',
  },
  {
    icon: Lock,
    title: 'Information Security',
    subtitle: 'Data Protection & Security Posture',
    description:
      'Information security is the sum of the efforts taken to protect the confidentiality, integrity, and availability of data. So what does that mean to you and your business? Do you know where all of your sensitive data is?',
    href: '/information-security',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white selection:bg-accent selection:text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300 uppercase mb-6 w-auto">
              Services
            </p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl mb-6" style={{ lineHeight: 1.1 }}>
              Comprehensive <span className="text-gradient-accent">security solutions.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
              From strategic advisory to hands-on implementation, our services
              cover the full spectrum of cybersecurity needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background relative z-10">
        <div className="container-narrow">
          <div className="space-y-8">
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
                  className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="flex-shrink-0 relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 text-accent ring-1 ring-inset ring-white/5 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <service.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white group-hover:text-accent-300 transition-colors duration-200">
                          {service.title}
                        </h2>
                        <p className="text-sm font-medium text-accent uppercase tracking-wider mt-1 mb-3">
                          {service.subtitle}
                        </p>
                      </div>
                      <span className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-700 bg-slate-800 text-slate-400 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-5 w-5 group-hover:-rotate-45 transition-transform duration-300" />
                      </span>
                    </div>
                    <p className="mt-2 text-base text-slate-400 leading-relaxed text-balance">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950/50 text-white relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            >
              Not sure which service you need?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg text-slate-400 mb-8"
            >
              Let our experts assess your current security posture and recommend the right approach for your organization.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-0.5"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
