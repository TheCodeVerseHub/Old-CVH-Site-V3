'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  animateOnHover?: boolean;
  revealDirection?: "start" | "end" | "center";
}

export default function DecryptedText({ 
  text, 
  speed = 50, 
  maxIterations = 20, 
  className, 
  animateOnHover = true,
  revealDirection = "start" 
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<any>(null);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iteration = 0;

    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setIsScrambling(false);
      }
      
      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
      // Optional: Scramble on mount
      // scramble();
      return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <motion.span 
        className={className} 
        onMouseEnter={animateOnHover ? scramble : undefined}
    >
      {displayText}
    </motion.span>
  );
}
