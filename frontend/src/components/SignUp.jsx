import React from 'react';

const SignUp = () => {
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',      /* Vertically centers icon and text */
      justifyContent: 'center',  /* Horizontally centers icon and text */
      gap: '12px',               /* Space between logo and text */
      width: '348px',
      padding: '14px 20px',
      backgroundColor: '#12141c',
      color: '#ffffff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '17px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }}>
      {/* The Logo/Icon */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="3" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>

      {/* The Text */}
      <span>Sign up with Mail</span>
    </button>
  );
};

export default SignUp;