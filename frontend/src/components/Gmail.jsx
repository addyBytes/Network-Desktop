import React from 'react';
// This path goes up one level (..) to assets, then finds the image
import googleLogo from '../assets/google logo.png';
const Gmail = () => {
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '340px',
      padding: '14px 20px',
      backgroundColor: '#ffffff',
      color: '#12141c',
      border: '1px solid #d1d5db',
      borderRadius: '10px', // More rounded like the Google pill style
      fontSize: '17px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      marginBottom: '10px'
    }}>
      {/* Use the imported logo here */}
      <img 
        src={googleLogo} 
        alt="Google Logo" 
        style={{ width: '20px', height: '20px', objectFit: 'contain' }} 
      />
      
      <span>Continue with Gmail</span>
    </button>
  );
};

export default Gmail;