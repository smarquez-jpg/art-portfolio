import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterDesign from './pages/CharacterDesign';
import BookIllustrations from './pages/BookIllustrations';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
<Navbar />
      <div style={{ paddingTop: '3.5rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-design" element={<CharacterDesign />} />
        <Route path="/book-illustrations" element={<BookIllustrations />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
