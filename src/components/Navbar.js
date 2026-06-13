import { NavLink, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/character-design', label: 'Character Design' },
  { to: '/book-illustrations', label: 'Book Illustrations' },
  { to: '/about', label: 'About' },
];

const linkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
  color: 'white',
});

function Navbar() {
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector('a.active');
    if (active) {
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
    }
  }, [location]);

  return (
    <nav ref={navRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-start', gap: '2rem', padding: '1rem 2rem', backgroundColor: 'transparent' }}>
      {links.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} style={linkStyle}>{label}</NavLink>
      ))}
      <div style={{
        position: 'absolute',
        bottom: '0.5rem',
        left: indicator.left,
        width: indicator.width,
        height: '2px',
        backgroundColor: 'currentColor',
        transition: 'left 0.3s ease, width 0.3s ease',
      }} />
    </nav>
  );
}

export default Navbar
