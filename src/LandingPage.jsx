import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/Logo.png" alt="SafePulse Logo" style={{ height: '50px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>SafePulse</span>
          </div>
          <div className="nav-links">
            <Link to="/login" className="btn" style={{ background: 'transparent', color: 'var(--text-color)' }}>Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ textAlign: 'center', paddingRight: 0 }}>
            <h1>Ride Smarter. Ride Safer.</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              The ultimate smart helmet attachment for modern motorcyclists. 
              Real-time accident detection, vital monitoring, and hands-free control.
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
            title="Accident Detection" 
            desc="Built-in accelerometer and gyroscope detect collisions instantly."
            icon="🚨"
            img="/images/img (2).png"
          />
          <FeatureCard 
            title="Emergency Alerts" 
            desc="Automatically sends GPS location to emergency contacts and services."
            icon="📍"
            img="/images/img (3).png"
          />
          <FeatureCard 
            title="Vital Monitoring" 
            desc="Tracks heart rate and oxygen levels to ensure rider health."
            icon="💓"
            img="/images/img (4).png"
          />
          <FeatureCard 
            title="Solar Charging" 
            desc="Integrated solar panels for extended battery life on the go."
            icon="☀️"
            img="/images/img (5).png"
          />
        </div>
      </section>

      <section className="container">
        <h2 style={{ fontSize: '2rem' }}>Future Innovations</h2>
        <div className="features-grid">
          <div className="glass feature-card">
            <div className="feature-icon">📊</div>
            <h3>Live Alert Feed</h3>
            <p>"Real-time timestamps and severity levels will appear here"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Biometric Risk Score</h3>
            <p>"AI-driven stress and movement analysis"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Geofence Map</h3>
            <p>"Advanced route monitoring and deviation alerts"</p>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon">📋</div>
            <h3>Safeguarding Logs</h3>
            <p>"Exportable reports for Ofsted and KCSIE compliance audits"</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '2rem' }}>
        <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Strategic Vision</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>The Challenge</h3>
              <p style={{ fontSize: '1.05rem', color: '#555' }}>
                Every year, thousands of motorcyclists are involved in road accidents. Delay in emergency response 
                and lack of vital monitoring are critical factors that SafePulse is designed to solve.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Our Solution</h3>
              <p style={{ fontSize: '1.05rem', color: '#555' }}>
                By integrating advanced sensors and AI into a universal helmet attachment, SafePulse ensures 
                that no rider is ever alone. Our mission is to reduce response times by 50% and save lives through 
                proactive technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ margin: '5rem auto', textAlign: 'center' }}>
        <div className="glass" style={{ padding: '3rem' }}>
          <h2>Our Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
            At SafePulse, we believe every ride should be a safe one. Our technology bridges the gap between 
            the thrill of motorcycling and the safety of modern automotive tech. Join us in revolutionizing 
            road safety.
          </p>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <div className="glass" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Join the Global Community</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f0f0f0' }}>
              Be among the first riders worldwide to test our AI-driven safety engine.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '2rem' }}>
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
