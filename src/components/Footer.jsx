import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'rgba(10, 10, 10, 0.8)', 
      borderTop: '1px solid var(--bg-glass-border)',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      backdropFilter: 'blur(10px)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Column 1 */}
          <div>
            <h3 style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Gowtham A V</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              ERP Executive | Jayashree Spun Bond
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} 
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} 
                    onMouseOver={e => e.target.style.color = 'var(--accent-1)'} 
                    onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <a href="https://www.linkedin.com/in/gowtham-vel-murugan/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:gowtham4murugan@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                  Email
                </a>
              </li>
              <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Phone</span></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Actions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <a href="/Gowtham A V_Resume.pdf" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                  View Resume
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-1)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                  View Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            &copy; {new Date().getFullYear()} Gowtham A V. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Based in Madurai, India
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          background: 'var(--accent-1)',
          color: '#fff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
