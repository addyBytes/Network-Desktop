import React from 'react';

const LoginLink = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '20px',
      cursor: 'pointer',
      fontFamily: 'sans-serif'
    }}>
      <span style={{ color: '#6b7280', fontSize: '16px' }}>
        Already have an account?
      </span>
      <span style={{ color: '#111827', fontWeight: '600', fontSize: '16px' }}>
        Log in
      </span>
      {/* Small Arrow Icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  );
};

export default LoginLink;