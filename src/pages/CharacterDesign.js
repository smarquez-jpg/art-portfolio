import { useState, useEffect } from 'react';
import ArtworkCarousel from '../components/ArtworkCarousel';
import { fetchArtworkByCategory } from '../services/api';

function CharacterDesign() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworkByCategory('character-design').then(setArtworks);
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '2rem' }}>Character Design</h1>
      {artworks.length > 0 ? <ArtworkCarousel artworks={artworks} /> : <p style={{ textAlign: 'center' }}>Loading...</p>}
    </div>
  );
}

export default CharacterDesign
