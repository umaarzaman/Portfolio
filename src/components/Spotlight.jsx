import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 hidden md:block"
      style={{
        background: `radial-gradient(700px at ${coords.x}px ${coords.y}px, rgba(139, 92, 246, 0.06) 0%, rgba(34, 211, 238, 0.02) 60%, transparent 80%)`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default Spotlight;
