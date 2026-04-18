import { useState, useEffect } from 'react';
import ArtworkCarousel from '../components/ArtworkCarousel';
import { fetchArtworkByCategory } from '../services/api';

function Illustrations() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworkByCategory('illustrations').then(setArtworks);
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '2rem' }}>Illustrations</h1>
      {artworks.length > 0 ? <ArtworkCarousel artworks={artworks} /> : <p style={{ textAlign: 'center' }}>Loading...</p>}
    </div>
  );
}

export default Illustrations