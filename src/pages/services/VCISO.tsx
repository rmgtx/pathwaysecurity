import { motion } from 'framer-motion'
import { ShieldCheck, UserCheck, FileSearch, BarChart3 } from 'lucide-react'
import ServicePageLayout from '@/components/ServicePageLayout'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const capabilities = [
  {
    icon: UserCheck,
    title: 'Strategic Leadership',
    description:
      'Our vCISOs provide executive-level security leadership, working with your board and C-suite to align security strategy with business objectives.',
  },
  {
    icon: FileSearch,
    title: 'Policy & Program Development',
    description:
      'We develop and maintain comprehensive security policies, procedures, and programs tailored to your organization.',
  },
  {
    icon: BarChart3,
    title: 'Security Assessments',
    description:
      'Regular assessments of your security posture to identify gaps and prioritize remediation efforts.',
  },
]

const relatedServices = [
  { name: 'Compliance', href: '/compliance' },
  { name: 'Risk Management', href: '/risk-management' },
  { name: 'Information Security', href: '/information-security' },
]

export default function VCISO() {
  return (
    <ServicePageLayout
      icon={ShieldCheck}
      title="vCISO"
      subtitle="Virtual Chief Information Security Officer"
      description="Pathway Security's Virtual CISO (vCISO) service allows your organization to utilize our pool of experts to perform most of the tasks typically assigned to your in-house Chief Information Security Officer."
      relatedServices={relatedServices}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-muted-foreground leading-relaxed max-w-3xl mb-12"
      >
        Not every organization can afford — or needs — a full-time CISO. Our
        vCISO service gives you access to seasoned cybersecurity leaders who
        integrate directly with your team, providing strategic direction,
        risk oversight, and hands-on security management at a fraction of
        the cost of a permanent hire.
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-2xl font-bold tracking-tight text-foreground mb-8"
      >
        What our vCISOs deliver.
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            variants={fadeUp}
            custom={i + 2}
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
              <cap.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {cap.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  )
}
