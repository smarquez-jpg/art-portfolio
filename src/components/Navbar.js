import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid currentColor' : '2px solid transparent',
});

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem', padding: '1rem 2rem' }}>
      <NavLink to="/" end style={linkStyle}>Paintings</NavLink>
      <NavLink to="/illustrations" style={linkStyle}>Illustrations</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}

export default Navbar