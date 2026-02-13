import { motion } from 'framer-motion'
import { AlertTriangle, ServerCrash, Flame, Database } from 'lucide-react'
import ServicePageLayout from '@/components/ServicePageLayout'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const scenarios = [
  {
    icon: ServerCrash,
    title: 'System Failures',
    description:
      'What would your organization do if their information systems crashed and could not be recovered for a week, a month, or possibly ever?',
  },
  {
    icon: Flame,
    title: 'Physical Disasters',
    description:
      'How would your business respond to a fire, a flood, or an explosion caused by a gas leak? Do you have continuity plans in place?',
  },
  {
    icon: Database,
    title: 'Data Loss',
    description:
      'Are your critical data assets protected with proper backup and recovery procedures? Could you recover from a ransomware attack?',
  },
]

const relatedServices = [
  { name: 'vCISO', href: '/vciso' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Information Security', href: '/information-security' },
]

export default function RiskManagement() {
  return (
    <ServicePageLayout
      icon={AlertTriangle}
      title="Risk Management"
      subtitle="Business Continuity & Risk Assessment"
      description="What would your organization do if their information systems crashed? What would they do if they could not be recovered for a week, a month, or possibly ever? How would your business respond to a fire, a flood, or an explosion caused by a gas leak?"
      relatedServices={relatedServices}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-muted-foreground leading-relaxed max-w-3xl mb-12"
      >
        Effective risk management requires identifying, analyzing, and
        prioritizing threats to your organization. Our team helps you build
        comprehensive risk frameworks that account for both cyber and physical
        threats, ensuring your business can continue operating even when the
        unexpected occurs.
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-2xl font-bold tracking-tight text-foreground mb-8"
      >
        Scenarios we help you prepare for.
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {scenarios.map((scenario, i) => (
          <motion.div
            key={scenario.title}
            variants={fadeUp}
            custom={i + 2}
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
              <scenario.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {scenario.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {scenario.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  )
}
