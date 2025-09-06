export default function DiagonalMarqueeGallery() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  ];

  // Create multiple copies for seamless loop
  const extendedImages = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Row 1 - Top diagonal moving left */}
      <div 
        className="absolute top-[-15%] left-[-50%] flex gap-4 animate-marquee-left w-[200%]"
        style={{ 
          transform: 'rotate(-15deg)',
          animationDuration: '80s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-0-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Second diagonal moving right */}
      <div 
        className="absolute top-[5%] right-[-50%] flex gap-4 animate-marquee-right w-[200%]"
        style={{ 
          transform: 'rotate(10deg)',
          animationDuration: '70s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-1-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 3 - Third diagonal moving left */}
      <div 
        className="absolute top-[25%] left-[-50%] flex gap-4 animate-marquee-left w-[200%]"
        style={{ 
          transform: 'rotate(-12deg)',
          animationDuration: '90s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-2-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 4 - Fourth diagonal moving right */}
      <div 
        className="absolute top-[45%] right-[-50%] flex gap-4 animate-marquee-right w-[200%]"
        style={{ 
          transform: 'rotate(18deg)',
          animationDuration: '65s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-3-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 5 - Fifth diagonal moving left */}
      <div 
        className="absolute top-[65%] left-[-50%] flex gap-4 animate-marquee-left w-[200%]"
        style={{ 
          transform: 'rotate(-8deg)',
          animationDuration: '75s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-4-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Row 6 - Sixth diagonal moving right */}
      <div 
        className="absolute top-[85%] right-[-50%] flex gap-4 animate-marquee-right w-[200%]"
        style={{ 
          transform: 'rotate(14deg)',
          animationDuration: '85s'
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-80 h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              data-testid={`image-card-5-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}