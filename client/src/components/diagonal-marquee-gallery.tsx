export default function DiagonalMarqueeGallery() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Row 1 - Top diagonal moving left */}
      <div 
        className="absolute top-[-5%] left-[-20%] flex gap-8 animate-marquee-left"
        style={{ 
          transform: 'rotate(-12deg)',
          animationDuration: '60s'
        }}
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-0-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Second diagonal moving right */}
      <div 
        className="absolute top-[15%] right-[-20%] flex gap-8 animate-marquee-right"
        style={{ 
          transform: 'rotate(8deg)',
          animationDuration: '50s'
        }}
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-1-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 3 - Third diagonal moving left */}
      <div 
        className="absolute top-[35%] left-[-20%] flex gap-8 animate-marquee-left"
        style={{ 
          transform: 'rotate(-10deg)',
          animationDuration: '70s'
        }}
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-2-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 4 - Fourth diagonal moving right */}
      <div 
        className="absolute top-[55%] right-[-20%] flex gap-8 animate-marquee-right"
        style={{ 
          transform: 'rotate(15deg)',
          animationDuration: '55s'
        }}
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-3-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 5 - Fifth diagonal moving left */}
      <div 
        className="absolute top-[75%] left-[-20%] flex gap-8 animate-marquee-left"
        style={{ 
          transform: 'rotate(-8deg)',
          animationDuration: '65s'
        }}
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-4-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}