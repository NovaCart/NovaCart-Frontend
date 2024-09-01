import React from 'react';

interface GalleryProps {
  mainImage: string;
  thumbnails: string[];
}

const Gallery: React.FC<GalleryProps> = ({ mainImage, thumbnails }) => {
  return (
    <div className="flex ml-16 mr-16">
      <div className="flex-1 relative w-1/3 h-1/3">
        <img src={mainImage} alt="Main" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-1/6 flex flex-col justify-between ml-4 space-y-4">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="w-full object-cover rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
