import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const values = [
  {
    icon: Users,
    title: 'Client-Focused',
    description:
      'We build long-term relationships by understanding your unique challenges and delivering tailored security solutions.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'Our approach is grounded in practical, measurable outcomes that strengthen your security posture where it matters most.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description:
      'Our team brings decades of combined experience across compliance, risk management, and information security.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white selection:bg-accent selection:text-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
             <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300 uppercase mb-6 w-auto">
              About Us
            </p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl mb-6" style={{ lineHeight: 1.1 }}>
              Security expertise <br/>you can <span className="text-gradient-accent">trust.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
              Pathway Security is a team of seasoned cybersecurity professionals
              dedicated to helping organizations navigate the complex landscape of
              information security, compliance, and risk management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background relative z-10">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
              >
                Our Mission
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold tracking-tight text-white mb-6"
              >
                Protecting organizations in an increasingly complex world.
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4">
                <p className="text-slate-400 leading-relaxed">
                  We believe that every organization, regardless of size, deserves
                  access to world-class cybersecurity expertise. Our consultants
                  work alongside your team to identify vulnerabilities, build
                  robust security frameworks, and ensure regulatory compliance.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  From virtual CISO services to comprehensive risk assessments,
                  we provide the strategic guidance and hands-on support your
                  organization needs to stay secure and compliant.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-10 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <blockquote className="relative z-10 text-xl font-medium text-slate-200 leading-relaxed italic">
                "Our goal is to make enterprise-grade security accessible to
                organizations of all sizes, providing practical solutions that
                protect what matters most."
              </blockquote>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  P
                </div>
                <div>
                   <p className="text-sm font-bold text-white">Pathway Security Team</p>
                   <p className="text-xs text-accent">Cybersecurity Experts</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-950 border-t border-white/5 relative z-10">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
              >
                Our Values
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold tracking-tight text-white"
              >
                What drives us.
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  custom={i + 2}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 transition-colors duration-300"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                    <value.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative z-10 border-t border-white/5">
        <div className="container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6"
            >
              Ready to work with us?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg text-slate-400 mb-8"
            >
              Get in touch to discuss how we can help secure your organization.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
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
