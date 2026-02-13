import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { name: 'vCISO', href: '/vciso' },
  { name: 'Risk Management', href: '/risk-management' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Information Security', href: '/information-security' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services', children: services },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setIsServicesOpen(false)
  }, [location.pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on Escape
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsServicesOpen(false)
      dropdownButtonRef.current?.focus()
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Pathway Security – Home">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Shield
              className="relative h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white transition-colors duration-300">
            Pathway<span className="text-accent">Security</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1" role="menubar">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.children ? (
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <button
                    ref={dropdownButtonRef}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-white/5',
                      location.pathname.startsWith('/services') ||
                        services.some((s) => location.pathname === s.href)
                        ? 'text-accent'
                        : 'text-slate-300 hover:text-white'
                    )}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    aria-controls="services-dropdown"
                    role="menuitem"
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        isServicesOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4"
                        id="services-dropdown"
                        role="menu"
                        aria-label="Services submenu"
                      >
                        <div className="w-64 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-black/5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              role="menuitem"
                              className={cn(
                                'block rounded-lg px-4 py-3 text-sm transition-all duration-200',
                                location.pathname === child.href
                                  ? 'bg-accent/10 text-accent font-medium'
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href}
                  role="menuitem"
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-white/5',
                    location.pathname === link.href
                      ? 'text-accent'
                      : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/contact-us"
            className="ml-4 inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors',
                          location.pathname.startsWith('/services')
                            ? 'text-accent bg-accent/5'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        )}
                        aria-expanded={isServicesOpen}
                        aria-controls="mobile-services-submenu"
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            isServicesOpen && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                            id="mobile-services-submenu"
                            role="group"
                            aria-label="Services"
                          >
                            <div className="ml-4 border-l border-white/10 pl-4 space-y-1 mt-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className={cn(
                                    'block rounded-lg px-4 py-2.5 text-sm transition-colors',
                                    location.pathname === child.href
                                      ? 'text-accent font-medium'
                                      : 'text-slate-400 hover:text-white'
                                  )}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                        location.pathname === link.href
                          ? 'text-accent bg-accent/5'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact-us"
                  className="block w-full rounded-lg bg-accent px-4 py-3.5 text-center text-base font-medium text-white transition-all hover:bg-accent-400 shadow-lg shadow-accent/20"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
