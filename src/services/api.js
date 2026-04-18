const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

export const fetchArtworkByCategory = async (category) => {
  const response = await fetch(
    `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${category}.json`
  );
  if (!response.ok) {
    throw new Error(`Cloudinary list fetch failed: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  if (!data.resources) {
    throw new Error('Cloudinary response missing resources — are images tagged correctly?');
  }
  return data.resources.map((r) => ({
    id: r.public_id,
    title: r.public_id.split('/').pop(),
    imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${r.public_id}`,
  }));
};