import React from 'react';
import './Bg.css';

function Bg({ image, children, style, contentStyle }) {
  return (
    <>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${image})`, ...style }}
      />
      <div className="bg-content" style={contentStyle}>
        {children}
      </div>
    </>
  );
}

export default Bg;
