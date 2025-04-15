import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./gallery-component.css"

const Gallery = ({ 
  images,
  title,
  description,
  onImageClick,
  getImageData = (img) => img,
  getFullSizeImage = (img) => img,
  getThumbnail = (img) => img,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'ArrowLeft') {
      showPrevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const showNextImage = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedImage(images[selectedIndex + 1]);
    }
  };

  const showPrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedImage(images[selectedIndex - 1]);
    }
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    if (onImageClick) {
      onImageClick(image, index);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => {
          const thumbnailImage = getThumbnail(image);
          if (!thumbnailImage) return null;
          return (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  openModal(image, index);
                }
              }}
            >
              <GatsbyImage
                image={getImage(thumbnailImage)}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div 
              className="nav-area left"
              onClick={showPrevImage}
              role="button"
              tabIndex={0}
              aria-label="Previous image"
              style={{ visibility: selectedIndex === 0 ? 'hidden' : 'visible' }}
            >
              {selectedIndex > 0 && (
                <GatsbyImage
                  image={getImage(getThumbnail(images[selectedIndex - 1]))}
                  alt="Previous image preview"
                  className="nav-preview"
                />
              )}
            </div>
            
            <GatsbyImage
              image={getImage(getFullSizeImage(selectedImage))}
              alt="Enlarged gallery image"
              className="modal-image"
            />

            <div 
              className="nav-area right"
              onClick={showNextImage}
              role="button"
              tabIndex={0}
              aria-label="Next image"
              style={{ visibility: selectedIndex === images.length - 1 ? 'hidden' : 'visible' }}
            >
              {selectedIndex < images.length - 1 && (
                <GatsbyImage
                  image={getImage(getThumbnail(images[selectedIndex + 1]))}
                  alt="Next image preview"
                  className="nav-preview"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;