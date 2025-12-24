import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/img (4).png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <nav className="glass-nav" style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(15px)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/Logo.png" alt="SafePulse Logo" style={{ height: '50px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>SafePulse</span>
          </Link>
          <div className="nav-links">
            <button onClick={handleLogout} className="btn" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.5)', color: '#fff' }}>Logout</button>
          </div>
        </div>
      </nav>
      
      <div className="container" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="glass" style={{ 
          padding: '4rem', 
          textAlign: 'center', 
          maxWidth: '800px', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h1 style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Dashboard</h1>
          <p style={{ fontSize: '1.8rem', color: '#f0f0f0', fontWeight: '600' }}>Coming Soon</p>
          
          <div style={{ 
            marginTop: '3rem', 
            padding: '15px 30px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: '1.1rem',
            letterSpacing: '1px'
          }}>
            PREPARING YOUR RIDER INSIGHTS HUB
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
