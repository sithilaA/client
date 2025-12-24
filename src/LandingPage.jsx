import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <nav className="glass-nav" style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(15px)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/Logo.png" alt="SafePulse Logo" style={{ height: '50px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>SafePulse</span>
          </div>
          <div className="nav-links">
            <Link to="/login" className="btn" style={{ background: 'transparent', color: '#fff' }}>Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ textAlign: 'center', paddingRight: 0 }}>
            <h1>When Every Heartbeat Matters.</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              The ultimate proactive safety wristband for children and vulnerable individuals. 
              Real-time distress detection, biometric monitoring, and tamper-aware technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#contact" className="btn">Get SafePulse</a>
              <a href="#features" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container">
        <h2>Advanced Safety Features</h2>
        <div className="features-grid">
          <FeatureCard 
            title="Biometric Risk Detection" 
            desc="AI-driven analysis of heart rate variability and motion to detect distress instantly."
            icon="💓"
            img="/images/img (2).png"
          />
          <FeatureCard 
            title="Tamper Detection" 
            desc="Patented breakaway strap sensors trigger alerts if forcibly removed or broken."
            icon="🔒"
            img="/images/img (3).png"
          />
          <FeatureCard 
            title="Proactive Alerts" 
            desc="Predictive notifications for parents and schools before incidents escalate."
            icon="⚡"
            img="/images/img (4).png"
          />
          <FeatureCard 
            title="Privacy First" 
            desc="Fully compliant with Children’s Code and GDPR. Data security by design."
            icon="🛡️"
            img="/images/img (5).png"
          />
        </div>
      </section>

      <section className="container">
        <h2 style={{ fontSize: '2rem' }}>Future Innovations</h2>
        <div className="features-grid">
          <div className="glass feature-card">
            <div className="feature-icon">📊</div>
            <h3>School Dashboards</h3>
            <p>"Real-time safeguarding logs and attendance monitoring"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI Stress Modeling</h3>
            <p>"Adaptive risk scoring based on individual behavioral patterns"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Route Analysis</h3>
            <p>"Machine learning detection of unusual travel deviations"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">📋</div>
            <h3>Compliance Logs</h3>
            <p>"Exportable reports for compliance audits"</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ margin: '5rem auto', textAlign: 'center' }}>
        <div className="glass" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our Mission</h2>
          <p style={{ maxWidth: '850px', margin: '0 auto 3rem', fontSize: '1.2rem', color: '#333', fontWeight: '500' }}>
            SafePulse is an innovative safety technology venture combining smart hardware with AI-driven analytics. 
            We address the critical global gap in personal protection by moving beyond reactive tracking to proactive, 
            biometric-led safeguarding for children and vulnerable individuals.
          </p>
          
          <div className="strategic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>The Challenge</h3>
              <p style={{ fontSize: '1.05rem', color: '#555' }}>
                Traditional tracking devices are reactive, alerting only after a child goes missing. They fail to detect 
                physiological stress, panic, or forced removal, leaving a critical gap in safeguarding children, 
                especially those with SEND.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Our Solution</h3>
              <p style={{ fontSize: '1.05rem', color: '#555' }}>
                SafePulse transforms standard wearables into active safety tools. By combining a tamper-sensing 
                breakaway strap with AI that analyzes heart rate and motion, we provide real-time, predictive 
                alerts that enable early intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <div className="glass" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Join the Global Community</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f0f0f0' }}>
              Be among the first riders worldwide to test our AI-driven safety engine.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/login" className="btn" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                Login
              </Link>
              <Link to="/register" className="btn" style={{ padding: '15px 40px', fontSize: '1.1rem', background: 'transparent', border: '2px solid #fff', color: '#fff' }}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 SafePulse Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon, img }) {
  return (
    <div className="glass feature-card">
      <div style={{ height: '150px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1rem' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default LandingPage;