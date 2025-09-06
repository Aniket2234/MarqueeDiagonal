import { useEffect, useRef, useState } from "react";

export default function DiagonalMarqueeGallery() {
  const [scrollDirection, setScrollDirection] = useState<'forward' | 'backward' | 'none'>('forward');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1);
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

  // Triple the images for seamless infinite scroll
  const infiniteImages = [...imageUrls, ...imageUrls, ...imageUrls];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const container = containerRef.current;
      
      if (!container) return;

      // Get container position
      const containerRect = container.getBoundingClientRect();
      const containerVisible = containerRect.top < window.innerHeight && containerRect.bottom > 0;
      
      if (containerVisible) {
        const scrollDelta = currentScrollY - lastScrollY;
        
        if (Math.abs(scrollDelta) > 2) {
          if (scrollDelta > 0) {
            setScrollDirection('forward');
          } else {
            setScrollDirection('backward');
          }
          
          // Adjust speed based on scroll intensity
          const speedMultiplier = Math.min(Math.abs(scrollDelta) / 10, 3);
          setAnimationSpeed(speedMultiplier);
          
          setLastScrollY(currentScrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      data-testid="diagonal-marquee-gallery"
    >
      {/* Diagonal Row 1 */}
      <div 
        className="diagonal-row-container"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-50%',
          width: '200%',
          height: '15%',
          transform: 'rotate(18deg)',
          transformOrigin: 'center center'
        }}
      >
        <div className="diagonal-row animate-forward" style={{
          display: 'flex',
          gap: '1.5rem',
          animationDuration: '60s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}>
          {infiniteImages.map((src, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl shadow-lg"
                data-testid={`image-card-1-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Row 2 */}
      <div 
        className="diagonal-row-container"
        style={{
          position: 'absolute',
          top: '15%',
          left: '-50%',
          width: '200%',
          height: '15%',
          transform: 'rotate(18deg)',
          transformOrigin: 'center center'
        }}
      >
        <div className="diagonal-row animate-backward" style={{
          display: 'flex',
          gap: '1.5rem',
          animationDuration: '80s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}>
          {infiniteImages.map((src, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl shadow-lg"
                data-testid={`image-card-2-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Row 3 */}
      <div 
        className="diagonal-row-container"
        style={{
          position: 'absolute',
          top: '40%',
          left: '-50%',
          width: '200%',
          height: '15%',
          transform: 'rotate(18deg)',
          transformOrigin: 'center center'
        }}
      >
        <div className="diagonal-row animate-forward" style={{
          display: 'flex',
          gap: '1.5rem',
          animationDuration: '70s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}>
          {infiniteImages.map((src, index) => (
            <div key={`row3-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl shadow-lg"
                data-testid={`image-card-3-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Row 4 */}
      <div 
        className="diagonal-row-container"
        style={{
          position: 'absolute',
          top: '65%',
          left: '-50%',
          width: '200%',
          height: '15%',
          transform: 'rotate(18deg)',
          transformOrigin: 'center center'
        }}
      >
        <div className="diagonal-row animate-backward" style={{
          display: 'flex',
          gap: '1.5rem',
          animationDuration: '90s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}>
          {infiniteImages.map((src, index) => (
            <div key={`row4-${index}`} className="flex-shrink-0">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl shadow-lg"
                data-testid={`image-card-4-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}