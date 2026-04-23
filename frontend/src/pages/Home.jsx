import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1 }}>
          Campus <span className="text-gradient">Lost & Found</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px' }}>
          Connect with others in the campus to return lost items securely. 
          A simple, premium, and efficient management system for everything misplaced.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Get Started Fast
          </Link>
          <Link to="/login" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Already registered?
          </Link>
        </div>
      </div>

      <div className="grid" style={{ marginTop: '40px' }}>
        <div className="glass-card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ background: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Search size={32} color="white" />
          </div>
          <h3>Easy Tracking</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>Search and filter items reported directly by other students with ease.</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ background: 'var(--secondary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <ShieldCheck size={32} color="white" />
          </div>
          <h3>Secure Authentication</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>Protected using JWT standards to ensure that only you can manage your items.</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ background: 'var(--success)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Zap size={32} color="white" />
          </div>
          <h3>Modern Design</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>Built with state-of-the-art technologies and striking aesthetics to wow the users.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
