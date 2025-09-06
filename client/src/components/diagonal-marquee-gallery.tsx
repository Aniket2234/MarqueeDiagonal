import { useEffect, useRef } from "react";

interface ImageCard {
  src: string;
  alt: string;
  title: string;
}

const imageData: ImageCard[][] = [
  // Row 1 - Moving left
  [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern architecture",
      title: "Modern Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Design workspace",
      title: "Creative Workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Abstract art",
      title: "Abstract Art"
    },
    {
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Sports car",
      title: "Automotive Design"
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Fashion photography",
      title: "Fashion Editorial"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Street art",
      title: "Street Art"
    }
  ],
  // Row 2 - Moving right
  [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Interior design",
      title: "Interior Design"
    },
    {
      src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Luxury watch",
      title: "Product Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "UI design",
      title: "UI/UX Design"
    },
    {
      src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Branding design",
      title: "Brand Identity"
    },
    {
      src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern sculpture",
      title: "Sculpture Art"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern office",
      title: "Office Design"
    }
  ],
  // Row 3 - Moving left
  [
    {
      src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Food photography",
      title: "Food Styling"
    },
    {
      src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Package design",
      title: "Package Design"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Concert photography",
      title: "Event Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Mountain landscape",
      title: "Nature Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Beauty photography",
      title: "Beauty & Makeup"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Ceramic art",
      title: "Ceramics"
    }
  ],
  // Row 4 - Moving right
  [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Editorial design",
      title: "Editorial Design"
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Runway fashion",
      title: "Runway Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Architecture detail",
      title: "Architectural Detail"
    },
    {
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Digital illustration",
      title: "Digital Illustration"
    },
    {
      src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Vintage photography",
      title: "Film Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Hotel interior",
      title: "Hospitality Design"
    }
  ],
  // Row 5 - Moving left
  [
    {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Jewelry design",
      title: "Jewelry Design"
    },
    {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "City skyline",
      title: "Urban Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Woodworking",
      title: "Craftsmanship"
    },
    {
      src: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Textile design",
      title: "Textile Design"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Botanical photography",
      title: "Botanical Art"
    },
    {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Motion graphics",
      title: "Motion Graphics"
    }
  ]
];

const rowConfigs = [
  { rotation: -12, direction: "left", speed: 60, top: "-5%" },
  { rotation: 8, direction: "right", speed: 50, top: "15%" },
  { rotation: -10, direction: "left", speed: 70, top: "35%" },
  { rotation: 15, direction: "right", speed: 55, top: "55%" },
  { rotation: -8, direction: "left", speed: 65, top: "75%" }
];

export default function DiagonalMarqueeGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Performance optimization: Pause animations when not visible
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const marqueeRows = entry.target.querySelectorAll('.marquee-row');
        if (entry.isIntersecting) {
          marqueeRows.forEach((row: Element) => {
            (row as HTMLElement).style.animationPlayState = 'running';
          });
        } else {
          marqueeRows.forEach((row: Element) => {
            (row as HTMLElement).style.animationPlayState = 'paused';
          });
        }
      });
    }, observerOptions);

    observer.observe(container);

    // Respect user's motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.querySelectorAll('.marquee-row').forEach((row: Element) => {
        (row as HTMLElement).style.animationDuration = '120s'; // Slower animation
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="marquee-container"
      data-testid="diagonal-marquee-gallery"
    >
      {rowConfigs.map((config, rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee-row marquee-row-${rowIndex + 1}`}
          style={{
            '--rotation': `${config.rotation}deg`,
            '--speed': `${config.speed}s`,
            top: config.top,
            animationDuration: `${config.speed}s`
          } as React.CSSProperties}
        >
          {/* Duplicate the images to create seamless loop */}
          {[...imageData[rowIndex], ...imageData[rowIndex]].map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="image-card"
              data-testid={`image-card-${rowIndex}-${imageIndex}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <div className="image-overlay">
                <p className="text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
