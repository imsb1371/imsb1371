import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', color: '#0F172A', marginBottom: '1rem' }}>
            Post not found
          </h1>
          <Link to="/" style={{ color: '#0D9488', textDecoration: 'none', fontWeight: 500 }}>
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Post Header */}
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
          backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(13,148,136,0.08) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '1.5rem', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#0D9488'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
            Back to home
          </Link>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', color: '#0D9488', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94A3B8', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500, color: '#CBD5E1' }}>{post.author}</span>
            <span>·</span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <article>
          <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.75, marginBottom: '2.5rem', fontStyle: 'italic', borderLeft: '3px solid #0D9488', paddingLeft: '1.25rem' }}>
            {post.summary}
          </p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#475569', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#0D9488'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#475569'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
            All posts
          </Link>
          <Link
            to="/contact"
            style={{ color: '#0D9488', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#0F766E'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#0D9488'}
          >
            Discuss this post →
          </Link>
        </div>
      </div>
    </div>
  )
}
