'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
}

export default function TypingText({ text, className = '' }: TypingTextProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={className}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: index * 0.02,
              ease: 'easeInOut',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
} 