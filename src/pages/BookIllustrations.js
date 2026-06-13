import { useState, useEffect } from 'react';
import ArtworkCarousel from '../components/ArtworkCarousel';
import { fetchArtworkByCategory } from '../services/api';

function BookIllustrations() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworkByCategory('book-illustrations').then(setArtworks);
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '2rem', color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Book Illustrations</h1>
      {artworks.length > 0 ? <ArtworkCarousel artworks={artworks} /> : <p style={{ textAlign: 'center' }}>Loading...</p>}
    </div>
  );
}

export default BookIllustrations
