import { Link } from 'react-router-dom'
import GlobeLogo from '@/components/icons/GlobeLogo'

const footerLinks = {
  services: [
    { name: 'vCISO', href: '/vciso' },
    { name: 'Risk Management', href: '/risk-management' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Information Security', href: '/information-security' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GlobeLogo className="relative h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white transition-colors duration-300">
                Pathway<span className="text-accent">Security</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Expert cybersecurity consulting to protect your organization's most critical assets.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Pathway Security. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
