import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, start = 0, suffix = '', prefix = '', className = '' }) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const animateCount = () => {
    let startTime = null;
    const startValue = start;
    const endValue = typeof end === 'string' ? parseInt(end) : end;
    
    if (isNaN(endValue)) {
      setCount(end); // If it's not a number (like "24/7"), just set it directly
      return;
    }

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  };

  const displayValue = typeof end === 'string' && isNaN(parseInt(end)) ? end : count;

  return (
    <div ref={elementRef} className={className}>
      {prefix}{displayValue}{suffix}
    </div>
  );
};

export default CountUp;