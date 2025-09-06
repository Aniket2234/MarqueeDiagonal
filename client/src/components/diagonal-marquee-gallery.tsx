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
      className="relative w-full h-screen overflow-hidden bg-white z-10"
      data-testid="diagonal-marquee-gallery"
      style={{
        transform: 'perspective(2000px) rotateX(20deg) rotateY(-10deg) rotateZ(5deg)',
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
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
      `}</style>

      {/* Row 1 - Top */}
      <div 
        className="absolute flex gap-8 animate-scroll-left"
        style={{
          top: '1%',
          left: '0%',
          width: '200%',
          transform: 'rotate(15deg) translateZ(100px)',
          transformOrigin: 'left center',
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

      {/* Row 2 */}
      <div 
        className="absolute flex gap-8 animate-scroll-right"
        style={{
          top: '26%',
          left: '-100%',
          width: '200%',
          transform: 'rotate(15deg) translateZ(60px)',
          transformOrigin: 'left center',
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

      {/* Row 3 */}
      <div 
        className="absolute flex gap-8 animate-scroll-left-slow"
        style={{
          top: '51%',
          left: '0%',
          width: '200%',
          transform: 'rotate(15deg) translateZ(30px)',
          transformOrigin: 'left center',
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

      {/* Row 4 - Bottom */}
      <div 
        className="absolute flex gap-8 animate-scroll-right-slow"
        style={{
          top: '76%',
          left: '-100%',
          width: '200%',
          transform: 'rotate(15deg) translateZ(0px)',
          transformOrigin: 'left center',
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
  );
}