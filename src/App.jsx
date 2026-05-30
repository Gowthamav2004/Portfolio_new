import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Mail, ExternalLink, Briefcase, Award, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import Hero3D from './components/Hero3D';
import TechBackground from './components/TechBackground';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

const revealUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  const carouselRef = useRef(null);
  const experienceCarouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollExperienceCarousel = (direction) => {
    if (experienceCarouselRef.current) {
      const scrollAmount = experienceCarouselRef.current.clientWidth;
      experienceCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <SideNav />

      {/* Fixed Right Social Bar */}
      <div className="social-bar-desktop" style={{ position: 'fixed', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 99, display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
        <a href="https://www.instagram.com/the._gowthxm/" target="_blank" rel="noreferrer" title="Instagram"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 15px rgba(220,39,67,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-4px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(220,39,67,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(220,39,67,0.35)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://wa.me/919994351758" target="_blank" rel="noreferrer" title="WhatsApp"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #25d366, #128c4e)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 15px rgba(37,211,102,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-4px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,211,102,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.35)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="mailto:gowtham4murugan@gmail.com" title="Email"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #ea4335, #b31404)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 15px rgba(234,67,53,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-4px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(234,67,53,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(234,67,53,0.35)'; }}
        >
          <Mail color="white" size={20} />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/gowtham-vel-murugan" target="_blank" rel="noreferrer" title="LinkedIn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #0077b5, #005885)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 15px rgba(0,119,181,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-4px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,119,181,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,119,181,0.35)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '1.5rem 0', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--bg-glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/gv-logo.png" alt="GV Logo" style={{ height: '32px', width: 'auto', borderRadius: '6px' }} />
            Gowtham A V
          </div>
          
          {/* Desktop Right (Resume) & Mobile Right (Hamburger) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="/Gowtham A V_Resume.pdf" target="_blank" rel="noreferrer" className="btn side-nav-desktop" style={{ padding: '0.6rem 1.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
              Resume
            </a>
            <button 
              className="hamburger-btn" 
              onClick={() => document.getElementById('hamburger-trigger')?.click()}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Massive Hero Section */}
        <motion.section 
          style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', opacity: heroOpacity, scale: heroScale, paddingTop: '80px', overflow: 'hidden', perspective: '1000px' }}
        >
          <Hero3D />
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              
              {/* Left Column: Text */}
              <motion.div initial="hidden" animate="visible" variants={revealUp} style={{ flex: '1 1 400px', maxWidth: '700px' }}>
                <h1 className="super-title" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
                  Engineering <br />
                  <span className="gradient-text">Enterprise Scale.</span>
                </h1>
                <p className="massive-text" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', marginBottom: '2rem', maxWidth: '600px' }}>
                  I am Gowtham A V. I architect ERP ecosystems, streamline business intelligence, and write code that powers modern infrastructure.
                </p>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <a href="#experience" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                    Explore Work <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Scaled Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ flex: '0 1 350px', display: 'flex', justifyContent: 'center', position: 'relative', perspective: '1000px' }}
              >
                {/* Background Glow for Image */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%)', zIndex: -1, filter: 'blur(30px)' }} />
                
                {/* Interactive 3D Image Container */}
                <motion.div 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d",
                    position: 'relative', 
                    width: '100%', 
                    maxWidth: '350px', 
                    aspectRatio: '4/5', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src="/profile.jpg" 
                    alt="Gowtham A V" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(0.9)', pointerEvents: 'none' }} 
                  />
                  {/* Subtle overlay gradient */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', pointerEvents: 'none' }} />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* Main Content Area */}
        <div style={{ position: 'relative' }}>
          <TechBackground />
          
          {/* Expansive Experience Section */}
          <section id="experience" className="cinematic-section">
            <div className="container" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <motion.h2 className="section-title" style={{ marginBottom: 0 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
                  Career Trajectory.
                </motion.h2>
                
                {/* Carousel Navigation Arrows */}
                <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
                  <button onClick={() => scrollExperienceCarousel('left')} className="btn" style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50%' }}>
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={() => scrollExperienceCarousel('right')} className="btn" style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50%' }}>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              
              <div style={{ overflow: 'hidden', borderRadius: '1rem' }}>
              <div 
                ref={experienceCarouselRef}
                style={{ 
                  display: 'flex', 
                  gap: 0,
                  overflowX: 'auto', 
                  scrollSnapType: 'x mandatory', 
                  paddingBottom: '2rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                className="hide-scrollbar"
              >
                
                {/* ERP Executive Card */}
                <motion.div 
                  className="card-expansive" 
                  style={{ padding: '2.5rem', width: '100%', flex: '0 0 100%', scrollSnapAlign: 'center', boxSizing: 'border-box' }}
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={staggerContainer}
                >
                  <motion.div variants={revealUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <img src="/jayashree-logo.png" alt="Jayashree Spun Bond Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                        <h3 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.03em' }}>Jayashree Spun Bond</h3>
                      </div>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginLeft: '4rem' }}>
                        <span style={{ color: 'var(--accent-1)', fontWeight: 600 }}>ERP Executive</span> &bull; Bangalore, India
                      </p>
                    </div>
                    <div style={{ padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--accent-1)' }}>
                      June 2025 &mdash; Present
                    </div>
                  </motion.div>
                  <motion.div variants={revealUp}>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                      Currently driving the end-to-end development of the ERPNext software from January. Previously spearheaded daily Deskera ERP operations across critical departments including production, inventory management, and B2B sales. Successfully architected custom system configurations to seamlessly synchronize multiple disparate operational units into a single unified dashboard.
                    </p>
                  </motion.div>
                </motion.div>

                {/* ERP Trainee Card */}
                <motion.div 
                  className="card-expansive" 
                  style={{ padding: '2.5rem', width: '100%', flex: '0 0 100%', scrollSnapAlign: 'center', boxSizing: 'border-box' }}
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={staggerContainer}
                >
                  <motion.div variants={revealUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <img src="/jayashree-logo.png" alt="Jayashree Spun Bond Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                        <h3 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.03em' }}>Jayashree Spun Bond</h3>
                      </div>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginLeft: '4rem' }}>
                        <span style={{ color: 'var(--accent-1)', fontWeight: 600 }}>ERP Implementation Trainee</span> &bull; Bangalore, India
                      </p>
                    </div>
                    <div style={{ padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--accent-1)' }}>
                      Oct 2024 &mdash; May 2025
                    </div>
                  </motion.div>
                  <motion.div variants={revealUp}>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                      Mastered complex product code conventions for the Material Master database, effectively deployed CRM Sales Operations modules, and performed rigorous audits to secure accounting transaction integrity during the critical initial rollout phase.
                    </p>
                  </motion.div>
                </motion.div>

              </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <Education revealUp={revealUp} staggerContainer={staggerContainer} />

          {/* Skills Section */}
          <Skills revealUp={revealUp} staggerContainer={staggerContainer} />

          {/* Languages Section */}
          <Languages revealUp={revealUp} staggerContainer={staggerContainer} />

          {/* Certifications Section */}
          <Certifications revealUp={revealUp} staggerContainer={staggerContainer} />

          {/* Massive Projects Section */}
          <section id="projects" className="cinematic-section">
            <div className="container" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <motion.h2 className="section-title" style={{ marginBottom: 0 }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
                  Featured Engineering.
                </motion.h2>
                
                {/* Carousel Navigation Arrows */}
                <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
                  <button onClick={() => scrollCarousel('left')} className="btn" style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50%' }}>
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={() => scrollCarousel('right')} className="btn" style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50%' }}>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div 
                ref={carouselRef}
                style={{ 
                  display: 'flex', 
                  gap: '2rem', 
                  overflowX: 'auto', 
                  scrollSnapType: 'x mandatory', 
                  paddingBottom: '2rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                className="hide-scrollbar"
              >
                {/* Project 1 */}
                <motion.div 
                  className="card-expansive" 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={revealUp} 
                  style={{ position: 'relative', overflow: 'hidden', minWidth: '100%', flex: '0 0 auto', scrollSnapAlign: 'center', padding: '3rem' }}
                >
                  <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <Award size={40} color="var(--accent-1)" style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>License Plate Recognition AI</h3>
                    <p className="massive-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                      An advanced Machine Learning pipeline utilizing OCR and K-Nearest Neighbors to instantly verify vehicle identities from raw optical data.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {['Python', 'Machine Learning', 'OCR', 'KNN'].map(tech => (
                        <span key={tech} style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '1rem' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div 
                  className="card-expansive" 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={revealUp} 
                  style={{ position: 'relative', overflow: 'hidden', minWidth: '100%', flex: '0 0 auto', scrollSnapAlign: 'center', padding: '3rem' }}
                >
                  <div style={{ position: 'absolute', bottom: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <Terminal size={40} color="var(--accent-3)" style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Intelligent Job Recommender</h3>
                    <p className="massive-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                      A robust algorithmic platform that cross-references candidate datapoints against live market requirements using dynamic weightage systems.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {['Python', 'Web Development', 'Algorithms'].map(tech => (
                        <span key={tech} style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '1rem' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Grand Footer/Contact */}
          <section id="contact" className="cinematic-section" style={{ minHeight: '60vh', textAlign: 'center' }}>
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealUp}>
                <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.04em' }}>Let's Talk.</h2>
                <p className="massive-text" style={{ margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
                  Open for opportunities where technical precision meets enterprise scale.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <a href="mailto:gowtham4murugan@gmail.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.5rem 3rem' }}>
                    <Mail size={24} /> Email Me
                  </a>
                  <a href="https://www.linkedin.com/in/gowtham-vel-murugan/" target="_blank" rel="noreferrer" className="btn" style={{ fontSize: '1.2rem', padding: '1.5rem 3rem', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                    <ExternalLink size={24} /> LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
