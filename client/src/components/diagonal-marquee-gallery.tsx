export default function DiagonalMarqueeGallery() {
  // High quality design images for the gallery
  const imageUrls = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  // Triple the images for seamless infinite scroll
  const infiniteImages = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      data-testid="diagonal-marquee-gallery"
    >
      {/* Diagonal Row 1 - Top Left to Bottom Right */}
      <div 
        className="diagonal-row diagonal-row-1"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-30%',
          width: '180%',
          transform: 'rotate(25deg)',
          display: 'flex',
          gap: '2rem',
          animation: 'slideRightToLeft 100s linear infinite'
        }}
      >
        {infiniteImages.map((src, index) => (
          <div key={`row1-${index}`} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-96 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              data-testid={`image-card-1-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Diagonal Row 2 */}
      <div 
        className="diagonal-row diagonal-row-2"
        style={{
          position: 'absolute',
          top: '10%',
          left: '-30%',
          width: '180%',
          transform: 'rotate(25deg)',
          display: 'flex',
          gap: '2rem',
          animation: 'slideLeftToRight 120s linear infinite'
        }}
      >
        {infiniteImages.map((src, index) => (
          <div key={`row2-${index}`} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-96 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              data-testid={`image-card-2-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Diagonal Row 3 */}
      <div 
        className="diagonal-row diagonal-row-3"
        style={{
          position: 'absolute',
          top: '40%',
          left: '-30%',
          width: '180%',
          transform: 'rotate(25deg)',
          display: 'flex',
          gap: '2rem',
          animation: 'slideRightToLeft 90s linear infinite'
        }}
      >
        {infiniteImages.map((src, index) => (
          <div key={`row3-${index}`} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-96 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              data-testid={`image-card-3-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Diagonal Row 4 */}
      <div 
        className="diagonal-row diagonal-row-4"
        style={{
          position: 'absolute',
          top: '70%',
          left: '-30%',
          width: '180%',
          transform: 'rotate(25deg)',
          display: 'flex',
          gap: '2rem',
          animation: 'slideLeftToRight 110s linear infinite'
        }}
      >
        {infiniteImages.map((src, index) => (
          <div key={`row4-${index}`} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-96 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              data-testid={`image-card-4-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Diagonal Row 5 */}
      <div 
        className="diagonal-row diagonal-row-5"
        style={{
          position: 'absolute',
          top: '100%',
          left: '-30%',
          width: '180%',
          transform: 'rotate(25deg)',
          display: 'flex',
          gap: '2rem',
          animation: 'slideRightToLeft 95s linear infinite'
        }}
      >
        {infiniteImages.map((src, index) => (
          <div key={`row5-${index}`} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-96 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              data-testid={`image-card-5-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}