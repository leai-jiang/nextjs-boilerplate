'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-40px' });

  return (
    <div className={`text-center ${className}`} ref={ref}>
      <h2 className="text-[36px] font-semibold text-[#141414]">{title}</h2>
      <motion.div
        className="mt-[2px] w-[80px] h-[2px] bg-gradient-to-r from-blue-200 to-primary mx-auto"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />
      {subtitle && <p className="mt-[24px] text-[#141414] font-[16px] leading-[1.75]">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;