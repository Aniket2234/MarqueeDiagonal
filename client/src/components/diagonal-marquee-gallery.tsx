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
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-20"
      data-testid="diagonal-marquee-gallery"
      style={{
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        transform: 'rotate(15deg)',
        transformOrigin: 'center center'
      }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right-slow {
          animation: scroll-right 45s linear infinite;
        }
        
        .marquee-row {
          margin-bottom: 2rem;
          height: 280px;
          overflow: hidden;
        }
      `}</style>

      {/* Row 1 */}
      <div className="marquee-row">
        <div 
          className="flex gap-8 animate-scroll-left w-full"
          style={{
            transform: 'rotateX(10deg) rotateY(-5deg) translateZ(100px)',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-96 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-1-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee-row">
        <div 
          className="flex gap-8 animate-scroll-right w-full"
          style={{
            transform: 'rotateX(15deg) rotateY(-5deg) rotateZ(10deg) translateZ(60px)',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-96 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-2-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 */}
      <div className="marquee-row">
        <div 
          className="flex gap-8 animate-scroll-left-slow w-full"
          style={{
            transform: 'rotateX(15deg) rotateY(-5deg) rotateZ(10deg) translateZ(30px)',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div key={`row3-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-96 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-3-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 4 */}
      <div className="marquee-row">
        <div 
          className="flex gap-8 animate-scroll-right-slow w-full"
          style={{
            transform: 'rotateX(15deg) rotateY(-5deg) rotateZ(10deg) translateZ(0px)',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {infiniteImages.map((src, index) => (
            <div key={`row4-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-96 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/80 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                data-testid={`image-card-4-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}