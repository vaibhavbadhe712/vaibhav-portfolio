import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TiltCard = React.forwardRef(function TiltCard(
  { children, className = '', maxTilt = 8, glare = true, ...props },
  forwardedRef
) {
  const innerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  // Sync ref with parent if passed
  const setRefs = (element) => {
    innerRef.current = element;
    if (typeof forwardedRef === 'function') {
      forwardedRef(element);
    } else if (forwardedRef) {
      forwardedRef.current = element;
    }
  };

  const handleMouseMove = (e) => {
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotate({ x: rotateX, y: rotateY });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18
      });
    }
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={setRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformPerspective: 1000
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.5
      }}
      className={`relative transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}

      {/* Dynamic Glare Overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), transparent 65%)`
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
});

export default TiltCard;
