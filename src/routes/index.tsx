import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs, allProjects } from 'content-collections'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  'Human-Computer Interaction',
  'Machine Learning',
  'Qualitative Research',
  'Natural Language Processing',
  'Experimental Design',
  'React / TypeScript',
  'Python / PyTorch',
  'D3.js / Data Visualization',
]

const publications = [
  {
    title: 'CollabSense: Supporting Collaborative Literature Review with Large Language Models',
    venue: 'CHI 2024',
    award: 'Best Paper Nominee',
    year: '2024',
  },
  {
    title: 'Toward Scalable Qualitative Analysis: Combining Grounded Theory with Transformer-Based Topic Models',
    venue: 'CSCW 2024',
    year: '2024',
  },
  {
    title: 'Bridging the Gap: Annotation Consistency in Distributed Research Teams',
    venue: 'CHI 2022',
    award: 'Honorable Mention',
    year: '2022',
  },
]

function Home() {
  const recentPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <div>
      {/* ── Hero Section ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
          color: '#F8FAFC',
          padding: '6rem 1.5rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative teal accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #0D9488, transparent)',
        }} />

        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(13,148,136,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13,148,136,0.05) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center', position: 'relative' }}>
          <div>
            <div className="animate-fade-in-up" style={{ marginBottom: '1rem' }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(13,148,136,0.15)',
                border: '1px solid rgba(13,148,136,0.3)',
                color: '#0D9488',
                padding: '0.35rem 1rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Postdoctoral researcher working on interpretable machine learning
              </span>
            </div>

            <h1
              className="animate-fade-in-up animate-delay-100"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                margin: '0 0 1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Dr. Mohammad Sadegh Barkhordari
            </h1>

            <p
              className="animate-fade-in-up animate-delay-200"
              style={{
                fontSize: '1.15rem',
                color: '#94A3B8',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
            I design, build, and study data-driven systems that help researchers
            make sense of complex environmental systems — at the intersection of{' '}
            <span style={{ color: '#0D9488', fontWeight: 500 }}>machine learning</span>,{' '}
            <span style={{ color: '#0D9488', fontWeight: 500 }}>engineering systems</span>, and{' '}
            <span style={{ color: '#0D9488', fontWeight: 500 }}>computational modeling</span>.
            </p>

            <div className="animate-fade-in-up animate-delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/projects"
                style={{
                  display: 'inline-block',
                  background: '#0D9488',
                  color: '#fff',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#0F766E'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                View Research
              </Link>
              <Link
                to="/resume"
                style={{
                  display: 'inline-block',
                  border: '1.5px solid rgba(248,250,252,0.25)',
                  color: '#F8FAFC',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0D9488'; (e.currentTarget as HTMLElement).style.background = 'rgba(13,148,136,0.1)' }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(248,250,252,0.25)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="animate-fade-in-up animate-delay-400" style={{ flexShrink: 0 }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(13,148,136,0.5)',
              boxShadow: '0 0 0 8px rgba(13,148,136,0.1)',
            }}>
              <img
                src="/headshot-on-white.jpg"
                alt="Dr. Mohammad Sadegh Barkhordari"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ backgroundColor: '#1E293B', padding: '1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {[
            { value: '12+', label: 'Publications' },
            { value: '200+', label: 'Study Participants' },
            { value: '3', label: 'Best Paper Awards' },
            { value: '5', label: 'Open-Source Tools' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#0D9488' }}>{value}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Research ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Featured Work
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Research & Projects
              </h2>
            </div>
            <Link to="/projects" style={{ color: '#0D9488', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View all research →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featuredProjects.map((project, i) => (
              <div
                key={project._meta.path}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  border: '1px solid #E2E8F0',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                  cursor: 'default',
                }}
                onMouseOver={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 32px rgba(15,23,42,0.1)'
                  el.style.borderColor = '#0D9488'
                }}
                onMouseOut={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = '#E2E8F0'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(13,148,136,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: '#0D9488',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {project.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      background: '#F1F5F9',
                      color: '#475569',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Publications ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Selected Publications
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '2.5rem' }}>
            Recent Work
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {publications.map((pub) => (
              <div
                key={pub.title}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  alignItems: 'flex-start',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.background = '#F8FAFC' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.background = '#fff' }}
              >
                <div style={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 500, minWidth: '3rem', paddingTop: '2px' }}>
                  {pub.year}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.4rem', lineHeight: 1.5 }}>
                    {pub.title}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#0D9488', fontWeight: 600, fontSize: '0.8rem' }}>{pub.venue}</span>
                    {pub.award && (
                      <span style={{
                        background: 'rgba(13,148,136,0.1)',
                        color: '#0D9488',
                        padding: '0.15rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                      }}>
                        ★ {pub.award}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Expertise
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '2rem' }}>
            Research & Technical Skills
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map(skill => (
              <span
                key={skill}
                style={{
                  padding: '0.5rem 1.1rem',
                  background: '#fff',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '999px',
                  color: '#334155',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.color = '#0D9488'; el.style.background = 'rgba(13,148,136,0.05)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.color = '#334155'; el.style.background = '#fff' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Writing ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Writing
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Recent Posts
              </h2>
            </div>
            <Link to="/blog/" style={{ color: '#0D9488', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>
              All posts →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {recentPosts.map(post => (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                  }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 8px 24px rgba(15,23,42,0.08)'; el.style.borderColor = '#0D9488' }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; el.style.borderColor = '#E2E8F0' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {post.summary}
                  </p>
                  <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.25rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1rem' }}>
            Let's work together
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Interested in collaboration, speaking engagements, or just want to discuss research?
            I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: '#0D9488',
              color: '#fff',
              padding: '0.875rem 2.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#0F766E'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
