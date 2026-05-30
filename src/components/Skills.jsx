import React from 'react';
import { motion } from 'framer-motion';

const techSkills = [
  { name: 'Python', percentage: 85 },
  { name: 'C (Basics)', percentage: 75 },
  { name: 'HTML & CSS', percentage: 90 },
  { name: 'ERP Systems (Deskera)', percentage: 100 },
  { name: 'ERPNext', percentage: 100 }
];

const softSkills = [
  'Project Management', 'Stakeholder Communication', 'Teamwork',
  'Business Process Analysis', 'Leadership', 'Effective Communication',
  'Critical Thinking', 'Cross-functional Collaboration',
  'Problem Solving', 'Time Management'
];

const Skills = ({ revealUp, staggerContainer }) => {
  return (
    <section id="skills" className="cinematic-section">
      <div className="container">
        <motion.h2 className="section-title" style={{ marginBottom: '1rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
          Skills.
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Tech Skills */}
          <motion.div className="card-expansive" style={{ padding: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {techSkills.map((skill, index) => (
                <motion.div key={index} variants={revealUp}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{skill.name}</span>
                    <span style={{ fontSize: '1.1rem', color: 'var(--accent-1)' }}>{skill.percentage}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{ height: '100%', background: 'var(--accent-1)', borderRadius: '100px' }} 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Soft Skills */}
            <motion.div className="card-expansive" style={{ padding: '2rem', flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Soft Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {softSkills.map((skill, index) => (
                  <motion.div key={index} variants={revealUp} style={{ padding: '0.6rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
