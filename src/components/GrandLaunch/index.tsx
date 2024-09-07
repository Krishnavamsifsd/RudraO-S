"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import grandLaunch from "../../../public/images/launch/GrandLaunch.jpeg";

const GrandLaunch = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); 

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  // Inline styles for the popup
  const popupStyles = {
    position: 'fixed',
    top: '6%', // Adjust this value for the desired gap from the top
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 50,
  };

  const contentStyles = {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'auto',
  };

  const buttonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const imageWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      {isPopupOpen && (
        <div style={popupStyles}>
          <div style={contentStyles}>
            <button
              style={buttonStyles}
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div style={imageWrapperStyles}>
              <Image
                src={grandLaunch} 
                alt="Grand Launch"
                width={350}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GrandLaunch;
