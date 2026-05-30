import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Languages = ({ revealUp, staggerContainer }) => {
  return (
    <section id="languages" className="cinematic-section">
      <div className="container">
        <motion.h2 className="section-title" style={{ marginBottom: '1rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
          Languages.
        </motion.h2>

        <motion.div className="card-expansive" style={{ padding: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.div variants={revealUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', flex: 1, justifyContent: 'center' }}>
              <Globe size={28} color="var(--accent-1)" />
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>English</span>
            </motion.div>
            <motion.div variants={revealUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', flex: 1, justifyContent: 'center' }}>
              <Globe size={28} color="var(--accent-1)" />
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Tamil</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
