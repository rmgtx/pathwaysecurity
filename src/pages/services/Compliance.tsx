import { motion } from 'framer-motion'
import { Scale, ClipboardCheck, FileText, Search } from 'lucide-react'
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
    icon: Search,
    title: 'Gap Analysis',
    description:
      'We identify where your organization stands relative to regulatory requirements and industry standards.',
  },
  {
    icon: FileText,
    title: 'Framework Implementation',
    description:
      'Implement and maintain compliance frameworks tailored to your industry (HIPAA, PCI-DSS, SOC 2, NIST, etc.).',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Preparation',
    description:
      'Prepare your organization for compliance audits with thorough documentation and evidence collection.',
  },
]

const relatedServices = [
  { name: 'vCISO', href: '/vciso' },
  { name: 'Risk Management', href: '/risk-management' },
  { name: 'Information Security', href: '/information-security' },
]

export default function Compliance() {
  return (
    <ServicePageLayout
      icon={Scale}
      title="Compliance"
      subtitle="Regulatory Compliance Solutions"
      description="In today's regulatory environment it is sometimes difficult to know what your regulatory obligations are or even where to begin your efforts to become compliant. Pathway has experienced professionals that will work with you to develop a customized approach to identify and address your compliance risks."
      relatedServices={relatedServices}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-muted-foreground leading-relaxed max-w-3xl mb-12"
      >
        Regulatory compliance isn't just about checking boxes — it's about
        building a culture of security and accountability. Our consultants
        bring deep expertise across multiple regulatory frameworks and work
        closely with your team to create sustainable compliance programs
        that grow with your organization.
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-2xl font-bold tracking-tight text-foreground mb-8"
      >
        How we help you stay compliant.
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
