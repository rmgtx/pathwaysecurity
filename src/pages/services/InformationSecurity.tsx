import { motion } from 'framer-motion'
import { Lock, Eye, ShieldAlert, KeyRound } from 'lucide-react'
import ServicePageLayout from '@/components/ServicePageLayout'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const pillars = [
  {
    icon: Eye,
    title: 'Confidentiality',
    description:
      'Ensuring sensitive information is accessible only to authorized individuals through proper access controls and encryption.',
  },
  {
    icon: ShieldAlert,
    title: 'Integrity',
    description:
      'Protecting data from unauthorized modification and ensuring the accuracy and trustworthiness of information.',
  },
  {
    icon: KeyRound,
    title: 'Availability',
    description:
      'Ensuring authorized users have reliable access to information and systems when they need them.',
  },
]

const relatedServices = [
  { name: 'vCISO', href: '/vciso' },
  { name: 'Risk Management', href: '/risk-management' },
  { name: 'Compliance', href: '/compliance' },
]

export default function InformationSecurity() {
  return (
    <ServicePageLayout
      icon={Lock}
      title="Information Security"
      subtitle="Data Protection & Security Posture"
      description="Information security is the sum of the efforts taken to protect the confidentiality, integrity, and availability of data. So what does that mean to you and your business? Do you know where all of your sensitive data is?"
      relatedServices={relatedServices}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-muted-foreground leading-relaxed max-w-3xl mb-12"
      >
        Understanding where your data lives, how it flows, and who has access
        to it is the foundation of any strong security program. We help you
        map your data landscape, identify vulnerabilities, and implement
        controls that protect your most sensitive information assets.
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-2xl font-bold tracking-tight text-foreground mb-8"
      >
        The three pillars of information security.
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            variants={fadeUp}
            custom={i + 2}
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
              <pillar.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  )
}
