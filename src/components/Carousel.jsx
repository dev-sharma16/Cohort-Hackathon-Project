import { useState, useEffect, useRef } from 'react';

const CustomCarousel = ({ 
  images = [], 
  width = "100%", 
  height = "400px", 
  pauseOnHover = true, 
  autoRotateSpeed = 3000,
  showDots = true,
  showArrows = true,
  infiniteLoop = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto rotation effect
  useEffect(() => {
    if (images.length <= 1) return;

    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex(prevIndex => 
            infiniteLoop 
              ? (prevIndex + 1) % images.length
              : prevIndex < images.length - 1 ? prevIndex + 1 : 0
          );
        }
      }, autoRotateSpeed);
    };

    startAutoRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, isPaused, autoRotateSpeed, infiniteLoop]);

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      infiniteLoop
        ? prevIndex === 0 ? images.length - 1 : prevIndex - 1
        : Math.max(0, prevIndex - 1)
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      infiniteLoop
        ? (prevIndex + 1) % images.length
        : Math.min(images.length - 1, prevIndex + 1)
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div 
        className="flex items-center justify-center bg-gray-200 rounded-lg"
        style={{ width, height }}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg"
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Images Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="min-w-full h-full flex-shrink-0"
          >
            <img
              src={image.src || image}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-contain bg-gray-100"
              loading="lazy"
              onError={(e) => {
                console.error(`Failed to load image: ${image.src || image}`);
                e.target.style.display = 'none';
              }}
            />
            {/* Optional caption overlay */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-sm md:text-base">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause/Play Indicator */}
      {pauseOnHover && (
        <div className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs transition-opacity duration-200 ${isPaused ? 'opacity-100' : 'opacity-0'}`}>
          Paused
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;

// Usage Example with your images:
/*
const MyComponent = () => {
  const bkImages = [
    "public/generated-image (1).png",
    "public/Screenshot 2025-07-23 192623.png",
    "public/generated-image.png",
  ];

  return (
    <CustomCarousel
      images={bkImages}
      width="600px"
      height="500px"
      pauseOnHover={true}
      autoRotateSpeed={3000}
      showDots={true}
      showArrows={true}
    />
  );
};
*/