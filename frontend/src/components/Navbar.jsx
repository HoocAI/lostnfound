import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { LogOut, LayoutDashboard, Search, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar glass">
      <div className="nav-logo">
        <Link to="/" className="text-gradient">Lost & Found</Link>
      </div>
      <div className="nav-links">
        {user ? (
          <>
            <span style={{ color: 'var(--text-muted)' }}>Hello, {user.name}</span>
            <Link to="/dashboard" className="btn btn-secondary">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <button onClick={handleLogout} className="btn btn-danger">
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
