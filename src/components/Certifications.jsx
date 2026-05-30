import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Certifications = ({ revealUp, staggerContainer }) => {
  return (
    <section id="certifications" className="cinematic-section">
      <div className="container">
        <motion.h2 className="section-title" style={{ marginBottom: '1rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
          Certifications.
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {/* AWS Cert */}
          <motion.div 
            className="card-expansive" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={revealUp}
            style={{ padding: '2rem', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--accent-1)' }}
          >
            <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'var(--accent-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <CheckCircle size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>AWS Cloud Foundation</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-1)', marginBottom: '0.5rem', fontWeight: 600 }}>ICT Academy</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>January 2024</p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Certificate of completion in AWS Cloud Foundation covering cloud computing fundamentals, AWS services, and cloud architecture.
              </p>
            </div>
          </motion.div>

          {/* Matlab Cert */}
          <motion.div 
            className="card-expansive" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={revealUp}
            style={{ padding: '2rem', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--accent-1)' }}
          >
            <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'var(--accent-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <CheckCircle size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>Matlab - Onramp, Simulink, Machine Learning, Computer Vision</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-1)', marginBottom: '0.5rem', fontWeight: 600 }}>MathWorks</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>April 2024 & October 2024</p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Comprehensive certifications covering Matlab fundamentals, Simulink modeling, Machine Learning algorithms, and Computer Vision applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
