import { useEffect, useRef, useState } from "react";

export default function DiagonalMarqueeGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Create infinite repeating pattern for smooth scrolling
  const infiniteImages = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        
        .marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        
        .marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        
        .marquee-left-slow {
          animation: marquee-left 60s linear infinite;
        }
        
        .marquee-right-slow {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>

      <div 
        ref={containerRef}
        className="relative w-full h-[120vh] overflow-hidden bg-white"
        data-testid="diagonal-marquee-gallery"
        style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
          transform: 'skewY(-3deg)',
          transformOrigin: 'top left'
        }}
      >
        {/* Row 1 */}
        <div 
          className="absolute w-full flex marquee-left"
          style={{
            top: '5%',
            gap: '2rem',
            paddingLeft: '2rem'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex-shrink-0"
              style={{
                transform: 'skewY(3deg) rotateX(5deg) rotateY(-2deg) translateZ(30px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-1-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div 
          className="absolute w-full flex marquee-right"
          style={{
            top: '30%',
            gap: '2rem',
            paddingRight: '2rem',
            justifyContent: 'flex-end'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex-shrink-0"
              style={{
                transform: 'skewY(3deg) rotateX(5deg) rotateY(2deg) translateZ(20px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-2-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div 
          className="absolute w-full flex marquee-left-slow"
          style={{
            top: '55%',
            gap: '2rem',
            paddingLeft: '2rem'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div 
              key={`row3-${index}`} 
              className="flex-shrink-0"
              style={{
                transform: 'skewY(3deg) rotateX(5deg) rotateY(-1deg) translateZ(10px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-3-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Row 4 */}
        <div 
          className="absolute w-full flex marquee-right-slow"
          style={{
            top: '80%',
            gap: '2rem',
            paddingRight: '2rem',
            justifyContent: 'flex-end'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div 
              key={`row4-${index}`} 
              className="flex-shrink-0"
              style={{
                transform: 'skewY(3deg) rotateX(5deg) rotateY(1deg) translateZ(5px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-4-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}