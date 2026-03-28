import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

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
          backgroundImage: 'radial-gradient(circle at 65% 35%, rgba(13,148,136,0.08) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Writing
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
            Blog & Thoughts
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '500px', lineHeight: 1.7, margin: 0 }}>
            Essays on research methods, HCI, AI tools, and the craft of doing science.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <Link
              key={post._meta.path}
              to="/blog/$slug"
              params={{ slug: post._meta.path }}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.boxShadow = '0 6px 20px rgba(13,148,136,0.09)'; el.style.transform = 'translateY(-2px)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                  {post.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(13,148,136,0.08)', color: '#0D9488', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                  {post.title}
                </h2>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {post.summary}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    {' · '}
                    {post.author}
                  </span>
                  <span style={{ color: '#0D9488', fontSize: '0.85rem', fontWeight: 500 }}>Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
