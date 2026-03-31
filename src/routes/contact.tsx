import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socialLinks = [
  {
    name: 'Email',
    handle: 'imsb1371@gmail.com',
    href: 'mailto:imsb1371@gmail.com',
    description: 'Best for research collaborations and speaking invitations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/imsb1371',
    href: 'https://www.linkedin.com/in/imsb1371/',
    description: 'Professional updates and networking.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Google Scholar',
    handle: 'scholar.google.com',
    href: 'https://scholar.google.com/citations?hl=en&user=ZF3RfMsAAAAJ',
    description: 'Full list of publications and citation metrics.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    ),
  },
  {
    name: 'ResearchGate',
    handle: 'researchgate.net/profile/Mohammad-Barkhordari-2',
    href: 'https://www.researchgate.net/profile/Mohammad-Barkhordari-2',
    description: 'Research profile and paper access.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.56 12.56 0 0 0-.198.847 14.2 14.2 0 0 0-.086 1.226c-.012.496-.016.916-.01 1.26.005.344.007.63.007.857 0 .356-.1.642-.298.858-.2.216-.497.325-.89.325h-.44v.952h.44c.394 0 .69.11.89.325.197.216.297.5.297.858v4.08c0 .358-.1.64-.297.845-.2.206-.496.307-.89.307h-.44V15h3.79v-1.017h-.44c-.396 0-.693-.1-.89-.307-.2-.204-.297-.487-.297-.845V8.75h1.73v-1.06h-1.73V5.32c0-.357.052-.638.153-.843.102-.206.246-.31.435-.31.19 0 .337.103.44.307.1.204.152.486.152.845v.437h1.72v-.437c0-.73-.186-1.3-.556-1.712-.37-.41-.87-.617-1.5-.617zm-5.09 0L7.48 7.4 5.75 0H0v15h5.61V7.5l1.85 7.5H9.3l1.85-7.5V15H16.5V0z"/>
      </svg>
    ),
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ width: '64px', height: '64px', background: 'rgba(13,148,136,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#0D9488' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', color: '#0F172A', marginBottom: '0.75rem' }}>
            Message Sent!
          </h2>
          <p style={{ color: '#475569', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Thanks for reaching out. I'll get back to you within a few business days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{ background: '#0F172A', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', transition: 'background 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = '#1E293B'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = '#0F172A'}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#F8FAFC',
        padding: '4rem 1.5rem 3.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(13,148,136,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Get In Touch
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
            Contact
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.7, margin: 0 }}>
            Interested in collaboration, discussing research, or inviting me to speak?
            I'd love to hear from you.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Contact Form */}
          <div>
           {/* Contact Message */}
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', color: '#0F172A', marginBottom: '1.5rem', fontWeight: 600 }}>
                    Get In Touch
                  </h2>
                  <div style={{ 
                    background: '#fff', 
                    padding: '2rem', 
                    borderRadius: '10px', 
                    border: '1.5px solid #E2E8F0',
                    textAlign: 'center'
                  }}>
                    <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                      Please send message to{' '}
                      <a 
                        href="mailto:imsb1371@gmail.com" 
                        style={{ 
                          color: '#0D9488', 
                          fontWeight: 600, 
                          textDecoration: 'none',
                          borderBottom: '2px solid #0D9488'
                        }}
                      >
                        imsb1371@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
            
            {/* Office info */}
            <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#0D9488', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                Office
              </h4>
              <p style={{ color: '#334155', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                Personal Lab, Room 8<br />
                Azadi Street<br />
                Tehran, Iran<br />
                <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Response time: 2–4 business days</span>
              </p>
            </div>
            
          </div>

          {/* Social Links */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', color: '#0F172A', marginBottom: '1.5rem', fontWeight: 600 }}>
              Find Me Online
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {socialLinks.map(({ name, handle, href, description, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.1rem 1.25rem',
                    background: '#fff',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.boxShadow = '0 4px 14px rgba(13,148,136,0.1)'; el.style.transform = 'translateX(3px)' }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none'; el.style.transform = 'translateX(0)' }}
                >
                  <div style={{ color: '#0D9488', marginTop: '2px', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.9rem', marginBottom: '0.15rem' }}>{name}</div>
                    <div style={{ color: '#0D9488', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{handle}</div>
                    <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{description}</div>
                  </div>
                </a>
              ))}
            </div>

             {/* Office info */}
            
          </div>
        </div>
      </div>
    </div>
  )
}
