import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: About,
})

const researchInterests = [
'Probabilistic Modeling of Natural Hazards',
'Uncertainty Quantification & Reliability Analysis',
'Machine Learning for Engineering Systems',
'Environmental Risk Assessment',
'Structural Damage Identification',
'Data-Driven Decision Support',
'Extreme Events Simulation',
]

const technicalSkills = [
{ category: 'Programming Languages', items: ['Python', 'MATLAB'] },
{ category: 'Machine Learning & Deep Learning', items: ['TensorFlow', 'PyTorch', 'Ensemble Learning', 'Convolutional Neural Networks', 'Scikit-learn'] },
{ category: 'Simulation & FEA', items: ['OpenSees', 'ANSYS', 'Finite Element Analysis'] },
{ category: 'Modeling & Analysis', items: ['Probabilistic Modeling', 'Uncertainty Quantification', 'Reliability Analysis'] },
{ category: 'Domain Expertise', items: ['Seismic Evaluation', 'Environmental Risk Assessment', 'Structural Health Monitoring'] },
]

function About() {
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
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(13,148,136,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#0D9488', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Background & Experience
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
            About Me
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.7, margin: 0 }}>
            Researcher, educator, and open-source contributor focused on designing technology
            that amplifies human curiosity and collaborative potential.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Bio + headshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'start', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#0F172A', marginBottom: '1.25rem', fontWeight: 600 }}>
              Career Summary
            </h2>
            <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.975rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                I am a Postdoctoral Researcher at Central South University, where I work with the School of Resources and Safety Engineering on machine learning and probabilistic modeling for environmental and hazard resilience. My research sits at the intersection of civil engineering, data science, and risk assessment — I design data-driven models that help engineers and decision-makers predict infrastructure performance and environmental risks under extreme events.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                I completed my Ph.D. in Earthquake Engineering at Amirkabir University of Technology. My dissertation developed advanced seismic evaluation models for concrete structures, integrating axial, flexural, and shear interactions, while my recent work expands into uncertainty quantification and AI applications for natural hazards and contamination remediation.

              </p>
              <p>
Beyond research, I care deeply about advancing resilient infrastructure and environmental safety. I have published extensively in Q1/Q2 journals (including the CMES Best Paper Award 2024) and actively mentor graduate students in machine learning applications for hazard and resilience engineering. I strive to bridge the gap between traditional structural engineering and modern data-driven methodologies.

              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:alexchen@mit.edu"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#0D9488', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '7px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.background = '#0F766E'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.background = '#0D9488'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                Email Me
              </a>
              <a href="/cv.pdf" download
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1.5px solid #0D9488', color: '#0D9488', padding: '0.6rem 1.25rem', borderRadius: '7px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', background: 'transparent', transition: 'background 0.2s' }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(13,148,136,0.07)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/headshot-on-white.jpg"
              alt="Dr. Alex Chen"
              style={{ width: '180px', height: '220px', objectFit: 'cover', borderRadius: '12px', display: 'block', boxShadow: '0 8px 24px rgba(15,23,42,0.12)' }}
            />
          </div>
        </div>

        {/* Research Interests */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#0F172A', marginBottom: '1.25rem', fontWeight: 600 }}>
            Research Interests
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {researchInterests.map(interest => (
              <span key={interest} style={{
                padding: '0.45rem 1rem',
                background: '#fff',
                border: '1.5px solid #E2E8F0',
                borderRadius: '999px',
                color: '#334155',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.color = '#0D9488'; el.style.background = 'rgba(13,148,136,0.05)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.color = '#334155'; el.style.background = '#fff' }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#0F172A', marginBottom: '1.5rem', fontWeight: 600 }}>
            Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {allJobs.map((job) => (
              <div key={job.jobTitle} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1.75rem',
                border: '1px solid #E2E8F0',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.boxShadow = '0 4px 16px rgba(13,148,136,0.08)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.15rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                      {job.jobTitle}
                    </h3>
                    <p style={{ color: '#0D9488', fontWeight: 500, fontSize: '0.9rem' }}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span style={{
                    background: '#F1F5F9',
                    color: '#475569',
                    padding: '0.25rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}>
                    {job.startDate.slice(0, 4)} – {job.endDate ? job.endDate.slice(0, 4) : 'Present'}
                  </span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {job.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: job.content ? '1rem' : 0 }}>
                  {job.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(13,148,136,0.08)', color: '#0D9488', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="prose"
                    style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#0F172A', marginBottom: '1.5rem', fontWeight: 600 }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {allEducations.map((education) => (
              <div key={education.school} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1.75rem',
                border: '1px solid #E2E8F0',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0D9488'; el.style.boxShadow = '0 4px 16px rgba(13,148,136,0.08)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E2E8F0'; el.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.15rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.3rem' }}>
                      {education.school}
                    </h3>
                    <p style={{ color: '#0D9488', fontWeight: 500, fontSize: '0.9rem' }}>
                      {education.summary}
                    </p>
                  </div>
                  <span style={{ background: '#F1F5F9', color: '#475569', padding: '0.25rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    {education.startDate.slice(0, 4)} – {education.endDate ? education.endDate.slice(0, 4) : 'Present'}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: education.content ? '1rem' : 0 }}>
                  {education.tags.map(tag => (
                    <span key={tag} style={{ background: '#F1F5F9', color: '#475569', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {education.content && (
                  <div
                    className="prose"
                    style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#0F172A', marginBottom: '1.5rem', fontWeight: 600 }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {technicalSkills.map(({ category, items }) => (
              <div key={category} style={{ background: '#fff', borderRadius: '10px', padding: '1.25rem', border: '1px solid #E2E8F0' }}>
                <h4 style={{ color: '#0D9488', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>
                  {category}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map(item => (
                    <span key={item} style={{ background: '#F1F5F9', color: '#334155', padding: '0.25rem 0.6rem', borderRadius: '5px', fontSize: '0.8rem', fontWeight: 500 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
