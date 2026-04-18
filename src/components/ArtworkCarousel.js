import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ArtworkCarousel({ artworks }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {artworks.map((art) => (
        <div key={art.id}>
          <img src={art.imageUrl} alt={art.title} style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }} />
          <p style={{ textAlign: 'center' }}>{art.title}</p>
        </div>
      ))}
    </Slider>
  );
}

export default ArtworkCarousel