import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = ({ revealUp, staggerContainer }) => {
  return (
    <section id="education" className="cinematic-section">
      <div className="container">
        <motion.h2 className="section-title" style={{ marginBottom: '1rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
          Education.
        </motion.h2>
        
        <motion.div 
          className="card-expansive" 
          style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
        >
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 auto' }}>
              <div style={{ height: '60px', width: '60px', borderRadius: '50%', background: 'var(--accent-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={30} color="#fff" />
              </div>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Bachelor of Engineering (B.E.)</h3>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', marginBottom: '0.5rem' }}>Computer Science and Engineering (CSE)</h4>
              
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>K.L.N. College of Engineering</p>
                <p>Sivagangai, Tamil Nadu, India</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '1rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>GPA:</span> 7.85 / 10.0
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                  August 2021 &mdash; May 2025
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
