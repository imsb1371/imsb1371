import { HeadContent, Link, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dr. Mohammad Sadegh Barkhordari',
      },
      {
        name: 'description',
        content: 'Postdoctoral Research. Exploring how machine learning can make complex environmental systems more understandable and predictable.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/resume' as const, label: 'About' },
  { to: '/projects' as const, label: 'Research' },
  { to: '/blog/' as const, label: 'Writing' },
  { to: '/contact' as const, label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(15,23,42,0.97)' : '#0F172A',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(13,148,136,0.25)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo / Name */}
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#F8FAFC',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Dr. Mohammad Sadegh Barkhordari
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
            {navLinks.map(({ to, label }) => {
              const isActive = currentPath === to
              return (
                <Link
                  key={to}
                  to={to}
                  className="nav-link"
                  style={{
                    color: isActive ? '#0D9488' : '#CBD5E1',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseOver={e => { if (!isActive) (e.target as HTMLElement).style.color = '#F8FAFC' }}
                  onMouseOut={e => { if (!isActive) (e.target as HTMLElement).style.color = '#CBD5E1' }}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#F8FAFC', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div style={{ paddingBottom: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="md:hidden">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.65rem 0',
                  color: currentPath === to ? '#0D9488' : '#CBD5E1',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  fontWeight: currentPath === to ? 600 : 400,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A', color: '#94A3B8', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#F8FAFC', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              Dr. Mohammad Sadegh Barkhordari
            </h3>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
              Postdoctoral Research Fellow<br />
              MIT Media Lab<br />
              Cambridge, MA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.target as HTMLElement).style.color = '#0D9488'}
                    onMouseOut={e => (e.target as HTMLElement).style.color = '#94A3B8'}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Connect
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: 'mailto:imsb1371@gmail.com', label: 'Email' },
                { href: 'https://www.linkedin.com/in/imsb1371/', label: 'LinkedIn' },
                { href: 'https://github.com/', label: 'GitHub' },
                { href: 'https://scholar.google.com/citations?hl=en&user=ZF3RfMsAAAAJ', label: 'Google Scholar' },
                { href: 'https://www.researchgate.net/profile/Mohammad-Barkhordari-2', label: 'ResearchGate' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.target as HTMLElement).style.color = '#0D9488'}
                    onMouseOut={e => (e.target as HTMLElement).style.color = '#94A3B8'}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem', margin: 0 }}>© {new Date().getFullYear()} Dr. Mohammad Sadegh Barkhordari. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', margin: 0 }}>Iran, Tehran.</p>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
