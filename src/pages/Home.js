import { Link } from 'react-router-dom';
import '../App.css';

const pages = [
  { to: '/character-design', emoji: '🎨', label: 'Character Design' },
  { to: '/book-illustrations', emoji: '📖', label: 'Book Illustrations' },
  { to: '/about', emoji: '🙋', label: 'About' },
];

function Home() {
  return (
    <div>
      <h1 style={{ marginLeft: '2rem', color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Home</h1>
      <div className="home-links">
        {pages.map(({ to, emoji, label }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem' }}>{emoji}</div>
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home
