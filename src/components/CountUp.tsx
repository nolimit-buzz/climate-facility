import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
};

const CountUp: React.FC<CountUpProps> = ({ to, duration = 2, className = '' }) => {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | undefined;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setValue(progress * to);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, duration]);

  const formatted =
    to % 1 === 0 ? Math.floor(value).toLocaleString() : value.toFixed(1);

  return (
    <span ref={nodeRef} className={className}>
      {formatted}
    </span>
  );
};

export default CountUp;


