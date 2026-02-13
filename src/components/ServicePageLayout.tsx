import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, type LucideIcon } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

interface ServicePageLayoutProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  children: ReactNode
  relatedServices: { name: string; href: string }[]
}

export default function ServicePageLayout({
  icon: Icon,
  title,
  subtitle,
  description,
  children,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white selection:bg-accent selection:text-white">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-inset ring-accent/20">
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </div>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300 uppercase mb-6 w-auto">
              {subtitle}
            </p>
            <h1
              className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.1 }}
            >
              {title}
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed font-light max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background relative z-10">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-slate-950 border-t border-white/5 relative z-10">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
            >
              Related Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-2xl font-bold tracking-tight text-white mb-8"
            >
              Explore our other offerings.
            </motion.h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service, i) => (
                <motion.div key={service.href} variants={fadeUp} custom={i + 2}>
                  <Link
                    to={service.href}
                    className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
                      {service.name}
                    </span>
                    <span className="flex items-center justify-center h-8 w-8 rounded-full border border-slate-700 bg-slate-800 text-slate-400 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                      <ArrowRight className="h-3.5 w-3.5 group-hover:-rotate-45 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-background text-white border-t border-white/5 overflow-hidden">
        {/* Subtle glow */}
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
              Ready to get started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-slate-400 max-w-lg"
            >
              Contact us to learn how our {title.toLowerCase()} services can help
              protect your organization.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
