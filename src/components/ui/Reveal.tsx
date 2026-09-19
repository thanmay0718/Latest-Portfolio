import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  width = '100%'
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      };
    }

    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = 35;
    if (direction === 'down') initialY = -35;
    if (direction === 'left') initialX = 35;
    if (direction === 'right') initialX = -35;

    return {
      hidden: { opacity: 0, x: initialX, y: initialY },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.7,
          delay: delay,
          ease: [0.22, 1, 0.36, 1] as const
        }
      }
    };
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
