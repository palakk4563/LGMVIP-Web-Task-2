import React from 'react';
import "./loader.css";
const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div className="loader" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;