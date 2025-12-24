import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch('https://api.thesafepulse.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setIsSuccess(false);
        setMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Server error. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/Logo.png" alt="SafePulse Logo" style={{ height: '50px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>SafePulse</span>
          </Link>
        </div>
      </nav>
      
      <div className="container" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div className="glass" style={{ padding: '2.5rem', width: '100%', maxWidth: '550px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Create Account</h2>
            <p style={{ color: '#666' }}>Join the SafePulse rider community</p>
          </div>
          
          {message && <p style={{ color: isSuccess ? '#28a745' : '#ff4d4d', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold' }}>{message}</p>}
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#555', fontSize: '0.9rem' }}>Full Name 👤</label>
                <input 
                  name="fullName"
                  type="text" 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} 
                />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#555', fontSize: '0.9rem' }}>Phone 📱</label>
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="+1 234..."
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} 
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', color: '#555', fontSize: '0.9rem' }}>Email Address 📧</label>
              <input 
                name="email"
                type="email" 
                placeholder="rider@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#555', fontSize: '0.9rem' }}>Password 🔒</label>
                <input 
                  name="password"
                  type="password" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} 
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', color: '#555', fontSize: '0.9rem' }}>Confirm 🔒</label>
                <input 
                  name="confirmPassword"
                  type="password" 
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} 
                />
              </div>
            </div>

            <button type="submit" className="btn" style={{ width: '100%', padding: '14px', fontSize: '1.1rem' }}>Register Now</button>
          </form>
          
          <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#555' }}>
            Already a member? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;